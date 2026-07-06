# Settings

## **Extension and Type Matching Rules**

Determines how the browser handles received files.

![Capture Extensions](/assets/extension.png)

![Capture Types](/assets/type.png)

Capture types, also known as [MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types) types. Some websites don't provide correct file extensions, so MIME types are used to identify files. Subtypes support the `*` wildcard.

Starting from version 2.6.8, the size filter supports relational operators.

Supports `> >= < <= = !=` and range expressions. Size units: `B KB MB GB`\
Examples:

`>= 200KB` — resources larger than or equal to 200KB

`< 1GB` — resources smaller than 1GB

`!=500KB` — resources not equal to 500KB

`500-1024 MB` — resources between 500MB and 1GB

## **Regex Matching**

Regex matching is performed on the URL before the browser opens it, so it has the highest priority.

![Regex Matching](/assets/regex.png)

**Extension** — cat-catch cannot determine the resource type from regex matches, so you need to specify an extension. If left blank, it will try to extract the extension from the URL. Since many URLs have no extension, the type may remain unknown, and the parser entry or play icon won't appear on the popup page.

**Block Resources** — block resources you don't want to capture.

::: info
Regex matching is inefficient. Minimize its use to avoid excessive resource consumption.
:::

## Block URLs

If you don't need the extension on certain websites, you can set URLs with wildcard support, e.g. `https://x.com/*`

Enable the **Whitelist mode** option to switch the list to a whitelist — the extension will only work on URLs in the list.

## Copy Options

For use with third-party tools. Click the copy button on the popup page to copy the exact string you need.

![Copy Options](/assets/copy.png)

### URL Protocol m3u8dl

![](/assets/m3u8dl.png)

See [m3u8dl](m3u8dl) for details.

## Replace Tags

![](/assets/replace.png)

### Custom Save Filename

Enable the `Use custom filename to save files` option in **Other Settings**. You can create directories, e.g. `${title}/${fullFileName}` — the file will be stored in a folder named after the title.

## Tag System / Replace Keywords (2.3.1+) {#keywords}

Used for keyword replacement in Copy, Data Sending, URL Protocol m3u8dl, Invoke Program, Replace Tags, etc. Tags are case-sensitive.

See [tag](tag) for details.

## Other Settings

![Other Settings](/assets/other-settings.png)

### Never use cat-catch downloader

When downloading a file and the resource server rejects the request, cat-catch will reopen its built-in downloader with the Referer header to retry. If you use a third-party download tool, enable this option to prevent the cat-catch downloader from being invoked.

### Use local player protocol to open video preview {#player-protocol}

Some local players support URL protocols, e.g. PotPlayer supports `potplayer://`. cat-catch can use this protocol to directly invoke the player to play captured resources.

Supports tag replacement.

The `Protocol Template` dropdown on the right provides common player protocols. Only some Android browsers support the `intent:` protocol, so mobile users are advised to use `System Share` mode instead.

To disable the protocol, simply clear the field.

::: info
System Share mode requires a minimum browser version.

See [https://caniuse.com/mdn-api\_navigator\_share](https://caniuse.com/mdn-api_navigator_share) for details.
:::

### **m3u8dl:// Protocol Invocation**

See the [m3u8dl](m3u8dl) tutorial for details.

### Clear captured data on refresh / navigation

Three modes: Never clear, Normal clear, Frequent clear.

**Frequent clear** is more aggressive — e.g. on video sites, it clears when you click to watch the next video.

**Normal clear** strictly follows user-initiated actions: manual refresh or clicking a link to a new page.

Frequent clear may cause resources to be cleared immediately after being sniffed. If a site fails to capture resources, try switching to **Normal** or **Never clear**.

### Nested online ffmpeg

If data transfer fails during online ffmpeg processing for various complex reasons, enable this option to use a nested online ffmpeg instance as a workaround.

## Send Data {#send}

Send data to a custom third-party endpoint. The request body must be in JSON format.

`${action}` is a special tag representing different data types: `catch` for captured data, `addKey` for key data.

If `${action}` is `catch`, `${data}` is the file object converted to JSON.

If `${action}` is `addKey`, `${data}` is a base64-encoded key string.

Example: `{"action": "${action}", "data": ${data}, "tabId": "${tabId}"}`

```json
// {"action": "${action}", "data": ${data}, "tabId": "${tabId}"}
{
    action: "catch",
    data: {
        name: "filename",
        url: "resource URL",
        size: "file size"
        requestHeaders: {
            referer: "may not exist",
            origin: "may not exist",
            cookie: "may not exist"
        }
        ...: "other fields"
    },
    tabId: "source tab ID"
}

// JSON when a suspected key is received
{
    action: "addKey",
    data: "base64 data",
    tabId: "source tab ID"
}
```

::: info
The data sending feature is experimental. The JSON structure may vary across versions.
:::
