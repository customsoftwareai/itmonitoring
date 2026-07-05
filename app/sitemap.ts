import type { MetadataRoute } from "next"

const BASE = "https://itmonitoring.com"

const ROUTES = ["", "/about", "/contact", "/careers", "/assessment", "/privacy", "/terms", "/accessibility"]

export default function sitemap(): MetadataRoute.Sitemap {
return ROUTES.map((path) => ({
url: BASE + path,
lastModified: new Date(),
changeFrequency: "monthly" as const,
priority: path === "" ? 1 : 0.7,
}))
}
