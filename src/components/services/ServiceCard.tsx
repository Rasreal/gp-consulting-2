import { Service } from '@/types/service';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Brain,
  Code2,
  Coins,
  Target,
  Workflow,
} from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  onClick?: () => void;
}

const iconMap = {
  Target,
  Workflow,
  BarChart3,
  Brain,
  Code2,
  Coins,
};

export const ServiceCard = ({ service, onClick }: ServiceCardProps) => {
  const Icon = iconMap[service.icon as keyof typeof iconMap] || Target;

  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -4 }}
      className="group flex glass-card flex-col h-[320px] overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="flex-1 flex items-center justify-center bg-gp-light/60 p-8">
        <Icon className="size-24 text-gp-primary group-hover:text-gp-accent transition-colors" />
      </div>
      <div className="p-6 h-[140px]">
        <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
        <p className="text-sm leading-relaxed line-clamp-3 text-gp-primary/80">
          {service.shortDesc}
        </p>
      </div>
    </motion.div>
  );
}; 