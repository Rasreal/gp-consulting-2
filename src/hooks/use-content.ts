import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { Industry, Solution, Achievement } from '@/types/content';

type ContentTypes = {
  industries: Industry[];
  solutions: Solution[];
  achievements: Achievement[];
};

// Default data as fallback
const DEFAULT_DATA: ContentTypes = {
  industries: [
    {
      id: "transport",
      title: "Транспорт",
      description: "Оптимизация процессов и внедрение современных технологий в транспортном секторе для повышения эффективности и безопасности.",
      icon: "TransportIcon",
      services: ["Service 1", "Service 2"],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ],
  solutions: [
    {
      id: "strategy",
      title: "Стратегия и консалтинг",
      description: "Помогаем бизнесу определить направление роста",
      icon: "StrategyIcon",
      services: ["Service 1", "Service 2"],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ],
  achievements: [
    {
      id: "ai-models",
      value: "> 25",
      title: "AI-моделей",
      description: "Внедрено в производство",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ]
};

// Function to get data from localStorage with type checking
function getLocalData<T>(key: string): T[] | null {
  if (typeof window === 'undefined') return null;
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error(`Error reading from localStorage:`, error);
    return null;
  }
}

// Function to set data in localStorage
function setLocalData(key: string, data: unknown): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error writing to localStorage:`, error);
  }
}

// Generic fetch function with proper type handling and timeout
async function fetchContent<T extends keyof ContentTypes>(
  table: T,
  signal?: AbortSignal
): Promise<ContentTypes[T]> {
  console.log(`Fetching ${table} data from Supabase...`);
  
  try {
    const timeoutId = setTimeout(() => {
      if (signal?.aborted) return;
      console.warn(`Fetch for ${table} is taking longer than expected...`);
    }, 5000); // Warn after 5 seconds

    const query = supabase
      .from(table)
      .select('*')
      .order('created_at', { ascending: true });

    if (signal) {
      query.abortSignal(signal);
    }

    const result = await Promise.race([
      query,
      new Promise<never>((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout')), 15000) // 15 second timeout
      )
    ]);

    clearTimeout(timeoutId);

    const { data, error } = result;

    if (error) {
      console.error(`Error fetching ${table}:`, error);
      const fallback = DEFAULT_DATA[table];
      console.log(`Using fallback data for ${table}:`, fallback);
      return fallback;
    }

    if (!data || data.length === 0) {
      console.log(`No ${table} data found, using default data`);
      return DEFAULT_DATA[table];
    }

    // Cache successful response
    console.log(`Caching ${table} data:`, data);
    setLocalData(table, data);
    return data as ContentTypes[T];
  } catch (error) {
    if (error instanceof Error && error.message === 'Request timeout') {
      console.error(`Timeout fetching ${table} data`);
    } else if (signal?.aborted) {
      console.log(`Request for ${table} was cancelled`);
    } else {
      console.error(`Error fetching ${table} data:`, error);
    }
    return DEFAULT_DATA[table];
  }
}

// Custom hooks for each content type
export function useIndustries() {
  return useQuery({
    queryKey: ['industries'],
    queryFn: ({ signal }) => fetchContent('industries', signal),
    staleTime: 0, // Consider data stale immediately
    gcTime: 1000 * 60 * 60, // Keep unused data in cache for 1 hour
    refetchOnMount: 'always', // Always refetch when component mounts
    refetchOnWindowFocus: true, // Refetch when window regains focus
    retry: 2, // Retry failed requests twice
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 10000), // Exponential backoff
    initialData: () => {
      const cached = getLocalData<Industry>('industries');
      console.log('Initial industries data from cache:', cached);
      return cached || DEFAULT_DATA.industries;
    }
  });
}

export function useSolutions() {
  return useQuery({
    queryKey: ['solutions'],
    queryFn: ({ signal }) => fetchContent('solutions', signal),
    staleTime: 0,
    gcTime: 1000 * 60 * 60,
    refetchOnMount: 'always',
    refetchOnWindowFocus: true,
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 10000),
    initialData: () => {
      const cached = getLocalData<Solution>('solutions');
      console.log('Initial solutions data from cache:', cached);
      return cached || DEFAULT_DATA.solutions;
    }
  });
}

export function useAchievements() {
  return useQuery({
    queryKey: ['achievements'],
    queryFn: ({ signal }) => fetchContent('achievements', signal),
    staleTime: 0,
    gcTime: 1000 * 60 * 60,
    refetchOnMount: 'always',
    refetchOnWindowFocus: true,
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 10000),
    initialData: () => {
      const cached = getLocalData<Achievement>('achievements');
      console.log('Initial achievements data from cache:', cached);
      return cached || DEFAULT_DATA.achievements;
    }
  });
} 