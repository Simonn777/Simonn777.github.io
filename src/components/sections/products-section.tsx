import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";

import type { HomeMessages } from "@/content/home";
import { Link } from "@/i18n/navigation";

type ProductsSectionProps = {
  products: HomeMessages["products"];
};

export function ProductsSection({ products }: ProductsSectionProps) {
  const loopedProducts = [...products.items, ...products.items];

  return (
    <section
      className="scroll-mt-24 border-y bg-brand-light py-20"
      data-reveal
      id="products"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <p className="mb-4 text-sm font-semibold text-brand">{products.kicker}</p>
          <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl">
            {products.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground">
            {products.lead}
          </p>
        </div>

        <div
          className="masked-rail -mx-4 sm:-mx-6 lg:mx-0"
          data-reveal
          style={{ "--rail-fade": "var(--brand-light)" } as CSSProperties}
        >
          <div className="marquee-track product-marquee-track px-4 sm:px-6 lg:px-0">
            {loopedProducts.map((product, index) => (
              <Link
                aria-hidden={index >= products.items.length || undefined}
                className="motion-card group flex w-[260px] flex-none flex-col border bg-white md:w-[290px] xl:w-[300px]"
                data-product-card
                href="/products"
                key={`${product.name}-${index}`}
                tabIndex={index >= products.items.length ? -1 : undefined}
              >
                <div className="relative aspect-[4/3] bg-white">
                  <Image
                    alt={product.name}
                    className="motion-image object-contain p-5"
                    fill
                    loading={index < 4 ? "eager" : "lazy"}
                    sizes="(min-width: 1280px) 300px, (min-width: 768px) 290px, 260px"
                    src={product.image}
                  />
                </div>
                <div className="border-t p-5">
                  <p className="text-xs font-semibold text-brand">
                    {product.category}
                  </p>
                  <div className="mt-3 flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold leading-tight">
                      {product.name}
                    </h3>
                    <ArrowRight
                      className="mt-1 size-4 shrink-0 text-brand"
                      data-icon="inline-end"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {product.specs[0]}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t pt-6 md:flex-row md:items-center">
          <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
            {products.note}
          </p>
          <Link
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
            href="/products"
          >
            {products.linkLabel}
            <ArrowRight className="size-4" data-icon="inline-end" />
          </Link>
        </div>
      </div>
    </section>
  );
}
