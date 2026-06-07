import math
from typing import List, Dict, Any, Optional
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from models.trip_db import LocationDare, UserDareStatus
from loguru import logger
from datetime import datetime, timezone

def calculate_haversine_distance(lat1: float, lon1: float, lat2: float, lon2: float) -> float:
    """
    Calculates the great-circle distance between two points on the Earth
    in meters.
    """
    R = 6371000.0  # Earth radius in meters
    
    phi1 = math.radians(lat1)
    phi2 = math.radians(lat2)
    delta_phi = math.radians(lat2 - lat1)
    delta_lambda = math.radians(lon2 - lon1)
    
    a = math.sin(delta_phi / 2.0) ** 2 + \
        math.cos(phi1) * math.cos(phi2) * \
        math.sin(delta_lambda / 2.0) ** 2
        
    c = 2.0 * math.atan2(math.sqrt(a), math.sqrt(1.0 - a))
    
    return R * c

class DareService:
    def __init__(self, db_session: AsyncSession):
        self.db = db_session

    async def seed_default_dares(self, city: str) -> None:
        """Seeds sample geofenced dares for a destination if none exist."""
        result = await self.db.execute(
            select(LocationDare).where(LocationDare.targetCity == city)
        )
        existing = result.scalars().all()
        if existing:
            return
            
        logger.info(f"[DareService] Seeding default dares for {city}")
        
        # Default mock dares around central coords depending on city (e.g. Tokyo)
        dares_data = [
            {
                "title": "Tokyo Tower Selfie Quest",
                "description": "Walk to Tokyo Tower, find a angle showing the top of the tower, and snap a selfie together.",
                "latitude": 35.6586,
                "longitude": 139.7454,
                "radiusMeters": 100.0,
                "pointsReward": 150,
                "isSponsored": False
            },
            {
                "title": "Shibuya Crossing High-Five Challenge",
                "description": "Go to the Shibuya Crossing hotspot and high-five your companion at the green light.",
                "latitude": 35.6595,
                "longitude": 139.7005,
                "radiusMeters": 50.0,
                "pointsReward": 100,
                "isSponsored": True,
                "sponsorName": "Shibuya Tourism Board"
            },
            {
                "title": "Hachiko Reunion",
                "description": "Meet up at the Hachiko Memorial Statue and upload a photo mimicking the faithful companion.",
                "latitude": 35.6591,
                "longitude": 139.7007,
                "radiusMeters": 30.0,
                "pointsReward": 120,
                "isSponsored": False
            }
        ]
        
        for d in dares_data:
            new_dare = LocationDare(
                title=d["title"],
                description=d["description"],
                latitude=d["latitude"],
                longitude=d["longitude"],
                radiusMeters=d["radiusMeters"],
                pointsReward=d["pointsReward"],
                targetCity=city,
                isSponsored=d["isSponsored"],
                sponsorName=d.get("sponsorName")
            )
            self.db.add(new_dare)
        
        await self.db.commit()

    async def get_nearby_dares(self, lat: float, lng: float, city: str) -> List[Dict[str, Any]]:
        """Fetches challenges inside the city and calculates user proximity status."""
        await self.seed_default_dares(city)
        
        result = await self.db.execute(
            select(LocationDare).where(LocationDare.targetCity == city)
        )
        dares = result.scalars().all()
        
        nearby_dares = []
        for dare in dares:
            dist = calculate_haversine_distance(lat, lng, dare.latitude, dare.longitude)
            is_unlocked = dist <= dare.radiusMeters
            
            nearby_dares.append({
                "id": dare.id,
                "title": dare.title,
                "description": dare.description,
                "latitude": dare.latitude,
                "longitude": dare.longitude,
                "radiusMeters": dare.radiusMeters,
                "pointsReward": dare.pointsReward,
                "distanceMeters": round(dist, 1),
                "isUnlocked": is_unlocked,
                "isSponsored": dare.isSponsored,
                "sponsorName": dare.sponsorName
            })
            
        return nearby_dares

    async def check_in_dare(
        self, user_id: str, companion_id: Optional[str], dare_id: str, lat: float, lng: float
    ) -> Dict[str, Any]:
        """Validates geofence lock status and completes the quest."""
        result = await self.db.execute(
            select(LocationDare).where(LocationDare.id == dare_id)
        )
        dare = result.scalar_one_or_none()
        if not dare:
            return {"success": False, "message": "Dare challenge not found"}
            
        dist = calculate_haversine_distance(lat, lng, dare.latitude, dare.longitude)
        if dist > dare.radiusMeters:
            return {
                "success": False,
                "message": f"Too far from target location. You are {round(dist, 1)}m away (must be within {dare.radiusMeters}m)."
            }
            
        # Register completion
        completion = UserDareStatus(
            userId=user_id,
            companionId=companion_id,
            dareId=dare_id,
            status="completed",
            completedAt=datetime.now(timezone.utc).replace(tzinfo=None)
        )
        self.db.add(completion)
        await self.db.commit()
        
        logger.info(f"[DareService] User {user_id} successfully checked in for Dare {dare.title}!")
        return {
            "success": True,
            "message": "Challenge completed successfully!",
            "pointsReward": dare.pointsReward
        }
