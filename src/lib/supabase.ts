import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

console.log('Initializing Supabase client with:', {
  url: supabaseUrl,
  hasAnonKey: !!supabaseAnonKey
});

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  db: {
    schema: 'public'
  },
  global: {
    headers: {
      'x-client-info': 'gp-consulting-2'
    }
  },
  // Add reasonable timeouts
  realtime: {
    timeout: 10000 // 10 seconds
  }
});

// Test the connection and RLS policies
(async () => {
  try {
    console.log('Testing Supabase connection and RLS policies...');
    
    // Test solutions table with detailed error logging
    const { data: solutions, error: solutionsError } = await supabase
      .from('solutions')
      .select('*')
      .limit(1);

    if (solutionsError) {
      console.error('Error accessing solutions table:', solutionsError);
      if (solutionsError.code === 'PGRST301') {
        console.error('RLS policy might be blocking access. Please check your Supabase RLS policies.');
      }
    } else {
      console.log('Successfully accessed solutions table. Row count:', solutions?.length);
    }

  } catch (error) {
    console.error('Supabase connection test failed:', error);
  }
})(); 