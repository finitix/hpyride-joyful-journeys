import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nilhzqutkwomquksqsle.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pbGh6cXV0a3dvbXF1a3Nxc2xlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4NDM1NTIsImV4cCI6MjA4MDQxOTU1Mn0.x22OyrTMqqanV2LkNqxoLnuWIJVrgNB9IXuf8AeqCyY';

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
