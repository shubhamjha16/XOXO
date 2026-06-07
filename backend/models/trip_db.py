from sqlalchemy import Column, String, TIMESTAMP, ForeignKey, Text, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime, timezone
from typing import Optional
from cuid2 import Cuid

CUID_GENERATOR: Cuid = Cuid()

from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column


class Base(DeclarativeBase):
    pass


class TripPlan(Base):
    __tablename__ = (
        "trip_plan"  # Assuming this table exists as per foreign key constraints
    )
    id = Column(
        String, primary_key=True, default=lambda: str(CUID_GENERATOR.generate())
    )
    # Add other fields for TripPlan if needed for standalone model definition
    # For this task, we only need it to satisfy relationship constraints if defined from this end.


class TripPlanStatus(Base):
    """Model for tracking trip plan status."""

    __tablename__ = "trip_plan_status"

    id: Mapped[str] = mapped_column(
        Text, primary_key=True, default=lambda: CUID_GENERATOR.generate()
    )
    tripPlanId: Mapped[str] = mapped_column(Text, index=True)
    status: Mapped[str] = mapped_column(Text, default="pending")
    currentStep: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    error: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    startedAt: Mapped[Optional[datetime]] = mapped_column(
        DateTime(timezone=False), nullable=True
    )
    completedAt: Mapped[Optional[datetime]] = mapped_column(
        DateTime(timezone=False), nullable=True
    )
    createdAt: Mapped[datetime] = mapped_column(
        DateTime(timezone=False),
        default=lambda: datetime.now(timezone.utc).replace(tzinfo=None),
    )
    updatedAt: Mapped[datetime] = mapped_column(
        DateTime(timezone=False),
        default=lambda: datetime.now(timezone.utc).replace(tzinfo=None),
        onupdate=lambda: datetime.now(timezone.utc).replace(tzinfo=None),
    )

    # Relationship (optional, but good practice)
    # trip_plan = relationship("TripPlan") # Define TripPlan model if you want to use this relationship


class TripPlanOutput(Base):
    """Model for storing trip plan output."""

    __tablename__ = "trip_plan_output"

    id: Mapped[str] = mapped_column(
        Text, primary_key=True, default=lambda: CUID_GENERATOR.generate()
    )
    tripPlanId: Mapped[str] = mapped_column(Text, index=True)
    itinerary: Mapped[str] = mapped_column(Text)
    summary: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    createdAt: Mapped[datetime] = mapped_column(
        DateTime(timezone=False),
        default=lambda: datetime.now(timezone.utc).replace(tzinfo=None),
    )
    updatedAt: Mapped[datetime] = mapped_column(
        DateTime(timezone=False),
        default=lambda: datetime.now(timezone.utc).replace(tzinfo=None),
        onupdate=lambda: datetime.now(timezone.utc).replace(tzinfo=None),
    )

    # Relationship (optional)
    # trip_plan = relationship("TripPlan") # Define TripPlan model


class PaymentMandate(Base):
    """Model for storing payment mandates."""

    __tablename__ = "payment_mandate"

    id: Mapped[str] = mapped_column(
        Text, primary_key=True, default=lambda: CUID_GENERATOR.generate()
    )
    userId: Mapped[str] = mapped_column(Text)
    tripPlanId: Mapped[str] = mapped_column(Text, index=True)
    limitAmount: Mapped[float] = mapped_column()
    currency: Mapped[str] = mapped_column(Text, default="USD")
    signature: Mapped[str] = mapped_column(Text)
    publicKey: Mapped[str] = mapped_column(Text)
    scope: Mapped[str] = mapped_column(Text)
    status: Mapped[str] = mapped_column(Text, default="active")
    createdAt: Mapped[datetime] = mapped_column(
        DateTime(timezone=False),
        default=lambda: datetime.now(timezone.utc).replace(tzinfo=None),
    )
    updatedAt: Mapped[datetime] = mapped_column(
        DateTime(timezone=False),
        default=lambda: datetime.now(timezone.utc).replace(tzinfo=None),
        onupdate=lambda: datetime.now(timezone.utc).replace(tzinfo=None),
    )


class TransactionSplit(Base):
    """Model for tracking transaction splits."""

    __tablename__ = "transaction_split"

    id: Mapped[str] = mapped_column(
        Text, primary_key=True, default=lambda: CUID_GENERATOR.generate()
    )
    tripPlanId: Mapped[str] = mapped_column(Text, index=True)
    totalAmount: Mapped[float] = mapped_column()
    currency: Mapped[str] = mapped_column(Text, default="USD")
    user1Id: Mapped[str] = mapped_column(Text)
    user2Id: Mapped[str] = mapped_column(Text)
    user1Amount: Mapped[float] = mapped_column()
    user2Amount: Mapped[float] = mapped_column()
    status: Mapped[str] = mapped_column(Text, default="pending")
    createdAt: Mapped[datetime] = mapped_column(
        DateTime(timezone=False),
        default=lambda: datetime.now(timezone.utc).replace(tzinfo=None),
    )
    updatedAt: Mapped[datetime] = mapped_column(
        DateTime(timezone=False),
        default=lambda: datetime.now(timezone.utc).replace(tzinfo=None),
        onupdate=lambda: datetime.now(timezone.utc).replace(tzinfo=None),
    )

