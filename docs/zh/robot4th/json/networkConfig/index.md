# <p class="hidden">JSON 协议：</p>网络配置指令集

## 有线网络

### 配置有线网络信息`set_NetIP`

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

### 查询有线网卡网络信息`get_wired_net`

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
| `gw` | `string` | 网关地址。|

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
    "gw": "192.168.1.1",
    "mac": "11:22:33:44:55:66"
}
```

## 恢复网络

### 恢复网络设置`set_net_default`

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
