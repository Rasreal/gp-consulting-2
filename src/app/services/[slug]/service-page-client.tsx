"use client"

import { Button } from '@/components/ui/button';
import { LeadForm } from '@/components/services/LeadForm';
import { useState } from 'react';
import { Service } from '@/types/service';
import {
  BarChart3,
  Brain,
  Code2,
  Coins,
  Target,
  Workflow,
} from 'lucide-react';

interface ServicePageClientProps {
  service: Service;
}

const iconMap = {
  Target,
  Workflow,
  BarChart3,
  Brain,
  Code2,
  Coins,
};

export function ServicePageClient({ service }: ServicePageClientProps) {
  const [showLeadForm, setShowLeadForm] = useState(false);
  const Icon = iconMap[service.icon as keyof typeof iconMap] || Target;

  return (
    <div className="container py-12">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="size-8 text-gp-primary" />
        <h1 className="text-2xl font-semibold">{service.title}</h1>
      </div>

      <p className="text-gp-primary/80 leading-relaxed">
        {service.longDesc}
      </p>

      <div className="mt-8">
        <h2 className="text-lg font-medium mb-4">Ключевые показатели</h2>
        <div className="grid grid-cols-2 gap-4">
          {service.kpi.map((item, index) => (
            <div
              key={index}
              className="glass-card p-4"
            >
              <div className="text-gp-primary/70 text-sm">{item.label}</div>
              <div className="font-medium mt-1">{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      {service.cases.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-medium mb-4">Кейсы</h2>
          <div className="flex flex-col gap-2">
            {service.cases.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="text-gp-primary hover:text-gp-accent transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12">
        {showLeadForm ? (
          <LeadForm onClose={() => setShowLeadForm(false)} />
        ) : (
          <Button
            onClick={() => setShowLeadForm(true)}
            className="w-full bg-white text-gp-primary hover:bg-white/90"
            size="lg"
          >
            Запросить консультацию
          </Button>
        )}
      </div>
    </div>
  );
} 