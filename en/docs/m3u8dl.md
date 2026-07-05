# Using the m3u8dl:// Protocol

## N_m3u8DL-RE
[N_m3u8DL-RE](https://github.com/nilaoda/N_m3u8DL-RE) is a cross-platform DASH/HLS/MSS download tool. Supports VOD and live streaming (DASH/HLS). Currently supports protocol invocation.

## URLProtocol
[URLProtocol](https://github.com/xifangczy/URLProtocol) is a tool for registering custom URL protocols. It can register any program as a URL protocol for easy invocation.

## Installation
1. Download URLProtocol.exe and N_m3u8DL-RE.exe and place them in the same folder.
2. Open the URLProtocol tool, enter `m3u8dl` as the protocol name, click "Select Target Program", choose `N_m3u8DL-RE.exe`, and click "Add". The protocol is now registered.
3. Open your browser and enter `m3u8dl://` to test. If a dialog appears, the registration was successful.
4. In cat-catch settings, change `m3u8dl Custom Protocol` from `Disabled` to `N_m3u8DL-RE`.
5. Refer to the [N_m3u8DL-RE](https://github.com/nilaoda/N_m3u8DL-RE) documentation and modify the parameters in `Parameter Settings` as needed.

Default parameters:
`"${url}" --save-dir "%USERPROFILE%\Downloads\m3u8dl" --save-name "${title}_${now}" ${referer|exists:'-H "Referer:*"'} --del-after-done --no-log`

For more parameters, see the [https://github.com/nilaoda/N_m3u8DL-RE](https://github.com/nilaoda/N_m3u8DL-RE) GitHub page.

Once configured, simply click the download icon next to a sniffed M3U8 resource to invoke `N_m3u8DL-RE` to download it.

::: warning
Both tools must remain in a fixed file location, otherwise the protocol won't find the target program next time.
:::
