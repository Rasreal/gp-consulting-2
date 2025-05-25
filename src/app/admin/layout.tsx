'use client';

import { redirect } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { AdminSidebar } from '@/components/admin/sidebar';
import { useEffect, useState } from 'react';
import { checkAndSetAdminRole } from './check-admin';
import { Loader2 } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Skip auth check for login page
    if (pathname === '/admin/login') {
      setIsLoading(false);
      return;
    }

    let mounted = true;

    async function checkAuth() {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session?.user) {
          console.log('No session found, redirecting to login');
          router.push('/admin/login');
          return;
        }

        // Check and set admin role
        const isAdmin = await checkAndSetAdminRole();
        if (!isAdmin) {
          console.log('Not an admin, redirecting to login');
          router.push('/admin/login');
          return;
        }

        if (mounted) {
          console.log('Admin role confirmed');
          setIsAuthenticated(true);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error checking auth:', error);
        if (mounted) {
          router.push('/admin/login');
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    }

    checkAuth();

    // Subscribe to auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (!mounted) return;

      if (event === 'SIGNED_IN') {
        const isAdmin = await checkAndSetAdminRole();
        setIsAuthenticated(isAdmin);
        if (!isAdmin) {
          router.push('/admin/login');
        }
      } else if (event === 'SIGNED_OUT') {
        setIsAuthenticated(false);
        router.push('/admin/login');
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [pathname, router]);

  // Return early for login page
  if (pathname === '/admin/login') {
    return children;
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
} 