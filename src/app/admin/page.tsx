'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Card } from '@/components/ui/card';
import { Factory, Lightbulb, Trophy, Briefcase, Calendar, Clock, Mail, Building, Phone, MessageSquare } from 'lucide-react';
import Link from 'next/link';

interface Stats {
  industries: number;
  solutions: number;
  achievements: number;
  cases: number;
}

interface Booking {
  id: string;
  meeting_type: string;
  meeting_date: string;
  meeting_time: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  message: string | null;
  status: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    industries: 0,
    solutions: 0,
    achievements: 0,
    cases: 0
  });
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoadingBookings, setIsLoadingBookings] = useState(true);

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

    async function fetchBookings() {
      setIsLoadingBookings(true);
      try {
        const { data, error } = await supabase
          .from('bookings')
          .select('*')
          .order('created_at', { ascending: false });


        console.log("data", data);
        console.log("error", error);
        
        if (error) throw error;
        setBookings(data || []);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setIsLoadingBookings(false);
      }
    }

    fetchStats();
    fetchBookings();
  }, []);

  // Format date to a readable format
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit', 
      year: 'numeric'
    });
  };

  // Function to update booking status
  const updateBookingStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('bookings')
        .update({ status })
        .eq('id', id);
      
      if (error) throw error;
      
      // Update local state
      setBookings(prevBookings => 
        prevBookings.map(booking => 
          booking.id === id ? { ...booking, status } : booking
        )
      );
    } catch (error) {
      console.error('Error updating booking status:', error);
    }
  };

  // Get status badge class based on status
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      default: // 'pending'
        return 'bg-yellow-100 text-yellow-800';
    }
  };

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

      <div className="mt-12 ">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Bookings</h2>
        <Card className="overflow-hidden bg-white mb-0">
          {isLoadingBookings ? (
            <div className="p-8 text-center">
              <div className="animate-spin w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full mx-auto"></div>
              <p className="mt-2 text-sm text-gray-600">Loading bookings...</p>
            </div>
          ) : bookings.length === 0 ? (
            <div className="p-8 text-center">
              <Calendar className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">No bookings found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meeting Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-gray-50 mt-2">
                      <td className="px-6 mt-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-2">
                            <div className="text-sm font-medium text-gray-900">{booking.name}</div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <Mail className="w-3 h-3 mr-1" /> 
                              {booking.email}
                            </div>
                            {booking.phone && (
                              <div className="text-sm text-gray-500 flex items-center">
                                <Phone className="w-3 h-3 mr-1" /> 
                                {booking.phone}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{booking.meeting_type}</div>
                        {booking.company && (
                          <div className="text-sm text-gray-500 flex items-center">
                            <Building className="w-3 h-3 mr-1" /> 
                            {booking.company}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" /> 
                          {formatDate(booking.meeting_date)}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Clock className="w-3 h-3 mr-1" /> 
                          {booking.meeting_time}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(booking.status)}`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          {booking.status === 'pending' && (
                            <>
                              <button
                                onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                                className="text-green-600 hover:text-green-900"
                              >
                                Confirm
                              </button>
                              <button
                                onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                                className="text-red-600 hover:text-red-900"
                              >
                                Cancel
                              </button>
                            </>
                          )}
                          {booking.status === 'confirmed' && (
                            <button
                              onClick={() => updateBookingStatus(booking.id, 'completed')}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              Mark as Completed
                            </button>
                          )}
                          <button
                            onClick={() => alert(booking.message || 'No message provided')}
                            className="text-gray-600 hover:text-gray-900"
                            disabled={!booking.message}
                          >
                            <MessageSquare className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="bg-gray-50 px-6 py-5 border-t border-gray-200">
            <Link 
              href="/admin/bookings" 
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              View all bookings
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
} 