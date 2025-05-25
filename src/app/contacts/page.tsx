"use client";

import { motion } from "framer-motion";
import { PageTemplate } from "@/components/ui/page-template";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real app, this would send to your backend
      console.log("Form submitted:", formData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: ""
      });
      
      alert("Сообщение отправлено! Мы свяжемся с вами в ближайшее время.");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Произошла ошибка. Попробуйте еще раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
              Контакты
            </h1>
            <p className="text-xl text-gp-primary/80 mb-8">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
            <p className="text-lg text-gp-primary/70">
              Мы готовы ответить на ваши вопросы и предложить решения, 
              которые помогут вашему бизнесу расти и развиваться.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-gp-primary">
                  Как с нами связаться
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 glass-subtle rounded-full flex items-center justify-center border border-gray-200">
                      <MapPin className="w-5 h-5 text-gp-primary " />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gp-primary mb-1">Офис</h3>
                      <p className="text-gp-primary/70">
                        г. Алматы, ул. Достык 20<br />
                        БЦ &quot;Esentai Tower&quot;, 15 этаж
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 glass-subtle rounded-full flex items-center justify-center border border-gray-200">
                      <Phone className="w-5 h-5 text-gp-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gp-primary mb-1">Телефон</h3>
                      <p className="text-gp-primary/70">+7 (727) 123-45-67</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 glass-subtle rounded-full flex items-center justify-center border border-gray-200">
                      <Mail className="w-5 h-5 text-gp-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gp-primary mb-1">Email</h3>
                      <p className="text-gp-primary/70">hello@gpconsulting.kz</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 glass-subtle rounded-full flex items-center justify-center border border-gray-200">
                      <Clock className="w-5 h-5 text-gp-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gp-primary mb-1">Время работы</h3>
                      <p className="text-gp-primary/70">
                        Пн-Пт: 9:00 - 18:00<br />
                        Сб-Вс: По договоренности
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-gp-primary mb-4">Социальные сети</h3>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/company/gpconsulting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white hover:bg-white/80 rounded-full flex items-center justify-center text-gp-primary transition-colors border border-gray-200"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://t.me/gpconsulting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white hover:bg-white/80 rounded-full flex items-center justify-center text-gp-primary transition-colors border border-gray-200"
                  >
                    <Send className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 border border-gray-200"
            >
              <h2 className="text-2xl font-semibold mb-6 text-gp-primary">
                Напишите нам
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company">Компания</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Тема *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Сообщение *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-white text-gp-primary hover:bg-black hover:text-white"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправка..." : "Отправить сообщение"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=" p-8"
          >
            <h2 className="text-2xl font-semibold text-gp-primary text-center mb-8">
              Наш офис
            </h2>
            
            <div className="relative">
              {/* Google Maps Embed */}
              <div className="w-full h-[500px] rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.5127085543256!2d71.42037007677395!3d51.13088476811791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA3JzUxLjIiTiA3McKwMjUnMjEuMiJF!5e0!3m2!1sen!2skz!4v1709655124536!5m2!1sen!2skz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Overlay Card */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg max-w-sm border border-gray-200 w-full mx-4 sm:mx-0 sm:w-auto">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gp-primary mb-2">
                      GP Consulting
                    </h3>
                    <p className="text-gp-primary/70 mb-4">
                      г. Астана, ул. Достык 20<br />
                      БЦ &#34;Москва&#34;, 15 этаж
                    </p>
                    <Button 
                      size="sm"
                      className="bg-black text-white hover:bg-white hover:text-black border border-black"
                      onClick={() => window.open('https://maps.google.com/?q=51.13088476811791,71.42255932422108', '_blank')}
                    >
                      Открыть в Google Maps
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTemplate>
  );
} 