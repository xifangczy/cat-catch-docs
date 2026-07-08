# FAQ

## What to Do When Resources Cannot Be Captured

First, try [Deep Search](cache-capture#deep-search). Then try [Cache Capture](cache-capture#cache-capture), which requires the video to finish buffering before downloading. If download still fails, try the last option: [Screen Capture](cache-capture#screen-capture).

If you encounter a website where resources can only be downloaded via `Cache Capture`, please submit a bug report on GitHub or send an email.

## Audio and Video Are Separate

Many websites now use separate audio and video playback technology. Just select one audio track and one video track. If the conditions are met, an `Online Merge` button will appear. Click it to merge and download.

::: info
Due to technical limitations, only videos smaller than 2GB can be merged online. For larger files, use a local tool to merge.
:::

## ffmpeg Merge Error with Cache Capture

If you see the `error reading header` error, the captured file's header information is missing. Uncheck the ffmpeg merge option, download the audio and video separately, and merge them with a third-party tool.

## Cannot Capture YouTube

We're at their mercy — nothing we can do.

## Downloads Fail on Certain Education Platforms

Try the Tampermonkey script [https://greasyfork.org/zh-CN/scripts/461963](https://greasyfork.org/zh-CN/scripts/461963)

The script attempts to fetch the M3U8, reconstruct the correct addresses, and send them to Cat Catch.

## M3U8 Resource Plays Audio After Merge but Video Is Corrupted

The resource uses a non-standard encryption method, which currently has no solution. Try [Cache Capture](cache-capture#cache-capture).

## Merged M3U8 Download Shows Only a Single Image / Fragment Files Are in PNG Format

The resource disguises video fragments as images. In the M3U8 parser, check the `Data Preprocessing` option, which will strip out unnecessary image data. Alternatively, use the third-party tool N_m3u8DL-RE to download.

## Page Crashes During M3U8 Parser Merge Download

The downloaded file may be too large for your memory. Check `Stream While Downloading`. Note that online transcoding cannot be used when this option is enabled.

## Online ffmpeg Stuck at **ffmpeg loading...**

In the web command box, type the `clearFFmpeg` command and press Enter to clear ffmpeg. Then refresh the page and try downloading again...

## Online ffmpeg Loads wasm Too Slowly

Try the secret code `CatFoodForPrawnGuns` 😘

## Where Are Unfinished/Failed Download Files Saved?

If `Stream While Downloading` is not enabled, download data is stored in memory. If the download fails or is incomplete, refreshing the page or closing the browser will let the browser automatically clean up the data. If it still cannot be cleaned, try clearing the cache in your browser settings.

## Custom Filename Not Working

Whether you set a `Custom Save Filename` in the `Replace Tags` settings or use a custom name in the M3U8 parser, the downloaded filename is not what you configured. This may be caused by a third-party download tool or another downloader extension conflicting with the download API. Please disable other downloader extensions.
