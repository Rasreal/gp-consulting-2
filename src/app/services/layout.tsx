import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Услуги | GP Consulting',
  description:
    'Каталог решений GP Consulting: стратегия, аналитика, AI, FinOps, DevOps и другое',
  openGraph: { type: 'website', url: '/services' },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 