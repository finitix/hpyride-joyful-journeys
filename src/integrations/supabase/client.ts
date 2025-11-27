import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vlljrznhdwxvssckzwtl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsbGpyem5oZHd4dnNzY2t6d3RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4MTg3NjcsImV4cCI6MjA3OTM5NDc2N30.FB-T9_uUFU5uPtKgw3WJApkl5D6ceR8ltHp8qFn9sw4';

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
