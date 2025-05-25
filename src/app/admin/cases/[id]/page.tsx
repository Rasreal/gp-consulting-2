'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Case } from '@/types/content';
import { CaseForm } from '@/components/admin/case-form';
import { Loader2 } from 'lucide-react';

export default function EditCasePage() {
  const { id } = useParams();
  const [caseData, setCaseData] = useState<Case | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCase() {
      try {
        const { data, error } = await supabase
          .from('cases')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        setCaseData(data);
      } catch (error) {
        console.error('Error fetching case:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCase();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (!caseData) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Case not found</h1>
        <p className="text-gray-600">The case you&apos;re looking for doesn&apos;t exist.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Case</h1>
      <div className="max-w-2xl">
        <CaseForm mode="edit" initialData={caseData} />
      </div>
    </div>
  );
} 