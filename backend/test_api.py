"""
Test script for TripCraft AI social features API endpoints.
Run this after starting the API server to test the new co-traveler and challenge endpoints.
"""

import asyncio
import aiohttp
import json
from datetime import datetime, timedelta

BASE_URL = "http://localhost:8006"

class APITester:
    def __init__(self, base_url: str = BASE_URL):
        self.base_url = base_url
        self.session = None
    
    async def __aenter__(self):
        self.session = aiohttp.ClientSession()
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        if self.session:
            await self.session.close()
    
    async def test_health_check(self):
        """Test the basic health check endpoint."""
        print("🏥 Testing Health Check...")
        try:
            async with self.session.get(f"{self.base_url}/api/health") as response:
                if response.status == 200:
                    data = await response.json()
                    print(f"✅ Health Check: {data}")
                    return True
                else:
                    print(f"❌ Health Check failed: {response.status}")
                    return False
        except Exception as e:
            print(f"❌ Health Check error: {e}")
            return False
    
    async def test_cotraveler_profile_creation(self):
        """Test creating a user profile for co-traveler matching."""
        print("\n👤 Testing Co-Traveler Profile Creation...")
        
        profile_data = {
            "budget_range": {"min": 50000, "max": 100000, "currency": "INR"},
            "travel_preferences": {
                "style": "adventurous",
                "pace": "moderate",
                "accommodation": "mid-range"
            },
            "destinations_interested": ["Europe", "Southeast Asia", "Japan"],
            "travel_dates_flexible": True,
            "bio": "Love exploring new cultures and trying local food!"
        }
        
        try:
            async with self.session.post(
                f"{self.base_url}/api/cotraveler/profile",
                json=profile_data
            ) as response:
                print(f"Response Status: {response.status}")
                text = await response.text()
                print(f"Response: {text}")
                
                if response.status == 200:
                    data = await response.json()
                    print(f"✅ Profile Created: {data.get('user_id', 'No user_id')}")
                    return data.get('user_id')
                else:
                    print(f"❌ Profile Creation failed: {response.status}")
                    return None
        except Exception as e:
            print(f"❌ Profile Creation error: {e}")
            return None
    
    async def test_cotraveler_matching(self, user_id: str):
        """Test finding a co-traveler match."""
        print("\n🤝 Testing Co-Traveler Matching...")
        
        match_request = {
            "user_id": user_id,
            "destination": "Tokyo, Japan",
            "travel_dates": {
                "start": "2025-09-01",
                "end": "2025-09-10"
            },
            "budget_range": {"min": 75000, "max": 125000, "currency": "INR"}
        }
        
        try:
            async with self.session.post(
                f"{self.base_url}/api/cotraveler/find-match",
                json=match_request
            ) as response:
                print(f"Response Status: {response.status}")
                text = await response.text()
                print(f"Response: {text}")
                
                if response.status == 200:
                    data = await response.json()
                    print(f"✅ Match Found: {data.get('match_id', 'No match_id')}")
                    return data.get('match_id')
                elif response.status == 404:
                    print("ℹ️ No matches found (expected for testing)")
                    return None
                else:
                    print(f"❌ Matching failed: {response.status}")
                    return None
        except Exception as e:
            print(f"❌ Matching error: {e}")
            return None
    
    async def test_challenge_generation(self, match_id: str = "test_match_123"):
        """Test generating adventure challenges."""
        print("\n🎲 Testing Adventure Challenge Generation...")
        
        challenge_request = {
            "match_id": match_id,
            "destination": "Tokyo, Japan",
            "travel_dates": {
                "start": "2025-09-01",
                "end": "2025-09-10"
            },
            "itinerary": {
                "days": [
                    {
                        "day": 1,
                        "location": "Shibuya",
                        "activities": ["Shibuya Crossing", "Hachiko Statue"]
                    },
                    {
                        "day": 2,
                        "location": "Asakusa",
                        "activities": ["Sensoji Temple", "Traditional Shopping"]
                    }
                ]
            },
            "traveler_preferences": {
                "interests": ["culture", "food", "photography"],
                "activity_level": "moderate"
            },
            "categories": ["fun", "cultural", "photo"]
        }
        
        try:
            async with self.session.post(
                f"{self.base_url}/api/challenges/generate",
                json=challenge_request
            ) as response:
                print(f"Response Status: {response.status}")
                text = await response.text()
                print(f"Response: {text}")
                
                if response.status == 200:
                    data = await response.json()
                    print(f"✅ Challenges Generated: {data.get('total_challenges', 0)} challenges")
                    return data.get('trip_id')
                else:
                    print(f"❌ Challenge Generation failed: {response.status}")
                    return None
        except Exception as e:
            print(f"❌ Challenge Generation error: {e}")
            return None
    
    async def test_social_travel_plan_creation(self):
        """Test creating a social travel plan."""
        print("\n🌟 Testing Social Travel Plan Creation...")
        
        social_plan_request = {
            "trip_plan_id": f"social_trip_{datetime.now().strftime('%Y%m%d_%H%M%S')}",
            "enhanced_travel_plan": {
                "core_plan": {
                    "name": "Tokyo Adventure",
                    "destination": "Tokyo, Japan",
                    "starting_location": "Mumbai, India",
                    "travel_dates": {
                        "start": "2025-09-01",
                        "end": "2025-09-10"
                    },
                    "duration": 9,
                    "traveling_with": "co-traveler",
                    "adults": 2,
                    "children": 0,
                    "budget": 150000,
                    "budget_currency": "INR",
                    "travel_style": "adventurous",
                    "vibes": ["cultural", "food", "adventure"],
                    "priorities": ["local experiences", "photography"],
                    "interests": "Japanese culture, anime, traditional food"
                },
                "cotraveler_preferences": {
                    "enable_matching": True,
                    "budget_flexibility": 0.15,
                    "rating_minimum": 4.0,
                    "shared_interests": ["culture", "food", "photography"]
                },
                "challenge_preferences": {
                    "enable_challenges": True,
                    "difficulty_levels": ["moderate"],
                    "categories": ["cultural", "fun", "photo"],
                    "frequency": "daily"
                },
                "user_id": "test_user_123",
                "is_social_trip": True
            }
        }
        
        try:
            async with self.session.post(
                f"{self.base_url}/api/social-plan/create",
                json=social_plan_request
            ) as response:
                print(f"Response Status: {response.status}")
                text = await response.text()
                print(f"Response: {text}")
                
                if response.status == 200:
                    data = await response.json()
                    print(f"✅ Social Travel Plan Created: {data.get('trip_plan_id')}")
                    return data.get('trip_plan_id')
                else:
                    print(f"❌ Social Travel Plan Creation failed: {response.status}")
                    return None
        except Exception as e:
            print(f"❌ Social Travel Plan Creation error: {e}")
            return None
    
    async def run_all_tests(self):
        """Run all API tests in sequence."""
        print("🚀 Starting TripCraft AI API Tests...")
        print("=" * 60)
        
        # Test 1: Health Check
        health_ok = await self.test_health_check()
        if not health_ok:
            print("❌ API Server not responding. Make sure it's running on localhost:8000")
            return
        
        # Test 2: Co-Traveler Profile Creation
        user_id = await self.test_cotraveler_profile_creation()
        
        # Test 3: Co-Traveler Matching (will likely fail due to no database)
        match_id = None
        if user_id:
            match_id = await self.test_cotraveler_matching(user_id)
        
        # Test 4: Challenge Generation
        trip_id = await self.test_challenge_generation(match_id or "test_match_123")
        
        # Test 5: Social Travel Plan Creation
        social_trip_id = await self.test_social_travel_plan_creation()
        
        print("\n" + "=" * 60)
        print("🏁 Test Summary:")
        print(f"✅ Health Check: {'PASS' if health_ok else 'FAIL'}")
        print(f"📝 Profile Creation: {'PASS' if user_id else 'FAIL (Expected - No DB)'}")
        print(f"🤝 Co-Traveler Matching: {'PASS' if match_id else 'FAIL (Expected - No DB)'}")
        print(f"🎲 Challenge Generation: {'PASS' if trip_id else 'FAIL (Expected - No DB)'}")
        print(f"🌟 Social Travel Plan: {'PASS' if social_trip_id else 'FAIL (Expected - No DB)'}")
        print("\nNote: Some failures are expected since we haven't set up the database yet.")


async def main():
    """Main test function."""
    async with APITester() as tester:
        await tester.run_all_tests()


if __name__ == "__main__":
    print("🧪 TripCraft AI API Tester")
    print("Make sure the API server is running: python main.py")
    print("Then run this script to test the endpoints.\n")
    
    asyncio.run(main())
