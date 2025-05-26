import { SolutionsGrid } from "@/components/solutions-grid";
import { ApproachSection } from "@/components/approach-section";
import { PageHeader } from "../../../components/ui/page-header";

export default function SolutionsPage() {
  return (
    <>
      <PageHeader 
        title="Решения" 
        description="Мы предлагаем комплексные решения для бизнеса любого масштаба"
      />
      <SolutionsGrid />
      <ApproachSection />
    </>
  );
} 