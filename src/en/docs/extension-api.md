# Extension API

Cat Catch exposes an external API via `chrome.runtime.onMessageExternal`. Other extensions or web pages can send messages to Cat Catch to retrieve the captured media data.

## Sending a Message

```javascript
chrome.runtime.sendMessage(EXTENSION_ID, { action: "getData" }, (response) => {
  console.log(response);
});
```

`EXTENSION_ID` is the ID of the Cat Catch extension, which can be found on the browser's extension management page.

::: tip
Other extensions can call this API directly. Calls from web pages require the site to be within the `externally_connectable` allowlist of Cat Catch's `manifest.json`.
:::

## Supported Actions

Messages are objects, and the `action` field determines the operation:

```javascript
chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
  if (request.action === "getData") {
    if (request.tabId) {
      sendResponse(cacheData[request.tabId] ?? null);
      return true;
    }
    sendResponse(cacheData);
    return true;
  } else if (request.action === "getCurrentTabData") {
    const tabId = request.tabId ?? G.tabId;
    sendResponse(cacheData[tabId] ?? null);
    return true;
  }
});
```

### getData — Get All Data

Returns the media data captured from all tabs, as an object keyed by tabId.

| Parameter | Type          | Required | Description                                                                 |
| :-------: | :------------ | :------: | --------------------------------------------------------------------------- |
|   tabId   | string/number |    No    | When specified, only the data of that tab is returned (`null` if not found) |

```javascript
// Get data from all tabs
chrome.runtime.sendMessage(EXTENSION_ID, { action: "getData" }, (response) => {
  // response: { "<tabId>": media data, ... }
});

// Get data from a specific tab
chrome.runtime.sendMessage(EXTENSION_ID, { action: "getData", tabId: 123456 }, (response) => {
  // response: the media data of that tab, or null if not found
});
```

### getCurrentTabData — Get Current Tab Data

Returns the media data captured from the current tab (the tab Cat Catch is currently watching).

| Parameter | Type          | Required | Description                                                                                    |
| :-------: | :------------ | :------: | ---------------------------------------------------------------------------------------------- |
|   tabId   | string/number |    No    | Defaults to the current tab when omitted; behaves the same as `getData` with a specified `tabId` |

```javascript
chrome.runtime.sendMessage(EXTENSION_ID, { action: "getCurrentTabData" }, (response) => {
  // response: the media data of the current tab, or null if nothing was captured
});
```

::: warning
If `action` is not one of the above, Cat Catch will not respond and `response` will be `undefined`. Make sure the Cat Catch extension is installed and enabled before calling.
:::
