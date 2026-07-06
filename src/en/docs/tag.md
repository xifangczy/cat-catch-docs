---
description: Used for keyword replacement in Copy, Data Sending, URL Protocol m3u8dl, Invoke Program, Replace Tags, etc. Tags are case-sensitive.
---

# Tag System / Replace Keywords

## Replace Tags

| Tag | Description | Result Example |
| --- | --- | --- |
| **`${url}`** | Resource URL | `https://bmmmd.com/test.mp4` |
| **`${referer}`** | Resource request header <br>If no referer exists, outputs nothing. Recommended to use with the exists function. | `https://bmmmd.com/` |
| **`${initiator}`** | Similar to ${referer} but always has a value<br>If no referer exists, uses the source domain or current page URL. | `https://bmmmd.com` |
| **`${webUrl}`** | Resource playback page URL | `https://bmmmd.com/test.html` |
| **`${title}`** | Title of the resource playback page | Test Video |
| **`${fullFileName}`** | Full filename | `test.mp4` |
| **`${fileName}`** | Filename without extension | test |
| **`${ext}`** | Extension without "." | mp4 |
| **`${userAgent}`** | User Agent — customizable in Settings → Replace Tags | `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36` |
| **`${cookie}`** | Cookie required by the resource **may be empty**<br>Format: key=value;key=value;<br>Requires cat-catch version 2.3.8 | `key=value;key2=value2;` |
| **`${mobileUserAgent}`** | Same User Agent used for mobile simulation |  |
| `${year}`<br>`${month}`<br>`${date}`<br>`${hours}`<br>`${minutes}`<br>`${seconds}` | Time-related: year/month/day/hour/minute/second | * |
| `${day}` | Day of week (English) | Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday |
| **`${now}`** | Unix timestamp | 1672329448871 |
| **`${fullDate}`** | Date | 2020-12-28 |
| **`${time}`** | Time | 21'30'55 |
| `${shareApi}` | System Share API — only allowed in [#player-protocol](settings#player-protocol) |  |
| `${range}` | Range generator tag — only allowed in M3U8 parser entry. See [M3U8 Parser](m3u8parse) |  |

---

## Function Support

Bold tags in the list above support functions.

| Function | Description | Example |
| --- | --- | --- |
| slice | String slicing | `${title\|slice:0,5}`<br>Extract first 5 characters of title<br><br>`${title\|slice:-10}`<br>Extract last 10 characters of title<br><br>Parameters follow JavaScript's slice function |
| replace | String replacement | `${fullFileName\|replace:".m3u8",".mp4"}`<br>Replace ".m3u8" with ".mp4" in filename<br><br>`${title\|replace:"website",""}`<br>Remove the word "website" from title<br><br>Parameters follow JavaScript's replace function |
| replaceAll | String replacement (all) | Same as above<br>replace only replaces once. replaceAll replaces all occurrences.<br><br>`${fullDate\|replaceAll:"-","/"}`<br>2020/12/28<br>Replace date separator with "/" |
| regexp | Regex extraction | `${url\|regexp:"(https?://[^?]*)"}`<br>Extract URL without query parameters |
| exists | Output if exists<br>Otherwise output the second parameter. If no second parameter, output nothing. | `${referer\|exists:'--headers "Referer:*"'}`<br>If referer exists, output --headers "Referer:*"<br>The * is replaced by the referer value.<br><br>*Recommended for m3u8DL parameters — passes --headers if referer exists, otherwise omits it.*<br><br>`${fullFileName\|exists:"*","${title}"}`<br>If filename exists, output itself; otherwise output page title. |
| to | String conversion<br>base64<br>urlEncode<br>urlDecode<br>lowerCase<br>upperCase<br>filter | `${title\|to:base64}`<br>5rWL6K+V6KeG6aKR<br>Base64 encode<br><br>`${url\|to:urlEncode}`<br>https%3A%2F%2Fbmmmd.com%2Ftest.m3u8<br>URL encode<br><br>`${url\|to:lowerCase}` Convert to lowercase<br>`${url\|to:upperCase}` Convert to uppercase<br><br>`${url\|to:filter}` Replace invalid filename characters with HTML entities |
| filter | Filter/replace invalid filename characters | `${url\|filter:"_"}` Replace invalid filename characters with underscore<br>Replaced characters: `\ / < > : " \| ? * ~` |

Supports chaining, for example:

`${url|regexp:"(https?://[^?]*)"|replace:"http://","https://"|to:base64}`

This will perform extraction, replacement, and base64 conversion on the URL from left to right.
