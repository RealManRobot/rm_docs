# <p class="hidden">C、C++: </p>末端生态协议配置`RmPlusConfig`

末端生态协议支持下的末端设备基础信息与实时信息的读取。

## 设置末端生态协议模式`rm_set_rm_plus_mode()`

- **方法原型：**

```C
int rm_set_rm_plus_mode(rm_robot_handle *handle, int mode)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `mode`  |    输入参数    |    末端生态协议模式。0：禁用协议 ,9600：开启协议（波特率9600）,115200：开启协议（波特率115200）,256000：开启协议（波特率256000）,460800：开启协议（波特率460800）    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
int mode = 460800;
int ret = rm_set_rm_plus_mode(handle, mode);
```

## 查询末端生态协议模式`rm_get_rm_plus_mode()`

- **方法原型：**

```C
int rm_get_rm_plus_mode(rm_robot_handle *handle, int *mode)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `mode`  |    输出参数    |    末端生态协议模式。0：禁用协议 ,9600：开启协议（波特率9600）,115200：开启协议（波特率115200）,256000：开启协议（波特率256000）,460800：开启协议（波特率460800）。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
int mode = 0;
int ret = rm_get_rm_plus_mode(handle, &mode);
```

## 设置触觉传感器模式（末端生态协议支持）`rm_set_rm_plus_touch()`

- **方法原型：**

```C
int rm_set_rm_plus_touch(rm_robot_handle *handle, int mode)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `mode`  |    输入参数    |    触觉传感器开关状态,0：关闭触觉传感器 ,1：打开触觉传感器（返回处理后数据） ,2：打开触觉传感器（返回原始数据）。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
int mode = 1;
int ret = rm_set_rm_plus_touch(handle, mode);
```

## 获取触觉传感器模式（末端生态协议支持）`rm_get_rm_plus_touch()`

- **方法原型：**

```C
int rm_get_rm_plus_touch(rm_robot_handle *handle, int *mode)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `mode`  |    输出参数    |     触觉传感器开关状态,0：关闭触觉传感器,1：打开触觉传感器（返回处理后数据）,2：打开触觉传感器（返回原始数据）。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
int mode = 0;
int ret = rm_get_rm_plus_touch(handle, &mode);
```

## 读取末端设备基础信息（末端生态协议支持）`rm_get_rm_plus_base_info()`

- **方法原型：**

```C
int rm_get_rm_plus_base_info(rm_robot_handle *handle, rm_plus_base_info_t *info)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_plus_base_info_t](../../struct/plusBase/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `info`  |    输出参数    |    末端设备基础信息。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
rm_robot_handle *handle = NULL;
handle = rm_create_robot_arm("192.168.1.18",8080);
rm_plus_base_info_t baseinfo;
int ret = rm_get_rm_plus_base_info(handle, &baseinfo);
```

## 读取末端设备实时信息（末端生态协议支持）`rm_get_rm_plus_state_info()`

- **方法原型：**

```C
int rm_get_rm_plus_state_info(rm_robot_handle *handle, rm_plus_state_info_t *info)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_plus_state_info_t](../../struct/plusState/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `info`  |    输出参数    |    末端设备实时信息。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
rm_robot_handle *handle = NULL;
handle = rm_create_robot_arm("192.168.1.18",8080);
rm_plus_state_info_t stateinfo;
int ret = rm_get_rm_plus_state_info(handle, &stateinfo);
```
