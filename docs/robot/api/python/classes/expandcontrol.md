# 扩展关节控制`ExpandControl`

可用于扩展关节控制。下面是扩展关节控制`ExpandControl`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

---

## 扩展关节速度环控制`rm_set_expand_speed()`

- **方法原型：**

```python
rm_set_expand_speed(self, speed: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| speed      | `int` | 速度百分比，-100~100。speed<0：升降机构向下运动；speed>0：升降机构向上运动；speed=0：升降机构停止运动；                    |

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

# 扩展关节速度50% 反向运动
print(arm.rm_set_expand_speed(-50))

arm.rm_delete_robot_arm()
```

## 扩展关节位置环控制`rm_set_expand_pos()`

- **方法原型：**

```python
rm_set_expand_pos(self, speed: int, height: int, block: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| speed      | `int` | 速度百分比，1~100                    |
| height      | `int` | 扩展关节角度，单位度                    |
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

print(arm.rm_set_expand_pos(200, 20, 1))

arm.rm_delete_robot_arm()
```

## 获取扩展关节状态`rm_get_expand_state()`

- **方法原型：**

```python
rm_get_expand_state(self) -> tuple[int, dict[str, any]]:
```

- **返回值:** </br>

1. int: 函数执行的状态码。

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 扩展关节状态字典

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   rm_expand_state_t  |    `dict[str,any]`   |    获取到的扩展关节状态字典，键为rm_expand_state_t结构体的字段名称    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

print(arm.rm_get_expand_state())

arm.rm_delete_robot_arm()
```
