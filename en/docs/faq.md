# FAQ

## Can't capture any resources

First try [Deep Search](cache-capture#deep-search). Then try [Cache Capture](cache-capture#cache-capture) — this requires waiting for the video to fully buffer before downloading. If still unable, try [Screen Capture](cache-capture#screen-capture) as a last resort.

If you encounter a site where only `Cache Capture` works, please submit a bug on GitHub or send an email.

## Audio and video are separated

Many websites now use separated audio and video playback. Simply select one audio and one video — if eligible, an `Online Merge` button appears. Click to merge and download.

::: info
Due to technical limitations, only videos under 2GB can be merged online. For larger files, use a local tool.
:::

## ffmpeg merge error with Cache Capture

If you see `error reading header`, the captured file header is missing. Disable ffmpeg merge and download audio and video separately, then merge with a third-party tool.

## Can't capture YouTube

We're constrained by the platform — nothing we can do.

## Can't download from XiaoE Tong (小鹅通)

Try the Tampermonkey script: [https://greasyfork.org/zh-CN/scripts/461963](https://greasyfork.org/zh-CN/scripts/461963)

The script attempts to fetch the M3U8, reassemble the correct URL, and send it to cat-catch.

## M3U8 merge download has audio but corrupted video

The resource uses an unconventional encryption method. There's no solution yet — try [Cache Capture](cache-capture#cache-capture).

## M3U8 merge download shows only a single image / segments are PNG format

The resource disguises video segments as images. In the M3U8 parser, enable `MP4 format` to strip unnecessary image data, or use the third-party tool N_m3u8DL-RE.

## M3U8 parser crashes during merge download

The file may be too large for your memory. Enable `Stream Save` — note that online transcoding cannot be used with this option.

## Online ffmpeg stuck on "Loading ffmpeg..."

Enter `clearFFmpeg` in the web command box and press Enter to clear ffmpeg cache, then refresh the page to re-download.

## Online ffmpeg loads wasm too slowly

Try the secret code `CatFoodForPrawnGuns` 😘

## Where are unfinished/failed downloads saved?

Without `Stream Save` enabled, download data is stored in memory. If the download fails or is incomplete, refreshing the page or closing the browser will automatically clear the data. If it persists, try clearing the browser cache in browser settings.
