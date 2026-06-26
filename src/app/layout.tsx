import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucas Orse | Desenvolvedor Full Stack & Automações",
  description:
    "Desenvolvedor especializado em automações, APIs, sistemas web e dashboards. Ajudo empresas a reduzir tarefas manuais e aumentar produtividade.",
  keywords: [
    "desenvolvedor full stack",
    "automação",
    "node.js",
    "next.js",
    "apis",
    "freelancer",
  ],
  authors: [{ name: "Lucas Orse" }],
  openGraph: {
    title: "Lucas Orse | Desenvolvedor Full Stack",
    description:
      "Automações, APIs e sistemas que eliminam trabalho manual e aumentam eficiência.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#09090B] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}