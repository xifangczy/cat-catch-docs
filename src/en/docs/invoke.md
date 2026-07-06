---
description: Requires cat-catch v2.5.3+
---

# Invoke Local Program

![Invoke Program Icon](/assets/invoke.svg)

Enable **Invoke Program** in Settings. An invoke button appears on the resource list page — click to open your configured protocol.

If the program you want to invoke doesn't have a URL Protocol, you can use [https://github.com/xifangczy/URLProtocol](https://github.com/xifangczy/URLProtocol) to register one.

Example using [https://github.com/nilaoda/N_m3u8DL-RE](https://github.com/nilaoda/N_m3u8DL-RE):

Download both tools and place them in the same folder.

Open URLProtocol, enter `m3u8dlre` as the protocol name, and select `N_m3u8DL-RE.exe` as the target.

cat-catch → Settings → Invoke Program → Parameter Settings:

```
m3u8dlre:"${url}" --save-dir "%USERPROFILE%\Downloads" --del-after-done --save-name "${title}_${now}" --auto-select ${referer|exists:'-H "Referer: *"'}
```

Setup is now complete.

Click the invoke icon to launch N_m3u8DL-RE.

## Examples:

### Enable Thunder Download

`thunder://${url|exists:"AA*ZZ"|to:base64}`

### Use PotPlayer to Play

`potplayer:${url} ${referer|exists:'/referer="*"'}`

## Test Parameters

Add the `--cat-catch-test` parameter to display the program and parameters before invocation.

For example: `m3u8dlre:"${url}" --cat-catch-test`

::: warning
Chrome's custom URL Protocol does not allow double slashes "//" in the protocol name when parameters contain ${url}.
:::
