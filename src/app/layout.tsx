import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://seu-dominio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Lucas Orse | Desenvolvedor Full Stack",
    description:
      "Automações, APIs e sistemas que eliminam trabalho manual e aumentam eficiência.",
    url: "/",
    siteName: "Lucas Orse Portfolio",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/nova-operations.png",
        width: 1200,
        height: 630,
        alt: "Portfolio de Lucas Orse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Orse | Desenvolvedor Full Stack",
    description:
      "Automações, APIs e sistemas web para reduzir tarefas manuais e aumentar produtividade.",
    images: ["/images/nova-operations.png"],
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

        className="min-h-screen bg-[#09090B] text-white antialiased"
      >
        {children}
      </body>
    </html>
  );
}