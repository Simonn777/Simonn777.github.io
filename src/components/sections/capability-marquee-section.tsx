import type { CSSProperties } from "react";

import type { HomeMessages } from "@/content/home";

type CapabilityMarqueeSectionProps = {
  capabilities: HomeMessages["capabilities"];
};

export function CapabilityMarqueeSection({
  capabilities,
}: CapabilityMarqueeSectionProps) {
  return (
    <section
      className="relative overflow-hidden bg-brand-dark py-12 text-white"
      data-reveal
    >
      <div aria-hidden className="absolute inset-0 industry-lines opacity-45" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/32 to-transparent"
      />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-7 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-[0.75fr_1.25fr]" data-reveal>
          <h2 className="text-balance text-2xl font-semibold leading-tight sm:text-3xl">
            {capabilities.title}
          </h2>
          <p className="max-w-3xl text-sm leading-7 text-white/68 sm:text-base">
            {capabilities.lead}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {capabilities.rows.map((row, rowIndex) => {
            const repeatedItems = [...row.items, ...row.items];

            return (
              <div
                className="grid gap-3 lg:grid-cols-[8rem_1fr]"
                data-reveal
                key={row.label}
                style={{ "--reveal-delay": `${rowIndex * 90}ms` } as CSSProperties}
              >
                <div className="flex items-center text-xs font-semibold uppercase tracking-[0.18em] text-white/58">
                  {row.label}
                </div>
                <div
                  className="masked-rail"
                  style={{ "--rail-fade": "var(--brand-dark)" } as CSSProperties}
                >
                  <div
                    className={`marquee-track gap-3 ${
                      rowIndex % 2 === 1 ? "marquee-track-reverse" : ""
                    }`}
                    style={
                      {
                        "--marquee-duration": `${rowIndex % 2 === 1 ? 42 : 38}s`,
                      } as CSSProperties
                    }
                  >
                    {repeatedItems.map((item, itemIndex) => (
                      <span
                        aria-hidden={itemIndex >= row.items.length || undefined}
                        className="capability-chip shrink-0 border border-white/12 px-4 py-3 text-sm font-medium text-white/86"
                        key={`${row.label}-${item}-${itemIndex}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
