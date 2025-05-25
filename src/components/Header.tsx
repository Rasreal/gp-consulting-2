"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, Users, Briefcase, Network, Award, FileText, Contact } from "lucide-react";

const navItems = [
  { name: "Главная", href: "/", icon: Home },
  { name: "О нас", href: "/about", icon: Users },
  { name: "Решения", href: "/solutions", icon: Briefcase },
  { name: "Отрасли", href: "/industries", icon: Network },
  { name: "Достижения", href: "/achievements", icon: Award },
  { name: "Исследования", href: "/research", icon: FileText },
  { name: "Контакты", href: "/contacts", icon: Contact },
];

export function Header() {
  const tubeLightItems = navItems.map(item => ({
    name: item.name,
    url: item.href,
    icon: item.icon
  }));

  return (
    <header className="sticky top-0 z-50 bg-primary text-white h-16">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          GP Consulting
        </Link>
        
        <div className="hidden md:block">
          <NavBar 
            items={tubeLightItems} 
            className="relative sm:fixed right-0 top-0 pt-0 mt-3 mr-4 mb-0"
          />
        </div>

        <div className="md:hidden">
          <Button 
            className="bg-gradient-to-r from-primary to-secondary hover:scale-[1.02] transition-transform" 
            asChild
          >
            <Link href="/book">Забронировать</Link>
          </Button>
        </div>
      </div>
      
      <div className="block md:hidden">
        <NavBar 
          items={tubeLightItems}
          className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 mb-4"
        />
      </div>
    </header>
  );
} 