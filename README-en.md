[简体中文](./README.md) | [English](./README-en.md)

# cat-catch Documentation Site

The official documentation site for [cat-catch](https://github.com/xifangczy/cat-catch), a browser extension, built with [VitePress](https://vitepress.dev). It supports both Chinese and English.

## 🔗 Deployment URL

[https://cat-catch.94cat.com/](https://cat-catch.94cat.com/)

## 🛠 Tech Stack

| Technology | Version                       |
| ---------- | ----------------------------- |
| VitePress  | 2.0.0-alpha.18                |
| Node.js    | 24+                           |
| pnpm       | 11+                           |
| Deployment | GitHub Pages + GitHub Actions |

## 📁 Directory Structure

```
cat-catch-docs/
├── .github/workflows/   # GitHub Actions deployment workflow
├── .vitepress/
│   └── config.mts       # VitePress config (srcDir, locales, sidebar, search, etc.)
├── src/                 # All VitePress content (srcDir)
│   ├── docs/            # Chinese documentation
│   ├── en/              # English documentation
│   │   └── docs/
│   ├── public/          # Static assets (copied as-is to the build output)
│   │   └── assets/      # Image assets
│   └── index.md         # Chinese home page
└── package.json
```

## 🚀 Local Development

```bash
# Install dependencies
pnpm install

# Start the dev server (hot reload)
pnpm docs:dev

# Build for production (output to .vitepress/dist)
pnpm docs:build

# Preview the production build locally
pnpm docs:preview
```

## 📝 Writing Documentation

| Content          | Directory             | Notes                                              |
| ---------------- | --------------------- | -------------------------------------------------- |
| Chinese docs     | `src/docs/`           | Simplified Chinese, site root path `/`             |
| English docs     | `src/en/docs/`        | English, path prefix `/en/`                        |
| Image assets     | `src/public/assets/`  | All images go here, copied as-is to the build     |

> The two doc sets correspond one-to-one. When you edit a Chinese doc, remember to update the matching English doc as well.

## 🌐 Deployment

Pushing code to the `main` branch triggers GitHub Actions to automatically build and deploy to GitHub Pages.

- **Live URL**: [https://cat-catch.94cat.com/](https://cat-catch.94cat.com/)
- **Build pipeline**: `pnpm install` → `pnpm docs:build` → deploy `.vitepress/dist`
- **Workflow file**: `.github/workflows/deploy.yml`

## 📖 Related Repositories

| Repository                                          | Description                                      |
| --------------------------------------------------- | ------------------------------------------------ |
| [cat-catch](https://github.com/xifangczy/cat-catch) | The browser extension (Chrome / Edge / Firefox) |
| [cat-catch-docs](https://cat-catch.94cat.com/)      | This documentation site repo                     |

## License

MIT

---

## 🌍 Translation

We welcome translations into new languages. The site uses the same locale codes as the [Chrome extension i18n API](https://developer.chrome.com/docs/extensions/reference/api/i18n?hl=zh-cn#locales) so that contributors familiar with Chrome extension localization feel at home.

### How to add a new language

1. **Copy the English directory** — duplicate `src/en/` into a new folder named after the target locale code (e.g. `src/ja/`, `src/ko/`, `src/fr/`).
2. **Translate** — translate every `.md` file inside the new directory.
3. **Register the locale** — add a new entry under `locales` in `.vitepress/config.mts`:

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
           nav: [ /* translated nav */ ],
           sidebar: [ /* translated sidebar, links prefixed with /ja/ */ ],
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

   > **Note:** the locale key (e.g. `ja`) is also used as the URL prefix (`/ja/`). For region-specific codes with an underscore such as `zh_TW` or `pt_BR`, the directory and locale key both use that exact code, producing URLs like `/zh_TW/`.

4. **Add a language link** — append the new language to the switcher at the top of `README.md` and `README-en.md`:
   ```
   [简体中文](./README.md) | [English](./README-en.md) | [日本語](./README-ja.md)
   ```

### Locale code quick reference

Use one of the codes from the [Chrome i18n locale list](https://developer.chrome.com/docs/extensions/reference/api/i18n?hl=zh-cn#locales). Common ones:

| Code    | Language              | Code    | Language                     |
| ------- | --------------------- | ------- | ---------------------------- |
| `en`    | English               | `ja`    | 日本語 (Japanese)            |
| `ko`    | 한국어 (Korean)       | `fr`    | Français (French)            |
| `de`    | Deutsch (German)      | `es`    | Español (Spanish)            |
| `pt_BR` | Português (Brasil)    | `ru`    | Русский (Russian)            |
| `it`    | Italiano (Italian)    | `nl`    | Nederlands (Dutch)           |
| `zh_TW` | 中文（繁體）          | `vi`    | Tiếng Việt (Vietnamese)      |
| `tr`    | Türkçe (Turkish)      | `id`    | Bahasa Indonesia             |
