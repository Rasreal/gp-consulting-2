import 'dotenv/config'; // ✅ обязательно первой строкой
import { supabase } from '../lib/supabase';


async function checkAndInsertData() {
  try {
    console.log('Checking Supabase tables...');

    // Check industries
    const { data: industries, error: industriesError } = await supabase
      .from('industries')
      .select('*');
    
    console.log('Industries:', {
      count: industries?.length || 0,
      error: industriesError
    });

    // Check solutions
    const { data: solutions, error: solutionsError } = await supabase
      .from('solutions')
      .select('*');
    
    console.log('Solutions:', {
      count: solutions?.length || 0,
      error: solutionsError
    });

    // Check achievements
    const { data: achievements, error: achievementsError } = await supabase
      .from('achievements')
      .select('*');
    
    console.log('Achievements:', {
      count: achievements?.length || 0,
      error: achievementsError
    });

    // If no data exists, insert test data
    if (!industries?.length) {
      console.log('Inserting test industries...');
      const { error } = await supabase
        .from('industries')
        .insert([
          {
            title: 'Test Industry 1',
            description: 'Test Description 1',
            icon: 'TransportIcon',
            services: ['Service 1', 'Service 2']
          }
        ]);
      
      if (error) {
        console.error('Error inserting test industry:', error);
      }
    }

    if (!solutions?.length) {
      console.log('Inserting test solutions...');
      const { error } = await supabase
        .from('solutions')
        .insert([
          {
            title: 'Test Solution 1',
            description: 'Test Description 1',
            services: ['Service 1', 'Service 2']
          }
        ]);
      
      if (error) {
        console.error('Error inserting test solution:', error);
      }
    }

    if (!achievements?.length) {
      console.log('Inserting test achievements...');
      const { error } = await supabase
        .from('achievements')
        .insert([
          {
            value: 'Test Value 1',
            title: 'Test Achievement 1',
            description: 'Test Description 1'
          }
        ]);
      
      if (error) {
        console.error('Error inserting test achievement:', error);
      }
    }

  } catch (error) {
    console.error('Script error:', error);
  }
}

checkAndInsertData(); 