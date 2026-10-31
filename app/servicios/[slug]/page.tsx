import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PhoneStrip } from "@/components/CtaBlocks";
import { CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import ServiceCard from "@/components/ServiceCard";
import { services, steps, telLink, waLink } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: s.title, description: `${s.short} ${s.price}. Presupuesto sin compromiso con House & Keeping.` };
}

export default async function ServicioPage({ params }: Params) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="pill">{s.price}</span>
          <h1>{s.title}</h1>
          <p>{s.short}</p>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container detail">
          <div>
            <div className="detail-media reveal">
              {/* TODO: reemplazar imagen */}
              <Image src={s.image} alt={s.imageAlt} fill priority sizes="(min-width: 960px) 60vw, 100vw" />
            </div>
            <p className="detail-text">{s.description}</p>
            <h2 className="section-title" style={{ fontSize: "1.75rem", marginBottom: 18 }}>Qué incluye</h2>
            <ul className="check-list">
              {s.includes.map((item) => (
                <li key={item}><CheckIcon /> {item}</li>
              ))}
            </ul>
            <h2 className="section-title" style={{ fontSize: "1.75rem", margin: "40px 0 0" }}>Cómo trabajamos</h2>
            <div className="how-steps">
              {steps.map((st) => (
                <div key={st.n} className="step">
                  <span className="step-n" aria-hidden="true">{st.n}</span>
                  <h3>{st.title}</h3>
                  <p>{st.text}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="aside-card">
            <span className="label">Precio</span>
            <p className="price">{s.price}</p>
            <p style={{ color: "var(--text-2)" }}>Cuéntanos qué necesitas y te enviamos un presupuesto cerrado, sin compromiso.</p>
            <a className="btn btn--wa" href={waLink(`Hola House & Keeping, quiero un presupuesto para: ${s.title}.`)} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> Pedir presupuesto
            </a>
            <a className="btn btn--outline" href={telLink}><PhoneIcon /> Llamar</a>
            <Link className="btn btn--accent" href="/contacto#reservar">Reservar</Link>
          </aside>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Otros <em>servicios</em></h2>
          </div>
          <div className="services-grid">
            {others.map((o, i) => (
              <ServiceCard key={o.slug} service={o} index={i} />
            ))}
          </div>
        </div>
      </section>
      <PhoneStrip />
    </>
  );
}
