import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Camelus33 - 나만의 완벽한 독서 습관 만들기",
  description: "GPS 기반 독서 앱, 제텔카스텐 메모 시스템, 33일간 독서루틴 시즌제로 완벽한 독서 습관을 만들어보세요.",
  keywords: ["독서앱", "독서습관", "제텔카스텐", "GPS독서", "독서루틴"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${inter.variable} ${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
