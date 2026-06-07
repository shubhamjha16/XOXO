import asyncio
import os
import sys

# Add backend to path relative to workspace root
sys.path.append(os.path.join(os.path.dirname(__file__), "..", "backend"))

from dotenv import load_dotenv
load_dotenv(os.path.join(os.path.dirname(__file__), "..", "backend", ".env"))

from services.db_service import get_db_session
from services.a2a_negotiator import A2ANegotiator
from services.dare_service import DareService
from services.safety_service import SafetyService

async def test_all():
    print("Initializing test suites on SQLite dev.db...")
    async with get_db_session() as session:
        # 1. Test A2A traditional host sponsor mode
        print("\n--- 1. Testing A2A Traditional Host Sponsor Mode ---")
        negotiator = A2ANegotiator(session)
        u1_amt, u2_amt, split_id = await negotiator.negotiate_split(
            trip_plan_id="trip_tokyo_101",
            total_amount=1200.00,
            user1_id="inviter_user",
            user2_id="guest_user",
            user1_pref_budget=600.00,
            user2_pref_budget=600.00,
            currency="USD",
            split_mode="traditional_sponsor"
        )
        print(f"Negotiated traditional sponsor split:")
        print(f"  User 1 (Host) pays: ${u1_amt}")
        print(f"  User 2 (Guest) pays: ${u2_amt}")
        print(f"  Split ID: {split_id}")
        assert u1_amt == 1200.00
        assert u2_amt == 0.0

        # 2. Test Escrow Release and Refund actions
        print("\n--- 2. Testing Escrow Split Release ---")
        safety = SafetyService(session)
        escrow_res = await safety.set_escrow_status(split_id, "inviter_user", "release")
        print(f"Escrow release result: {escrow_res}")
        assert escrow_res["success"] == True
        assert escrow_res["escrowStatus"] == "released"

        # 3. Test Safety/Ratings System (Uber-style)
        print("\n--- 3. Testing Safety & Ratings System ---")
        rate_res = await safety.submit_rating(
            rater_id="guest_user",
            ratee_id="inviter_user",
            rating_val=5,
            tags=["safe", "friendly", "punctual"],
            comment="Awesome travel companion, felt extremely secure!"
        )
        print(f"Rating submission result: {rate_res}")
        assert rate_res["success"] == True

        profile_res = await safety.get_user_average_rating("inviter_user")
        print(f"Safety Profile stats: {profile_res}")
        assert profile_res["averageRating"] == 5.0
        assert "safe" in profile_res["safetyTags"]

        # 4. Test GPS Geofenced Travel Dares
        print("\n--- 4. Testing GPS Geofenced Dares ---")
        dares = DareService(session)
        # Fetch Tokyo dares when user is in Shibuya
        nearby = await dares.get_nearby_dares(
            lat=35.6596, 
            lng=139.7006, 
            city="Tokyo"
        )
        print("Dares near Shibuya Crossing:")
        for d in nearby:
            print(f"  - {d['title']}: Distance {d['distanceMeters']}m, Unlocked: {d['isUnlocked']}")
            if "Shibuya" in d["title"]:
                assert d["isUnlocked"] == True

        # Check-in when within range
        check_in_res = await dares.check_in_dare(
            user_id="guest_user",
            companion_id="inviter_user",
            dare_id=nearby[1]["id"],  # Shibuya Crossing dare
            lat=35.6595,
            lng=139.7005
        )
        print(f"Dare check-in status: {check_in_res}")
        assert check_in_res["success"] == True

        print("\nAll integration verification tests passed successfully!")

if __name__ == "__main__":
    asyncio.run(test_all())
