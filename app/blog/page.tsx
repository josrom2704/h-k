import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog: consejos para tu hogar",
  description: "Consejos prácticos de limpieza, mantenimiento y organización del hogar del equipo de House & Keeping.",
};

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="pill">Blog</span>
          <h1>Consejos para tu hogar</h1>
          <p>Trucos y avisos de nuestro equipo para que tu casa esté siempre a punto.</p>
        </div>
      </section>
      <section className="section section--surface">
        <div className="container posts">
          {posts.map((p, i) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="post-card reveal" data-delay={String(i)}>
              <div className="post-media">
                {/* TODO: reemplazar imagen */}
                <Image src={p.image} alt={p.imageAlt} fill sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
              <div className="post-body">
                <h2>{p.title}</h2>
                <p>{p.excerpt}</p>
                <span className="post-more">Leer más →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
