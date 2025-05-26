"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export interface Solution {
  id: string;
  title: string;
  description: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

// Default solutions as fallback if none are fetched
const defaultSolutions: Solution[] = [
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
  {
    id: "6",
    title: "Выход вашего бренда на новые рынки",
    description: "Адаптация стратегии, локализация и поиск возможностей для масштабирования.",
    image_url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

export function useSolutions() {
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSolutions() {
      try {
        setIsLoading(true);
        
        const { data, error } = await supabase
          .from('solutions')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        
        // Use fetched data if available, otherwise use default data
        if (data && data.length > 0) {
          setSolutions(data);
        } else {
          console.log('No solutions found, using default data');
          setSolutions(defaultSolutions);
        }
      } catch (err: any) {
        console.error('Error fetching solutions:', err);
        setError(err.message || 'Failed to fetch solutions');
        // Use default data on error
        setSolutions(defaultSolutions);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSolutions();
  }, []);

  return { solutions, isLoading, error };
} 