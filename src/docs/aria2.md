# Aria2 RPC

Aria2 是一款免费开源的轻量级多协议多平台下载工具，支持 RPC 远程调用下载。在远程电脑安装 Aria2 并开启 RPC 后，可以通过猫抓提交下载任务到本地电脑、远程电脑、NAS等。

## Motrix Next

Aria2 只支持命令行方式下载，且设置复杂。这里推荐内置了 Aria2 的开源下载工具 [Motrix Next](https://github.com/AnInsomniacy/motrix-next)。

- 安装并打开 Motrix Next
- 设置 - 高级，找到 RPC
- 复制 RPC 密钥
- 在猫抓扩展设置中找到 Aria2 RPC 相关设置
- 填入密钥
- 修改 Aria2 RPC 地址，默认为本地地址 `http://localhost:6800/jsonrpc`。注意：6800 端口需与 Motrix Next 的 RPC 监听端口一致。如果是局域网环境，将 localhost 修改为局域网 IP 地址。
- 打开 `启用 Aria2 RPC` 开关
- 完成

在 [popup](/docs/popup) 页面中，每条资源的下载按钮旁边出现 Aria2 RPC 下载按钮 ![aria2 RPC](/assets/aria2.png) 点击即可提交下载任务到你的 Motrix Next 软件。
