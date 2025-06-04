"use client";

import { motion } from "framer-motion";
import { PageTemplate } from "@/components/ui/page-template";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { Case } from "@/types/content";
import { Loader2 } from "lucide-react";
import { featureFlags } from "@/config/feature-flags";

// Default data as fallback
const DEFAULT_CASES: Case[] = [
  {
    id: "1",
    title: "AI-Driven Customer Service",
    client: "TechCorp International",
    industry: "Телеком",
    solution: "AI-трансформация",
    description: "Внедрение интеллектуальной системы обслуживания клиентов на базе ИИ",
    results: [
      "40% рост удовлетворенности клиентов",
      "60% сокращение времени ответа",
      "25% снижение нагрузки на операторов"
    ],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    tags: ["AI", "Customer Service", "Automation"],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "2",
    title: "Digital Transformation Strategy",
    client: "RetailGiant",
    industry: "Логистика",
    solution: "Цифровая трансформация",
    description: "Комплексная стратегия цифровой трансформации для крупной розничной сети",
    results: [
      "35% рост операционной эффективности",
      "3.2x ROI за первый год",
      "50% ускорение процессов"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    tags: ["Strategy", "Digital Transformation", "ROI"],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

export default function CasesPage() {
  const [cases, setCases] = useState<Case[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Get max cases to show from feature flag
  const maxCasesToShow = featureFlags.casesPage.maxCasesToShow;
  const tagType = featureFlags.casesPage.tagType;

  useEffect(() => {
    async function fetchCases() {
      try {
        console.log('Fetching cases...');
        const casesResponse = await supabase
          .from('cases')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(maxCasesToShow);

        if (casesResponse.error) {
          console.error('Error fetching cases:', casesResponse.error);
          setCases(DEFAULT_CASES.slice(0, maxCasesToShow));
        } else {
          setCases(
            casesResponse.data?.length 
              ? casesResponse.data.slice(0, maxCasesToShow) 
              : DEFAULT_CASES.slice(0, maxCasesToShow)
          );
        }
      } catch (error: unknown) {
        console.error('Error:', error);
        const message = error instanceof Error ? error.message : 'Error loading cases';
        setError(message);
        setCases(DEFAULT_CASES.slice(0, maxCasesToShow));
      } finally {
        setIsLoading(false);
      }
    }

    fetchCases();
  }, [maxCasesToShow]);

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
              Кейсы
            </h1>
            <p className="text-xl text-gp-primary/80 mb-8">
              Результаты, которыми мы гордимся
            </p>
            <p className="text-lg text-gp-primary/70">
              Наши проекты помогают клиентам достигать значимых результатов в бизнесе 
              через инновационные технологические решения.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cases Gallery */}
      <section>
        <div className="container">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gp-primary">Кейсы</h2>
            <p className="text-gp-primary/80 max-w-2xl mx-auto">
              Реальные проекты и достигнутые результаты
            </p>
          </motion.div> */}

          {cases.length === 0 ? (
            <div className="flex justify-center items-center min-h-[200px] bg-gray-50 p-8 rounded-lg">
              <p className="text-lg text-gp-primary/70">Контент в разработке</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cases.map((caseItem, index) => (
                <motion.div
                  key={caseItem.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card overflow-hidden border border-gray-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={caseItem.image}
                      alt={caseItem.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      {/* Only show industry tags based on feature flag */}
                      {tagType === 'industries' ? (
                        <Badge variant="outline" className="bg-white">
                          {caseItem.industry}
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="bg-white">
                          {caseItem.solution}
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gp-primary mb-2">
                      {caseItem.title}
                    </h3>
                    <p className="text-gp-primary/70 mb-4">
                      {caseItem.description}
                    </p>
                    <div>
                      <h4 className="font-medium text-gp-primary mb-2">Результаты:</h4>
                      <ul className="space-y-2">
                        {caseItem.results.map((result: string, resultIndex: number) => (
                          <li key={resultIndex} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-gp-accent rounded-full mr-2"></span>
                            <span className="text-gp-primary/70">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageTemplate>
  );
} 