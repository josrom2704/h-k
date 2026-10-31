import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/site";

type Props = { service: Service; index?: number; headingLevel?: "h2" | "h3" };

export default function ServiceCard({ service, index = 0, headingLevel = "h3" }: Props) {
  const Heading = headingLevel;
  return (
    <Link href={`/servicios/${service.slug}`} className="svc-card reveal" data-delay={String(index % 3)}>
      {/* TODO: reemplazar imagen (se define en lib/site.ts) */}
      <Image src={service.image} alt={service.imageAlt} fill sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw" />
      <span className="svc-badge">{service.price}</span>
      <Heading className="svc-title">{service.title}</Heading>
      <p className="svc-desc">{service.short}</p>
      <span className="btn btn--light btn--sm">Ver servicio</span>
    </Link>
  );
}
