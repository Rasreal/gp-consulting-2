"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, Heart, Lightbulb, Target, Mail, Linkedin } from "lucide-react";
import { PageTemplate } from "@/components/ui/page-template";

const values = [
  {
    icon: Users,
    title: "Команда",
    description: "Мы ценим каждого участника команды и создаем среду для профессионального роста"
  },
  {
    icon: Heart,
    title: "Забота",
    description: "Поддерживаем баланс работы и жизни, заботимся о благополучии сотрудников"
  },
  {
    icon: Lightbulb,
    title: "Инновации",
    description: "Поощряем креативность и новые идеи, внедряем передовые технологии"
  },
  {
    icon: Target,
    title: "Результат",
    description: "Стремимся к достижению амбициозных целей и созданию ценности для клиентов"
  }
];

export default function CareerPage() {
  return (
    <PageTemplate>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Icon/Graphic */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="relative mx-auto w-32 h-32 mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-gp-accent/20 to-gp-primary/20 rounded-full blur-xl"></div>
                <div className="relative glass-card w-full h-full rounded-full flex items-center justify-center">
                  <Users className="w-16 h-16 text-gp-primary" />
                </div>
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gp-primary">
              Карьера в GP Consulting
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-8 md:p-12 max-w-3xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gp-primary">
                Благодарим за интерес к работе в нашей команде
              </h2>
              <p className="text-lg text-gp-primary/80 mb-8 leading-relaxed">
                В настоящее время свободных вакансий нет, но мы всегда рады познакомиться 
                с талантливыми специалистами. Оставьте свои контакты, и мы обязательно 
                свяжемся с вами при появлении подходящих возможностей.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-gp-primary hover:bg-white/90"
                  size="lg"
                  asChild
                >
                  <Link href="mailto:hr@gpconsulting.kz">
                    <Mail className="w-5 h-5 mr-2" />
                    Отправить резюме
                  </Link>
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white text-gp-primary hover:bg-white/90"
                  size="lg"
                  asChild
                >
                  <Link href="https://linkedin.com/company/gpconsulting" target="_blank">
                    <Linkedin className="w-5 h-5 mr-2" />
                    Следить в LinkedIn
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gp-primary">Наши ценности</h2>
            <p className="text-gp-primary/80 max-w-2xl mx-auto">
              Принципы, которые объединяют нашу команду и определяют нашу корпоративную культуру
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 glass-subtle rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-gp-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gp-primary">{value.title}</h3>
                <p className="text-gp-primary/70 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 text-gp-primary">Почему GP Consulting?</h2>
              <p className="text-gp-primary/80">
                Мы создаем среду, где каждый может реализовать свой потенциал
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Профессиональный рост",
                  description: "Возможности для развития навыков, обучения новым технологиям и карьерного продвижения"
                },
                {
                  title: "Интересные проекты",
                  description: "Работа с ведущими компаниями над инновационными решениями в области ИИ и цифровизации"
                },
                {
                  title: "Гибкий график",
                  description: "Возможность удаленной работы и гибкого планирования рабочего времени"
                },
                {
                  title: "Конкурентная оплата",
                  description: "Достойная заработная плата и система бонусов за достижение результатов"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6"
                >
                  <h3 className="text-xl font-semibold mb-3 text-gp-primary">{benefit.title}</h3>
                  <p className="text-gp-primary/70">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto glass-card p-8"
          >
            <h2 className="text-3xl font-bold mb-4 text-gp-primary">
              Хотите присоединиться к нашей команде?
            </h2>
            <p className="text-gp-primary/80 mb-8">
              Отправьте нам свое резюме, и мы обязательно рассмотрим вашу кандидатуру 
              при появлении подходящих вакансий.
            </p>
            <Button 
              className="bg-white text-gp-primary hover:bg-white/90"
              size="lg"
              asChild
            >
              <Link href="mailto:hr@gpconsulting.kz">
                Связаться с HR
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageTemplate>
  );
} 