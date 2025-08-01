#!/usr/bin/env python3
"""
Database initialization script for TripCraft AI.
This script creates all the database tables using SQLAlchemy models.
"""

import asyncio
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

from sqlalchemy.ext.asyncio import create_async_engine
from models.plan_task import Base as PlanTaskBase
from models.trip_db import Base as TripDBBase

async def init_database():
    """Initialize database tables using SQLAlchemy models."""
    database_url = os.getenv("DATABASE_URL", "sqlite+aiosqlite:///./tripcraft.db")
    
    print(f"🔧 Initializing database at: {database_url}")
    
    # Create async engine
    engine = create_async_engine(database_url, echo=True)
    
    try:
        # Create all tables for both base classes
        print("📝 Creating plan_task tables...")
        async with engine.begin() as conn:
            await conn.run_sync(PlanTaskBase.metadata.create_all)
            
        print("📝 Creating trip_db tables...")  
        async with engine.begin() as conn:
            await conn.run_sync(TripDBBase.metadata.create_all)
            
        print("✅ Database initialization completed successfully!")
        
        # Test the connection
        print("🧪 Testing database connection...")
        async with engine.begin() as conn:
            result = await conn.execute("SELECT 1")
            print(f"✅ Database connection test passed: {result.scalar()}")
            
    except Exception as e:
        print(f"❌ Database initialization failed: {e}")
        raise
    finally:
        await engine.dispose()

if __name__ == "__main__":
    asyncio.run(init_database())
