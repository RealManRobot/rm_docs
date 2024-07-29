
## 4.4系统配置-配置通讯内容

机械臂控制器可通过网口、WIFI、RS232-USB接口和RS485接口与用户通信，用户使用时无需切换，可使用上述任一接口，控制器收到指令后，若指令格式正确，则会通过相同的接口反馈数据。

### （1）配置wifiAP内容

| 功能描述 | 配置wifiAP内容，无返回，设置成功后蜂鸣器响，手动重启控制器进入WIFIAP模式。 |
| :--- | :------------------------------------------ |
| 参数说明 | `set_wifi_ap`：配置wifiAP内容                    |
| 命令格式 | {s\:s,s\:s,s\:s}                            |

**使用示例：**
说明：配置wifiAP内容，wifi名称：robot，连接密码：12345678

```json
{"command":"set_wifi_ap","wifi_name":"robot","password":"12345678"}
说明：配置wifiSTA内容，目标路由器名称：robot，路由器密码：12345678
```

### （2）配置wifiSTA内容

| 功能描述 | 配置wifiSTA内容，无返回，设置成功后蜂鸣器响，手动重启控制器进入WIFISTA模式。 |
| :--- | :-------------------------------------------- |
| 参数说明 | `set_wifi_sta`：配置wifiSTA内容                    |
| 命令格式 | {s\:s,s\:s,s\:s}                              |

**使用示例：**
说明：配置wifiSTA内容，目标路由器名称：robot，路由器密码：12345678

```json
{"command":"set_wifi_sta","router_name":"robot","password":"12345678"}
```

**返回示例：**

```json
{"Product_version":"RM65-BI","algorithm_info":{"version":"1.2.3"},"command":"arm_software_info","ctrl_info":{"build_time":"2023/12/13 20:58:10","version":"V1.4.6"},"dynamic_info":{"model_version":"1"},"plan_info":{"build_time":"2023/12/13 20:58:24","version":"V1.4.6"}} 
```

### （3）配置USB内容（基础系列）

| 功能描述 | 配置UART-USB波特率，无返回           |
| :--- | :-------------------------- |
| 参数说明 | `set_usb`：配置USB波特率，最高460800 |
| 命令格式 | {s\:s,s\:i}                 |

**使用示例：**
说明：配置USB波特率为460800

```json
{"command":"set_usb","baudrate":460800}
```

### （4）配置RS485内容

| 功能描述 | 配置RS485接口波特率，无返回                  |
| :--- | :-------------------------------- |
| 参数说明 | `set_RS485`：配置RS485接口波特率，最高460800 |
| 命令格式 | {s\:s, s\:i}                      |

**使用示例：**
说明：配置RS485波特率为460800

```json
{"command":"set_RS485","baudrate":460800}
波特率可选范围：9600，19200，38400，115200和460800，若用户设置其他数据，控制器会默认按照460800处理。
该指令下发后，若Modbus模式为打开状态，则会自动关闭，同时控制器会记录当前波特率，断电重启后仍会使用该波特率对外通信。
```

### （5）配置高速网口IP（基础系列）

| 功能描述 | 设置高速网口网络配置                     |
| :--- | ------------------------------ |
| 参数说明 | `set_high_ethernet` 配置高速网口网络IP |
| 命令格式 | {s\:s,s\:s,s\:s,s\:ss}         |

**使用示例：**
说明：配置高速网口网络IP

```json
{"command":"set_high_ethernet","ip":"192.168.1.18","mask":"255.255.255.0","gateway":"192.168.1.1"} 
说明：
ip：网络地址
mask：子网掩码
gateway：网关
```

**返回示例：**

```json
{"command": "set_high_ethernet", "state": true}
true-设置成功，false-设置失败
```

### （6）查询高速网口IP（基础系列）

| 功能描述 | 获取高速网口网络配置                     |
| :--- | :----------------------------- |
| 参数说明 | `get_high_ethernet` 获取高速网口网络配置 |
| 命令格式 | {s\:s}                         |

**使用示例：**
说明：获取高速网口网络配置

```json
{"command":"get_high_ethernet"}
```

**返回示例：**

```json
{"command": "get_high_ethernet","mask": "255.255.255.0","ip": "192.168.1.20", "gateway": "192.168.1.1","mac": "11:22:33:44:55:66"}
ip：网络地址
mask：子网掩码
gateway：网关
mac:mac地址
```

### （7）查询有线网卡网络信息（I系列）

| 功能描述 | 查询有线网卡网络信息                               |
| :--- | :--------------------------------------- |
| 参数说明 | `get_wired_net`：获取有线网卡信息，未连接有线网卡则会返回无效数据 |
| 命令格式 | {s\:s}                                   |

**使用示例：**
说明：查询有线网卡网络信息

```json
{"command":"get_wired_net"}   
```

**返回示例：**

```json
{"command":"get_wired_net","mask": "255.255.255.0","ip": "192.168.1.18","mac": "11:22:33:44:55:66"}
ip：网络地址
mask：子网掩码
mac：mac地址 
```

### （8）查询无线网卡网络信息（I系列）

| 功能描述 | 查询无线网卡网络信息                |
| :--- | :------------------------ |
| 参数说明 | `get_wifi_net`：查询无线网卡网络信息 |
| 命令格式 | {s\:s}                    |

**使用示例：**
说明：查询无线网卡网络信息

```json
{"command":"get_wifi_net"}   
```

**返回示例：**

```json
{"command":"get_wifi_net","mode":"ap","mask": "255.255.255.0","ip": "192.168.1.18","mac": "11:22:33:44:55:66","ssid":"realman_ap","password":"12345678","channel":6}
ip：网络地址
mask：子网掩码
mac：mac地址 
mode：ap代表热点模式，sta代表联网模式
ssid：设置或默认的wifi名称
password：设置或默认的wifi密码
channel：如果是AP模式，则存在此字段，标识wifi热点的物理信道号
```

### （9）恢复网络设置（I系列）

| 功能描述 | 恢复网络出厂设置                    |
| :--- | :-------------------------- |
| 参数说明 | `set_net_default`：设置网络为出厂设置 |
| 命令格式 | {s\:s}                      |

**使用示例：**
说明：网络恢复默认设置

```json
{"command":"set_net_default"} 
```

**返回示例：**&#x20;

```json
配置成功：
{"command":"set_net_default","net_default_state":true}
配置失败：
{"command":"set_net_default","net_default_state":false}
```

### （10）关闭wifi功能（I系列）

| 功能描述 | 配置关闭wifi功能，需要重启后生效          |
| :--- | :-------------------------- |
| 参数说明 | `set_wifi_close`：配置关闭wifi功能 |
| 命令格式 | {s\:s}                      |

**使用示例：**
说明：配置关闭wifi功能

```json
{"command":"set_wifi_close"} 
```

**返回示例：**

```json
配置成功：
{"command":"set_wifi_close","wifi_close_state":true}
配置失败：
{"command":"set_wifi_close","wifi_close_state":false}
```

