import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  devIndicators: false,
  ...(isStaticExport
    ? {
        images: {
          unoptimized: true,
        },
        output: "export" as const,
        trailingSlash: true,
      }
    : {}),
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
