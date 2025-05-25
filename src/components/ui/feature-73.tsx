"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IndustryCard } from "./industry-card";
import { supabase } from "@/lib/supabase";
import { Industry } from "@/types/content";
import { 
  TransportIcon, 
  TelecomIcon, 
  FinanceIcon, 
  LogisticsIcon,
  ManufacturingIcon,
  EnergyIcon
} from "../icons/industry-icons";

interface Feature73Props {
  heading?: string;
  description?: string;
  linkUrl?: string;
  linkText?: string;
}

// Icon mapping
const iconMap = {
  TransportIcon,
  TelecomIcon,
  FinanceIcon,
  LogisticsIcon,
  ManufacturingIcon,
  EnergyIcon
};

// Default data as fallback
const DEFAULT_FEATURES: Industry[] = [
  {
    id: "transport",
    title: "Транспорт",
    description: "Оптимизация процессов и внедрение современных технологий в транспортном секторе для повышения эффективности и безопасности.",
    icon: "TransportIcon",
    services: [],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "telecom",
    title: "Телеком",
    description: "Разработка стратегий и решений для телекоммуникационных компаний, направленных на рост и цифровую трансформацию.",
    icon: "TelecomIcon",
    services: [],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "finance",
    title: "Финансы",
    description: "Внедрение инновационных технологий и аналитических решений для финансовых институтов и банков.",
    icon: "FinanceIcon",
    services: [],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "logistics",
    title: "Логистика",
    description: "Автоматизация и оптимизация логистических процессов с использованием ИИ и передовых аналитических решений.",
    icon: "LogisticsIcon",
    services: [],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "manufacturing",
    title: "Производство",
    description: "Цифровизация производственных процессов, внедрение Industry 4.0 и оптимизация операционной деятельности.",
    icon: "ManufacturingIcon",
    services: [],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "energy",
    title: "Энергетика",
    description: "Стратегические решения для энергетического сектора, включая оптимизацию процессов и внедрение устойчивых практик.",
    icon: "EnergyIcon",
    services: [],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

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

function Feature73({
  ...props
}: Feature73Props) {
  const [features, setFeatures] = useState<Industry[]>(DEFAULT_FEATURES);

  useEffect(() => {
    async function fetchIndustries() {
      try {
        const { data, error } = await supabase
          .from('industries')
          .select('*')
          .order('created_at', { ascending: true });

        if (error) {
          console.error('Error fetching industries:', error);
          setFeatures(DEFAULT_FEATURES);
          return;
        }

        if (!data || data.length === 0) {
          console.log('No industries found, using default data');
          setFeatures(DEFAULT_FEATURES);
          return;
        }

        setFeatures(data);
      } catch (error) {
        console.error('Error:', error);
        setFeatures(DEFAULT_FEATURES);
      }
    }

    fetchIndustries();
  }, []);

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
            {props.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-gp-primary/80 max-w-sm"
          >
            {props.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -5 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <Link href={props.linkUrl || ''} className="inline-flex items-center gap-2 text-base font-medium text-gp-accent hover:text-gp-primary transition">
              {props.linkText} <ArrowRight className="size-4" />
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
          {features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div key={feature.id} variants={itemVariants}>
                <IndustryCard
                  icon={Icon || TransportIcon}
                  title={feature.title}
                  description={feature.description}
                  href={`/industries/${feature.id}`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export { Feature73 }; 