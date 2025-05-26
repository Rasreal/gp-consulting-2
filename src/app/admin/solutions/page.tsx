'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Solution } from '@/hooks/useSolutions';
import { Loader2, Plus } from 'lucide-react';
import Image from 'next/image';

// Fallback data in case of errors
const FALLBACK_SOLUTIONS: Solution[] = [
  {
    id: '1',
    title: 'Все типы исследований и подготовка к запуску',
    description: 'Анализ рынка, тестирование идей и формирование стратегии для успешного старта.',
    image_url: 'https://optim.tildacdn.com/tild3738-3933-4763-b231-366238613764/-/cover/720x504/center/center/-/format/webp/man-touching-futuris.jpg.webp',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Бизнес анализ и аудит',
    description: 'Оценка текущего состояния компании, выявление точек роста и оптимизация процессов.',
    image_url: 'https://optim.tildacdn.com/tild6461-3665-4539-a232-326239636562/-/resize/800x1000/-/format/webp/Picture_3.png.webp',
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
          <h1 className="text-2xl font-bold">Решения</h1>
          <Button onClick={() => router.push('/admin/solutions/new')}>
            <Plus className="w-4 h-4 mr-2" />
            Добавить решение
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
            Повторить
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Решения</h1>
        <Button onClick={() => router.push('/admin/solutions/new')}>
          <Plus className="w-4 h-4 mr-2" />
          Добавить решение
        </Button>
      </div>

      <div className="grid gap-4">
        {solutions.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">
            Решения не найдены. Создайте первое!
          </p>
        ) : (
          solutions.map((solution) => (
            <div
              key={solution.id}
              className="flex items-center justify-between p-4 bg-card rounded-lg border"
            >
              <div className="flex items-center gap-4 w-full">
                {solution.image_url && (
                  <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                    <Image 
                      src={solution.image_url} 
                      alt={solution.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                )}
                <div className="flex-grow">
                  <h3 className="font-medium">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {solution.description}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  onClick={() => router.push(`/admin/solutions/${solution.id}`)}
                >
                  Редактировать
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
} 