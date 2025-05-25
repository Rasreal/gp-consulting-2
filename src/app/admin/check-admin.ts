import { supabase } from '@/lib/supabase';

export async function checkAndSetAdminRole() {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user) {
      console.log('No session found');
      return false;
    }

    console.log('Checking admin role for user:', session.user.id);

    // Check if user has a profile
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', session.user.id)
      .single();

    if (profileError) {
      console.error('Error checking profile:', profileError);
      
      // If the error is that the profile doesn't exist, create it
      if (profileError.code === 'PGRST116') {
        console.log('Profile not found, creating new profile');
        const { error: insertError } = await supabase
          .from('profiles')
          .insert({
            id: session.user.id,
            role: 'admin'
          });

        if (insertError) {
          console.error('Error creating profile:', insertError);
          return false;
        }

        return true;
      }
      
      return false;
    }

    console.log('Current profile:', profile);

    // If profile exists but not admin, update to admin
    if (!profile || profile.role !== 'admin') {
      console.log('Updating profile to admin role');
      const { error: updateError } = await supabase
        .from('profiles')
        .upsert({
          id: session.user.id,
          role: 'admin'
        });

      if (updateError) {
        console.error('Error setting admin role:', updateError);
        return false;
      }

      // Verify the update
      const { data: verifyProfile, error: verifyError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', session.user.id)
        .single();

      if (verifyError || verifyProfile?.role !== 'admin') {
        console.error('Failed to verify admin role:', verifyError);
        return false;
      }

      console.log('Successfully set admin role');
    }

    return true;
  } catch (error) {
    console.error('Error in checkAndSetAdminRole:', error);
    return false;
  }
} 