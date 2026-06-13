from typing import TypedDict, Optional, Any, Dict
from langgraph.graph import StateGraph, END
from loguru import logger
import json

from config.llm import generate_chat_completion
from repository.trip_plan_repository import update_trip_plan_status

# Tool imports
from tools.google_flight import get_google_flights
from tools.kayak_hotel import kayak_hotel_url_generator
from tools.scrape import scrape_website

class TripPlanningState(TypedDict):
    trip_plan_id: str
    travel_request_md: str
    destination: str
    
    # Outputs from agents
    destination_research: Optional[str]
    flights: Optional[str]
    hotels: Optional[str]
    restaurants: Optional[str]
    itinerary: Optional[str]
    budget: Optional[str]
    
    # Combined context for subsequent steps
    accumulated_content: Optional[str]
    
    # Final combined JSON
    final_output: Optional[str]


# Node 1: Destination Research
async def destination_node(state: TripPlanningState) -> Dict[str, Any]:
    trip_plan_id = state["trip_plan_id"]
    logger.info(f"[LangGraph Node] Destination Research for trip: {trip_plan_id}")
    
    await update_trip_plan_status(
        trip_plan_id=trip_plan_id,
        status="processing",
        current_step="Researching about the destination",
    )
    
    prompt = f"""
    Please research about the destination {state['destination']}

    Below are the user's travel preferences:
    {state['travel_request_md']}

    Provide detailed research about the destination, its top attractions, classic tourist landmarks, family-friendly experiences, and important visitor tips.
    Output 10 structured attractions or activities.
    """
    
    system_instruction = (
        "You are a destination research expert. Focus on mainstream tourist attractions, classic sightseeing, "
        "and family-friendly activities. Detail opening hours, typical entrance fees, and visit duration tips."
    )
    
    content = await generate_chat_completion(prompt, system_instruction=system_instruction)
    
    accumulated = f"""
    ## Destination Attractions:
    ---
    {content}
    ---
    """
    return {
        "destination_research": content,
        "accumulated_content": accumulated
    }


# Node 2: Flight Search
async def flight_node(state: TripPlanningState) -> Dict[str, Any]:
    trip_plan_id = state["trip_plan_id"]
    logger.info(f"[LangGraph Node] Flight Search for trip: {trip_plan_id}")
    
    await update_trip_plan_status(
        trip_plan_id=trip_plan_id,
        status="processing",
        current_step="Searching for the best flights",
    )
    
    # Extract flight query parameters from the state
    extract_prompt = f"""
    Extract the following parameters from the travel request:
    - departure_airport (e.g. DEL, NRT)
    - destination_airport (e.g. HND, JFK)
    - date (YYYY-MM-DD format, estimate based on preferences if not specified)
    - adults (default 1)
    - children (default 0)

    Travel preferences:
    {state['travel_request_md']}

    Respond ONLY with a JSON block like:
    {{"departure_airport": "...", "destination_airport": "...", "date": "...", "adults": 1, "children": 0}}
    """
    
    try:
        json_res = await generate_chat_completion(extract_prompt, system_instruction="Extract JSON variables.")
        # Strip code blocks if any
        if "```json" in json_res:
            json_res = json_res.split("```json")[1].split("```")[0].strip()
        elif "```" in json_res:
            json_res = json_res.split("```")[1].split("```")[0].strip()
        params = json.loads(json_res)
    except Exception as e:
        logger.error(f"Error extracting flight params, using defaults: {e}")
        params = {
            "departure_airport": "DEL",
            "destination_airport": "NRT",
            "date": "2026-08-01",
            "adults": 1,
            "children": 0
        }
        
    # Execute direct tool search
    logger.info(f"Executing Google Flight Tool: {params}")
    flights_list = get_google_flights.entrypoint(
        departure=params.get("departure_airport", "DEL"),
        destination=params.get("destination_airport", "NRT"),
        date=params.get("date", "2026-08-01"),
        adults=params.get("adults", 1),
        children=params.get("children", 0)
    )
    
    prompt = f"""
    Based on the Google Flights search results: {flights_list}
    And the user's travel preferences:
    {state['travel_request_md']}

    Format and rank the top 5 flights detailing airline, flight number, times, duration, price, and layovers.
    """
    
    content = await generate_chat_completion(
        prompt, 
        system_instruction="You are a flight analysis assistant. Organize flight options showing pricing, cabin class, and duration."
    )
    
    accumulated = state.get("accumulated_content", "") + f"""
    ## Flight recommendations:
    ---
    {content}
    ---
    """
    return {
        "flights": content,
        "accumulated_content": accumulated
    }


# Node 3: Hotel Search
async def hotel_node(state: TripPlanningState) -> Dict[str, Any]:
    trip_plan_id = state["trip_plan_id"]
    logger.info(f"[LangGraph Node] Hotel Search for trip: {trip_plan_id}")
    
    await update_trip_plan_status(
        trip_plan_id=trip_plan_id,
        status="processing",
        current_step="Searching for the best hotels",
    )
    
    # Extract hotel query parameters from the state
    extract_prompt = f"""
    Extract the following parameters from the travel request:
    - destination (city name)
    - check_in (YYYY-MM-DD format)
    - check_out (YYYY-MM-DD format)
    - adults (default 1)
    - children (default 0)
    - rooms (default 1)

    Travel preferences:
    {state['travel_request_md']}

    Respond ONLY with a JSON block like:
    {{"destination": "...", "check_in": "...", "check_out": "...", "adults": 1, "children": 0, "rooms": 1}}
    """
    
    try:
        json_res = await generate_chat_completion(extract_prompt, system_instruction="Extract JSON variables.")
        if "```json" in json_res:
            json_res = json_res.split("```json")[1].split("```")[0].strip()
        elif "```" in json_res:
            json_res = json_res.split("```")[1].split("```")[0].strip()
        params = json.loads(json_res)
    except Exception as e:
        logger.error(f"Error extracting hotel params, using defaults: {e}")
        params = {
            "destination": state["destination"],
            "check_in": "2026-08-01",
            "check_out": "2026-08-07",
            "adults": 1,
            "children": 0,
            "rooms": 1
        }
        
    # Generate search url
    search_url = kayak_hotel_url_generator.entrypoint(
        destination=params.get("destination", state["destination"]),
        check_in=params.get("check_in", "2026-08-01"),
        check_out=params.get("check_out", "2026-08-07"),
        adults=params.get("adults", 1),
        children=params.get("children", 0),
        rooms=params.get("rooms", 1)
    )
    
    # Fetch hotel results
    hotel_info = ""
    try:
        logger.info(f"Scraping hotel search results from: {search_url}")
        hotel_info = scrape_website.entrypoint(search_url)
    except Exception as e:
        logger.warning(f"Failed to scrape hotel page, falling back to simulated listing: {e}")
        
    prompt = f"""
    Create a list of top 5 recommended hotels for a trip to {state['destination']}.
    User preferences:
    {state['travel_request_md']}
    
    Scraped Hotel Page Context:
    {hotel_info if hotel_info else "No direct page details available. Recommend top hotels using local knowledge."}

    Highlight hotel name, pricing range, ratings, amenities, and booking link ({search_url}).
    """
    
    content = await generate_chat_completion(
        prompt,
        system_instruction="You are a hotel search assistant. Structure hotel lists detailing star rating, prices, and amenities."
    )
    
    accumulated = state.get("accumulated_content", "") + f"""
    ## Hotel recommendations:
    ---
    {content}
    ---
    """
    return {
        "hotels": content,
        "accumulated_content": accumulated
    }


# Node 4: Restaurant Search
async def restaurant_node(state: TripPlanningState) -> Dict[str, Any]:
    trip_plan_id = state["trip_plan_id"]
    logger.info(f"[LangGraph Node] Restaurant Search for trip: {trip_plan_id}")
    
    await update_trip_plan_status(
        trip_plan_id=trip_plan_id,
        status="processing",
        current_step="Searching for the best restaurants",
    )
    
    prompt = f"""
    Please find culinary highlights and restaurants for a trip to {state['destination']}.
    User preferences:
    {state['travel_request_md']}

    List top 5 restaurants detailing cuisine style, price level ($, $$, $$$), location, operating times, and menu recommendations.
    Include 2 local food markets or culinary street experiences.
    """
    
    content = await generate_chat_completion(
        prompt,
        system_instruction="You are a culinary guide. Group food choices by dining style, highlighting local specialties and reservation requirements."
    )
    
    accumulated = state.get("accumulated_content", "") + f"""
    ## Restaurant recommendations:
    ---
    {content}
    ---
    """
    return {
        "restaurants": content,
        "accumulated_content": accumulated
    }


# Node 5: Itinerary Generation
async def itinerary_node(state: TripPlanningState) -> Dict[str, Any]:
    trip_plan_id = state["trip_plan_id"]
    logger.info(f"[LangGraph Node] Itinerary Specialist for trip: {trip_plan_id}")
    
    await update_trip_plan_status(
        trip_plan_id=trip_plan_id,
        status="processing",
        current_step="Creating the day-by-day itinerary",
    )
    
    prompt = f"""
    Please create a detailed day-by-day itinerary for a trip to {state['destination']} for user's travel request:
    {state['travel_request_md']}

    Based on the following compiled recommendations:
    {state['accumulated_content']}
    """
    
    system_instruction = (
        "You are an itinerary specialist. Organize travel plans in clear, hour-by-hour day schedules with emojis, "
        "transit recommendations between locations, and buffer notes."
    )
    
    content = await generate_chat_completion(prompt, system_instruction=system_instruction)
    
    accumulated = state.get("accumulated_content", "") + f"""
    ## Day-by-day itinerary:
    ---
    {content}
    ---
    """
    return {
        "itinerary": content,
        "accumulated_content": accumulated
    }


# Node 6: Budget Optimization
async def budget_node(state: TripPlanningState) -> Dict[str, Any]:
    trip_plan_id = state["trip_plan_id"]
    logger.info(f"[LangGraph Node] Budget Optimizer for trip: {trip_plan_id}")
    
    await update_trip_plan_status(
        trip_plan_id=trip_plan_id,
        status="processing",
        current_step="Optimizing the budget",
    )
    
    prompt = f"""
    Please review the budget for the user's travel request:
    {state['travel_request_md']}

    Based on the following travel details:
    {state['accumulated_content']}

    Suggest strategic budget optimizations (flights, lodging, food alternatives) and compile a breakdown of estimated expenses.
    """
    
    content = await generate_chat_completion(
        prompt,
        system_instruction="You are a budget optimizer. Suggest price adjustments, package deals, and list estimated costs per category."
    )
    
    return {
        "budget": content
    }


# Build LangGraph Workflow
workflow = StateGraph(TripPlanningState)

# Add Nodes
workflow.add_node("destination", destination_node)
workflow.add_node("flight", flight_node)
workflow.add_node("hotel", hotel_node)
workflow.add_node("restaurant", restaurant_node)
workflow.add_node("itinerary", itinerary_node)
workflow.add_node("budget", budget_node)

# Set Entry Point
workflow.set_entry_point("destination")

# Define Edges (Sequential)
workflow.add_edge("destination", "flight")
workflow.add_edge("flight", "hotel")
workflow.add_edge("hotel", "restaurant")
workflow.add_edge("restaurant", "itinerary")
workflow.add_edge("itinerary", "budget")
workflow.add_edge("budget", END)

# Compile Graph
compiled_graph = workflow.compile()


# Runner function
async def run_langgraph_workflow(trip_plan_id: str, travel_request_md: str, destination: str) -> Dict[str, Any]:
    initial_state = {
        "trip_plan_id": trip_plan_id,
        "travel_request_md": travel_request_md,
        "destination": destination,
        "destination_research": None,
        "flights": None,
        "hotels": None,
        "restaurants": None,
        "itinerary": None,
        "budget": None,
        "accumulated_content": "",
        "final_output": None
    }
    
    logger.info(f"Invoking LangGraph compiled workflow for trip: {trip_plan_id}")
    final_state = await compiled_graph.ainvoke(initial_state)
    logger.info(f"LangGraph compiled workflow finished successfully for trip: {trip_plan_id}")
    return final_state
