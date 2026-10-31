import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { PhoneStrip } from "@/components/CtaBlocks";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";
import { site, telLink, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto y reservas",
  description: "Reserva tu servicio de limpieza, fontanería, electricidad, jardinería u organización. Presupuesto sin compromiso por WhatsApp o teléfono.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="pill">Presupuesto sin compromiso</span>
          <h1>Contacto</h1>
          <p>Escríbenos, llámanos o rellena el formulario. Te respondemos el mismo día.</p>
        </div>
      </section>

      <section id="reservar" className="section section--surface">
        <div className="container contact-grid">
          <div className="reveal">
            <h2 className="section-title" style={{ fontSize: "2rem" }}>Hablemos de <em>tu casa</em></h2>
            <p className="section-sub" style={{ marginBottom: 28 }}>
              Cuéntanos qué necesitas. Si puedes, mándanos unas fotos por WhatsApp y te damos un precio cerrado más rápido.
            </p>
            <ul className="check-list footer-contact" style={{ gap: 18 }}>
              <li><PhoneIcon /><a href={telLink}>{site.phoneDisplay}</a></li>
              <li><MailIcon /><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><PinIcon /><span>{site.location} · {site.zones.join(", ")}</span></li>
              <li><ClockIcon /><span>{site.hours}</span></li>
            </ul>
            <div className="hero-btns" style={{ marginTop: 28 }}>
              <a className="btn btn--wa" href={waLink()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> WhatsApp</a>
              <a className="btn btn--outline" href={telLink}><PhoneIcon /> Llamar</a>
            </div>
          </div>
          <div className="reveal" data-delay="1">
            <BookingForm />
          </div>
        </div>
      </section>
      <PhoneStrip />
    </>
  );
}
