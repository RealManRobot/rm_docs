# 拖动示教`DragTeach`

可用拖动示教的设置等，睿尔曼机械臂在拖动示教过程中，可记录拖动的轨迹点，并根据用户的指令对轨迹进行复现。下面是拖动示教`DragTeach`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

## 拖动示教开始`rm_start_drag_teach()`

- **方法原型：**

```python
rm_start_drag_teach(self, trajectory_record: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| trajectory_record      | `int` | 拖动示教时记录轨迹，0-不记录，1-记录轨迹 |

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

print(arm.rm_start_drag_teach(1))

arm.rm_delete_robot_arm()
```

## 拖动示教结束`rm_stop_drag_teach()`

- **方法原型：**

```python
rm_stop_drag_teach(self) -> int:
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
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

print(arm.rm_stop_drag_teach())

arm.rm_delete_robot_arm()
```

## 开始复合模式拖动示教`rm_start_multi_drag_teach()`

- **方法原型：**

```python
rm_start_multi_drag_teach(self, mode: int, singular_wall: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| mode      | `int` | 拖动示教模式</br> 0-电流环模式</br>1-使用末端六维力，只动位置</br>2-使用末端六维力，只动姿态</br>3-使用末端六维力，位置和姿态同时动。 |
| singular_wall      | `int` | 仅在六维力模式拖动示教中生效，用于指定是否开启拖动奇异墙</br>0表示关闭拖动奇异墙</br>1表示开启拖动奇异墙。 |

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

# 电流环拖动示教
print(arm.rm_start_multi_drag_teach(0, 0))

arm.rm_delete_robot_arm()
```

## 运动到轨迹起点`rm_drag_trajectory_origin()`

> 轨迹复现前，必须控制机械臂运动到轨迹起点，如果设置正确，机械臂将以20的速度运动到轨迹起点

- **方法原型：**

```python
rm_drag_trajectory_origin(self, block: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
|   block  |    `int`    |   阻塞设置</br>多线程模式：</br>0：非阻塞模式，发送指令后立即返回。</br> 1：阻塞模式，等待机械臂到达目标位置或规划失败后才返回。</br>单线程模式</br>0：非阻塞模式。</br>其他值：阻塞模式并设置超时时间，单位为秒。 |

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

# 阻塞模式运动到轨迹起点
print(arm.rm_drag_trajectory_origin(1))

arm.rm_delete_robot_arm()
```

## 拖动示教复现`rm_run_drag_trajectory()`

> 必须在拖动示教结束后才能使用，同时保证机械臂位于拖动示教的起点位置，可调用rm_drag_trajectory_origin接口运动至起点位置。

- **方法原型：**

```python
rm_run_drag_trajectory(self, timeout: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
|   timeout  |    `int`    |   阻塞设置</br>多线程模式：</br>0：非阻塞模式，发送指令后立即返回。</br> 1：阻塞模式，等待机械臂到达目标位置或规划失败后才返回。</br>单线程模式</br>0：非阻塞模式。</br>其他值：阻塞模式并设置超时时间，单位为秒。 |

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

print(arm.rm_run_drag_trajectory(1))

arm.rm_delete_robot_arm()
```

## 控制机械臂在轨迹复现过程中的暂停`rm_pause_drag_trajectory()`

- **方法原型：**

```python
rm_pause_drag_trajectory(self) -> int:
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
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

print(arm.rm_pause_drag_trajectory())

arm.rm_delete_robot_arm()
```

## 控制机械臂在轨迹复现过程中暂停之后的继续`rm_continue_drag_trajectory()`

- **方法原型：**

```python
rm_continue_drag_trajectory(self) -> int:
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
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

print(arm.rm_continue_drag_trajectory())

arm.rm_delete_robot_arm()
```

## 控制机械臂在轨迹复现过程中的停止`rm_stop_drag_trajectory()`

- **方法原型：**

```python
rm_stop_drag_trajectory(self) -> int:
```

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

print(arm.rm_stop_drag_trajectory())

arm.rm_delete_robot_arm()
```

## 力位混合控制`rm_set_force_position()`

> 在笛卡尔空间轨迹规划时，使用该功能可保证机械臂末端接触力恒定，使用时力的方向与机械臂运动方向不能在同一方向。 开启力位混合控制，执行笛卡尔空间运动，接收到运动完成反馈后，需要等待2S后继续下发下一条运动指令。

- **方法原型：**

```python
rm_set_force_position(self, sensor: int, mode: int, direction: int, force: float) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| sensor      | `int` | 0-一维力；1-六维力。 |
| mode      | `int` | 0-基坐标系力控；1-工具坐标系力控。 |
| direction      | `int` | 力控方向；0-沿X轴；1-沿Y轴；2-沿Z轴；3-沿RX姿态方向；4-沿RY姿态方向；5-沿RZ姿态方向。 |
| force      | `float` | 力的大小，单位N。 |

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

print(arm.rm_set_force_position(1, 0, 2, 5))

arm.rm_delete_robot_arm()
```

## 结束力位混合控制`rm_stop_force_position()`

- **方法原型：**

```python
rm_stop_force_position(self) -> int:
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
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

print(arm.rm_stop_force_position())

arm.rm_delete_robot_arm()
```

## 保存拖动示教轨迹`rm_save_trajectory()`

- **方法原型：**

```python
rm_save_trajectory(self, file_path: str) -> tuple[int, int]:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| file_path      | `str` | 轨迹要保存的文件路径及名称，例: c:/rm_test.txt |

- **返回值:** </br>
tuple[int,int]: 包含两个元素的元组

1. int: 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 轨迹点总数

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `int`   |    轨迹点总数    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

print(arm.rm_save_trajectory("H:/Desktop/example.txt"))

arm.rm_delete_robot_arm()
```
