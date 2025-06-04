"use client";

import { motion } from "framer-motion";
import { PageTemplate } from "@/components/ui/page-template";
import { TeamSection } from "@/components/team-section";
import { featureFlags } from "@/config/feature-flags";

// Values data
const values = [
  {
    title: "Практичность",
    description: "Мы предлагаем только практически применимые решения, которые приносят реальную пользу вашему бизнесу"
  },
  {
    title: "Независимость",
    description: "Мы даем объективные рекомендации, не связанные с продажей конкретных продуктов или технологий"
  },
  {
    title: "Доступность",
    description: "Наши услуги доступны для компаний любого размера благодаря оптимальному соотношению цены и качества"
  },
  {
    title: "Опыт",
    description: "Наши консультанты имеют богатый опыт работы в реальном бизнесе, а не только теоретические знания"
  },
];

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-10">
              Мы помогаем бизнесу расти с помощью технологий
            </h1>
            <p className="text-xl text-gp-primary/80 mb-8">
              GP Consulting — команда экспертов в области цифровой трансформации,
              аналитики и искусственного интеллекта. Мы создаем инновационные
              решения, которые помогают бизнесу достигать новых высот.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section - Uses the TeamSection component with forceShow prop */}
      {featureFlags.aboutPage.showTeamSection && (
        <TeamSection 
          heading="Наша команда" 
          description="Эксперты с опытом работы в ведущих компаниях"
          forceShow={true}
        />
      )}

      {/* Values Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 "
          >
            <h2 className="text-3xl font-bold mb-4">Наши ценности</h2>
            <p className="text-gp-primary/80 max-w-2xl mx-auto">
              Принципы, которыми мы руководствуемся в работе с каждым клиентом
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 border border-gray-300"
              >
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gp-primary/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTemplate>
  );
} 