import fs from "node:fs";
import path from "node:path";

const outDir = path.join(process.cwd(), "out");
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
const redirectTarget = "/zh/";
const canonical = siteUrl ? `${siteUrl}${redirectTarget}` : redirectTarget;

fs.mkdirSync(outDir, { recursive: true });

fs.writeFileSync(
  path.join(outDir, "index.html"),
  `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>中钾华强生物科技（重庆）有限公司</title>
    <meta
      name="description"
      content="立足重庆綦江，展示中钾华强在绿色化工、肥料产品、产业基地与合作服务方面的企业信息。"
    />
    <link rel="canonical" href="${canonical}" />
    <meta http-equiv="refresh" content="0; url=${redirectTarget}" />
  </head>
  <body>
    <main>
      <h1>中钾华强生物科技（重庆）有限公司</h1>
      <p><a href="${redirectTarget}">进入中文官网</a></p>
      <p><a href="/en/">English</a></p>
    </main>
  </body>
</html>
`,
  "utf8",
);

fs.writeFileSync(
  path.join(outDir, "404.html"),
  `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>页面未找到 - 中钾华强</title>
    <meta http-equiv="refresh" content="0; url=${redirectTarget}" />
  </head>
  <body>
    <p>页面未找到，正在返回中钾华强官网。</p>
    <p><a href="${redirectTarget}">返回首页</a></p>
  </body>
</html>
`,
  "utf8",
);

console.log("Created static root and 404 fallback in out/");
