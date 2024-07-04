# 连接机械臂

此模块为API及机械臂初始化相关接口，包含API版本号查询、API初始化、连接/断开机械臂、日志设置、 机械臂仿真/真实模式设置、机械臂信息获取、运动到位信息及机械臂实时状态信息回调函数注册等。



## 查询sdk版本号`rm_api_version()`

- **方法原型：**

```C
char* rm_api_version(void)
```

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   /  |    `char*`    |    返回版本号    |

- **使用示例**
  
```C
char *version = rm_api_version();
printf("api version: %s\n", version);
```

## 初始化线程模式`rm_init()`

- **方法原型：**

```C
int rm_init(rm_thread_mode_e mode)
```

*可以跳转[rm_thread_mode_e](跳转到typc_list的rm_thread_mode_e)查阅枚举类型*

- **参数说明:**

|   参数    |   说明    |
| :--- | :--- |
|   mode：`RM_SINGLE_MODE_E`    |    单线程模式，单线程非阻塞等待数据返回。    |
|   mode：`RM_DUAL_MODE_E`   |   双线程模式，增加接收线程监测队列中的数据。    |
|   mode：`RM_TRIPLE_MODE_E`   |   三线程模式，在双线程模式基础上增加线程监测UDP接口数据。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功    |
|  -1  |    `int`    |    创建线程失败。查看日志以获取具体错误    |

- **使用示例**
  
```C

```

## 关闭所有连接，销毁所有线程`rm_destory()`

- **方法原型：**

```C
int rm_destory(void )
```

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功    |

- **使用示例**
  
```C

```

## 日志打印配置`rm_set_log_call_back()`

- **方法原型：**

```C
void rm_set_log_call_back(void(*)(const char *message, va_list args) LogCallback, int level)
```

*可以跳转[rm_thread_mode_e](跳转到typc_list的rm_thread_mode_e)查阅枚举类型*

- **参数说明:**

|  参数    |   说明    |
| :--- | :--- |
|   LogCallback  |    日志打印回调函数    |
|   level  |   日志打印等级。0：debug级别；1：info级别；2：warn级别；3.error级别。    |

- **使用示例**
  
```C
// 打印error级别的日志信息
char *get_cur_time()
{
  static char s[32] = {0};
  struct tm* ltime;
  struct timeval stamp;
  gettimeofday(&stamp, NULL);
  ltime = localtime(&stamp.tv_sec);
  strftime(s, 20, "%Y%m%d %H:%M:%S", ltime);
  return s;
}
void api_log(const char* message, va_list args) {
    printf("[%s]: ",get_cur_time());
    vfprintf(stdout, message, args);
}
 
rm_set_log_call_back(api_log, 3);
```

## 创建一个机械臂控制实例`rm_create_robot_arm()`

- **方法原型：**

```C
rm_robot_handle* rm_create_robot_arm(const char * ip, int port)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   说明    |
| :--- | :--- |
|   ip  |    机械臂的ip地址。    |
|   port  |   机械臂的端口号。    |

- **返回值:**

创建成功后，返回机械臂控制[rm_robot_handle](../struct/rm_robot_handle.md)句柄id，连接成功id大于0，连接失败返回-1，达到最大连接数5创建失败返回空。

- **使用示例**
  
```C

```

## 根据句柄删除机械臂`rm_delete_robot_arm()`

- **方法原型：**

```C
int rm_delete_robot_arm(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   变量    |   说明    |
| :--- | :--- |
|   handle  |    需要删除的机械臂句柄。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|  -1  |    `int`    |    未找到对应句柄,句柄为空或已被删除。    |

- **使用示例**
  
```C

```

## 机械臂仿真/真实模式设置`rm_set_arm_run_mode()`

- **方法原型：**

```C
int rm_delete_robot_arm(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   说明    |
| :--- | :--- |
|   handle  |    需要删除的机械臂句柄。    |
|   mode  |    0：仿真模式；1：真实模式。    |

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

## 机械臂仿真/真实模式获取`rm_get_arm_run_mode()`

- **方法原型：**

```C
int rm_get_arm_run_mode(rm_robot_handle * handle,int * mode)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   说明    |
| :--- | :--- |
|   handle  |    机械臂控制句柄。    |
|   mode  |    0：仿真模式；1：真实模式。    |

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

## 获取机械臂基本信息`rm_get_robot_info()`

- **方法原型：**

```C
int rm_get_robot_info(rm_robot_handle * handle,rm_robot_info_t * robot_info)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_robot_info_t](../struct/rm_robot_info_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   值    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户自定义    |    机械臂控制句柄。    |
|   robot_info  |    用户自定义    |    机械臂基本信息结构体。    |


- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|  -1  |    `int`    |    未找到对应句柄,句柄为空或已被删除。    |
|  -2  |    `int`    |    获取到的机械臂基本信息非法，检查句柄是否已被删除。    |

- **使用示例**
  
```C

```

## 机械臂事件回调函数注册`rm_get_arm_event_call_back()`

- **方法原型：**

```C
void rm_get_arm_event_call_back(rm_event_callback_ptr event_callback)
```

*这里使用了机械臂事件回调函数`rm_event_callback_ptr`。方法原型为：`typedef void(* rm_event_callback_ptr) (rm_event_push_data_t data)`*。跳转[rm_realtime_arm_joint_state_t](../struct/rm_realtime_arm_joint_state_t.md)查阅结构体详情。

>注意：单线程无法使用该函数获取到位信息。

- **参数说明:**

|   参数    |   值    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户自定义    |    机械臂控制句柄。    |
|   event_callback  |    用户自定义    |    机械臂事件回调函数，该回调函数接收rm_event_push_data_t类型的数据作为参数，没有返回值。    |

- **使用示例**
  
```C

```

## UDP机械臂状态主动上报信息回调注册`rm_realtime_arm_state_call_back()`

- **方法原型：**

```C
void rm_get_arm_event_call_back(rm_event_callback_ptr event_callback)
```

*这里使用了机械臂事件回调函数`rm_realtime_arm_state_callback_ptr`。方法原型为：`typedef void(* rm_realtime_arm_state_callback_ptr) (rm_realtime_arm_joint_state_t data)`*。跳转[rm_realtime_arm_joint_state_t](../struct/rm_realtime_arm_joint_state_t.md)查阅结构体详情。

- **参数说明:**

|   参数    |   值    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户自定义    |    机械臂控制句柄。    |
|   realtime_callback  |    用户自定义    |    机械臂状态信息回调函数。    |

- **使用示例**
  
```C

```
