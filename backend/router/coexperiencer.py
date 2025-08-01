"""
Co-Experiencer API endpoints for matching, profile management, and rating system.
"""

from fastapi import APIRouter, HTTPException, status, Depends
from loguru import logger
from typing import List, Optional
from pydantic import BaseModel
from datetime import datetime

from services.matching_service import MatchingService
from agents.co_traveler_matching import co_traveler_matching_agent

router = APIRouter(prefix="/api/coexperiencer", tags=["Co-Experiencer Matching"])

# Pydantic models for request/response
class UserProfileCreate(BaseModel):
    budget_range: dict  # {"min": 1000, "max": 2000, "currency": "USD"}
    experience_preferences: dict  # {"style": "adventurous", "pace": "moderate", etc.}
    destinations_interested: List[str]
    experience_dates_flexible: bool
    bio: Optional[str] = None

class UserProfile(BaseModel):
    user_id: str
    budget_range: dict
    experience_preferences: dict
    experience_rating: float
    total_experiences: int
    destinations_interested: List[str]
    experience_dates_flexible: bool
    bio: Optional[str] = None
    created_at: datetime
    is_active: bool

class MatchRequest(BaseModel):
    user_id: str
    destination: str
    experience_dates: dict  # {"start": "2025-08-01", "end": "2025-08-10"}
    budget_range: dict

class MatchResponse(BaseModel):
    match_id: str
    user1_id: str
    user2_id: str
    compatibility_score: float
    match_explanation: str
    created_at: datetime

class RatingRequest(BaseModel):
    match_id: str
    rater_id: str
    rating: float  # 1.0 to 5.0
    feedback: str
    categories: dict  # {"communication": 4.5, "reliability": 5.0, "fun": 4.0}

class RatingResponse(BaseModel):
    rating_id: str
    success: bool
    message: str

# Dependency to get matching service
async def get_matching_service() -> MatchingService:
    # This would be injected with actual database connection
    from services.db_service import get_db_connection
    db = await get_db_connection()
    return MatchingService(db)


@router.post(
    "/profile",
    response_model=UserProfile,
    summary="Create User Profile",
    description="Create a new user profile for co-experiencer matching"
)
async def create_user_profile(
    profile_data: UserProfileCreate,
    matching_service: MatchingService = Depends(get_matching_service)
) -> UserProfile:
    """
    Create a new user profile for co-experiencer matching system.
    
    Args:
        profile_data: User profile information including budget, preferences, and bio
        
    Returns:
        UserProfile: Created user profile with assigned user_id
    """
    try:
        logger.info(f"Creating new user profile: {profile_data}")
        
        # Create user profile using the matching service
        user_id = await matching_service.create_user_profile(profile_data.model_dump())
        
        # Get the created profile to return
        profile = await matching_service._get_user_profile(user_id)
        
        logger.info(f"User profile created successfully: {user_id}")
        return UserProfile(**profile)
    except Exception as e:
        logger.error(f"Error creating user profile: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to create user profile: {str(e)}"
        )


@router.get(
    "/profile/{user_id}",
    response_model=UserProfile,
    summary="Get User Profile",
    description="Get a user profile by ID"
)
async def get_user_profile(
    user_id: str,
    matching_service: MatchingService = Depends(get_matching_service)
) -> UserProfile:
    """
    Get a user profile by user ID.
    
    Args:
        user_id: Unique identifier of the user profile
        
    Returns:
        UserProfile: User profile information
    """
    try:
        logger.info(f"Getting user profile: {user_id}")
        profile = await matching_service._get_user_profile(user_id)
        
        if not profile:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"User profile {user_id} not found"
            )
            
        logger.info(f"User profile retrieved: {user_id}")
        return UserProfile(**profile)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error getting user profile: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to get user profile: {str(e)}"
        )


@router.post(
    "/find-match",
    summary="Find Compatible Experience Partners",
    description="Find compatible experience partners based on matching criteria"
)
async def find_matches(
    match_request: MatchRequest,
    matching_service: MatchingService = Depends(get_matching_service)
):
    """
    Find compatible experience partners based on criteria like budget, destination, and dates.
    
    Args:
        match_request: Matching criteria including user ID, destination, dates, and budget
        
    Returns:
        dict: List of potential matches with compatibility scores
    """
    try:
        logger.info(f"Finding matches for user: {match_request.user_id}")
        
        # Use the matching service to find potential matches
        # For demo purposes, we're generating mock matches
        mock_matches = [
            {
                "user_id": "user_456",
                "name": "Alex Johnson",
                "age": 28,
                "location": "San Francisco, CA",
                "bio": "Adventure enthusiast and photographer. Love exploring new cuisines and hidden gems in every city. Always up for spontaneous experiences!",
                "experience_style": "Adventure Seeker",
                "experience_rating": 4.8,
                "total_experiences": 12,
                "shared_interests": ["Photography", "Local Cuisine", "Nature & Wildlife"],
                "budget_compatibility": 92,
                "match_score": 89,
                "match_explanation": "High budget compatibility and shared interests in photography and food experiences."
            },
            {
                "user_id": "user_789",
                "name": "Taylor Wright",
                "age": 31,
                "location": "Chicago, IL",
                "bio": "Culture enthusiast with a passion for art museums and local history. Enjoy a mix of planned activities and spontaneous discoveries.",
                "experience_style": "Culture Enthusiast",
                "experience_rating": 4.5,
                "total_experiences": 8,
                "shared_interests": ["Museums & Art", "Architecture", "Local Cuisine"],
                "budget_compatibility": 85,
                "match_score": 76,
                "match_explanation": "Strong interest alignment in cultural activities and good budget compatibility."
            },
            {
                "user_id": "user_321",
                "name": "Jordan Lee",
                "age": 26,
                "location": "Austin, TX",
                "bio": "Music lover and foodie. Always looking for authentic local experiences and hidden spots off the tourist trail.",
                "experience_style": "Comfort Seeker",
                "experience_rating": 4.2,
                "total_experiences": 6,
                "shared_interests": ["Music & Festivals", "Local Cuisine", "Nightlife"],
                "budget_compatibility": 78,
                "match_score": 72,
                "match_explanation": "Shared passion for music events and similar budget expectations."
            }
        ]
        
        logger.info(f"Found {len(mock_matches)} potential matches")
        return {"matches": mock_matches}
        
    except Exception as e:
        logger.error(f"Error finding matches: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to find matches: {str(e)}"
        )


@router.post(
    "/rate/{match_id}",
    response_model=RatingResponse,
    summary="Rate Experience Partner",
    description="Rate your experience with a co-experiencer after completing an experience"
)
async def rate_experience(
    match_id: str,
    rating_data: RatingRequest,
    matching_service: MatchingService = Depends(get_matching_service)
) -> RatingResponse:
    """
    Submit a rating for your experience partner.
    
    Args:
        match_id: Unique identifier of the match
        rating_data: Rating information including score and feedback
        
    Returns:
        RatingResponse: Result of the rating operation
    """
    try:
        logger.info(f"Processing rating for match {match_id} from user {rating_data.rater_id}")
        
        # Here we would call the matching service to record the rating
        # For demo, we'll return a mock response
        rating_id = "rating_12345"
        
        logger.info(f"Rating recorded successfully: {rating_id}")
        return RatingResponse(
            rating_id=rating_id,
            success=True,
            message="Rating recorded successfully"
        )
    except Exception as e:
        logger.error(f"Error recording rating: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to record rating: {str(e)}"
        )
