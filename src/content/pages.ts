export const pageSlugs = [
  "about",
  "products",
  "industry",
  "quality",
  "news",
  "contact",
] as const;

export type PageSlug = (typeof pageSlugs)[number];

export function isPageSlug(slug: string): slug is PageSlug {
  return pageSlugs.includes(slug as PageSlug);
}

