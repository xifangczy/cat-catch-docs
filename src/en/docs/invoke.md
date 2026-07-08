# Invoke Local Program

![Invoke Program Icon](/assets/invoke.svg)

Settings - Enable Invoke Program. An invoke button will appear on the resource list page. Click it to open the protocol you have configured.

If the program you want to enable does not have a URL Protocol, you can use [https://github.com/xifangczy/URLProtocol](https://github.com/xifangczy/URLProtocol) to register one for it.

Take [https://github.com/nilaoda/N_m3u8DL-RE](https://github.com/nilaoda/N_m3u8DL-RE) as an example.

Download both tools and place them together.

Open URLProtocol, enter `m3u8dlre` as the protocol name, and select `N_m3u8DL-RE.exe` as the invocation target.

Cat Catch - Settings - Invoke Program - Parameter Settings

```
m3u8dlre:"${url}" --save-dir "%USERPROFILE%\Downloads" --del-after-done --save-name "${title}_${now}" --auto-select ${referer|exists:'-H "Referer: *"'}
```

Now all settings are complete.

To invoke N_m3u8DL-RE, simply click the invoke icon.

## Examples:

### Enable Thunder Download

`thunder://${url|exists:"AA*ZZ"|to:base64}`

### Play with PotPlayer

`potplayer:${url} ${referer|exists:'/referer="*"'}`

## Test Parameters

Add the parameter `--cat-catch-test` to display a prompt showing the program and parameters that are about to be invoked.

For example, `m3u8dlre:"${url}" --cat-catch-test`

::: warning
For Chrome custom URL Protocols, when the parameters contain ${url}, the protocol name must not contain double slashes "//"
:::
