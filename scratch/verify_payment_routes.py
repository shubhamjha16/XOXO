import asyncio
import os
import sys

# Add backend to path relative to workspace root
sys.path.append(os.path.join(os.path.dirname(__file__), "..", "backend"))

from dotenv import load_dotenv
load_dotenv(os.path.join(os.path.dirname(__file__), "..", "backend", ".env"))

from services.db_service import get_db_session
from services.a2a_negotiator import A2ANegotiator
from tools.mcp_payment_tool import MCPPaymentTool
from tools.ap2_protocol import AP2PaymentMandate, sign_ap2_mandate

async def run_validation():
    print("Starting system validation test on SQLite local database...")
    
    # Sign secret keys
    user_secret_key = "my_super_secret_signing_key_123"
    
    async with get_db_session() as session:
        # Step 1: Perform A2A Split Negotiation
        negotiator = A2ANegotiator(session)
        u1_amt, u2_amt, split_id = await negotiator.negotiate_split(
            trip_plan_id="trip_test_999",
            total_amount=50000.00,
            user1_id="user_A",
            user2_id="user_B",
            user1_pref_budget=25000.00,
            user2_pref_budget=25000.00,
            currency="INR"
        )
        print(f"1. A2A Split Negotiated: User1 gets {u1_amt} INR, User2 gets {u2_amt} INR. Split ID: {split_id}")
        
        # Step 2: Sign Mandates using AP2 Protocol
        m1 = AP2PaymentMandate(
            user_id="user_A",
            trip_plan_id="trip_test_999",
            limit_amount=u1_amt,
            currency="INR",
            scope="trip_booking",
            public_key="user_A_identity"
        )
        sig1 = sign_ap2_mandate(m1, user_secret_key)
        m1.signature = sig1
        
        m2 = AP2PaymentMandate(
            user_id="user_B",
            trip_plan_id="trip_test_999",
            limit_amount=u2_amt,
            currency="INR",
            scope="trip_booking",
            public_key="user_B_identity"
        )
        sig2 = sign_ap2_mandate(m2, user_secret_key)
        m2.signature = sig2
        print("2. AP2 Cryptographic mandates signed for User A and User B.")

        # Step 3: Execute split payment through simulated MCP tool
        payment_tool = MCPPaymentTool(session)
        result = await payment_tool.execute_agentic_split_payment(
            split_id=split_id,
            user1_mandate_payload=m1.model_dump(),
            user1_signature=sig1,
            user1_verify_key=user_secret_key,
            user2_mandate_payload=m2.model_dump(),
            user2_signature=sig2,
            user2_verify_key=user_secret_key
        )
        
        print(f"3. MCP Split execution result: {result}")
        assert result["success"] == True
        print("System validation test PASSED successfully!")

if __name__ == "__main__":
    asyncio.run(run_validation())
