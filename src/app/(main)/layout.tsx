import { Navbar } from "@/components/ui/navbar";
import { FooterDemo } from "@/components/footer-demo";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <FooterDemo />
    </div>
  );
} 