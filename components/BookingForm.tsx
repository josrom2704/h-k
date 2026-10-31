"use client";

import { useState, type FormEvent } from "react";
import { WhatsAppIcon } from "./Icons";
import { services, waLink } from "@/lib/site";

/** Formulario de reserva: compone un mensaje y lo abre en WhatsApp (como en la web anterior). */
export default function BookingForm() {
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const nombre = get("nombre");
    const telefono = get("telefono");
    const servicio = get("servicio");
    const zona = get("zona");
    const mensaje = get("mensaje");

    if (!nombre || !telefono || !servicio) {
      setError("Por favor, completa tu nombre, teléfono y el servicio que necesitas.");
      return;
    }
    setError("");

    const texto =
      `Hola House & Keeping, soy ${nombre}.\n` +
      `Servicio: ${servicio}\n` +
      (zona ? `Zona: ${zona}\n` : "") +
      `Teléfono: ${telefono}\n` +
      (mensaje ? `Detalles: ${mensaje}` : "");

    window.open(waLink(texto), "_blank", "noopener,noreferrer");
    e.currentTarget.reset();
  }

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate>
      <h2 className="section-title" style={{ fontSize: "1.75rem", marginBottom: 20 }}>Reserva tu servicio</h2>
      <div className="form-grid">
        <div className="form-grid form-grid--2">
          <div className="field">
            <label htmlFor="nombre">Nombre</label>
            <input id="nombre" name="nombre" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="telefono">Teléfono</label>
            <input id="telefono" name="telefono" type="tel" autoComplete="tel" required />
          </div>
        </div>
        <div className="form-grid form-grid--2">
          <div className="field">
            <label htmlFor="servicio">Servicio</label>
            <select id="servicio" name="servicio" required defaultValue="">
              <option value="" disabled>Elige un servicio</option>
              {services.map((s) => (
                <option key={s.slug} value={s.title}>{s.title}</option>
              ))}
              <option value="Varios servicios">Varios servicios</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="zona">Zona o barrio</label>
            <input id="zona" name="zona" autoComplete="address-level2" />
          </div>
        </div>
        <div className="field">
          <label htmlFor="mensaje">¿Qué necesitas y cuándo?</label>
          <textarea id="mensaje" name="mensaje" rows={4} />
        </div>
      </div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button type="submit" className="btn btn--wa" style={{ marginTop: 20, width: "100%" }}>
        <WhatsAppIcon /> Enviar por WhatsApp
      </button>
      <p className="form-note">Se abrirá WhatsApp con tu mensaje listo para enviar. Te respondemos con un presupuesto sin compromiso.</p>
    </form>
  );
}
