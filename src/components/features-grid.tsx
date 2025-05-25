"use client";

import { Zap, Cpu, Fingerprint, Pencil, Settings2, Sparkles } from "lucide-react";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import { motion } from "framer-motion";

const features = [
  {
    title: "Стратегия",
    icon: Zap,
    description: "Разрабатываем стратегии роста и трансформации",
  },
  {
    title: "Анализ",
    icon: Cpu,
    description: "Превращаем данные в инсайты для решений",
  },
  {
    title: "Продукты",
    icon: Fingerprint,
    description: "Создаем продукты, решающие бизнес-задачи",
  },
  {
    title: "AI и автоматизация",
    icon: Pencil,
    description: "Внедряем ИИ и автоматизируем процессы",
  },
  {
    title: "Маркетинг",
    icon: Settings2,
    description: "Помогаем привлекать и удерживать клиентов",
  },
  {
    title: "IT и цифровизация",
    icon: Sparkles,
    description: "Внедряем и оптимизируем IT-системы",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export function FeaturesGrid() {
  return (
    <section className="py-20 md:py-32">
      <div className="container flex flex-col gap-12 lg:px-16">
        <div className="lg:max-w-sm">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6 text-gp-primary"
          >
            Наши решения
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 text-gp-text-gray lg:text-lg"
          >
            Помогаем компаниям расти через данные, процессы и инновационные технологии
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 divide-x divide-y divide-dashed glass-card sm:grid-cols-2 md:grid-cols-3"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                zIndex: 1
              }}
              transition={{ duration: 0.2 }}
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 