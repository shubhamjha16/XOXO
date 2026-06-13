"""
Matching Service - Handles user profile management, matching operations, and rating systems.
Works with the Co-Traveler Compatibility Analyzer agent for AI-driven matching logic.
"""

from typing import List, Dict, Optional
from datetime import datetime
import uuid

# Global in-memory storage for profiles, matches, and ratings
_PROFILES_DB: Dict[str, Dict] = {}
_MATCHES_DB: Dict[str, Dict] = {}
_RATINGS_DB: Dict[str, List[Dict]] = {}

class MatchingService:
    """
    Service responsible for:
    - User profile management
    - Database operations for matching
    - Rating system management
    - Match notifications and communication
    """
    
    def __init__(self, db_connection=None):
        self.db = db_connection
    
    async def create_user_profile(self, user_data: Dict) -> str:
        """Create a new user profile with initial rating"""
        user_id = user_data.get("user_id") or str(uuid.uuid4())
        
        # Merge travel and experience preferences keys to support both routers
        prefs = user_data.get("travel_preferences") or user_data.get("experience_preferences") or {}
        destinations = user_data.get("destinations_interested") or []
        dates_flexible = user_data.get("travel_dates_flexible") or user_data.get("experience_dates_flexible") or True
        bio = user_data.get("bio") or ""
        
        profile = {
            "user_id": user_id,
            "budget_range": user_data.get("budget_range") or {"min": 1000, "max": 3000, "currency": "USD"},
            "travel_preferences": prefs,
            "experience_preferences": prefs,
            "experience_rating": 5.0,  # Default starting rating
            "total_trips": 0,
            "total_experiences": 0,
            "destinations_interested": destinations,
            "travel_dates_flexible": dates_flexible,
            "experience_dates_flexible": dates_flexible,
            "bio": bio,
            "created_at": datetime.now(),
            "is_active": True
        }
        
        await self._save_user_profile(profile)
        return user_id
    
    async def find_potential_matches(self, user_id: str) -> List[Dict]:
        """Find potential co-travelers based on compatibility criteria"""
        user_profile = await self._get_user_profile(user_id)
        
        # Get compatibility criteria from the AI agent
        compatibility_criteria = await self._get_compatibility_criteria(user_profile)
        
        # Query database for potential matches
        potential_matches = await self._query_compatible_users(
            user_id, compatibility_criteria
        )
        
        return potential_matches
    
    async def create_match(self, user1_id: str, user2_id: str) -> str:
        """Create a match between two users"""
        match_id = str(uuid.uuid4())
        match_record = {
            "match_id": match_id,
            "user1_id": user1_id,
            "user2_id": user2_id,
            "created_at": datetime.now(),
            "status": "active",
            "trip_completed": False
        }
        
        await self._save_match(match_record)
        await self._notify_users_of_match(user1_id, user2_id, match_id)
        
        return match_id
    
    async def submit_rating(self, match_id: str, rater_id: str, rating: float, feedback: str):
        """Handle post-trip rating submission"""
        rating_record = {
            "rating_id": str(uuid.uuid4()),
            "match_id": match_id,
            "rater_id": rater_id,
            "rating": rating,
            "feedback": feedback,
            "submitted_at": datetime.now()
        }
        
        await self._save_rating(rating_record)
        await self._update_user_rating(match_id, rater_id, rating)
        
        # Check if both users have rated each other
        if await self._both_users_rated(match_id):
            await self._complete_match(match_id)
    
    # Private helper methods for database operations
    async def _save_user_profile(self, profile: Dict):
        """Save user profile to database"""
        user_id = profile["user_id"]
        _PROFILES_DB[user_id] = profile
    
    async def _get_user_profile(self, user_id: str) -> Dict:
        """Retrieve user profile from database"""
        if user_id not in _PROFILES_DB:
            # Create a default profile to avoid crash during demo/first-run
            default_profile = {
                "user_id": user_id,
                "budget_range": {"min": 1000, "max": 3000, "currency": "USD"},
                "travel_preferences": {"style": "comfort", "pace": "moderate", "accommodation": "hotel"},
                "experience_preferences": {"style": "comfort", "pace": "moderate", "accommodation": "hotel"},
                "experience_rating": 5.0,
                "total_trips": 0,
                "total_experiences": 0,
                "destinations_interested": [],
                "travel_dates_flexible": True,
                "experience_dates_flexible": True,
                "bio": "Spontaneous traveler",
                "created_at": datetime.now(),
                "is_active": True
            }
            _PROFILES_DB[user_id] = default_profile
        return _PROFILES_DB[user_id]
    
    async def _get_compatibility_criteria(self, user_profile: Dict) -> Dict:
        """Get compatibility criteria from the AI agent"""
        # Return default filter criteria
        return {
            "budget_min": user_profile["budget_range"].get("min", 1000) * 0.7,
            "budget_max": user_profile["budget_range"].get("max", 3000) * 1.3,
            "destinations": user_profile.get("destinations_interested", [])
        }
    
    async def _query_compatible_users(self, user_id: str, criteria: Dict) -> List[Dict]:
        """Query database for compatible users"""
        matches = []
        for pid, profile in _PROFILES_DB.items():
            if pid == user_id:
                continue
            matches.append(profile)
        
        # If no users exist, return some mock candidates to match with
        if not matches:
            matches = [
                {
                    "user_id": "user_456",
                    "budget_range": {"min": 1000, "max": 2500, "currency": "USD"},
                    "travel_preferences": {"style": "adventure", "pace": "high"},
                    "experience_preferences": {"style": "adventure", "pace": "high"},
                    "experience_rating": 4.8,
                    "total_trips": 12,
                    "total_experiences": 12,
                    "destinations_interested": ["Tokyo, Japan", "Bali, Indonesia"],
                    "travel_dates_flexible": True,
                    "experience_dates_flexible": True,
                    "bio": "Adventure enthusiast and photographer.",
                    "created_at": datetime.now(),
                    "is_active": True
                },
                {
                    "user_id": "user_789",
                    "budget_range": {"min": 1200, "max": 3500, "currency": "USD"},
                    "travel_preferences": {"style": "cultural", "pace": "moderate"},
                    "experience_preferences": {"style": "cultural", "pace": "moderate"},
                    "experience_rating": 4.5,
                    "total_trips": 8,
                    "total_experiences": 8,
                    "destinations_interested": ["Paris, France", "Rome, Italy"],
                    "travel_dates_flexible": True,
                    "experience_dates_flexible": True,
                    "bio": "Culture enthusiast with a passion for art museums.",
                    "created_at": datetime.now(),
                    "is_active": True
                }
            ]
        return matches
    
    async def _save_match(self, match_record: Dict):
        """Save match record to database"""
        match_id = match_record["match_id"]
        _MATCHES_DB[match_id] = match_record
    
    async def _notify_users_of_match(self, user1_id: str, user2_id: str, match_id: str):
        """Send notifications to matched users"""
        pass
    
    async def _save_rating(self, rating_record: Dict):
        """Save rating to database"""
        match_id = rating_record["match_id"]
        if match_id not in _RATINGS_DB:
            _RATINGS_DB[match_id] = []
        _RATINGS_DB[match_id].append(rating_record)
    
    async def _update_user_rating(self, match_id: str, rater_id: str, rating: float):
        """Update user's overall rating based on new feedback"""
        # Find the ratee (the other user in the match)
        match_rec = _MATCHES_DB.get(match_id)
        if not match_rec:
            return
        ratee_id = match_rec["user2_id"] if match_rec["user1_id"] == rater_id else match_rec["user1_id"]
        
        # Update the ratee's profile rating
        if ratee_id in _PROFILES_DB:
            prof = _PROFILES_DB[ratee_id]
            curr_rating = prof.get("experience_rating", 5.0)
            total = prof.get("total_experiences", 0)
            
            # Simple moving average calculation
            new_rating = ((curr_rating * total) + rating) / (total + 1)
            prof["experience_rating"] = round(new_rating, 2)
            prof["total_experiences"] = total + 1
            prof["total_trips"] = total + 1
    
    async def _both_users_rated(self, match_id: str) -> bool:
        """Check if both users in a match have submitted ratings"""
        ratings = _RATINGS_DB.get(match_id, [])
        return len(ratings) >= 2
    
    async def _complete_match(self, match_id: str):
        """Mark match as completed when both users have rated"""
        if match_id in _MATCHES_DB:
            _MATCHES_DB[match_id]["trip_completed"] = True
            _MATCHES_DB[match_id]["status"] = "completed"
