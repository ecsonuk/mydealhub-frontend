import { MetadataRoute } from "next";

const BASE_URL = "https://www.hub4deals.com";
const API_URL = "https://mydealhub-api-production.up.railway.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/deals`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/merchants`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/categories`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  try {
    const [merchantRes, categoryRes] = await Promise.all([
      fetch(
        `${API_URL}/api/merchants?page=1&limit=1000`,
        { next: { revalidate: 86400 } }
      ),
      fetch(
        `${API_URL}/api/categories?page=1&limit=1000`,
        { next: { revalidate: 86400 } }
      ),
    ]);

    const merchantsJson = await merchantRes.json();
    const categoriesJson = await categoryRes.json();

    const merchantUrls =
      merchantsJson?.data?.map((merchant: any) => ({
        url: `${BASE_URL}/merchant/${merchant.merchant_id}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      })) || [];

    const categoryUrls =
      categoriesJson?.data?.map((category: any) => ({
        url: `${BASE_URL}/category/${category.category_id}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      })) || [];

    return [
      ...staticPages,
      ...merchantUrls,
      ...categoryUrls,
    ];
  } catch (error) {
    console.error("Sitemap generation failed:", error);
    return staticPages;
  }
}
