const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.zhongjia-huaqiang.com";
const token = process.env.BAIDU_PUSH_TOKEN;
const sitemapUrl = process.env.BAIDU_SITEMAP_URL ?? `${siteUrl}/sitemap.xml`;

if (!token) {
  console.error("Missing BAIDU_PUSH_TOKEN.");
  console.error(
    "Get it from Baidu Search Resource Platform after site verification.",
  );
  process.exit(1);
}

const sitemapResponse = await fetch(sitemapUrl);

if (!sitemapResponse.ok) {
  throw new Error(
    `Failed to fetch sitemap ${sitemapUrl}: ${sitemapResponse.status}`,
  );
}

const sitemapXml = await sitemapResponse.text();
const urls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((match) => match[1])
  .filter(Boolean);

if (urls.length === 0) {
  throw new Error(`No URLs found in sitemap ${sitemapUrl}.`);
}

const endpoint = new URL("http://data.zz.baidu.com/urls");
endpoint.searchParams.set("site", siteUrl);
endpoint.searchParams.set("token", token);

const response = await fetch(endpoint, {
  method: "POST",
  headers: {
    "Content-Type": "text/plain",
  },
  body: urls.join("\n"),
});

const resultText = await response.text();

if (!response.ok) {
  throw new Error(
    `Baidu submission failed: ${response.status}\n${resultText}`,
  );
}

console.log(`Submitted ${urls.length} URLs to Baidu.`);
console.log(resultText);
