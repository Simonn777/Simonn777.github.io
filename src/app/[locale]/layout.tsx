import type { Metadata } from "next";
import type * as React from "react";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";
import "../globals.css";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.zhongjia-huaqiang.com";
  const baiduSiteVerification =
    process.env.NEXT_PUBLIC_BAIDU_SITE_VERIFICATION;
  const keywords =
    locale === "zh"
      ? [
          "中钾华强",
          "中钾华强生物科技",
          "中钾华强生物科技重庆有限公司",
          "綦江化工",
          "硝酸铵钙",
          "工业级磷酸一铵",
          "磷酸二铵",
          "粒状过磷酸钙",
          "硫酸钙晶须",
          "纳米硫酸钙",
          "氟硅酸钾",
        ]
      : [
          "Zhongjia Huaqiang",
          "Zhongjia Huaqiang Biotech",
          "Qijiang chemicals",
          "calcium ammonium nitrate",
          "monoammonium phosphate",
          "diammonium phosphate",
          "calcium sulfate whisker",
          "potassium fluorosilicate",
        ];

  return {
    metadataBase: new URL(siteUrl),
    title: t("title"),
    description: t("description"),
    keywords,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "zh-CN": "/zh",
        en: "/en",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale === "zh" ? "zh_CN" : "en_US",
      siteName: t("title"),
      type: "website",
    },
    verification: baiduSiteVerification
      ? {
          other: {
            "baidu-site-verification": baiduSiteVerification,
          },
        }
      : undefined,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale === "zh" ? "zh-CN" : "en"} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
