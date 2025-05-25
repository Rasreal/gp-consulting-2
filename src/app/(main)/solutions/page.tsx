"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { motion } from "framer-motion";
import { useSolutions } from '@/hooks/use-content';
import { Solution } from "@/types/content";
import { RefreshCw } from "lucide-react";

const approachSteps = [
  {
    number: 1,
    title: "Анализ",
    description: "Изучаем текущую ситуацию, проблемы и возможности"
  },
  {
    number: 2,
    title: "Стратегия",
    description: "Разрабатываем детальный план действий и метрики успеха"
  },
  {
    number: 3,
    title: "Реализация",
    description: "Внедряем решения и постоянно отслеживаем результаты"
  }
];

export default function SolutionsPage() {
  const { data: solutions, isLoading, refetch } = useSolutions();

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-primary">
                Наши решения
              </h1>
              <Button
                variant="outline"
                size="icon"
                onClick={() => refetch()}
                className={`${isLoading ? 'animate-spin' : ''}`}
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xl text-secondary mb-8">
              Комплексный подход к росту вашего бизнеса
            </p>
            <p className="text-lg text-muted-foreground">
              Мы предлагаем широкий спектр услуг, от стратегического планирования до 
              внедрения AI-решений. Наш опыт позволяет находить оптимальные решения 
              для любых бизнес-задач.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-1">
        <div className="container mx-auto px-4">
          {isLoading ? (
            // Loading skeleton
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 h-48 rounded-lg"></div>
                </div>
              ))}
            </div>
          ) : solutions && solutions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((solution) => (
                <Dialog key={solution.id}>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer hover:border-black hover:shadow-md hover:scale-[1.02] transition-all glass-card">
                      <CardContent className="pt-6 px-6 pb-4 flex flex-col h-full">
                        <h3 className="text-xl font-semibold text-primary mb-3">
                          {solution.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {solution.description}
                        </p>
                        <div className="mt-auto">
                          <Button variant="outline" className="w-full bg-white text-gp-primary hover:bg-black hover:text-white">
                            Подробнее
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{solution.title}</DialogTitle>
                      <DialogDescription className="text-lg pt-2">
                        {solution.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <h4 className="font-medium text-primary mb-3">Услуги:</h4>
                      <ul className="space-y-2">
                        {solution.services.map((service, index) => (
                          <li key={index} className="flex items-center">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-end">
                      <Button className="bg-white text-gp-primary hover:bg-black hover:text-white" asChild>
                        <Link href="/book">Забронировать встречу</Link>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">Нет доступных решений</p>
            </div>
          )}
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Наш подход
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы работаем по методологии, которая гарантирует результаты
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {approachSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: index * 0.01 }}
                className="glass-card p-8 border border-gray-200 hover:border-black transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gp-primary mb-3">{step.title}</h3>
                <p className="text-gp-primary/70">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Готовы начать трансформацию?"
        description="Свяжитесь с нами сегодня, чтобы обсудить, как мы можем помочь вашему бизнесу расти и развиваться с помощью инновационных технологий."
      />
    </div>
  );
} 