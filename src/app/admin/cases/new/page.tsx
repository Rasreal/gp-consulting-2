'use client';

import { CaseForm } from '@/components/admin/case-form';

export default function NewCasePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">New Case</h1>
      <div className="max-w-2xl">
        <CaseForm mode="create" />
      </div>
    </div>
  );
} 