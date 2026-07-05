# 猫抓 (cat-catch) 文档站

[猫抓 (cat-catch)](https://github.com/xifangczy/cat-catch) 浏览器扩展的官方文档，基于 [VitePress](https://vitepress.dev) 构建，支持中英双语。

## 🔗 部署网址
[https://cat-catch.94cat.com/](https://cat-catch.94cat.com/)

## 🛠 技术栈

| 技术 | 版本 |
|------|------|
| VitePress | 2.0.0-alpha.17 |
| Node.js | 22+ |
| pnpm | 9+ |
| 部署 | GitHub Pages + GitHub Actions |

## 📁 目录结构

```
cat-catch-docs/
├── .github/workflows/   # GitHub Actions 部署工作流
├── .vitepress/
│   └── config.mts       # VitePress 配置（双语、侧边栏、搜索等）
├── docs/                # 中文文档
├── en/                  # 英文文档
│   └── docs/            # 英文文档
├── assets/              # 图片资源（Vite 处理）
├── public/              # 静态资源（原样复制到构建产物）
│   └── assets/          # 特殊图片（frontmatter / 行内引用）
├── index.md             # 中文首页
├── en/index.md          # 英文首页
└── package.json
```

## 🚀 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器（热更新）
pnpm docs:dev

# 构建生产版本（输出到 .vitepress/dist）
pnpm docs:build

# 本地预览构建结果
pnpm docs:preview
```

## 📝 编写文档

| 内容 | 目录 | 说明 |
|------|------|------|
| 中文文档 | `docs/` | 简体中文，站点根路径 `/` |
| 英文文档 | `en/docs/` | English，路径前缀 `/en/` |
| 图片资源 | `assets/` | 独占一行的 markdown 图片放这里（Vite 处理） |
| 特殊图片 | `public/assets/` | frontmatter hero image 和行内图片放这里 |

> 两套文档一一对应，修改一篇中文文档时记得同步更新对应的英文文档。

## 🌐 部署

推送代码到 `main` 分支后，GitHub Actions 自动构建并部署到 GitHub Pages。

- **在线地址**：<!-- TODO: 填写自定义域名 -->
- **构建流程**：`pnpm install` → `pnpm docs:build` → 部署 `.vitepress/dist`
- **工作流文件**：`.github/workflows/deploy.yml`

## 📖 相关仓库

| 仓库 | 说明 |
|------|------|
| [cat-catch](https://github.com/xifangczy/cat-catch) | 浏览器扩展主仓库（Chrome / Edge / Firefox） |
| [cat-catch-docs](https://github.com/xifangczy/cat-catch-docs) | 文档站本仓库 |

## License

MIT

---

## English

The official documentation site for the [cat-catch](https://github.com/xifangczy/cat-catch) browser extension, built with [VitePress](https://vitepress.dev), supporting both Chinese and English.

### Quick Start

```bash
pnpm install      # Install dependencies
pnpm docs:dev     # Start dev server
pnpm docs:build   # Build for production
pnpm docs:preview # Preview the build
```

### Structure

- `docs/` — Chinese documentation (root locale)
- `en/docs/` — English documentation (`/en/` prefix)
- `.vitepress/config.mts` — Site configuration (locales, sidebar, search)
- `.github/workflows/deploy.yml` — Auto-deploy to GitHub Pages on push to `main`

### Related Repositories

- [cat-catch](https://github.com/xifangczy/cat-catch) — The browser extension
- [cat-catch-docs](https://github.com/xifangczy/cat-catch-docs) — This documentation site
