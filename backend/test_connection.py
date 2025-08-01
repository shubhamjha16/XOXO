#!/usr/bin/env python3
"""
Simple test script to verify Supabase connection
"""
import asyncio
import asyncpg
from dotenv import load_dotenv
import os

load_dotenv()

async def test_connection():
    try:
        # Get the database URL
        database_url = os.getenv("DATABASE_URL")
        print(f"Testing connection to: {database_url[:50]}...")
        
        # Try to connect
        conn = await asyncpg.connect(database_url)
        print("✅ Connection successful!")
        
        # Test a simple query
        result = await conn.fetchval("SELECT 1")
        print(f"✅ Query test: {result}")
        
        # Check if our tables exist
        tables = await conn.fetch("""
            SELECT table_name 
            FROM information_schema.tables 
            WHERE table_schema = 'public'
        """)
        
        print("✅ Tables found:")
        for table in tables:
            print(f"  - {table['table_name']}")
        
        await conn.close()
        print("✅ Connection closed successfully")
        
    except Exception as e:
        print(f"❌ Connection failed: {e}")
        print(f"Error type: {type(e).__name__}")

if __name__ == "__main__":
    asyncio.run(test_connection())
