# <p class="hidden">JSON protocol: </p>Network Configuration Command Set

## Wired network

### High-speed Ethernet port enabling configuration (Gen 2 controller) `set_high_speed_eth`

The controller panel features two network ports. The left port is a high-speed Ethernet port, which is disabled by default and requires activation via commands. The right port, located near the edge of the panel, is a standard network port that is ready for use without any configuration.

::: warning
The IP address of the high-speed Ethernet port is 192.168.1.18, and the port number is 8080. Both can be modified.
:::

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `set_high_speed_eth` | `string` |Set the high-speed Ethernet port. |
| `mode` | `int` |0: disable the high-speed Ethernet port; 1: enable the high-speed Ethernet port. After successfully enabling the high-speed Ethernet port, the robotic arm controller's buzzer will sound as a prompt. The user should then connect the Ethernet cable to the high-speed Ethernet port and restart the controller. Once initialization is complete, the port will be ready for use. The configuration information will be saved in the controller and will not be lost after a restart. |

::: warning
After the controller starts, it will automatically query the MAC address of the upper computer and continuously wait for a physical connection with the control network port.
:::

- **Code demo**

**Input**

```json
  {"command":"set_high_speed_eth","mode":0}
```

**Output**

Setting succeeded (true: setting succeeded, false: setting failed).

```json
{
    "command": "set_high_speed_eth",
    "set_state": true
}
```

### Set the high-speed Ethernet port IP (Gen 2 controller)`set_high_ethernet`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `set_high_ethernet` | `string` |Set the network configuration of high-speed Ethernet ports. |
| `ip` | `string` |Network address. |
| `mask` | `string` |Subnet mask. |
| `gateway` | `string` |Gateway. |

- **Code demo**

**Input**

Set the network IP of high-speed Ethernet ports.

```json
{"command":"set_high_ethernet","ip":"192.168.1.18","mask":"255.255.255.0","gateway":"192.168.1.1"}
```

**Output**

Setting succeeded (true: setting succeeded, false: setting failed).

```json
{
    "command": "set_high_ethernet",
    "state": true
}
```

### Get the high-speed Ethernet port IP (Gen 2 controller)`get_high_ethernet`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `get_high_ethernet` | `string` |Get the network configuration of high-speed Ethernet ports. |

- **Output parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `ip` | `string` |Network address. |
| `mask` | `string` |Subnet mask. |
| `gateway` | `string` |Gateway. |
| `mac` | `string` |mac address. |

- **Code demo**

**Input**

Get the network configuration of high-speed Ethernet ports.

```json
{"command":"get_high_ethernet"}
```

**Output**

```json
{
    "command": "get_high_ethernet",
    "mask": "255.255.255.0",
    "ip": "192.168.1.20",
    "gateway": "192.168.1.1",
    "mac": "11:22:33:44:55:66"
}
```

### Set the wired network information (Gen 3 controller)`set_NetIP`

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

### Get the wired network information (Gen 3 controller)`get_wired_net`

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

## WiFi network

### Get the WiFi network information (Gen 3 controller) `get_wifi_net`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| get_wifi_net | `string` |Get the WiFi network information. |

- **Output parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `ip` | `string` |Network address. |
| `mask` | `string` |Subnet mask. |
| `mac` | `string` |mac address. |
| `mode` | `string` |ap: hotspot mode, sta: connected mode. |
| `ssid` | `string` |Set or default WiFi name. |
| `password` | `string` |Set or default WiFi password. |
| `channel` | `int` |Available only in AP mode, which is the physical channel number that identifies a WiFi hotspot. |

- **Code demo**

**Input**

Get the WiFi network information.

```json
{"command":"get_wifi_net"}
```

**Output**

```json
{
    "command": "get_wifi_net",
    "mode": "ap",
    "mask": "255.255.255.0",
    "ip": "192.168.1.18",
    "mac": "11:22:33:44:55:66",
    "ssid": "realman_ap",
    "password": "12345678",
    "channel": 6
}
```

### Set the WiFi OFF (Gen 3 controller)`set_wifi_close`

Set the WiFi OFF, and it will be enabled after the restart.

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `set_wifi_close` | `string` |Set the WiFi OFF. |

- **Code demo**

**Input**

Set the WiFi OFF.

```json
{"command":"set_wifi_close"} 
```

**Output**

Setting succeeded:

```json
{
    "command": "set_wifi_close",
    "wifi_close_state": true
}
```

Setting failed:

```json
{
    "command": "set_wifi_close",
    "wifi_close_state": false
}
```

### Set the WiFi AP`set_wifi_ap`

Set the WiFi AP, but there is no return response. After the setting is successful, the buzzer sounds. The WiFi AP mode is enabled after the manual restart of the controller.

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `set_wifi_ap` | `string` |Set the WiFi AP. |

- **Code demo**

**Input**

Set the WiFi AP as follows: WiFi name: robot; access password: 12345678

```json
{"command":"set_wifi_ap","wifi_name":"robot","password":"12345678"}
```

### Set the WiFi STA `set_wifi_sta`

Set the WiFi STA, but there is no return response. After the setting is successful, the buzzer sounds. The WiFi STA mode is enabled after the manual restart of the controller.

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `set_wifi_sta` | `string` |Set the WiFi STA. |

- **Code demo**

**Input**

Set the WiFi STA as follows: target router name: robot; router password: 12345678.

```json
{"command":"set_wifi_sta","router_name":"robot","password":"12345678"}
```

## Restore the network

### Restore network settings (Gen 3 controller)`set_net_default`

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

## Others

### Set USB (Gen 2 controller)`set_usb`

Set UART-USB baud rate, but there is no return response. Baud rate options: 9600, 19200, 38400, 115200, and 460800. If the user sets a different value, the controller will default to 460800. After this command is sent, the controller will record the current baud rate, and the baud rate will still be used for external communication after power failure and restart.

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `set_usb` | `string` |Set the USB baud rate, with a maximum of 460800. |

- **Code demo**

**Input**

Set the USB baud rate to 460800.

```json
{"command":"set_usb","baudrate":460800}
```
