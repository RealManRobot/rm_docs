# <p class="hidden">Python: </p>透传力位混合控制补偿配置`ForcePositionControl`

可用于设置透传力位混合控制补偿等。下面是透传力位混合控制补偿`ForcePositionControl`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

## 开启透传力位混合控制补偿模式`rm_start_force_position_move()`

- **方法原型：**

```python
rm_start_force_position_move(self) -> int:
```

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
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_start_force_position_move())

arm.rm_delete_robot_arm()
```

## 停止透传力位混合控制补偿模式`rm_stop_force_position_move()`

- **方法原型：**

```python
rm_stop_force_position_move(self) -> int:
```

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
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_stop_force_position_move())

arm.rm_delete_robot_arm()
```

## 透传力位混合角度补偿`rm_force_position_move_joint()`

- **方法原型：**

```python
rm_force_position_move_joint(self, joint: list[float], sensor: int, mode: int, dir: int, force: float, follow: bool) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| joint      | `list[float]` | 目标关节角度，单位：°度       |
| sensor | `int` | 所使用传感器类型，0-一维力，1-六维力 |
| mode | `int` | 模式，0-沿基坐标系，1-沿工具端坐标系 |
| dir | `int`|力控方向，0~5分别代表X/Y/Z/Rx/Ry/Rz，其中一维力类型时默认方向为Z方向 |
| force | `float` | 力的大小 单位N |
| follow | `bool` | 是否高跟随 |


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
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 力控为六维力传感器沿工具坐标系Z轴方向2N的力，高跟随透传角度
print(arm.rm_force_position_move_joint([0, 0, 0, 0, 0, 0], 1, 1, 2, 2, True))

arm.rm_delete_robot_arm()
```

## 透传力位混合位姿补偿`rm_force_position_move_pose()`

- **方法原型：**

```python
rm_force_position_move_pose(self, pose: list[float], sensor: int, mode: int, dir: int, force: float, follow: bool) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `pose`      | `list[float]` | 当前坐标系下目标位姿列表，支持欧拉角及四元数方式表示姿态，若列表长度为6，则认为使用欧拉角方式表示；列表长度为7则认为使用四元数表示。       |
| `sensor` | `int` | 所使用传感器类型，0-一维力，1-六维力。 |
| `mode` | `int` | 模式，0-沿基坐标系，1-沿工具端坐标系。 |
| `dir` | `int`|力控方向，0~5分别代表X/Y/Z/Rx/Ry/Rz，其中一维力类型时默认方向为Z方向。 |
| `force` | `float` | 力的大小 单位N。 |
| `follow` | `bool` | 是否高跟随。 |

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
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 获取当前位姿
ret = arm.rm_get_current_arm_state()
print(f"pose{ret[1]['pose']}")

# 力控为六维力传感器沿工具坐标系Z轴方向2N的力，高跟随透传位姿
print(arm.rm_force_position_move_pose(ret[1]["pose"], 1, 1, 2, 2, True))

arm.rm_delete_robot_arm()
```

## 透传力位混合补偿-新参数`rm_force_position_move()`

- **方法原型：**

```python
rm_force_position_move(self, param:rm_force_position_move_t) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_force_position_move_t` | 透传力位混合补偿参数。       |


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
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

joint = [0, 40, 50, 0, 90, 0]
arm.rm_movej(joint, 20, 0, 0, 1)

joint[2] += 0.01
param = rm_force_position_move_t(flag=0, joint=joint, sensor=1, mode=1, follow=False,
                                                 control_mode=[3, 3, 4, 3, 3, 3],
                                                 desired_force=[0, 0, 0, 0, 0, 0],
                                                 limit_vel=[0.1, 0.1, 0.1, 10, 10, 10])
arm.rm_force_position_move(param)                                                 

arm.rm_delete_robot_arm()
```
