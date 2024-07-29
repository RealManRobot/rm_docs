# 关节配置查询`JointConfigReader`

可用于查询关节、驱动器的最大速度、加速度或者限位等，可以查阅[JointConfigReader继承关系图](../python/InheritanceDiagram/JointConfigReader.md)了解与其相关的类的关系。下面是关节配置查询`JointConfigReader`
的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

---

## 查询关节最大速度`rm_get_joint_max_speed()`

- **方法原型：**

```python
rm_get_joint_max_speed(self) -> tuple[int, list]:
```

- **返回值:**

`tuple[int, list]`: 包含两个元素的元组。

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|  int  |    `int`    |    函数执行的状态码：</br> 0:成功。</br> -1: 数据发送失败，通信过程中出现问题。</br> -2: 数据接收失败，通信过程中出现问题或控制器长久没有返回。</br> -3: 返回值解析失败，控制器返回的数据无法识别或不完整等情况。|
|  list |    `float`    |    关节最大速度值。单位：°/s。   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *
# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))
print(arm.rm_get_joint_max_speed())
arm.rm_delete_robot_arm()
```

## 查询关节最大加速度`rm_get_joint_max_acc()`

- **方法原型：**

```python
rm_get_joint_max_acc(self) -> tuple[int, list]:
```

- **返回值:**
`tuple[int, list]`: 包含两个元素的元组。

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|  int  |    `int`    |    函数执行的状态码:</br> 0:成功。</br> -1: 数据发送失败，通信过程中出现问题。</br> -2: 数据接收失败，通信过程中出现问题或控制器长久没有返回。</br> -3: 返回值解析失败，控制器返回的数据无法识别或不完整等情况。|
|  list |    `float`    |    关节最大加速度值。单位：°/s。   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *
# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))
print(arm.rm_get_joint_max_acc())
arm.rm_delete_robot_arm()
```

## 查询关节最小限位`rm_get_joint_min_pos()`

- **方法原型：**

```python
rm_get_joint_min_pos(self) -> tuple[int, list]:
```

- **返回值:**
tuple[int, list]: 包含两个元素的元组

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|  int  |    `int`    |    函数执行的状态码:</br> 0:成功。</br> -1: 数据发送失败，通信过程中出现问题。</br> -2: 数据接收失败，通信过程中出现问题或控制器长久没有返回。</br> -3: 返回值解析失败，控制器返回的数据无法识别或不完整等情况。|
|  list |    `float`    |    关节最小位置数组，长度与机械臂的关节数，单位：°度。   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *
# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))
print(arm.rm_get_joint_min_pos())
arm.rm_delete_robot_arm()
```

## 查询关节最大限位`rm_get_joint_max_pos()`

- **方法原型：**

```python
rm_get_joint_max_pos(self) -> tuple[int, list]:
```

- **返回值:** </br>
`tuple[int, list]`: 包含两个元素的元组

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|  int  |    `int`    |    函数执行的状态码:</br> 0:成功。</br> -1: 数据发送失败，通信过程中出现问题。</br> -2: 数据接收失败，通信过程中出现问题或控制器长久没有返回。</br> -3: 返回值解析失败，控制器返回的数据无法识别或不完整等情况。|
|  list |    `float`    |    关节最大位置数组，长度与机械臂的关节数，单位：°度。   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *
# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))
print(arm.rm_get_joint_max_pos())
arm.rm_delete_robot_arm()
```

## 查询关节(驱动器)最大速度`rm_get_joint_drive_max_speed()`

- **方法原型：**

```python
rm_get_joint_drive_max_speed(self) -> tuple[int, list]:
```

- **返回值:** </br>
`tuple[int, list]`: 包含两个元素的元组

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|  int  |    `int`    |    函数执行的状态码。</br> 0:成功。</br> -1: 数据发送失败，通信过程中出现问题。</br> -2: 数据接收失败，通信过程中出现问题或控制器长久没有返回。</br> -3: 返回值解析失败，控制器返回的数据无法识别或不完整等情况。|
|  list |    `float`    |    关节最大速度值   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

print(arm.rm_get_joint_drive_max_speed())

arm.rm_delete_robot_arm()
```

## 查询关节(驱动器)最大加速度`rm_get_joint_drive_max_acc()`

- **方法原型：**

```python
rm_get_joint_drive_max_acc(self) -> tuple[int, list]:
```

- **返回值:** </br>
`tuple[int, list]`: 包含两个元素的元组

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|  int  |    `int`    |    函数执行的状态码。</br> 0:成功。</br> -1: 数据发送失败，通信过程中出现问题。</br> -2: 数据接收失败，通信过程中出现问题或控制器长久没有返回。</br> -3: 返回值解析失败，控制器返回的数据无法识别或不完整等情况。|
|  list |    `float`    |    各关节最大加速度值   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

print(arm.rm_get_joint_drive_max_acc())

arm.rm_delete_robot_arm()
```

## 查询关节(驱动器)最小限位`rm_get_joint_drive_min_pos()`

- **方法原型：**

```python
rm_get_joint_drive_min_pos(self) -> tuple[int, list]:
```

- **返回值:** </br>
`tuple[int, list]`: 包含两个元素的元组

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|  int  |    `int`    |    函数执行的状态码。</br> 0:成功。</br> -1: 数据发送失败，通信过程中出现问题。</br> -2: 数据接收失败，通信过程中出现问题或控制器长久没有返回。</br> -3: 返回值解析失败，控制器返回的数据无法识别或不完整等情况。|
|  list |    `float`    |    关节最小位置数组，长度与机械臂的关节数，单位：°度   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

print(arm.rm_get_joint_drive_min_pos())

arm.rm_delete_robot_arm()
```

## 查询关节(驱动器)最大限位`rm_get_joint_drive_max_pos()`

- **方法原型：**

```python
rm_get_joint_drive_max_pos(self) -> tuple[int, list]:
```

- **返回值:** </br>
`tuple[int, list]`: 包含两个元素的元组

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|  int  |    `int`    |    函数执行的状态码。</br> 0:成功。</br> -1: 数据发送失败，通信过程中出现问题。</br> -2: 数据接收失败，通信过程中出现问题或控制器长久没有返回。</br> -3: 返回值解析失败，控制器返回的数据无法识别或不完整等情况。|
|  list |    `float`    |    关节最大位置数组，长度与机械臂的关节数，单位：°度   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

print(arm.rm_get_joint_drive_max_pos())

arm.rm_delete_robot_arm()
```

## 获取关节使能状态`rm_get_joint_en_state()`

- **方法原型：**

```python
rm_get_joint_en_state(self) -> tuple[int, list]:
```

- **返回值:** </br>
`tuple[int, list]`: 包含两个元素的元组

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|  int  |    `int`    |    函数执行的状态码。</br> 0:成功。</br> -1: 数据发送失败，通信过程中出现问题。</br> -2: 数据接收失败，通信过程中出现问题或控制器长久没有返回。</br> -3: 返回值解析失败，控制器返回的数据无法识别或不完整等情况。|
|  list |    `float`    |    每个关节的使能状态数组，长度为机械臂的关节数，单位：°度  |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

print(arm.rm_get_joint_en_state())

arm.rm_delete_robot_arm()
```

## 获取关节错误代码`rm_get_joint_err_flag()`

- **方法原型：**

```python
rm_get_joint_err_flag(self) -> dict[str, any]:
```

- **返回值:** </br>
`tuple[int, list]`: 包含两个元素的元组

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|  int  |    `int`    |    函数执行的状态码。</br> 0:成功。</br> -1: 数据发送失败，通信过程中出现问题。</br> -2: 数据接收失败，通信过程中出现问题或控制器长久没有返回。</br> -3: 返回值解析失败，控制器返回的数据无法识别或不完整等情况。|
|  err_flag |    `list[float]`    |    浮点数列表，表示每个关节的错误标志。</br>如果arm_dof不为0，则列表长度为arm_dof；否则，使用默认的ARM_DOF长度。  |
|  brake_state |    `list[float]`    |    浮点数列表，表示每个关节的抱闸状态。</br>如果arm_dof不为0，则列表长度为arm_dof；否则，使用默认的ARM_DOF长度。  |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

print(arm.rm_get_joint_err_flag())

arm.rm_delete_robot_arm()
```
