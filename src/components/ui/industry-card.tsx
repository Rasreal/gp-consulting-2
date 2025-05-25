"use client";

import { FC, ComponentType, SVGProps } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface IndustryCardProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  href: string;
}

export const IndustryCard: FC<IndustryCardProps> = ({
  icon: Icon,
  title,
  description,
  href,
}) => {
  return (
    <motion.div
      whileHover={{ 
        y: -4, 
        boxShadow: "0 14px 28px rgba(0,0,0,0.08)",
      }}
      transition={{ duration: 0.05 }}
      className="group flex flex-col min-h-[340px] shadow-lg rounded-2xl overflow-hidden glass-card hover:ring-gp-accent/30 transition hover:border-black"
    >
      <Link href={href} className="flex flex-col h-full">
        <div className="flex items-center justify-center bg-gp-light/60 py-14">
          <Icon className="size-24 text-gp-primary group-hover:text-gp-accent transition-colors" aria-hidden="true" />
        </div>
        <div className="p-6 flex-grow">
          <h3 className="text-lg font-semibold mb-2 text-gp-primary">{title}</h3>
          <p className="text-sm leading-relaxed text-gp-primary/80 line-clamp-3">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}; 