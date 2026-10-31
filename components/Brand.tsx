import Link from "next/link";
import { site } from "@/lib/site";

/** Logo provisional (monograma + nombre). TODO: reemplazar por el logo real en /public/logo.svg si lo tienes. */
export default function Brand({ tagline = false }: { tagline?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label={`${site.name} — inicio`}>
      <span className="brand-mark" aria-hidden="true">H&amp;K</span>
      <span className="brand-text">
        <span className="brand-name">{site.name}</span>
        {tagline && <span className="brand-tag">{site.tagline}</span>}
      </span>
    </Link>
  );
}
