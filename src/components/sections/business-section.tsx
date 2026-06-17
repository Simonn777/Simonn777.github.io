import { ArrowRight } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";

import type { HomeMessages } from "@/content/home";
import { Link } from "@/i18n/navigation";

type BusinessSectionProps = {
  overview: HomeMessages["overview"];
};

export function BusinessSection({ overview }: BusinessSectionProps) {
  return (
    <section className="scroll-mt-24 bg-white py-20" data-reveal id="about">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:px-8">
        <div className="flex flex-col" data-reveal>
          <p className="mb-4 text-sm font-semibold text-brand">{overview.kicker}</p>
          <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl">
            {overview.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
            {overview.lead}
          </p>

          <div className="mt-8 grid gap-px border bg-border sm:grid-cols-3">
            {overview.stats.map((stat, index) => (
              <div
                className="motion-card bg-white p-5"
                data-reveal
                key={stat.label}
                style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
              >
                <p className="text-3xl font-semibold text-brand">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4">
            {overview.points.map((point, index) => (
              <article
                className="border-l-4 border-brand bg-brand-light px-5 py-4"
                data-reveal
                key={point.title}
                style={{ "--reveal-delay": `${(index + 1) * 90}ms` } as CSSProperties}
              >
                <h3 className="text-base font-semibold">{point.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {point.description}
                </p>
              </article>
            ))}
          </div>

          <Link
            className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
            href="/about"
          >
            {overview.moreLabel}
            <ArrowRight className="size-4" data-icon="inline-end" />
          </Link>
        </div>

        <div
          className="motion-card group relative min-h-[360px] overflow-hidden border bg-brand-light sm:min-h-[460px]"
          data-reveal
        >
          <Image
            alt="重庆綦江城市、山水与产业区位"
            className="motion-image h-full w-full object-cover"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            src="/images/home/qijiang-city.webp"
          />
          <div className="absolute inset-x-0 bottom-0 border-t bg-white/94 px-5 py-4 backdrop-blur">
            <p className="text-sm font-semibold text-brand">{overview.locationTitle}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {overview.locationLabel}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
