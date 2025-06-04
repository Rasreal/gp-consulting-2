"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { featureFlags } from "@/config/feature-flags";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  bio: string;
  linkedin?: string;
  email?: string;
}

interface TeamSectionProps {
  heading?: string;
  description?: string;
  members?: TeamMember[];
  forceShow?: boolean;
}

const defaultMembers: TeamMember[] = [
  {
    name: "Антон Мягков",
    position: "Партнер",
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=400&h=400&q=80&fit=crop",
    bio: "10+ лет опыта в стратегии, цифровой трансформации, ИТ-аудитах и запуске новых направлений.",
    linkedin: "https://linkedin.com",
    email: "anton@gpconsulting.kz",
  },
  {
    name: "Артем Карбан",
    position: "Эксперт по цифровым продуктам",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&q=80&fit=crop",
    bio: "Опыт в разработке и масштабировании цифровых решений, управлении IT-продуктами и agile-командами.",
    linkedin: "https://linkedin.com",
    email: "artem@gpconsulting.kz",
  },
  {
    name: "Сергей Пустовит",
    position: "Бизнес-аналитик",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80&fit=crop",
    bio: "Специалист по анализу бизнес-процессов, сбору требований и оптимизации рабочих потоков.",
    linkedin: "https://linkedin.com",
    email: "sergey@gpconsulting.kz",
  },
  {
    name: "Роман Маслихов",
    position: "Эксперт по процессному управлению",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80&fit=crop",
    bio: "15+ лет в телекоме, 50+ проектов, член Ассоциации BPM.",
    linkedin: "https://linkedin.com",
    email: "roman@gpconsulting.kz",
  },
  {
    name: "Николай Хотеев",
    position: "Консультант",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&q=80&fit=crop",
    bio: "20+ лет в консалтинге и ИТ, экс-CIO, опыт внедрения корпоративных систем.",
    linkedin: "https://linkedin.com",
    email: "nikolay@gpconsulting.kz",
  },
];



export function TeamSection(props: TeamSectionProps): React.ReactNode {
  // If we're on the home page and the feature flag is disabled, don't show the section
  // If forceShow is true, always show (used for the About page)
  const isAboutPage = props.forceShow;
  const shouldShowOnHomePage = featureFlags.homePage.showTeamSection;
  const shouldShowOnAboutPage = featureFlags.aboutPage.showTeamSection;
  
  if (!isAboutPage && !shouldShowOnHomePage) {
    return null;
  }
  
  if (isAboutPage && !shouldShowOnAboutPage) {
    return null;
  }
  
  const heading = props.heading || "Наша команда";
  const description = props.description || "Эксперты с опытом работы в ведущих компаниях";
  const members = props.members || defaultMembers;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24">
      <div className="container flex flex-col gap-12 lg:px-16">
        <div className="lg:max-w-sm">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6 text-gp-primary"
          >
            {heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 text-gp-text-gray lg:text-lg"
          >
            {description}
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {members.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                y: -10,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              }}
              className="glass-card overflow-hidden"
            >
              <div className="relative h-72 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gp-primary mb-1">{member.name}</h3>
                <p className="text-accent mb-4">{member.position}</p>
                <p className="text-gp-text-gray mb-6 text-sm">{member.bio}</p>
                <div className="flex space-x-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white hover:bg-white/80 rounded-full text-gp-primary transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 bg-white hover:bg-white/80 rounded-full text-gp-primary transition-colors"
                    >
                      <Mail size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 