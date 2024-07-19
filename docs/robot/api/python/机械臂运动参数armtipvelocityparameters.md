---
title: "机械臂运动参数ArmTipVelocityParameters"
tags: ""
---

# 机械臂运动参数`ArmTipVelocityParameters`

可用于设置、获取机械臂运动参数，可以查阅[JointConfigSettings继承关系图](../继承关系图/关节配置JointConfigSettings.md)了解与其相关的类的关系。下面是机械臂运动参数`ArmTipVelocityParameters`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

---
## 设置机械臂末端最大线速度`rm_set_arm_max_line_speed()`

- **方法原型：**
```python
int Robotic_Arm.rm_robot_interface.ArmTipVelocityParameters.rm_set_arm_max_line_speed (self, float speed)
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   speed  |    `float`    |    末端最大线速度，单位m/s    |


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

print(arm.rm_set_arm_max_line_speed(0.25))

arm.rm_delete_robot_arm()
```

## 设置机械臂末端最大线加速度`rm_set_arm_max_line_acc()`

- **方法原型：**
```python
int Robotic_Arm.rm_robot_interface.ArmTipVelocityParameters.rm_set_arm_max_line_acc (self, float acc)
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   acc  |    `float`    |    末端最大线加速度，单位m/s^2    |


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

print(arm.rm_set_arm_max_line_acc(1.6))

arm.rm_delete_robot_arm()
```


## 设置机械臂末端最大角速度`rm_set_arm_max_angular_speed()`

- **方法原型：**
```python
int Robotic_Arm.rm_robot_interface.ArmTipVelocityParameters.rm_set_arm_max_angular_speed (self, float speed)
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   speed  |    `float`    |    末端最大角速度，单位rad/s    |


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

print(arm.rm_set_arm_max_angular_speed(0.6))

arm.rm_delete_robot_arm()
```

## 设置机械臂末端最大角速度`rm_set_arm_max_angular_acc()`

- **方法原型：**
```python
int Robotic_Arm.rm_robot_interface.ArmTipVelocityParameters.rm_set_arm_max_angular_acc (self, float acc)
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   acc  |    `float`    |    末端最大角加速度，单位rad/s^2    |


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

print(arm.rm_set_arm_max_angular_acc(4))

arm.rm_delete_robot_arm()
```


## 设置机械臂末端参数为默认值`rm_set_arm_tcp_init()`

- **方法原型：**
```python
int Robotic_Arm.rm_robot_interface.ArmTipVelocityParameters.rm_set_arm_tcp_init (self)
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

# 初始化机械臂参数，机械臂的末端参数恢复到默认值。默认参数为：
# 末端线速度：0.1m/s末端线加速度：0.5m/s²
# 末端角速度：0.2rad/s末端角加速度：1rad/s²
print(arm.rm_set_arm_tcp_init())

arm.rm_delete_robot_arm()
```


## 设置机械臂动力学碰撞检测等级`rm_set_collision_state()`

- **方法原型：**
```python
int Robotic_Arm.rm_robot_interface.ArmTipVelocityParameters.rm_set_collision_state (self, int stage)
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   stage  |    `int`    |    等级：0~8，0-无碰撞，8-碰撞最灵敏    |


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

# 设置机械臂碰撞防护等级为1
print(arm.rm_set_collision_state(1))

arm.rm_delete_robot_arm()
```


## 查询碰撞防护等级`rm_get_collision_stage()`

- **方法原型：**
```python
tuple[int, int]
Robotic_Arm.rm_robot_interface.ArmTipVelocityParameters.rm_get_collision_stage(self)
```

- **返回值:** </br>
tuple[int,int]: 包含两个元素的元组。

1. 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 碰撞等级

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0～8  |    `int`   |    等级：0~8，0-无碰撞，8-碰撞最灵敏     |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

print(arm.rm_get_collision_stage())

arm.rm_delete_robot_arm()
```

## 获取机械臂末端最大线速度`rm_get_arm_max_line_speed()`

- **方法原型：**
```python
tuple[int, float] Robotic_Arm.rm_robot_interface.ArmTipVelocityParameters.rm_get_arm_max_line_speed (self)
```

- **返回值:** </br>
tuple[int,int]: 包含两个元素的元组。

1. 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 机械臂末端最大线速度

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `float`   |    末端最大线速度，单位m/s     |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

print(arm.rm_get_arm_max_line_speed())

arm.rm_delete_robot_arm()
```


## 获取机械臂末端最大线加速度`rm_get_arm_max_line_acc()`

- **方法原型：**
```python
tuple[int, float] Robotic_Arm.rm_robot_interface.ArmTipVelocityParameters.rm_get_arm_max_line_acc	(self)
```

- **返回值:** </br>
tuple[int,float]: 包含两个元素的元组。

1. 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 机械臂末端最大线加速度

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `float`   |    末端最大线加速度，单位m/s^2     |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

print(arm.rm_get_arm_max_line_acc())

arm.rm_delete_robot_arm()
```


## 获取机械臂末端最大角加速度`rm_get_arm_max_angular_acc()`

- **方法原型：**
```python
tuple[int, float] Robotic_Arm.rm_robot_interface.ArmTipVelocityParameters.rm_get_arm_max_angular_acc (self)
```

- **返回值:** </br>
tuple[int,float]: 包含两个元素的元组。

1. 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 机械臂末端最大角加速度

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `float`   |    末端最大角加速度，单位rad/s^2     |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

print(arm.rm_get_arm_max_angular_acc())

arm.rm_delete_robot_arm()
```
