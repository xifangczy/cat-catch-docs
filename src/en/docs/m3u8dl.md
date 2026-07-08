# m3u8dl Custom Protocol

## N_m3u8DL-RE

[N_m3u8DL-RE](https://github.com/nilaoda/N_m3u8DL-RE) is a cross-platform DASH/HLS/MSS download tool. It supports on-demand and live streaming (DASH/HLS). It does not currently support invocation via protocol.

## URLProtocol

[URLProtocol](https://github.com/xifangczy/URLProtocol) is a tool for registering custom URL protocols. It can register any program as a URL protocol for easy invocation.

## Installation

1. Download URLProtocol.exe and N_m3u8DL-RE.exe and place them together.
2. Open the URLProtocol tool, enter `m3u8dl` as the protocol name, click the select target program button, select `N_m3u8DL-RE.exe`, and click Add. This completes the protocol registration.
3. Open the browser and enter `m3u8dl://` to test whether the registration is successful. A popup dialog indicates successful registration.
4. In Cat Catch settings, change `m3u8dl Custom Protocol` -> `Disable` to `N_m3u8DL-RE`.
5. Refer to the documentation of [N_m3u8DL-RE](https://github.com/nilaoda/N_m3u8DL-RE) and modify the parameters in `Parameter Settings` to your desired values.

Default parameters:
`"${url}" --save-dir "%USERPROFILE%\Downloads\m3u8dl" --save-name "${title}_${now}" ${referer|exists:'-H "Referer:*"'} --del-after-done --no-log`

For more parameters, please refer to the GitHub page at [https://github.com/nilaoda/N_m3u8DL-RE](https://github.com/nilaoda/N_m3u8DL-RE).

Once an m3u8 resource is sniffed, simply click the download icon to invoke `N_m3u8DL-RE` to download the m3u8 file.

::: warning
The two tools must be kept in fixed file locations, otherwise the protocol will not be able to find the target program the next time it is opened.
:::
