---
title: "工具坐标系ToolCoordinateConfig"
tags: ""
---

# 工具坐标系`ToolCoordinateConfig`

可用于自动/手动设置、删除、切换工具坐标系等，可以查阅[JointConfigSettings继承关系图](../继承关系图/关节配置JointConfigSettings.md)了解与其相关的类的关系。下面是工具坐标系`ToolCoordinateConfig`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

---
## 六点法自动设置工具坐标系 标记点位`rm_set_auto_tool_frame()`

- **方法原型：**
```python
int Robotic_Arm.rm_robot_interface.ToolCoordinateConfig.rm_set_auto_tool_frame	(self, int point_num)	
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   point_num  |    `int`    |    1~6代表6个标定点    |

- **返回值:** </br>
函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

- **使用使用示例**
  
```python

```

## 六点法自动设置工具坐标系 提交`rm_generate_auto_tool_frame()`

- **方法原型：**
```python
int Robotic_Arm.rm_robot_interface.ToolCoordinateConfig.rm_generate_auto_tool_frame	(self, str tool_name, float payload, float x, float y, float z)	
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   tool_name  |    `str`    |    工具坐标系名称，不能超过十个字节。    |
|   payload    | `payload`   |    新工具执行末端负载重量 单位kg    |
|   x  |    `float`    |    新工具执行末端负载位置 位置x 单位m 。    |
|   y  |    `float`    |    新工具执行末端负载位置y 单位m 。    |
|   z  |    `float`    |    新工具执行末端负载位置 位置z 单位m 。    |


- **返回值:** </br>
函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

- **使用使用示例**
  
```python

```

## 手动设置工具坐标系`rm_set_manual_tool_frame()`

- **方法原型：**
```python
int Robotic_Arm.rm_robot_interface.ToolCoordinateConfig.rm_set_manual_tool_frame (self, rm_frame_t frame)
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   frame  |    `rm_frame_t`    |    新工具坐标系参数结构体   |


- **返回值:** </br>
函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

- **使用使用示例**
  
```python

```

## 切换当前工具坐标系`rm_change_tool_frame()`

- **方法原型：**
```python
int Robotic_Arm.rm_robot_interface.ToolCoordinateConfig.rm_change_tool_frame (self, str tool_name)
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   tool_name  |    `str`    |    目标工具坐标系名称   |


- **返回值:** </br>
函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

- **使用使用示例**
  
```python

```

## 删除指定工具坐标系`rm_delete_tool_frame()`

- **方法原型：**
```python
int Robotic_Arm.rm_robot_interface.ToolCoordinateConfig.rm_delete_tool_frame (self, str tool_name)
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   tool_name  |    `str`    |    要删除的工具坐标系名称   |

- **返回值:** </br>
函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

- **使用使用示例**
  
```python

```


## 修改指定工具坐标系`rm_update_tool_frame()`

- **方法原型：**
```python
int Robotic_Arm.rm_robot_interface.ToolCoordinateConfig.rm_update_tool_frame (self, rm_frame_t frame)
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   frame  |    `rm_frame_t`    |    要修改的工具坐标系名称   |

- **返回值:** </br>
函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

- **使用使用示例**
  
```python

```

## 获取所有工具坐标系名称`rm_get_total_tool_frame()`

- **方法原型：**
```python
dict[str, any] Robotic_Arm.rm_robot_interface.ToolCoordinateConfig.rm_get_total_tool_frame (self)
```

- **返回值:** </br>
dict[str, any]: 包含以下键值的字典:

1. 'return_code' (int): 函数执行的状态码。

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功    |
|   1  |    `int`    |   控制器返回false，参数错误或机械臂状态发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。   |
|   -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。    |

2. 所有工具坐标系名称

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   tool_names  |    `list[str]`    |    字符串列表，表示所有工具坐标系名称。    |


3. 工具坐标系名称数量

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   len  |    `int`    |    工具坐标系名称数量。    |

- **使用使用示例**
  
```python

```

## 获取指定工具坐标系`rm_get_given_tool_frame()`

- **方法原型：**
```python
tuple[int, dict[str, any]] Robotic_Arm.rm_robot_interface.ToolCoordinateConfig.rm_get_given_tool_frame (self, str tool_name)
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   tool_name  |    `str`    |   工具坐标系名称   |

- **返回值:** </br>
tuple: 包含两个元素的元组。

1. int: 函数执行的状态码

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功    |
|   1  |    `int`    |   控制器返回false，参数错误或机械臂状态发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。   |
|   -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。    |

2. 工具坐标系字典


|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   rm_frame_t  |    `dict[str, any]`    |    工具坐标系字典，键为rm_frame_t的参数名。   |


- **使用使用示例**
  
```python

```

## 获取当前工具坐标系`rm_get_current_tool_frame()`

- **方法原型：**
```python
tuple[int, dict[str, any]] Robotic_Arm.rm_robot_interface.ToolCoordinateConfig.rm_get_current_tool_frame (self)
```

- **返回值:** </br>
tuple: 包含两个元素的元组。

1. int: 函数执行的状态码

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功    |
|   1  |    `int`    |   控制器返回false，参数错误或机械臂状态发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。   |
|   -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。    |

2. 工具坐标系字典


|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   rm_frame_t  |    `dict[str, any]`    |    工具坐标系字典，键为rm_frame_t的参数名。   |


- **使用使用示例**
  
```python

```

## 设置工具坐标系的包络参数`rm_set_tool_envelope()`

- **方法原型：**
```python
int Robotic_Arm.rm_robot_interface.ToolCoordinateConfig.rm_set_tool_envelope (self, rm_envelope_balls_list_t envelope)
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   envelope  |    `rm_envelope_balls_list_t`    |    包络参数列表，每个工具最多支持 5 个包络球，可以没有包络。   |

- **返回值:** </br>
函数执行的状态码。

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

- **使用使用示例**
  
```python

```

## 获取工具坐标系的包络参数`rm_get_tool_envelope()`

- **方法原型：**
```python
tuple[int, dict[str, any]] Robotic_Arm.rm_robot_interface.ToolCoordinateConfig.rm_get_tool_envelope (self, str tool_name)
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   tool_name  |    `string`    |    工具坐标系名称   |

- **返回值:** </br>
tuple: 包含两个元素的元组。

1. int: 函数执行的状态码

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功    |
|   1  |    `int`    |   控制器返回false，参数错误或机械臂状态发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。   |
|   -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。    |

2. 工具坐标系字典

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   rm_frame_t  |    `dict[str, any]`    |    工具坐标系字典，键为rm_frame_t的参数名。   |
- **使用使用示例**
  
```python

```
