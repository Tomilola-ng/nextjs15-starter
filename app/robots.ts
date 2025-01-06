import { _siteConfig } from "@/config/site";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "admin/",
    },
    sitemap: _siteConfig.domain + "/sitemap.xml",
  };
}
