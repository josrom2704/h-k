import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ paddingBottom: 120 }}>
      <div className="container">
        <span className="pill">Error 404</span>
        <h1>Página no encontrada</h1>
        <p>La página que buscas no existe o se ha movido.</p>
        <Link href="/" className="btn btn--accent" style={{ marginTop: 28 }}>Volver al inicio</Link>
      </div>
    </section>
  );
}
