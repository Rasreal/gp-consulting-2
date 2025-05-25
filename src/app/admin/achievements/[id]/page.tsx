'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Achievement } from '@/types/content';
import { ContentForm } from '@/components/admin/content-form';
import { Loader2 } from 'lucide-react';

export default function EditAchievementPage() {
  const { id } = useParams();
  const [achievement, setAchievement] = useState<Achievement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAchievement() {
      try {
        const { data, error } = await supabase
          .from('achievements')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        setAchievement(data);
      } catch (error) {
        console.error('Error fetching achievement:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAchievement();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (!achievement) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Achievement not found</h1>
        <p className="text-gray-600">The achievement you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Achievement</h1>
      <div className="max-w-2xl">
        <ContentForm type="achievement" mode="edit" initialData={achievement} />
      </div>
    </div>
  );
} 