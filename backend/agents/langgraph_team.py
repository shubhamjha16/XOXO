from typing import TypedDict, Optional, Any, Dict
from langgraph.graph import StateGraph, END
from loguru import logger
import json

from agents.destination import destination_agent
from agents.flight import flight_search_agent
from agents.hotel import hotel_search_agent
from agents.food import dining_agent
from agents.itinerary import itinerary_agent
from agents.budget import budget_agent
from repository.trip_plan_repository import update_trip_plan_status

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
    
    res = await destination_agent.arun(
        f"""
        Please research about the destination {state['destination']}

        Below are user's travel request:
        {state['travel_request_md']}

        Provide a very detailed research about the destination, its attractions, activities, and other relevant information that user might be interested in.

        Give 10 attractions/activities that user might be interested in.
        """
    )
    content = res.messages[-1].content
    
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
    
    res = await flight_search_agent.arun(
        f"""
        Please find flights according to the user's travel request:
        {state['travel_request_md']}

        If user has not specified the exact flight date, please consider it by yourself based on the user's travel request.

        Provide a very detailed research about the flights, its price, duration, and other relevant information that user might be interested in.

        Give top 5 flights.
        """
    )
    content = res.messages[-1].content
    
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
    
    res = await hotel_search_agent.arun(
        f"""
        Please find hotels according to the user's travel request:
        {state['travel_request_md']}

        If user has not specified the exact hotel dates, please consider it by yourself based on the user's travel request.

        Provide a very detailed research about the hotels, its price, amenities, and other relevant information that user might be interested in.

        Give top 5 hotels.
        """
    )
    content = res.messages[-1].content
    
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
    
    res = await dining_agent.arun(
        f"""
        Please find restaurants according to the user's travel request:
        {state['travel_request_md']}

        If user has not specified the exact restaurant dates, please consider it by yourself based on the user's travel request.

        Provide a very detailed research about the restaurants, its price, menu, and other relevant information that user might be interested in.

        Give top 5 restaurants.
        """
    )
    content = res.messages[-1].content
    
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
    
    res = await itinerary_agent.arun(
        f"""
        Please create a detailed day-by-day itinerary for a trip to {state['destination']} for user's travel request:
        {state['travel_request_md']}

        Based on the following information:
        {state['accumulated_content']}
        """
    )
    content = res.messages[-1].content
    
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
    
    res = await budget_agent.arun(
        f"""
        Please optimize the budget according to the user's travel request:
        {state['travel_request_md']}

        Based on the following information:
        {state['accumulated_content']}
        """
    )
    content = res.messages[-1].content
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
