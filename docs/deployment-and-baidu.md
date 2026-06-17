# 上线与百度收录说明

## 当前正式访问地址

正式站点：

```text
https://www.zhongjia-huaqiang.com/zh/
```

SEO 基础入口：

```text
https://www.zhongjia-huaqiang.com/robots.txt
https://www.zhongjia-huaqiang.com/sitemap.xml
```

当前 Vercel 项目已绑定：

```text
zhongjia-huaqiang.com
www.zhongjia-huaqiang.com
```

裸域应统一跳转到 `www.zhongjia-huaqiang.com`，避免搜索引擎把两个域名当作重复站点。

## 当前可执行发布方案

项目已增加 GitHub Pages 静态发布通道。推送到 GitHub 的 `main` 分支后，GitHub Actions 会执行：

```bash
npm ci
npm run export:github
```

并将 `out/` 发布到 GitHub Pages。

## 正式官网推荐方案

为了让百度更稳定收录，部署环境变量应设置为：

```text
NEXT_PUBLIC_SITE_URL=https://www.zhongjia-huaqiang.com
```

如使用百度 HTML 标签验证方式，可在 Vercel 环境变量中增加：

```text
NEXT_PUBLIC_BAIDU_SITE_VERIFICATION=百度后台给出的验证码
```

这样首页会输出：

```html
<meta name="baidu-site-verification" content="验证码" />
```

## 百度收录步骤

1. 打开百度搜索资源平台：`https://ziyuan.baidu.com/`。
2. 使用百度账号登录，进入“站点管理”，添加站点：

```text
https://www.zhongjia-huaqiang.com
```

3. 站点属性建议选择：

```text
行业：工业 / 化工 / 农资相关
站点类型：企业官网
```

4. 完成站点验证。推荐优先选择“HTML 文件验证”，把百度给出的 `baidu_verify_*.html` 文件放入 `public/` 目录后重新部署；也可以选择“HTML 标签验证”，把验证码填入 Vercel 环境变量 `NEXT_PUBLIC_BAIDU_SITE_VERIFICATION` 后重新部署。
5. 验证通过后，在“普通收录 / sitemap”中提交：

```text
https://www.zhongjia-huaqiang.com/sitemap.xml
```

6. 如百度后台提供 API 推送 token，可在本地运行：

```bash
BAIDU_PUSH_TOKEN=百度后台token npm run submit:baidu
```

7. 等待百度抓取和收录。普通收录可以缩短爬虫发现链接的时间，但不保证一定收录；新域名通常需要持续稳定访问、内容可抓取和外部信任积累。

## 当前 SEO 检查结果

- `robots.txt` 已允许 `Baiduspider` 和其他搜索引擎抓取。
- `sitemap.xml` 已列出中文、英文首页及核心栏目页面。
- 首页包含 title、description、canonical、alternate、Open Graph 等基础元信息。
- 站点为服务端输出 HTML，正文内容可被爬虫直接读取。
- 正式域名已经绑定 HTTPS，Vercel 自动管理证书。

## 国内访问与备案

如果使用中国大陆服务器或 CDN，需要完成 ICP 备案。若使用 GitHub Pages、Vercel、Cloudflare Pages 等境外平台，通常不需要备案，但百度抓取稳定性和国内访问速度可能不如已备案的国内云服务。
