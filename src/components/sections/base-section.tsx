import { Check, MapPinned } from "lucide-react";
import type { CSSProperties } from "react";

import type { HomeMessages } from "@/content/home";
import { Link } from "@/i18n/navigation";

type BaseSectionProps = {
  base: HomeMessages["base"];
};

export function BaseSection({ base }: BaseSectionProps) {
  return (
    <section className="scroll-mt-20 bg-white py-20" data-reveal id="industry">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="border bg-brand-light p-6 sm:p-8" data-reveal>
          <div className="flex items-center gap-3 text-brand-dark">
            <MapPinned data-icon="inline-start" />
            <p className="text-sm font-semibold">{base.regionTitle}</p>
          </div>
          <div className="mt-10 grid gap-px border bg-border">
            {base.locations.map((place, index) => (
              <div
                className="motion-card grid grid-cols-[5rem_1fr] bg-white"
                data-reveal
                key={place}
                style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
              >
                <span className="border-r px-4 py-4 text-sm text-muted-foreground">
                  {base.regionLabel}
                </span>
                <span className="px-4 py-4 text-lg font-semibold">{place}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center gap-7" data-reveal>
          <div className="flex flex-col gap-4">
            <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl">
              {base.title}
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              {base.lead}
            </p>
          </div>

          <div className="grid gap-3">
            {base.points.map((point, index) => (
              <div
                className="flex items-start gap-3 border-b pb-3"
                data-reveal
                key={point}
                style={{ "--reveal-delay": `${index * 70}ms` } as CSSProperties}
              >
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center bg-brand text-white">
                  <Check data-icon="inline-start" />
                </span>
                <p className="text-sm leading-6">{point}</p>
              </div>
            ))}
          </div>

          <Link
            className="w-fit text-sm font-medium text-brand hover:text-brand-dark"
            href="/industry"
          >
            {base.linkLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
