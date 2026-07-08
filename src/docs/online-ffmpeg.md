# 在线ffmpeg

工具链接： [https://ffmpeg.bmmmd.com/](https://ffmpeg.bmmmd.com/)
境外服务器： [https://ffmpeg.94cat.com/](https://ffmpeg.94cat.com/)

第一次使用会下载ffmpeg 大约30MB 请耐心等待，之后会缓存到浏览器内。

## ffmpeg命令

示例 `ffmpeg -i "av.mp4" -c copy "gv.mp4"`

命令`ffmpeg -codecs` 查看支持的编码

添加参数 `-nd` 文件处理完不下载文件，直接放入文件区

## 文件区

添加文件：使用 `加一坨文件` 按钮，或拖动本地的文件到页面上添加文件，或本地复制文件到页面粘贴(Ctrl+V)。

文件区内文件支持拖拽排序。

左键点击文件名可以在线预览视频，支持 m3u8 mpd flv 和mp4等各种视频格式。

可拖入字幕文件 在预览视频时点击字幕文件 字幕会载入到播放器上。播放器设置按钮可调 字幕大小以及时间轴偏移。

右键点击文件名 打开右键菜单。

## 局域网文件互传

局域网内 不同设备同时打开 [https://ffmpeg.bmmmd.com/](https://ffmpeg.bmmmd.com/) 出现 网络邻居。点击对方用户名可以选择一个或多个文件发送给对方。用户名随机，自己的用户名显示在一开始的Console中 `hello XXX` 。右键点击对方用户名，自动填写发送信息命令 `sendText '对方用户名' '你好!'`回车发送信息。

可通过拖拽文件区的文件到 网络邻居对方用户名上 传送文件。

::: info
所有文件传输以及信息只使用局域网传输，不经过任何远程服务器。

远程服务器只帮助局域网内用户互相建立联系、提供随机用户名后退出。

由开源项目 snapdrop 提供支持。

境外服务器不支持局域网文件互传功能。
:::

## 命令列表

|    命令     |                   说明                   |              示例              |
| :---------: | :--------------------------------------: | :----------------------------: |
|   ffmpeg    |                    /                     |               /                |
| clearFFmpeg |         清理缓存在浏览器的ffmpeg         |                                |
|    clear    |               清空console                |                                |
|     add     | 添加网络文件<br>不少网站限制，成功率不高 | add https://bmmmd.com/test.mp4 |
|    down     |             下载文件区的文件             |         down test.mp4          |
|    play     |        预览文件<br>参数可以为url         |         play test.mp4          |
|     ren     |                重命名文件                |      ren test.mp4 bmm.mp4      |
|  sendText   |   发送一条信息 第一个参数为 对方用户名   |  sendText "可爱的噗噗" 你好!   |
|    milk     |                   赞助                   |                                |
|   thanks    |               赞助感谢名单               |                                |
|    help     |                   帮助                   |                                |
|    mycat    |                    🐱                    |                                |

::: info
由于WebAssembly的限制, 在线ffmpeg目前只能处理最大2G的视频。
:::
