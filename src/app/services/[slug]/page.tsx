import { services } from '@/data/services';
import { notFound } from 'next/navigation';
import { ServicePageClient } from './service-page-client';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} />;
} 