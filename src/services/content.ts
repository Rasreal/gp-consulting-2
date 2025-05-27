import { supabase } from '@/lib/supabase';
import { Industry, Solution, Achievement } from '@/types/content';

// Fallback data
export const DEFAULT_INDUSTRIES: Industry[] = [
  {
    id: '1',
    title: 'Healthcare',
    description: 'Innovative solutions for healthcare providers',
    icon: 'medical',
    image_url: 'https://optim.tildacdn.com/tild3738-3933-4763-b231-366238613764/-/cover/720x504/center/center/-/format/webp/man-touching-futuris.jpg.webp',
    services: ['Medical Records', 'Patient Care', 'Hospital Management'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  // Add your current static data here
];

export const DEFAULT_SOLUTIONS: Solution[] = [
  {
    id: "1",
    title: "Все типы исследований и подготовка к запуску",
    description: "Анализ рынка, тестирование идей и формирование стратегии для успешного старта.",
    image_url: "https://optim.tildacdn.com/tild3738-3933-4763-b231-366238613764/-/cover/720x504/center/center/-/format/webp/man-touching-futuris.jpg.webp",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "2",
    title: "Бизнес анализ и аудит",
    description: "Оценка текущего состояния компании, выявление точек роста и оптимизация процессов.",
    image_url: "https://optim.tildacdn.com/tild6461-3665-4539-a232-326239636562/-/resize/800x1000/-/format/webp/Picture_3.png.webp",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "3",
    title: "Вывод нового продукта на рынок",
    description: "От концепции до первых продаж: стратегия, позиционирование и продвижение.",
    image_url: "https://optim.tildacdn.com/tild3037-6264-4835-b062-626462633766/-/cover/720x504/center/center/-/format/webp/analyst-examines-bus.jpg.webp",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "4",
    title: "Стратегический консалтинг и развитие",
    description: "Долгосрочные планы и тактические решения для роста компании.",
    image_url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "5",
    title: "Инновации и внедрение AI",
    description: "Внедрение передовых технологий и искусственного интеллекта для повышения эффективности.",
    image_url: "https://optim.tildacdn.com/tild3932-3161-4063-a462-616433323530/-/cover/720x504/center/center/-/format/webp/Article2.png.webp",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  // Add your current static data here
];

export const DEFAULT_ACHIEVEMENTS: Achievement[] = [
  {
    id: '1',
    title: 'Projects Completed',
    value: '500+',
    description: 'Successfully delivered projects',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  // Add your current static data here
];

export async function getIndustries(): Promise<Industry[]> {
  const { data, error } = await supabase
    .from('industries')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error fetching industries:', error);
    return DEFAULT_INDUSTRIES;
  }

  return data.length > 0 ? data : DEFAULT_INDUSTRIES;
}

export async function getSolutions(): Promise<Solution[]> {
  const { data, error } = await supabase
    .from('solutions')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error fetching solutions:', error);
    return DEFAULT_SOLUTIONS;
  }

  return data.length > 0 ? data : DEFAULT_SOLUTIONS;
}

export async function getAchievements(): Promise<Achievement[]> {
  const { data, error } = await supabase
    .from('achievements')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error fetching achievements:', error);
    return DEFAULT_ACHIEVEMENTS;
  }

  return data.length > 0 ? data : DEFAULT_ACHIEVEMENTS;
} 