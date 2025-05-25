import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/ui/navbar";
import { FooterDemo } from "@/components/footer-demo";
import { WaveBackgroundWrapper } from "@/components/ui/wave-background-wrapper";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GP Consulting | ИИ и цифровая трансформация",
  description: "Помогаем компаниям расти с помощью искусственного интеллекта и цифровой трансформации",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} font-sans`}>
        <WaveBackgroundWrapper />
        <Navbar />
        <div className="flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
          <FooterDemo />
        </div>
      </body>
    </html>
  );
}
