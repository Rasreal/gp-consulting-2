"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

const navItems = [
  { name: "О нас", href: "/about" },
  { name: "Решения", href: "/solutions" },
  { name: "Отрасли", href: "/industries" },
  { name: "Достижения", href: "/achievements" },
  { name: "Исследования", href: "/research" },
  { name: "Контакты", href: "/contacts" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white relative z-0">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-xl font-bold">
              GP Consulting
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Помогаем компаниям расти через данные, процессы и ИИ
            </p>
            <div className="flex gap-4 mt-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:info@gpconsulting.kz" 
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Навигация</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-gray-300 hover:text-white transition-colors inline-block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Button className="bg-white text-gp-primary hover:bg-black hover:text-white" asChild>
                  <Link href="/book">Связаться с нами</Link>
                </Button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                <span>Алматы, Казахстан</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Mail size={18} className="text-accent mt-1 flex-shrink-0" />
                <a 
                  href="mailto:info@gpconsulting.kz" 
                  className="hover:text-white transition-colors"
                >
                  info@gpconsulting.kz
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Phone size={18} className="text-accent mt-1 flex-shrink-0" />
                <a 
                  href="tel:+77271234567" 
                  className="hover:text-white transition-colors"
                >
                  +7 (727) 123-45-67
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© {year} GP Consulting. Все права защищены.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 