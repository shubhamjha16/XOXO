-- Fix Database Triggers after Column Renames
-- Run this in Supabase SQL Editor

-- Check existing triggers that might be using old column names
SELECT 
    trigger_name, 
    event_object_table, 
    action_statement 
FROM information_schema.triggers 
WHERE event_object_table IN ('trip_plan_status', 'trip_plan_output', 'plan_tasks');

-- Safely recreate triggers with correct column names
-- First create the new trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW."updatedAt" = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Remove old triggers if they exist (this will show warnings but is safe)
DO $$ 
BEGIN
    -- Drop trip_plan_status trigger if exists
    IF EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_trip_plan_status_updated_at') THEN
        EXECUTE 'DROP TRIGGER update_trip_plan_status_updated_at ON trip_plan_status';
    END IF;
    
    -- Drop trip_plan_output trigger if exists  
    IF EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_trip_plan_output_updated_at') THEN
        EXECUTE 'DROP TRIGGER update_trip_plan_output_updated_at ON trip_plan_output';
    END IF;
END $$;

-- Create new triggers with correct column names
CREATE TRIGGER update_trip_plan_status_updated_at
    BEFORE UPDATE ON trip_plan_status
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_trip_plan_output_updated_at
    BEFORE UPDATE ON trip_plan_output
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Check if there are any RLS policies that need updating
SELECT 
    tablename, 
    policyname, 
    qual, 
    with_check 
FROM pg_policies 
WHERE tablename IN ('trip_plan_status', 'trip_plan_output', 'plan_tasks');
