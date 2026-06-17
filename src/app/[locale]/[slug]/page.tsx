import type { Metadata } from "next";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { ContentPage } from "@/components/pages/content-page";
import { SiteShell } from "@/components/site/site-shell";
import type { DetailPageMessages, SiteMessages } from "@/content/home";
import { isPageSlug, pageSlugs, type PageSlug } from "@/content/pages";
import { routing, type Locale } from "@/i18n/routing";

type DetailPageProps = {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
};

type DetailMessages = {
  Pages: Record<PageSlug, DetailPageMessages>;
  Site: SiteMessages;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    pageSlugs.map((slug) => ({
      locale,
      slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: DetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isPageSlug(slug)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: `Pages.${slug}` });

  return {
    title: t("title"),
    description: t("lead"),
    alternates: {
      canonical: `/${locale}/${slug}`,
      languages: {
        "zh-CN": `/zh/${slug}`,
        en: `/en/${slug}`,
      },
    },
  };
}

export default async function DetailPage({ params }: DetailPageProps) {
  const { locale, slug } = await params;

  if (!isPageSlug(slug)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = (await getMessages()) as unknown as DetailMessages;
  const page = messages.Pages[slug];

  return (
    <SiteShell locale={locale} site={messages.Site}>
      <ContentPage page={page} />
    </SiteShell>
  );
}

