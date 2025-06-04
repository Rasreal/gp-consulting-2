"use client";


interface ApproachStep {
  id: string;
  title: string;
  description: string;
}

interface ApproachSectionProps {
  className?: string;
}

export function ApproachSection({ className = "" }: ApproachSectionProps) {
  const steps: ApproachStep[] = [
    {
      id: "1",
      title: "Анализ и исследование",
      description: "Глубокий анализ рынка, конкурентов и целевой аудитории для выявления возможностей и рисков."
    },
    {
      id: "2",
      title: "Стратегическое планирование",
      description: "Разработка детальной стратегии с четкими целями, KPI и дорожной картой реализации."
    },
    {
      id: "3",
      title: "Оптимизация процессов",
      description: "Устранение неэффективных звеньев и внедрение передовых методик для повышения результативности."
    },
    {
      id: "4",
      title: "Внедрение технологий",
      description: "Интеграция современных технологических решений для автоматизации и масштабирования бизнеса."
    },
    {
      id: "5",
      title: "Обучение команды",
      description: "Передача знаний и навыков вашей команде для самостоятельного управления внедренными решениями."
    },
    {
      id: "6",
      title: "Поддержка и развитие",
      description: "Постоянное сопровождение, анализ результатов и корректировка стратегии для достижения максимальной эффективности."
    }
  ];

  return (
    <section className={`py-24 ${className}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gp-primary mb-4">Наш подход</h2>
          <p className="text-xl text-gp-text-gray max-w-3xl mx-auto">
            Мы работаем по методологии, которая подтверждена результатами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gp-primary/10 text-gp-primary mr-4">
                  <span className="font-bold">{step.id}</span>
                </div>
                <h3 className="text-xl font-bold text-gp-primary">{step.title}</h3>
              </div>
              <p className="text-gp-text-gray">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 