"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageTemplateProps {
  children: React.ReactNode;
  className?: string;
}

export function PageTemplate({ children, className }: PageTemplateProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "min-h-screen w-full bg-gradient-to-b from-transparent via-transparent to-gp-light/30",
        className
      )}
    >
      {children}
    </motion.div>
  );
} 