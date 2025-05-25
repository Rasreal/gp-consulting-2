import { supabase } from '@/lib/supabase';
import { Industry, Solution, Achievement } from '@/types/content';

const now = new Date().toISOString();

const industries: Omit<Industry, 'id'>[] = [
  {
    title: "Транспорт",
    icon: "TransportIcon",
    description: "Комплексные решения для транспортных компаний, включающие управление автопарком, оптимизацию логистических маршрутов и внедрение IoT-систем мониторинга.",
    services: [
      "Система управления автопарком",
      "Оптимизация маршрутов с помощью ИИ",
      "IoT-мониторинг транспортных средств",
      "Предиктивное обслуживание техники"
    ],
    created_at: now,
    updated_at: now
  },
  {
    title: "Телеком",
    icon: "TelecomIcon",
    description: "Цифровая трансформация телекоммуникационных компаний с фокусом на автоматизацию биллинга и персонализацию клиентского опыта.",
    services: [
      "Автоматизация биллинговых систем",
      "AI-аналитика клиентского поведения",
      "Персонализированный таргетинг",
      "Оптимизация сетевой инфраструктуры"
    ],
    created_at: now,
    updated_at: now
  },
  {
    title: "Логистика",
    icon: "LogisticsIcon",
    description: "Автоматизация складских и транспортных процессов с использованием современных WMS/TMS систем и предиктивной аналитики.",
    services: [
      "Внедрение WMS/TMS систем",
      "Прогнозирование спроса и поставок",
      "KPI-дашборды в реальном времени",
      "Оптимизация складских процессов"
    ],
    created_at: now,
    updated_at: now
  },
  {
    title: "Производство",
    icon: "ManufacturingIcon",
    description: "Цифровизация производственных процессов с внедрением Industry 4.0 технологий и систем контроля качества на базе ИИ.",
    services: [
      "Внедрение MES/APS систем",
      "IoT-мониторинг производства",
      "AI-контроль качества продукции",
      "Предиктивное обслуживание оборудования"
    ],
    created_at: now,
    updated_at: now
  }
];

const solutions: Omit<Solution, 'id'>[] = [
  {
    title: "Стратегия и консалтинг",
    description: "Помогаем бизнесу определить направление роста",
    icon: "Target",
    services: [
      "Цифровая стратегия",
      "Организационная трансформация",
      "Бизнес-моделирование",
      "Инновационная стратегия",
    ],
    created_at: now,
    updated_at: now
  },
  {
    title: "Разработка продуктов",
    description: "Создаем продукты, которые решают бизнес-задачи",
    icon: "Code2",
    services: [
      "Разработка MVP",
      "Цифровые продукты",
      "SaaS-решения",
      "Мобильные приложения",
    ],
    created_at: now,
    updated_at: now
  },
  {
    title: "AI и автоматизация",
    description: "Внедряем искусственный интеллект и автоматизируем процессы",
    icon: "Brain",
    services: [
      "Чат-боты и агенты",
      "Автоматизация процессов",
      "Машинное обучение",
      "Предиктивная аналитика",
    ],
    created_at: now,
    updated_at: now
  },
  {
    title: "Маркетинг и рост",
    description: "Помогаем привлекать и удерживать клиентов",
    icon: "BarChart3",
    services: [
      "Стратегия роста",
      "Маркетинг-автоматизация",
      "Performance Marketing",
      "Аналитика и A/B тесты",
    ],
    created_at: now,
    updated_at: now
  },
  {
    title: "IT и цифровизация",
    description: "Внедряем и оптимизируем IT-системы",
    icon: "Workflow",
    services: [
      "Разработка архитектуры",
      "Интеграция систем",
      "Облачная инфраструктура",
      "Техническая поддержка",
    ],
    created_at: now,
    updated_at: now
  },
  {
    title: "FinOps",
    description: "Оптимизируем финансовые процессы",
    icon: "Coins",
    services: [
      "Бюджетирование",
      "Финансовое планирование",
      "Оптимизация расходов",
      "Финансовая аналитика",
    ],
    created_at: now,
    updated_at: now
  },
  {
    title: "DevOps",
    description: "Обеспечиваем быстрое и надежное развертывание",
    icon: "Code2",
    services: [
      "CI/CD",
      "Инфраструктура как код",
      "Контейнеризация",
      "Мониторинг и логирование",
    ],
    created_at: now,
    updated_at: now
  },
];

const achievements: Omit<Achievement, 'id'>[] = [
  { value: "> 25", title: "AI-моделей", description: "Внедрено в производство", created_at: now, updated_at: now },
  { value: "−30%", title: "OPEX", description: "Сокращение операционных расходов", created_at: now, updated_at: now },
  { value: "+18 pp", title: "LTV", description: "Увеличение жизненной ценности клиента", created_at: now, updated_at: now },
  { value: "95%", title: "Точность", description: "Прогнозных моделей", created_at: now, updated_at: now }
];

async function seedData() {
  try {
    // Clear existing data
    await supabase.from('industries').delete().neq('id', '');
    await supabase.from('solutions').delete().neq('id', '');
    await supabase.from('achievements').delete().neq('id', '');

    // Insert new data
    const { error: industriesError } = await supabase
      .from('industries')
      .insert(industries);

    if (industriesError) {
      console.error('Error seeding industries:', industriesError);
      return;
    }

    const { error: solutionsError } = await supabase
      .from('solutions')
      .insert(solutions);

    if (solutionsError) {
      console.error('Error seeding solutions:', solutionsError);
      return;
    }

    const { error: achievementsError } = await supabase
      .from('achievements')
      .insert(achievements);

    if (achievementsError) {
      console.error('Error seeding achievements:', achievementsError);
      return;
    }

    console.log('Successfully seeded data!');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

seedData(); 