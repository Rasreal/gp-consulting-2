"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

interface Testimonial {
  id: string;
  content: string;
  author: string;
  position: string;
  company: string;
  image?: string;
  rating?: number;
}

interface TestimonialSectionProps {
  heading?: string;
  description?: string;
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: "1",
    content: "GP Consulting помогли нам оптимизировать логистические процессы и снизить затраты на 25%. Рекомендую их как надежного партнера в цифровой трансформации.",
    author: "Алексей Петров",
    position: "CEO",
    company: "LogiTech",
    image: "/testimonials/person1.jpg",
    rating: 5,
  },
  {
    id: "2",
    content: "Внедрение AI-решений с GP Consulting позволило нам автоматизировать обработку данных и увеличить точность прогнозов до 95%. Отличная работа!",
    author: "Мария Козлова",
    position: "CTO",
    company: "FinTech Solutions",
    image: "/testimonials/person2.jpg",
    rating: 5,
  },
  {
    id: "3",
    content: "Благодаря рекомендациям GP Consulting мы смогли улучшить клиентский опыт и увеличить конверсию на 35%. Профессиональный подход и глубокое понимание бизнеса.",
    author: "Нурлан Сатпаев",
    position: "CMO",
    company: "VEON",
    image: "/testimonials/person3.jpg",
    rating: 5,
  },
];

export function TestimonialSection(props: TestimonialSectionProps): React.ReactNode {
  const heading = props.heading || "Что говорят клиенты";
  const description = props.description || "Результаты нашей работы с ведущими компаниями";
  const testimonials = props.testimonials || defaultTestimonials;

  return (
    <section className="py-24 bg-gradient-to-b from-white to-light">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white rounded-xl p-8 shadow-md border border-gp-border"
            >
              {testimonial.rating && (
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < testimonial.rating! ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              )}
              
              <p className="text-gp-text-gray mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
              
              <div className="flex items-center">
                {testimonial.image && (
                  <div className="mr-4 relative w-12 h-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                )}
                <div>
                  <h4 className="font-semibold text-gp-primary">{testimonial.author}</h4>
                  <p className="text-sm text-gp-text-gray">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 