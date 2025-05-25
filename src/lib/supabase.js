import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL environment variable');
}

if (!supabaseAnonKey) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable');
}

console.log('Initializing Supabase client with:', {
    url: supabaseUrl,
    hasAnonKey: !!supabaseAnonKey
});

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Test the connection
async function testConnection() {
    try {
        console.log('Testing Supabase connection...');
        
        const [
            { data: industries, error: industriesError },
            { data: solutions, error: solutionsError },
            { data: achievements, error: achievementsError }
        ] = await Promise.all([
            supabase.from('industries').select('count'),
            supabase.from('solutions').select('count'),
            supabase.from('achievements').select('count')
        ]);

        console.log('Industries count:', industries, 'Error:', industriesError);
        console.log('Solutions count:', solutions, 'Error:', solutionsError);
        console.log('Achievements count:', achievements, 'Error:', achievementsError);
    }
    catch (error) {
        console.error('Supabase connection test failed:', error);
    }
}

void testConnection();
