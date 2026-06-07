from typing import List, Dict, Any, Optional
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func
from models.trip_db import UserRating, TransactionSplit
from loguru import logger

class SafetyService:
    def __init__(self, db_session: AsyncSession):
        self.db = db_session

    async def submit_rating(
        self, rater_id: str, ratee_id: str, rating_val: int, tags: List[str], comment: Optional[str] = None
    ) -> Dict[str, Any]:
        """Submits an Uber-style user review rating."""
        if not (1 <= rating_val <= 5):
            return {"success": False, "message": "Rating value must be between 1 and 5"}
            
        new_rating = UserRating(
            raterId=rater_id,
            rateeId=ratee_id,
            rating=rating_val,
            tags=",".join(tags),
            comment=comment
        )
        self.db.add(new_rating)
        await self.db.commit()
        
        logger.info(f"[SafetyService] Rating submitted: User {rater_id} rated {ratee_id} as {rating_val} stars.")
        return {"success": True, "message": "Rating submitted successfully"}

    async def get_user_average_rating(self, user_id: str) -> Dict[str, Any]:
        """Returns the average rating score and all descriptive tags."""
        result = await self.db.execute(
            select(func.avg(UserRating.rating)).where(UserRating.rateeId == user_id)
        )
        avg_rating = result.scalar()
        
        result_tags = await self.db.execute(
            select(UserRating.tags).where(UserRating.rateeId == user_id)
        )
        all_tags = []
        for tag_row in result_tags.scalars().all():
            if tag_row:
                all_tags.extend([t.strip() for t in tag_row.split(",") if t.strip()])
                
        # Count frequency of tags
        tag_counts = {}
        for tag in all_tags:
            tag_counts[tag] = tag_counts.get(tag, 0) + 1
            
        return {
            "userId": user_id,
            "averageRating": round(float(avg_rating), 2) if avg_rating else 5.0,
            "reviewCount": len(all_tags),
            "safetyTags": tag_counts
        }

    async def set_escrow_status(self, split_id: str, user_id: str, action: str) -> Dict[str, Any]:
        """Locks, releases, or refunds payment split funds held in escrow."""
        result = await self.db.execute(
            select(TransactionSplit).where(TransactionSplit.id == split_id)
        )
        split = result.scalar_one_or_none()
        if not split:
            return {"success": False, "message": "Transaction split not found"}
            
        # Security validation: user must be part of the split
        if user_id not in [split.user1Id, split.user2Id]:
            return {"success": False, "message": "Unauthorized user access"}
            
        if action == "release":
            split.escrowStatus = "released"
            split.status = "success"
            logger.info(f"[SafetyService] Escrow funds released for split {split_id} by user {user_id}.")
        elif action == "refund":
            split.escrowStatus = "refunded"
            split.status = "failed"
            logger.warning(f"[SafetyService] Escrow funds refunded for split {split_id} by user {user_id}.")
        else:
            return {"success": False, "message": "Invalid escrow action"}
            
        await self.db.commit()
        return {
            "success": True,
            "splitId": split_id,
            "escrowStatus": split.escrowStatus,
            "transactionStatus": split.status
        }
