"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-36 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">404 - Страница не найдена</h1>
      <p className="text-lg mb-8 text-muted-foreground max-w-2xl">
        Запрашиваемая страница не существует или была перемещена.
      </p>
      <Button 
        size="lg" 
        className="bg-gradient-to-r from-primary to-secondary hover:scale-[1.02] transition-transform"
        asChild
      >
        <Link href="/">Вернуться на главную</Link>
      </Button>
    </div>
  );
} 