from fastapi import APIRouter, Depends, HTTPException, Query
from pydantic import BaseModel, Field
from typing import List, Optional
from sqlalchemy.ext.asyncio import AsyncSession
from services.db_service import get_db_session
from services.dare_service import DareService
from services.safety_service import SafetyService

router = APIRouter(prefix="/api/gamification", tags=["gamification"])

# Models
class DareCheckInRequest(BaseModel):
    user_id: str
    companion_id: Optional[str] = None
    dare_id: str
    latitude: float
    longitude: float

class UserRateRequest(BaseModel):
    rater_id: str
    ratee_id: str
    rating: int = Field(..., ge=1, le=5)
    tags: List[str]
    comment: Optional[str] = None

class EscrowActionRequest(BaseModel):
    split_id: str
    user_id: str
    action: str = Field(..., description="release or refund")

# Endpoints
@router.get("/dares/nearby")
async def get_nearby_dares(
    lat: float = Query(...),
    lng: float = Query(...),
    city: str = Query(...),
    session: AsyncSession = Depends(get_db_session)
):
    service = DareService(session)
    try:
        dares = await service.get_nearby_dares(lat, lng, city)
        return {"success": True, "dares": dares}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/dares/check-in")
async def dare_check_in(
    request: DareCheckInRequest,
    session: AsyncSession = Depends(get_db_session)
):
    service = DareService(session)
    result = await service.check_in_dare(
        user_id=request.user_id,
        companion_id=request.companion_id,
        dare_id=request.dare_id,
        lat=request.latitude,
        lng=request.longitude
    )
    if not result["success"]:
        raise HTTPException(status_code=400, detail=result["message"])
    return result

@router.post("/safety/rate")
async def submit_rating(
    request: UserRateRequest,
    session: AsyncSession = Depends(get_db_session)
):
    service = SafetyService(session)
    result = await service.submit_rating(
        rater_id=request.rater_id,
        ratee_id=request.ratee_id,
        rating_val=request.rating,
        tags=request.tags,
        comment=request.comment
    )
    if not result["success"]:
        raise HTTPException(status_code=400, detail=result["message"])
    return result

@router.get("/safety/profile/{user_id}")
async def get_safety_profile(
    user_id: str,
    session: AsyncSession = Depends(get_db_session)
):
    service = SafetyService(session)
    try:
        return await service.get_user_average_rating(user_id)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/safety/escrow")
async def update_escrow_status(
    request: EscrowActionRequest,
    session: AsyncSession = Depends(get_db_session)
):
    service = SafetyService(session)
    result = await service.set_escrow_status(
        split_id=request.split_id,
        user_id=request.user_id,
        action=request.action
    )
    if not result["success"]:
        raise HTTPException(status_code=400, detail=result["message"])
    return result
