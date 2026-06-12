import type { MetadataRoute } from "next";
import { absoluteUrl, indexableRoutes } from "@/lib/seo";
import { legal } from "@/lib/legal";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(legal.lastUpdated);

  return indexableRoutes.map(({ path, priority, changeFrequency }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
