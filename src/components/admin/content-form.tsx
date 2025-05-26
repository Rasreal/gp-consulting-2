'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { Achievement, Industry } from '@/types/content';
import { Solution } from '@/hooks/useSolutions';
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

type ContentType = 'industry' | 'solution' | 'achievement';

type FormData = {
  title: string;
  description: string;
  icon?: string;
  services?: string[] | string;
  image_url?: string;
  value?: string;
  created_at?: string;
  updated_at?: string;
};

interface ContentFormProps {
  type: ContentType;
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
      icon: type === 'industry' ? INDUSTRY_ICONS[0] : undefined,
      services: type === 'industry' ? [] : undefined,
      image_url: type === 'solution' ? '' : undefined,
      value: type === 'achievement' ? '' : undefined,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const now = new Date().toISOString();
      let finalData = {
        ...formData,
        created_at: mode === 'create' ? now : initialData?.created_at || now,
        updated_at: now,
      };

      // Format services as array if it's a string (for industry type)
      if (type === 'industry' && typeof finalData.services === 'string') {
        finalData = {
          ...finalData,
          services: finalData.services
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean),
        };
      }

      // For solutions, make sure we remove any services field
      if (type === 'solution') {
        const { services, ...solutionData } = finalData;
        finalData = solutionData;
      }

      if (mode === 'create') {
        const { error } = await supabase
          .from(type === 'achievement' ? 'achievements' : `${type}s`)
          .insert([finalData]);

        if (error) throw error;
      } else if (initialData?.id) {
        const { error } = await supabase
          .from(type === 'achievement' ? 'achievements' : `${type}s`)
          .update(finalData)
          .eq('id', initialData.id);

        if (error) throw error;
      }

      router.push(`/admin/${type === 'achievement' ? 'achievements' : `${type}s`}`);
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
        .from(type === 'achievement' ? 'achievements' : `${type}s`)
        .delete()
        .eq('id', initialData.id);
      
      if (error) throw error;
      
      router.push(`/admin/${type === 'achievement' ? 'achievements' : `${type}s`}`);
      router.refresh();
    } catch (error: unknown) {
      console.error('Error deleting content:', error);

      if (error instanceof Error) {
        alert(error.message || 'Error deleting content. Please try again.');
      } else {
        alert('Error deleting content. Please try again.');
      }
    }
    finally {
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
            <>
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

          {type === 'solution' && (
            <div>
              <Label htmlFor="image_url">Image URL</Label>
              <Input
                id="image_url"
                value={formData.image_url || ''}
                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                required
                placeholder="https://example.com/image.jpg"
              />
              {formData.image_url && (
                <div className="mt-2 border rounded-md p-2">
                  <p className="text-sm text-muted-foreground mb-2">Preview:</p>
                  <div className="relative aspect-video max-w-xs rounded-md overflow-hidden">
                    <img 
                      src={formData.image_url} 
                      alt="Preview" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
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
        </>
      )}

      <div className="flex justify-between pt-4">
        <div>
          {mode === 'edit' && (
            <Button 
              type="button" 
              onClick={handleDelete} 
              variant="destructive"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                'Delete'
              )}
            </Button>
          )}
        </div>
        <div className="flex gap-2">
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => router.push(`/admin/${type === 'achievement' ? 'achievements' : `${type}s`}`)}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {mode === 'create' ? 'Creating...' : 'Updating...'}
              </>
            ) : (
              mode === 'create' ? 'Create' : 'Update'
            )}
          </Button>
        </div>
      </div>
    </form>
  );
} 