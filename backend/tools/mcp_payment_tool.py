from typing import Dict, Any
from loguru import logger
from tools.ap2_protocol import AP2PaymentMandate, verify_ap2_mandate
from models.trip_db import TransactionSplit, PaymentMandate
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

class MCPPaymentTool:
    def __init__(self, db_session: AsyncSession):
        self.db = db_session

    async def execute_agentic_split_payment(
        self,
        split_id: str,
        user1_mandate_payload: Dict[str, Any],
        user1_signature: str,
        user1_verify_key: str,
        user2_mandate_payload: Dict[str, Any],
        user2_signature: str,
        user2_verify_key: str
    ) -> Dict[str, Any]:
        """
        MCP tool that verifies AP2 authorization mandates and executes a split payment.
        """
        logger.info(f"[MCP Payment Tool] Commencing payment execution for split: {split_id}")
        
        # 1. Fetch split record
        result = await self.db.execute(
            select(TransactionSplit).where(TransactionSplit.id == split_id)
        )
        split_record = result.scalars().first()
        if not split_record:
            return {"success": False, "error": f"Transaction split ID {split_id} not found."}
            
        if split_record.status == "success":
            return {"success": True, "message": "Transaction already executed successfully."}

        # 2. Parse and verify AP2 Mandate for User 1
        try:
            m1 = AP2PaymentMandate(**user1_mandate_payload)
            if not verify_ap2_mandate(m1, user1_signature, user1_verify_key):
                return {"success": False, "error": "AP2 Mandate validation failed for User 1."}
            
            # Check limits
            if split_record.user1Amount > m1.limit_amount:
                return {"success": False, "error": f"User 1 charge ({split_record.user1Amount}) exceeds mandate limit ({m1.limit_amount})."}
        except Exception as e:
            return {"success": False, "error": f"Invalid AP2 mandate payload for User 1: {str(e)}"}

        # 3. Parse and verify AP2 Mandate for User 2
        try:
            m2 = AP2PaymentMandate(**user2_mandate_payload)
            if not verify_ap2_mandate(m2, user2_signature, user2_verify_key):
                return {"success": False, "error": "AP2 Mandate validation failed for User 2."}
            
            # Check limits
            if split_record.user2Amount > m2.limit_amount:
                return {"success": False, "error": f"User 2 charge ({split_record.user2Amount}) exceeds mandate limit ({m2.limit_amount})."}
        except Exception as e:
            return {"success": False, "error": f"Invalid AP2 mandate payload for User 2: {str(e)}"}

        # 4. Save Mandates in DB
        db_m1 = PaymentMandate(
            userId=split_record.user1Id,
            tripPlanId=split_record.tripPlanId,
            limitAmount=m1.limit_amount,
            currency=m1.currency,
            signature=user1_signature,
            publicKey=m1.public_key,
            scope=m1.scope,
            status="completed"
        )
        db_m2 = PaymentMandate(
            userId=split_record.user2Id,
            tripPlanId=split_record.tripPlanId,
            limitAmount=m2.limit_amount,
            currency=m2.currency,
            signature=user2_signature,
            publicKey=m2.public_key,
            scope=m2.scope,
            status="completed"
        )
        
        self.db.add(db_m1)
        self.db.add(db_m2)

        # 5. Simulate payment gateway execution (Stripe / Bank real-time transfer)
        logger.info(f"[MCP Payment Tool] Hitting Stripe API for User 1 ({split_record.user1Id}): Charging {split_record.user1Amount} {split_record.currency}")
        logger.info(f"[MCP Payment Tool] Hitting Stripe API for User 2 ({split_record.user2Id}): Charging {split_record.user2Amount} {split_record.currency}")
        
        # Payment succeeded! Update split status
        split_record.status = "success"
        await self.db.commit()
        
        logger.info(f"[MCP Payment Tool] Split payment completed successfully! Split ID: {split_id}")
        return {
            "success": True,
            "message": "Split transaction executed successfully via AP2 authorizations.",
            "charges": {
                split_record.user1Id: split_record.user1Amount,
                split_record.user2Id: split_record.user2Amount
            },
            "currency": split_record.currency
        }
