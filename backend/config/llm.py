import os
import json
from typing import Optional
from openai import AsyncOpenAI
from loguru import logger

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY", "mock_key")

logger.info("Initializing Async OpenAI client for OpenRouter")
client = AsyncOpenAI(
    api_key=OPENROUTER_API_KEY,
    base_url="https://openrouter.ai/api/v1"
)

# Standard model configurations
DEFAULT_MODEL = "google/gemini-2.0-flash-001"
SECONDARY_MODEL = "openai/gpt-4o"

async def get_mock_completion(prompt: str, system_instruction: Optional[str] = None) -> str:
    """Simulate realistic travel agent responses based on prompt keywords."""
    p_lower = prompt.lower()
    
    # Extract destination if possible
    destination = "Tokyo"
    for word in ["paris", "bali", "tokyo", "new york", "delhi", "london", "sydney", "rome"]:
        if word in p_lower:
            destination = word.capitalize()
            break

    # 1. TravelPlanTeamResponse structured conversion schema mock
    if "travelplanteamresponse" in p_lower:
        return json.dumps({
            "day_by_day_plan": [
                {
                    "day": 1,
                    "date": "2026-08-01",
                    "morning": "Arrive in Tokyo. Check in to Urban Oasis Suites and freshen up.",
                    "afternoon": "Take a walking tour of Shinjuku Gyoen National Garden.",
                    "evening": "Dine at Market Street Kitchen and explore Omoide Yokocho.",
                    "notes": "Bring comfortable walking shoes."
                },
                {
                    "day": 2,
                    "date": "2026-08-02",
                    "morning": "Visit Senso-ji Temple in Asakusa.",
                    "afternoon": "Explore the electronics and anime culture in Akihabara.",
                    "evening": "Have sushi at Sakura Garden Bistro.",
                    "notes": "Purchase a metro 72-hour pass."
                }
            ],
            "hotels": [
                {
                    "hotel_name": "Urban Oasis Suites",
                    "price": "$140/night",
                    "rating": "4.5",
                    "address": "Shinjuku, Tokyo",
                    "amenities": ["WiFi", "AC", "Gym"],
                    "description": "A comfortable mid-range suite in Shinjuku.",
                    "url": "https://www.kayak.com"
                }
            ],
            "attractions": [
                {
                    "name": "Senso-ji Temple",
                    "description": "Tokyo's oldest and one of its most significant temples."
                },
                {
                    "name": "Shinjuku Gyoen",
                    "description": "A large park with beautiful traditional gardens."
                }
            ],
            "flights": [
                {
                    "duration": "8h 15m",
                    "price": "$620",
                    "departure_time": "09:15 AM",
                    "arrival_time": "08:30 PM",
                    "airline": "Air India",
                    "flight_number": "AI-306",
                    "url": "https://www.google.com/flights",
                    "stops": 0
                }
            ],
            "restaurants": [
                {
                    "name": "Market Street Kitchen",
                    "description": "A cozy spot for traditional Japanese soup and ramen.",
                    "location": "Shibuya, Tokyo",
                    "url": "https://www.google.com"
                }
            ],
            "budget_insights": [
                "Using public transport saves more than 60% compared to taxis.",
                "Lunch specials at major restaurants are significantly cheaper."
            ],
            "tips": [
                "Always carry cash as some local street vendors do not accept cards.",
                "Keep your passport with you for tax-free shopping."
            ]
        })

    # 1.1 JSON extraction prompts
    if "json" in p_lower or "extract the following parameters" in p_lower:
        # Determine check-in and check-out
        return json.dumps({
            "departure_airport": "DEL",
            "destination_airport": "NRT" if destination == "Tokyo" else "CDG" if destination == "Paris" else "DPS",
            "destination": destination,
            "check_in": "2026-08-01",
            "check_out": "2026-08-07",
            "date": "2026-08-01",
            "adults": 1,
            "children": 0,
            "rooms": 1
        })

    # 2. Destination Research
    if "research" in p_lower or "attractions" in p_lower:
        return f"""
### Welcome to {destination}!

Here is a curated list of top attractions and essential tips for your stay:

1. **The Historic Heart (Sightseeing)**
   - *Details:* Explore the iconic temples, museums, and historical landmarks.
   - *Opening Hours:* 9:00 AM - 5:00 PM daily.
   - *Entrance Fee:* Approx. $10 per person.
   - *Duration:* 2-3 hours.

2. **The City Center Park (Nature & Relaxation)**
   - *Details:* A beautiful urban garden featuring lakes, walking paths, and local flora.
   - *Opening Hours:* Open 24/7.
   - *Entrance Fee:* Free.
   - *Duration:* 1-2 hours.

3. **Culinary District Street Walk (Food & Culture)**
   - *Details:* Taste local street food delicacies and immerse yourself in the vibrant market culture.
   - *Opening Hours:* Best visited after 6:00 PM.
   - *Entrance Fee:* Free entry (pay for food).
   - *Duration:* 2 hours.

4. **Modern Art & Tech Gallery (Innovation)**
   - *Details:* Dynamic exhibitions combining regional heritage with modern digital art.
   - *Opening Hours:* 10:00 AM - 8:00 PM.
   - *Entrance Fee:* $15.
   - *Duration:* 2 hours.

*Pro-Tip:* Buy a regional transit pass upon arrival to save on local transport!
"""

    # 3. Flight node
    if "flight" in p_lower or "airline" in p_lower:
        return f"""
Here are the top flight recommendations for your journey:

1. **Air India (AI-306) - Recommended**
   - *Route:* DEL ➔ { "NRT" if destination == "Tokyo" else "CDG" } (Non-stop)
   - *Time:* 09:15 AM - 08:30 PM (8h 15m)
   - *Price:* $620 round-trip (Economy Class)
   - *Layovers:* None

2. **Singapore Airlines (SQ-403 & SQ-638)**
   - *Route:* DEL ➔ SIN ➔ { "NRT" if destination == "Tokyo" else "CDG" }
   - *Time:* 09:50 PM - 08:00 AM (+1 day)
   - *Price:* $710 round-trip (Economy Class)
   - *Layovers:* 1h 45m in Singapore (SIN)

3. **Japan Airlines (JL-30) - Premium Option**
   - *Route:* DEL ➔ { "HND" if destination == "Tokyo" else "CDG" } (Non-stop)
   - *Time:* 07:30 PM - 06:55 AM (+1 day)
   - *Price:* $950 round-trip (Premium Economy)
   - *Layovers:* None
"""

    # 4. Hotel node
    if "hotel" in p_lower or "lodging" in p_lower:
        return f"""
Curated lodging recommendations in {destination}:

1. **The Grand Horizon Hotel (Luxury)**
   - *Price Range:* $250 - $320 per night.
   - *Rating:* ⭐⭐⭐⭐⭐ (4.8/5)
   - *Amenities:* Rooftop pool, complimentary breakfast, high-speed WiFi, spa.
   - *Booking Link:* [Book on Kayak](https://www.kayak.com)

2. **Urban Oasis Suites (Comfort/Mid-range)**
   - *Price Range:* $120 - $160 per night.
   - *Rating:* ⭐⭐⭐⭐ (4.5/5)
   - *Amenities:* Kitchenette, fitness center, close to metro station.
   - *Booking Link:* [Book on Kayak](https://www.kayak.com)

3. **Nomad Backpackers Hostel (Budget)**
   - *Price Range:* $35 - $50 per night.
   - *Rating:* ⭐⭐⭐⭐ (4.2/5)
   - *Amenities:* Shared lounge, free city maps, laundry service.
   - *Booking Link:* [Book on Kayak](https://www.kayak.com)
"""

    # 5. Restaurant node
    if "restaurant" in p_lower or "culinary" in p_lower:
        return f"""
Top dining experiences in {destination}:

1. **Sakura Garden Bistro (Fine Dining)**
   - *Cuisine:* Contemporary Local Fusion.
   - *Price Level:* $$$
   - *Specialty:* Chef's Tasting Menu.
   - *Operating Times:* 5:30 PM - 11:00 PM (Reservation required).

2. **Market Street Kitchen (Casual)**
   - *Cuisine:* Traditional Comfort Food.
   - *Price Level:* $$
   - *Specialty:* Slow-cooked noodles and seasonal soups.
   - *Operating Times:* 11:00 AM - 9:00 PM.

3. **Central Food Hall (Street Food Market)**
   - *Cuisine:* Diverse local delicacies.
   - *Price Level:* $
   - *Specialty:* Freshly grilled skewers, pastries, and bubble tea.
   - *Operating Times:* 8:00 AM - 10:00 PM.
"""

    # 6. Itinerary node
    if "itinerary" in p_lower or "day-by-day" in p_lower:
        return f"""
### 🗺️ Your Curated Itinerary for {destination}

Here is a balanced day-by-day itinerary designed for your preferences:

#### 📅 Day 1: Arrival & Evening Exploration
- **02:00 PM:** Check-in at your hotel and freshen up.
- **04:30 PM:** Take a leisurely walk around the city center park to adapt to the local atmosphere.
- **07:00 PM:** Dine at **Market Street Kitchen** for a comforting introduction to the local cuisine.

#### 📅 Day 2: Culture & Landmarks
- **09:00 AM:** Visit **The Historic Heart** to see classic architectural wonders and temples.
- **12:30 PM:** Enjoy a traditional lunch nearby.
- **03:00 PM:** Explore the **Modern Art & Tech Gallery** for an immersive art experience.
- **07:30 PM:** Dinner reservations at **Sakura Garden Bistro**.

#### 📅 Day 3: Hidden Gems & Departure
- **10:00 AM:** Pick up souvenirs and try street food snacks at **Central Food Hall**.
- **01:30 PM:** Retrieve luggage and head to the airport for your flight home.
"""

    # 7. Budget Node
    if "budget" in p_lower or "expense" in p_lower:
        return f"""
### 💰 Budget & Expense Analysis

Here is a breakdown of estimated expenses for your trip to {destination}:

| Category | Estimated Cost | Notes |
|---|---|---|
| Flights | $620 | Round-trip economy |
| Lodging (2 nights) | $280 | Mid-range Comfort Hotel |
| Food & Dining | $150 | Mix of casual and fine dining |
| Sightseeing & Art | $40 | Attraction entry tickets |
| Local Transport | $30 | Metro pass and airport shuttle |
| **Total Estimate** | **$1,120** | *Budget flexible* |

**Optimization Strategies:**
- Use public buses/metro instead of taxis.
- Dine at local food markets for lunch to save budget for dinner.
- Book museum and gallery tickets online in advance to secure discount rates.
"""

    return f"Curated travel plan segment for {destination} generated successfully."


async def generate_chat_completion(
    prompt: str,
    system_instruction: Optional[str] = None,
    model_name: str = DEFAULT_MODEL,
    temperature: float = 0.3,
    max_tokens: int = 8096
) -> str:
    """Helper to query the OpenRouter endpoint natively using AsyncOpenAI."""
    
    # Fallback to mock content if mock key is configured
    if OPENROUTER_API_KEY == "mock_key" or not OPENROUTER_API_KEY or "mock" in OPENROUTER_API_KEY.lower():
        logger.info("Using mock completion provider (local development mode)")
        import json
        return await get_mock_completion(prompt, system_instruction)

    messages = []
    if system_instruction:
        messages.append({"role": "system", "content": system_instruction})
    messages.append({"role": "user", "content": prompt})

    try:
        response = await client.chat.completions.create(
            model=model_name,
            messages=messages,
            temperature=temperature,
            max_tokens=max_tokens
        )
        return response.choices[0].message.content or ""
    except Exception as e:
        logger.error(f"Error generating model completion: {e}")
        raise
