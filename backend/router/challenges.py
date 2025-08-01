"""
Adventure Challenge API endpoints for generating, delivering, and tracking challenges.
"""

from fastapi import APIRouter, HTTPException, status, Depends
from loguru import logger
from typing import List, Optional
from pydantic import BaseModel
from datetime import datetime
from enum import Enum

from services.challenge_service import ChallengeService
from agents.adventure_catalyst import adventure_catalyst_agent

router = APIRouter(prefix="/api/challenges", tags=["Adventure Challenges"])

# Enums
class ChallengeDifficulty(str, Enum):
    EASY = "easy"
    MODERATE = "moderate"
    ADVENTUROUS = "adventurous"

class ChallengeCategory(str, Enum):
    ROMANTIC = "romantic"
    ADVENTUROUS = "adventurous"
    CULTURAL = "cultural"
    FUN = "fun"
    FOOD = "food"
    PHOTO = "photo"

class ChallengeStatus(str, Enum):
    SCHEDULED = "scheduled"
    DELIVERED = "delivered"
    COMPLETED = "completed"
    SKIPPED = "skipped"

# Pydantic models
class ChallengeRequest(BaseModel):
    match_id: str
    destination: str
    travel_dates: dict  # {"start": "2025-08-01", "end": "2025-08-10"}
    itinerary: dict  # Full itinerary with daily activities
    traveler_preferences: dict  # Combined preferences from both travelers
    categories: List[ChallengeCategory] = [ChallengeCategory.FUN, ChallengeCategory.ADVENTUROUS]

class Challenge(BaseModel):
    challenge_id: str
    title: str
    description: str
    category: ChallengeCategory
    difficulty: ChallengeDifficulty
    estimated_duration: int  # minutes
    optimal_timing: dict  # {"day": 2, "time": "afternoon", "hour": 14}
    location_context: str  # e.g., "Best done near the Eiffel Tower"
    instructions: List[str]
    alternatives: List[str]
    photo_opportunity: bool
    tips: List[str]

class ChallengeSchedule(BaseModel):
    trip_id: str
    match_id: str
    total_challenges: int
    challenges: List[Challenge]
    delivery_schedule: List[dict]  # [{"challenge_id": "...", "delivery_time": "..."}]

class ChallengeDelivery(BaseModel):
    challenge_id: str
    trip_id: str
    delivered_at: datetime
    status: ChallengeStatus

class ChallengeCompletion(BaseModel):
    challenge_id: str
    trip_id: str
    completed_by: List[str]  # user_ids
    completion_photos: List[str] = []  # photo URLs
    completion_notes: str = ""
    enjoyment_rating: Optional[float] = None  # 1.0 to 5.0
    completed_at: datetime

class ProgressResponse(BaseModel):
    trip_id: str
    total_challenges: int
    completed_challenges: int
    completion_rate: float
    next_challenge: Optional[Challenge] = None
    recent_completions: List[ChallengeCompletion] = []

# Dependency to get challenge service
async def get_challenge_service() -> ChallengeService:
    from services.db_service import get_db_connection
    from services.notification_service import NotificationService  # Would need to create this
    
    db = await get_db_connection()
    notification_service = NotificationService()  # Placeholder
    return ChallengeService(db, notification_service)


@router.post(
    "/generate",
    response_model=ChallengeSchedule,
    summary="Generate Adventure Challenges",
    description="Generate personalized adventure challenges for a co-traveler trip"
)
async def generate_challenges(
    request: ChallengeRequest,
    challenge_service: ChallengeService = Depends(get_challenge_service)
) -> ChallengeSchedule:
    """
    Generate personalized adventure challenges for co-travelers using AI.
    
    Args:
        request: Challenge generation request with trip details and preferences
        
    Returns:
        ChallengeSchedule: Generated challenges with delivery schedule
    """
    try:
        logger.info(f"Generating challenges for match: {request.match_id}")
        
        # Use AI agent to generate challenges
        challenge_prompt = f"""
        Generate personalized adventure challenges for co-travelers.
        
        Destination: {request.destination}
        Travel Dates: {request.travel_dates}
        Traveler Preferences: {request.traveler_preferences}
        Requested Categories: {[cat.value for cat in request.categories]}
        Itinerary: {request.itinerary}
        
        Create 8-12 diverse challenges that:
        1. Match the destination's unique characteristics
        2. Align with traveler preferences and interests
        3. Vary in difficulty and time requirements
        4. Include different categories (romantic, adventurous, cultural, fun)
        5. Are logistically feasible within the itinerary
        6. Encourage interaction and shared experiences
        
        For each challenge, provide:
        - Title and engaging description
        - Category and difficulty level
        - Estimated duration
        - Optimal timing (day and time)
        - Step-by-step instructions
        - Alternative options
        - Local context and tips
        """
        
        ai_response = await adventure_catalyst_agent.run(challenge_prompt)
        
        # Start challenge schedule using the service
        trip_id = await challenge_service.start_challenge_schedule(
            request.match_id, 
            request.itinerary
        )
        
        # Parse AI response into challenges (simplified for now)
        challenges = [
            Challenge(
                challenge_id=f"challenge_{i}",
                title=f"Sample Challenge {i}",
                description="A fun adventure challenge",
                category=ChallengeCategory.FUN,
                difficulty=ChallengeDifficulty.MODERATE,
                estimated_duration=60,
                optimal_timing={"day": 1, "time": "afternoon", "hour": 14},
                location_context=request.destination,
                instructions=["Step 1", "Step 2", "Step 3"],
                alternatives=["Alternative option"],
                photo_opportunity=True,
                tips=["Local tip"]
            )
            for i in range(1, 6)  # Generate 5 sample challenges
        ]
        
        logger.info(f"Generated {len(challenges)} challenges for trip: {trip_id}")
        
        return ChallengeSchedule(
            trip_id=trip_id,
            match_id=request.match_id,
            total_challenges=len(challenges),
            challenges=challenges,
            delivery_schedule=[
                {"challenge_id": c.challenge_id, "delivery_time": "2025-08-01T10:00:00Z"}
                for c in challenges
            ]
        )
        
    except Exception as e:
        logger.error(f"Error generating challenges: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to generate challenges: {str(e)}"
        )


@router.post(
    "/complete",
    response_model=dict,
    summary="Complete Challenge",
    description="Mark a challenge as completed with photos and feedback"
)
async def complete_challenge(
    completion: ChallengeCompletion,
    challenge_service: ChallengeService = Depends(get_challenge_service)
) -> dict:
    """
    Mark a challenge as completed with optional photos and feedback.
    
    Args:
        completion: Challenge completion information
        
    Returns:
        dict: Success status and completion details
    """
    try:
        logger.info(f"Completing challenge: {completion.challenge_id}")
        
        # Complete challenge using the service
        await challenge_service.complete_challenge(
            completion.trip_id,
            completion.challenge_id,
            completion.model_dump()
        )
        
        logger.info(f"Challenge completed successfully: {completion.challenge_id}")
        
        return {
            "success": True,
            "message": "Challenge completed successfully! 🎉",
            "challenge_id": completion.challenge_id,
            "completed_at": completion.completed_at.isoformat()
        }
        
    except Exception as e:
        logger.error(f"Error completing challenge: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to complete challenge: {str(e)}"
        )


@router.get(
    "/progress/{trip_id}",
    response_model=ProgressResponse,
    summary="Get Trip Progress",
    description="Get current progress of challenges for a trip"
)
async def get_trip_progress(
    trip_id: str,
    challenge_service: ChallengeService = Depends(get_challenge_service)
) -> ProgressResponse:
    """
    Get current progress of challenges for a trip.
    
    Args:
        trip_id: Trip identifier
        
    Returns:
        ProgressResponse: Current progress with completion stats
    """
    try:
        progress = await challenge_service.get_trip_progress(trip_id)
        
        return ProgressResponse(
            trip_id=trip_id,
            total_challenges=progress["total_challenges"],
            completed_challenges=progress["completed_challenges"],
            completion_rate=progress["completion_rate"],
            next_challenge=progress.get("next_challenge"),
            recent_completions=[]  # Would be populated from service
        )
        
    except Exception as e:
        logger.error(f"Error getting trip progress: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to get trip progress: {str(e)}"
        )


@router.post(
    "/deliver/{trip_id}/{challenge_id}",
    response_model=ChallengeDelivery,
    summary="Deliver Challenge",
    description="Manually deliver a specific challenge to travelers"
)
async def deliver_challenge(
    trip_id: str,
    challenge_id: str,
    challenge_service: ChallengeService = Depends(get_challenge_service)
) -> ChallengeDelivery:
    """
    Manually deliver a specific challenge to travelers.
    
    Args:
        trip_id: Trip identifier
        challenge_id: Challenge identifier
        
    Returns:
        ChallengeDelivery: Delivery confirmation
    """
    try:
        await challenge_service.deliver_challenge(trip_id, challenge_id)
        
        return ChallengeDelivery(
            challenge_id=challenge_id,
            trip_id=trip_id,
            delivered_at=datetime.now(),
            status=ChallengeStatus.DELIVERED
        )
        
    except Exception as e:
        logger.error(f"Error delivering challenge: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to deliver challenge: {str(e)}"
        )


@router.get(
    "/trip/{trip_id}",
    response_model=List[Challenge],
    summary="Get Trip Challenges",
    description="Get all challenges for a specific trip"
)
async def get_trip_challenges(
    trip_id: str,
    status: Optional[ChallengeStatus] = None,
    challenge_service: ChallengeService = Depends(get_challenge_service)
) -> List[Challenge]:
    """
    Get all challenges for a specific trip, optionally filtered by status.
    
    Args:
        trip_id: Trip identifier
        status: Optional status filter
        
    Returns:
        List[Challenge]: List of challenges for the trip
    """
    try:
        # This would be implemented in the challenge service
        challenges = []  # Placeholder
        
        logger.info(f"Retrieved {len(challenges)} challenges for trip: {trip_id}")
        return challenges
        
    except Exception as e:
        logger.error(f"Error getting trip challenges: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to get trip challenges: {str(e)}"
        )
