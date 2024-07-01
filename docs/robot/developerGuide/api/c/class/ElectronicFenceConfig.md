# 电子围栏和虚拟墙

I系列机械臂具备电子围栏与虚拟墙功能，并提供了针对控制器所保存的电子围栏或虚拟墙几何模型参数的操作接口。 用户可以通过这些接口，实现对电子围栏或虚拟墙的新增、查询、更新和删除操作，在使用中，可以灵活地使用保存在 控制器中的参数配置，需要注意的是，目前控制器支持保存的参数要求不超过10 个。
**电子围栏**
电子围栏功能通过精确设置参数，确保机械臂的轨迹规划、示教等运动均在设定的电子围栏范围内进行。当机械臂的运动 轨迹可能超出电子围栏的界限时，系统会立即返回相应的错误码，并自动中止运动，从而有效保障机械臂的安全运行。
>注意：电子围栏目前仅支持长方体和点面矢量平面这两种形状，并且其仅在仿真模式下生效，为用户提供一个预演轨迹与进行轨迹优化的安全环境。

**虚拟墙**
虚拟墙功能支持在电流环拖动示教与力控拖动示教两种模式下，对拖动范围进行精确限制。在这两种特定的示教模式下，用户可以借助虚拟墙功能，确保 机械臂的拖动操作不会超出预设的范围。
>注意：虚拟墙功能目前支持长方体和球体两种形状，并仅在上述两种示教模式下有效。在其他操作模式下，此功能将自动失效。因此，请确保在正确的操作模式 下使用虚拟墙功能，以充分发挥其限制拖动范围的作用。

<div style="height: 2px; background-image: linear-gradient(to right, #ccc, #ccc); margin: 1em 0;"></div>

## 新增几何模型参数`rm_add_electronic_fence_config()`

- **方法原型：**

```C
int rm_add_electronic_fence_config(rm_robot_handle * handle,rm_fence_config_t config)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_fence_config_t](../struct/rm_fence_config_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   config  |    `/`    |    几何模型参数结构体。    |

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

## 更新几何模型参数`rm_update_electronic_fence_config()`

- **方法原型：**

```C
int rm_update_electronic_fence_config(rm_robot_handle * handle,rm_fence_config_t config)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_fence_config_t](../struct/rm_fence_config_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   config  |    `/`    |    几何模型参数结构体。    |

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

## 删除指定几何模型`rm_delete_electronic_fence_config()`

- **方法原型：**

```C
int rm_delete_electronic_fence_config(rm_robot_handle * handle,const char * form_name)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   form_name  |    `const char`    |    几何模型名称，不超过 10 个字节，支持字母、数字、下划线。    |

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

## 查询所有几何模型名称`rm_get_electronic_fence_list_names()`

- **方法原型：**

```C
int rm_get_electronic_fence_list_names(rm_robot_handle * handle,rm_fence_names_t * names,int * len)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_fence_names_t](../struct/rm_fence_names_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   names  |    `/`    |    存放几何模型名称列表，长度为实际存在几何模型数量。    |
|   len  |    `int`    |    存放几何模型名称列表长度。    |

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

## 查询指定几何模型参数`rm_get_given_electronic_fence_config()`

- **方法原型：**

```C
int rm_get_given_electronic_fence_config(rm_robot_handle * handle,const char * name,rm_fence_config_t * config)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_fence_config_t](../struct/rm_fence_config_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   name  |    `/`    |    指定几何模型名称。    |
|   config  |    `/`    |    返回几何模型参数结构体。    |

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

## 查询所有几何模型参数`rm_get_electronic_fence_list_infos()`

- **方法原型：**

```C
int rm_get_electronic_fence_list_infos(rm_robot_handle * handle,rm_fence_config_list_t * config_list,int * len)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_fence_config_list_t](../struct/rm_fence_config_list_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   config_list  |    `/`    |    存放几何模型信息列表，长度为实际存在几何模型数量。    |
|   len  |    `int`    |    存放几何模型信息列表长度。    |

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

## 设置电子围栏使能状态`rm_set_electronic_fence_enable()`

- **方法原型：**

```C
int rm_set_electronic_fence_enable(rm_robot_handle * handle,rm_electronic_fence_enable_t state)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_electronic_fence_enable_t](../struct/rm_electronic_fence_enable_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   state  |    `/`    |    电子围栏使能状态。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

>注解：电子围栏功能通过精确设置参数，确保机械臂的轨迹规划、示教等运动均在设定的电子围栏范围内进行。当机械臂的运动轨迹可能超出电子围栏的界限时， 系统会立即返回相应的错误码，并自动中止运动，从而有效保障机械臂的安全运行。需要注意的是，电子围栏目前仅支持长方体和点面矢量平面这两种形状，并 且其仅在仿真模式下生效，为用户提供一个预演轨迹与进行轨迹优化的安全环境。

- **使用示例**
  
```C

```

## 获取电子围栏使能状态`rm_get_electronic_fence_enable()`

- **方法原型：**

```C
int rm_get_electronic_fence_enable(rm_robot_handle * handle,rm_electronic_fence_enable_t * state)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_electronic_fence_enable_t](../struct/rm_electronic_fence_enable_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   state  |    `/`    |    电子围栏使能状态。    |

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

## 设置当前电子围栏参数配置`rm_set_electronic_fence_config()`

- **方法原型：**

```C
int rm_set_electronic_fence_config(rm_robot_handle * handle,rm_fence_config_t config)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_fence_config_t](../struct/rm_fence_config_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   config  |    `/`    |    当前电子围栏参数结构体（无需设置电子围栏名称）。    |

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

## 获取当前电子围栏参数`rm_get_electronic_fence_config()`

- **方法原型：**

```C
int rm_get_electronic_fence_config(rm_robot_handle * handle,rm_fence_config_t * config)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_fence_config_t](../struct/rm_fence_config_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   config  |    `/`    |    返回当前电子围栏参数结构体（返回参数中不包含电子围栏名称）。    |

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

## 设置虚拟墙使能状态`rm_set_virtual_wall_enable()`

- **方法原型：**

```C
int rm_set_virtual_wall_enable(rm_robot_handle * handle,rm_electronic_fence_enable_t state)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_electronic_fence_enable_t](../struct/rm_electronic_fence_enable_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   state  |    `/`    |    虚拟墙状态结构体。    |

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

## 获取虚拟墙使能状态`rm_get_virtual_wall_enable()`

- **方法原型：**

```C
int rm_get_virtual_wall_enable(rm_robot_handle * handle,rm_electronic_fence_enable_t * state)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_electronic_fence_enable_t](../struct/rm_electronic_fence_enable_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   state  |    `/`    |    虚拟墙状态结构体。    |

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

## 设置当前虚拟墙参数`rm_set_virtual_wall_config()`

- **方法原型：**

```C
int rm_set_virtual_wall_config(rm_robot_handle * handle,rm_fence_config_t config)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_fence_config_t](../struct/rm_fence_config_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   config  |    `/`    |    当前虚拟墙参数（无需设置虚拟墙名称）。    |

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

## 获取当前虚拟墙参数`rm_get_virtual_wall_config()`

- **方法原型：**

```C
int rm_get_virtual_wall_config(rm_robot_handle * handle,rm_fence_config_t * config)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_fence_config_t](../struct/rm_fence_config_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   config  |    `/`    |    当前虚拟墙参数（返回参数中不包含虚拟墙名称）。    |

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
