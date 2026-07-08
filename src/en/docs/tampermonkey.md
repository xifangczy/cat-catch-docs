# Sending Resources to Cat Catch via Tampermonkey Scripts

Cat Catch's built-in [Deep Search](cache-capture) covers most scenarios, but for heavily protected websites, additional handling is needed. Tampermonkey scripts can bridge these gaps. This page demonstrates how to send data to Cat Catch so that you can write your own scripts.

Use the `window.postMessage()` function to send a resource or key to Cat Catch.

## Sending a Resource

The parameter is an object with the following properties:

| Property |       Value (Example)       | Description                                                                                      |
| :------: | :-------------------------: | ------------------------------------------------------------------------------------------------ |
|  action  |      "catCatchAddMedia"     | Required, fixed. Tells Cat Catch to add a resource                                               |
|   url    |              *              | The resource URL                                                                                 |
|   href   |       location.href         | The current page URL, so Cat Catch can identify the source of the resource. Usually location.href |
|   ext    |              *              | The resource extension. If left empty, Cat Catch will parse it from the URL. Can be empty        |
|   mime   |              *              | The MIME type of the resource, e.g. video/mp4. Can be empty                                      |
| referer  |              *              | The Referer header required to open the resource. Can be empty                                   |

Script example

[https://greasyfork.org/zh-CN/scripts/456150/code](https://greasyfork.org/zh-CN/scripts/456150/code)

```javascript
window.postMessage({
  action: "catCatchAddMedia",
  url: "https://github.com/xifangczy/cat-catch",
  href: location.href,
  ext: "test",
  mime: "test/text",
  referer: "https://github.com",
});
```

After installing the script, return to this page and refresh. You should see an additional resource appear in Cat Catch, which is the one sent from the Tampermonkey script.

You can also use a script to download resources into memory via GM_xmlhttpRequest, ajax, or fetch, then create a blob URL using `new Blob()` and `URL.createObjectURL()` and send it to Cat Catch.

```javascript
fetch("https://bmmmd.com/")
  .then((response) => response.blob())
  .then(function (blob) {
    window.postMessage({
      action: "catCatchAddMedia",
      url: window.URL.createObjectURL(blob),
      href: location.href,
      ext: "html",
    });
  });
```

## Sending a Key

Some websites do not include the M3U8 key inside the file; it must be derived by analyzing the page. You can obtain the key via a script and send it to the Cat Catch M3U8 parser. See [Finding Suspected Keys](m3u8parse#maybekey) for details.

| Property |       Value (Example)        | Description                                                                                                                                                      |
| :------: | :--------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  action  |       "catCatchAddKey"       | Required, fixed. Tells Cat Catch to add a key                                                                                                                    |
|   key    |               *              | Key data, either base64-encoded or of arrayBuffer type.                                                                                                          |
|   href   |        location.href         | The current page URL, so Cat Catch can identify the source of the key. Usually location.href is sufficient                                                        |
|   ext    | "base64Key" / "key" | <p>If the key is base64-encoded, enter<br>base64Key<br><br>If the key is of arrayBuffer type, enter<br>key</p><p><br><strong>From version 2.3.0 onward, the key type is auto-detected and this field is no longer required.</strong></p> |

```javascript
window.postMessage({
  action: "catCatchAddKey",
  key: "aHR0cHM6Ly9ibW1tZC5jb20=",
  href: location.href,
  ext: "base64Key",
});
```
