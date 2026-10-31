import type { Metadata } from "next";
import { PhoneStrip, UrgencyBanner } from "@/components/CtaBlocks";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description: "Resolvemos tus dudas sobre presupuestos, precios, garantía y zonas de servicio de House & Keeping.",
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="page-hero">
        <div className="container">
          <span className="pill">Dudas</span>
          <h1>Preguntas frecuentes</h1>
          <p>Si no encuentras tu respuesta aquí, escríbenos por WhatsApp y te contestamos enseguida.</p>
        </div>
      </section>
      <section className="section section--surface">
        <div className="container faq-list">
          {faqs.map((f, i) => (
            <details key={f.q} className="faq-item reveal" open={i === 0}>
              <summary><h2 style={{ font: "inherit", color: "inherit" }}>{f.q}</h2></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <UrgencyBanner />
      <PhoneStrip />
    </>
  );
}
