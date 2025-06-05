"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[45rem] w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-3xl mx-auto p-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.7, 
            ease: [0.34, 1.56, 0.64, 1]
          }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl text-gp-primary text-center font-sans font-bold mb-8 leading-tight max-w-2xl mx-auto"
        >
          Готовы начать трансформацию?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gp-primary/80 max-w-lg mx-auto my-8 text-sm md:text-lg text-center leading-relaxed"
        >
          Свяжитесь с нами сегодня, чтобы обсудить, как мы можем помочь вашему бизнесу
          расти и развиваться с помощью инновационных технологий и искусственного интеллекта.
        </motion.p>
        
        <div className="flex justify-center mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button className="bg-white text-gp-primary hover:bg-black hover:text-white" asChild>
              <Link href="/book">Связаться с нами</Link>
            </Button>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute inset-0 opacity-[0.03]">
        <BackgroundBeams />
      </div>
    </div>
  );
} 