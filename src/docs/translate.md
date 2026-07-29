# 翻译

本文档介绍如何为猫抓（cat-catch）贡献翻译，分为三部分：扩展程序本身的翻译、注入脚本的翻译，以及本说明文档的翻译。

## 扩展程序翻译（`_locales`）

扩展程序的界面文案使用 Chrome 国际化（`i18n`）方案管理。

- 翻译范围文件位于：`/_locales/(语言区域代码)/messages.json`
- 如果需要新建一种语言的翻译，**复制一份 `en` 或 `zh_CN` 目录**，在此基础上进行翻译即可。
- 可用的**语言区域代码**请参考官方文档：<https://developer.chrome.com/docs/extensions/reference/api/i18n#locales>
- 当英文（`en`）或中文（`zh_CN`）新增了翻译条目后，可使用 Node 执行 `/tools/sync-locales.js` 脚本。脚本会对比 `en` 与其他语言，将 `en` 中新增的翻译项复制到其他语言目录下。执行完成后，再打开你负责翻译的语言文件，把新增的占位条目补全为对应语言的翻译即可。

## 注入脚本翻译（`catch-script`）

除了扩展程序 UI，用于网页注入的脚本也有独立的翻译文件。

- 文件位置：`/catch-script/i18n.js`
- 该文件导出一个 `window.CatCatchI18n` 全局对象，供脚本使用。翻译文本是 `messages` 对象。
- `messages` 下的键名对应浏览器的 `navigator.languages` 语言区域代码，存放了多个语言的翻译对象。
- 需要新增翻译时，**复制 `messages.en` 或 `messages.zh` 对象**，将键名改为你的语言区域代码，并完成其中文案的翻译即可。

## 本文档翻译（cat-catch-docs）

如果你希望翻译这份说明文档，请在文档仓库中进行操作：

- 文档仓库：<https://github.com/xifangczy/cat-catch-docs>
- 在 `src` 目录下，**复制一份 `en` 目录**，将其修改成你的语言区域代码，完成翻译。
- 编辑 `/.vitepress/config.mts` 文件：
  - 在 `locales` 对象中，**复制 `en` 或 `root` 对象**，增加你的语言翻译。
  - 在 `themeConfig.search.locales` 中，**需要增加一份对应语言的通用搜索翻译**。

完成以上步骤后提交 Pull Request，我们会在审核后合并你的翻译。
