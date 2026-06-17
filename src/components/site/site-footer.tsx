import type { SiteMessages } from "@/content/home";
import { pageSlugs } from "@/content/pages";
import { Link } from "@/i18n/navigation";

export function SiteFooter({ site }: { site: SiteMessages }) {
  return (
    <footer className="scroll-mt-20 bg-brand-dark text-white" id="contact">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_1.5fr] lg:px-8">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold">{site.company}</p>
          <p className="max-w-md text-sm leading-6 text-white/74">
            {site.footer.note}
          </p>
        </div>
        <div className="grid gap-4 text-sm text-white/74 sm:grid-cols-3">
          <div className="border border-white/16 p-4">
            <p className="mb-2 text-xs font-medium text-white">
              {site.footer.addressLabel}
            </p>
            <p>{site.footer.location}</p>
          </div>
          <div className="border border-white/16 p-4">
            <p className="mb-2 text-xs font-medium text-white">
              {site.footer.registryLabel}
            </p>
            <p>{site.footer.credit}</p>
          </div>
          <div className="border border-white/16 p-4">
            <p className="mb-2 text-xs font-medium text-white">
              {site.footer.contactLabel}
            </p>
            {site.footer.contactHref ? (
              <a className="hover:text-white" href={site.footer.contactHref}>
                {site.footer.contact}
              </a>
            ) : (
              <p>{site.footer.contact}</p>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-white/12">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 text-xs text-white/62 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>Copyright © 2026 {site.brand}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {pageSlugs.map((slug) => (
              <Link className="hover:text-white" href={`/${slug}`} key={slug}>
                {site.nav[slug]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
