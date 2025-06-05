"use client";

import { Award, Briefcase, Users, BadgeDollarSign } from "lucide-react";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import { motion } from "framer-motion";

const features = [
  {
    title: "Практическая ценность рекомендаций",
    icon: Award,
    description: "Мы предлагаем только практически применимые решения, которые приносят реальную пользу вашему бизнесу",
  },
  {
    title: "Опыт в реальном секторе",
    icon: Briefcase,
    description: "Наши консультанты имеют богатый опыт работы в реальном бизнесе, а не только теоретические знания",
  },
  {
    title: "Доступ к экспертизе",
    icon: Users,
    description: "Мы привлекаем узкопрофильных экспертов с глубокими знаниями в своих областях",
  },
  {
    title: "Умеренная цена",
    icon: BadgeDollarSign,
    description: "Мы предлагаем оптимальное соотношение цены и качества для наших услуг",
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
    <section className="py-10 md:py-32">
      <div className="container flex flex-col gap-12 lg:px-16">
        <div className="lg:max-w-sm">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6 text-gp-primary"
          >
            Наши преимущества
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 text-gp-text-gray lg:text-lg"
          >
            Почему клиенты выбирают нас для решения своих бизнес-задач
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 divide-x divide-y divide-dashed glass-card sm:grid-cols-2"
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