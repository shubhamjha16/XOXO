-- Database Verification Script
-- Run this after applying the final trigger fix

-- 1. Check all tables exist with correct columns
SELECT 
    table_name,
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns 
WHERE table_name IN ('trip_plan_status', 'trip_plan_output', 'plan_tasks')
ORDER BY table_name, ordinal_position;

-- 2. Check all triggers
SELECT 
    trigger_name, 
    event_object_table, 
    action_timing,
    event_manipulation,
    action_statement
FROM information_schema.triggers 
WHERE event_object_table IN ('trip_plan_status', 'trip_plan_output', 'plan_tasks')
ORDER BY event_object_table, trigger_name;

-- 3. Check all functions
SELECT 
    proname as function_name,
    prosrc as function_source
FROM pg_proc 
WHERE proname LIKE '%updated%'
ORDER BY proname;

-- 4. Test data integrity
SELECT 'trip_plan_status' as table_name, COUNT(*) as record_count FROM trip_plan_status
UNION ALL
SELECT 'trip_plan_output' as table_name, COUNT(*) as record_count FROM trip_plan_output
UNION ALL
SELECT 'plan_tasks' as table_name, COUNT(*) as record_count FROM plan_tasks;
