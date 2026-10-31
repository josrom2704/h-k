import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { UrgencyBanner } from "@/components/CtaBlocks";
import { posts } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.excerpt } : {};
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="pill">Blog</span>
          <h1>{p.title}</h1>
          <p>{p.excerpt}</p>
        </div>
      </section>
      <section className="section section--surface">
        <article className="container prose">
          <div className="detail-media" style={{ marginBottom: 32 }}>
            {/* TODO: reemplazar imagen */}
            <Image src={p.image} alt={p.imageAlt} fill priority sizes="(min-width: 768px) 720px, 100vw" />
          </div>
          {p.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <Link href="/blog" className="btn btn--outline" style={{ marginTop: 16 }}>← Volver al blog</Link>
        </article>
      </section>
      <UrgencyBanner />
    </>
  );
}
