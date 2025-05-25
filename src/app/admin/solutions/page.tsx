'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Solution } from '@/types/content';
import { Loader2, Plus } from 'lucide-react';

// Fallback data in case of errors
const FALLBACK_SOLUTIONS: Solution[] = [
  {
    id: '1',
    title: 'AI Transformation',
    description: 'Enterprise AI and ML solutions',
    icon: 'ai',
    services: ['Machine Learning', 'Neural Networks', 'Data Analytics'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Digital Transformation',
    description: 'End-to-end digital solutions',
    icon: 'digital',
    services: ['Process Automation', 'Cloud Migration', 'Digital Strategy'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

export default function SolutionsAdminPage() {
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchSolutions();

    // Subscribe to changes
    const channel = supabase
      .channel('solutions_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'solutions',
        },
        () => {
          console.log('Solutions table changed, refreshing data...');
          fetchSolutions();
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);

  async function fetchSolutions() {
    try {
      console.log('Fetching solutions...');
      const { data, error: fetchError } = await supabase
        .from('solutions')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) {
        console.error('Supabase error:', fetchError);
        throw fetchError;
      }

      console.log('Fetched solutions:', data);

      if (!data || data.length === 0) {
        console.log('No data found, using fallback data');
        setSolutions(FALLBACK_SOLUTIONS);
        return;
      }

      setSolutions(data);
      setError(null);
    } catch (error: unknown) {
      console.error('Error details:', error);
      const message = error instanceof Error ? error.message : 'Error loading solutions';
      setError(message);
      setSolutions(FALLBACK_SOLUTIONS);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Solutions</h1>
          <Button onClick={() => router.push('/admin/solutions/new')}>
            <Plus className="w-4 h-4 mr-2" />
            Add Solution
          </Button>
        </div>
        <div className="p-4 border border-red-200 bg-red-50 text-red-700 rounded-md">
          <p>Error: {error}</p>
          <Button
            variant="outline"
            className="mt-2"
            onClick={() => {
              setIsLoading(true);
              setError(null);
              fetchSolutions();
            }}
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Solutions</h1>
        <Button onClick={() => router.push('/admin/solutions/new')}>
          <Plus className="w-4 h-4 mr-2" />
          Add Solution
        </Button>
      </div>

      <div className="grid gap-4">
        {solutions.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">
            No solutions found. Create your first one!
          </p>
        ) : (
          solutions.map((solution) => (
            <div
              key={solution.id}
              className="flex items-center justify-between p-4 bg-card rounded-lg border"
            >
              <div>
                <h3 className="font-medium">{solution.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-1">
                  {solution.description}
                </p>
                <div className="flex gap-2 mt-2">
                  {solution.services?.map((service, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              <Button
                variant="ghost"
                onClick={() => router.push(`/admin/solutions/${solution.id}`)}
              >
                Edit
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
} 