"use client";

import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, Briefcase, Users, PhoneCall } from "lucide-react";

const navItems = [
  { name: "Главная", url: "/", icon: Home },
  { name: "Решения", url: "/solutions", icon: Briefcase },
  { name: "О нас", url: "/about", icon: Users },
  { name: "Контакты", url: "/contacts", icon: PhoneCall },
];

export function NavContainer() {
  return <NavBar items={navItems} />;
} 