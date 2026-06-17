import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import type { HomeMessages } from "@/content/home";
import { Link } from "@/i18n/navigation";

type HomeHeroProps = {
  hero: HomeMessages["hero"];
};

export function HomeHero({ hero }: HomeHeroProps) {
  return (
    <section className="data-scan relative h-[calc(100svh-72px)] min-h-[720px] max-h-[860px] overflow-hidden border-b bg-brand-dark text-white lg:h-[calc(100svh-104px)] lg:min-h-[620px] lg:max-h-[780px]">
      <Image
        alt={hero.visual.alt}
        className="hero-banner-image h-full w-full object-cover"
        fill
        priority
        sizes="100vw"
        src={hero.visual.src}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(6_40_61_/_90%)_0%,rgb(6_40_61_/_64%)_42%,rgb(6_40_61_/_18%)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgb(6_40_61_/_22%)_58%,rgb(6_40_61_/_78%)_100%)]" />
      <div aria-hidden className="absolute inset-0 industry-lines opacity-45" />

      <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col justify-end px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="motion-hero max-w-3xl pb-12 lg:pb-20">
          <p className="mb-5 w-fit border-l-4 border-white bg-white/10 px-4 py-2 text-sm font-medium text-white/86 shadow-[inset_0_1px_0_rgb(255_255_255_/_16%)] backdrop-blur">
            {hero.panelRegion}
          </p>
          <h1 className="max-w-[calc(100vw-2rem)] text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:max-w-none lg:text-6xl">
            {hero.title}
          </h1>
          <p className="motion-hero motion-delay-1 mt-6 max-w-[calc(100vw-2rem)] break-words text-base leading-8 text-white/84 [overflow-wrap:anywhere] sm:text-lg lg:max-w-2xl">
            {hero.lead}
          </p>
          <div className="motion-hero motion-delay-2 mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className={buttonVariants({
                className:
                  "h-11 bg-white px-5 !text-brand-dark hover:bg-white/90 hover:!text-brand-dark",
                size: "lg",
              })}
              href="/products"
            >
              {hero.primaryAction}
              <ArrowRight data-icon="inline-end" />
            </Link>
            <Link
              className={buttonVariants({
                className:
                  "h-11 border-white/70 bg-white/0 px-5 text-white hover:bg-white/10 hover:text-white",
                size: "lg",
                variant: "outline",
              })}
              href="/industry"
            >
              {hero.secondaryAction}
            </Link>
          </div>
        </div>

        <div className="motion-hero motion-delay-3 grid border border-white/22 bg-white/10 shadow-[inset_0_1px_0_rgb(255_255_255_/_12%),0_24px_60px_rgb(0_0_0_/_18%)] backdrop-blur md:grid-cols-[1.2fr_1fr]">
          <div className="border-b border-white/22 p-5 md:border-b-0 md:border-r">
            <p className="text-xs font-medium uppercase text-white/62">
              {hero.visual.caption}
            </p>
            <p className="mt-2 text-xl font-semibold">{hero.panelTitle}</p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-white/18 sm:grid-cols-4 md:grid-cols-2">
            {hero.facts.map((fact) => (
              <div className="bg-brand-dark/58 px-4 py-4 text-sm font-medium" key={fact}>
                {fact}
              </div>
            ))}
          </div>
        </div>

        <div aria-hidden="true" className="motion-hero motion-delay-4 mt-5 flex gap-2">
          {hero.panelItems.slice(0, 4).map((item, index) => (
            <span
              className={`h-1.5 rounded-full ${
                index === 0 ? "w-9 bg-white" : "w-4 bg-white/42"
              }`}
              key={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
