'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, Plus, X } from 'lucide-react';
import { Case } from '@/types/content';

interface CaseFormProps {
  initialData?: Case;
  mode: 'create' | 'edit';
}

export function CaseForm({ initialData, mode }: CaseFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<Omit<Case, 'id' | 'created_at' | 'updated_at'>>({
    title: initialData?.title || '',
    client: initialData?.client || '',
    industry: initialData?.industry || '',
    solution: initialData?.solution || '',
    description: initialData?.description || '',
    results: initialData?.results || [''],
    image: initialData?.image || '',
    tags: initialData?.tags || [''],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate required fields
      if (!formData.title || !formData.client || !formData.industry || !formData.solution || !formData.description) {
        throw new Error('Please fill in all required fields');
      }

      // Filter out empty results and tags
      const cleanedData = {
        ...formData,
        results: formData.results.filter(Boolean),
        tags: formData.tags.filter(Boolean),
      };

      if (cleanedData.results.length === 0) {
        throw new Error('Please add at least one result');
      }

      const now = new Date().toISOString();
      const finalData = {
        ...cleanedData,
        created_at: mode === 'create' ? now : initialData?.created_at || now,
        updated_at: now,
      };

      if (mode === 'create') {
        const { data: result, error } = await supabase
          .from('cases')
          .insert([finalData])
          .select()
          .single();

        if (error) throw error;
        console.log('Created:', result);
      } else if (initialData?.id) {
        const { data: result, error } = await supabase
          .from('cases')
          .update(finalData)
          .eq('id', initialData.id)
          .select()
          .single();

        if (error) throw error;
        console.log('Updated:', result);
      }

      router.push('/admin/cases');
      router.refresh();
    } catch (error: unknown) {
      console.error('Error saving case:', error);
      const message = error instanceof Error ? error.message : 'Error saving case. Please try again.';
      alert(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!initialData?.id || !confirm('Are you sure you want to delete this case?')) return;

    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('cases')
        .delete()
        .eq('id', initialData.id);
      
      if (error) throw error;
      
      router.push('/admin/cases');
      router.refresh();
    } catch (error: unknown) {
      console.error('Error deleting case:', error);
      const message = error instanceof Error ? error.message : 'Error deleting case. Please try again.';
      alert(message);
    } finally {
      setIsLoading(false);
    }
  };

  const addResult = () => {
    setFormData(prev => ({
      ...prev,
      results: [...prev.results, '']
    }));
  };

  const removeResult = (index: number) => {
    setFormData(prev => ({
      ...prev,
      results: prev.results.filter((_, i) => i !== index)
    }));
  };

  const updateResult = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      results: prev.results.map((result, i) => i === index ? value : result)
    }));
  };

  const addTag = () => {
    setFormData(prev => ({
      ...prev,
      tags: [...prev.tags, '']
    }));
  };

  const removeTag = (index: number) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index)
    }));
  };

  const updateTag = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.map((tag, i) => i === index ? value : tag)
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            required
          />
        </div>

        <div>
          <Label htmlFor="client">Client</Label>
          <Input
            id="client"
            value={formData.client}
            onChange={(e) => setFormData(prev => ({ ...prev, client: e.target.value }))}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="industry">Industry</Label>
          <Input
            id="industry"
            value={formData.industry}
            onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
            required
          />
        </div>

        <div>
          <Label htmlFor="solution">Solution</Label>
          <Input
            id="solution"
            value={formData.solution}
            onChange={(e) => setFormData(prev => ({ ...prev, solution: e.target.value }))}
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          required
        />
      </div>

      <div>
        <Label htmlFor="image">Image URL</Label>
        <Input
          id="image"
          value={formData.image}
          onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <Label>Results</Label>
          <Button type="button" variant="outline" size="sm" onClick={addResult}>
            <Plus className="w-4 h-4 mr-2" />
            Add Result
          </Button>
        </div>
        <div className="space-y-2">
          {formData.results.map((result, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={result}
                onChange={(e) => updateResult(index, e.target.value)}
                placeholder="Enter a result"
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => removeResult(index)}
                className="shrink-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <Label>Tags</Label>
          <Button type="button" variant="outline" size="sm" onClick={addTag}>
            <Plus className="w-4 h-4 mr-2" />
            Add Tag
          </Button>
        </div>
        <div className="space-y-2">
          {formData.tags.map((tag, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={tag}
                onChange={(e) => updateTag(index, e.target.value)}
                placeholder="Enter a tag"
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => removeTag(index)}
                className="shrink-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>

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