"""
Enhanced travel plan models that include co-traveler matching and social features.
"""

from pydantic import BaseModel, Field
from typing import List, Optional
from models.travel_plan import TravelPlanRequest, TravelDates

class CoTravelerPreferences(BaseModel):
    """Preferences for co-traveler matching."""
    enable_matching: bool = False
    budget_flexibility: float = 0.15  # 15% flexibility in budget matching
    rating_minimum: float = 4.0  # Minimum experience rating for matches
    age_range: Optional[dict] = None  # {"min": 25, "max": 35}
    gender_preference: Optional[str] = None  # "any", "same", "opposite"
    shared_interests: List[str] = []
    communication_style: str = "moderate"  # "low", "moderate", "high"

class AdventureChallengePreferences(BaseModel):
    """Preferences for adventure challenges during the trip."""
    enable_challenges: bool = False
    difficulty_levels: List[str] = ["moderate"]  # "easy", "moderate", "adventurous"
    categories: List[str] = ["fun", "cultural"]  # "romantic", "adventurous", "cultural", "fun", "food", "photo"
    frequency: str = "daily"  # "daily", "every_other_day", "few_times"
    photo_challenges: bool = True
    local_interaction: bool = True

class EnhancedTravelPlanRequest(BaseModel):
    """Enhanced travel plan request with social features."""
    # Core travel planning (existing functionality)
    core_plan: TravelPlanRequest
    
    # New social features
    cotraveler_preferences: Optional[CoTravelerPreferences] = None
    challenge_preferences: Optional[AdventureChallengePreferences] = None
    
    # User identification for matching
    user_id: Optional[str] = None
    is_social_trip: bool = False

class SocialTravelPlanRequest(BaseModel):
    """Complete social travel plan request."""
    trip_plan_id: str
    enhanced_travel_plan: EnhancedTravelPlanRequest

class CoTravelerMatch(BaseModel):
    """Co-traveler match information."""
    match_id: str
    user1_id: str
    user2_id: str
    compatibility_score: float
    match_explanation: str
    shared_budget: dict
    communication_preferences: dict

class AdventureChallenge(BaseModel):
    """Adventure challenge information."""
    challenge_id: str
    title: str
    description: str
    category: str
    difficulty: str
    estimated_duration: int
    optimal_timing: dict

class SocialTravelPlanResponse(BaseModel):
    """Enhanced travel plan response with social features."""
    success: bool
    message: str
    trip_plan_id: str
    
    # Social features (optional)
    cotraveler_match: Optional[CoTravelerMatch] = None
    adventure_challenges: List[AdventureChallenge] = []
    social_features_enabled: bool = False

class TravelPlanWithSocialFeatures(BaseModel):
    """Complete travel plan including social elements."""
    # Core itinerary (existing)
    core_itinerary: str  # Markdown formatted itinerary
    
    # Social additions
    cotraveler_info: Optional[CoTravelerMatch] = None
    challenges: List[AdventureChallenge] = []
    rating_guidelines: dict = {}
    
    # Metadata
    generated_at: str
    includes_social_features: bool = False
