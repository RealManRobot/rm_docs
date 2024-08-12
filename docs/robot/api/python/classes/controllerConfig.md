# 系统配置`ControllerConfig`

可用于系统配置（机械臂状态、电源）等。下面是系统配置`ControllerConfig`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

## 获取控制器状态`rm_get_controller_state()`1

- **方法原型：**

```python
rm_get_controller_state(self) -> dict[str, any]:
```

- **返回值:** </br>
dict[str,any]: 包含以下键值的字典

1. int: 函数执行的状态码。

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 系统状态

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   voltage  |    `float`   |    返回的电压    |
|   current  |    `float`   |    返回的电流    |
|   temperature  |    `float`   |    返回的温度    |
|   sys_err  |    `int`   |    控制器运行错误代码    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_controller_state())

arm.rm_delete_robot_arm()
```

## 设置机械臂电源`rm_set_arm_power()`

- **方法原型：**

```python
rm_set_arm_power(self, power: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| power      | `int` | 1-上电状态，0 断电状态                    |

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

# 机械臂上电
print(arm.rm_set_arm_power(1))

arm.rm_delete_robot_arm()
```

## 读取机械臂电源状态`rm_get_arm_power_state()`

- **方法原型：**

```python
rm_get_arm_power_state(self) -> tuple[int, int]:
```

- **返回值:** </br>
tuple[int, int]: 包含两个元素的元组

1. int: 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 机械臂电源状态

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `int`   |    获取到的机械臂电源状态，1-上电状态，0 断电状态    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_arm_power_state())

arm.rm_delete_robot_arm()
```

## 读取控制器的累计运行时间`rm_get_system_runtime()`

- **方法原型：**

```python
rm_get_system_runtime(self) -> dict[str, any]:
```

- **返回值:** </br>
tuple[int, int]: 包含两个元素的元组

1. int: 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 控制器运行时间

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   day  |    `int`   |    读取到的时间    |
|   hour  |    `int`   |    读取到的时间    |
|   min  |    `int`   |    读取到的时间    |
|   sec  |    `int`   |    读取到的时间    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_system_runtime())

arm.rm_delete_robot_arm()
```

## 清零控制器的累计运行时间`rm_clear_system_runtime()`

- **方法原型：**

```python
rm_clear_system_runtime(self) -> int:
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

print(arm.rm_clear_system_runtime())

arm.rm_delete_robot_arm()
```

## 读取关节的累计转动角度`rm_get_joint_odom()`

- **方法原型：**

```python
rm_get_joint_odom(self) -> tuple[int, list[float]]:
```

- **返回值:** </br>
tuple[int, list[float]]: 包含两个元素的元组

1. int: 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 关节累计的转动角度

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `list[float]`   |    各关节累计的转动角度    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_joint_odom())

arm.rm_delete_robot_arm()
```

## 清零关节累计转动的角度`rm_clear_joint_odom()`

- **方法原型：**

```python
int rm_clear_joint_odom(self) -> int:
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

print(arm.rm_clear_joint_odom())

arm.rm_delete_robot_arm()
```

## 读取机械臂软件信息`rm_get_arm_software_info()`

- **方法原型：**

```python
rm_get_arm_software_info(self) -> tuple[int, dict[str, any]]:
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

2. 机械臂软件版本信息

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   rm_arm_software_version_t  |    `dict[str,any]`   |    机械臂软件版本信息字典，键为rm_arm_software_version_t结构体的字段名称 |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_arm_software_info())

arm.rm_delete_robot_arm()
```

## 配置有线网口IP地址`rm_set_netip()`

- **方法原型：**

```python
rm_set_netip(self, ip: str) -> int:
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

# 配置机械臂IP地址为"192.168.1.19"
print(arm.rm_set_netip("192.168.1.19"))

arm.rm_delete_robot_arm()
```

## 清除系统错误`rm_clear_system_err()`

- **方法原型：**

```python
rm_clear_system_err(self) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| ip      | `str` | description                    |

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

print(arm.rm_clear_system_err())

arm.rm_delete_robot_arm()
```
