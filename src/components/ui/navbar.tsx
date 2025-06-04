"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Route {
  name: string;
  path: string;
}

const routes: Route[] = [
  {
    name: "Главная",
    path: "/",
  },
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
    name: "Кейсы",
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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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
                <Link href="/book">Связаться с нами</Link>
              </Button>
            </nav>

            {/* Mobile Navigation Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center menu-button"
              aria-label="Toggle menu"
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

      {/* Mobile Navigation Menu - Redesigned */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu panel */}
            <motion.nav
              initial={{ opacity: 0, y: -50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                duration: 0.3 
              }}
              className="fixed top-20 left-4 right-4 z-50 bg-white/95 backdrop-blur-md 
                        rounded-xl shadow-lg p-4 md:hidden mobile-menu
                        max-h-[80vh] overflow-y-auto"
            >
              <div className="flex flex-col space-y-1">
                {routes.map((route) => (
                  <motion.div
                    key={route.path}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={route.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-base transition-all ${
                        pathname === route.path
                          ? "bg-gp-accent/10 text-gp-accent font-semibold"
                          : "text-gp-primary/80 hover:bg-gray-100 hover:text-gp-primary"
                      }`}
                    >
                      {route.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 px-4">
                <Button 
                  className="w-full bg-gp-accent text-black border border-gray-200 hover:bg-gp-accent/90" 
                  asChild
                >
                  <Link href="/book" onClick={() => setIsOpen(false)}>
                    Связаться с нами
                  </Link>
                </Button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 