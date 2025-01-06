import { _siteConfig } from "@/config/site";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let siteList = [
    {
      url: _siteConfig.domain,
      changefreq: "daily",
      priority: 1.0,
    },
  ];

  // Add more routes here
  const staticRoute = _siteConfig.menuLinks.map((link) => ({
    url: link.href,
    changefreq: "weekly",
    priority: 0.8,
  }));

  siteList = [...siteList, ...staticRoute];

  siteList = siteList.map((route) => ({
    ...route,
    loc: `${_siteConfig.domain}${route.url}`,
  }));

  return siteList;
}
