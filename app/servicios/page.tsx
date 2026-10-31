import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import { PhoneStrip, UrgencyBanner } from "@/components/CtaBlocks";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Limpieza de hogar, fontanería, electricidad, jardinería y organización del hogar. Precio cerrado y garantía de satisfacción.",
};

export default function ServiciosPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="pill">5 servicios · un solo equipo</span>
          <h1>Nuestros servicios</h1>
          <p>Todo lo que tu casa necesita, con presupuesto sin compromiso y precio cerrado.</p>
        </div>
      </section>
      <section className="section section--surface">
        <div className="container">
          <div className="services-grid">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} headingLevel="h2" />
            ))}
          </div>
        </div>
      </section>
      <UrgencyBanner />
      <PhoneStrip />
    </>
  );
}
