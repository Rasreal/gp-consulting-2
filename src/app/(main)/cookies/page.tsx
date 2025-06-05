"use client";

import { PageTemplate } from "@/components/ui/page-template";
import { motion } from "framer-motion";
import { Shield, Lock, Settings, Info } from "lucide-react";

export default function CookiesPage() {
  return (
    <PageTemplate>
      {/* Hero Section with Background Gradient */}
      <section className="mt-10 relative min-h-[30vh] flex items-center py-16">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gp-primary/5 rounded-full mb-6">
              <Lock className="w-4 h-4 mr-2 text-gp-primary" />
              <span className="text-sm font-medium text-gp-primary">Безопасность и конфиденциальность</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gp-primary">
              Cookie Policy
            </h1>
            <p className="text-xl text-gp-primary/80 max-w-2xl">
              Как мы используем cookie-файлы на нашем сайте
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 pb-24">
        <div className="container">
          <div className="max-w-3xl prose prose-lg">
            {/* What are cookies section */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-8">
              <div className="flex items-start mb-4">
                <div className="mr-4 bg-gp-primary/10 p-3 rounded-full">
                  <Info className="w-6 h-6 text-gp-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gp-primary mb-4">Что такое cookies?</h2>
                  <p className="text-gp-primary/80 leading-relaxed">
                    Cookies — это небольшие текстовые файлы, которые сохраняются на вашем устройстве 
                    (компьютере, планшете или мобильном телефоне) при посещении нашего сайта. Они позволяют 
                    нашему сайту запоминать ваши действия и предпочтения в течение определенного времени.
                  </p>
                </div>
              </div>
            </div>

            {/* How we use cookies section */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
              <div className="flex items-start mb-4">
                <div className="mr-4 bg-gp-accent/10 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-gp-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gp-primary mb-4">Как мы используем cookies</h2>
                  <p className="text-gp-primary/80 leading-relaxed mb-4">
                    Мы используем cookies для следующих целей:
                  </p>
                  <ul className="space-y-3 mb-0">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gp-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        <strong className="font-medium text-gp-primary">Необходимые cookies</strong>: 
                        <span className="text-gp-primary/80"> Обеспечивают работу основных функций сайта</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gp-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        <strong className="font-medium text-gp-primary">Функциональные cookies</strong>: 
                        <span className="text-gp-primary/80"> Помогают нам запоминать ваши настройки и предпочтения</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gp-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        <strong className="font-medium text-gp-primary">Аналитические cookies</strong>: 
                        <span className="text-gp-primary/80"> Позволяют нам анализировать, как посетители используют наш сайт</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gp-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        <strong className="font-medium text-gp-primary">Маркетинговые cookies</strong>: 
                        <span className="text-gp-primary/80"> Используются для отслеживания эффективности маркетинговых кампаний</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Managing cookies section */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
              <div className="flex items-start mb-4">
                <div className="mr-4 bg-gp-primary/10 p-3 rounded-full">
                  <Settings className="w-6 h-6 text-gp-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gp-primary mb-4">Управление cookies</h2>
                  <p className="text-gp-primary/80 leading-relaxed">
                    Большинство веб-браузеров позволяют контролировать использование cookies через настройки. 
                    Вы можете отключить или ограничить использование cookies в настройках вашего браузера. 
                    Однако это может повлиять на функциональность нашего сайта.
                  </p>
                </div>
              </div>
            </div>

            {/* Third-party cookies */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
              <h2 className="text-2xl font-semibold text-gp-primary mb-4">Сторонние cookies</h2>
              <p className="text-gp-primary/80 leading-relaxed">
                Некоторые cookies могут быть установлены сторонними сервисами, которые отображаются 
                на наших страницах. Мы не контролируем распространение этих cookies. 
                Для получения дополнительной информации вы можете обратиться непосредственно к 
                этим третьим сторонам.
              </p>
            </div>

            {/* Policy changes */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
              <h2 className="text-2xl font-semibold text-gp-primary mb-4">Изменения в политике cookies</h2>
              <p className="text-gp-primary/80 leading-relaxed">
                Мы можем обновлять нашу политику cookies время от времени. Любые изменения будут 
                опубликованы на этой странице. Мы рекомендуем периодически просматривать эту страницу 
                для получения актуальной информации о нашей политике cookies.
              </p>
            </div>

            {/* Contact section */}
            <div className="bg-gradient-to-r from-gp-primary/5 to-gp-accent/5 p-8 rounded-xl border border-gp-accent/10">
              <h2 className="text-2xl font-semibold text-gp-primary mb-4">Контакты</h2>
              <p className="text-gp-primary/80 leading-relaxed">
                Если у вас есть вопросы относительно нашей политики использования cookies, 
                пожалуйста, свяжитесь с нами по адресу: <a href="mailto:info@gpconsulting.kz" className="text-gp-accent font-medium hover:underline">info@gpconsulting.kz</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </PageTemplate>
  );
} 