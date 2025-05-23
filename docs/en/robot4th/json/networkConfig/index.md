# <p class="hidden">JSON protocol: </p>Network Configuration Command Set

## Wired network

### Set the wired network information `set_NetIP`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `set_NetIP` | `string` |Set the wired network IP address. |

::: warning
After the command is issued, if the setting is successful, the robotic arm's buzzer will beep once. The user should then manually restart the robotic arm.
:::

- **Code demo**

**Input**

Note: set the Ethernet port with the following configurations: IP address 192.168.1.18, subnet mask 255.255.255.0, and gateway 192.168.1.1.

```json
{"command":"set_NetIP","ip":"192.168.1.18","netmask":"255.255.255.0","gw":"192.168.1.1"}
```

**Output**

IP address successfully configured:

```json
{
    "command": "set_NetIP",
    "status": true
}
```

IP address configuration failed:

```json
{
    "command": "set_NetIP",
    "status": false
}
```

### Get the wired network information `get_wired_net`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `get_wired_net` | `string` |Get the wired network card information. If the wired network is not connected, invalid data will be returned. |

- **Output parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `ip` | `string` |Network address. |
| `mask` | `string` |Subnet mask. |
| `mac` | `string` |mac address. |
| `gw` | `string` | Gateway address. |

- **Code demo**

**Input**

Get the wired network information.

```json
{"command":"get_wired_net"}   
```

**Output**

```json
{
    "command": "get_wired_net",
    "mask": "255.255.255.0",
    "ip": "192.168.1.18",
    "gw": "192.168.1.1",
    "mac": "11:22:33:44:55:66"
}
```

## Restore the network

### Restore network settings `set_net_default`

Restore the network to default factory settings. The settings will take effect after a manual restart.

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `set_net_default` | `string` |Configure the network to factory settings. |

- **Code demo**

**Input**

Network reset to default settings

```json
{"command":"set_net_default"} 
```

**Output**

Setting succeeded

```json
{
    "command": "set_net_default",
    "net_default_state": true
}
```

Setting failed:

```json
{
    "command": "set_net_default",
    "net_default_state": false
}
```
