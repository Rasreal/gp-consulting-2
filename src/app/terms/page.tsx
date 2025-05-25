"use client";

import { motion } from "framer-motion";
import { PageTemplate } from "@/components/ui/page-template";

export default function TermsPage() {
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
              Условия использования
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
                <h2 className="text-2xl font-semibold mb-4 text-gp-primary">1. Принятие условий</h2>
                <p className="text-gp-primary/80 mb-4">
                  Используя веб-сайт GP Consulting и наши услуги, вы соглашаетесь соблюдать данные 
                  Условия использования. Если вы не согласны с какими-либо из этих условий, 
                  пожалуйста, не используйте наш сайт.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gp-primary">2. Описание услуг</h2>
                <p className="text-gp-primary/80 mb-4">
                  GP Consulting предоставляет консультационные услуги в области цифровой трансформации, 
                  искусственного интеллекта, аналитики данных и других технологических решений для бизнеса.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gp-primary">3. Использование сайта</h2>
                <p className="text-gp-primary/80 mb-4">Вы обязуетесь:</p>
                <ul className="list-disc list-inside space-y-2 text-gp-primary/80 mb-4">
                  <li>Использовать сайт только в законных целях</li>
                  <li>Не нарушать права интеллектуальной собственности</li>
                  <li>Не передавать вредоносное программное обеспечение</li>
                  <li>Предоставлять точную и актуальную информацию</li>
                  <li>Не использовать сайт для спама или мошенничества</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gp-primary">4. Интеллектуальная собственность</h2>
                <p className="text-gp-primary/80 mb-4">
                  Все материалы на сайте, включая тексты, изображения, логотипы, дизайн и программное 
                  обеспечение, являются собственностью GP Consulting или используются с разрешения 
                  правообладателей и защищены законами об авторском праве.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gp-primary">5. Конфиденциальность</h2>
                <p className="text-gp-primary/80 mb-4">
                  Обработка ваших персональных данных регулируется нашей Политикой конфиденциальности, 
                  которая является неотъемлемой частью данных Условий использования.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gp-primary">6. Ограничение ответственности</h2>
                <p className="text-gp-primary/80 mb-4">
                  GP Consulting не несет ответственности за любые прямые, косвенные, случайные или 
                  последующие убытки, возникшие в результате использования или невозможности 
                  использования нашего сайта или услуг.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gp-primary">7. Изменения в услугах</h2>
                <p className="text-gp-primary/80 mb-4">
                  Мы оставляем за собой право изменять, приостанавливать или прекращать любые 
                  аспекты нашего сайта или услуг в любое время без предварительного уведомления.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gp-primary">8. Применимое право</h2>
                <p className="text-gp-primary/80 mb-4">
                  Данные Условия использования регулируются законодательством Республики Казахстан. 
                  Все споры подлежат рассмотрению в судах города Алматы.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gp-primary">9. Изменения условий</h2>
                <p className="text-gp-primary/80 mb-4">
                  Мы можем обновлять данные Условия использования. Продолжение использования сайта 
                  после внесения изменений означает ваше согласие с новыми условиями.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gp-primary">10. Контактная информация</h2>
                <p className="text-gp-primary/80 mb-4">
                  По вопросам, связанным с данными Условиями использования, обращайтесь к нам:
                </p>
                <div className="glass-subtle p-4 rounded-lg">
                  <p className="text-gp-primary/80">
                    <strong>Email:</strong> legal@gpconsulting.kz<br/>
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