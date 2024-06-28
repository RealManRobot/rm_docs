# 配置通讯内容

机械臂控制器可通过网口、WIFI、RS232-USB 接口和 RS485 接口与用户通信，用户使用时无需切换，可使用上述任一接口， 控制器收到指令后，若指令格式正确，则会通过相同的接口反馈数据。

<div style="height: 2px; background-image: linear-gradient(to right, #ccc, #ccc); margin: 1em 0;"></div>

## 配置WiFi AP模式`rm_set_wifi_ap()`

- **方法原型：**

```C
int rm_set_wifi_ap(rm_robot_handle * handle,const char * wifi_name,const char * password)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|  wifi_name  |    `const char`    |    网络名称。    |
|  password  |    `const char`    |    网络密码。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |

>注意：设置成功后蜂鸣器响，手动重启控制器进入 WIFIAP 模式。

- **使用示例**
  
```C

```

## 配置WiFi STA模式`rm_set_wifi_sta()`

- **方法原型：**

```C
int rm_set_wifi_sta(rm_robot_handle * handle,const char * router_name,const char * password)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|  router_name  |    `const char`    |    网络名称。    |
|  password  |    `const char`    |    网络密码。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |

>注意：设置成功后蜂鸣器响，手动重启控制器进入 WIFISTA  模式。

- **使用示例**
  
```C

```

## 控制器RS485接口波特率设置`rm_set_RS485()`

- **方法原型：**

```C
int rm_set_RS485(rm_robot_handle * handle,int baudrate)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|  baudrate  |    `int`    |    波特率：9600,19200,38400,115200和460800，若用户设置其他数据，控制器会默认按照460800处理。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |

>注意：该指令下发后控制器会记录当前波特率，断电重启后仍会使用该波特率对外通信。

- **使用示例**
  
```C

```

## 获取有线网卡信息`rm_get_wired_net()`

>获取有线网卡信息，未连接有线网卡则会返回无效数据。

- **方法原型：**

```C
int rm_get_wired_net(rm_robot_handle * handle,char * ip,char * mask,char * mac)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|  ip  |    `char`    |    网络地址。    |
|  mask  |    `char`    |    子网掩码。    |
|  mac  |    `char`    |    MAC地址。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
```C

```

## 查询无线网卡网络信息`rm_get_wifi_net()`

>获取有线网卡信息，未连接有线网卡则会返回无效数据。

- **方法原型：**

```C
int rm_get_wifi_net(rm_robot_handle * handle,rm_wifi_net_t * wifi_net)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_wifi_net_t](../struct/rm_wifi_net_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|  wifi_net  |    `char`    |    无线网卡网络信息结构体。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

>注意：结构体中的channel值只有在AP模式时才可获取到，标识 wifi 热点的物理信道号。

- **使用示例**
  
```C

```

## 恢复网络出厂设置`rm_set_net_default()`

- **方法原型：**

```C
int rm_set_net_default(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
```C

```

## 配置关闭WiFi功能`rm_set_wifi_close()`

>配置关闭 wifi 功能，需要重启后生效。

- **方法原型：**

```C
int rm_set_wifi_close(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
```C

```
