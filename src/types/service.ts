export type Service = {
  slug: string;
  category: 'Strategy' | 'Analytics' | 'Product' | 'AI' | 'Marketing' | 'IT' | 'FinOps' | 'DevOps';
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  kpi: { label: string; value: string }[];
  cases: { name: string; url: string }[];
}; 