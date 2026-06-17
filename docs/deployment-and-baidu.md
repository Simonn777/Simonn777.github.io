# 上线与百度收录说明

## 当前可执行发布方案

项目已增加 GitHub Pages 静态发布通道。推送到 GitHub 的 `main` 分支后，GitHub Actions 会执行：

```bash
npm ci
npm run export:github
```

并将 `out/` 发布到 GitHub Pages。

## 正式官网推荐方案

为了让百度更稳定收录，建议最终绑定正式域名，例如：

```text
www.zhongjia-huaqiang.com
```

正式域名上线后，需要把部署环境变量设置为：

```text
NEXT_PUBLIC_SITE_URL=https://www.zhongjia-huaqiang.com
```

这样 `sitemap.xml`、`robots.txt`、canonical 和多语言链接都会使用正式域名。

## 百度收录步骤

1. 网站必须可以公网 HTTPS 访问。
2. 打开以下地址确认可访问：
   - `/robots.txt`
   - `/sitemap.xml`
   - `/zh`
3. 在百度搜索资源平台添加站点并完成验证。
4. 按百度给出的验证方式，把验证文件放到 `public/` 目录，或把验证 meta 加到页面 metadata。
5. 在百度搜索资源平台提交 `https://你的域名/sitemap.xml`。
6. 等待百度抓取和收录。新站通常不是即时出现，需要持续可访问和稳定内容。

## 国内访问与备案

如果使用中国大陆服务器或 CDN，需要完成 ICP 备案。若使用 GitHub Pages、Vercel、Cloudflare Pages 等境外平台，通常不需要备案，但百度抓取稳定性和国内访问速度可能不如已备案的国内云服务。
