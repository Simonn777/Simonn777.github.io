import Image from "next/image";
import type { CSSProperties } from "react";

import type { HomeMessages } from "@/content/home";

type VisualScenesSectionProps = {
  visualScenes: HomeMessages["visualScenes"];
};

export function VisualScenesSection({ visualScenes }: VisualScenesSectionProps) {
  return (
    <section className="border-y bg-white py-20" data-reveal>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]" data-reveal>
          <div>
            <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl">
              {visualScenes.title}
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-7 text-muted-foreground">
            {visualScenes.lead}
          </p>
        </div>

        <div data-reveal>
          <div className="hide-scrollbar case-gallery flex gap-3 overflow-x-auto pb-2">
            {visualScenes.items.map((scene, index) => (
              <figure
                className="case-card group relative min-h-[430px] min-w-[82vw] overflow-hidden border bg-brand-light sm:min-w-[520px] lg:min-w-[420px]"
                data-reveal
                key={scene.src}
                style={
                  {
                    "--reveal-delay": `${index * 90}ms`,
                    "--scene-position": scene.position ?? "center",
                  } as CSSProperties
                }
              >
                <Image
                  alt={scene.alt}
                  className="motion-image scene-image h-full w-full object-cover"
                  fill
                  sizes="(min-width: 1024px) 32vw, 82vw"
                  src={scene.src}
                />
                <figcaption className="absolute inset-x-0 bottom-0 border-t bg-white/94 px-5 py-4 backdrop-blur">
                  <p className="text-sm font-semibold text-brand">
                    {scene.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {scene.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="grid gap-px border bg-border sm:grid-cols-3" data-reveal>
          {visualScenes.points.map((point, index) => (
            <div
              className="motion-card bg-white p-5"
              key={point}
              style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
            >
              <p className="text-sm font-semibold text-brand">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 text-base font-semibold">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
