---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "猫抓"
  text: "cat-catch"
  tagline: 开源、干净的网络资源嗅探浏览器扩展，帮你抓取网页中的视频、音频、图片等资源
  image:
    src: /assets/logo.png
    alt: 猫抓
  actions:
    - theme: brand
      text: 快速开始
      link: /docs/install
    - theme: alt
      text: GitHub
      link: https://github.com/xifangczy/cat-catch

features:
  - icon: 🔍
    title: 资源嗅探
    details: 自动捕获网页中的视频、音频、图片等各类资源，支持按后缀和正则匹配筛选。
    link: /docs/settings
    linkText: 设置后缀
  - icon: 🎬
    title: M3U8 解析器
    details: 内置 M3U8 解析器，支持解密、合并下载为 MP4，自动寻找 Key。
    link: /docs/m3u8parse
    linkText: 查看解析器
  - icon: 🎥
    title: 缓存捕捉 & 屏幕录制
    details: 捕获网页播放中的缓存数据，支持屏幕录制，不错过任何资源。
    link: /docs/cache-capture#cache-capture
    linkText: 查看缓存捕捉
  - icon: 🔗
    title: 调用本地程序
    details: 支持 m3u8dl://、aria2 等协议调起本地下载工具，灵活对接你的工作流。
    link: /docs/m3u8dl
    linkText: 查看调用方式
  - icon: 🔍
    title: 深度搜索
    details: 持续更新的搜索脚本，拦截关键函数分析隐藏资源，攻克各类疑难杂症网站。
    link: /docs/cache-capture
    linkText: 查看搜索脚本
  - icon: 🔧
    title: 高度可配置
    details: 自定义抓取类型、正则规则、右键菜单、复制选项等，按需开启功能。
    link: /docs/settings
    linkText: 查看设置
---

::: tip 开始使用
准备好试试猫抓了吗？前往 [安装指南](/docs/install) 选择你的浏览器，几分钟即可上手。
:::
