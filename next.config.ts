import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // TODO: cuando reemplaces las fotos de Unsplash por las tuyas (en /public), puedes quitar esto.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
