"use client";

import { motion } from "framer-motion";
import { PageTemplate } from "@/components/ui/page-template";

export default function PrivacyPage() {
  return (
    <PageTemplate>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gp-primary">
              Политика конфиденциальности
            </h1>
            <p className="text-xl text-gp-primary/80 mb-4">
              Последнее обновление: 1 января 2025 года
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gp-primary">1. Общие положения</h2>
                <p className="text-gp-primary/80 mb-4">
                  GP Consulting (&quot;мы&quot;, &quot;наша компания&quot;) уважает вашу конфиденциальность и стремится защитить 
                  персональные данные, которые вы нам предоставляете. Данная Политика конфиденциальности 
                  описывает, как мы собираем, используем, храним и защищаем вашу информацию.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gp-primary">2. Какую информацию мы собираем</h2>
                <p className="text-gp-primary/80 mb-4">Мы можем собирать следующие типы информации:</p>
                <ul className="list-disc list-inside space-y-2 text-gp-primary/80">
                  <li>Контактная информация (имя, email, телефон, название компании)</li>
                  <li>Информация о посещении сайта (IP-адрес, браузер, время посещения)</li>
                  <li>Информация, предоставленная при заполнении форм обратной связи</li>
                  <li>Данные о взаимодействии с нашими услугами</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gp-primary">3. Как мы используем информацию</h2>
                <p className="text-gp-primary/80 mb-4">Мы используем собранную информацию для:</p>
                <ul className="list-disc list-inside space-y-2 text-gp-primary/80">
                  <li>Предоставления запрашиваемых услуг и консультаций</li>
                  <li>Связи с вами по поводу ваших запросов</li>
                  <li>Улучшения качества наших услуг</li>
                  <li>Отправки информационных материалов (с вашего согласия)</li>
                  <li>Соблюдения правовых требований</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gp-primary">4. Защита данных</h2>
                <p className="text-gp-primary/80 mb-4">
                  Мы применяем соответствующие технические и организационные меры для защиты ваших 
                  персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gp-primary">5. Передача данных третьим лицам</h2>
                <p className="text-gp-primary/80 mb-4">
                  Мы не продаем, не обмениваем и не передаем ваши персональные данные третьим лицам 
                  без вашего согласия, за исключением случаев, предусмотренных законодательством.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gp-primary">6. Ваши права</h2>
                <p className="text-gp-primary/80 mb-4">Вы имеете право:</p>
                <ul className="list-disc list-inside space-y-2 text-gp-primary/80">
                  <li>Запросить доступ к вашим персональным данным</li>
                  <li>Потребовать исправления неточных данных</li>
                  <li>Запросить удаление ваших данных</li>
                  <li>Отозвать согласие на обработку данных</li>
                  <li>Подать жалобу в надзорный орган</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gp-primary">7. Cookies</h2>
                <p className="text-gp-primary/80 mb-4">
                  Наш сайт использует cookies для улучшения пользовательского опыта. Вы можете 
                  настроить свой браузер для отклонения cookies, но это может повлиять на 
                  функциональность сайта.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gp-primary">8. Изменения в политике</h2>
                <p className="text-gp-primary/80 mb-4">
                  Мы можем обновлять данную Политику конфиденциальности. Все изменения будут 
                  опубликованы на этой странице с указанием даты последнего обновления.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gp-primary">9. Контактная информация</h2>
                <p className="text-gp-primary/80 mb-4">
                  Если у вас есть вопросы о данной Политике конфиденциальности или обработке 
                  ваших персональных данных, свяжитесь с нами:
                </p>
                <div className="glass-subtle p-4 rounded-lg">
                  <p className="text-gp-primary/80">
                    <strong>Email:</strong> privacy@gpconsulting.kz<br/>
                    <strong>Телефон:</strong> +7 (727) 123-45-67<br/>
                    <strong>Адрес:</strong> г. Алматы, ул. Абая, 123, офис 456
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
} 