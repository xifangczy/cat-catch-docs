import { defineConfig } from "vitepress";

export default defineConfig({
  title: "猫抓 (cat-catch)",
  base: "/",
  srcDir: "src",
  cleanUrls: true,
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],

  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      description: "网页媒体抓取浏览器扩展",
      themeConfig: {
        nav: [
          { text: "首页", link: "/" },
          { text: "说明文档", link: "/docs/install" },
          { text: "捐赠 ❤️ 赞助", link: "/docs/sponsor" },
        ],
        sidebar: [
          {
            text: "🚀 入门指南",
            items: [
              { text: "安装地址", link: "/docs/install" },
              { text: "设置", link: "/docs/settings" },
            ],
          },
          {
            text: "💡 界面",
            items: [
              { text: "popup页面", link: "/docs/popup" },
              { text: "弹出页面 / 筛选页面 / 预览页面", link: "/docs/preview" },
            ],
          },
          {
            text: "🎯 资源捕获",
            items: [
              { text: "深度搜索 / 缓存捕捉", link: "/docs/cache-capture" },
              { text: "M3U8解析器", link: "/docs/m3u8parse" },
              { text: "DASH MPD解析器", link: "/docs/mpdparse" },
              { text: "一些正则匹配示例", link: "/docs/regex-examples" },
            ],
          },
          {
            text: "🧰 工具 & 集成",
            items: [
              { text: "标签系统 / 替换关键词", link: "/docs/tag" },
              { text: "m3u8dl 自定义协议", link: "/docs/m3u8dl" },
              { text: "调用本地程序", link: "/docs/invoke" },
              { text: "在线ffmpeg", link: "/docs/online-ffmpeg" },
              {
                text: "使用油猴脚本给猫抓发送资源",
                link: "/docs/tampermonkey",
              },
              { text: "媒体控制", link: "/docs/media-control" },
            ],
          },
          {
            text: "📌 其他",
            items: [
              { text: "捐赠 ❤️ 赞助", link: "/docs/sponsor" },
              { text: "常见问题", link: "/docs/faq" },
              { text: "Bug 提交", link: "/docs/issues" },
              {
                text: "更新日志",
                link: "https://github.com/xifangczy/cat-catch/blob/master/CHANGELOG.md",
                target: "_blank",
              },
              { text: "强制屏蔽网站", link: "/docs/blockedsite" },
            ],
          },
        ],
        docFooter: { prev: "上一页", next: "下一页" },
        outline: { label: "页面导航" },
        sidebarMenuLabel: "菜单",
        returnToTopLabel: "回到顶部",
      },
    },
    en: {
      label: "English",
      lang: "en-US",
      link: "/en/",
      description: "Web media scraping browser extension",
      themeConfig: {
        nav: [
          { text: "Home", link: "/en/" },
          { text: "Docs", link: "/en/docs/install" },
          { text: "Donate ❤️ Sponsor", link: "/en/docs/sponsor" },
        ],
        sidebar: [
          {
            text: "🚀 Getting Started",
            items: [
              { text: "Installation", link: "/en/docs/install" },
              { text: "Settings", link: "/en/docs/settings" },
            ],
          },
          {
            text: "💡 Interface",
            items: [
              { text: "Popup Page", link: "/en/docs/popup" },
              {
                text: "Popup / Filter / Preview Page",
                link: "/en/docs/preview",
              },
            ],
          },
          {
            text: "🎯 Resource Capture",
            items: [
              {
                text: "Deep Search / Cache Capture",
                link: "/en/docs/cache-capture",
              },
              {
                text: "M3U8 Parser",
                link: "/en/docs/m3u8parse",
              },
              { text: "DASH MPD Parser", link: "/en/docs/mpdparse" },
              {
                text: "Regex Matching Examples",
                link: "/en/docs/regex-examples",
              },
            ],
          },
          {
            text: "🧰 Tools & Integration",
            items: [
              {
                text: "Tag System / Replace Keywords",
                link: "/en/docs/tag",
              },
              { text: "m3u8dl Custom Protocol", link: "/en/docs/m3u8dl" },
              { text: "Invoke Local Program", link: "/en/docs/invoke" },
              { text: "Online ffmpeg", link: "/en/docs/online-ffmpeg" },
              {
                text: "Sending Resources via Tampermonkey",
                link: "/en/docs/tampermonkey",
              },
              { text: "Media Control", link: "/en/docs/media-control" },
            ],
          },
          {
            text: "📌 Other",
            items: [
              { text: "Donate ❤️ Sponsor", link: "/en/docs/sponsor" },
              { text: "FAQ", link: "/en/docs/faq" },
              { text: "Bug Report", link: "/en/docs/issues" },
              {
                text: "Changelog",
                link: "https://github.com/xifangczy/cat-catch/blob/master/CHANGELOG.md",
                target: "_blank",
              },
              { text: "Blocked Websites", link: "/en/docs/blockedsite" },
            ],
          },
        ],
        docFooter: { prev: "Previous", next: "Next" },
        outline: { label: "On This Page" },
        sidebarMenuLabel: "Menu",
        returnToTopLabel: "Back to Top",
      },
    },
  },

  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/xifangczy/cat-catch" },
    ],
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: "搜索文档", buttonAriaLabel: "搜索文档" },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
          en: {
            translations: {
              button: {
                buttonText: "Search Docs",
                buttonAriaLabel: "Search Docs",
              },
              modal: {
                noResultsText: "No results found",
                resetButtonTitle: "Reset search",
                footer: {
                  selectText: "Select",
                  navigateText: "Navigate",
                  closeText: "Close",
                },
              },
            },
          },
        },
      },
    },
  },
});
