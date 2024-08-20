# <p class="hidden">C、C++: </p>末端工具IO配置`effectorIOConfig`

机械臂末端工具端提供多个IO端口，用于与外部设备交互，且IO的输入和输出共用，本接口用于设置末端IO的模式及读取和电源输出设置及读取。
**末端工具IO**
机械臂末端工具端提供多种IO端口，用于与外部设备交互。数量和分类如下所示：</br>
|类型|数量|说明|
|:--|:--|:--|
|电源输出|1路|可配置为0V/12V/24V|
|数字IO|2路|可配置输入输出。输入：参考电平12V-24V；输出：12V-24V，与输出电压一致。|
|通讯接口|1路|可配置为RS485|


## 设置工具端数字IO输出`rm_set_tool_DO_state()`

- **方法原型：**

```C
int rm_set_tool_DO_state(rm_robot_handle * handle,int io_num,int state)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `io_num`  |    输入参数    |    IO 端口号，范围：1~2。    |
|  `state`  |    输入参数    |    IO 状态，1-输出高，0-输出低。    |

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
//设置工具端1号通道输出高电平
int num = 1;
int state = 1;
ret = rm_set_tool_DO_state(robot_handle,num,state);
```

## 设置工具端数字IO模式`rm_set_tool_IO_mode()`

- **方法原型：**

```C
int rm_set_tool_IO_mode(rm_robot_handle * handle,int io_num,int io_mode)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `io_num`  |    输入参数    |    IO 端口号，范围：1~2。    |
|  `io_mode`  |    输入参数    |    模式，0-输入状态，1-输出状态。    |

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
//设置工具端IO2号数字通道为输出模式
int num = 2;
int state = 1;
ret = rm_set_tool_IO_mode(robot_handle,num,state);
```

## 获取数字IO状态`rm_get_tool_IO_state()`

- **方法原型：**

```C
int rm_get_tool_IO_state(rm_robot_handle * handle,int * mode,int * state)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `mode`  |    输出参数    |    0-输入模式，1-输出模式。    |
|  `state`  |    输出参数    |    0-低，1-高。    |

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
//查询工具端数字IO状态         
float IO_Mode[2];                               
float IO_state[2];                              
ret = rm_get_tool_IO_state(robot_handle, IO_Mode, IO_state)     
```

## 设置工具端电源输出`rm_set_tool_voltage()`

- **方法原型：**

```C
iint rm_set_tool_voltage(rm_robot_handle * handle,int voltage_type)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `voltage_type`  |    输出参数    |    电源输出类型，0：0V，2：12V，3：24V。    |

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
//设置工具端电源输出类型 12V
int type = 2;
ret = rm_set_tool_voltage(robot_handle, type);
```

## 获取工具端电源输出`rm_get_tool_voltage()`

- **方法原型：**

```C
iint rm_get_tool_voltage(rm_robot_handle * handle,int voltage_type)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `voltage_type`  |    输出参数    |    存放电源输出类型，0：0V，2：12V，3：24V。    |

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
//获取工具端电源输出
int voltage;
ret = rm_get_tool_voltage(robot_handle,&voltage);  
```
