import type { MetadataRoute } from "next";

import { pageSlugs } from "@/content/pages";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.zhongjia-huaqiang.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routing.locales.flatMap((locale) => {
    const home = {
      url: `${siteUrl}/${locale}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: locale === "zh" ? 1 : 0.8,
    };

    const pages = pageSlugs.map((slug) => ({
      url: `${siteUrl}/${locale}/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: slug === "products" ? 0.9 : 0.7,
    }));

    return [home, ...pages];
  });
}
