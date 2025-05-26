'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Solution } from '@/hooks/useSolutions';
import { ContentForm } from '@/components/admin/content-form';
import { Loader2 } from 'lucide-react';

export default function EditSolutionPage() {
  const { id } = useParams();
  const [solution, setSolution] = useState<Solution | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchSolution() {
      try {
        const { data, error } = await supabase
          .from('solutions')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        setSolution(data);
      } catch (error) {
        console.error('Error fetching solution:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSolution();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (!solution) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Решение не найдено</h1>
        <p className="text-gray-600">Запрашиваемое решение не существует.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Редактировать решение</h1>
      <div className="max-w-2xl">
        <ContentForm type="solution" mode="edit" initialData={solution} />
      </div>
    </div>
  );
} 