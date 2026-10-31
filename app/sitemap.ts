import type { MetadataRoute } from "next";
import { posts, services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/servicios",
    ...services.map((s) => `/servicios/${s.slug}`),
    "/blog",
    ...posts.map((p) => `/blog/${p.slug}`),
    "/preguntas-frecuentes",
    "/contacto",
  ];
  return paths.map((p) => ({ url: `${site.url}${p}` }));
}
