import Image from "next/image";
import type { CSSProperties } from "react";

import type { DetailPageMessages } from "@/content/home";

type ContentPageProps = {
  page: DetailPageMessages;
};

export function ContentPage({ page }: ContentPageProps) {
  return (
    <main>
      <section className="hero-surface border-b">
        <div className="mx-auto grid min-h-[360px] w-full max-w-7xl items-end gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_0.75fr] lg:px-8">
          <div className="max-w-3xl">
            <h1 className="motion-hero text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              {page.title}
            </h1>
            <p className="motion-hero motion-delay-1 mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
              {page.lead}
            </p>
          </div>
          {page.image ? (
            <figure className="motion-hero motion-delay-2 group relative overflow-hidden border bg-brand-light">
              <Image
                alt={page.image.alt}
                className="motion-image aspect-[16/7] w-full object-cover lg:aspect-[16/8]"
                height={520}
                priority
                src={page.image.src}
                width={960}
              />
              <figcaption className="border-t bg-white px-4 py-3 text-sm font-medium text-brand">
                {page.image.caption}
              </figcaption>
            </figure>
          ) : null}
        </div>
      </section>

      {page.gallery ? (
        <section className="border-b bg-brand-light py-16" data-reveal>
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]" data-reveal>
              <h2 className="text-balance text-3xl font-semibold leading-tight">
                {page.gallery.title}
              </h2>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground">
                {page.gallery.lead}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-px border bg-border">
              {page.gallery.items.map((item, index) => (
                <figure
                  className="motion-card group basis-full bg-white sm:basis-[calc((100%_-_1px)/2)] lg:basis-[calc((100%_-_2px)/3)]"
                  data-reveal
                  key={item.src}
                  style={{ "--reveal-delay": `${(index % 3) * 80}ms` } as CSSProperties}
                >
                  <div className="relative aspect-[4/3] border-b bg-white">
                    <Image
                      alt={item.alt}
                      className="motion-image h-full w-full object-contain p-5"
                      height={720}
                      src={item.src}
                      width={960}
                    />
                  </div>
                  <figcaption className="px-5 py-4 text-sm font-medium">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-white py-16" data-reveal>
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-px border bg-border">
            {page.sections.map((section, index) => (
              <article
                className="motion-card grid gap-8 bg-white p-5 sm:p-8 lg:grid-cols-[0.34fr_0.66fr]"
                data-reveal
                key={section.title}
                style={{ "--reveal-delay": `${(index % 4) * 80}ms` } as CSSProperties}
              >
                <div>
                  <p className="text-sm font-semibold text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight">
                    {section.title}
                  </h2>
                </div>
                <div>
                  <p className="text-base leading-8 text-muted-foreground">
                    {section.body}
                  </p>
                  {section.points ? (
                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                      {section.points.map((point) => (
                        <li
                          className="border-l-4 border-brand bg-brand-light px-4 py-3 text-sm font-medium"
                          key={point}
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
