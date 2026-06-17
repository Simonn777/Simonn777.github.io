import Image from "next/image";
import type { CSSProperties } from "react";

import type { HomeMessages } from "@/content/home";

type ProjectVisualSectionProps = {
  project: HomeMessages["project"];
};

export function ProjectVisualSection({ project }: ProjectVisualSectionProps) {
  const [primaryImage, ...supportImages] = project.images;

  return (
    <section className="border-b industrial-surface py-20" data-reveal>
      <div className="mx-auto grid w-full max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
        <div className="flex flex-col gap-7" data-reveal>
          <div className="flex flex-col gap-4">
            <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl">
              {project.title}
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              {project.lead}
            </p>
          </div>

          <div className="grid gap-px border bg-border sm:grid-cols-3">
            {project.metrics.map((metric, index) => (
              <div
                className="motion-card bg-white p-5"
                data-reveal
                key={metric.label}
                style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
              >
                <p className="text-3xl font-semibold text-brand">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm leading-5 text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <p className="border-l-4 border-brand bg-white/62 py-3 pl-4 pr-5 text-sm leading-6 text-muted-foreground backdrop-blur">
            {project.note}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {primaryImage ? (
            <figure className="case-card group relative min-h-[300px] overflow-hidden border bg-brand-light sm:col-span-2" data-reveal>
              <Image
                alt={primaryImage.alt}
                className="motion-image h-full w-full object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                src={primaryImage.src}
              />
              <figcaption className="absolute inset-x-0 bottom-0 border-t bg-white/95 px-4 py-3 text-sm font-medium backdrop-blur">
                {primaryImage.caption}
              </figcaption>
            </figure>
          ) : null}

          {supportImages.map((image, index) => (
            <figure
              className="case-card group relative min-h-[210px] overflow-hidden border bg-brand-light"
              data-reveal
              key={image.src}
              style={{ "--reveal-delay": `${(index + 1) * 90}ms` } as CSSProperties}
            >
              <Image
                alt={image.alt}
                className="motion-image h-full w-full object-cover"
                fill
                sizes="(min-width: 1024px) 29vw, 50vw"
                src={image.src}
              />
              <figcaption className="absolute inset-x-0 bottom-0 border-t bg-white/95 px-4 py-3 text-sm font-medium backdrop-blur">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
