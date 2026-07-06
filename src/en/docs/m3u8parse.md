---
description: cat-catch has a built-in simple M3U8 parser that can easily merge and download M3U8 files.
---

# M3U8 Parser & Merge Download

## Parse and Merge

::: info
M3U8 merge download requires sufficient memory, otherwise it may crash. It is recommended to use **Stream Save** or third-party download tools via the m3u8dl protocol.
:::

When an M3U8 resource is captured, a parser icon appears next to it. Click to enter the M3U8 parser.

![Parser Entry Button](/assets/popup-m3u8.png)

![M3U8 Parser](/assets/m3u8.png)

### **Merge Download**

cat-catch includes a simple M3U8 segment merger that can merge and download M3U8 resources from most websites.

### **Suspected Keys Found** {#maybekey}

Using the `Deep Search` script or Tampermonkey scripts, cat-catch can automatically collect suspected key data. If any suspected keys are found, this option appears. Select one to auto-fill the custom key input. [Deep Search](cache-capture#deep-search)

![Suspected Key](/assets/maybeKey.png)

::: info
If there are multiple keys, try them one by one. Download a single segment first to test if it plays, until you find the correct key, then perform the full merge download.

Version 2.5.7+ adds a **Verify Key** button next to the suspected key list. Click to have the parser try each key automatically until the correct one is found. If verification fails, there may be an issue — you still need to try manually.
:::

### **More Features - Download Segment List**

Downloads all video segment links to a text file (TXT) for use with local batch download and merge tools.

### More Features - GET Parameters

Some websites require TS segments to have the same parameters as the M3U8 file. Click this button to add or remove the M3U8 file's parameters from the TS URLs.

### **Convert to MP4**

Only supports TS to MP4 conversion. If transcoding fails, binary merge mode is used automatically. Use a third-party tool for transcoding.

::: info
Merge download and format conversion happen in memory. Insufficient memory may cause the page to crash. **Using ffmpeg transcoding is recommended.**
:::

### ffmpeg Transcode

After download, redirects to the online ffmpeg website for transcoding. When enabled, Stream Save cannot be used.

::: info
Due to WebAssembly limitations, online ffmpeg can only process videos up to 2GB in size.
:::

### **Key - Custom Key**

Some websites' keys are not in the M3U8 file. cat-catch cannot decrypt and merge them automatically. You need to find the key yourself and enter it or upload a key file. Supports base64, hexadecimal, and key file URL.

::: info
Currently only AES-128-CBC encrypted resources are supported. For ChaCha20 / SAMPLE-AES-CTR and other encryption methods, please use third-party tools.
:::

**Skip Decryption (removed in 2.6.8+)**

Force merge download first, then decrypt with a local tool.

### **Download Range**

Select the segment range to download. If the M3U8 contains an `#EXT-X-MAP` tag, videos not starting from segment 1 may not play. **Supports time format `00:00:00` — click confirm after editing.**

### **Audio Only**

Saves audio only, using the transcoder. Requires enabling `MP4 transcoding` — the final format is still MP4.

### Save As

The merged file is stored in the browser's download directory. To change the directory, enable **Save As** — after merging, a dialog appears to select the directory or change the filename.

### **Record Live Stream**

For live M3U8 streams, the parser monitors the M3U8 and continuously saves video to memory until you click `Download Recording`. Long recording sessions are not recommended. Enable **Stream Save** to avoid memory overflow and page crashes.

### **Download Threads**

The number of segments to download simultaneously. Some websites limit concurrent downloads — too many threads may cause errors. Chrome limits concurrent connections to 6. Threads above 6 will wait and not work.

### Stream Save

Downloads in streaming mode, clearing memory as it goes. Solves memory issues with large files and browser limitations. Firefox does not support this yet. When enabled, online ffmpeg transcoding cannot be used. Recommended for live stream recording.

### Invoke m3u8DL Download

cat-catch supports invoking [N\_m3u8DL-CLI](https://github.com/nilaoda/N_m3u8DL-CLI) via protocol. See the [m3u8dl](m3u8dl) tutorial for details.

## Entry Point

Access via **More Features - M3U8 Parser**.

Supports M3U8 URLs, M3U8 file content, or a list of segment URLs for parsing.

### BaseURL

If the M3U8 content you entered has local file segments (no URLs), enter a BaseURL to fetch remote segment files.

### ${range} Tag Support

Usage: `${range:1-10}` generates numbers from 1 to 10.

For example, `https://bmmmd.com/${range:1-3}.ts` parses to:\
`https://bmmmd.com/1.ts`\
`https://bmmmd.com/2.ts`\
`https://bmmmd.com/3.ts`

Supports a second parameter to force padding. For example, `https://bmmmd.com/${range:1-3,3}.ts` parses to:\
`https://bmmmd.com/001.ts`\
`https://bmmmd.com/002.ts`\
`https://bmmmd.com/003.ts`

Supports unknown end index. For example, `https://bmmmd.com/${range:1-?}.ts` starts from 1 and tries to fetch segments until a 404 or error occurs.

::: warning
Unknown end index allows probing up to 9999 segments maximum.
:::

### Referer

If errors occur during any of the above operations, enter the Referer header first. If you only enter a URL, only the Referer header is set.

To set other headers, use JSON format, e.g.:

`{"origin":"https://www.bmmmd.com","referer":"https://www.bmmmd.com/test.m3u8"}`

::: info
Strict JSON format — properties must use double quotes.
:::
