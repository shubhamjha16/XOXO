-- SQLite-compatible migrations for Travelogo
-- This file adapts the PostgreSQL migrations to work with SQLite for development

-- Create plan_tasks table (SQLite compatible)
CREATE TABLE IF NOT EXISTS plan_tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    trip_plan_id VARCHAR(50) NOT NULL,
    task_type VARCHAR(50) NOT NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('queued', 'in_progress', 'success', 'error')),
    input_data TEXT NOT NULL, -- SQLite doesn't have JSONB, using TEXT
    output_data TEXT,
    error_message VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for plan_tasks
CREATE INDEX IF NOT EXISTS idx_plan_tasks_trip_plan_id ON plan_tasks(trip_plan_id);
CREATE INDEX IF NOT EXISTS idx_plan_tasks_status ON plan_tasks(status);

-- Create trip_plan_status table
CREATE TABLE IF NOT EXISTS trip_plan_status (
    id TEXT NOT NULL PRIMARY KEY,
    tripPlanId TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending',
    currentStep TEXT,
    error TEXT,
    startedAt TIMESTAMP,
    completedAt TIMESTAMP,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create index on tripPlanId for faster lookups
CREATE INDEX IF NOT EXISTS idx_trip_plan_status_trip_plan_id ON trip_plan_status(tripPlanId);

-- Create trip_plan_output table
CREATE TABLE IF NOT EXISTS trip_plan_output (
    id TEXT NOT NULL PRIMARY KEY,
    tripPlanId TEXT NOT NULL,
    itinerary TEXT NOT NULL,
    summary TEXT,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create index on tripPlanId for faster lookups
CREATE INDEX IF NOT EXISTS idx_trip_plan_output_trip_plan_id ON trip_plan_output(tripPlanId);

-- SQLite doesn't support triggers the same way, but we can handle updated_at in application code
