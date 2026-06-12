import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: site.seoDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf5",
    theme_color: "#556b2f",
    lang: "es",
    orientation: "portrait-primary",
    categories: ["business", "finance"],
  };
}
