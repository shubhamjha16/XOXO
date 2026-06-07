import hmac
import hashlib
import json
from pydantic import BaseModel, Field
from typing import Optional
from loguru import logger

class AP2PaymentMandate(BaseModel):
    user_id: str = Field(..., description="ID of the user granting authority")
    trip_plan_id: str = Field(..., description="ID of the trip associated with the payment")
    limit_amount: float = Field(..., description="Maximum amount authorized")
    currency: str = Field("USD", description="Currency of the authorization limit")
    scope: str = Field("trip_booking", description="Authorized scope of transaction")
    public_key: str = Field(..., description="User's public verification identifier")
    signature: Optional[str] = Field(None, description="Cryptographic signature of mandate payload")

    def to_signable_string(self) -> str:
        """Serializes mandate fields to a deterministic JSON string for signing."""
        data = {
            "user_id": self.user_id,
            "trip_plan_id": self.trip_plan_id,
            "limit_amount": self.limit_amount,
            "currency": self.currency,
            "scope": self.scope,
            "public_key": self.public_key
        }
        return json.dumps(data, sort_keys=True)

def sign_ap2_mandate(mandate: AP2PaymentMandate, private_key: str) -> str:
    """Signs an AP2 mandate payload using HMAC-SHA256 with the user's private key."""
    signable_data = mandate.to_signable_string().encode('utf-8')
    key = private_key.encode('utf-8')
    signature = hmac.new(key, signable_data, hashlib.sha256).hexdigest()
    logger.info(f"Generated AP2 signature for user {mandate.user_id}: {signature[:10]}...")
    return signature

def verify_ap2_mandate(mandate: AP2PaymentMandate, signature: str, verification_key: str) -> bool:
    """Verifies that the provided AP2 signature matches the mandate payload and key."""
    signable_data = mandate.to_signable_string().encode('utf-8')
    key = verification_key.encode('utf-8')
    expected_signature = hmac.new(key, signable_data, hashlib.sha256).hexdigest()
    is_valid = hmac.compare_digest(expected_signature, signature)
    if is_valid:
        logger.info(f"✅ AP2 Mandate verified successfully for user {mandate.user_id}")
    else:
        logger.warning(f"❌ AP2 Mandate verification failed for user {mandate.user_id}")
    return is_valid
