"use client";

import { motion } from "framer-motion";
import { PageTemplate } from "@/components/ui/page-template";
import { useIndustries } from "@/hooks/use-content";
import { 
  TransportIcon, 
  TelecomIcon, 
  LogisticsIcon,
  ManufacturingIcon
} from "@/components/icons/industry-icons";
import { CTASection } from "@/components/cta-section";
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Loader2 } from 'lucide-react';

// Icon mapping
const iconMap = {
  TransportIcon,
  TelecomIcon,
  LogisticsIcon,
  ManufacturingIcon
};

interface Industry {
  id: string;
  title: string;
  description: string;
  icon: string;
  services: string[];
  created_at: string;
  updated_at: string;
}

export default function IndustriesPage() {
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchIndustries() {
      try {
        const { data, error } = await supabase
          .from('industries')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setIndustries(data || []);
      } catch (error: unknown) {
        console.error('Error fetching industries:', error);
        const message = error instanceof Error ? error.message : 'Error loading industries';
        setError(message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchIndustries();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-red-600">Error</h2>
        <p className="mt-2 text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <PageTemplate>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gp-primary">
              Отрасли
            </h1>
            <p className="text-xl text-gp-primary/80 mb-8">
              Глубокая экспертиза в ключевых секторах экономики
            </p>
            <p className="text-lg text-gp-primary/70">
              Мы понимаем специфику различных отраслей и предлагаем 
              индивидуальные решения, учитывающие особенности вашего бизнеса.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-1">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-8 hover:border-black border border-gray-200"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 glass-subtle rounded-full flex items-center justify-center mr-4">
                      {Icon && <Icon className="w-8 h-8 text-gp-primary" />}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gp-primary mb-2">
                        {industry.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gp-primary/80 mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gp-primary mb-3">
                      Ключевые решения:
                    </h4>
                    <ul className="space-y-2">
                      {industry.services.map((service, solutionIndex) => (
                        <li key={solutionIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-gp-accent rounded-full mr-3"></span>
                          <span className="text-gp-primary/70">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Не нашли свою отрасль?"
        description="Мы работаем с компаниями из различных сфер деятельности. Свяжитесь с нами, чтобы обсудить специфику вашего бизнеса."
      />
    </PageTemplate>
  );
} 