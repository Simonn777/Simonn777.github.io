import { FileCheck2, FlaskConical, ShieldCheck } from "lucide-react";
import type { CSSProperties } from "react";

import type { HomeMessages } from "@/content/home";
import { Link } from "@/i18n/navigation";

type QualitySectionProps = {
  quality: HomeMessages["quality"];
};

const icons = [FlaskConical, FileCheck2, ShieldCheck];

export function QualitySection({ quality }: QualitySectionProps) {
  return (
    <section
      className="relative scroll-mt-20 overflow-hidden border-y bg-brand-dark py-20 text-white"
      data-reveal
      id="quality"
    >
      <div aria-hidden className="absolute inset-0 industry-lines opacity-45" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="flex flex-col gap-4" data-reveal>
          <h2 className="text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
            {quality.title}
          </h2>
          <p className="max-w-xl text-base leading-7 text-white/68">
            {quality.lead}
          </p>
          <Link
            className="mt-2 w-fit text-sm font-medium text-white hover:text-white/78"
            href="/quality"
          >
            {quality.title}
          </Link>
        </div>

        <div className="grid gap-px border border-white/14 bg-white/14 md:grid-cols-3">
          {quality.items.map((item, index) => {
            const Icon = icons[index] ?? ShieldCheck;

            return (
              <article
                className="motion-card bg-brand-dark/72 p-5 shadow-[inset_0_1px_0_rgb(255_255_255_/_10%)]"
                data-reveal
                key={item.title}
                style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
              >
                <div className="mb-5 flex size-10 items-center justify-center border border-white/18 text-white">
                  <Icon data-icon="inline-start" />
                </div>
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/64">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
