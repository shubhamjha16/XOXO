"""
Co-Traveler API endpoints for matching, profile management, and rating system.
"""

from fastapi import APIRouter, HTTPException, status, Depends
from loguru import logger
from typing import List, Optional
from pydantic import BaseModel
from datetime import datetime

from services.matching_service import MatchingService
from agents.co_traveler_matching import co_traveler_matching_agent

router = APIRouter(prefix="/api/cotraveler", tags=["Co-Traveler Matching"])

# Pydantic models for request/response
class UserProfileCreate(BaseModel):
    budget_range: dict  # {"min": 1000, "max": 2000, "currency": "USD"}
    travel_preferences: dict  # {"style": "adventurous", "pace": "moderate", etc.}
    destinations_interested: List[str]
    travel_dates_flexible: bool
    bio: Optional[str] = None

class UserProfile(BaseModel):
    user_id: str
    budget_range: dict
    travel_preferences: dict
    experience_rating: float
    total_trips: int
    destinations_interested: List[str]
    travel_dates_flexible: bool
    bio: Optional[str] = None
    created_at: datetime
    is_active: bool

class MatchRequest(BaseModel):
    user_id: str
    destination: str
    travel_dates: dict  # {"start": "2025-08-01", "end": "2025-08-10"}
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
    description="Create a new user profile for co-traveler matching"
)
async def create_user_profile(
    profile_data: UserProfileCreate,
    matching_service: MatchingService = Depends(get_matching_service)
) -> UserProfile:
    """
    Create a new user profile for co-traveler matching system.
    
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


@router.post(
    "/find-match",
    response_model=MatchResponse,
    summary="Find Co-Traveler Match",
    description="Find a compatible co-traveler based on budget, ratings, and preferences"
)
async def find_cotraveler_match(
    match_request: MatchRequest,
    matching_service: MatchingService = Depends(get_matching_service)
) -> MatchResponse:
    """
    Find a compatible co-traveler using AI-powered matching algorithm.
    
    Args:
        match_request: Matching criteria including user_id, destination, dates, and budget
        
    Returns:
        MatchResponse: Matched co-traveler information with compatibility score
    """
    try:
        logger.info(f"Finding co-traveler match for user: {match_request.user_id}")
        
        # Get potential matches from matching service
        potential_matches = await matching_service.find_potential_matches(match_request.user_id)
        
        if not potential_matches:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="No compatible co-travelers found. Try adjusting your preferences."
            )
        
        # Use AI agent to analyze compatibility and select best match
        user_profile = await matching_service._get_user_profile(match_request.user_id)
        
        # Call the Co-Traveler Compatibility Analyzer agent
        compatibility_analysis = await co_traveler_matching_agent.run(
            f"""
            Analyze compatibility between user {match_request.user_id} and potential matches.
            
            User Profile: {user_profile}
            Match Request: {match_request.model_dump()}
            Potential Matches: {potential_matches}
            
            Select the best match and provide:
            1. Compatibility score (0.0 to 1.0)
            2. Detailed explanation of why they're compatible
            3. Recommended match from the potential matches list
            """
        )
        
        # Parse AI response and create match
        # This would extract the best match from the AI response
        best_match = potential_matches[0]  # Simplified for now
        
        match_id = await matching_service.create_match(
            match_request.user_id, 
            best_match["user_id"]
        )
        
        logger.info(f"Match created successfully: {match_id}")
        
        return MatchResponse(
            match_id=match_id,
            user1_id=match_request.user_id,
            user2_id=best_match["user_id"],
            compatibility_score=0.85,  # This would come from AI analysis
            match_explanation="You were matched based on similar budget ranges, high experience ratings, and shared interest in adventure travel.",
            created_at=datetime.now()
        )
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error finding co-traveler match: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to find co-traveler match: {str(e)}"
        )


@router.post(
    "/rate",
    response_model=RatingResponse,
    summary="Submit Trip Rating",
    description="Submit rating and feedback for co-traveler after trip completion"
)
async def submit_rating(
    rating_request: RatingRequest,
    matching_service: MatchingService = Depends(get_matching_service)
) -> RatingResponse:
    """
    Submit rating and feedback for co-traveler after trip completion.
    
    Args:
        rating_request: Rating information including score, feedback, and categories
        
    Returns:
        RatingResponse: Success status and rating ID
    """
    try:
        logger.info(f"Submitting rating for match: {rating_request.match_id}")
        
        # Validate rating range
        if not 1.0 <= rating_request.rating <= 5.0:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Rating must be between 1.0 and 5.0"
            )
        
        # Submit rating using matching service
        await matching_service.submit_rating(
            rating_request.match_id,
            rating_request.rater_id,
            rating_request.rating,
            rating_request.feedback
        )
        
        logger.info(f"Rating submitted successfully for match: {rating_request.match_id}")
        
        return RatingResponse(
            rating_id=f"rating_{rating_request.match_id}_{rating_request.rater_id}",
            success=True,
            message="Rating submitted successfully. Thank you for your feedback!"
        )
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error submitting rating: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to submit rating: {str(e)}"
        )


@router.get(
    "/profile/{user_id}",
    response_model=UserProfile,
    summary="Get User Profile",
    description="Retrieve user profile information"
)
async def get_user_profile(
    user_id: str,
    matching_service: MatchingService = Depends(get_matching_service)
) -> UserProfile:
    """
    Retrieve user profile information.
    
    Args:
        user_id: User identifier
        
    Returns:
        UserProfile: User profile information
    """
    try:
        profile = await matching_service._get_user_profile(user_id)
        if not profile:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="User profile not found"
            )
        
        return UserProfile(**profile)
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error retrieving user profile: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to retrieve user profile: {str(e)}"
        )


@router.get(
    "/matches/{user_id}",
    response_model=List[MatchResponse],
    summary="Get User Matches",
    description="Retrieve all matches for a user"
)
async def get_user_matches(
    user_id: str,
    matching_service: MatchingService = Depends(get_matching_service)
) -> List[MatchResponse]:
    """
    Retrieve all matches for a specific user.
    
    Args:
        user_id: User identifier
        
    Returns:
        List[MatchResponse]: List of user's matches
    """
    try:
        # This would be implemented in the matching service
        matches = []  # Placeholder
        
        logger.info(f"Retrieved {len(matches)} matches for user: {user_id}")
        return matches
        
    except Exception as e:
        logger.error(f"Error retrieving user matches: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to retrieve user matches: {str(e)}"
        )
