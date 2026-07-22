import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://getsoro.app", changeFrequency: "weekly", priority: 1 },
    { url: "https://getsoro.app/companies", changeFrequency: "weekly", priority: 0.9 },
    { url: "https://getsoro.app/market-research-nigeria", changeFrequency: "monthly", priority: 0.9 },
    { url: "https://getsoro.app/brand-research-nigeria", changeFrequency: "monthly", priority: 0.9 },
    { url: "https://getsoro.app/gen-z-research-nigeria", changeFrequency: "monthly", priority: 0.9 },
    { url: "https://getsoro.app/students", changeFrequency: "weekly", priority: 0.8 },
  ]
}
