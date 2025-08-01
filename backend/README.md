# 🌍 Travelogo - AI-Powered Travel Planning Platform

Travelogo is an intelligent travel planning platform that uses AI agents to create personalized travel itineraries, find the best destinations, and provide comprehensive travel assistance.

## ✨ Features

- **AI Travel Planning**: Multi-agent system for intelligent trip planning
- **Destination Discovery**: Smart recommendations based on preferences
- **Real-time Planning**: Background processing with live status updates
- **Social Features**: Share and collaborate on travel plans
- **Challenge System**: Travel goals and achievements
- **Co-traveler Management**: Plan trips with friends and family

## 🏗️ Architecture

### Backend Services
- **FastAPI**: High-performance REST API
- **PostgreSQL**: Robust database with Supabase
- **AI Agents**: Specialized agents for different travel aspects
- **Background Tasks**: Async processing for complex planning

### AI Agent Team
- **Destination Agent**: Finds and recommends destinations
- **Itinerary Agent**: Creates detailed travel plans
- **Budget Agent**: Cost analysis and optimization
- **Activity Agent**: Suggests activities and experiences
- **Research Agent**: Gathers travel information

## 🚀 Quick Start

### Prerequisites
- Python 3.9+
- Supabase account
- API keys for AI services

### 1. Clone and Setup
```bash
cd backend
pip install -r requirements.txt  # or install from pyproject.toml
```

### 2. Configure Environment
```bash
cp .env.supabase .env
# Edit .env with your actual API keys and database URL
```

### 3. Setup Database
1. Create Supabase project at [supabase.com](https://supabase.com)
2. Run the SQL migration from `migrations/supabase_init.sql`
3. Update DATABASE_URL in `.env`

### 4. Start the Server
```bash
python -m uvicorn api.app:app --reload --port 8000
```

## 📋 API Endpoints

### Health & Status
- `GET /api/health` - Health check
- `GET /docs` - API documentation

### Travel Planning
- `POST /api/plan/trigger` - Start travel plan generation
- `GET /api/plan/status/{trip_id}` - Get planning status
- `GET /api/plan/output/{trip_id}` - Get completed itinerary

### Social Features
- `POST /api/social-plan/create` - Create shareable trip plan
- `GET /api/social-plan/{plan_id}` - Get shared plan
- `GET /api/social-plan/user/{user_id}` - Get user's plans

### Co-travelers
- `POST /api/cotraveler/invite` - Invite co-travelers
- `POST /api/cotraveler/respond` - Respond to invitation
- `GET /api/cotraveler/trips/{user_id}` - Get user's trips

### Challenges
- `POST /api/challenges/create` - Create travel challenge
- `POST /api/challenges/join` - Join challenge
- `GET /api/challenges/user/{user_id}` - Get user challenges

## 🗄️ Database Schema

### Core Tables
- `plan_tasks` - Background planning tasks
- `trip_plan_status` - Trip planning status tracking
- `trip_plan_output` - Generated itineraries

### Features
- JSONB for flexible data storage
- Automatic timestamp updates
- Optimized indexes for performance
- PostgreSQL enums for data integrity

## 🔧 Configuration

### Required Environment Variables
```env
# Database
DATABASE_URL=postgresql://postgres:password@db.project.supabase.co:5432/postgres

# AI Services
OPENAI_API_KEY=your_openai_key
EXA_API_KEY=your_exa_key
FIRECRAWL_API_KEY=your_firecrawl_key

# Optional Services
BRIGHT_DATA_API_TOKEN=your_bright_data_token
CLOUDFLARE_R2_ACCESS_KEY_ID=your_r2_key
```

## 🛠️ Development

### Project Structure
```
backend/
├── api/           # FastAPI application
├── agents/        # AI agents
├── models/        # Data models
├── services/      # Business logic
├── router/        # API routes
├── repository/    # Data access
├── migrations/    # Database migrations
└── config/        # Configuration
```

### Adding New Features
1. Create new agent in `agents/`
2. Add data models in `models/`
3. Implement service logic in `services/`
4. Create API routes in `router/`
5. Add database migrations if needed

## 🚀 Deployment

### Supabase (Recommended)
- Managed PostgreSQL database
- Built-in authentication
- Real-time subscriptions
- Edge functions support

### Docker (Alternative)
```dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["uvicorn", "api.app:app", "--host", "0.0.0.0", "--port", "8000"]
```

## 📈 Monitoring & Analytics

- **Logging**: Structured logging with Loguru
- **Health Checks**: Built-in health monitoring
- **Database Metrics**: Connection pool monitoring
- **Task Tracking**: Background job status

## 🔒 Security

- Environment variable configuration
- API key management
- Database connection security
- Optional Row Level Security (RLS)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Add tests for new features
4. Submit pull request

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

- Check the [Setup Guide](SUPABASE_SETUP.md)
- Review API documentation at `/docs`
- File issues on GitHub

---

**Travelogo** - Making travel planning intelligent and effortless with AI 🤖✈️
