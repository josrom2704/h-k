import { PhoneIcon, WhatsAppIcon } from "./Icons";
import { site, telLink, waLink } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={waLink("Hola House & Keeping, me gustaría información sobre vuestros servicios.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}

export function UrgencyBanner() {
  return (
    <section className="section" aria-labelledby="urgente-title">
      <div className="container">
        <div className="urgent reveal">
          <div>
            <h2 id="urgente-title">¿Necesitas ayuda hoy?</h2>
            <p>
              Una fuga, un enchufe que no funciona o visitas que llegan mañana. Escríbenos y te
              damos hueco lo antes posible.
            </p>
          </div>
          <div className="urgent-btns">
            <a className="btn btn--wa" href={waLink("Hola, necesito un servicio urgente hoy.")} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> WhatsApp
            </a>
            <a className="btn btn--dark" href={telLink}>
              <PhoneIcon /> Llamar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PhoneStrip() {
  return (
    <div className="phone-strip">
      <div className="container phone-strip-inner">
        <div className="phone-strip-text">
          <p className="phone-strip-label">¿NECESITAS SERVICIO URGENTE?</p>
          <a className="phone-strip-number" href={telLink}>{site.phoneDisplay}</a>
        </div>
        <div className="phone-strip-btns">
          <a className="btn btn--dark" href={telLink}><PhoneIcon /> Llamar</a>
          <a className="btn btn--wa" href={waLink("Hola, necesito un servicio urgente.")} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
