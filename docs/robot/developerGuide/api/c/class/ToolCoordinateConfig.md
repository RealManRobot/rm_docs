# 工具坐标系配置

工具坐标系标定、切换、删除、修改、查询及工具包络参数等管理。

<div style="height: 2px; background-image: linear-gradient(to right, #ccc, #ccc); margin: 1em 0;"></div>

## 六点法自动设置工具坐标系 标记点位`rm_set_auto_tool_frame()`

- **方法原型：**

```C
int rm_set_auto_tool_frame(rm_robot_handle * handle,int point_num)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|  point_num  |    `int`    |    1~6代表6个标定点。    |

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

## 六点法自动设置工具坐标系 提交`rm_generate_auto_tool_frame()`

- **方法原型：**

```C
int rm_generate_auto_tool_frame(rm_robot_handle * handle,const char * name,float payload,float x,float y,float z)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|  name  |    `const char`    |    工具坐标系名称，不能超过十个字节。    |
|   payload  |    `float`    |    工具执行末端负载重量,单位kg    |
|   x  |    `float`    |    工具执行末端负载x轴方向位置，单位m。    |
|   y  |    `float`    |    工具执行末端负载y轴方向位置，单位m。    |
|   z  |    `float`    |    工具执行末端负载z轴方向位置，单位m。    |

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

## 手动设置工具坐标系`rm_set_manual_tool_frame()`

- **方法原型：**

```C
int rm_set_manual_tool_frame(rm_robot_handle * handle,rm_frame_t frame)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_frame_t](../struct/rm_frame_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|  frame  |    `/`    |    工具坐标系参数,包含末端负载重量、质心位置坐标等参数。    |

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

## 切换当前工具坐标系`rm_change_tool_frame()`

- **方法原型：**

```C
int rm_change_tool_frame(rm_robot_handle * handle,const char * tool_name )
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|  tool_name  |    `const char`    |    目标工具坐标系名称。    |

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

## 删除指定工具坐标系`rm_delete_tool_frame()`

- **方法原型：**

```C
int rm_delete_tool_frame(rm_robot_handle * handle,const char * tool_name )
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|  tool_name  |    `const char`    |    要删除的工具坐标系名称。    |

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

## 修改指定工具坐标系`rm_update_tool_frame()`

- **方法原型：**

```C
int rm_update_tool_frame(rm_robot_handle * handle,rm_frame_t frame)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_frame_t](../struct/rm_frame_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|  frame  |    `/`    |    要修改的工具坐标系名称。    |

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

## 获取所有工具坐标系名称`rm_get_total_tool_frame()`

- **方法原型：**

```C
int rm_get_total_tool_frame(rm_robot_handle * handle,rm_frame_name_t * frame_names,int * len)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_frame_name_t](../struct/rm_frame_name_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|  frame_names  |    `/`    |    存放返回的工具坐标系名称字符数组。    |
|  len  |    `int`    |    存放返回的工具坐标系名称长度。    |

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

## 获取指定工具坐标系`rm_get_given_tool_frame()`

- **方法原型：**

```C
int rm_get_given_tool_frame(rm_robot_handle * handle,const char * name,rm_frame_t * frame)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_frame_t](../struct/rm_frame_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|  name  |    `const char`    |    指定的工具坐标系名称。    |
|  frame  |    `int`    |    存放返回的工具参数。    |

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

## 获取当前工具坐标系`rm_get_current_tool_frame()`

- **方法原型：**

```C
int rm_get_current_tool_frame(rm_robot_handle * handle,rm_frame_t * tool_frame)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_frame_t](../struct/rm_frame_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|  tool_fram  |    `/`    |    存放返回的坐标系。    |

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

## 设置工具坐标系的包络参数`rm_set_tool_envelope()`

- **方法原型：**

```C
int rm_set_tool_envelope(rm_robot_handle * handle,rm_envelope_balls_list_t envelope)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_envelope_balls_list_t](../struct/rm_envelope_balls_list_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|  envelope  |    `/`    |    包络参数列表，每个工具最多支持 5 个包络球，可以没有包络。    |

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

## 获取工具坐标系的包络参数`rm_get_tool_envelope()`

- **方法原型：**

```C
int rm_get_tool_envelope(rm_robot_handle * 	handle,const char * tool_name,rm_envelope_balls_list_t * envelope
)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_envelope_balls_list_t](../struct/rm_envelope_balls_list_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|  tool_name  |    `const char`    |    控制器中已存在的工具坐标系名称。    |
|  envelope  |    `/`    |    存放返回的包络参数列表，每个工具最多支持 5 个包络球，可以没有包络。    |

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
