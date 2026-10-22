# 扩展调用

猫抓通过 `chrome.runtime.onMessageExternal` 对外提供 API，其他扩展或网页可以直接向猫抓发送消息，获取当前捕获的资源数据。

## 发送消息

```javascript
chrome.runtime.sendMessage(EXTENSION_ID, { action: "getData" }, (response) => {
  console.log(response);
});
```

`EXTENSION_ID` 为猫抓扩展的 ID，可在浏览器的扩展管理页面查看。

::: tip
其他扩展可以直接调用。网页调用需要站点在猫抓 `manifest.json` 的 `externally_connectable` 白名单范围内。
:::

## 支持的 action

消息格式为对象，通过 `action` 字段区分不同的功能：

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

### getData — 获取所有数据

获取所有标签页捕获的资源数据，返回以 tabId 为键的对象。

| 参数  | 类型          | 必填 | 说明                                                         |
| :---: | :------------ | :--: | ------------------------------------------------------------ |
| tabId | string/number |  否  | 指定标签页 ID 时，只返回该标签页的数据（不存在时返回 `null`） |

```javascript
// 获取所有标签页的数据
chrome.runtime.sendMessage(EXTENSION_ID, { action: "getData" }, (response) => {
  // response: { "<tabId>": 资源数据, ... }
});

// 获取指定标签页的数据
chrome.runtime.sendMessage(EXTENSION_ID, { action: "getData", tabId: 123456 }, (response) => {
  // response: 该标签页的资源数据，不存在时为 null
});
```

### getCurrentTabData — 获取当前标签页数据

获取当前标签页（猫抓正在监听的标签页）捕获的资源数据。

| 参数  | 类型          | 必填 | 说明                                                         |
| :---: | :------------ | :--: | ------------------------------------------------------------ |
| tabId | string/number |  否  | 不传时默认取当前标签页；也可手动指定，行为与 `getData` 传 `tabId` 一致 |

```javascript
chrome.runtime.sendMessage(EXTENSION_ID, { action: "getCurrentTabData" }, (response) => {
  // response: 当前标签页的资源数据，没有捕获到资源时为 null
});
```

::: warning
`action` 不在上述范围内时，猫抓不会响应，回调中的 `response` 为 `undefined`。调用前请确保猫抓扩展已安装并启用。
:::
