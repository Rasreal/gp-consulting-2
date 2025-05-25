"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  logos?: Logo[];
  className?: string;
}

export const Logos3 = ({
  logos = [
    {
      id: "logo-1",
      description: "QazCode",
      image: "/logos/qazcode.jpg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "VEON",
      image: "/logos/veon.png",
      className: "h-7 w-auto",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="py-16">
      <div className="container flex flex-col items-center text-center">
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-gp-primary/60 mb-6 tracking-wide uppercase"
        >
          Нам доверяют
        </motion.h3>
        
        <div className="flex flex-wrap justify-center gap-8 mt-4">
          {logos.map((logo) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-dark p-6 relative h-20 w-48 flex items-center justify-center"
            >
              <Image
                src={logo.image}
                alt={logo.description}
                fill
                className="object-contain filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 p-4"
                aria-label={`${logo.description} logo`}
                unoptimized
              />
            </motion.div>
          ))}
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gp-text-gray mt-8 text-sm max-w-lg"
        >
          Наши эксперты помогли компаниям оптимизировать бизнес-процессы и внедрить передовые решения
        </motion.p>
      </div>
    </section>
  );
}; 