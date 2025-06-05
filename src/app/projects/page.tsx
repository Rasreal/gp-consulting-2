"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PageTemplate } from "@/components/ui/page-template";
import { CTASection } from "@/components/cta-section";

const projects = [
  {
    title: "AI-Driven Customer Service",
    client: "TechCorp International",
    description:
      "Внедрение интеллектуальной системы обслуживания клиентов на базе ИИ, что привело к увеличению удовлетворенности клиентов на 40% и сокращению времени ответа на 60%.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
    tags: ["AI", "Machine Learning", "Customer Service"],
    metrics: [
      { label: "Рост удовлетворенности", value: "+40%" },
      { label: "Сокращение времени ответа", value: "-60%" },
    ],
  },
  {
    title: "Digital Transformation Strategy",
    client: "RetailGiant",
    description:
      "Разработка и реализация стратегии цифровой трансформации для крупной розничной сети, включая автоматизацию операций и внедрение предиктивной аналитики.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    tags: ["Strategy", "Digital Transformation", "Analytics"],
    metrics: [
      { label: "Рост операционной эффективности", value: "+35%" },
      { label: "ROI", value: "3.2x" },
    ],
  },
  {
    title: "Cloud Infrastructure Optimization",
    client: "FinTech Solutions",
    description:
      "Оптимизация облачной инфраструктуры и внедрение практик FinOps, что привело к значительному сокращению расходов на облачные сервисы.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    tags: ["Cloud", "FinOps", "DevOps"],
    metrics: [
      { label: "Сокращение затрат", value: "-45%" },
      { label: "Улучшение производительности", value: "+50%" },
    ],
  },
  {
    title: "Supply Chain Analytics",
    client: "LogisticsPro",
    description:
      "Разработка системы аналитики цепочки поставок с использованием машинного обучения для оптимизации маршрутов и прогнозирования спроса.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
    tags: ["Analytics", "ML", "Supply Chain"],
    metrics: [
      { label: "Оптимизация маршрутов", value: "+25%" },
      { label: "Точность прогнозов", value: "94%" },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <PageTemplate>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Наши проекты
            </h1>
            <p className="text-xl text-gp-primary/80 mb-8">
              Изучите наши кейсы и узнайте, как мы помогаем бизнесу
              достигать впечатляющих результатов с помощью инновационных решений.
            </p>
            <Button className="bg-white text-gp-primary hover:bg-black hover:text-white" asChild>
              <Link href="/book">Связаться с нами</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group glass-card p-6"
              >
                <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <div className="text-gp-accent mb-4">{project.client}</div>
                <p className="text-gp-primary/70 mb-6">{project.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  {project.metrics.map((metric, metricIndex) => (
                    <div
                      key={metricIndex}
                      className="glass-subtle p-4 rounded-lg"
                    >
                      <div className="text-gp-primary/70 text-sm">
                        {metric.label}
                      </div>
                      <div className="font-semibold text-lg">{metric.value}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Готовы начать свой проект?"
        description="Свяжитесь с нами, чтобы обсудить, как мы можем помочь вашему бизнесу достичь новых высот с помощью инновационных технологий."
      />
    </PageTemplate>
  );
} 