'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Case } from '@/types/content';
import { 
  Loader2, 
  Plus, 
  Pencil, 
  Trash2, 
  XCircle 
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from 'sonner';

export default function CasesAdminPage() {
  const [cases, setCases] = useState<Case[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentCase, setCurrentCase] = useState<Case | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    client: '',
    industry: '',
    solution: '',
    description: '',
    results: [''],
    image: '',
    tags: ['']
  });
  
  const router = useRouter();

  useEffect(() => {
    fetchCases();

    // Subscribe to changes
    const channel = supabase
      .channel('cases_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'cases',
        },
        () => {
          console.log('Cases table changed, refreshing data...');
          fetchCases();
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);

  async function fetchCases() {
    try {
      setIsLoading(true);
      const { data: casesData, error: fetchError } = await supabase
        .from('cases')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;

      setCases(casesData || []);
      setError(null);
    } catch (error: unknown) {
      console.error('Error fetching cases:', error);
      const message = error instanceof Error ? error.message : 'Error loading cases';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }

  const handleCreate = async () => {
    try {
      const { data, error } = await supabase
        .from('cases')
        .insert([{
          ...formData,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }])
        .select()
        .single();

      if (error) throw error;

      toast.success('Case created successfully');
      setIsDialogOpen(false);
      resetForm();
      await fetchCases();
    } catch (error: any) {
      console.error('Error creating case:', error);
      toast.error(error.message);
    }
  };

  const handleUpdate = async () => {
    if (!currentCase?.id) return;

    try {
      const { error } = await supabase
        .from('cases')
        .update({
          ...formData,
          updated_at: new Date().toISOString()
        })
        .eq('id', currentCase.id);

      if (error) throw error;

      toast.success('Case updated successfully');
      setIsDialogOpen(false);
      setCurrentCase(null);
      resetForm();
      await fetchCases();
    } catch (error: any) {
      console.error('Error updating case:', error);
      toast.error(error.message);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this case?')) return;

    try {
      const { error: deleteError } = await supabase
        .from('cases')
        .delete()
        .eq('id', id);

      if (deleteError) throw deleteError;
    } catch (error: unknown) {
      console.error('Error deleting case:', error);
      const message = error instanceof Error ? error.message : 'Error deleting case';
      alert(message);
    }
  };

  const openEditDialog = (caseItem: Case) => {
    setCurrentCase(caseItem);
    setFormData({
      title: caseItem.title,
      client: caseItem.client,
      industry: caseItem.industry,
      solution: caseItem.solution,
      description: caseItem.description,
      results: caseItem.results,
      image: caseItem.image,
      tags: caseItem.tags
    });
    setIsDialogOpen(true);
  };

  const openCreateDialog = () => {
    setCurrentCase(null);
    resetForm();
    setIsDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      client: '',
      industry: '',
      solution: '',
      description: '',
      results: [''],
      image: '',
      tags: ['']
    });
  };

  const handleResultChange = (index: number, value: string) => {
    const newResults = [...formData.results];
    newResults[index] = value;
    setFormData(prev => ({ ...prev, results: newResults }));
  };

  const handleTagChange = (index: number, value: string) => {
    const newTags = [...formData.tags];
    newTags[index] = value;
    setFormData(prev => ({ ...prev, tags: newTags }));
  };

  const addResult = () => {
    setFormData(prev => ({ ...prev, results: [...prev.results, ''] }));
  };

  const addTag = () => {
    setFormData(prev => ({ ...prev, tags: [...prev.tags, ''] }));
  };

  const removeResult = (index: number) => {
    setFormData(prev => ({
      ...prev,
      results: prev.results.filter((_, i) => i !== index)
    }));
  };

  const removeTag = (index: number) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index)
    }));
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
        <Button onClick={fetchCases}>Try Again</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Cases</h1>
        <Button onClick={openCreateDialog}>
          <Plus className="w-4 h-4 mr-2" />
          Add Case
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cases.map((caseItem) => (
          <div
            key={caseItem.id}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">{caseItem.title}</h3>
                <p className="text-lg text-gray-700">{caseItem.client}</p>
                <div className="flex gap-2 mt-2">
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded">{caseItem.industry}</span>
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded">{caseItem.solution}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => openEditDialog(caseItem)}
                >
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleDelete(caseItem.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{caseItem.description}</p>
            <div className="space-y-2">
              <h4 className="font-medium">Results:</h4>
              <ul className="list-disc list-inside">
                {caseItem.results.map((result, index) => (
                  <li key={index} className="text-gray-600">{result}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {caseItem.tags.map((tag, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {currentCase ? 'Edit Case' : 'Create Case'}
            </DialogTitle>
            <DialogDescription>
              Fill in the details below to {currentCase ? 'update' : 'create'} a case.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4 max-h-[60vh] overflow-y-auto">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Case title"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="client">Client</Label>
                <Input
                  id="client"
                  placeholder="Client name"
                  value={formData.client}
                  onChange={(e) => setFormData(prev => ({ ...prev, client: e.target.value }))}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Input
                  id="industry"
                  placeholder="e.g., Telecom"
                  value={formData.industry}
                  onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="solution">Solution</Label>
                <Input
                  id="solution"
                  placeholder="e.g., AI Transformation"
                  value={formData.solution}
                  onChange={(e) => setFormData(prev => ({ ...prev, solution: e.target.value }))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                placeholder="https://example.com/image.jpg"
                value={formData.image}
                onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Enter case description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label>Results</Label>
              {formData.results.map((result, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    placeholder="Enter result"
                    value={result}
                    onChange={(e) => handleResultChange(index, e.target.value)}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => removeResult(index)}
                  >
                    <XCircle className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={addResult}
                className="w-full"
              >
                Add Result
              </Button>
            </div>

            <div className="space-y-2">
              <Label>Tags</Label>
              {formData.tags.map((tag, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    placeholder="Enter tag"
                    value={tag}
                    onChange={(e) => handleTagChange(index, e.target.value)}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => removeTag(index)}
                  >
                    <XCircle className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={addTag}
                className="w-full"
              >
                Add Tag
              </Button>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={currentCase ? handleUpdate : handleCreate}>
              {currentCase ? 'Update' : 'Create'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
} 