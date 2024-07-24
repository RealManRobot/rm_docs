# 电子围栏和虚拟墙

I系列机械臂具备电子围栏与虚拟墙功能，并提供了针对控制器所保存的电子围栏或虚拟墙几何模型参数的操作接口。 用户可以通过这些接口，实现对电子围栏或虚拟墙的新增、查询、更新和删除操作，在使用中，可以灵活地使用保存在 控制器中的参数配置，需要注意的是，目前控制器支持保存的参数要求不超过10个。
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

*可以跳转[rm_robot_handle](../struct/robotHandle.md)和[rm_fence_config_t](../struct/fenceConfig)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   config  |    输入参数    |    几何模型参数结构体。    |

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
// 新增长方体几何模型参数 “test1”
rm_fence_config_t fence_config;
strncpy(fence_config.name, "test1", 10);
fence_config.form = 1;
fence_config.cube.x_max_limit = 0.5;
fence_config.cube.x_min_limit = -0.5;
fence_config.cube.y_max_limit = 0.5;
fence_config.cube.y_min_limit = -0.5;
fence_config.cube.z_max_limit = 0.5;
fence_config.cube.z_min_limit = -0.5;
int result = rm_add_electronic_fence_config(robot_handle, fence_config);  
printf("rm_add_electronic_fence_config:%d\n", result);
```

## 更新几何模型参数`rm_update_electronic_fence_config()`

- **方法原型：**

```C
int rm_update_electronic_fence_config(rm_robot_handle * handle,rm_fence_config_t config)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)和[rm_fence_config_t](../struct/fenceConfig)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   config  |    输入参数    |    几何模型参数结构体。    |

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
// 修改长方体几何模型参数 “test1”
rm_fence_config_t fence_config;
strncpy(fence_config.name, "test1", 10);
fence_config.form = 1;
fence_config.cube.x_max_limit = 0.5;
fence_config.cube.x_min_limit = -1.0;
fence_config.cube.y_max_limit = 0.5;
fence_config.cube.y_min_limit = -0.5;
fence_config.cube.z_max_limit = 0.5;
fence_config.cube.z_min_limit = -0.5;
int result = rm_update_electronic_fence_config(robot_handle, fence_config);  
printf("rm_update_electronic_fence_config :%d\n", result);
```

## 删除指定几何模型`rm_delete_electronic_fence_config()`

- **方法原型：**

```C
int rm_delete_electronic_fence_config(rm_robot_handle * handle,const char * form_name)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   form_name  |    输入参数    |    几何模型名称，不超过 10 个字节，支持字母、数字、下划线。    |

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
 ret = rm_delete_electronic_fence_config(robot_handle, "test");
 printf("delete electronic fence config result : %d\n", ret);
```

## 查询所有几何模型名称`rm_get_electronic_fence_list_names()`

- **方法原型：**

```C
int rm_get_electronic_fence_list_names(rm_robot_handle * handle,rm_fence_names_t * names,int * len)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)和[rm_fence_names_t](../struct/frameName)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   names  |    输出参数    |    存放几何模型名称列表，长度为实际存在几何模型数量。    |
|   len  |    输出参数    |    存放几何模型名称列表长度。    |

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
rm_fence_names_t fence_names[10];
int len_fence = 0;
ret = rm_get_electronic_fence_list_names(robot_handle, fence_names, &len_fence);
printf("get electronic fence list names result : %d\n", ret);
for (int i = 0; i < len_fence; i++) {
    printf("electronic_fence[%d] name : %s\n", i, fence_names[i].name);
}
```

## 查询指定几何模型参数`rm_get_given_electronic_fence_config()`

- **方法原型：**

```C
int rm_get_given_electronic_fence_config(rm_robot_handle * handle,const char * name,rm_fence_config_t * config)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)和[rm_fence_config_t](../struct/fenceConfig)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   name  |    输入参数    |    指定几何模型名称。    |
|   config  |    输出参数    |    返回几何模型参数结构体。    |

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
rm_fence_config_t fence_config_given;
ret = rm_get_given_electronic_fence_config(robot_handle, "test", &fence_config_given);
printf("get given electronic fence config result : %d\n", ret);
printf("fence config given : %f, %f, %f, %f, %f, %f\n",
fence_config_given.cube.x_max_limit,
fence_config_given.cube.x_min_limit,    
fence_config_given.cube.y_max_limit,        
fence_config_given.cube.y_min_limit,
fence_config_given.cube.z_max_limit,
fence_config_given.cube.z_min_limit);
```

## 查询所有几何模型参数`rm_get_electronic_fence_list_infos()`

- **方法原型：**

```C
int rm_get_electronic_fence_list_infos(rm_robot_handle * handle,rm_fence_config_list_t * config_list,int * len)
```

<!-- *可以跳转[rm_robot_handle](../struct/robotHandle.md)和[rm_fence_config_list_t](../struct/rm_fence_config_list_t.md)查阅结构体详细描述* -->

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   config_list  |    输出参数    |    存放几何模型信息列表，长度为实际存在几何模型数量。    |
|   len  |    输出参数    |    存放几何模型信息列表长度。    |

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
rm_fence_config_list_t list;
int len;
result = rm_get_electronic_fence_list_infos(robot_handle, &list, &len);
printf("rm_get_electronic_fence_list_infos: %d:\n", result);
for (int i = 0; i < len; i++) {
    printf("electronic_fence[%d] name: %s, ", i + 1, list.config[i].name);
    printf("form: %d\n", list.config[i].form);
}
```

## 设置电子围栏使能状态`rm_set_electronic_fence_enable()`

- **方法原型：**

```C
int rm_set_electronic_fence_enable(rm_robot_handle * handle,rm_electronic_fence_enable_t state)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)和[rm_electronic_fence_enable_t](../struct/electronicFenceEnable)查阅结构体详细描述*

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
// 设置电子围栏使能、机器人在电子围栏内部且针对整臂区域生效
rm_electronic_fence_enable_t fence_state;
fence_state.enable_state = true;
fence_state.effective_region = 0;
fence_state.in_out_side = 0;
ret = rm_set_electronic_fence_enable(robot_handle, fence_state);
printf("set electronic fence enable result : %d\n", ret);
```

## 获取电子围栏使能状态`rm_get_electronic_fence_enable()`

- **方法原型：**

```C
int rm_get_electronic_fence_enable(rm_robot_handle * handle,rm_electronic_fence_enable_t * state)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)和[rm_electronic_fence_enable_t](../struct/electronicFenceEnable)查阅结构体详细描述*

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
ret = rm_get_electronic_fence_enable(robot_handle, &fence_state);
printf("get electronic fence enable result : %d\n", ret);
printf("fence enable state : %d\n", fence_state.enable_state);
printf("fence effective region : %d\n", fence_state.effective_region);
printf("fence in/out side : %d\n", fence_state.in_out_side);
```

## 设置当前电子围栏参数配置`rm_set_electronic_fence_config()`

- **方法原型：**

```C
int rm_set_electronic_fence_config(rm_robot_handle * handle,rm_fence_config_t config)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)和[rm_fence_config_t](../struct/fenceConfig)查阅结构体详细描述*

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
// 设置当前电子围栏参数
rm_fence_config_t set_fence_config;
set_fence_config.form = 1;
set_fence_config.cube.x_max_limit = 0.5;
set_fence_config.cube.x_min_limit = -1.0;
set_fence_config.cube.y_max_limit = 0.5;
set_fence_config.cube.y_min_limit = -0.5;
set_fence_config.cube.z_max_limit = 0.5;
set_fence_config.cube.z_min_limit = -0.5;
ret = rm_set_electronic_fence_config(robot_handle, set_fence_config);
printf("set electronic fence config result : %d\n", ret);
```

## 获取当前电子围栏参数`rm_get_electronic_fence_config()`

- **方法原型：**

```C
int rm_get_electronic_fence_config(rm_robot_handle * handle,rm_fence_config_t * config)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)和[rm_fence_config_t](../struct/fenceConfig)查阅结构体详细描述*

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
ret = rm_get_electronic_fence_config(robot_handle, &set_fence_config);
printf("get electronic fence config result : %d\n", ret);
printf("fence form : %d\n", set_fence_config.form);
printf("fence x_max_limit : %f\n", set_fence_config.cube.x_max_limit);
printf("fence x_min_limit : %f\n", set_fence_config.cube.x_min_limit);
printf("fence y_max_limit : %f\n", set_fence_config.cube.y_max_limit);
printf("fence y_min_limit : %f\n", set_fence_config.cube.y_min_limit);
printf("fence z_max_limit : %f\n", set_fence_config.cube.z_max_limit);
printf("fence z_min_limit : %f\n", set_fence_config.cube.z_min_limit);
```

## 设置虚拟墙使能状态`rm_set_virtual_wall_enable()`

- **方法原型：**

```C
int rm_set_virtual_wall_enable(rm_robot_handle * handle,rm_electronic_fence_enable_t state)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)和[rm_electronic_fence_enable_t](../struct/electronicFenceEnable)查阅结构体详细描述*

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
// 设置虚拟墙使能、机器人在电子围栏内部、针对末端生效
rm_electronic_fence_enable_t fence_state;
fence_state.enable_state = true;
fence_state.effective_region = 0;
fence_state.in_out_side = 1;
ret = rm_set_electronic_fence_enable(robot_handle, fence_state);
printf("set electronic fence enable result : %d\n", ret);
```

## 获取虚拟墙使能状态`rm_get_virtual_wall_enable()`

- **方法原型：**

```C
int rm_get_virtual_wall_enable(rm_robot_handle * handle,rm_electronic_fence_enable_t * state)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)和[rm_electronic_fence_enable_t](../struct/electronicFenceEnable)查阅结构体详细描述*

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
ret = rm_get_virtual_wall_enable(robot_handle, &fence_state);
printf("get virtual wall enable result : %d\n", ret);
printf("fence enable state : %d\n", fence_state.enable_state);
printf("fence effective region : %d\n", fence_state.effective_region);
printf("fence in/out side : %d\n", fence_state.in_out_side);
```

## 设置当前虚拟墙参数`rm_set_virtual_wall_config()`

- **方法原型：**

```C
int rm_set_virtual_wall_config(rm_robot_handle * handle,rm_fence_config_t config)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)和[rm_fence_config_t](../struct/fenceConfig)查阅结构体详细描述*

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
// 设置当前电子围栏参数
rm_fence_config_t set_fence_config;
set_fence_config.form = 1;
set_fence_config.cube.x_max_limit = 0.5;
set_fence_config.cube.x_min_limit = -1.0;
set_fence_config.cube.y_max_limit = 0.5;
set_fence_config.cube.y_min_limit = -0.5;
set_fence_config.cube.z_max_limit = 0.5;
set_fence_config.cube.z_min_limit = -0.5;
ret = rm_set_virtual_wall_config(robot_handle, set_fence_config);
printf("set virtual wall config result : %d\n", ret);
```

## 获取当前虚拟墙参数`rm_get_virtual_wall_config()`

- **方法原型：**

```C
int rm_get_virtual_wall_config(rm_robot_handle * handle,rm_fence_config_t * config)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)和[rm_fence_config_t](../struct/fenceConfig)查阅结构体详细描述*

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
ret = rm_get_virtual_wall_config(robot_handle, &set_fence_config);
printf("get virtual wall config result : %d\n", ret);
printf("fence form : %d\n", set_fence_config.form);
printf("fence x_max_limit : %f\n", set_fence_config.cube.x_max_limit);
printf("fence x_min_limit : %f\n", set_fence_config.cube.x_min_limit);
printf("fence y_max_limit : %f\n", set_fence_config.cube.y_max_limit);
printf("fence y_min_limit : %f\n", set_fence_config.cube.y_min_limit);
printf("fence z_max_limit : %f\n", set_fence_config.cube.z_max_limit);
printf("fence z_min_limit : %f\n", set_fence_config.cube.z_min_limit);
```
