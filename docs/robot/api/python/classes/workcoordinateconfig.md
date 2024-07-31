# 工作坐标系`WorkCoordinateConfig`

可用于自动/手动设置、删除、切换工作坐标系等。下面是工作坐标系`WorkCoordinateConfig`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

## 三点法自动设置工作坐标系`rm_set_auto_work_frame()`

- **方法原型：**

```python
rm_set_auto_work_frame(self, name: str, point_num: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| name      | `str` | 工作坐标系名称，不能超过十个字节。                    |
| point_num | `int` | 1~3代表3个标定点，依次为原点、X轴一点、Y轴一点，4代表生成坐标系。 |

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

# 设置关节角度[0, 20, 70, 0, 90, 0]的位置为原点
print(arm.rm_movej([0, 20, 70, 0, 90, 0], 20, 0, 0, True))
print(arm.rm_set_auto_work_frame("test_work", 1))
# 设置关节角度[0, 30, 60, 0, 90, 0]的位置为X轴一点
print(arm.rm_movej([0, 30, 60, 0, 90, 0], 20, 0, 0, True))
print(arm.rm_set_auto_work_frame("test_work", 2))
# 设置关节角度[0, 40, 50, 0, 90, 0]的位置为Y轴一点
print(arm.rm_movej([0, 40, 50, 0, 90, 0], 20, 0, 0, True))
print(arm.rm_set_auto_work_frame("test_work", 3))
# 生成“test_work”坐标系
print(arm.rm_set_auto_work_frame("test_work", 4))

arm.rm_delete_robot_arm()
```

## 手动设置工作坐标系`rm_set_manual_work_frame()`

- **方法原型：**

```python
rm_set_manual_work_frame(self, name: str, pose: list) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                               |
| :-------- | :---- | :----------------------------------- |
| name      | `str` | 工作坐标系名称，不能超过十个字节。         |
| pose | `list` | 新工作坐标系相对于基坐标系的位姿。             |

- **返回值:** </br>
函数执行的状态码

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

print(arm.rm_set_manual_work_frame("test", [-0.259256, -0.170727, 0.35621, 0, -0.447394, -1.81038]))

arm.rm_delete_robot_arm()
```

## 切换当前工作坐标系`rm_change_work_frame()`

- **方法原型：**

```python
rm_change_work_frame(self, tool_name: str) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                               |
| :-------- | :---- | :----------------------------------- |
| tool_name      | `str` | 目标工作坐标系名称 |

- **返回值:** </br>
函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |   成功    |
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

print(arm.rm_change_work_frame("test"))

arm.rm_delete_robot_arm()
```

## 删除指定工作坐标系`rm_delete_work_frame()`

- **方法原型：**

```python
rm_delete_work_frame(self, tool_name: str) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                               |
| :-------- | :---- | :----------------------------------- |
| tool_name      | `str` | 要删除的工作坐标系名称 |

- **返回值:** </br>
函数执行的状态码：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |   成功。    |
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

print(arm.rm_delete_work_frame("test"))

arm.rm_delete_robot_arm()
```

## 修改指定工作坐标系`rm_update_work_frame()`

- **方法原型：**

```python
rm_update_work_frame(self, name: str, pose: list) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                               |
| :-------- | :---- | :----------------------------------- |
| name      | `str` | 指定工具坐标系名称。 |
| pose      | `list` | 更新工作坐标系相对于基坐标系的位姿。 |

- **返回值:** </br>
函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |   成功。    |
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

print(arm.rm_update_work_frame("test", [0,0,0,0,0,0]))

arm.rm_delete_robot_arm()
```

## 获取所有工作坐标系名称`rm_get_total_work_frame()`

- **方法原型：**

```python
rm_get_total_work_frame(self) -> dict[str, any]:
```

- **返回值:** </br>
dict[str, any]: 包含以下键值的字典:

1. 'return_code' (int): 函数执行的状态码

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |   成功。    |
|   1  |    `int`    |   控制器返回false，参数错误或机械臂状态发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。   |
|   -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。    |

2. 所有工作坐标系名称

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   tool_names  |    `list[str]`    |    字符串列表，表示所有工作坐标系名称。    |


3. 工作坐标系名称数量

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   len  |    `int`    |    工作坐标系名称数量。    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

print(arm.rm_get_total_work_frame())
```

## 获取指定工作坐标系`rm_get_given_work_frame()`

- **方法原型：**

```python
rm_get_given_work_frame(self, name: str) -> tuple[int, list[float]]:
```

- **参数说明:**

| 名称        | 类型    | 说明                               |
| :-------- | :---- | :----------------------------------- |
| name      | `str` | 指定的工作坐标系名称。 |

- **返回值:** </br>
tuple[int, list[float]]: 包含两个元素的元组

1. 'return_code' (int): 函数执行的状态码。

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功    |
|   1  |    `int`    |   控制器返回false，参数错误或机械臂状态发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。   |
|   -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。    |

2. 工作坐标系位姿

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   pose  |    `list[float]`    |    工作坐标系位姿列表。   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

print(arm.rm_get_given_work_frame("test"))

arm.rm_delete_robot_arm()
```

## 获取当前工作坐标系`rm_get_current_work_frame()`

- **方法原型：**

```python
rm_get_current_work_frame(self) -> tuple[int, dict[str, any]]:
```

- **返回值:** </br>
tuple[int, dict[str, any]]: 包含两个元素的元组

1. 'return_code' (int): 函数执行的状态码。

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |   成功。    |
|   1  |    `int`    |   控制器返回false，参数错误或机械臂状态发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。   |
|   -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。    |

2. 工作坐标系位姿

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   rm_frame_t  |    `dict[str, any]`    |    工作坐标系字典，键为rm_frame_t的参数名。   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

print(arm.rm_get_current_work_frame())

arm.rm_delete_robot_arm()
```
