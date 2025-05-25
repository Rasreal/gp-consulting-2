"use client"

import { services, getUniqueCategories } from '@/data/services';
import { CategoryPill } from '@/components/services/CategoryPill';
import { ServiceCard } from '@/components/services/ServiceCard';
import { ServiceModal } from '@/components/services/ServiceModal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Search } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const router = useRouter();
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const categories = ['Все', ...getUniqueCategories()];

  const filteredServices = services.filter((service) => {
    const matchesCategory =
      selectedCategory === 'Все' || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleServiceClick = (slug: string) => {
    if (isDesktop) {
      setSelectedService(slug);
    } else {
      router.push(`/services/${slug}`);
    }
  };

  return (
    <div className="container py-24">
      {/* Hero Section */}
      <section className="text-center relative overflow-hidden">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gp-light/30 to-transparent" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-semibold">Наши услуги</h1>
        <p className="mt-4 text-lg max-w-xl mx-auto text-gp-primary/80">
          От стратегии до DevOps — полный стек экспертизы GP Consulting
        </p>
        <Button className="mt-8 bg-white text-gp-primary hover:bg-white/90" size="lg">
          Запросить консультацию
        </Button>
      </section>

      {/* Filters */}
      <div className="mt-16 flex flex-col sm:flex-row gap-6 items-center justify-between">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <CategoryPill
              key={category}
              category={category}
              isActive={category === selectedCategory}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gp-primary/50" />
          <Input
            type="search"
            placeholder="Поиск услуг..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Services Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {filteredServices.map((service) => (
          <motion.div key={service.slug} variants={item}>
            <ServiceCard
              service={service}
              onClick={() => handleServiceClick(service.slug)}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          service={services.find((s) => s.slug === selectedService)!}
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
} 