# <p class="hidden">Python: </p>机械臂状态查询`ArmState`

可用于机械臂状态获取。下面是机械臂状态获取`ArmState`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

## 获取机械臂当前状态`rm_get_current_arm_state()`

- **方法原型：**

```python
rm_get_current_arm_state(self) -> tuple[int, dict[str, any]]:
```

- **返回值:** </br>
`tuple[int, dict[str,any]]`: 包含两个元素的元组。

1. 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |   成功。    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 机械臂当前状态

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   `rm_current_arm_state_t`  |    `dict`   |    机械臂当前状态字典，键为rm_current_arm_state_t的参数名。    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_current_arm_state())

arm.rm_delete_robot_arm()
```

## 获取关节当前温度`rm_get_current_joint_temperature()`

- **方法原型：**

```python
rm_get_current_joint_temperature(self) -> tuple[int, list[float]]:
```

- **返回值:** </br>
`tuple[int, list[float]]`: 包含两个元素的元组。

1. 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 机械臂关节温度

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `list[float]`   |    关节1~7温度数组，单位：℃    |

- **使用示例**

```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_current_joint_temperature())

arm.rm_delete_robot_arm()
```

## 获取关节当前电流`rm_get_current_joint_current()`

- **方法原型：**

```python
rm_get_current_joint_current(self) -> tuple[int, list[float]]:
```

- **返回值:** </br>
`tuple[int, list[float]]`: 包含两个元素的元组。

1. 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 机械臂关节电流

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `list[float]`   |    关节1~7电流数组，单位：mA   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_current_joint_current())

arm.rm_delete_robot_arm()
```

## 获取关节当前电压`rm_get_current_joint_voltage()`

- **方法原型：**

```python
rm_get_current_joint_voltage(self) -> tuple[int, list[float]]:
```

- **返回值:** </br>
`tuple[int, list[float]]`: 包含两个元素的元组。

1. 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 机械臂关节电压

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `list[float]`   |    关节1~7电压数组，单位：V|

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_current_joint_voltage())

arm.rm_delete_robot_arm()
```

## 设置机械臂的初始位置角度`rm_set_init_pose()`

- **方法原型：**

```python
int rm_set_init_pose(self, joint: list[float]) -> int:
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   joint  |    `list[float]`    |    机械臂初始位置关节角度数组    |


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

print(arm.rm_set_init_pose())

arm.rm_delete_robot_arm()
```

## 获取机械臂初始位置角度`rm_get_init_pose()`

- **方法原型：**

```python
rm_get_init_pose(self) -> tuple[int, list[float]]:
```

- **返回值:** </br>
`tuple[int, list[float]]`: 包含两个元素的元组。

1. 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 机械臂初始位置关节角度

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `list[float]`   |   机械臂初始位置关节角度数组，单位：°度 |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_init_pose())

arm.rm_delete_robot_arm()
```

## 获取当前关节角度`rm_get_joint_degree()`

- **方法原型：**

```python
rm_get_joint_degree(self) -> tuple[int, list[float]]:
```

- **返回值:** </br>
`tuple[int, list[float]]`: 包含两个元素的元组。

1. 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 机械臂初始位置关节角度

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `list[float]`   |   机械臂初始位置关节角度数组，单位：°度 |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_joint_degree())

arm.rm_delete_robot_arm()
```

## 获取机械臂所有状态信息`rm_get_arm_all_state()`

- **方法原型：**

```python
rm_get_arm_all_state(self) -> tuple[int, dict[str, any]]:
```

- **返回值:** </br>
`tuple[int, dict[str, any]]`: 包含两个元素的元组。

1. 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 机械臂所有状态信息

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   `rm_arm_all_state_t`  |  `dict`   | 机械臂所有状态信息字典，键为rm_arm_all_state_t的参数名。 |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_arm_all_state())

arm.rm_delete_robot_arm()
```

## 查询控制器RS485模式`rm_get_controller_rs485_mode()`

- **方法原型：**

```python
rm_get_controller_rs485_mode(self) -> dict[str, any]:
```

- **返回值:** </br>
`dict[str, any]`: 包含以下键值的字典

1. 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |   成功。    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 机械臂状态模式

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   mode  |  `int`   | 0-代表默认 RS485 串行通讯，1-代表 modbus-RTU 主站模式，2-代表 modbus-RTU 从站模式。 |

3. 波特率

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   baudrate  |    `int`   |    波特率    |

4. Timeout

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   timeout  |    `int`   |  modbus 协议超时时间，单位 100ms，仅在 modbus-RTU 模式下提供此字段|

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_controller_rs485_mode())

arm.rm_delete_robot_arm()
```

## 查询工具端 RS485 模式`rm_get_tool_rs485_mode()`

- **方法原型：**

```python
rm_get_tool_rs485_mode(self) -> dict[str, any]:
```

- **返回值:** </br>
`dict[str, any]`: 包含以下键值的字典

1. 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 机械臂状态模式

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   mode  |  `int`   | 0-代表默认 RS485 串行通讯，1-代表 modbus-RTU 主站模式。 |

3. 波特率

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   baudrate  |    `int`   |    波特率    |

4. Timeout

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   timeout  |    `int`   |  modbus 协议超时时间，单位 100ms，仅在 modbus-RTU 模式下提供此字段|

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_tool_rs485_mode())

arm.rm_delete_robot_arm()
```
