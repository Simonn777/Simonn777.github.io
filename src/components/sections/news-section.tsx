import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { HomeMessages } from "@/content/home";
import { Link } from "@/i18n/navigation";
import type { CSSProperties } from "react";

type NewsSectionProps = {
  news: HomeMessages["news"];
};

const newsImages = [
  "/images/products/real/calcium-ammonium-nitrate-can.webp",
  "/images/external/lab-quality.webp",
  "/images/home/industrial-plant-aerial.webp",
];

export function NewsSection({ news }: NewsSectionProps) {
  if (news.items.length === 0) {
    return null;
  }

  const desktopCardWidth =
    news.items.length <= 2
      ? "lg:min-w-[calc((100%_-_1px)/2)]"
      : "lg:min-w-[calc((100%_-_2px)/3)]";

  return (
    <section className="scroll-mt-24 bg-white py-20" data-reveal id="news">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 text-center" data-reveal>
          <p className="text-sm font-semibold text-brand">{news.kicker}</p>
          <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl">
            {news.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-muted-foreground">
            {news.lead}
          </p>
        </div>

        <div className="hide-scrollbar -mx-4 flex snap-x gap-px overflow-x-auto px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
          {news.items.map((item, index) => {
            const imageSrc = newsImages[index % newsImages.length];
            const isProductImage = imageSrc.includes("/products/");

            return (
              <Link
                className={`motion-card group min-w-[280px] snap-start overflow-hidden border bg-white md:min-w-[360px] ${desktopCardWidth}`}
                data-reveal
                href="/news"
                key={item.title}
                style={
                  { "--reveal-delay": `${index * 80}ms` } as CSSProperties
                }
              >
                <div className="relative aspect-[16/9] bg-brand-light">
                  <Image
                    alt={item.title}
                    className={`motion-image h-full w-full ${
                      isProductImage
                        ? "object-contain p-4"
                        : "object-cover"
                    }`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 85vw"
                    src={imageSrc}
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm font-medium text-brand">{item.date}</p>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold leading-tight">
                      {item.title}
                    </h3>
                    <ArrowRight
                      className="mt-1 size-4 shrink-0 text-brand"
                      data-icon="inline-end"
                    />
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <Link
          className="mx-auto inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
          href="/news"
        >
          {news.linkLabel}
          <ArrowRight className="size-4" data-icon="inline-end" />
        </Link>
      </div>
    </section>
  );
}
