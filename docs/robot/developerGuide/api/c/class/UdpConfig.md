# UDP主动上报配置

睿尔曼机械臂提供 UDP 机械臂状态主动上报接口，使用时需要和机械臂处于同一局域网络下，通过设置主动上报配置接口的目标IP或和机械臂建立 TCP 连接，机械臂即会主动周期性上报机械臂状态数据，数据周期可配置，默认5ms。配置正确并开启三线程模式后，通过注册回调函数可接收并处理主动上报数据。
线编程文件下发、在线编程文件管理、全局路点管理等相关功能接口。

<div style="height: 2px; background-image: linear-gradient(to right, #ccc, #ccc); margin: 1em 0;"></div>

## 设置 UDP 机械臂状态主动上报配置`rm_set_realtime_push()`

- **方法原型：**

```C
int rm_set_realtime_push(rm_robot_handle * handle,rm_realtime_push_config_t config)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_realtime_push_config_t](../struct/rm_realtime_push_config_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   config  |    `/`    |    UDP配置结构体。    |

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
rm_realtime_push_config_t config;
config.cycle = 5;
config.enable = true;
config.force_coordinate = 1;
config.port = 8089;
strcpy(config.ip, "192.168.1.108");
int ret = rm_set_realtime_push(robot_handle, config);
printf("rm_set_realtime_push result %d\n",ret);
```

## 查询 UDP 机械臂状态主动上报配置`rm_get_realtime_push()`

- **方法原型：**

```C
int rm_get_realtime_push(rm_robot_handle * handle,rm_realtime_push_config_t * config)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_realtime_push_config_t](../struct/rm_realtime_push_config_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   config  |    `/`    |    获取到的UDP机械臂状态主动上报配置。    |

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
rm_realtime_push_config_t gconfig;
ret = rm_get_realtime_push(robot_handle, &gconfig);
printf("realtime config result:d%\n ip:%s\n",ret, gconfig.ip);
```
