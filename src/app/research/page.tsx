"use client";

import { motion } from "framer-motion";
import { PageTemplate } from "@/components/ui/page-template";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Calendar } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { CTASection } from "@/components/cta-section";

const categories = ["Все", "Телеком", "Логистика", "AI-тенденции"];

const reports = [
  {
    id: 1,
    title: "Цифровая трансформация в телекоме 2024",
    abstract: "Исследование ключевых трендов и технологий, определяющих будущее телекоммуникационной отрасли в Казахстане и СНГ.",
    category: "Телеком",
    size: "2.4 MB",
    date: "Декабрь 2024",
    pages: 45,
    cover: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&auto=format&fit=crop",
    downloadUrl: "/reports/telecom-transformation-2024.pdf"
  },
  {
    id: 2,
    title: "AI в логистике: Практическое руководство",
    abstract: "Комплексный анализ применения искусственного интеллекта для оптимизации логистических процессов и цепочек поставок.",
    category: "Логистика",
    size: "3.1 MB",
    date: "Ноябрь 2024",
    pages: 62,
    cover: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400&auto=format&fit=crop",
    downloadUrl: "/reports/ai-logistics-guide-2024.pdf"
  },
  {
    id: 3,
    title: "Тренды ИИ 2025: Что ждет бизнес",
    abstract: "Прогнозы развития технологий искусственного интеллекта и их влияние на различные отрасли экономики в ближайшие годы.",
    category: "AI-тенденции",
    size: "1.8 MB",
    date: "Январь 2025",
    pages: 38,
    cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=400&auto=format&fit=crop",
    downloadUrl: "/reports/ai-trends-2025.pdf"
  },
  {
    id: 4,
    title: "Автоматизация складских процессов",
    abstract: "Детальное руководство по внедрению WMS систем и роботизации складских операций для повышения эффективности.",
    category: "Логистика",
    size: "2.7 MB",
    date: "Октябрь 2024",
    pages: 53,
    cover: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=400&auto=format&fit=crop",
    downloadUrl: "/reports/warehouse-automation-2024.pdf"
  },
  {
    id: 5,
    title: "5G и IoT: Новые возможности для бизнеса",
    abstract: "Анализ возможностей технологий 5G и Интернета вещей для создания инновационных бизнес-моделей и сервисов.",
    category: "Телеком",
    size: "2.2 MB",
    date: "Сентябрь 2024",
    pages: 41,
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop",
    downloadUrl: "/reports/5g-iot-business-2024.pdf"
  },
  {
    id: 6,
    title: "Машинное обучение в финансах",
    abstract: "Практические кейсы применения ML алгоритмов для риск-менеджмента, фрод-детекции и персонализации финансовых услуг.",
    category: "AI-тенденции",
    size: "3.5 MB",
    date: "Август 2024",
    pages: 67,
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop",
    downloadUrl: "/reports/ml-finance-2024.pdf"
  }
];

export default function ResearchPage() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [selectedReport, setSelectedReport] = useState<typeof reports[0] | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: ""
  });

  const filteredReports = reports.filter(report => 
    selectedCategory === "Все" || report.category === selectedCategory
  );

  const handleDownload = (report: typeof reports[0]) => {
    setSelectedReport(report);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedReport) {
      // In a real app, this would send the form data to your backend
      console.log("Form submitted:", formData);
      // Simulate download
      window.open(selectedReport.downloadUrl, '_blank');
      setSelectedReport(null);
      setFormData({ name: "", company: "", email: "" });
    }
  };

  return (
    <PageTemplate>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gp-primary">
              Исследования
            </h1>
            <p className="text-xl text-gp-primary/80 mb-8">
              Экспертные отчеты и аналитика
            </p>
            <p className="text-lg text-gp-primary/70">
              Получите доступ к нашим исследованиям рынка, технологическим трендам 
              и лучшим практикам цифровой трансформации.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === selectedCategory
                    ? "bg-black text-white text-gp-primary"
                    : "text-gp-primary hover:bg-gp-accent/10 hover:text-gp-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReports.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.01 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-card overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={report.cover}
                    alt={report.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white text-black rounded-full px-1 py-1">
                    <Badge variant="secondary">{report.category}</Badge>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <h3 className="text-lg font-semibold mb-3 text-gp-primary line-clamp-2">
                    {report.title}
                  </h3>
                  
                  <p className="text-gp-primary/70 text-sm mb-4 line-clamp-3">
                    {report.abstract}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-gp-primary/60 mb-4">
                    <div className="flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      <span>{report.pages} стр.</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{report.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      <span>{report.size}</span>
                    </div>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full mt-auto bg-white text-gp-primary hover:bg-black hover:text-white"
                        onClick={() => handleDownload(report)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Скачать отчет
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Скачать отчет</DialogTitle>
                        <DialogDescription>
                          Заполните форму для получения доступа к отчету &quot;{report.title}&quot;
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleFormSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="name">Имя *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="company">Компания *</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full bg-white text-gp-primary hover:bg-white/90">
                          Получить отчет
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Нужно индивидуальное исследование?"
        description="Мы проводим кастомные исследования рынка и технологий под специфические потребности вашего бизнеса."
      />
    </PageTemplate>
  );
} 