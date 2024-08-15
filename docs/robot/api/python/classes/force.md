# <p class="hidden">Python: </p>末端六维力配置`Force`

睿尔曼机械臂六维力版末端配备集成式六维力传感器，无需外部走线，用户可直接通过协议对六维力进行操作， 获取六维力数据。如下图所示，正上方为六维力的 Z 轴，航插反方向为六维力的 Y 轴，坐标系符合右手定则。 机械臂位于零位姿态时，工具坐标系与六维力的坐标系方向一致。
另外，六维力额定力 200N，额定力矩 7Nm，过载水平 300FS，工作温度 5~80℃，准度 0.5FS。使用过程中 注意使用要求，防止损坏六维力传感器。下面是六维力坐标系：

![force.png](../doc/sixForce.png)

本接口可用于查询、配置末端力传感器等，下面是末端力传感器`Force`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

---

## 查询六维力传感器力信息`rm_get_force_data()`

查询当前六维力传感器得到的力和力矩信息，包含Fx,Fy,Fz,Mx,My,Mz。

- **方法原型：**

```python
rm_get_force_data(self) -> tuple[int, dict[str, any]]:
```

- **返回值:** </br>
tuple[int, dict[str,any]]: 包含两个元素的元组

1. int: 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 六维力数据字典

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   rm_force_data_t  |    `dict[str, any]`   |    六维力数据字典，键为rm_force_data_t结构体的字段名称    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_force_data())

arm.rm_delete_robot_arm()
```

## 标定当前状态下的零位`rm_clear_force_data()`

将六维力数据清零，标定当前状态下的零位。

- **方法原型：**

```python
rm_clear_force_data(self) -> int:
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

print(arm.rm_clear_force_data())

arm.rm_delete_robot_arm()
```

## 自动设置六维力重心参数`rm_set_force_sensor()`

> 设置六维力重心参数，六维力重新安装后，必须重新计算六维力所受到的初始力和重心。分别在不同姿态下，获取六维力的数据， 用于计算重心位置。该指令下发后，机械臂以固定的速度运动到各标定点。</br>
以RM65机械臂为例，四个标定点的关节角度分别为：</br>
位置1关节角度：{0,0,-60,0,60,0}</br>
位置2关节角度：{0,0,-60,0,-30,0}</br>
位置3关节角度：{0,0,-60,0,-30,180}</br>
位置4关节角度：{0,0,-60,0,-120,0}</br>

- **方法原型：**

```python
rm_set_force_sensor(self, block: bool) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| block      | `bool` | true 表示阻塞模式，等待标定完成后返回；false 表示非阻塞模式，发送后立即返回             |

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

print(arm.rm_set_force_sensor(True))

arm.rm_delete_robot_arm()
```

## 手动标定六维力数据`rm_manual_set_force()`

六维力重新安装后，必须重新计算六维力所受到的初始力和重心。该手动标定流程，适用于空间狭窄工作区域，以防自动标定过程中 机械臂发生碰撞，用户可以手动选取四个位置下发，当下发完四个点后，机械臂开始自动沿用户设置的目标运动，并在此过程中计算六维力重心。

> **注意**</br>
> 上述4个位置必须按照顺序依次下发，当下发完位置4后，机械臂开始自动运行计算重心。

- **方法原型：**

```python
rm_manual_set_force(self, point_num: int, joint: list[float], block: bool) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| point_num      | `int` | 点位；1~4             |
| joint      | `list[float]` | 关节角度，单位：°度             |
| block      | `bool` | true 表示阻塞模式，等待标定完成后返回；false 表示非阻塞模式，发送后立即返回             |

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
import time

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

set_force_data = [({'point_num': 1, 'joint': [0, 0, -60, 0, 60, 0], 'block': True},
                       {'point_num': 2, 'joint': [0, 0, -60, 0, -30, 0], 'block': True},
                       {'point_num': 3, 'joint': [0, 0, -60, 0, -30, 180], 'block': True},
                       {'point_num': 4, 'joint': [0, 0, -60, 0, -120, 0], 'block': True})]

print(arm.rm_manual_set_force(**set_force_data[0]))
time.sleep(1)
print(arm.rm_manual_set_force(**set_force_data[1]))
time.sleep(1)
print(arm.rm_manual_set_force(**set_force_data[2]))
time.sleep(1)
print(arm.rm_manual_set_force(**set_force_data[3]))
time.sleep(1)

arm.rm_delete_robot_arm()
```

## 停止标定力传感器重心`rm_stop_set_force_sensor()`

- **方法原型：**

```python
rm_stop_set_force_sensor(self) -> int:
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

print(arm.rm_stop_set_force_sensor())

arm.rm_delete_robot_arm()
```
