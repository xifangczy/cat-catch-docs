---
description: Tampermonkey is a popular userscript manager. The official extension store has slow review processes for updates, while userscripts can be quickly written and updated to support specific websites.
---

# Sending Resources to cat-catch via Tampermonkey

cat-catch's built-in [Deep Search](cache-capture) covers most cases, but heavily protected websites may require special handling. Tampermonkey scripts can bridge this gap. This guide shows how to send data to cat-catch so you can write your own scripts.

Use `window.postMessage()` to send a resource or key to cat-catch.

## Send Resource

The parameter is an object with the following properties:

| Property | Value (Example) | Description |
| :------: | :--------------: | ----------- |
| action | "catCatchAddMedia" | Fixed, required. Tells cat-catch to add a resource. |
| url | \* | Resource URL |
| href | location.href | Current page URL, helps cat-catch identify the source. Usually `location.href` |
| ext | \* | Resource extension. If empty, cat-catch will analyze it from the URL. Can be empty. |
| mime | \* | Resource MIME type, e.g. `video/mp4`. Can be empty. |
| referer | \* | Referer header required to open the resource. Can be empty. |

Script example:

[https://greasyfork.org/zh-CN/scripts/456150/code](https://greasyfork.org/zh-CN/scripts/456150/code)

```javascript
window.postMessage({
    action: "catCatchAddMedia",
    url: "https://github.com/xifangczy/cat-catch",
    href: location.href,
    ext: "test",
    mime: "test/text",
    referer: "https://github.com"
});
```

After installing, return to this page and refresh. You should see a new resource in cat-catch — that's the one sent from the userscript.

You can also download resources via GM\_xmlhttpRequest, ajax, or fetch into memory, create a Blob URL with `new Blob()` and `URL.createObjectURL()`, and send it to cat-catch.

```javascript
fetch("https://bmmmd.com/")
.then(response => response.blob())
.then(function (blob) {
    window.postMessage({
        action: "catCatchAddMedia",
        url: window.URL.createObjectURL(blob),
        href: location.href,
        ext: "html",
    });
});
```

## Send Key

Some websites' M3U8 keys are not in the file — they need to be extracted from the page analysis. You can send the key to cat-catch's M3U8 parser via script. See [Suspected Keys](m3u8parse#maybekey) for details.

| Property | Value (Example) | Description |
| :------: | :--------------: | ----------- |
| action | "catCatchAddKey" | Fixed, required. Tells cat-catch to add a key. |
| key | \* | Key data, base64-encoded or as ArrayBuffer. |
| href | location.href | Current page URL, helps cat-catch identify the source. Usually `location.href`. |
| ext | "base64Key" / "key" | <p>If key is base64-encoded, use<br>base64Key<br><br>If key is ArrayBuffer type, use<br>key</p><p><br><strong>Version 2.3.0+ can auto-detect key type — no need to specify.</strong></p> |

```javascript
window.postMessage({
    action: "catCatchAddKey",
    key: "aHR0cHM6Ly9ibW1tZC5jb20=",
    href: location.href,
    ext: "base64Key",
});
```
