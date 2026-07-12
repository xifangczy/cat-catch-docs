# Aria2 RPC

Aria2 is a free, open-source, lightweight multi-protocol and multi-platform download tool that supports RPC remote invocation for downloads. After installing Aria2 on a remote computer and enabling RPC, you can submit download tasks from Cat Catch to the remote computer / NAS.

## Motrix Next

Aria2 only supports command-line downloads and has a complex setup. Here we recommend [Motrix Next](https://github.com/AnInsomniacy/motrix-next), an open-source download tool with built-in Aria2.

- Install and open Motrix Next
- Go to Settings - Advanced and locate RPC
- Copy the RPC secret
- Find the Aria2 RPC related settings in the Cat Catch extension settings
- Enter the secret
- Modify the Aria2 RPC address. The default is the local address `http://localhost:6800/jsonrpc`. Note: the 6800 port must match the RPC listening port of Motrix Next. If it is on a LAN, replace localhost with the LAN IP address.
- Toggle on `Enable Aria2 RPC`
- Done

On the [popup](/en/docs/popup) page, an Aria2 RPC download button ![aria2 RPC](/assets/aria2.png) will appear next to the download button of each resource. Click it to submit the download task to your Motrix Next software.
