# Online ffmpeg

Tool link: [https://ffmpeg.bmmmd.com/](https://ffmpeg.bmmmd.com/)
Overseas server: [https://ffmpeg.94cat.com/](https://ffmpeg.94cat.com/)

The first use will download ffmpeg (~30MB). Please be patient; afterwards it will be cached in the browser.

## ffmpeg Commands

Example: `ffmpeg -i "av.mp4" -c copy "gv.mp4"`

Use the command `ffmpeg -codecs` to view supported codecs.

Add the `-nd` parameter to skip downloading the processed file and place it directly in the file area.

## File Area

Add files: Use the `Add a bunch of files` button, drag local files onto the page, or paste copied local files onto the page (Ctrl+V).

Files in the file area support drag-and-drop reordering.

Left-click a filename to preview the video online. Supports m3u8, mpd, flv, mp4, and other video formats.

You can drag in subtitle files. When previewing a video, click the subtitle file to load it into the player. The player settings button lets you adjust subtitle size and timeline offset.

Right-click a filename to open the context menu.

## LAN File Transfer

When different devices on the same LAN open [https://ffmpeg.bmmmd.com/](https://ffmpeg.bmmmd.com/) at the same time, Network Neighbors will appear. Click another user's name to select one or more files to send to them. Usernames are random; your own username is shown in the Console at startup as `hello XXX`. Right-click another user's name to auto-fill the message command `sendText 'other user' 'Hello!'`, then press Enter to send the message.

You can also transfer files by dragging files from the file area onto another user's name under Network Neighbors.

::: info
All file transfers and messages are transmitted only within the LAN and do not pass through any remote server.

The remote server only helps users on the LAN establish contact with each other and provides random usernames before exiting.

Powered by the open-source project snapdrop.

The overseas server does not support the LAN file transfer feature.
:::

## Command List

|   Command   |                  Description                  |             Example            |
| :---------: | :-------------------------------------------: | :----------------------------: |
|   ffmpeg    |                       /                       |               /                |
| clearFFmpeg |     Clears the ffmpeg cached in the browser   |                                |
|    clear    |              Clears the console               |                                |
|     add     | Add a network file<br>Many sites restrict this, so the success rate is low | add https://bmmmd.com/test.mp4 |
|    down     |         Downloads a file from the file area         |         down test.mp4          |
|    play     |       Preview a file<br>The parameter can be a URL        |         play test.mp4          |
|     ren     |                Rename a file                |      ren test.mp4 bmm.mp4      |
|  sendText   |   Send a message; the first parameter is the recipient's username   |  sendText "Cute Pupu" Hello!   |
|    milk     |                  Sponsor                   |                                |
|   thanks    |            Sponsor thank-you list            |                                |
|    help     |                  Help                   |                                |
|    mycat    |                       🐱                    |                                |

::: info
Due to WebAssembly limitations, online ffmpeg can currently process videos up to 2GB in size.
:::
