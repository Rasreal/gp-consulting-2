'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Achievement } from '@/types/content';
import { 
  Loader2, 
  Plus, 
  Pencil, 
  Trash2, 
  CheckCircle, 
  XCircle 
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from 'sonner';

export default function AchievementsAdminPage() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAchievement, setCurrentAchievement] = useState<Achievement | null>(null);
  const [formData, setFormData] = useState({
    value: '',
    title: '',
    description: ''
  });
  
  const router = useRouter();

  useEffect(() => {
    fetchAchievements();

    // Subscribe to changes
    const channel = supabase
      .channel('achievements_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'achievements',
        },
        () => {
          console.log('Achievements table changed, refreshing data...');
          fetchAchievements();
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);

  async function fetchAchievements() {
    try {
      setIsLoading(true);
      const { data, error: fetchError } = await supabase
        .from('achievements')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;

      setAchievements(data || []);
      setError(null);
    } catch (error: any) {
      console.error('Error fetching achievements:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  const handleCreate = async () => {
    try {
      const { data, error } = await supabase
        .from('achievements')
        .insert([formData])
        .select()
        .single();

      if (error) throw error;

      toast.success('Achievement created successfully');
      setIsDialogOpen(false);
      setFormData({ value: '', title: '', description: '' });
      await fetchAchievements();
    } catch (error: any) {
      console.error('Error creating achievement:', error);
      toast.error(error.message);
    }
  };

  const handleUpdate = async () => {
    if (!currentAchievement?.id) return;

    try {
      const { error } = await supabase
        .from('achievements')
        .update(formData)
        .eq('id', currentAchievement.id);

      if (error) throw error;

      toast.success('Achievement updated successfully');
      setIsDialogOpen(false);
      setCurrentAchievement(null);
      setFormData({ value: '', title: '', description: '' });
      await fetchAchievements();
    } catch (error: any) {
      console.error('Error updating achievement:', error);
      toast.error(error.message);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this achievement?')) return;

    try {
      const { error } = await supabase
        .from('achievements')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast.success('Achievement deleted successfully');
      await fetchAchievements();
    } catch (error: any) {
      console.error('Error deleting achievement:', error);
      toast.error(error.message);
    }
  };

  const openEditDialog = (achievement: Achievement) => {
    setCurrentAchievement(achievement);
    setFormData({
      value: achievement.value,
      title: achievement.title,
      description: achievement.description
    });
    setIsDialogOpen(true);
  };

  const openCreateDialog = () => {
    setCurrentAchievement(null);
    setFormData({ value: '', title: '', description: '' });
    setIsDialogOpen(true);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <XCircle className="w-12 h-12 text-red-500" />
        <p className="text-xl text-red-500">{error}</p>
        <Button onClick={fetchAchievements}>Try Again</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Achievements</h1>
        <Button onClick={openCreateDialog}>
          <Plus className="w-4 h-4 mr-2" />
          Add Achievement
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold">{achievement.value}</h3>
                <p className="text-lg font-semibold text-gray-700">{achievement.title}</p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => openEditDialog(achievement)}
                >
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleDelete(achievement.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <p className="text-gray-600">{achievement.description}</p>
          </div>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {currentAchievement ? 'Edit Achievement' : 'Create Achievement'}
            </DialogTitle>
            <DialogDescription>
              Fill in the details below to {currentAchievement ? 'update' : 'create'} an achievement.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="value">Value</Label>
              <Input
                id="value"
                placeholder="e.g., >25"
                value={formData.value}
                onChange={(e) => setFormData(prev => ({ ...prev, value: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="e.g., AI Models"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Enter description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={currentAchievement ? handleUpdate : handleCreate}>
              {currentAchievement ? 'Update' : 'Create'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
} 