'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { Achievement, Industry, Solution } from '@/types/content';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Predefined icons for industries
const INDUSTRY_ICONS = [
  'TransportIcon',
  'TelecomIcon',
  'LogisticsIcon',
  'ManufacturingIcon',
  'FinanceIcon',
  'RetailIcon',
  'HealthcareIcon',
  'EnergyIcon'
] as const;

type FormData = {
  title: string;
  description: string;
  icon?: string;
  services?: string[] | string;
  value?: string;
  created_at?: string;
  updated_at?: string;
};

interface ContentFormProps {
  type: 'industry' | 'solution' | 'achievement';
  initialData?: Industry | Solution | Achievement;
  mode: 'create' | 'edit';
}

export function ContentForm({ type, initialData, mode }: ContentFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>(
    initialData || {
      title: '',
      description: '',
      icon: INDUSTRY_ICONS[0],
      services: [],
      value: '',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const now = new Date().toISOString();
      const finalData = {
        ...formData,
        created_at: mode === 'create' ? now : initialData?.created_at || now,
        updated_at: now,
      };

      if (mode === 'create') {
        const { error } = await supabase
          .from(type)
          .insert([finalData]);

        if (error) throw error;
      } else if (initialData?.id) {
        const { error } = await supabase
          .from(type)
          .update(finalData)
          .eq('id', initialData.id);

        if (error) throw error;
      }

      router.push(`/admin/${type}`);
      router.refresh();
    } catch (error: unknown) {
      console.error(`Error ${mode === 'create' ? 'creating' : 'updating'} ${type}:`, error);
      const message = error instanceof Error ? error.message : `Error ${mode === 'create' ? 'creating' : 'updating'} ${type}`;
      alert(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!initialData?.id || !confirm('Are you sure you want to delete this item?')) return;

    setIsLoading(true);
    try {
      const { error } = await supabase
        .from(`${type}s`)
        .delete()
        .eq('id', initialData.id);
      
      if (error) throw error;
      
      router.push(`/admin/${type}s`);
      router.refresh();
    } catch (error: any) {
      console.error('Error deleting content:', error);
      alert(error.message || 'Error deleting content. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {type !== 'achievement' && (
        <>
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={formData.title || ''}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </div>

          {type === 'industry' && (
            <div>
              <Label htmlFor="icon">Icon</Label>
              <Select
                value={formData.icon}
                onValueChange={(value) => setFormData({ ...formData, icon: value })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select an icon" />
                </SelectTrigger>
                <SelectContent>
                  {INDUSTRY_ICONS.map((icon) => (
                    <SelectItem key={icon} value={icon}>
                      {icon}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div>
            <Label htmlFor="services">Services (comma-separated)</Label>
            <Textarea
              id="services"
              value={Array.isArray(formData.services) ? formData.services.join(', ') : formData.services || ''}
              onChange={(e) => setFormData({ ...formData, services: e.target.value })}
              required
              placeholder="Enter services separated by commas"
            />
          </div>
        </>
      )}

      {type === 'achievement' && (
        <>
          <div>
            <Label htmlFor="value">Value</Label>
            <Input
              id="value"
              value={formData.value || ''}
              onChange={(e) => setFormData({ ...formData, value: e.target.value })}
              required
              placeholder="e.g. '95%' or '> 25' or '+18 pp'"
            />
          </div>

          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={formData.title || ''}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              placeholder="e.g. 'AI-моделей' or 'OPEX'"
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              placeholder="e.g. 'Внедрено в производство'"
            />
          </div>
        </>
      )}

      <div className="flex justify-between">
        <div className="space-x-4">
          <Button type="submit" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {mode === 'create' ? 'Create' : 'Update'}
          </Button>
          {mode === 'edit' && (
            <Button
              type="button"
              variant="destructive"
              onClick={handleDelete}
              disabled={isLoading}
            >
              Delete
            </Button>
          )}
        </div>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.back()}
          disabled={isLoading}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
} 