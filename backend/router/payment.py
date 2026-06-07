from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
from typing import Dict, Any
from loguru import logger
from services.db_service import get_db_connection
from sqlalchemy.ext.asyncio import AsyncSession
from services.a2a_negotiator import A2ANegotiator
from tools.mcp_payment_tool import MCPPaymentTool

router = APIRouter(prefix="/api/payment", tags=["Agentic Payment System"])

# Dependency to get database session
async def get_db_session() -> AsyncSession:
    from services.db_service import get_db_connection
    # Yield database session wrapper
    db = await get_db_connection()
    return db

class NegotiationRequest(BaseModel):
    trip_plan_id: str
    total_amount: float
    user1_id: str
    user2_id: str
    user1_pref_budget: float
    user2_pref_budget: float
    currency: str = "USD"

class ExecutionRequest(BaseModel):
    split_id: str
    user1_mandate: Dict[str, Any]
    user1_signature: str
    user1_verify_key: str
    user2_mandate: Dict[str, Any]
    user2_signature: str
    user2_verify_key: str

@router.post(
    "/negotiate",
    summary="Negotiate split payment over A2A",
    description="Simulates User1 agent and User2 agent negotiating split payments based on their individual budgets."
)
async def negotiate_payment_split(
    request: NegotiationRequest,
    db: AsyncSession = Depends(get_db_session)
):
    try:
        negotiator = A2ANegotiator(db)
        u1_amt, u2_amt, split_id = await negotiator.negotiate_split(
            trip_plan_id=request.trip_plan_id,
            total_amount=request.total_amount,
            user1_id=request.user1_id,
            user2_id=request.user2_id,
            user1_pref_budget=request.user1_pref_budget,
            user2_pref_budget=request.user2_pref_budget,
            currency=request.currency
        )
        return {
            "success": True,
            "split_id": split_id,
            "user1_amount": u1_amt,
            "user2_amount": u2_amt,
            "currency": request.currency,
            "message": "A2A agent negotiation complete. Split agreed."
        }
    except Exception as e:
        logger.error(f"Error negotiating split payment: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Payment negotiation failed: {str(e)}"
        )

@router.post(
    "/execute",
    summary="Execute agentic split payment over AP2 & MCP",
    description="Verifies the AP2 mandates signatures from both users, checks constraints, and processes payments via MCP tool."
)
async def execute_split_payment(
    request: ExecutionRequest,
    db: AsyncSession = Depends(get_db_session)
):
    try:
        payment_tool = MCPPaymentTool(db)
        result = await payment_tool.execute_agentic_split_payment(
            split_id=request.split_id,
            user1_mandate_payload=request.user1_mandate,
            user1_signature=request.user1_signature,
            user1_verify_key=request.user1_verify_key,
            user2_mandate_payload=request.user2_mandate,
            user2_signature=request.user2_signature,
            user2_verify_key=request.user2_verify_key
        )
        if not result["success"]:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=result["error"]
            )
        return result
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error executing agentic payment split: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Payment execution failed: {str(e)}"
        )
