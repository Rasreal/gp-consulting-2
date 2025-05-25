import { Service } from '@/types/service';

export const services: Service[] = [
  // Strategy
  {
    slug: 'business-strategy',
    category: 'Strategy',
    title: 'Бизнес-стратегия',
    shortDesc: 'Разработка комплексной стратегии развития бизнеса с учетом рыночных тенденций и конкурентного анализа',
    longDesc: 'Наша команда экспертов поможет вам разработать эффективную бизнес-стратегию, основанную на глубоком анализе рынка, конкурентной среды и внутренних возможностей вашей компании. Мы определим ключевые точки роста и создадим пошаговый план реализации.',
    icon: 'Target',
    kpi: [
      { label: 'Рост выручки', value: '+25%' },
      { label: 'ROI', value: '3.5x' },
    ],
    cases: [
      { name: 'TechCorp Transformation', url: '/cases/techcorp' },
      { name: 'RetailGiant Strategy', url: '/cases/retail-giant' },
    ],
  },
  {
    slug: 'digital-transformation',
    category: 'Strategy',
    title: 'Цифровая трансформация',
    shortDesc: 'Комплексная цифровизация бизнес-процессов и внедрение современных технологических решений',
    longDesc: 'Мы помогаем компаниям успешно пройти путь цифровой трансформации, внедряя современные технологии и оптимизируя бизнес-процессы. Наш подход включает аудит текущего состояния, разработку дорожной карты и поэтапное внедрение решений.',
    icon: 'Workflow',
    kpi: [
      { label: 'Эффективность', value: '+40%' },
      { label: 'Время обработки', value: '-60%' },
    ],
    cases: [
      { name: 'FinTech Modernization', url: '/cases/fintech' },
      { name: 'Manufacturing 4.0', url: '/cases/manufacturing' },
    ],
  },

  // Analytics
  {
    slug: 'data-analytics',
    category: 'Analytics',
    title: 'Аналитика данных',
    shortDesc: 'Комплексный анализ данных для принятия обоснованных бизнес-решений',
    longDesc: 'Наши аналитики помогут вам извлечь максимальную ценность из ваших данных. Мы используем передовые методы анализа и визуализации для выявления скрытых паттернов и возможностей роста.',
    icon: 'BarChart3',
    kpi: [
      { label: 'Точность прогнозов', value: '95%' },
      { label: 'Скорость принятия решений', value: '+70%' },
    ],
    cases: [
      { name: 'E-commerce Analytics', url: '/cases/ecommerce' },
      { name: 'Supply Chain Optimization', url: '/cases/supply-chain' },
    ],
  },

  // AI
  {
    slug: 'ai-solutions',
    category: 'AI',
    title: 'AI-решения',
    shortDesc: 'Внедрение искусственного интеллекта для автоматизации и оптимизации бизнес-процессов',
    longDesc: 'Мы разрабатываем и внедряем решения на базе искусственного интеллекта, которые помогают автоматизировать рутинные задачи, улучшить качество обслуживания клиентов и оптимизировать бизнес-процессы.',
    icon: 'Brain',
    kpi: [
      { label: 'Автоматизация', value: '80%' },
      { label: 'ROI', value: '4.2x' },
    ],
    cases: [
      { name: 'AI Customer Service', url: '/cases/ai-service' },
      { name: 'Predictive Maintenance', url: '/cases/predictive' },
    ],
  },

  // DevOps
  {
    slug: 'devops-implementation',
    category: 'DevOps',
    title: 'DevOps внедрение',
    shortDesc: 'Оптимизация процессов разработки и эксплуатации с применением DevOps практик',
    longDesc: 'Наша команда поможет внедрить DevOps практики в вашу организацию, что позволит ускорить разработку, повысить качество продукта и оптимизировать затраты на поддержку инфраструктуры.',
    icon: 'Code2',
    kpi: [
      { label: 'Скорость релизов', value: '+300%' },
      { label: 'Время простоя', value: '-90%' },
    ],
    cases: [
      { name: 'Cloud Migration', url: '/cases/cloud' },
      { name: 'CI/CD Implementation', url: '/cases/cicd' },
    ],
  },

  // FinOps
  {
    slug: 'finops-optimization',
    category: 'FinOps',
    title: 'FinOps оптимизация',
    shortDesc: 'Оптимизация облачных расходов и финансовое управление IT-инфраструктурой',
    longDesc: 'Мы помогаем организациям оптимизировать расходы на облачную инфраструктуру, внедряя лучшие практики FinOps и создавая прозрачную систему учета и контроля IT-затрат.',
    icon: 'Coins',
    kpi: [
      { label: 'Снижение затрат', value: '-35%' },
      { label: 'Прозрачность', value: '100%' },
    ],
    cases: [
      { name: 'Cloud Cost Optimization', url: '/cases/cloud-cost' },
      { name: 'FinOps Framework', url: '/cases/finops' },
    ],
  },
];

export const getUniqueCategories = () => {
  return Array.from(new Set(services.map(service => service.category)));
}; 