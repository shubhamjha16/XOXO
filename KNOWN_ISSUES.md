# Known Issues - XOXO Experience Planner

## Overview
This document outlines the current known issues in the XOXO Experience Planner application (rebranded from a travel app). These issues are being tracked and will be addressed in future updates.

## Authentication Issues
- NextAuth integration has conflicting configurations
- Middleware authentication flow is not properly handling session management
- Possible conflict between `[...auth]` and `[...nextauth]` route files

## UI/Runtime Issues
- NextJS Runtime Error: `Error: Could not find the module "[project]/node_modules/next/dist/client/components/error-boundary.js#default"`
- NextJS Build Error: `Error: ENOENT: no such file or directory, open '/Users/apple/awesome-llm-apps/advanced_ai_agents/multi_agent_apps/agent_teams/ai_travel_planner_agent_team/client/.next/server/pages/_document.js'`
- Dependency issues with `@radix-ui/react-progress` and other UI components

## Rebranding Status
- Frontend UI terminology has been updated from "travel" to "experience"
- Backend API routes have been updated from "cotraveller" to "coexperiencer"
- Some legacy terminology may still exist in backend agents and services
- README.md has been partially updated with new terminology

## Development Environment
- Dependency conflicts when running `npm install`
- Need to use `--legacy-peer-deps` flag for successful installation

## Next Steps
1. Resolve authentication configuration by standardizing on NextAuth throughout the application
2. Clean up any remaining "travel" terminology in backend code
3. Fix dependency issues in package.json
4. Complete end-to-end testing of all app flows
