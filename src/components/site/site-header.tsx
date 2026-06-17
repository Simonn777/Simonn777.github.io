"use client";

import { buttonVariants } from "@/components/ui/button";
import { pageSlugs } from "@/content/pages";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import type { Locale } from "@/i18n/routing";
import type { SiteMessages } from "@/content/home";

type SiteHeaderProps = {
  locale: Locale;
  site: SiteMessages;
};

const navTargets = pageSlugs;

export function SiteHeader({ locale, site }: SiteHeaderProps) {
  const nextLocale: Locale = locale === "zh" ? "en" : "zh";

  return (
    <header className="sticky top-0 z-40 border-b bg-background/98 shadow-[0_1px_0_rgb(214_229_234_/_70%)] backdrop-blur transition-shadow duration-300">
      <div className="hidden bg-brand-dark text-white/76 lg:block">
        <div className="mx-auto flex h-8 w-full max-w-7xl items-center justify-end gap-5 px-8 text-xs">
          <span className="max-w-[44rem] truncate">{site.footer.note}</span>
          <a className="hover:text-white" href={site.footer.contactHref ?? "#"}>
            {site.footer.contact}
          </a>
          <Link
            className="font-medium text-white hover:text-white/86"
            href="/"
            locale={nextLocale}
          >
            {site.language}
          </Link>
        </div>
      </div>

      <div className="relative mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link className="flex min-w-0 items-center gap-3" href="/">
          <Image
            alt=""
            aria-hidden="true"
            className="h-12 w-12 shrink-0 rounded-[8px]"
            height={48}
            src="/images/brand/zhongjia-icon.svg"
            unoptimized
            width={48}
          />
          <span className="min-w-0 max-w-[7rem] sm:max-w-none">
            <span className="block truncate text-sm font-semibold leading-5">
              {site.brand}
            </span>
            <span className="hidden text-xs text-muted-foreground sm:block">
              {site.company}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navTargets.map((key) => (
            <Link
              className="relative py-6 text-sm font-semibold text-muted-foreground transition duration-200 after:absolute after:inset-x-0 after:bottom-4 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-200 hover:text-foreground hover:after:scale-x-100"
              href={`/${key}`}
              key={key}
            >
              {site.nav[key]}
            </Link>
          ))}
        </nav>

        <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-2 sm:right-6 lg:static lg:translate-y-0">
          <span className="hidden sm:block">
            <Link
              className={buttonVariants({
                className: "h-10 px-4",
                size: "sm",
              })}
              href="/contact"
            >
              {site.cta}
            </Link>
          </span>
        </div>
      </div>

      <nav className="hide-scrollbar flex overflow-x-auto border-t bg-background px-4 lg:hidden">
        {navTargets.map((key) => (
          <Link
            className="shrink-0 px-3 py-3 text-sm font-semibold text-muted-foreground"
            href={`/${key}`}
            key={key}
          >
            {site.nav[key]}
          </Link>
        ))}
      </nav>
    </header>
  );
}
