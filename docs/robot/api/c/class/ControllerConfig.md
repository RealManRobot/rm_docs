# 系统配置

控制器状态获取、电源控制、错误清除、有线网口IP地址配置、软件信息获取。

## 获取控制器状态`rm_get_controller_state()`

- **方法原型：**

```C
int rm_get_controller_state(rm_robot_handle * handle,float * voltage,float * current,float * temperature,int * err_flag )
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  voltage  |    输出    |    返回的电压。    |
|  current  |    输出    |    返回的电流。    |
|  temperature  |    输出    |    返回的温度。    |
|  err_flag  |    输出    |    控制器运行错误代码。    |

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
//获取控制器状态
float voltage = 0;                                                            
float current = 0;                                                            
float temperature = 0;                                                        
int sys_err = 0;                                                         
ret = rm_get_controller_state(robot_handle, &voltage, &current, &temperature, &sys_err);    
```

## 设置机械臂电源`rm_set_arm_power()`

- **方法原型：**

```C
int rm_set_arm_power(rm_robot_handle * handle,int arm_power)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  arm_power  |    用户输入    |    1-上电状态，0 断电状态。    |

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
//控制机械臂上电
ret = rm_set_arm_power(robot_handle, 1);
```

## 读取机械臂电源状态`rm_get_arm_power_state()`

- **方法原型：**

```C
int rm_get_arm_power_state(rm_robot_handle * handle,int * power_state)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  power_state  |    输出    |    获取到的机械臂电源状态，1-上电状态，0 断电状态。    |

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
//读取机械臂电源状态
int power;
ret = rm_get_arm_power_state(robot_handle,&power);   
```

## 读取控制器的累计运行时间`rm_get_system_runtime()`

- **方法原型：**

```C
int rm_get_system_runtime(rm_robot_handle * handle,int * day,int * hour,int * min,int * sec
)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  day  |    输出    |    读取到的时间。    |
|  hour  |    输出    |    读取到的时间。    |
|  min  |    输出    |    读取到的时间。    |
|  sec  |    输出    |    读取到的时间。    |

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
//获取控制器的累计运行时间
char state = 0;
int day;
int hour;
int min;
int sec;
ret = rm_get_system_runtime(robot_handle, &day, &hour, &min, &sec);    
```

## 清零控制器的累计运行时间`rm_clear_system_runtime()`

- **方法原型：**

```C
int rm_clear_system_runtime(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |

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
//清空控制器累计运行时间
ret = rm_clear_system_runtime(robot_handle);
```

## 读取关节的累计转动角度`rm_get_joint_odom()`

- **方法原型：**

```C
int rm_get_joint_odom(rm_robot_handle * handle,float * joint_odom)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|   joint_odom  |    输出    |    存放各关节累计的转动角度的数组。    |

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
//获取关节累计转动角度
float odom[7];
ret = rm_get_joint_odom(robot_handle,odom);   
```

## 清零关节累计转动的角度`rm_clear_joint_odom()`

- **方法原型：**

```C
int rm_clear_joint_odom(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |

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
//清除关节累计转动角度
ret = rm_clear_joint_odom(robot_handle);
```

## 配置有线网口IP地址`rm_set_NetIP()`

- **方法原型：**

```C
int rm_set_NetIP(rm_robot_handle * handle,const char * ip)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|   ip  |    输出    |    有线网口 IP 地址。    |

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
//配置有线网卡IP地址
ret = rm_set_NetIP(robot_handle,(char*)"192.168.1.19");
```

## 清除系统错误`rm_clear_system_err()`

- **方法原型：**

```C
int rm_clear_system_err(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |

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
//清除系统错误代码
ret = rm_clear_system_err(robot_handle);
```

## 读取机械臂软件信息`rm_get_arm_software_info()`

- **方法原型：**

```C
int rm_get_arm_software_info(rm_robot_handle * handle,rm_arm_software_version_t * software_info)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_arm_software_version_t](../struct/rm_arm_software_version_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|   software_info  |    用户输入    |    机械臂软件信息结构体。    |

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
//读取机械臂软件信息
rm_arm_software_version_t info;
ret = rm_get_arm_software_info(robot_handle, &info);
```

## 查询控制器RS485模式`rm_get_controller_RS485_mode()`

- **方法原型：**

```C
int rm_get_controller_RS485_mode(rm_robot_handle * handle,int * mode,int * baudrate,int * timeout)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|   mode  |    输出    |    存放模式。0-代表默认 RS485 串行通讯，1-代表 modbus-RTU 主站模式，2-代表 modbus-RTU 从站模式。    |
|   baudrate  |    输出    |    存放波特率。    |
|   timeout  |    用户输入    |    modbus 协议超时时间，单位 100ms，仅在 modbus-RTU 模式下提供此字段。    |

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
int mode;
int baudrate;
int timeout;
ret = rm_get_controller_RS485_mode(robot_handle, &mode, &baudrate, &timeout);
```

## 查询工具端RS485模式`rm_get_tool_RS485_mode()`

- **方法原型：**

```C
int rm_get_tool_RS485_mode(rm_robot_handle * handle,int * mode,int * baudrate,int * timeout)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|   mode  |    输出    |    存放模式。0-代表默认 RS485 串行通讯，1-代表 modbus-RTU 主站模式，2-代表 modbus-RTU 从站模式。    |
|   baudrate  |    输出    |    存放波特率。    |
|   timeout  |    用户输入    |    modbus 协议超时时间，单位 100ms，仅在 modbus-RTU 模式下提供此字段。    |

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
int mode;
int baudrate;
int timeout;
ret = rm_get_tool_RS485_mode(robot_handle, &mode, &baudrate, &timeout);
```

## 查询关节软件版本号`rm_get_joint_software_version()`

- **方法原型：**

```C
int rm_get_joint_software_version(rm_robot_handle * handle,int * version)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|   version  |    输出    |    获取到的各关节软件版本号数组。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

>注意：获取到的关节软件版本号需转换为十六进制，例如获取某关节版本为54536，转换为十六进制为D508，则当前关节的版本号为 Vd5.0.8。

- **使用示例**
  
```C
//获取关节软件版本号
float ver[6] = {0};
ret = rm_get_joint_software_version(robot_handle,ver);
```

## 查询末端接口板软件版本号`rm_get_tool_software_version()`

- **方法原型：**

```C
int rm_get_tool_software_version(rm_robot_handle * handle,int * version)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|   version  |    输出    |    获取到的各关节软件版本号数组。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

>注意：获取到的末端接口板软件版本号需转换为十六进制，例如获取到版本号393，转换为十六进制为189，则当前关节的版本号为 V1.8.9。

- **使用示例**
  
```C
//查询末端接口板软件版本号    
int ver = 0;                                                                       
ret = rm_get_tool_software_version(robot_handle,&ver);
```
