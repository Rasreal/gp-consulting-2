"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({
  title = "Готовы начать трансформацию?",
  description = "Свяжитесь с нами сегодня, чтобы обсудить, как мы можем помочь вашему бизнесу расти и развиваться с помощью инновационных технологий.",
}: CTASectionProps) {
  return (
    <section className="py-20">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto p-8"
        >
          <h2 className="text-3xl font-bold mb-4 text-gp-primary">
            {title}
          </h2>
          <p className="text-gp-primary/80 mb-8">
            {description}
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <Link 
              href="/book"
              className="bg-white text-gp-primary hover:bg-black hover:text-white px-8 py-4 rounded-full font-medium shadow-lg inline-block"
            >
              Забронировать встречу
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 