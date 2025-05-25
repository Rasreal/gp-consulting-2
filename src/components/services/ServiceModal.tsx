import { Service } from '@/types/service';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { LeadForm } from './LeadForm';
import { useState } from 'react';
import {
  BarChart3,
  Brain,
  Code2,
  Coins,
  Target,
  Workflow,
} from 'lucide-react';

interface ServiceModalProps {
  service: Service;
  isOpen: boolean;
  onClose: () => void;
}

const iconMap = {
  Target,
  Workflow,
  BarChart3,
  Brain,
  Code2,
  Coins,
};

export const ServiceModal = ({ service, isOpen, onClose }: ServiceModalProps) => {
  const [showLeadForm, setShowLeadForm] = useState(false);
  const Icon = iconMap[service.icon as keyof typeof iconMap] || Target;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[720px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <Icon className="size-6" />
            {service.title}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4">
          <p className="text-gp-primary/80 leading-relaxed">
            {service.longDesc}
          </p>

          <div className="mt-6">
            <h4 className="font-medium mb-3">Ключевые показатели</h4>
            <div className="flex flex-wrap gap-3">
              {service.kpi.map((item, index) => (
                <div
                  key={index}
                  className="glass-subtle px-4 py-2 rounded-lg text-sm"
                >
                  <span className="text-gp-primary/70">{item.label}: </span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {service.cases.length > 0 && (
            <div className="mt-6">
              <h4 className="font-medium mb-3">Кейсы</h4>
              <div className="flex flex-wrap gap-3">
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

          <div className="mt-8 flex justify-end">
            {showLeadForm ? (
              <LeadForm onClose={() => setShowLeadForm(false)} />
            ) : (
              <Button onClick={() => setShowLeadForm(true)} className="bg-white text-gp-primary hover:bg-white/90">
                Запросить консультацию
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}; 