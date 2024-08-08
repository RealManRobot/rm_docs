# 机械臂示教及步进运动`ArmTeachMove`

可用于关节、位置和姿态步进操作和示教等。下面是机械臂示教及步进运动`ArmTeachMove`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。


## 关节步进`rm_set_joint_step()`

- **方法原型：**

```python
rm_set_joint_step(self, num: int, step: float, v: int, block: int) -> int:
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   num  |    `int`    |    关节序号，1～7    |
|   step  |    `float`    |    步进的角度    |
|   v  |    `int`    | 速度比例1~100，即规划速度和加速度占机械臂末端最大线速度和线加速度的百分比    |
|   block  |    `int`    |   阻塞设置</br>多线程模式：</br>0：非阻塞模式，发送指令后立即返回。</br> 1：阻塞模式，等待机械臂到达目标位置或规划失败后才返回。</br>单线程模式</br>0：非阻塞模式。</br>其他值：阻塞模式并设置超时时间，单位为秒。 |

- **返回值:** </br>
函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |
|  -4  |    `int`   |   当前到位设备校验失败，即当前到位设备不为关节。   |
|  -5  |    `int`   |   单线程模式超时未接收到返回，请确保超时时间设置合理。   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

# 关节5步进3°
print(arm.rm_set_joint_step(5, 3, 20, 1))

arm.rm_delete_robot_arm()
```

## 当前工作坐标系下，位置步进`rm_set_pos_step()`

- **方法原型：**

```python
rm_set_pos_step(self, teach_type: rm_pos_teach_type_e, step: float, v: int, block: int) -> int:
```

*可以跳转[typeList](../type/typeList)查阅`rm_pos_teach_type_e`枚举详细描述*

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   teach_type  |    `rm_pos_teach_type_e`    |   示教类型    |
|   step  |    `float`    |    步进的距离，单位m，精确到0.001mm    |
|   v  |    `int`    | 速度比例1~100，即规划速度和加速度占机械臂末端最大线速度和线加速度的百分比    |
|   block  |    `int`    |   阻塞设置</br>多线程模式：</br>0：非阻塞模式，发送指令后立即返回。</br> 1：阻塞模式，等待机械臂到达目标位置或规划失败后才返回。</br>单线程模式</br>0：非阻塞模式。</br>其他值：阻塞模式并设置超时时间，单位为秒。 |

- **返回值:** </br>
函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |
|  -4  |    `int`   |   当前到位设备校验失败，即当前到位设备不为关节。   |
|  -5  |    `int`   |   单线程模式超时未接收到返回，请确保超时时间设置合理。   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

# 当前工作坐标系X轴方向步进0.05m
print(arm.rm_set_pos_step(rm_pos_teach_type_e.RM_X_DIR_E, 0.05, 20, 1))

arm.rm_delete_robot_arm()
```

## 当前工作坐标系下，姿态步进`rm_set_ort_step()`

- **方法原型：**

```python
rm_set_ort_step(self, teach_type: rm_ort_teach_type_e, step: float, v: int, block: int) -> int:
```

*可以跳转[typeList](../type/typeList)查阅`rm_ort_teach_type_e`枚举详细描述*

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   teach_type  |    `rm_ort_teach_type_e`    |   示教类型    |
|   step  |    `float`    |    步进的弧度，单位rad，精确到0.001rad    |
|   v  |    `int`    | 速度比例1~100，即规划速度和加速度占机械臂末端最大线速度和线加速度的百分比    |
|   block  |    `int`    |   阻塞设置</br>多线程模式：</br>0：非阻塞模式，发送指令后立即返回。</br> 1：阻塞模式，等待机械臂到达目标位置或规划失败后才返回。</br>单线程模式</br>0：非阻塞模式。</br>其他值：阻塞模式并设置超时时间，单位为秒。 |

- **返回值:** </br>
函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |
|  -4  |    `int`   |   当前到位设备校验失败，即当前到位设备不为关节。   |
|  -5  |    `int`   |   单线程模式超时未接收到返回，请确保超时时间设置合理。   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

# 绕当前工作坐标系X轴旋转0.01rad
print(arm.rm_set_ort_step(rm_ort_teach_type_e.RM_RX_ROTATE_E, 0.01, 20, 1))

arm.rm_delete_robot_arm()
```

## 关节示教`rm_set_joint_teach()`

- **方法原型：**

```python
rm_set_joint_teach(self, num: int, direction: int, v: int) -> int:
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   num  |    `int`    |   示教关节的序号，1～7    |
|   direction  |    `int`    |    示教方向，0-负方向，1-正方向    |
|   v  |    `int`    | 速度比例1~100，即规划速度和加速度占关节最大线转速和加速度的百分比    |

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

# 关节5正方向示教
print(arm.rm_set_joint_teach(5, 1, 20))

arm.rm_delete_robot_arm()
```

## 当前工作坐标系下，笛卡尔空间位置示教`rm_set_pos_teach()`

- **方法原型：**

```python
rm_set_pos_teach(self, teach_type: rm_pos_teach_type_e, direction: int, v: int) -> int:
```

*可以跳转[typeList](../type/typeList)查阅`rm_pos_teach_type_e`枚举详细描述*

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   teach_type  |    `rm_pos_teach_type_e`    |   示教类型  |
|   direction  |    `int`    |    示教方向，0-负方向，1-正方向    |
|   v  |    `int` |速度比例1~100，即规划速度和加速度占机械臂末端最大角速度和角加速度的百分比 |

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

# 当前工作坐标系X轴正方向示教
print(arm.rm_set_pos_teach(rm_pos_teach_type_e.RM_X_DIR_E, 1, 20))

arm.rm_delete_robot_arm()
```

## 当前工作坐标系下，笛卡尔空间姿态示教`rm_set_ort_teach()`

- **方法原型：**

```python
rm_set_ort_teach(self, teach_type: rm_ort_teach_type_e, direction: int, v: int) -> int:
```

*可以跳转[typeList](../type/typeList)查阅`rm_ort_teach_type_e`枚举详细描述*

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   teach_type  |    `rm_ort_teach_type_e`    |   示教类型   |
|   direction  |    `int`    |    示教方向，0-负方向，1-正方向    |
|   v  |    `int`    | 速度比例1~100，即规划速度和加速度占机械臂末端最大角速度和角加速度的百分比    |

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

# 绕当前工作坐标系X轴正方向示教
print(arm.rm_set_ort_teach(rm_ort_teach_type_e.RM_RX_ROTATE_E, 1, 20))

arm.rm_delete_robot_arm()
```

## 示教停止`rm_set_stop_teach()`

- **方法原型：**

```python
rm_set_stop_teach(self) -> int:
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   num  |    `int`    |   示教关节的序号，1～7    |
|   direction  |    `int`    |    示教方向，0-负方向，1-正方向    |
|   v  |    `int`    | 速度比例1~100，即规划速度和加速度占关节最大线转速和加速度的百分比    |

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

print(arm.rm_set_stop_teach())

arm.rm_delete_robot_arm()
```

## 切换示教运动坐标系`rm_set_teach_frame()`

- **方法原型：**

```python
rm_set_teach_frame(self, frame_type: int) -> int:
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   frame_type  |    `int`    |   0: 工作坐标系运动, 1: 工具坐标系运动    |

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

# 切换示教坐标系为当前工具坐标系
print(arm.rm_set_teach_frame(1))

arm.rm_delete_robot_arm()
```

## 获取示教参考坐标系`rm_get_teach_frame()`

- **方法原型：**

```python
rm_get_teach_frame(self) -> tuple[int, int]:
```

- **返回值:** </br>
tuple[int,int]: 包含两个元素的元组

1. 函数执行的状态码。

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 坐标系运动

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    工作坐标系运动    |
|   1  |    `int`   |   工具坐标系运动    |

- **使用示例**

```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

print(arm.rm_get_teach_frame())

arm.rm_delete_robot_arm()
```
