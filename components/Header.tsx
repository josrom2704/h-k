"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Brand from "./Brand";
import { CloseIcon, MenuIcon, PlusIcon } from "./Icons";
import { services } from "@/lib/site";

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileSvcOpen, setMobileSvcOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  // Cerrar menús al cambiar de página
  useEffect(() => {
    setMobileOpen(false);
    setDropOpen(false);
    setMobileSvcOpen(false);
  }, [pathname]);

  // Cerrar desplegable al hacer clic fuera o pulsar Escape
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const svcActive = pathname.startsWith("/servicios");

  return (
    <header className="header">
      <div className="header-bar">
        <Brand />

        <nav className="nav" aria-label="Principal">
          <Link href="/" className={`nav-link ${isActive("/") ? "is-active" : ""}`}>Inicio</Link>
          <div className="dropdown" ref={dropRef}>
            <button
              type="button"
              className={`nav-link ${svcActive ? "is-active" : ""}`}
              aria-expanded={dropOpen}
              aria-controls="menu-servicios"
              onClick={() => setDropOpen((o) => !o)}
            >
              Servicios <PlusIcon className="nav-plus" />
            </button>
            {dropOpen && (
              <ul className="dropdown-panel" id="menu-servicios">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/servicios/${s.slug}`} className={pathname === `/servicios/${s.slug}` ? "is-active" : ""}>
                      {s.title}
                    </Link>
                  </li>
                ))}
                <li className="dropdown-divider" role="separator" />
                <li><Link href="/servicios" className="dropdown-all">Ver todos los servicios →</Link></li>
              </ul>
            )}
          </div>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`nav-link ${isActive(l.href) ? "is-active" : ""}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/contacto#reservar" className="header-cta">Reservar</Link>

        <button
          type="button"
          className="burger"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          aria-controls="menu-movil"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="mobile-menu" id="menu-movil" aria-label="Menú móvil">
          <Link href="/" className={`nav-link ${isActive("/") ? "is-active" : ""}`}>Inicio</Link>
          <button
            type="button"
            className={`nav-link ${svcActive ? "is-active" : ""}`}
            aria-expanded={mobileSvcOpen}
            onClick={() => setMobileSvcOpen((o) => !o)}
          >
            Servicios <PlusIcon className="nav-plus" />
          </button>
          {mobileSvcOpen && (
            <ul className="mobile-sub">
              {services.map((s) => (
                <li key={s.slug}><Link href={`/servicios/${s.slug}`}>{s.title}</Link></li>
              ))}
              <li><Link href="/servicios">Ver todos →</Link></li>
            </ul>
          )}
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`nav-link ${isActive(l.href) ? "is-active" : ""}`}>
              {l.label}
            </Link>
          ))}
          <Link href="/contacto#reservar" className="btn btn--accent">Reservar</Link>
        </nav>
      )}
    </header>
  );
}
