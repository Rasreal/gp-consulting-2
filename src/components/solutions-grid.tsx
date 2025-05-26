"use client";

import Image from "next/image";
import { Loader2 } from "lucide-react";
import { useSolutions, Solution } from "@/hooks/useSolutions";

interface SolutionsGridProps {
  className?: string;
}

export function SolutionsGrid({ className = "" }: SolutionsGridProps) {
  const { solutions, isLoading, error } = useSolutions();

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-32">
        <Loader2 className="w-8 h-8 animate-spin text-gp-primary" />
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="text-center py-20">
        <h3 className="text-xl font-bold text-red-500 mb-2">Error loading solutions</h3>
        <p className="text-gp-text-gray">{error}</p>
      </div>
    );
  }

  return (
    <section id="solutions" className={`py-24 ${className}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-4xl font-bold leading-relaxed text-gp-primary">Наши услуги в области управленческого консалтинга сосредоточены на наиболее важных вопросах и возможностях наших клиентов:</h2>
          </div>
          <div>
            <p className="text-lg text-gp-text-gray mb-8">
              стратегии, маркетинге, организации, операционной деятельности, технологиях, 
              трансформации, цифровых технологиях, передовой аналитике, корпоративных 
              финансах, слияниях и поглощениях, а также устойчивом развитии во всех отраслях 
              и географических регионах.
            </p>
            <p className="text-lg text-gp-text-gray">
              Мы создаем ценность вне зависимости от границ и на уровне отдельных 
              подразделений организации любого размера. Мы доказали, что оптимизация 
              совокупности компонентов, а не только отдельных составляющих, дает 
              мультипликативный эффект.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution) => (
            <div 
              key={solution.id} 
              className="relative overflow-hidden rounded-xl shadow-md h-[400px] lg:h-[480px] group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-indigo-900/10 z-10 transition-opacity duration-300 group-hover:opacity-0"></div>
              <Image
                src={solution.image_url}
                alt={solution.title}
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                unoptimized
                priority={solutions.indexOf(solution) < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% via-black/60 to-black/90 group-hover:via-black/50 group-hover:to-black/80 transition-colors duration-300 z-20"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-30 transition-transform duration-300 group-hover:translate-y-[-4px]">
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-white/95 text-base leading-relaxed">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 