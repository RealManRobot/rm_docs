# <p class="hidden">Python: </p>机械臂运动参数配置`ArmTipVelocityParameters`

可用于设置、获取机械臂运动参数。下面是机械臂运动参数`ArmTipVelocityParameters`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

## 设置机械臂末端最大线速度`rm_set_arm_max_line_speed()`

- **方法原型：**

```python
rm_set_arm_max_line_speed(self, speed: float) -> int:
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `speed`  |    `float`    |    末端最大线速度，单位m/s。    |

- **返回值:** <br>
函数执行的状态码：

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_arm_max_line_speed(0.25))

arm.rm_delete_robot_arm()
```

## 设置机械臂末端最大线加速度`rm_set_arm_max_line_acc()`

- **方法原型：**

```python
rm_set_arm_max_line_acc(self, acc: float) -> int:
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `acc`  |    `float`    |    末端最大线加速度，单位m/s^2。    |

- **返回值:** <br>
函数执行的状态码：

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_arm_max_line_acc(1.6))

arm.rm_delete_robot_arm()
```

## 设置机械臂末端最大角速度`rm_set_arm_max_angular_speed()`

- **方法原型：**

```python
rm_set_arm_max_angular_speed(self, speed: float) -> int:
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `speed`  |    `float`    |    末端最大角速度，单位rad/s。    |

- **返回值:** <br>
函数执行的状态码：

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_arm_max_angular_speed(0.6))

arm.rm_delete_robot_arm()
```

## 设置机械臂末端最大角速度`rm_set_arm_max_angular_acc()`

- **方法原型：**

```python
rm_set_arm_max_angular_acc(self, acc: float) -> int:
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `acc`  |    `float`    |    末端最大角加速度，单位rad/s^2    |

- **返回值:** <br>
函数执行的状态码：

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_arm_max_angular_acc(4))

arm.rm_delete_robot_arm()
```

## 设置机械臂末端参数为默认值`rm_set_arm_tcp_init()`

- **方法原型：**

```python
rm_set_arm_tcp_init(self) -> int:
```

- **返回值:** <br>
函数执行的状态码：

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 初始化机械臂参数，机械臂的末端参数恢复到默认值。默认参数为：
# 末端线速度：0.1m/s末端线加速度：0.5m/s²
# 末端角速度：0.2rad/s末端角加速度：1rad/s²
print(arm.rm_set_arm_tcp_init())

arm.rm_delete_robot_arm()
```

## 设置机械臂动力学碰撞检测等级`rm_set_collision_state()`

- **方法原型：**

```python
rm_set_collision_state(self, stage: int) -> int:
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `stage`  |    `int`    |    等级：0~8，0-无碰撞，8-碰撞最灵敏。    |

- **返回值:** <br>
函数执行的状态码：

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 设置机械臂碰撞防护等级为1
print(arm.rm_set_collision_state(1))

arm.rm_delete_robot_arm()
```

## 查询碰撞防护等级`rm_get_collision_stage()`

- **方法原型：**

```python
rm_get_collision_stage(self) -> tuple[int, int]:
```

- **返回值:** <br>
`tuple[int,int]`: 包含两个元素的元组。<br>

1. 函数执行的状态码

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

2. 碰撞等级

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0～8  |    `int`   |    等级：0~8，0-无碰撞，8-碰撞最灵敏。     |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_collision_stage())

arm.rm_delete_robot_arm()
```

## 获取机械臂末端最大线速度`rm_get_arm_max_line_speed()`

- **方法原型：**

```python
rm_get_arm_max_line_speed(self) -> tuple[int, float]:
```

- **返回值:** <br>
`tuple[int,int]`: 包含两个元素的元组。<br>

1. 函数执行的状态码

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

2. 机械臂末端最大线速度

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `float`   |    末端最大线速度，单位m/s。     |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_arm_max_line_speed())

arm.rm_delete_robot_arm()
```

## 获取机械臂末端最大线加速度`rm_get_arm_max_line_acc()`

- **方法原型：**

```python
rm_get_arm_max_line_acc(self) -> tuple[int, float]:
```

- **返回值:** <br>
`tuple[int,float]`: 包含两个元素的元组。<br>

1. 函数执行的状态码

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

2. 机械臂末端最大线加速度

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `float`   |    末端最大线加速度，单位m/s^2。     |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_arm_max_line_acc())

arm.rm_delete_robot_arm()
```

## 获取机械臂末端最大角速度`rm_get_arm_max_angular_speed()`

- **方法原型：**

```python
rm_get_arm_max_angular_speed(self) -> tuple[int, float]:
```

- **返回值:** <br>
`tuple[int,float]`: 包含两个元素的元组。<br>

1. 函数执行的状态码

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

1. 机械臂末端最大角速度

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `float`   |    末端最大角速度，单位rad/s。     |

- **使用示例**

```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_arm_max_angular_speed())

arm.rm_delete_robot_arm()
```

## 获取机械臂末端最大角加速度`rm_get_arm_max_angular_acc()`

- **方法原型：**

```python
rm_get_arm_max_angular_speed(self) -> tuple[int, float]:
```

- **返回值:** <br>
`tuple[int,float]`: 包含两个元素的元组。<br>

1. 函数执行的状态码

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

1. 机械臂末端最大角加速度

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `float`   |    末端最大角加速度，单位rad/s^2。     |

- **使用示例**

```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_arm_max_angular_acc())

arm.rm_delete_robot_arm()
```

## 设置机械臂DH参数`rm_set_DH_data()`

- **方法原型：**

```python
rm_set_DH_data(self, dh_data: rm_dh_t) -> int:
```

*可以跳转[rm_dh_t](../../struct/dh/index.md)查阅结构体详细描述。*

- **参数说明：**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `dh_data`  |    `rm_dh_t`    |    设置当前DH参数。    |

- **返回值：** <br>
函数执行的状态码：

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 设置机械臂当前DH参数（仅作示例，根据实际dh参数修改）
dh_data = rm_dh_t(a=[0, 0, 0, 0, 0, 0], d=[0, 0, 0, 0, 0, 0], alpha=[0, 0, 0, 0, 0, 0], offset=[0, 0, 0, 0, 0, 0])
print(arm.rm_set_DH_data(dh_data))

arm.rm_delete_robot_arm()
```

## 获取机械臂DH参数`rm_get_DH_data()`

- **方法原型：**

```python
rm_get_DH_data(self) -> tuple[int, rm_dh_t]:
```

*可以跳转[rm_dh_t](../../struct/dh/index.md)查阅结构体详细描述。*

- **返回值：** <br>
`tuple[int,rm_dh_t]`: 包含两个元素的元组。<br>

1. 函数执行的状态码

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

2. DH参数

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `rm_dh_t`   |    机械臂当前DH参数。     |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

[ret, dh] = arm.rm_get_DH_data()
print(dh.to_dict())

arm.rm_delete_robot_arm()
```

## 恢复机械臂默认DH参数`rm_set_DH_data_default()`

- **方法原型：**

```python
rm_set_DH_data_default(self) -> int:
```

- **返回值：** <br>
函数执行的状态码：

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 设置机械臂末端参数为默认值
print(arm.rm_set_DH_data_default())

arm.rm_delete_robot_arm()
```
