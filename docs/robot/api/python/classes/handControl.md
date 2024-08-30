# <p class="hidden">Python: </p>五指灵巧手配置`HandControl`

该接口可用于设置五指灵巧手控制，下面是五指灵巧手控制`HandControl`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

## 设置灵巧手目标手势序列号`rm_set_hand_posture()`

- **方法原型：**

```python
rm_set_hand_posture(self, posture_num: int, block: bool, timeout: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `posture_num`      | `int` | 预先保存在灵巧手内的手势序号，范围：1~40    |
| `block` | `bool` | true 表示阻塞模式，等待灵巧手运动结束后返回</br>false 表示非阻塞模式，发送后立即返回  |
| `timeout`      | `int` | 阻塞模式下超时时间设置，单位：秒   |

- **返回值:** </br>
函数执行的状态码：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功。    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |
|  -4  |    `int`   |   当前到位设备校验失败，即当前到位设备不为灵巧手。   |
|  -5  |    `int`   |   超时未返回。   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_hand_posture(1, True, 10))

arm.rm_delete_robot_arm()
```

## 设置灵巧手动作序列`rm_set_hand_seq()`

- **方法原型：**

```python
rm_set_hand_seq(self, seq_num: int, block: bool, timeout: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `seq_num`   | `int` | 预先保存在灵巧手内的手势序号，范围：1~40    |
| `block` | `bool` | true 表示阻塞模式，等待灵巧手运动结束后返回</br>false 表示非阻塞模式，发送后立即返回  |
| `timeout`      | `int` | 阻塞模式下超时时间设置，单位：秒   |

- **返回值:** </br>
函数执行的状态码：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |   成功。    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |
|  -4  |    `int`   |   当前到位设备校验失败，即当前到位设备不为灵巧手。   |
|  -5  |    `int`   |   超时未返回。   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_hand_seq(1, True, 15))

arm.rm_delete_robot_arm()
```

## 设置灵巧手各自由度角度`rm_set_hand_angle()`

- **方法原型：**

```python
rm_set_hand_angle(self, hand_angle: list[int]) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `seq_num`   | `int` | 预先保存在灵巧手内的手势序号，范围：1~40    |
| `block` | `bool` | true 表示阻塞模式，等待灵巧手运动结束后返回</br>false 表示非阻塞模式，发送后立即返回  |
| `timeout`      | `int` | 阻塞模式下超时时间设置，单位：秒   |

- **返回值:** </br>
函数执行的状态码：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |
|  -4  |    `int`   |   超时未返回   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 设置灵巧手各手指角度
print(arm.rm_set_hand_angle([-1,100,200,300,400,500]))

arm.rm_delete_robot_arm()
```

## 设置灵巧手速度`rm_set_hand_speed()`

- **方法原型：**

```python
rm_set_hand_speed(self, speed: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `speed`   | `int` | 手指速度，范围：1~1000    |

- **返回值:** </br>
函数执行的状态码：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |
|  -4  |    `int`   |   超时未返回   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_hand_speed(500))

arm.rm_delete_robot_arm()
```

## 设置灵巧手力阈值`rm_set_hand_force()`

- **方法原型：**

```python
rm_set_hand_force(self, force: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| force   | `int` | 手指力，范围：1~1000    |

- **返回值:** </br>
函数执行的状态码：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |
|  -4  |    `int`   |   超时未返回   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_hand_force(500))

arm.rm_delete_robot_arm()
```
