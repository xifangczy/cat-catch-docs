[简体中文](./README.md) | [English](./README-en.md)

# 猫抓 (cat-catch) 文档站

[猫抓 (cat-catch)](https://github.com/xifangczy/cat-catch) 浏览器扩展的官方文档，基于 [VitePress](https://vitepress.dev) 构建，支持中英双语。

## 🔗 部署网址

[https://cat-catch.94cat.com/](https://cat-catch.94cat.com/)

## 🛠 技术栈

| 技术      | 版本                          |
| --------- | ----------------------------- |
| VitePress | 2.0.0-alpha.18                |
| Node.js   | 24+                           |
| pnpm      | 11+                           |
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

## 🌍 翻译贡献

我们欢迎将文档翻译成更多语言。本站点使用的语言代码与 [Chrome 扩展 i18n API](https://developer.chrome.com/docs/extensions/reference/api/i18n?hl=zh-cn#locales) 保持一致，方便熟悉 Chrome 扩展国际化的贡献者上手。

### 如何新增一种语言

1. **复制英文目录** —— 复制 `src/en/` 目录，新目录名使用目标语言代码（例如 `src/ja/`、`src/ko/`、`src/fr/`）。
2. **翻译** —— 翻译新目录下所有 `.md` 文件。
3. **注册语言** —— 在 `.vitepress/config.mts` 的 `locales` 中新增一项：

   ```ts
   import { defineConfig } from "vitepress";

   export default defineConfig({
     // ...
     locales: {
       root: { /* ... */ },
       en: { /* ... */ },
       ja: {
         label: "日本語",
         lang: "ja",
         link: "/ja/",
         description: "ウェブメディア取得ブラウザ拡張",
         themeConfig: {
           nav: [ /* 翻译后的导航栏 */ ],
           sidebar: [ /* 翻译后的侧边栏，链接前缀改为 /ja/ */ ],
           docFooter: { prev: "前へ", next: "次へ" },
           outline: { label: "On This Page" },
           sidebarMenuLabel: "メニュー",
           returnToTopLabel: "トップへ戻る",
         },
       },
     },
     themeConfig: {
       // ...
       search: {
         provider: "local",
         options: {
           locales: {
             ja: {
               translations: {
                 button: { buttonText: "ドキュメントを検索", buttonAriaLabel: "ドキュメントを検索" },
                 modal: {
                   noResultsText: "結果が見つかりません",
                   resetButtonTitle: "検索条件をクリア",
                   footer: { selectText: "選択", navigateText: "移動", closeText: "閉じる" },
                 },
               },
             },
           },
         },
       },
     },
   });
   ```

   > **注意：** locale 键名（例如 `ja`）同时作为 URL 前缀（`/ja/`）。对于带下划线的地区代码（如 `zh_TW`、`pt_BR`），目录名与 locale 键名都使用该完整代码，对应 URL 形如 `/zh_TW/`。

4. **添加语言链接** —— 在 `README.md` 与 `README-en.md` 顶部的语言切换栏追加新语言：
   ```
   [简体中文](./README.md) | [English](./README-en.md) | [日本語](./README-ja.md)
   ```

### 语言代码速查表

请使用 [Chrome i18n 语言代码列表](https://developer.chrome.com/docs/extensions/reference/api/i18n?hl=zh-cn#locales) 中的代码。常用代码：

| 代码    | 语言                  | 代码    | 语言                     |
| ------- | --------------------- | ------- | ------------------------ |
| `en`    | English               | `ja`    | 日本語（日语）           |
| `ko`    | 한국어（韩语）        | `fr`    | Français（法语）         |
| `de`    | Deutsch（德语）       | `es`    | Español（西班牙语）      |
| `pt_BR` | Português (Brasil)    | `ru`    | Русский（俄语）          |
| `it`    | Italiano（意大利语）  | `nl`    | Nederlands（荷兰语）     |
| `zh_TW` | 中文（繁體）          | `vi`    | Tiếng Việt（越南语）     |
| `tr`    | Türkçe（土耳其语）    | `id`    | Bahasa Indonesia         |
