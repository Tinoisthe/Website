import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Neon Next Generation",
    short_name: "NeonNextGen",
    description: "Australian VPS, containers and web hosting.",
    start_url: "/",
    display: "standalone",
    background_color: "#050208",
    theme_color: "#050208",
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
