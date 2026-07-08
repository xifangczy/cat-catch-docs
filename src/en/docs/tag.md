# Tag System / Replace Keywords

## Replace Tags

| Tag | Description | Result Example |
| --- | --- | --- |
| **`${url}`** | Resource address | `https://bmmmd.com/test.mp4` |
| **`${referer}`** | Resource request header <br>If the resource has no referer, no content is output. Recommended to use with the exists function | `https://bmmmd.com/` |
| **`${initiator}`** | Similar to ${referer} which always has a value<br>If the resource has no referer, the source URL domain or current page URL is used. | `https://bmmmd.com` |
| **`${webUrl}`** | Resource playback page address | `https://bmmmd.com/test.html` |
| **`${title}`** | Title of the resource playback page | Test Video |
| **`${fullFileName}`** | Full filename | `test.mp4` |
| **`${fileName}`** | Filename, without extension | test |
| **`${ext}`** | Extension, without "." | mp4 |
| **`${userAgent}`** | User Agent, customizable in Settings - Replace Tags | `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36` |
| **`${cookie}`** | Cookie required by the resource **may be empty**<br>Format is key=value;key=value;<br>Requires Cat Catch version 2.3.8 | `key=value;key2=value2;` |
| **`${mobileUserAgent}`** | The User Agent used when simulating a mobile phone |  |
| `${year}`<br>`${month}`<br>`${date}`<br>`${hours}`<br>`${minutes}`<br>`${seconds}` | Time related, year/month/day/hour/minute/second | * |
| `${day}` | Day of the week (English) | Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday |
| **`${now}`** | Unix timestamp | 1672329448871 |
| **`${fullDate}`** | Date | 2020-12-28 |
| **`${time}`** | Time | 21'30'55 |
| `${shareApi}` | System share API, only allowed in [#player-protocol](settings#player-protocol) |  |
| `${range}` | Range generation tag, only allowed in m3u8 parser entry. For details, see [m3u8 Parse](m3u8parse) |  |

---

## Function Support

The bolded tags in the above list can use functions

| Function | Description | Example |
| --- | --- | --- |
| slice | Character extraction | `${title\|slice:0,5}`<br>Extract the first 5 characters of the title<br><br>`${title\|slice:-10}`<br>Extract the last 10 characters of the title<br><br>Parameter setting comes from the js language slice function |
| replace | Character replacement | `${fullFileName\|replace:".m3u8",".mp4"}`<br>Replace ".m3u8" in the filename with ".mp4"<br><br>`${title\|replace:"website",""}`<br>Delete the word "website" from the title<br><br>Parameter setting comes from the js language replace function |
| replaceAll | Character replacement | Same as above<br>replace only replaces once. replaceAll replaces multiple times.<br><br>`${fullDate\|replaceAll:"-","/"}`<br>2020/12/28<br>Replace the date separator with "/" |
| regexp | Regex extraction | `${url\|regexp:"(https?://[^?]*)"}`<br>Resource address, extract the address without parameters |
| exists | Output if exists<br>Otherwise output the second parameter. If there is no second parameter, output nothing. | `${referer\|exists:'--headers "Referer:*"'}`<br>If referer exists, output --headers "Referer:*"<br>The * will eventually be replaced with the referer itself.<br><br>*Recommended to be filled in the m3u8DL parameters. If referer exists, pass the `--headers` parameter to m3u8DL, otherwise do not pass it.*<br><br>`${fullFileName\|exists:"*","${title}"}`<br>If there is a filename, output itself; if there is no filename, output the webpage title. |
| to | String conversion<br>base64<br>urlEncode<br>urlDecode<br>lowerCase<br>upperCase<br>filter | `${title\|to:base64}`<br>5rWL6K+V6KeG6aKR<br>base64 encoding<br><br>`${url\|to:urlEncode}`<br>https%3A%2F%2Fbmmmd.com%2Ftest.m3u8<br>url encoding<br><br>`${url\|to:lowerCase}` Convert English letters to lowercase<br>`${url\|to:upperCase}` Convert English letters to uppercase<br><br>`${url\|to:filter}`  Replace characters that cannot be used as filenames with HTML character entities |
| filter | Filter/replace characters that cannot be used as filenames | `${url\|filter:"_"}` Replace characters that cannot be used as filenames with underscore<br>Replaced characters `\ / < > : " \| ? * ~` |

Supports chained calls, for example:

`${url|regexp:"(https?://[^?]*)"|replace:"http://","https://"|to:base64}`

It will perform extraction, replacement, and base64 conversion on the url in sequence from left to right.
