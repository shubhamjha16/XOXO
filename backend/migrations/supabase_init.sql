-- Travelogo - Complete Supabase Database Schema
-- Run this in your Supabase SQL Editor to set up the database

-- ======================================
-- 1. CREATE ENUMS
-- ======================================

-- Create enum type for task status
CREATE TYPE plan_task_status AS ENUM ('queued', 'in_progress', 'success', 'error');

-- ======================================
-- 2. CREATE TABLES
-- ======================================

-- Create plan_tasks table
CREATE TABLE IF NOT EXISTS plan_tasks (
    id SERIAL PRIMARY KEY,
    trip_plan_id VARCHAR(50) NOT NULL,
    task_type VARCHAR(50) NOT NULL,
    status plan_task_status NOT NULL DEFAULT 'queued',
    input_data JSONB NOT NULL,
    output_data JSONB,
    error_message VARCHAR(500),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create trip_plan_status table
CREATE TABLE IF NOT EXISTS trip_plan_status (
    id TEXT NOT NULL,
    trip_plan_id TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending',
    current_step TEXT,
    error TEXT,
    started_at TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT trip_plan_status_pkey PRIMARY KEY (id)
);

-- Create trip_plan_output table
CREATE TABLE IF NOT EXISTS trip_plan_output (
    id TEXT NOT NULL,
    trip_plan_id TEXT NOT NULL,
    itinerary TEXT NOT NULL,
    summary TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT trip_plan_output_pkey PRIMARY KEY (id)
);

-- ======================================
-- 3. CREATE INDEXES
-- ======================================

-- Indexes for plan_tasks
CREATE INDEX IF NOT EXISTS idx_plan_tasks_trip_plan_id ON plan_tasks(trip_plan_id);
CREATE INDEX IF NOT EXISTS idx_plan_tasks_status ON plan_tasks(status);
CREATE INDEX IF NOT EXISTS idx_plan_tasks_created_at ON plan_tasks(created_at);

-- Indexes for trip_plan_status
CREATE INDEX IF NOT EXISTS idx_trip_plan_status_trip_plan_id ON trip_plan_status(trip_plan_id);
CREATE INDEX IF NOT EXISTS idx_trip_plan_status_status ON trip_plan_status(status);

-- Indexes for trip_plan_output
CREATE INDEX IF NOT EXISTS idx_trip_plan_output_trip_plan_id ON trip_plan_output(trip_plan_id);

-- ======================================
-- 4. CREATE FUNCTIONS AND TRIGGERS
-- ======================================

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for automatic updated_at
CREATE TRIGGER update_plan_tasks_updated_at
    BEFORE UPDATE ON plan_tasks
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_trip_plan_status_updated_at
    BEFORE UPDATE ON trip_plan_status
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_trip_plan_output_updated_at
    BEFORE UPDATE ON trip_plan_output
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ======================================
-- 5. ROW LEVEL SECURITY (Optional)
-- ======================================

-- Enable RLS on tables (uncomment if you want to add authentication later)
-- ALTER TABLE plan_tasks ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE trip_plan_status ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE trip_plan_output ENABLE ROW LEVEL SECURITY;

-- Example policies (uncomment and modify as needed)
-- CREATE POLICY "Allow all operations for authenticated users" ON plan_tasks
--     FOR ALL USING (auth.role() = 'authenticated');

-- CREATE POLICY "Allow all operations for authenticated users" ON trip_plan_status
--     FOR ALL USING (auth.role() = 'authenticated');

-- CREATE POLICY "Allow all operations for authenticated users" ON trip_plan_output
--     FOR ALL USING (auth.role() = 'authenticated');

-- ======================================
-- 6. SAMPLE DATA (Optional)
-- ======================================

-- Insert a sample task for testing
-- INSERT INTO plan_tasks (trip_plan_id, task_type, status, input_data) 
-- VALUES 
--     ('sample-trip-1', 'travel_plan_generation', 'queued', '{"destination": "Paris", "duration": "7 days"}');

-- ======================================
-- SCHEMA SETUP COMPLETE FOR TRAVELOGO
-- ======================================

-- You can verify the setup by running:
-- SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';
