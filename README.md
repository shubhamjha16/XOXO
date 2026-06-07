#  XOXO


## 📸 Visuals

![Image](https://github.com/shubhamjha16/XOXO/blob/main/Screenshot%202025-08-02%20at%2011.26.06%20AM.png)
![Image](https://github.com/shubhamjha16/XOXO/blob/main/Screenshot%202025-08-02%20at%2011.28.14%20AM.png)
![Image](https://github.com/shubhamjha16/XOXO/blob/main/Screenshot%202025-08-02%20at%2011.28.27%20AM.png)


---
**Your journey, perfectly crafted with intelligence.**

Connect with like-minded experience seekers through our AI-powered matching system. Based on your budget and experience rating, we pair you with compatible partners and handle all bookings for you. We collect your budget upfront and optimally allocate funds to create personalized adventures with exciting dares and challenges. The more you invest, the more magical your experiences become!



## 🎯 Goal

Make experience planning effortless, personal, and social. No stress, no endless research, no experiencing things alone unless you want to—just a plan that feels crafted specifically for you and a compatible experience companion.

---

## ⚙️ How It Works

1. **🎯 Input Your Vision** - Fill out a form with destination, dates, budget, travel style, and preferences
2. **� Find Your Co-Traveler** - Get matched with a compatible travel partner based on budget alignment and experience ratings
3. **�🤖 AI Agents Collaborate** - Specialized agents handle flights, hotels, activities, and budgeting in parallel
4. **🎲 Adventure Challenges** - Receive fun, romantic, and adventurous dares during your trip to create shared memories
5. **🗺️ Get Your Itinerary** - Receive a complete day-by-day plan with bookings, costs, and recommendations
6. **⭐ Rate & Review** - Two-way rating system builds trust for future matches

### Key Features
- **Personalized Planning** - Tailored to your experience style and interests
- **Blind Co-Experiencer Matching** - Find compatible experience partners based on budget and trust ratings, not photos
- **AI Adventure Challenges** - Receive context-aware dares during your trip for shared experiences and memories
- **Two-Way Rating System** - Build trust through mutual feedback after each trip
- **Hidden Gems Discovery** - Beyond typical tourist spots using advanced search
- **Smart Optimization** - Balances cost, time, and experience
- **Complete Packages** - Everything from flights to dining recommendations

---

## 🛠️ Tech Stack

**Frontend:** Next.js (App Router), Better Auth, React, TypeScript
**Backend:** Python, FastAPI, SQLAlchemy (PostgreSQL / SQLite)
**AI Orchestration:** LangGraph (agent coordination), Gemini (LLM), Exa (search), Firecrawl (web scraping)

---

## 🚀 Advanced Features

### 1. Agentic Payments Suite
* **Agent-to-Agent (A2A) Negotiation:** The users' planning agents negotiate dynamic splits. Supports custom split configurations including **Traditional / Host Pays** mode (100% host sponsor, 0% guest split) for dating etiquette.
* **Agent Payments Protocol (AP2):** Generates and verifies cryptographic signatures and spending limits on payment mandates.
* **Model Context Protocol (MCP):** Simulated merchant payment processor executing bank transfers or Stripe card charges securely.
* **Escrow Holding:** Integrates secure transaction escrow states (`held`, `released`, `refunded`) to prevent scams and guarantee booking protection.

### 2. Location-Based Gamified Dares ("Pokemon Go" Style)
* **GPS Geofencing:** Tracks user latitude and longitude compared against travel landmark pins using the Haversine distance formula.
* **Proximity Unlocking:** Locked challenge dares automatically unlock when matches move within 50 meters of target coordinates (e.g., Shibuya Crossing).
* **AI Dare Rewards:** Completing dares awards points, unlockable discounts, or verified companion badges.

### 3. Uber-Style Safety & Trust Ratings
* **Two-Way Reviews:** Users review travel companions on a 1-5 star safety scale.
* **Safety Badges & Tags:** Users tag companions with verified behavioral flags (e.g., `"safe"`, `"punctual"`, `"friendly"`) to build trust scores.

---

## 🛠️ Local Development & Testing

1. **Backend Database Setup:**
   Run the database initialization script to create the local SQLite schema:
   ```bash
   cd backend
   python init_db.py
   ```

2. **Run Verification Tests:**
   Validate A2A negotiations, geofencing coordinates, safety reviews, and escrow releases:
   ```bash
   python scratch/verify_gamification.py
   ```

---

## 👥 About

**Built by**: Shubham Jha [@shubhamjha16](https://github.com/shubhamjha16)

Agentic AI Full-stack developer and software engineer passionate about building intelligent systems that solve real-world problems. XOXO represents the intersection of advanced AI capabilities and practical experience planning needs.

---

## 🤖 AI Agents

Eight specialized agents work together to create comprehensive experience plans and social experiences:

### **Experience Planning Agents (LangGraph Orchestration):**
1. **🏛️ Destination Explorer** - Researches attractions, landmarks, and experiences
2. **🏨 Hotel Search Agent** - Finds accommodations based on location, budget, and amenities
3. **🍽️ Dining Agent** - Recommends restaurants and culinary experiences
4. **💰 Budget Agent** - Handles cost optimization and financial planning
5. **✈️ Transport Search Agent** - Plans transportation routes and comparisons
6. **📅 Itinerary Specialist** - Creates detailed day-by-day schedules with optimal timing

### **Social Experience Agents:**
7. **🤝 Co-Experiencer Compatibility Analyzer** - Analyzes user compatibility and generates matching criteria based on budget, ratings, and experience preferences
8. **🎲 Adventure Challenge Creator** - Generates personalized, context-aware challenges and dares for co-experiencers during their journey
