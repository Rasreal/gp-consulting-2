"use client";

import { motion } from "framer-motion";
import { PageTemplate } from "@/components/ui/page-template";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { AnimatedTestimonialsDemo } from "@/components/animated-testimonials-demo";

const metrics = [
  { value: "> 25", label: "AI-моделей", description: "Внедрено в производство" },
  { value: "−30%", label: "OPEX", description: "Сокращение операционных расходов" },
  { value: "+18 pp", label: "LTV", description: "Увеличение жизненной ценности клиента" },
  { value: "95%", label: "Точность", description: "Прогнозных моделей" }
];

const cases = [
  {
    id: 1,
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
    tags: ["AI", "Customer Service", "Automation"]
  },
  {
    id: 2,
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
    tags: ["Strategy", "Digital Transformation", "ROI"]
  },
  {
    id: 3,
    title: "Supply Chain Analytics",
    client: "LogisticsPro",
    industry: "Логистика",
    solution: "Аналитика данных",
    description: "Система аналитики цепочки поставок с машинным обучением",
    results: [
      "25% оптимизация маршрутов",
      "94% точность прогнозов",
      "30% сокращение времени доставки"
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    tags: ["Analytics", "ML", "Supply Chain"]
  },
  {
    id: 4,
    title: "Cloud Infrastructure Optimization",
    client: "FinTech Solutions",
    industry: "Финансы",
    solution: "Cloud & DevOps",
    description: "Оптимизация облачной инфраструктуры и внедрение FinOps практик",
    results: [
      "45% сокращение затрат на облако",
      "50% улучшение производительности",
      "99.9% uptime достигнут"
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    tags: ["Cloud", "FinOps", "DevOps"]
  }
];

const clientLogos = [
  { name: "QazCode", logo: "/logos/qazcode.svg" },
  { name: "Таттелеком", logo: "/logos/tattelekom.png" },
  { name: "Почта России", logo: "/logos/pochtarosii.png" },
  { name: "Билайн", logo: "/logos/beeling.png" }
];

export default function AchievementsPage() {
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
              Достижения
            </h1>
            <p className="text-xl text-gp-primary/80 mb-8">
              Результаты, которыми мы гордимся
            </p>
            <p className="text-lg text-gp-primary/70">
              Наши кейсы и отзывы клиентов демонстрируют реальную ценность, 
              которую мы создаем для бизнеса наших партнеров.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-sm font-medium text-gp-primary/60 mb-6 tracking-wide uppercase">
              Нам доверяют
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {clientLogos.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ 
                    delay: index * 0.15,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="glass-dark p-4 relative h-16 w-32 flex items-center justify-center"
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300 p-2"
                    unoptimized
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Counters */}
      <section className="py-20 ">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-center glass-card p-6 border border-gray-500"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    delay: index * 0.1 + 0.3, 
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-4xl font-bold text-gp-accent mb-2 border-grey-500"
                >
                  {metric.value}
                </motion.div>
                <div className="text-lg font-semibold text-gp-primary mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-gp-primary/70">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Gallery */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gp-primary">Кейсы</h2>
            <p className="text-gp-primary/80 max-w-2xl mx-auto">
              Реальные проекты и достигнутые результаты
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((caseItem, index) => (
              <motion.div
                key={caseItem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-card overflow-hidden border-b border-l border-r border-gray-500"

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
                  <div className="flex gap-2 mb-4">
                    {caseItem.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-gp-primary">
                    {caseItem.title}
                  </h3>
                  
                  <div className="flex gap-4 mb-4 text-sm">
                    <span className="text-gp-accent">{caseItem.client}</span>
                    <span className="text-gp-primary/60">•</span>
                    <span className="text-gp-primary/60">{caseItem.industry}</span>
                  </div>

                  <p className="text-gp-primary/80 mb-6">
                    {caseItem.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gp-primary mb-3">
                      Результаты:
                    </h4>
                    <ul className="space-y-2">
                      {caseItem.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-gp-accent rounded-full mr-3"></span>
                          <span className="text-gp-primary/70 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative z-0">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gp-primary">
              Отзывы клиентов
            </h2>
            <p className="text-gp-primary/80 max-w-2xl mx-auto">
              Что говорят о нашей работе руководители компаний
            </p>
          </motion.div>
          <AnimatedTestimonialsDemo />
        </div>
      </section>
    </PageTemplate>
  );
} 