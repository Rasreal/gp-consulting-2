import { supabase } from '@/lib/supabase';
import { Industry, Solution, Achievement } from '@/types/content';

// Fallback data
export const DEFAULT_INDUSTRIES: Industry[] = [
  {
    id: '1',
    title: 'Healthcare',
    description: 'Innovative solutions for healthcare providers',
    icon: 'medical',
    services: ['Medical Records', 'Patient Care', 'Hospital Management']
  },
  // Add your current static data here
];

export const DEFAULT_SOLUTIONS: Solution[] = [
  {
    id: '1',
    title: 'Digital Transformation',
    description: 'Complete digital transformation services',
    icon: 'digital',
    services: ['Process Automation', 'Cloud Migration', 'Digital Strategy']
  },
  // Add your current static data here
];

export const DEFAULT_ACHIEVEMENTS: Achievement[] = [
  {
    id: '1',
    title: 'Projects Completed',
    value: '500+',
    description: 'Successfully delivered projects'
  },
  // Add your current static data here
];

export async function getIndustries(): Promise<Industry[]> {
  const { data, error } = await supabase
    .from('industries')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error fetching industries:', error);
    return DEFAULT_INDUSTRIES;
  }

  return data.length > 0 ? data : DEFAULT_INDUSTRIES;
}

export async function getSolutions(): Promise<Solution[]> {
  const { data, error } = await supabase
    .from('solutions')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error fetching solutions:', error);
    return DEFAULT_SOLUTIONS;
  }

  return data.length > 0 ? data : DEFAULT_SOLUTIONS;
}

export async function getAchievements(): Promise<Achievement[]> {
  const { data, error } = await supabase
    .from('achievements')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error fetching achievements:', error);
    return DEFAULT_ACHIEVEMENTS;
  }

  return data.length > 0 ? data : DEFAULT_ACHIEVEMENTS;
} 