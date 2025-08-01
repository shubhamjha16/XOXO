#!/usr/bin/env python3
"""
Direct database test to check if plan_tasks table has issues
"""

import asyncio
import asyncpg
import os
from dotenv import load_dotenv

load_dotenv()

async def test_direct_insert():
    """Test direct insert into plan_tasks table"""
    try:
        db_url = os.getenv('DATABASE_URL')
        print(f"Connecting to database...")
        
        conn = await asyncpg.connect(db_url, statement_cache_size=0)
        print("✅ Connected to database")
        
        # Test simple query first
        result = await conn.fetchval('SELECT 1')
        print(f"✅ Simple query works: {result}")
        
        # Check if plan_tasks table exists
        table_exists = await conn.fetchval("""
            SELECT EXISTS (
                SELECT FROM information_schema.tables 
                WHERE table_schema = 'public' 
                AND table_name = 'plan_tasks'
            )
        """)
        print(f"✅ plan_tasks table exists: {table_exists}")
        
        if table_exists:
            # Try to insert into plan_tasks
            print("🔄 Attempting insert into plan_tasks...")
            
            insert_result = await conn.execute("""
                INSERT INTO plan_tasks (
                    trip_plan_id, task_type, status, input_data, created_at, updated_at
                ) VALUES (
                    $1, $2, $3, $4, NOW(), NOW()
                )
            """, "test_trip_direct", "test_task", "queued", '{"test": "data"}')
            
            print(f"✅ Insert successful: {insert_result}")
            
            # Fetch the inserted record
            record = await conn.fetchrow("""
                SELECT * FROM plan_tasks WHERE trip_plan_id = $1
            """, "test_trip_direct")
            
            print(f"✅ Record retrieved: {record}")
            
            # Clean up
            await conn.execute("DELETE FROM plan_tasks WHERE trip_plan_id = $1", "test_trip_direct")
            print("🧹 Test record cleaned up")
        
        await conn.close()
        print("✅ Direct database test PASSED!")
        return True
        
    except Exception as e:
        print(f"❌ Error: {e}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == "__main__":
    success = asyncio.run(test_direct_insert())
    if success:
        print("\n✅ Direct database operations work!")
    else:
        print("\n❌ Direct database operations failed!")
