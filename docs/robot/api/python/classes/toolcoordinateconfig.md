# 工具坐标系`ToolCoordinateConfig`

可用于自动/手动设置、删除、切换工具坐标系等。下面是工具坐标系`ToolCoordinateConfig`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

## 六点法自动设置工具坐标系 标记点位`rm_set_auto_tool_frame()`

- **方法原型：**

```python
rm_set_auto_tool_frame(self, point_num: int) -> int:
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   point_num  |    `int`    |    1~6代表6个标定点。    |

- **返回值:** </br>
函数执行的状态码：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功。    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

# 设置当前位置为第一个标定点 
print(arm.rm_set_auto_tool_frame(1))

arm.rm_delete_robot_arm()
```

## 六点法自动设置工具坐标系 提交`rm_generate_auto_tool_frame()`

- **方法原型：**

```python
rm_generate_auto_tool_frame(self, tool_name: str, payload: float, x: float, y: float, z: float) -> int:
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
函数执行的状态码：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

# 自动生成坐标系“test”，负载2kg
print(arm.rm_generate_auto_tool_frame("test", 2, 0, 0, 0))

arm.rm_delete_robot_arm()
```

## 手动设置工具坐标系`rm_set_manual_tool_frame()`

- **方法原型：**

```python
rm_set_manual_tool_frame(self, frame: rm_frame_t) -> int:
```

*可以跳转[rm_frame_t](../struct/frame.md)查阅结构体详细描述*

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   frame  |    `rm_frame_t`    |    新工具坐标系参数结构体。   |

- **返回值:** </br>
函数执行的状态码：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功。    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

frame = rm_frame_t("test", [0, 0, 0, 0, 0, 0], 1, 0, 0, 0)
print(arm.rm_set_manual_tool_frame(frame))

arm.rm_delete_robot_arm()
```

## 切换当前工具坐标系`rm_change_tool_frame()`

- **方法原型：**

```python
rm_change_tool_frame(self, tool_name: str) -> int:
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   tool_name  |    `str`    |    目标工具坐标系名称。   |

- **返回值:** </br>
函数执行的状态码：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功。    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

print(arm.rm_change_tool_frame("test"))

arm.rm_delete_robot_arm()
```

## 删除指定工具坐标系`rm_delete_tool_frame()`

- **方法原型：**

```python
rm_delete_tool_frame(self, tool_name: str) -> int:
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   tool_name  |    `str`    |    要删除的工具坐标系名称。   |

- **返回值:** </br>
函数执行的状态码：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功。    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

print(arm.rm_delete_tool_frame("test"))

arm.rm_delete_robot_arm()
```

## 修改指定工具坐标系`rm_update_tool_frame()`

- **方法原型：**

```python
rm_update_tool_frame(self, frame: rm_frame_t) -> int:
```

*可以跳转[rm_frame_t](../struct/frame.md)查阅结构体详细描述*

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   frame  |    `rm_frame_t`    |    要修改的工具坐标系名称。   |

- **返回值:** </br>
函数执行的状态码：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功。    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

frame = rm_frame_t("test", [0.186350, 0.062099, 0.2, 3.141, 0, 1.569], 5, 1, 1, 1)
print(arm.rm_update_tool_frame(frame))

arm.rm_delete_robot_arm()
```

## 获取所有工具坐标系名称`rm_get_total_tool_frame()`

- **方法原型：**

```python
rm_get_total_tool_frame(self) -> dict[str, any]:
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

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

print(arm.rm_get_total_tool_frame())

arm.rm_delete_robot_arm()
```

## 获取指定工具坐标系`rm_get_given_tool_frame()`

- **方法原型：**

```python
rm_get_given_tool_frame(self, tool_name: str) -> tuple[int, dict[str, any]]:
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   tool_name  |    `str`    |   工具坐标系名称。   |

- **返回值:** </br>
tuple: 包含两个元素的元组。

1. int: 函数执行的状态码

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |   控制器返回false，参数错误或机械臂状态发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。   |
|   -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。    |

2. 工具坐标系字典

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   rm_frame_t  |    `dict[str, any]`    |    工具坐标系字典，键为rm_frame_t的参数名。   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

print(arm.rm_get_given_tool_frame("test"))

arm.rm_delete_robot_arm()
```

## 获取当前工具坐标系`rm_get_current_tool_frame()`

- **方法原型：**

```python
rm_get_current_tool_frame(self) -> tuple[int, dict[str, any]]:
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

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

print(arm.rm_get_current_tool_frame())

arm.rm_delete_robot_arm()
```

## 设置工具坐标系的包络参数`rm_set_tool_envelope()`

- **方法原型：**

```python
rm_set_tool_envelope(self, envelope: rm_envelope_balls_list_t) -> int:
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

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

# 给“test”坐标系设置三个包络
envelop = rm_envelope_balls_list_t("test", [("L", 0.01, 0.1, 0.01, 0.010), ("R", 0.01, 0.1, 0.010, 0.010),
                                          ("C", 0.01, 0.1, 0.010, 0.010)], 3)
print(arm.rm_set_tool_envelope(envelop))

arm.rm_delete_robot_arm()
```

## 获取工具坐标系的包络参数`rm_get_tool_envelope()`

- **方法原型：**

```python
rm_get_tool_envelope(self, tool_name: str) -> tuple[int, dict[str, any]]:
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

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

# 获取“test”坐标系的包络参数
print(arm.rm_get_tool_envelope("test"))

arm.rm_delete_robot_arm()
```
