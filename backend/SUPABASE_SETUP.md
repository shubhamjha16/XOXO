# Supabase Setup Guide for Travelogo

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up or log in with GitHub/Google
4. Click "New Project"
5. Fill in the details:
   - **Organization**: Choose or create one
   - **Name**: `travelogo` (or your preferred name)
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose closest to your location
6. Click "Create new project"
7. Wait for the project to be created (usually 1-2 minutes)

## Step 2: Set Up Database Schema

1. In your Supabase dashboard, go to the **SQL Editor** (in the left sidebar)
2. Click "New Query"
3. Copy the entire content from `migrations/supabase_init.sql`
4. Paste it into the SQL editor
5. Click "Run" to execute the migration
6. You should see "Success. No rows returned" message

## Step 3: Get Database Connection Details

1. In your Supabase dashboard, go to **Settings** > **Database**
2. Scroll down to "Connection info"
3. You'll need these values:
   - **Host**: `db.xxx.supabase.co`
   - **Database name**: `postgres`
   - **Port**: `5432`
   - **User**: `postgres`
   - **Password**: (the one you set during project creation)

## Step 4: Get API Keys

1. Go to **Settings** > **API**
2. Copy these keys:
   - **Project URL**: `https://xxx.supabase.co`
   - **anon public key**: (for client-side if needed)
   - **service_role key**: (for server-side, keep secret!)

## Step 5: Update Environment Variables

Your DATABASE_URL should look like this:
```
postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres
```

Example of what to put in your `.env` file:
```env
# Database connection URL
DATABASE_URL=postgresql://postgres:your_password_here@db.abcdefghijklmnop.supabase.co:5432/postgres

# Supabase API URL and Keys (optional, for future features)
SUPABASE_URL=https://abcdefghijklmnop.supabase.co
SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

## Step 6: Test the Connection

After updating your `.env` file, restart your FastAPI server and check if it connects successfully.

## Verification Steps

You can verify your setup by:

1. **Check Tables**: In Supabase Dashboard > Table Editor, you should see:
   - `plan_tasks`
   - `trip_plan_status` 
   - `trip_plan_output`

2. **Test Connection**: Your FastAPI server should start without database errors

3. **Insert Test Data**: You can add sample data via the Table Editor or SQL Editor

## Security Notes

- Keep your `service_role` key secret
- The database password should be strong
- Consider enabling Row Level Security (RLS) for production
- Use environment variables, never commit credentials to git

## Troubleshooting

- **Connection errors**: Double-check the DATABASE_URL format
- **Permission errors**: Make sure you're using the correct password
- **SSL errors**: Supabase requires SSL connections by default
- **Timeout errors**: Check your internet connection and Supabase region

## Next Steps

Once connected, you can:
- Use the Supabase Dashboard to view and edit data
- Set up real-time subscriptions (if needed)
- Add authentication (Supabase Auth)
- Configure storage for file uploads
- Set up edge functions for serverless operations
