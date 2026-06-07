from typing import Dict, Any, Tuple
from loguru import logger
from services.db_service import get_db_connection
from models.trip_db import TransactionSplit
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
import json

class A2ANegotiator:
    def __init__(self, db_session: AsyncSession):
        self.db = db_session

    async def negotiate_split(
        self, 
        trip_plan_id: str, 
        total_amount: float, 
        user1_id: str, 
        user2_id: str,
        user1_pref_budget: float,
        user2_pref_budget: float,
        currency: str = "USD",
        split_mode: str = "equal_split"
    ) -> Tuple[float, float, str]:
        """
        Simulates Agent2Agent (A2A) negotiation protocol.
        Computes the split dynamically based on their individual preferred budgets,
        or handles 100% sponsor traditional mode.
        """
        logger.info(f"[A2A Negotiation] Initiating split negotiation between Agent {user1_id} and Agent {user2_id} for trip {trip_plan_id} using mode: {split_mode}")
        
        if split_mode == "traditional_sponsor":
            user1_amount = total_amount
            user2_amount = 0.0
            split_ratio = "100% traditional sponsor (User 1 pays all)"
        elif user1_pref_budget == user2_pref_budget:
            user1_amount = total_amount / 2
            user2_amount = total_amount / 2
            split_ratio = "50/50 equal split"
        else:
            # Proportional split based on their budget ratios
            total_pref = user1_pref_budget + user2_pref_budget
            user1_ratio = user1_pref_budget / total_pref
            user2_ratio = user2_pref_budget / total_pref
            
            user1_amount = round(total_amount * user1_ratio, 2)
            user2_amount = round(total_amount * user2_ratio, 2)
            split_ratio = f"Proportional split: {user1_ratio*100:.1f}% / {user2_ratio*100:.1f}%"

        logger.info(f"[A2A Negotiation] Agreed Split: User 1: {user1_amount} {currency}, User 2: {user2_amount} {currency} ({split_ratio})")
        
        # Create TransactionSplit record in database
        db_split = TransactionSplit(
            tripPlanId=trip_plan_id,
            totalAmount=total_amount,
            currency=currency,
            user1Id=user1_id,
            user2Id=user2_id,
            user1Amount=user1_amount,
            user2Amount=user2_amount,
            status="pending",
            escrowStatus="held",
            splitMode=split_mode
        )
        
        self.db.add(db_split)
        await self.db.commit()
        await self.db.refresh(db_split)
        
        logger.info(f"[A2A Negotiation] Split database record created: {db_split.id}")
        return user1_amount, user2_amount, db_split.id
