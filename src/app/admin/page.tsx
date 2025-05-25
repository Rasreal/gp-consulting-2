'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Card } from '@/components/ui/card';
import { Factory, Lightbulb, Trophy, Briefcase } from 'lucide-react';
import Link from 'next/link';

interface Stats {
  industries: number;
  solutions: number;
  achievements: number;
  cases: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    industries: 0,
    solutions: 0,
    achievements: 0,
    cases: 0
  });

  useEffect(() => {
    async function fetchStats() {
      const [
        { count: industriesCount },
        { count: solutionsCount },
        { count: achievementsCount },
        { count: casesCount },
      ] = await Promise.all([
        supabase.from('industries').select('*', { count: 'exact', head: true }),
        supabase.from('solutions').select('*', { count: 'exact', head: true }),
        supabase.from('achievements').select('*', { count: 'exact', head: true }),
        supabase.from('cases').select('*', { count: 'exact', head: true }),
      ]);

      setStats({
        industries: industriesCount || 0,
        solutions: solutionsCount || 0,
        achievements: achievementsCount || 0,
        cases: casesCount || 0
      });
    }

    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Factory className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Industries</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.industries}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Lightbulb className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Solutions</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.solutions}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <Trophy className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Achievements</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.achievements}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Briefcase className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Cases</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.cases}</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-12">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/admin/industries/new"
            className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
          >
            <h3 className="text-base font-semibold text-gray-900">Add Industry</h3>
            <p className="mt-1 text-sm text-gray-600">Create a new industry entry</p>
          </Link>

          <Link
            href="/admin/solutions/new"
            className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
          >
            <h3 className="text-base font-semibold text-gray-900">Add Solution</h3>
            <p className="mt-1 text-sm text-gray-600">Create a new solution entry</p>
          </Link>

          <Link
            href="/admin/achievements/new"
            className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
          >
            <h3 className="text-base font-semibold text-gray-900">Add Achievement</h3>
            <p className="mt-1 text-sm text-gray-600">Create a new achievement entry</p>
          </Link>

          <Link
            href="/admin/cases"
            className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
          >
            <h3 className="text-base font-semibold text-gray-900">Manage Cases</h3>
            <p className="mt-1 text-sm text-gray-600">View and edit case studies</p>
          </Link>
        </div>
      </div>
    </div>
  );
} 