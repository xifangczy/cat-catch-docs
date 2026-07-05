---
description: An online helper tool for changing media container formats.
---

# Online ffmpeg

Tool link: [https://ffmpeg.bmmmd.com/](https://ffmpeg.bmmmd.com/)

The first use downloads ffmpeg (~30MB). Please be patient — it will be cached in the browser afterwards.

## ffmpeg Commands

Example: `ffmpeg -i "av.mp4" -c copy "gv.mp4"`

Run `ffmpeg -codecs` to see supported codecs.\
Add the `-nd` parameter to process files without downloading — the result goes directly to the file area.

## File Area

**Add files:** Use the `Add Files` button, drag local files onto the page, or paste copied files (Ctrl+V).

Files in the file area support drag-to-reorder.

Left-click a filename to preview the video online. Supports m3u8, mpd, flv, mp4 and other video formats.

Drag subtitle files into the area — click the subtitle file while previewing to load it into the player. Player settings allow adjusting subtitle size and time offset.

Right-click a filename to open the context menu.

## LAN File Transfer

When different devices on the same LAN open [https://ffmpeg.bmmmd.com/](https://ffmpeg.bmmmd.com/), a **Network Neighbors** section appears. Click another user's name to send one or more files. Usernames are random — your own username is shown in the Console at startup: `hello XXX`. Right-click another user's name to auto-fill the message command `sendText 'username' 'Hello!'` — press Enter to send.

You can also drag files from the file area onto a user's name to transfer files.

::: info
All file transfers and messages use LAN only — no remote servers are involved.

The remote server only helps users on the same LAN discover each other and assign random usernames, then exits.

Powered by the open-source project snapdrop.
:::

## Command List

| Command | Description | Example |
| :-----: | :----------: | :-----: |
| ffmpeg | / | / |
| clearFFmpeg | Clear cached ffmpeg | |
| clear | Clear console | |
| add | Add network file<br>Many sites restrict this — low success rate | add https://bmmmd.com/test.mp4 |
| down | Download file from file area | down test.mp4 |
| play | Preview file<br>Parameter can be a URL | play test.mp4 |
| ren | Rename file | ren test.mp4 bmm.mp4 |
| sendText | Send a message — first parameter is the recipient's username | sendText "Cute Pupu" Hello! |
| milk | Sponsor | |
| thanks | Sponsor thank-you list | |
| help | Help | |
| mycat | 🐱 | |

::: info
Due to WebAssembly limitations, online ffmpeg can only process videos up to 2GB in size.
:::
