# 猫抓 (cat-catch) 文档站

[猫抓 (cat-catch)](https://github.com/xifangczy/cat-catch) 浏览器扩展的官方文档，基于 [VitePress](https://vitepress.dev) 构建，支持中英双语。

## 🔗 部署网址

[https://cat-catch.94cat.com/](https://cat-catch.94cat.com/)

## 🛠 技术栈

| 技术      | 版本                          |
| --------- | ----------------------------- |
| VitePress | 2.0.0-alpha.17                |
| Node.js   | 22+                           |
| pnpm      | 9+                            |
| 部署      | GitHub Pages + GitHub Actions |

## 📁 目录结构

```
cat-catch-docs/
├── .github/workflows/   # GitHub Actions 部署工作流
├── .vitepress/
│   └── config.mts       # VitePress 配置（srcDir、双语、侧边栏、搜索等）
├── src/                 # 所有 VitePress 内容（srcDir）
│   ├── docs/            # 中文文档
│   ├── en/              # 英文文档
│   │   └── docs/
│   ├── public/          # 静态资源（原样复制到构建产物）
│   │   └── assets/      # 图片资源
│   └── index.md         # 中文首页
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

| 内容     | 目录                   | 说明                                    |
| -------- | ---------------------- | --------------------------------------- |
| 中文文档 | `src/docs/`            | 简体中文，站点根路径 `/`                |
| 英文文档 | `src/en/docs/`         | English，路径前缀 `/en/`                |
| 图片资源 | `src/public/assets/`   | 所有图片统一放这里，原样复制到构建产物  |

> 两套文档一一对应，修改一篇中文文档时记得同步更新对应的英文文档。

## 🌐 部署

推送代码到 `main` 分支后，GitHub Actions 自动构建并部署到 GitHub Pages。

- **在线地址**：[https://cat-catch.94cat.com/](https://cat-catch.94cat.com/)
- **构建流程**：`pnpm install` → `pnpm docs:build` → 部署 `.vitepress/dist`
- **工作流文件**：`.github/workflows/deploy.yml`

## 📖 相关仓库

| 仓库                                                | 说明                                        |
| --------------------------------------------------- | ------------------------------------------- |
| [cat-catch](https://github.com/xifangczy/cat-catch) | 浏览器扩展主仓库（Chrome / Edge / Firefox） |
| [cat-catch-docs](https://cat-catch.94cat.com/)      | 文档站本仓库                                |

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

- `src/docs/` — Chinese documentation (root locale)
- `src/en/docs/` — English documentation (`/en/` prefix)
- `src/public/assets/` — Image resources
- `.vitepress/config.mts` — Site configuration (srcDir, locales, sidebar, search)
- `.github/workflows/deploy.yml` — Auto-deploy to GitHub Pages on push to `main`

### Related Repositories

- [cat-catch](https://github.com/xifangczy/cat-catch) — The browser extension
- [cat-catch-docs](https://cat-catch.94cat.com/) — This documentation site
