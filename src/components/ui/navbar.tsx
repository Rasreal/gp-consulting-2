"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Route {
  name: string;
  path: string;
}

const routes: Route[] = [
  {
    name: "О нас",
    path: "/about",
  },
  {
    name: "Решения",
    path: "/solutions",
  },
  {
    name: "Отрасли",
    path: "/industries",
  },
  {
    name: "Достижения",
    path: "/achievements",
  },
  {
    name: "Исследования",
    path: "/research",
  },
  {
    name: "Контакты",
    path: "/contacts",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/85 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-24 py-4 lg:py-6">
            <Link href="/" className="font-bold text-xl text-gp-primary">
              GP Consulting
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors group
                    ${
                      pathname === route.path
                        ? "text-gp-accent"
                        : "text-gp-primary/80 hover:text-gp-primary"
                    }`}
                >
                  {pathname === route.path && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute inset-0 rounded-md bg-gp-accent/5 -z-10"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                  <span className="relative">
                    {route.name}
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gp-accent transform scale-x-0 group-hover:scale-x-100 transition-transform ease-out duration-300 origin-left"></span>
                  </span>
                </Link>
              ))}
              <Button className="bg-white text-gp-primary hover:bg-black hover:text-white" asChild>
                <Link href="/book">Забронировать встречу</Link>
              </Button>
            </nav>

            {/* Mobile Navigation Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gp-primary" />
              ) : (
                <Menu className="h-6 w-6 text-gp-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Scroll Progress Indicator */}
        <motion.div
          style={{ scaleX }}
          className="h-[2px] bg-gp-accent origin-left"
        />
      </motion.header>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 top-16 z-40 bg-white p-4 md:hidden"
        >
          <div className="flex flex-col space-y-4 py-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-md text-base font-medium ${
                  pathname === route.path
                    ? "bg-gp-accent/10 text-gp-accent"
                    : "text-gp-primary/80 hover:text-gp-primary hover:bg-gray-50"
                }`}
              >
                {route.name}
              </Link>
            ))}
            <Button className="bg-white text-gp-primary hover:bg-black hover:text-white" asChild>
              <Link href="/book" onClick={() => setIsOpen(false)}>
                Забронировать встречу
              </Link>
            </Button>
          </div>
        </motion.nav>
      )}
    </>
  );
} 