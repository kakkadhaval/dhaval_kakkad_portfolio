import type { MetadataRoute } from "next";

const siteUrl = "https://dhavalkakkad.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/research", "/projects", "/contact"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
