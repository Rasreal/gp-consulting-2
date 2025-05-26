'use client';

import { ContentForm } from '@/components/admin/content-form';

export default function NewAchievementPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">New Achievement</h1>
      <div className="max-w-2xl">
        <ContentForm type="achievement" mode="create" />
      </div>
    </div>
  );
} 