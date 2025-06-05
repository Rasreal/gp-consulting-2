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
  showImages?: boolean;
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
    image_url: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80",
    services: [],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "telecom",
    title: "Телеком",
    description: "Разработка стратегий и решений для телекоммуникационных компаний, направленных на рост и цифровую трансформацию.",
    icon: "TelecomIcon",
    image_url: "https://images.unsplash.com/photo-1594476664296-8c552205b25c?auto=format&fit=crop&w=800&q=80",
    services: [],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "finance",
    title: "Финансы",
    description: "Внедрение инновационных технологий и аналитических решений для финансовых институтов и банков.",
    icon: "FinanceIcon",
    image_url: "https://images.unsplash.com/photo-1570158268183-d296b2892211?auto=format&fit=crop&w=800&q=80",
    services: [],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "logistics",
    title: "Логистика",
    description: "Автоматизация и оптимизация логистических процессов с использованием ИИ и передовых аналитических решений.",
    icon: "LogisticsIcon",
    image_url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    services: [],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "manufacturing",
    title: "Производство",
    description: "Цифровизация производственных процессов, внедрение Industry 4.0 и оптимизация операционной деятельности.",
    icon: "ManufacturingIcon",
    image_url: "https://images.unsplash.com/photo-1624902128315-a29e56e1e6cd?auto=format&fit=crop&w=800&q=80",
    services: [],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "energy",
    title: "Энергетика",
    description: "Стратегические решения для энергетического сектора, включая оптимизацию процессов и внедрение устойчивых практик.",
    icon: "EnergyIcon",
    image_url: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=800&q=80",
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
  const [isLoading, setIsLoading] = useState(true);

  console.log("Feature73 showImages prop:", props.showImages);
  
  // Force showImages to be true if not explicitly set to false
  const shouldShowImages = props.showImages !== false;
  console.log("Should show images:", shouldShowImages);

  useEffect(() => {
    async function fetchIndustries() {
      try {
        const { data, error } = await supabase
          .from('industries')
          .select('*')
          .order('created_at', { ascending: true });
        
          console.log("data", data);
          
          // Log image_url for each item in the array with proper type casting
          data?.forEach((item: Industry) => console.log("image_url:", item.image_url));

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
      } finally {
        setIsLoading(false);
      }
    }

    fetchIndustries();
  }, []);

  // Add placeholder/skeleton when loading
  if (isLoading) {
    return (
      <section className="py-20 lg:py-28">
        <div className="container max-w-[1440px] mx-auto px-6 lg:px-10">
          <header className="mb-10 lg:mb-14">
            <div className="h-10 w-64 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-6 w-96 bg-gray-200 animate-pulse rounded mt-4"></div>
          </header>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-[340px] bg-gray-100 animate-pulse rounded-2xl"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 flex lg:py-28">
      <div className="container mx-auto px-6 lg:px-10">
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

          {props.linkText && <motion.div
            initial={{ opacity: 0, x: -5 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <Link href={props.linkUrl || ''} className="inline-flex items-center gap-2 text-base font-medium text-gp-accent hover:text-gp-primary transition">
              {props.linkText} <ArrowRight className="size-4" />
            </Link>
          </motion.div>}
          
        </header>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {features.length === 0 ? (
            <p className="col-span-full text-center text-lg text-gp-primary/70">
              Информация об отраслях временно недоступна.
            </p>
          ) : (
            features.map((feature) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap];
              console.log(`Feature: ${feature.title}, passing showImages:`, shouldShowImages);
              return (
                <motion.div key={feature.id} variants={itemVariants}>
                  <IndustryCard
                    icon={Icon || TransportIcon}
                    title={feature.title}
                    description={feature.description}
                    href={`/industries/${feature.id}`}
                    imageUrl={feature.image_url}
                    showImages={shouldShowImages}
                  />
                </motion.div>
              );
            })
          )}
        </motion.div>
      </div>
    </section>
  );
}

export { Feature73 }; 