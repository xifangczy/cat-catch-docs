# 标签系统 / 替换关键词

## 替换标签

| 标签 | 说明 | 结果 示例 |
| --- | --- | --- |
| **`${url}`** | 资源地址 | `https://bmmmd.com/test.mp4` |
| **`${referer}`** | 资源请求头 <br>如果资源不存在referer不输出内容, 建议配合exists函数 | `https://bmmmd.com/` |
| **`${initiator}`** | 类似于永远有值的 ${referer}<br>如果资源不存在referer则使用来源网址域名或当前页面网址。 | `https://bmmmd.com` |
| **`${webUrl}`** | 资源播放页面地址 | `https://bmmmd.com/test.html` |
| **`${title}`** | 资源播放页面的标题 | 测试视频 |
| **`${fullFileName}`** | 完整文件名 | `test.mp4` |
| **`${fileName}`** | 文件名，不包含扩展 | test |
| **`${ext}`** | 扩展名，不包含"." | mp4 |
| **`${userAgent}`** | User Agent 自定义在设置 - 替换标签 修改 | `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36` |
| **`${cookie}`** | 资源所需的cookie **有可能为空**<br>格式为 key=value;key=value;<br>需要猫抓 2.3.8版本 | `key=value;key2=value2;` |
| **`${mobileUserAgent}`** | 同样也是模拟手机时用的User Agent |  |
| `${year}`<br>`${month}`<br>`${date}`<br>`${hours}`<br>`${minutes}`<br>`${seconds}` | 时间相关，年/月/日/时/分/秒 | * |
| `${day}` | 星期几(英文) | Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday |
| **`${now}`** | unix 时间戳 | 1672329448871 |
| **`${fullDate}`** | 日期 | 2020-12-28 |
| **`${time}`** | 时间 | 21'30'55 |
| `${shareApi}` | 系统分享API 只允许在 [#player-protocol](settings#player-protocol) |  |
| `${range}` | 生成范围标签 只允许在m3u8解析器入口使用 详情查看 [m3u8解析](m3u8parse) |  |
| `${tabId}` | 资源所属的浏览器Tab ID | 520 |
| `${data}` | 资源原始数据, JSON格式 | {"url":"https://bmmmd.com/test.mp4", ...} |
| `${action}` | 只允许在[数据发送](settings#send)中使用<br>如果是资源, 该标签会被替换为 'catch' <br>如果是密钥, 该标签会被替换为 'addKey' | catch <br> addKey |

---

## 函数支持

以上列表标粗的标签可以使用函数

| 函数 | 说明 | 示例 |
| --- | --- | --- |
| slice | 字符截取 | `${title\|slice:0,5}`<br>提取标题前5个字符<br><br>`${title\|slice:-10}`<br>提取标题末尾10个字符<br><br>参数设定来自 js语言 slice 函数 |
| replace | 字符替换 | `${fullFileName\|replace:".m3u8",".mp4"}`<br>文件名中的".m3u8"字符替换成".mp4"<br><br>`${title\|replace:"网站",""}`<br>删除标题中 网址 一词<br><br>参数设定来自 js语言 replace 函数 |
| replaceAll | 字符替换 | 同上<br>replace 只替换一次。replaceAll 多次替换。<br><br>`${fullDate\|replaceAll:"-","/"}`<br>2020/12/28<br>把日期的分隔符换成 "/" |
| regexp | 正则提取 | `${url\|regexp:"(https?://[^?]*)"}`<br>资源地址，提取不包含参数的地址 |
| exists | 如果存在则输出<br>反之输出第二个参数，没有第二个参数，不输出任何内容。 | `${referer\|exists:'--headers "Referer:*"'}`<br>如果存在referer 则输出 --headers "Referer:*"<br>*号最终会被替换成referer本身。<br><br>*建议填写在m3u8DL参数内，如果存在referer向m3u8DL传递`--headers`参数，如果没有则不传递。*<br><br>`${fullFileName\|exists:"*","${title}"}`<br>如果有文件名输出自己，没有文件名输出网页标题。 |
| to | 字符串转换<br>base64<br>urlEncode<br>urlDecode<br>lowerCase<br>upperCase<br>filter | `${title\|to:base64}`<br>5rWL6K+V6KeG6aKR<br>base64编码<br><br>`${url\|to:urlEncode}`<br>https%3A%2F%2Fbmmmd.com%2Ftest.m3u8<br>url编码<br><br>`${url\|to:lowerCase}` 英文字母转小写<br>`${url\|to:upperCase}` 英文字母转大写<br><br>`${url\|to:filter}`  无法作为文件名的字符替换为HTML字符实体 |
| filter | 过滤/替换 无法作为文件名的字符 | `${url\|filter:"_"}` 把不能作为文件名的字符 替换为 下划线<br>被替换的字符 `\ / < > : " \| ? * ~` |

支持链式调用，例如:

`${url|regexp:"(https?://[^?]*)"|replace:"http://","https://"|to:base64}`

将从左到右依次对url进行，提取 替换 转换base64操作。
