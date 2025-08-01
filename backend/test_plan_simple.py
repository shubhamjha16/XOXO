#!/usr/bin/env python3
"""
Simple test script to verify travel plan creation without AI agents.
This bypasses the AI agents and just tests the database operations.
"""

import asyncio
import sys
sys.path.append('.')

from services.db_service import initialize_db_pool, close_db_pool
from repository.plan_task_repository import create_plan_task, update_task_status
from models.plan_task import TaskStatus
from models.travel_plan import TravelPlanRequest, TravelPlanAgentRequest

async def test_plan_creation():
    """Test creating a plan task without AI agents."""
    try:
        # Initialize database
        await initialize_db_pool()
        print("✅ Database initialized")
        
        # Create test request
        travel_plan = TravelPlanRequest(
            name="Test Tokyo Trip",
            destination="Tokyo, Japan",
            starting_location="New York",
            duration=5,
            budget=3000,
            adults=2,
            children=0
        )
        
        request = TravelPlanAgentRequest(
            trip_plan_id="test_trip_12345",
            travel_plan=travel_plan
        )
        
        print(f"📋 Creating task for trip: {request.trip_plan_id}")
        
        # Create task
        task = await create_plan_task(
            trip_plan_id=request.trip_plan_id,
            task_type="travel_plan_generation",
            input_data=request.travel_plan.model_dump(),
        )
        
        print(f"✅ Task created with ID: {task.id}")
        print(f"   - Trip Plan ID: {task.trip_plan_id}")
        print(f"   - Status: {task.status}")
        print(f"   - Created: {task.created_at}")
        
        # Update task status
        await update_task_status(task.id, TaskStatus.in_progress)
        print("✅ Task updated to in_progress")
        
        # Mock some processing time
        await asyncio.sleep(1)
        
        # Update task to success with mock output
        mock_output = {
            "travel_plan": {
                "destination": "Tokyo, Japan",
                "duration": "5 days",
                "attractions": ["Tokyo Tower", "Senso-ji Temple", "Shibuya Crossing"],
                "hotels": ["Sample Hotel Tokyo"],
                "flights": ["Mock Flight Info"],
                "budget_breakdown": {"total": "$3000"}
            }
        }
        
        await update_task_status(
            task.id, 
            TaskStatus.success, 
            output_data=mock_output
        )
        print("✅ Task completed successfully with mock output")
        
        print("\n🎉 Database operations test PASSED!")
        return True
        
    except Exception as e:
        print(f"❌ Error during test: {e}")
        import traceback
        traceback.print_exc()
        return False
    finally:
        # Cleanup
        await close_db_pool()
        print("🧹 Database connection closed")

if __name__ == "__main__":
    success = asyncio.run(test_plan_creation())
    if success:
        print("\n✅ All database operations working correctly!")
    else:
        print("\n❌ Database operations failed!")
