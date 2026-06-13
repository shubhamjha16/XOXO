"""
Notification Service placeholder for TripCraft AI.
"""

from loguru import logger

class NotificationService:
    def __init__(self):
        pass

    async def send_notification(self, user_id: str, title: str, message: str, notification_type: str = "general"):
        logger.info(f"[Notification] Sending {notification_type} notification to user {user_id}: {title} - {message}")
        return True
