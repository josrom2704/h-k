import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/Reveal";
import { WhatsAppFloat } from "@/components/CtaBlocks";
import { site } from "@/lib/site";

// next/font descarga las fuentes de Google en el build y las sirve desde tu propio dominio
// (sin peticiones a fonts.googleapis.com, así que no hace falta preconnect y no hay saltos de layout).
const archivo = Archivo({ subsets: ["latin"], weight: ["600", "700", "800", "900"], variable: "--font-archivo", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "House & Keeping | Limpieza y mantenimiento del hogar",
    template: "%s | House & Keeping",
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: site.name,
    title: "House & Keeping | Tu casa, impecable hoy",
    description: site.description,
    // TODO: reemplazar imagen (imagen para compartir en redes, 1200x630)
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = { themeColor: "#0d47a1" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${archivo.variable} ${inter.variable}`}>
      <head>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <RevealObserver />
      </body>
    </html>
  );
}
