import { getMessages, setRequestLocale } from "next-intl/server";

import { BusinessSection } from "@/components/sections/business-section";
import { CapabilityMarqueeSection } from "@/components/sections/capability-marquee-section";
import { HomeHero } from "@/components/sections/home-hero";
import { NewsSection } from "@/components/sections/news-section";
import { ProductsSection } from "@/components/sections/products-section";
import { ProjectVisualSection } from "@/components/sections/project-visual-section";
import { QualitySection } from "@/components/sections/quality-section";
import { ServicePathSection } from "@/components/sections/service-path-section";
import { VisualScenesSection } from "@/components/sections/visual-scenes-section";
import { SiteShell } from "@/components/site/site-shell";
import type { HomeMessages, SiteMessages } from "@/content/home";
import type { Locale } from "@/i18n/routing";

type HomePageProps = {
  params: Promise<{ locale: Locale }>;
};

type PageMessages = {
  HomePage: HomeMessages;
  Site: SiteMessages;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const messages = (await getMessages()) as unknown as PageMessages;
  const home = messages.HomePage;

  return (
    <SiteShell locale={locale} site={messages.Site}>
      <main>
        <HomeHero hero={home.hero} />
        <CapabilityMarqueeSection capabilities={home.capabilities} />
        <BusinessSection overview={home.overview} />
        <ProjectVisualSection project={home.project} />
        <ProductsSection products={home.products} />
        <VisualScenesSection visualScenes={home.visualScenes} />
        <QualitySection quality={home.quality} />
        <ServicePathSection servicePath={home.servicePath} />
        <NewsSection news={home.news} />
      </main>
    </SiteShell>
  );
}
