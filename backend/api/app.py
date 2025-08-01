from dotenv import load_dotenv
from fastapi import FastAPI, APIRouter

# Load environment variables first
load_dotenv()

from fastapi.middleware.cors import CORSMiddleware
from loguru import logger
from datetime import datetime, timezone
from contextlib import asynccontextmanager
from services.db_service import initialize_db_pool, close_db_pool
from router.plan import router as plan_router
from router.cotraveler import router as cotraveler_router
from router.coexperiencer import router as coexperiencer_router
from router.challenges import router as challenges_router
from router.social_plan import router as social_plan_router

router = APIRouter(prefix="/api")


@router.get("/health", summary="API Health Check")
async def health_check():
    logger.debug("Health check requested")
    return {"status": "healthy", "timestamp": datetime.now(timezone.utc).isoformat()}


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup logic
    logger.info("API server started")

    # Initialize database connection pool
    logger.info("Initializing database connection pool")
    await initialize_db_pool()
    logger.info("Database connection pool initialized")

    yield

    # Shutdown logic
    # Close database connection pool
    logger.info("Closing database connection pool")
    await close_db_pool()

    logger.info("API server shutting down")


app = FastAPI(
    title="XOXO API",
    description="API for intelligent experience planning with AI agents",
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(router)
app.include_router(plan_router)
app.include_router(cotraveler_router)
app.include_router(coexperiencer_router)
app.include_router(challenges_router)
app.include_router(social_plan_router)
