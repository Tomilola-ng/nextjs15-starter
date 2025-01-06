import { _siteConfig } from "@/config/site";
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: _siteConfig.name,
    description: _siteConfig.desc,
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
  };
}
