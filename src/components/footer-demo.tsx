"use client";

import { Hexagon, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";
import { Footer } from "@/components/ui/footer";

export function FooterDemo() {
  return (
    <Footer
      logo={<Hexagon className="h-8 w-8 text-primary" />}
      brandName="GP Consulting"
      socialLinks={[
        {
          icon: <Linkedin className="h-5 w-5" />,
          href: "https://linkedin.com",
          label: "LinkedIn",
        },
        {
          icon: <Twitter className="h-5 w-5" />,
          href: "https://twitter.com",
          label: "Twitter",
        },
        {
          icon: <Facebook className="h-5 w-5" />,
          href: "https://facebook.com",
          label: "Facebook",
        },
        {
          icon: <Instagram className="h-5 w-5" />,
          href: "https://instagram.com",
          label: "Instagram",
        },
      ]}
      mainLinks={[
        { href: "/solutions", label: "Решения" },
        { href: "/industries", label: "Отрасли" },
        { href: "/about", label: "О нас" },
        { href: "/contacts", label: "Контакты" },
        { href: "/career", label: "Карьера" },
      ]}
      legalLinks={[
        { href: "/privacy", label: "Политика конфиденциальности" },
        { href: "/terms", label: "Условия использования" },
      ]}
      copyright={{
        text: "© 2025 GP Consulting",
        license: "Все права защищены",
      }}
    />
  );
} 