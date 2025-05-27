import { supabase } from '@/lib/supabase';
import { Industry, Solution, Achievement } from '@/types/content';

const now = new Date().toISOString();

const industries: Omit<Industry, 'id'>[] = [
  {
    title: "Транспорт",
    icon: "TransportIcon",
    image_url: '',
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
    image_url: '',
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
    image_url: '',
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
    image_url: '',
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
    title: "Все типы исследований и подготовка к запуску",
    description: "Анализ рынка, тестирование идей и формирование стратегии для успешного старта.",
    image_url: "https://optim.tildacdn.com/tild3738-3933-4763-b231-366238613764/-/cover/720x504/center/center/-/format/webp/man-touching-futuris.jpg.webp",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    title: "Бизнес анализ и аудит",
    description: "Оценка текущего состояния компании, выявление точек роста и оптимизация процессов.",
    image_url: "https://optim.tildacdn.com/tild6461-3665-4539-a232-326239636562/-/resize/800x1000/-/format/webp/Picture_3.png.webp",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    title: "Вывод нового продукта на рынок",
    description: "От концепции до первых продаж: стратегия, позиционирование и продвижение.",
    image_url: "https://optim.tildacdn.com/tild3037-6264-4835-b062-626462633766/-/cover/720x504/center/center/-/format/webp/analyst-examines-bus.jpg.webp",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    title: "Стратегический консалтинг и развитие",
    description: "Долгосрочные планы и тактические решения для роста компании.",
    image_url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    title: "Инновации и внедрение AI",
    description: "Внедрение передовых технологий и искусственного интеллекта для повышения эффективности.",
    image_url: "https://optim.tildacdn.com/tild3932-3161-4063-a462-616433323530/-/cover/720x504/center/center/-/format/webp/Article2.png.webp",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
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