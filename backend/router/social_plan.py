"""
Enhanced travel planning endpoints that integrate co-traveler matching and adventure challenges.
"""

import asyncio
from fastapi import APIRouter, HTTPException, status, Depends
from loguru import logger
from models.social_travel_plan import (
    SocialTravelPlanRequest, 
    SocialTravelPlanResponse, 
    TravelPlanWithSocialFeatures
)
from models.plan_task import TaskStatus
from services.plan_service import generate_travel_plan
from services.matching_service import MatchingService
from services.challenge_service import ChallengeService
from repository.plan_task_repository import create_plan_task, update_task_status
from agents.team import trip_planning_team

router = APIRouter(prefix="/api/social-plan", tags=["Social Travel Planning"])

# Dependencies
async def get_matching_service() -> MatchingService:
    from services.db_service import get_db_connection
    db = await get_db_connection()
    return MatchingService(db)

async def get_challenge_service() -> ChallengeService:
    from services.db_service import get_db_connection
    from services.notification_service import NotificationService
    db = await get_db_connection()
    notification_service = NotificationService()
    return ChallengeService(db, notification_service)


@router.post(
    "/create",
    response_model=SocialTravelPlanResponse,
    summary="Create Social Travel Plan",
    description="Create a complete travel plan with optional co-traveler matching and adventure challenges"
)
async def create_social_travel_plan(
    request: SocialTravelPlanRequest,
    matching_service: MatchingService = Depends(get_matching_service),
    challenge_service: ChallengeService = Depends(get_challenge_service)
) -> SocialTravelPlanResponse:
    """
    Create a comprehensive travel plan that optionally includes:
    - Co-traveler matching based on budget and ratings
    - Adventure challenges tailored to the destination
    - Social coordination features
    
    Args:
        request: Enhanced travel plan request with social preferences
        
    Returns:
        SocialTravelPlanResponse: Complete travel plan with social features
    """
    try:
        logger.info(f"Creating social travel plan for trip ID: {request.trip_plan_id}")
        
        # Create initial task
        task = await create_plan_task(
            trip_plan_id=request.trip_plan_id,
            task_type="social_travel_plan_generation",
            input_data=request.enhanced_travel_plan.model_dump(),
        )
        
        logger.info(f"Task created: {task.id}")
        
        # Background task for comprehensive plan generation
        async def generate_social_plan_with_tracking():
            try:
                await update_task_status(task.id, TaskStatus.in_progress)
                logger.info(f"Social travel plan generation started: {task.id}")
                
                cotraveler_match = None
                adventure_challenges = []
                
                # Step 1: Co-traveler matching (if requested)
                if (request.enhanced_travel_plan.cotraveler_preferences and 
                    request.enhanced_travel_plan.cotraveler_preferences.enable_matching):
                    
                    logger.info("Starting co-traveler matching process")
                    
                    # Find potential matches
                    potential_matches = await matching_service.find_potential_matches(
                        request.enhanced_travel_plan.user_id
                    )
                    
                    if potential_matches:
                        # Create match (simplified - would use AI agent for selection)
                        match_id = await matching_service.create_match(
                            request.enhanced_travel_plan.user_id,
                            potential_matches[0]["user_id"]
                        )
                        
                        cotraveler_match = {
                            "match_id": match_id,
                            "user1_id": request.enhanced_travel_plan.user_id,
                            "user2_id": potential_matches[0]["user_id"],
                            "compatibility_score": 0.85,
                            "match_explanation": "Matched based on similar budget and travel preferences",
                            "shared_budget": {"total": 150000, "currency": "INR"},
                            "communication_preferences": {"style": "moderate"}
                        }
                        
                        logger.info(f"Co-traveler match created: {match_id}")
                
                # Step 2: Generate core travel plan using existing team
                logger.info("Generating core travel itinerary")
                core_plan_result = await trip_planning_team.run(
                    f"""
                    Create a detailed travel itinerary for:
                    {request.enhanced_travel_plan.core_plan.model_dump()}
                    
                    {"Include considerations for two travelers sharing the experience." if cotraveler_match else ""}
                    """
                )
                
                # Step 3: Generate adventure challenges (if requested)
                if (request.enhanced_travel_plan.challenge_preferences and 
                    request.enhanced_travel_plan.challenge_preferences.enable_challenges):
                    
                    logger.info("Generating adventure challenges")
                    
                    # Create itinerary object for challenge generation
                    itinerary_data = {
                        "destination": request.enhanced_travel_plan.core_plan.destination,
                        "start_date": request.enhanced_travel_plan.core_plan.travel_dates.start,
                        "end_date": request.enhanced_travel_plan.core_plan.travel_dates.end,
                        "activities": []  # Would be extracted from core_plan_result
                    }
                    
                    # Start challenge schedule
                    if cotraveler_match:
                        trip_id = await challenge_service.start_challenge_schedule(
                            cotraveler_match["match_id"],
                            itinerary_data
                        )
                        
                        # Generate sample challenges
                        adventure_challenges = [
                            {
                                "challenge_id": f"challenge_{i}",
                                "title": f"Adventure Challenge {i}",
                                "description": f"Explore {request.enhanced_travel_plan.core_plan.destination} together",
                                "category": "fun",
                                "difficulty": "moderate",
                                "estimated_duration": 60,
                                "optimal_timing": {"day": i, "time": "afternoon"}
                            }
                            for i in range(1, 4)
                        ]
                        
                        logger.info(f"Generated {len(adventure_challenges)} challenges")
                
                # Step 4: Combine everything into final response
                final_result = TravelPlanWithSocialFeatures(
                    core_itinerary=core_plan_result,
                    cotraveler_info=cotraveler_match,
                    challenges=adventure_challenges,
                    rating_guidelines={
                        "criteria": ["communication", "reliability", "fun", "respect"],
                        "scale": "1-5 stars",
                        "guidance": "Rate your co-traveler honestly and constructively"
                    },
                    generated_at=task.created_at.isoformat(),
                    includes_social_features=bool(cotraveler_match or adventure_challenges)
                )
                
                # Update task with success
                await update_task_status(
                    task.id, 
                    TaskStatus.success, 
                    output_data={"social_travel_plan": final_result.model_dump()}
                )
                
                logger.info(f"Social travel plan generated successfully: {task.id}")
                
            except Exception as e:
                logger.error(f"Error generating social travel plan: {str(e)}")
                await update_task_status(
                    task.id, TaskStatus.error, error_message=str(e)
                )
                raise
        
        # Start the background task
        asyncio.create_task(generate_social_plan_with_tracking())
        
        # Return immediate response
        response = SocialTravelPlanResponse(
            success=True,
            message="Social travel plan generation started successfully",
            trip_plan_id=request.trip_plan_id,
            social_features_enabled=request.enhanced_travel_plan.is_social_trip
        )
        
        logger.info(f"Social travel plan creation initiated: {request.trip_plan_id}")
        return response
        
    except Exception as e:
        logger.error(f"Error creating social travel plan: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to create social travel plan: {str(e)}"
        )


@router.get(
    "/status/{trip_plan_id}",
    summary="Get Social Travel Plan Status",
    description="Get the current status of a social travel plan generation"
)
async def get_social_plan_status(trip_plan_id: str):
    """
    Get the current status of social travel plan generation.
    
    Args:
        trip_plan_id: Trip plan identifier
        
    Returns:
        dict: Current status and progress information
    """
    try:
        # This would query the task status from the database
        # Placeholder implementation
        return {
            "trip_plan_id": trip_plan_id,
            "status": "in_progress",
            "progress": {
                "core_plan": "completed",
                "cotraveler_matching": "in_progress",
                "challenge_generation": "pending"
            },
            "estimated_completion": "2-3 minutes"
        }
        
    except Exception as e:
        logger.error(f"Error getting social plan status: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to get social plan status: {str(e)}"
        )


@router.get(
    "/result/{trip_plan_id}",
    response_model=TravelPlanWithSocialFeatures,
    summary="Get Social Travel Plan Result",
    description="Get the completed social travel plan with all features"
)
async def get_social_plan_result(trip_plan_id: str) -> TravelPlanWithSocialFeatures:
    """
    Get the completed social travel plan result.
    
    Args:
        trip_plan_id: Trip plan identifier
        
    Returns:
        TravelPlanWithSocialFeatures: Complete travel plan with social features
    """
    try:
        # This would retrieve the completed plan from the database
        # Placeholder implementation
        return TravelPlanWithSocialFeatures(
            core_itinerary="# Complete Travel Itinerary\n\nYour amazing trip details...",
            cotraveler_info=None,
            challenges=[],
            rating_guidelines={},
            generated_at="2025-07-30T10:00:00Z",
            includes_social_features=False
        )
        
    except Exception as e:
        logger.error(f"Error getting social plan result: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to get social plan result: {str(e)}"
        )
