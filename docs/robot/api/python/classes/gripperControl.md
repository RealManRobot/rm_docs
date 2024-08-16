# <p class="hidden">Python: </p>末端工具夹爪配置`GripperControl`

可用于夹爪控制及状态获取。睿尔曼机械臂末端支持各种常见夹爪，系统配置了因时的 EG2-4C2 夹爪，为了便于用户操作夹爪，机械臂控制器 对用户开放了夹爪的控制协议（夹爪控制协议与末端modbus 功能互斥）。下面是夹爪控制及状态获取`GripperControl`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

## 设置夹爪行程`rm_set_gripper_route()`

即夹爪开口的最大值和最小值，设置成功后会自动保存，夹爪断电不丢失。

- **方法原型：**

```python
rm_set_gripper_route(self, min_route: int, max_route: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `min_route`      | `int` | 夹爪开口最小值，范围：0~1000，无单位量纲 max_route (int): 夹爪开口最大值，范围：0~1000，无单位量纲                    |

- **返回值:** </br>
函数执行的状态码：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |
|  -4  |    `int`   |    超时   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_gripper_route(70, 200))

arm.rm_delete_robot_arm()
```

## 松开夹爪`rm_set_gripper_release()`

即夹爪以指定的速度运动到开口最大处。

- **方法原型：**

```python
rm_set_gripper_release(self, speed: int, block: bool, timeout: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `speed`      | `int` | 夹爪松开速度，范围 1~1000，无单位量纲    |
| `block`      | `bool` | true 表示阻塞模式，false 表示非阻塞模式    |
| `timeout`      | `int` | 阻塞模式下超时时间设置，单位：秒    |

- **返回值:** </br>
函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |
|  -4  |    `int`   |    超时   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_gripper_release(500, True, 10))

arm.rm_delete_robot_arm()
```

## 夹爪力控夹取`rm_set_gripper_pick()`

夹爪以设定的速度和力夹取，当夹持力超过设定的力阈值后，停止夹取。

- **方法原型：**

```python
rm_set_gripper_pick(self, speed: int, force: int, block: bool, timeout: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `speed`      | `int` | 夹爪夹取速度，范围 1~1000，无单位量纲    |
| `force`      | `int` | 力控阈值，范围：50~1000，无单位量纲    |
| `block`      | `bool` | true 表示阻塞模式，false 表示非阻塞模式    |
| `timeout`      | `int` | 阻塞模式下超时时间设置，单位：秒    |

- **返回值:** </br>
函数执行的状态码：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功。    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |
|  -4  |    `int`   |    超时。   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_gripper_pick(500, 200, True, 10))

arm.rm_delete_robot_arm()
```

## 夹爪持续力控夹取`rm_set_gripper_pick_on()`

- **方法原型：**

```python
rm_set_gripper_pick_on(self, speed: int, force: int, block: bool, timeout: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `speed`      | `int` | 夹爪夹取速度，范围 1~1000，无单位量纲。    |
| `force`      | `int` | 力控阈值，范围：50~1000，无单位量纲。    |
| `block`      | `bool` | true 表示阻塞模式，false 表示非阻塞模式。    |
| `timeout`      | `int` | 阻塞模式下超时时间设置，单位：秒。    |

- **返回值:** </br>
函数执行的状态码：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |
|  -4  |    `int`   |    超时   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_gripper_pick_on(500, 200, True, 10))

arm.rm_delete_robot_arm()
```

## 设置夹爪达到指定位置`rm_set_gripper_position()`

- **方法原型：**

```python
rm_set_gripper_position(self, position: int, block: bool, timeout: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `position`      | `int` | 夹爪开口位置，范围：1~1000，无单位量纲    |
| `block`      | `bool` | true 表示阻塞模式，false 表示非阻塞模式    |
| `timeout`      | `int` | 阻塞模式下超时时间设置，单位：秒    |

- **返回值:** </br>
函数执行的状态码：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |
|  -4  |    `int`   |    超时   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_gripper_position(500, True, 10))

arm.rm_delete_robot_arm()
```

## 查询夹爪状态`rm_get_gripper_state()`

- **方法原型：**

```python
rm_get_gripper_state(self) -> tuple[int, dict[str, any]]:
```

- **返回值:** </br>
`tuple[int,dict[str, any]]`: 包含两个元素的元组 -int 函数执行的状态码

1. int: 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 夹爪状态信息

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   `rm_gripper_state_t`  |    `dict[str, any]`   |    夹爪状态信息字典，键为rm_gripper_state_t结构体的字段名称    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_gripper_state())

arm.rm_delete_robot_arm()
```
