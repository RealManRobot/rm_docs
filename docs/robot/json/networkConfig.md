# <p class="hidden">JSON 协议：</p>网络配置指令集

## 有线网络

### 高速网口使能配置（第二代控制器）`set_high_speed_eth`

控制器面板有2个网口，左侧为高速网口，默认为关闭状态，需要通过指令打开；右侧靠近面板边缘的为普通网口，用户无需配置，可直接使用。

::: warning 注意
高速网口的IP地址为：192.168.1.18，端口号为：8080，可修改。
:::

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `set_high_speed_eth` | `string` |配置高速网口。|
| `mode` | `int` |0：关闭高速网口；1：打开高速网口。打开高速网口设置成功后，机械臂控制器蜂鸣器会提示，然后用户将网线插在高速网口上，重启控制器，初始化成功后用户即可使用。该配置信息会保存在控制器内，重启后不会丢失。|

::: warning 注意
控制器启动后，会自动查询上位机MAC地址，一直等待上位机与控制网口的物理连接。
:::

- **代码示例**

**输入**  

```json
  {"command":"set_high_speed_eth","mode":0}
```

**输出**  

设置成功（true-设置成功，false-设置失败）。

```json
{
    "command": "set_high_speed_eth",
    "set_state": true
}
```

### 设置高速网口IP（第二代控制器）`set_high_ethernet`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `set_high_ethernet` | `string` |设置高速网口网络配置。|
| `ip` | `string` |网络地址。|
| `mask` | `string` |子网掩码。|
| `gateway` | `string` |网关。|

- **代码示例**

**输入**  

配置高速网口网络IP。

```json
{"command":"set_high_ethernet","ip":"192.168.1.18","mask":"255.255.255.0","gateway":"192.168.1.1"}
```

**输出**  

设置成功（true-设置成功，false-设置失败）。

```json
{
    "command": "set_high_ethernet",
    "state": true
}
```

### 查询高速网口IP（第二代控制器）`get_high_ethernet`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `get_high_ethernet` | `string` |获取高速网口网络配置。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `ip` | `string` |网络地址。|
| `mask` | `string` |子网掩码。|
| `gateway` | `string` |网关。|
| `mac` | `string` |mac地址。|

- **代码示例**

**输入**  

获取高速网口网络配置。

```json
{"command":"get_high_ethernet"}
```

**输出**  

```json
{
    "command": "get_high_ethernet",
    "mask": "255.255.255.0",
    "ip": "192.168.1.20",
    "gateway": "192.168.1.1",
    "mac": "11:22:33:44:55:66"
}
```

### 配置有线网络信息（第三代控制器）`set_NetIP`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `set_NetIP` | `string` |配置有线网口IP地址。|

::: warning 注意
指令下发后，若成功设置机械臂蜂鸣器会响一声，然后手动重启机械臂。
:::

- **代码示例**

**输入**  

说明：配置有线网口 IP 地址为 192.168.1.18，子网掩码为255.255.255.0，网关地址192.168.1.1。

```json
{"command":"set_NetIP","ip":"192.168.1.18","netmask":"255.255.255.0","gw":"192.168.1.1"}
```

**输出**  

IP地址设置成功：

```json
{
    "command": "set_NetIP",
    "status": true
}
```

IP地址设置失败：

```json
{
    "command": "set_NetIP",
    "status": false
}
```

### 查询有线网卡网络信息（第三代控制器）`get_wired_net`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `get_wired_net` | `string` |获取有线网卡信息，未连接有线网卡则会返回无效数据。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `ip` | `string` |网络地址。|
| `mask` | `string` |子网掩码。|
| `mac` | `string` |mac地址。|

- **代码示例**

**输入**  

查询有线网卡网络信息。

```json
{"command":"get_wired_net"}   
```

**输出**  

```json
{
    "command": "get_wired_net",
    "mask": "255.255.255.0",
    "ip": "192.168.1.18",
    "mac": "11:22:33:44:55:66"
}
```

## 无线网络

### 查询无线网卡网络信息（第三代控制器）`get_wifi_net`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| get_wifi_net | `string` |查询无线网卡网络信息。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `ip` | `string` |网络地址。|
| `mask` | `string` |子网掩码。|
| `mac` | `string` |mac地址。|
| `mode` | `string` |ap代表热点模式，sta代表联网模式。|
| `ssid` | `string` |设置或默认的wifi名称。|
| `password` | `string` |设置或默认的wifi密码。|
| `channel` | `int` |如果是AP模式，则存在此字段，标识wifi热点的物理信道号。|

- **代码示例**

**输入**  

查询无线网卡网络信息。

```json
{"command":"get_wifi_net"}
```

**输出**  

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

### 关闭wifi功能（第三代控制器）`set_wifi_close`

配置关闭wifi功能，需要重启后生效。

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `set_wifi_close` | `string` |配置关闭wifi功能。|

- **代码示例**

**输入**  

配置关闭wifi功能。

```json
{"command":"set_wifi_close"} 
```

**输出**  

配置成功：

```json
{
    "command": "set_wifi_close",
    "wifi_close_state": true
}
```

配置失败：

```json
{
    "command": "set_wifi_close",
    "wifi_close_state": false
}
```

### 设置wifiAP`set_wifi_ap`

配置wifiAP内容，无返回，设置成功后蜂鸣器响，手动重启控制器进入WIFIAP模式。

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `set_wifi_ap` | `string` |配置wifiAP内容。|

- **代码示例**

**输入**  

配置wifiAP内容，wifi名称：robot，连接密码：12345678

```json
{"command":"set_wifi_ap","wifi_name":"robot","password":"12345678"}
```

### 设置wifiSTA`set_wifi_sta`

配置wifiSTA内容，无返回，设置成功后蜂鸣器响，手动重启控制器进入WIFISTA模式。

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `set_wifi_sta` | `string` |配置wifiSTA内容。|

- **代码示例**

**输入**  

配置wifiSTA内容，目标路由器名称：robot，路由器密码：12345678。

```json
{"command":"set_wifi_sta","router_name":"robot","password":"12345678"}
```

## 恢复网络

### 恢复网络设置（第三代）`set_net_default`

恢复网络出厂设置。设置成功后，手动重新启动后生效。

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `set_net_default` | `string` |设置网络为出厂设置。|

- **代码示例**

**输入**  

网络恢复默认设置

```json
{"command":"set_net_default"} 
```

**输出**  

配置成功

```json
{
    "command": "set_net_default",
    "net_default_state": true
}
```

配置失败：

```json
{
    "command": "set_net_default",
    "net_default_state": false
}
```

## 其他

### 设置USB（第二代）`set_usb`

配置UART-USB波特率，无返回。波特率可选范围：9600，19200，38400，115200和460800，若用户设置其他数据，控制器会默认按照460800处理。该指令下发后控制器会记录当前波特率，断电重启后仍会使用该波特率对外通信。

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `set_usb` | `string` |配置USB波特率，最高460800。|

- **代码示例**

**输入**  

配置USB波特率为460800。

```json
{"command":"set_usb","baudrate":460800}
```