import { ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";

import { Link } from "@/i18n/navigation";

export type GradientCardItem = {
  description: string;
  gradientFrom: string;
  gradientTo: string;
  href: string;
  label: string;
  title: string;
};

type GradientCardShowcaseProps = {
  items: GradientCardItem[];
};

export function GradientCardShowcase({ items }: GradientCardShowcaseProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {items.map((item, index) => (
        <Link
          className="skew-card group relative block min-h-[340px] overflow-visible px-5 py-8 sm:min-h-[360px]"
          data-reveal
          href={item.href}
          key={item.title}
          style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
        >
          <span
            aria-hidden
            className="skew-card-panel"
            style={{
              background: `linear-gradient(315deg, ${item.gradientFrom}, ${item.gradientTo})`,
            }}
          />
          <span
            aria-hidden
            className="skew-card-panel skew-card-panel-blur"
            style={{
              background: `linear-gradient(315deg, ${item.gradientFrom}, ${item.gradientTo})`,
            }}
          />
          <span aria-hidden className="skew-card-orbit skew-card-orbit-top" />
          <span aria-hidden className="skew-card-orbit skew-card-orbit-bottom" />

          <span className="skew-card-content">
            <span className="text-sm font-semibold text-brand">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="mt-12 block text-2xl font-semibold leading-tight text-foreground">
              {item.title}
            </span>
            <span className="mt-5 block text-sm leading-7 text-muted-foreground">
              {item.description}
            </span>
            <span className="mt-auto flex items-center gap-2 pt-8 text-sm font-semibold text-brand">
              {item.label}
              <ArrowRight className="size-4" data-icon="inline-end" />
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}
