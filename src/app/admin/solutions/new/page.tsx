'use client';

import { ContentForm } from '@/components/admin/content-form';

export default function NewSolutionPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">New Solution</h1>
      <div className="max-w-2xl">
        <ContentForm type="solution" mode="create" />
      </div>
    </div>
  );
} 