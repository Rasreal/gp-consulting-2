"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { PageTemplate } from "@/components/ui/page-template";

const teamMembers = [
  {
    name: "Александр Петров",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=400&h=400&q=80&fit=crop",
    bio: "15+ лет опыта в цифровой трансформации и управлении проектами",
  },
  {
    name: "Елена Смирнова",
    role: "Head of AI & Analytics",
    image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=400&h=400&q=80&fit=crop",
    bio: "PhD в машинном обучении, опыт в IBM и Google",
  },
  {
    name: "Михаил Козлов",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80&fit=crop",
    bio: "Архитектор облачных решений, эксперт DevOps",
  },
  {
    name: "Анна Иванова",
    role: "Head of Strategy",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&q=80&fit=crop",
    bio: "Консультант по стратегии с опытом в Big 4",
  },
];

const stats = [
  { value: "50+", label: "Успешных проектов" },
  { value: "95%", label: "Довольных клиентов" },
  { value: "30+", label: "Экспертов в команде" },
  { value: "5", label: "Лет на рынке" },
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
            <Button className="bg-white text-gp-primary hover:bg-black hover:text-white" asChild>
              <Link href="/book">Забронировать встречу</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="text-4xl font-bold text-gp-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-gp-primary/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Наша команда</h2>
            <p className="text-gp-primary/80 max-w-2xl mx-auto">
              Мы объединяем опытных специалистов из разных областей, чтобы
              предоставлять нашим клиентам комплексные решения мирового уровня.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6"
              >
                <div className="relative h-64 mb-4 overflow-hidden rounded-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="bg-white p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <div className="text-gp-accent mb-2">{member.role}</div>
                  <p className="text-gp-primary/70">{member.bio}</p>
                </div>
                
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {[
              {
                title: "Инновации",
                description:
                  "Мы постоянно следим за новыми технологиями и внедряем лучшие решения",
              },
              {
                title: "Качество",
                description:
                  "Каждый проект выполняется с максимальным вниманием к деталям",
              },
              {
                title: "Результат",
                description:
                  "Мы фокусируемся на достижении измеримых бизнес-результатов",
              },
            ].map((value, index) => (
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