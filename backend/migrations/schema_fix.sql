-- Travelogo - Schema Fix for Column Name Mismatches
-- Run this in your Supabase SQL Editor to fix the schema issues

-- Fix 1: Update trip_plan_status table column name from snake_case to camelCase
ALTER TABLE trip_plan_status RENAME COLUMN trip_plan_id TO "tripPlanId";
ALTER TABLE trip_plan_status RENAME COLUMN current_step TO "currentStep";
ALTER TABLE trip_plan_status RENAME COLUMN started_at TO "startedAt";
ALTER TABLE trip_plan_status RENAME COLUMN completed_at TO "completedAt";
ALTER TABLE trip_plan_status RENAME COLUMN created_at TO "createdAt";
ALTER TABLE trip_plan_status RENAME COLUMN updated_at TO "updatedAt";

-- Fix 2: Update trip_plan_output table column name
ALTER TABLE trip_plan_output RENAME COLUMN trip_plan_id TO "tripPlanId";
ALTER TABLE trip_plan_output RENAME COLUMN created_at TO "createdAt";
ALTER TABLE trip_plan_output RENAME COLUMN updated_at TO "updatedAt";

-- Fix 3: Increase error_message column size in plan_tasks
ALTER TABLE plan_tasks ALTER COLUMN error_message TYPE TEXT;

-- Fix 4: Update indexes to use new column names
DROP INDEX IF EXISTS idx_trip_plan_status_trip_plan_id;
CREATE INDEX IF NOT EXISTS idx_trip_plan_status_trip_plan_id ON trip_plan_status("tripPlanId");

-- Show current schema to verify
SELECT column_name, data_type, character_maximum_length 
FROM information_schema.columns 
WHERE table_name = 'trip_plan_status' 
ORDER BY ordinal_position;
