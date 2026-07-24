# 翻译

本文档介绍如何为猫抓（cat-catch）贡献翻译，分为三部分：扩展程序本身的翻译、注入脚本的翻译，以及本说明文档的翻译。

## 扩展程序翻译（`_locales`）

扩展程序的界面文案使用 Chrome 国际化（`i18n`）方案管理。

- 翻译范围文件位于：`/_locales/(语言区域代码)/messages.json`
- 如果需要新建一种语言的翻译，**复制一份 `en` 或 `zh_CN` 目录**，在此基础上进行翻译即可。
- 可用的**语言区域代码**请参考官方文档：<https://developer.chrome.com/docs/extensions/reference/api/i18n#locales>

## 注入脚本翻译（`catch-script`）

除了扩展程序 UI，用于网页注入的脚本也有独立的翻译文件。

- 文件位置：`/catch-script/i18n.js`
- 该文件会导出一个 `window.CatCatchI18n` 对象。
- 请参考已有的英文或中文条目，**增加对应语言的翻译键值**。

## 本文档翻译（cat-catch-docs）

如果你希望翻译这份说明文档，请在文档仓库中进行操作：

- 文档仓库：<https://github.com/xifangczy/cat-catch-docs>
- 在 `src` 目录下，**复制一份 `en` 目录**，将其修改成你的语言区域代码，完成翻译。
- 编辑 `/.vitepress/config.mts` 文件：
  - 在 `locales` 对象中，**复制 `en` 或 `root` 对象**，增加你的语言翻译。
  - 在 `themeConfig.search.locales` 中，**需要增加一份对应语言的通用搜索翻译**。

完成以上步骤后提交 Pull Request，我们会在审核后合并你的翻译。
