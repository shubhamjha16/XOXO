"""
Minimal Travelogo API server without SQLAlchemy ORM
This bypasses the pgbouncer prepared statement issues
"""
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import asyncpg
import os
import json
from datetime import datetime, timezone

# Load environment variables
load_dotenv()

app = FastAPI(
    title="Travelogo API (Minimal)",
    description="Minimal API for intelligent travel planning with direct asyncpg",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global connection pool
pool = None

@app.on_event("startup")
async def startup_event():
    global pool
    database_url = os.getenv("DATABASE_URL")
    try:
        pool = await asyncpg.create_pool(
            database_url,
            statement_cache_size=0,  # Disable for pgbouncer compatibility
            min_size=1,
            max_size=10
        )
        print("✅ Database connection pool created successfully")
    except Exception as e:
        print(f"❌ Failed to create database pool: {e}")

@app.on_event("shutdown")
async def shutdown_event():
    global pool
    if pool:
        await pool.close()
        print("✅ Database connection pool closed")

@app.get("/api/health")
async def health_check():
    """Health check endpoint"""
    try:
        async with pool.acquire() as conn:
            result = await conn.fetchval("SELECT 1")
            return {
                "status": "healthy",
                "database": "connected" if result == 1 else "error",
                "timestamp": datetime.now(timezone.utc).isoformat()
            }
    except Exception as e:
        return {
            "status": "error",
            "database": "disconnected",
            "error": str(e),
            "timestamp": datetime.now(timezone.utc).isoformat()
        }

@app.get("/api/tables")
async def list_tables():
    """List all tables in the database"""
    try:
        async with pool.acquire() as conn:
            tables = await conn.fetch("""
                SELECT table_name, table_type
                FROM information_schema.tables 
                WHERE table_schema = 'public'
                ORDER BY table_name
            """)
            return {
                "tables": [dict(table) for table in tables],
                "count": len(tables)
            }
    except Exception as e:
        return {"error": str(e)}

@app.get("/api/plan-tasks")
async def get_plan_tasks():
    """Get all plan tasks"""
    try:
        async with pool.acquire() as conn:
            tasks = await conn.fetch("""
                SELECT * FROM plan_tasks 
                ORDER BY created_at DESC 
                LIMIT 10
            """)
            return {
                "tasks": [dict(task) for task in tasks],
                "count": len(tasks)
            }
    except Exception as e:
        return {"error": str(e)}

@app.post("/api/plan-tasks/create")
async def create_plan_task(task_data: dict):
    """Create a new plan task"""
    try:
        async with pool.acquire() as conn:
            task_id = await conn.fetchval("""
                INSERT INTO plan_tasks (trip_plan_id, task_type, status, input_data)
                VALUES ($1, $2, $3, $4)
                RETURNING id
            """, 
            task_data.get("trip_plan_id", "test-trip"),
            task_data.get("task_type", "travel_plan_generation"),
            "queued",
            json.dumps(task_data.get("input_data", {}))
            )
            return {
                "success": True,
                "task_id": task_id,
                "message": "Plan task created successfully"
            }
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
