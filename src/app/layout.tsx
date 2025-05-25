import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { WaveBackgroundWrapper } from "@/components/ui/wave-background-wrapper";
import { Providers } from './providers';
import { Toaster } from 'sonner';

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
        <Providers>
          <WaveBackgroundWrapper />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
