'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Industry } from '@/types/content';
import { ContentForm } from '@/components/admin/content-form';
import { Loader2 } from 'lucide-react';

export default function EditIndustryPage() {
  const { id } = useParams();
  const [industry, setIndustry] = useState<Industry | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchIndustry() {
      try {
        const { data, error } = await supabase
          .from('industries')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        setIndustry(data);
      } catch (error) {
        console.error('Error fetching industry:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchIndustry();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (!industry) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Industry not found</h1>
        <p className="text-gray-600">The industry you&apos;re looking for doesn&apos;t exist.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Industry</h1>
      <div className="max-w-2xl">
        <ContentForm type="industry" mode="edit" initialData={industry} />
      </div>
    </div>
  );
} 