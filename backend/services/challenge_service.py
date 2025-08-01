"""
Challenge Service - Handles challenge scheduling, delivery, and tracking.
Works with the Adventure Challenge Creator agent for AI-generated challenges.
"""

from typing import List, Dict, Optional
from datetime import datetime, timedelta
import uuid
import asyncio

class ChallengeService:
    """
    Service responsible for:
    - Challenge scheduling and delivery
    - Push notifications to travelers
    - Challenge completion tracking
    - Background task management
    """
    
    def __init__(self, db_connection, notification_service):
        self.db = db_connection
        self.notification_service = notification_service
        self.active_trips = {}  # In-memory tracking for active trips
    
    async def start_challenge_schedule(self, match_id: str, itinerary: Dict):
        """Start the challenge delivery schedule for a matched pair's trip"""
        trip_id = str(uuid.uuid4())
        
        # Generate challenges using the AI agent
        challenges = await self._generate_challenges_for_trip(itinerary)
        
        # Create delivery schedule
        delivery_schedule = await self._create_delivery_schedule(challenges, itinerary)
        
        # Store trip and schedule in database
        trip_record = {
            "trip_id": trip_id,
            "match_id": match_id,
            "challenges": challenges,
            "delivery_schedule": delivery_schedule,
            "started_at": datetime.now(),
            "status": "active"
        }
        
        await self._save_trip_record(trip_record)
        
        # Start background task for challenge delivery
        asyncio.create_task(self._schedule_challenge_delivery(trip_id))
        
        return trip_id
    
    async def deliver_challenge(self, trip_id: str, challenge_id: str):
        """Deliver a specific challenge to the travelers"""
        challenge = await self._get_challenge(trip_id, challenge_id)
        match_info = await self._get_match_info(trip_id)
        
        # Send push notification to both travelers
        await self.notification_service.send_challenge_notification(
            [match_info["user1_id"], match_info["user2_id"]],
            challenge
        )
        
        # Mark challenge as delivered
        await self._mark_challenge_delivered(trip_id, challenge_id)
    
    async def complete_challenge(self, trip_id: str, challenge_id: str, completion_data: Dict):
        """Handle challenge completion by travelers"""
        completion_record = {
            "completion_id": str(uuid.uuid4()),
            "trip_id": trip_id,
            "challenge_id": challenge_id,
            "completed_at": datetime.now(),
            "completion_data": completion_data,  # photos, feedback, etc.
            "status": "completed"
        }
        
        await self._save_completion_record(completion_record)
        
        # Update challenge statistics
        await self._update_challenge_stats(challenge_id, "completed")
        
        # Send congratulations notification
        await self._send_completion_notification(trip_id, challenge_id)
    
    async def get_trip_progress(self, trip_id: str) -> Dict:
        """Get current progress of challenges for a trip"""
        trip_data = await self._get_trip_record(trip_id)
        completed_challenges = await self._get_completed_challenges(trip_id)
        
        progress = {
            "trip_id": trip_id,
            "total_challenges": len(trip_data["challenges"]),
            "completed_challenges": len(completed_challenges),
            "completion_rate": len(completed_challenges) / len(trip_data["challenges"]),
            "next_challenge": await self._get_next_scheduled_challenge(trip_id)
        }
        
        return progress
    
    async def _generate_challenges_for_trip(self, itinerary: Dict) -> List[Dict]:
        """Generate challenges using the Adventure Challenge Creator agent"""
        # Call to Adventure Challenge Creator agent
        # This would integrate with the AI agent to create personalized challenges
        challenges = []
        
        for day in itinerary.get("days", []):
            day_challenges = await self._generate_daily_challenges(day)
            challenges.extend(day_challenges)
        
        return challenges
    
    async def _create_delivery_schedule(self, challenges: List[Dict], itinerary: Dict) -> List[Dict]:
        """Create optimal timing schedule for challenge delivery"""
        schedule = []
        trip_start = datetime.fromisoformat(itinerary["start_date"])
        
        for i, challenge in enumerate(challenges):
            # Space challenges throughout the trip
            delivery_time = trip_start + timedelta(
                days=challenge.get("day", 0),
                hours=challenge.get("preferred_hour", 10)
            )
            
            schedule.append({
                "challenge_id": challenge["id"],
                "delivery_time": delivery_time,
                "status": "scheduled"
            })
        
        return schedule
    
    async def _schedule_challenge_delivery(self, trip_id: str):
        """Background task to deliver challenges at scheduled times"""
        while True:
            try:
                schedule = await self._get_delivery_schedule(trip_id)
                current_time = datetime.now()
                
                for item in schedule:
                    if (item["status"] == "scheduled" and 
                        item["delivery_time"] <= current_time):
                        
                        await self.deliver_challenge(trip_id, item["challenge_id"])
                
                # Check every 15 minutes
                await asyncio.sleep(900)
                
            except Exception as e:
                print(f"Error in challenge delivery: {e}")
                await asyncio.sleep(900)
    
    # Private helper methods for database operations
    async def _save_trip_record(self, trip_record: Dict):
        """Save trip record to database"""
        pass
    
    async def _get_challenge(self, trip_id: str, challenge_id: str) -> Dict:
        """Get challenge details from database"""
        pass
    
    async def _get_match_info(self, trip_id: str) -> Dict:
        """Get match information for a trip"""
        pass
    
    async def _mark_challenge_delivered(self, trip_id: str, challenge_id: str):
        """Mark challenge as delivered in database"""
        pass
    
    async def _save_completion_record(self, completion_record: Dict):
        """Save challenge completion to database"""
        pass
    
    async def _update_challenge_stats(self, challenge_id: str, status: str):
        """Update challenge completion statistics"""
        pass
    
    async def _send_completion_notification(self, trip_id: str, challenge_id: str):
        """Send congratulations notification for completed challenge"""
        pass
    
    async def _get_trip_record(self, trip_id: str) -> Dict:
        """Get trip record from database"""
        pass
    
    async def _get_completed_challenges(self, trip_id: str) -> List[Dict]:
        """Get list of completed challenges for a trip"""
        pass
    
    async def _get_next_scheduled_challenge(self, trip_id: str) -> Optional[Dict]:
        """Get the next scheduled challenge for a trip"""
        pass
    
    async def _get_delivery_schedule(self, trip_id: str) -> List[Dict]:
        """Get delivery schedule for a trip"""
        pass
    
    async def _generate_daily_challenges(self, day_itinerary: Dict) -> List[Dict]:
        """Generate challenges for a specific day using AI agent"""
        pass
