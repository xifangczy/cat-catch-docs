# 使用 m3u8dl:// 协议

## N_m3u8DL-RE
[N_m3u8DL-RE](https://github.com/nilaoda/N_m3u8DL-RE) 跨平台的DASH/HLS/MSS下载工具。支持点播、直播(DASH/HLS)。目前支持调用协议。

## URLProtocol
[URLProtocol](https://github.com/xifangczy/URLProtocol) 一个注册自定义URL协议的工具。可以将任意程序注册为URL协议，方便调用。

## 安装方法
1. 下载URLProtocol.exe 和 N_m3u8DL-RE.exe 并放置在一起。
2. 打开URLProtocol工具，协议名填写 `m3u8dl` 点击选择目标程序按钮，选择`N_m3u8DL-RE.exe` 点击添加。完成了协议的注册。
3. 打开浏览器，打开 `m3u8dl://` 测试是否注册成功，弹出对话框说明注册成功。
4. 猫抓设置 `m3u8dl 自定义协议` -> `禁用` 修改为 `N_m3u8DL-RE`。
5. 查看 [N_m3u8DL-RE](https://github.com/nilaoda/N_m3u8DL-RE) 的说明文档，在`参数设置`修改为你想要的参数。

默认参数：
`"${url}" --save-dir "%USERPROFILE%\Downloads\m3u8dl" --save-name "${title}_${now}" ${referer|exists:'-H "Referer:*"'} --del-after-done --no-log`

更多参数查看[https://github.com/nilaoda/N_m3u8DL-RE](https://github.com/nilaoda/N_m3u8DL-RE) github页面。

嗅探到m3u8资源直接点击下载图标即可调用`N_m3u8DL-RE`下载该m3u8文件。

::: warning
两个工具需固定文件位置，否则下次打开协议会找不到目标程序。
:::
