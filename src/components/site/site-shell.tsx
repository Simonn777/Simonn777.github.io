import type * as React from "react";

import { HashScroller } from "@/components/site/hash-scroller";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { SiteMotion } from "@/components/site/site-motion";
import type { SiteMessages } from "@/content/home";
import type { Locale } from "@/i18n/routing";

type SiteShellProps = {
  children: React.ReactNode;
  locale: Locale;
  site: SiteMessages;
};

export function SiteShell({ children, locale, site }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HashScroller />
      <SiteMotion />
      <SiteHeader locale={locale} site={site} />
      {children}
      <SiteFooter site={site} />
    </div>
  );
}
