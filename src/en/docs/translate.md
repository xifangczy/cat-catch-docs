# Translation

This document explains how to contribute translations for cat-catch. It covers three parts: the extension itself, the injected scripts, and this documentation site.

## Extension Translation (`_locales`)

The extension's UI text is managed using Chrome's internationalization (`i18n`) approach.

- Translation files are located at: `/_locales/(locale code)/messages.json`
- To add a new language, **copy the `en` or `zh_CN` directory** and translate its contents.
- See the official docs for the list of available **locale codes**: <https://developer.chrome.com/docs/extensions/reference/api/i18n#locales>

## Injected Script Translation (`catch-script`)

Besides the extension UI, the scripts injected into web pages have their own translation file.

- File location: `/catch-script/i18n.js`
- This file exports a `window.CatCatchI18n` object.
- Refer to the existing English or Chinese entries and **add the translation keys for your language**.

## Document Translation (cat-catch-docs)

If you would like to translate this documentation, work in the docs repository:

- Docs repository: <https://github.com/xifangczy/cat-catch-docs>
- Under the `src` directory, **copy the `en` directory**, rename it to your locale code, and complete the translation.
- Edit the `/.vitepress/config.mts` file:
  - In the `locales` object, **copy the `en` or `root` object** and add your language translation.
  - In `themeConfig.search.locales`, **add a generic search translation for your language**.

After completing the above steps, submit a Pull Request and we will review and merge your translation.
