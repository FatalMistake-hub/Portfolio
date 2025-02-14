import { products, sideProjects } from "@/constants/products";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://portfolio-fatalmistakehubs-projects.vercel.app";
  // Combine all your product slugs
  const allProducts = [...products, ...sideProjects];
  return [
    {
      url: "https://portfolio-fatalmistakehubs-projects.vercel.app",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://portfolio-fatalmistakehubs-projects.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://portfolio-fatalmistakehubs-projects.vercel.app/projects",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://portfolio-fatalmistakehubs-projects.vercel.app/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: "https://portfolio-fatalmistakehubs-projects.vercel.app/404",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: "https://portfolio-fatalmistakehubs-projects.vercel.app/projects/resumse",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...allProducts.map((product) => ({
      url: `${baseUrl}/projects/${product.slug}`,
      lastModified: new Date().toISOString(),
    })),
  ];
}
