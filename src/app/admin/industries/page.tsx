'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Industry } from '@/types/content';
import { Loader2, Plus } from 'lucide-react';

// Fallback data in case of errors
const FALLBACK_INDUSTRIES: Industry[] = [
  {
    id: '1',
    title: 'Transport',
    description: 'Transportation and logistics solutions',
    icon: 'TransportIcon',
    image_url: '',
    services: ['Fleet Management', 'Route Optimization'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Telecom',
    description: 'Telecommunications infrastructure',
    icon: 'TelecomIcon',
    image_url: '',
    services: ['Network Infrastructure', '5G Solutions'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

export default function IndustriesAdminPage() {
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchIndustries();

    // Subscribe to changes
    const channel = supabase
      .channel('industries_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'industries',
        },
        () => {
          console.log('Industries table changed, refreshing data...');
          fetchIndustries();
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);

  async function fetchIndustries() {
    try {
      console.log('Fetching industries...');
      const { data, error: fetchError } = await supabase
        .from('industries')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) {
        console.error('Supabase error:', fetchError);
        throw fetchError;
      }

      console.log('Fetched industries:', data);

      if (!data || data.length === 0) {
        console.log('No data found, using fallback data');
        setIndustries(FALLBACK_INDUSTRIES);
        return;
      }

      setIndustries(data);
      setError(null);
    } catch (error: unknown) {
      console.error('Error details:', error);
      const message = error instanceof Error ? error.message : 'Error loading industries';
      setError(message);
      setIndustries(FALLBACK_INDUSTRIES);
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
          <h1 className="text-2xl font-bold">Industries</h1>
          <Button onClick={() => router.push('/admin/industries/new')}>
            <Plus className="w-4 h-4 mr-2" />
            Add Industry
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
              fetchIndustries();
            }}
          >
            Try Again
          </Button>
        </div>
        <div className="grid gap-4">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="flex items-center justify-between p-4 bg-card rounded-lg border"
            >
              <div>
                <h3 className="font-medium">{industry.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-1">
                  {industry.description}
                </p>
                <div className="flex gap-2 mt-2">
                  {industry.services?.map((service, index) => (
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
                onClick={() => router.push(`/admin/industries/${industry.id}`)}
              >
                Edit
              </Button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Industries</h1>
        <Button onClick={() => router.push('/admin/industries/new')}>
          <Plus className="w-4 h-4 mr-2" />
          Add Industry
        </Button>
      </div>

      <div className="grid gap-4">
        {industries.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">
            No industries found. Create your first one!
          </p>
        ) : (
          industries.map((industry) => (
            <div
              key={industry.id}
              className="flex items-center justify-between p-4 bg-card rounded-lg border"
            >
              <div>
                <h3 className="font-medium">{industry.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-1">
                  {industry.description}
                </p>
                <div className="flex gap-2 mt-2">
                  {industry.services?.map((service, index) => (
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
                onClick={() => router.push(`/admin/industries/${industry.id}`)}
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