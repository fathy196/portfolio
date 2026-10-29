import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return {
    name: `${site.name} — ${site.role}`,
    short_name: "Fathy",
    description: site.description,
    start_url: `${base}/`,
    display: "standalone",
    background_color: "#0b2e3a",
    theme_color: "#0f4c5c",
    icons: [{ src: `${base}/icon.svg`, sizes: "any", type: "image/svg+xml" }],
  };
}
