# Translation

This document explains how to contribute translations for cat-catch. It covers three parts: the extension itself, the injected scripts, and this documentation site.

## Extension Translation (`_locales`)

The extension's UI text is managed using Chrome's internationalization (`i18n`) approach.

- Translation files are located at: `/_locales/(locale code)/messages.json`
- To add a new language, **copy the `en` or `zh_CN` directory** and translate its contents.
- See the official docs for the list of available **locale codes**: <https://developer.chrome.com/docs/extensions/reference/api/i18n#locales>
- When new translation entries are added to English (`en`) or Chinese (`zh_CN`), you can run the `/tools/sync-locales.js` script with Node. It compares `en` against the other languages and copies the newly added entries from `en` into the other language directories. After running it, open the language file you are responsible for and fill in the new (placeholder) entries with your translation.

## Injected Script Translation (`catch-script`)

Besides the extension UI, the scripts injected into web pages have their own translation file.

- File location: `/catch-script/i18n.js`
- This file exports a global `window.CatCatchI18n` object for use by the scripts. The translation text is the `messages` object.
- The keys under `messages` correspond to the browser's `navigator.languages` locale codes, holding the translation objects for multiple languages.
- To add a translation, **copy the `messages.en` or `messages.zh` object**, rename the key to your locale code, and complete the translation.

## Document Translation (cat-catch-docs)

If you would like to translate this documentation, work in the docs repository:

- Docs repository: <https://github.com/xifangczy/cat-catch-docs>
- Under the `src` directory, **copy the `en` directory**, rename it to your locale code, and complete the translation.
- Edit the `/.vitepress/config.mts` file:
  - In the `locales` object, **copy the `en` or `root` object** and add your language translation.
  - In `themeConfig.search.locales`, **add a generic search translation for your language**.

After completing the above steps, submit a Pull Request and we will review and merge your translation.
