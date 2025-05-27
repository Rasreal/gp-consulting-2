"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WaveBackgroundWrapper } from "@/components/ui/wave-background-wrapper";
import { FeaturesGrid } from "@/components/features-grid";
import { Feature73 } from "@/components/ui/feature-73";
import { Logos3Demo } from "@/components/blocks/logos3-demo";
import { TeamSection } from "@/components/team-section";
import { AnimatedTestimonialsDemo } from "@/components/animated-testimonials-demo";
import { motion } from "framer-motion";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <div>
      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <WaveBackgroundWrapper />
        </div>
        <div className="container relative z-10 py-16 md:py-0">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            className="max-w-[800px] mx-auto text-center"
          >
            <h1 className="text-gp-primary mb-6 animate-wave-pulse max-w-2xl mx-auto">
              Ускоряем рост вашего бизнеса с помощью ИИ и умных технологий
            </h1>
            <h2 className="text-gp-secondary/80 mb-8 max-w-xl mx-auto">
              Автоматизируем процессы и применяем AI, чтобы вы росли быстрее
            </h2>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button className="bg-white text-gp-primary hover:bg-black hover:text-white" asChild>
                <Link href="/book">Забронировать встречу</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Logos Section */}
      <Logos3Demo />
      
      {/* Solutions Section */}
      <FeaturesGrid />

      {/* Industries Section */}
      <Feature73 
        linkText="Подробнее" 
        linkUrl="/industries" 
        heading="Наши отрасли" 
        description="Мы работаем с ведущими компаниями в различных отраслях, помогая им автоматизировать процессы и растить бизнес с помощью инновационных технологий." 
        showImages={true}
      />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-semibold mb-4 text-gp-primary"
            >
              Что говорят клиенты
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gp-text-gray text-lg max-w-2xl mx-auto"
            >
              Результаты нашей работы с ведущими компаниями
            </motion.p>
          </div>
          <AnimatedTestimonialsDemo />
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
