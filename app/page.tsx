import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import { PhoneStrip, UrgencyBanner } from "@/components/CtaBlocks";
import { BoltIcon, CheckIcon, ListIcon, PhoneIcon, ShieldIcon, WhatsAppIcon } from "@/components/Icons";
import { images, services, site, steps, telLink, testimonials, waLink } from "@/lib/site";

export default function Home() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phoneHref,
    email: site.email,
    areaServed: site.zones,
    sameAs: [site.social.instagram, site.social.tiktok],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />

      {/* ===== 2. HERO ===== */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media">
          {/* TODO: reemplazar imagen */}
          <Image src={images.hero} alt="Profesional de House & Keeping limpiando una ventana en un hogar" fill priority sizes="100vw" />
          <div className="hero-overlay" />
        </div>
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="pill pill--sky">Presupuesto sin compromiso</span>
            <h1 id="hero-title" className="hero-title">
              <span>Tu casa,</span>
              <span className="accent">impecable hoy.</span>
            </h1>
            <p className="hero-lead">
              Limpieza, fontanería, electricidad, jardinería y organización del hogar. Un solo equipo
              de confianza, precio cerrado y garantía en cada visita.
            </p>
            <div className="hero-btns">
              <a className="btn btn--wa" href={waLink("Hola House & Keeping, quiero pedir un presupuesto sin compromiso.")} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Escribir por WhatsApp
              </a>
              <a className="btn btn--ghost" href={telLink}>
                <PhoneIcon /> Llamar
              </a>
            </div>
            <dl className="hero-stats">
              <div><dt className="sr-only">Servicios</dt><dd style={{ margin: 0 }}><strong>5</strong><span>servicios del hogar</span></dd></div>
              <div><dt className="sr-only">Presupuesto</dt><dd style={{ margin: 0 }}><strong>Gratis</strong><span>presupuesto sin compromiso</span></dd></div>
              <div><dt className="sr-only">Garantía</dt><dd style={{ margin: 0 }}><strong>100%</strong><span>garantía de satisfacción</span></dd></div>
            </dl>
          </div>
        </div>
      </section>

      {/* ===== 3. SERVICIOS ===== */}
      <section id="servicios" className="section section--surface notch" style={{ ["--notch-color" as string]: "var(--navy)" }} aria-labelledby="servicios-title">
        <div className="container">
          <div className="section-head reveal">
            <span className="pill pill--outline">Nuestros servicios</span>
            <h2 id="servicios-title" className="section-title">Lo que hacemos <em>por ti</em></h2>
            <p className="section-sub">Cinco servicios, un mismo equipo y el mismo cuidado en cada rincón de tu casa.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. CÓMO TRABAJAMOS ===== */}
      <section className="section section--alt notch" style={{ ["--notch-color" as string]: "var(--surface)" }} aria-labelledby="como-title">
        <div className="container how">
          <div className="how-media reveal">
            {/* TODO: reemplazar imagen */}
            <Image src={images.process} alt="Mano con guante aplicando producto de limpieza" fill sizes="(min-width: 960px) 40vw, 100vw" />
          </div>
          <div>
            <span className="pill pill--outline reveal">Cómo trabajamos</span>
            <h2 id="como-title" className="section-title reveal">Sin sorpresas, <em>de principio a fin</em></h2>
            <p className="section-sub reveal">Así es como trabajamos en cada servicio, sea una limpieza o una reparación.</p>
            <div className="how-steps">
              {steps.map((s, i) => (
                <div key={s.n} className="step reveal" data-delay={String(i)}>
                  <span className="step-n" aria-hidden="true">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. NUESTRO COMPROMISO ===== */}
      <section className="section section--surface" aria-labelledby="compromiso-title">
        <div className="container">
          <div className="section-head reveal">
            <span className="pill pill--outline">Por qué elegirnos</span>
            <h2 id="compromiso-title" className="section-title">Nuestro compromiso <em>contigo</em></h2>
            <p className="section-sub">Entramos en tu casa, y eso lo tratamos con el respeto que merece.</p>
          </div>
          <div className="commit-grid">
            <article className="commit-card reveal">
              <div className="icon-ring"><ShieldIcon /></div>
              <h3>Garantía total</h3>
              <p>Si algo no queda como acordamos, volvemos y lo arreglamos sin coste. Respondemos por cada trabajo que hacemos.</p>
            </article>
            <article className="commit-card reveal" data-delay="1">
              <div className="icon-ring"><BoltIcon /></div>
              <h3>Respuesta rápida</h3>
              <p>Te contestamos el mismo día y, para urgencias, buscamos hueco lo antes posible. Sin esperas eternas.</p>
            </article>
            <article className="commit-card reveal" data-delay="2">
              <div className="icon-ring"><ListIcon /></div>
              <h3>Lo que incluye</h3>
              <ul className="check-list">
                <li><CheckIcon /> Presupuesto gratis y por escrito</li>
                <li><CheckIcon /> Productos y herramientas incluidos</li>
                <li><CheckIcon /> Puntualidad y trato respetuoso</li>
                <li><CheckIcon /> Todo limpio y recogido al terminar</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Testimonios (de la web actual) */}
      <section className="section section--alt" aria-labelledby="opiniones-title">
        <div className="container">
          <div className="section-head reveal">
            <span className="pill pill--outline">Opiniones</span>
            <h2 id="opiniones-title" className="section-title">Lo que dicen <em>nuestros clientes</em></h2>
          </div>
          <div className="quotes">
            {testimonials.map((t, i) => (
              <figure key={t.author} className="quote reveal" data-delay={String(i)}>
                <div className="quote-stars" aria-label="5 de 5 estrellas">★★★★★</div>
                <blockquote style={{ margin: 0 }}><p>“{t.text}”</p></blockquote>
                <figcaption><cite>— {t.author}</cite></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. BANNER DE URGENCIA ===== */}
      <UrgencyBanner />

      {/* ===== 7. FRANJA DE TELÉFONO ===== */}
      <PhoneStrip />
    </>
  );
}
