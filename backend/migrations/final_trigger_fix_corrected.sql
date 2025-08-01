-- Final Trigger Fix for Travelogo Database (Corrected)
-- This script completely removes and recreates all triggers and functions
-- to ensure they use the correct snake_case column names (updated_at, created_at)

-- Drop all existing triggers first
DROP TRIGGER IF EXISTS update_trip_plan_status_updated_at ON trip_plan_status;
DROP TRIGGER IF EXISTS update_trip_plan_output_updated_at ON trip_plan_output;
DROP TRIGGER IF EXISTS update_plan_tasks_updated_at ON plan_tasks;

-- Drop all existing trigger functions
DROP FUNCTION IF EXISTS update_updated_at_column CASCADE;
DROP FUNCTION IF EXISTS update_updatedAt_column CASCADE;

-- Create the correct function with snake_case column name
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for all tables that have updated_at column
CREATE TRIGGER update_trip_plan_status_updated_at
    BEFORE UPDATE ON trip_plan_status
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_trip_plan_output_updated_at
    BEFORE UPDATE ON trip_plan_output
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_plan_tasks_updated_at
    BEFORE UPDATE ON plan_tasks
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Verify the triggers were created
SELECT 
    trigger_name, 
    event_object_table, 
    action_timing,
    event_manipulation
FROM information_schema.triggers 
WHERE event_object_table IN ('trip_plan_status', 'trip_plan_output', 'plan_tasks')
ORDER BY event_object_table, trigger_name;
