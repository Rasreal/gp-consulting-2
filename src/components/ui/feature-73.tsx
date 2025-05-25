"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ComponentType, SVGProps } from "react";
import { IndustryCard } from "./industry-card";
import { 
  TransportIcon, 
  TelecomIcon, 
  FinanceIcon, 
  LogisticsIcon,
  ManufacturingIcon,
  EnergyIcon
} from "../icons/industry-icons";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  href: string;
}

interface Feature73Props {
  heading?: string;
  description?: string;
  linkUrl?: string;
  linkText?: string;
  features?: Feature[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const Feature73 = ({
  heading = "Отрасли",
  description = "Экспертиза в ключевых секторах экономики",
  linkUrl = "/industries",
  linkText = "Узнать больше",
  features = [
    {
      id: "feature-1",
      title: "Транспорт",
      description:
        "Оптимизация процессов и внедрение современных технологий в транспортном секторе для повышения эффективности и безопасности.",
      icon: TransportIcon,
      href: "/industries/transport",
    },
    {
      id: "feature-2",
      title: "Телеком",
      description:
        "Разработка стратегий и решений для телекоммуникационных компаний, направленных на рост и цифровую трансформацию.",
      icon: TelecomIcon,
      href: "/industries/telecom",
    },
    {
      id: "feature-3",
      title: "Финансы",
      description:
        "Внедрение инновационных технологий и аналитических решений для финансовых институтов и банков.",
      icon: FinanceIcon,
      href: "/industries/finance",
    },
    {
      id: "feature-4",
      title: "Логистика",
      description:
        "Автоматизация и оптимизация логистических процессов с использованием ИИ и передовых аналитических решений.",
      icon: LogisticsIcon,
      href: "/industries/logistics",
    },
    {
      id: "feature-5",
      title: "Производство",
      description:
        "Цифровизация производственных процессов, внедрение Industry 4.0 и оптимизация операционной деятельности.",
      icon: ManufacturingIcon,
      href: "/industries/manufacturing",
    },
    {
      id: "feature-6",
      title: "Энергетика",
      description:
        "Стратегические решения для энергетического сектора, включая оптимизацию процессов и внедрение устойчивых практик.",
      icon: EnergyIcon,
      href: "/industries/energy",
    },
  ],
}: Feature73Props) => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container max-w-[1440px] mx-auto px-6 lg:px-10">
        <header className="mb-10 lg:mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold text-gp-primary"
          >
            {heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-gp-primary/80 max-w-sm"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -5 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <Link href={linkUrl} className="inline-flex items-center gap-2 text-base font-medium text-gp-accent hover:text-gp-primary transition">
              {linkText} <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </header>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div key={feature.id} variants={itemVariants}>
              <IndustryCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                href={feature.href}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}; 