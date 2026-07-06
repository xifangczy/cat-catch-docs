---
description: cat-catch 2.0 adds active detection capabilities.
---

# Deep Search / Cache Capture

## **Deep Search** {#deep-search}

If cat-catch cannot sniff resources by default, trying Deep Search is strongly recommended. It intercepts key functions to analyze hidden M3U8 or MPD files in the website. It also caches M3U8 file content (solving the issue of some sites where M3U8 URLs can only be opened once) and collects all suspected M3U8 keys. [#maybekey](m3u8parse#maybekey)

## Capture / Record

### **Cache Capture** {#cache-capture}

Captures video cache data. Use this when Deep Search still cannot capture resources. The downside is that you need to wait for the video to fully buffer. The advantage is that it supports almost all websites. You can use speed playback or drag the progress bar — just buffer the entire video and it will prompt when capture is complete. Only one video can be captured at a time, otherwise data will be corrupted.

![After enabling capture, a capture prompt and operation buttons appear in the top-right corner of the page.](/assets/cache-capture.png)

#### Expression Extraction

Use CSS selectors to extract text from the current page as the filename.

#### Regex Extraction

Use regex to extract text from the current page as the filename. If Expression Extraction is not set, regex matches the entire page. If Expression Extraction is set, regex is applied to the expression extraction results.

#### Use ffmpeg to Merge

Captured data is split into separate video and audio files — this is normal (note: allow multiple file downloads in browser prompts). Enable this option to merge them with online ffmpeg if the files are under 2GB.

::: info
Fix the video quality settings before cache capture. Do NOT change quality during capture, otherwise the captured data will be corrupted!

When using cache capture consecutively, wait for the video to finish playing and auto-download. Manual downloads may cause data corruption.
:::

::: info
**cat-catch strongly advises against using cache capture to record live streams.** The extension stores data in memory — if it crashes, the data is lost forever. For your precious data, use cat-catch to get the live stream URL and use a third-party tool to record and save it.
:::

### **Video Recording**

Uses JavaScript's built-in recording function to record video. Can record some live streaming sites. It records all your actions on the video, including play, pause, drag, and switch. Recording requires a stronger CPU, otherwise it may lag. **Cannot record DRM-protected videos.**

### **Screen Capture** {#screen-capture}

Uses screen sharing to record video. Requires Chromium 104+.

![Screen Capture](/assets/screen-capture.png)

Select **Screen Capture**. A recording area frame appears on the page. Adjust the frame size and position to cover the entire video. Click **Start Recording** — the browser will prompt whether to allow sharing the tab. Click **Allow** and remember to check "Share tab audio" to record audio. The final format is WebM.

![](/assets/screen-capture2.png)

::: info
Older browser versions may have a bug where no audio is recorded. Please upgrade your browser.
:::

### Record WebRTC

WebRTC live streams are commonly found in online video chat sites. You can try this script. Since this technology doesn't have conventional video streams, cache capture will not work.

::: info
Firefox does not support any capture scripts.
:::
