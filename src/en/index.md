---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "猫抓"
  text: "cat-catch"
  tagline: An open-source, clean browser extension for sniffing network resources, helping you capture videos, audio, images and other resources from web pages
  image:
    src: /assets/logo.png
    alt: 猫抓
  actions:
    - theme: brand
      text: Quick Start
      link: /en/docs/install
    - theme: alt
      text: GitHub
      link: https://github.com/xifangczy/cat-catch

features:
  - icon: 🔍
    title: Resource Sniffing
    details: Automatically captures videos, audio, images and other resources from web pages, supporting filtering by extension and regex matching.
    link: /en/docs/settings
    linkText: Configure Extensions
  - icon: 🎬
    title: M3U8 Parser
    details: Built-in M3U8 parser with decryption and merge-to-MP4 download support, automatically finds the Key.
    link: /en/docs/m3u8parse
    linkText: View Parser
  - icon: 🎥
    title: Cache Capture & Screen Recording
    details: Captures cached data during web playback, supports screen recording, never miss any resource.
    link: /en/docs/cache-capture#cache-capture
    linkText: View Cache Capture
  - icon: 🔗
    title: Invoke Local Programs
    details: Supports protocols like m3u8dl://, aria2 to launch local download tools, flexibly integrating with your workflow.
    link: /en/docs/m3u8dl
    linkText: View Invocation Methods
  - icon: 🔍
    title: Deep Search
    details: Continuously updated search scripts that intercept key functions to analyze hidden resources, tackling all kinds of tricky websites.
    link: /en/docs/cache-capture
    linkText: View Search Scripts
  - icon: 🔧
    title: Highly Configurable
    details: Customize capture types, regex rules, context menu, copy options and more, enabling features on demand.
    link: /en/docs/settings
    linkText: View Settings
---

::: tip Getting Started
Ready to try 猫抓? Head over to the [Installation Guide](/en/docs/install) to choose your browser, and get started in just a few minutes.
:::
