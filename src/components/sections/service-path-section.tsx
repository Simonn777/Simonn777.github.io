import type { HomeMessages } from "@/content/home";
import { GradientCardShowcase } from "@/components/ui/gradient-card-showcase";

type ServicePathSectionProps = {
  servicePath: HomeMessages["servicePath"];
};

export function ServicePathSection({ servicePath }: ServicePathSectionProps) {
  return (
    <section className="border-y bg-white py-20" data-reveal>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]" data-reveal>
          <div>
            <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl">
              {servicePath.title}
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-7 text-muted-foreground">
            {servicePath.lead}
          </p>
        </div>

        <GradientCardShowcase items={servicePath.items} />
      </div>
    </section>
  );
}
