import Link from "next/link";
import Brand from "./Brand";
import { InstagramIcon, MailIcon, PhoneIcon, PinIcon, TikTokIcon, ClockIcon } from "./Icons";
import { services, site, telLink } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand tagline />
            <p>
              Limpieza, fontanería, electricidad, jardinería y organización para tu hogar.
              Profesionalismo con trato humano, precio cerrado y garantía en cada trabajo.
            </p>
            <div className="footer-divider" aria-hidden="true">◆ ◆ ◆</div>
            <p className="footer-zones">
              <strong>Zonas que atendemos:</strong> {site.zones.join(", ")} y alrededores.
            </p>
            <div className="footer-social">
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram de House & Keeping"><InstagramIcon /></a>
              <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok de House & Keeping"><TikTokIcon /></a>
            </div>
          </div>

          <div>
            <h3>Servicios</h3>
            <ul>
              {services.map((s) => (
                <li key={s.slug}><Link href={`/servicios/${s.slug}`}>{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Empresa</h3>
            <ul>
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/servicios">Servicios</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/preguntas-frecuentes">Preguntas frecuentes</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
              <li><Link href="/contacto#reservar">Reservar</Link></li>
            </ul>
          </div>

          <div>
            <h3>Contacto</h3>
            <ul className="footer-contact">
              <li><PhoneIcon /><a href={telLink}>{site.phoneDisplay}</a></li>
              <li><MailIcon /><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><PinIcon /><span>{site.location}</span></li>
              <li><ClockIcon /><span>{site.hours}</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} {site.name}. Todos los derechos reservados.</span>
          <span className="status-dot">Garantía en todos los trabajos</span>
        </div>
      </div>
    </footer>
  );
}
