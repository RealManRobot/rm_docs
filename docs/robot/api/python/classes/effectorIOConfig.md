# <p class="hidden">Python: </p>工具端IO配置及查询`effectorIOConfig`

机械臂末端工具端提供多个IO端口，用于与外部设备交互，可设置及读取末端IO的模式和末端电源输出。下面是末端IO控制`effectorIOConfig`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

**末端工具IO**
数量和分类如下所示：</br>
|类型|数量|说明|
|:--|:--|:--|
|电源输出|1路|可配置为0V/12V/24V|
|数字IO|2路|可配置输入输出。输入：参考电平12V-24V；输出：12V-24V，与输出电压一致。|
|通讯接口|1路|可配置为RS485|

---

## 设置工具端数字 IO 输出`rm_set_tool_do_state()`

- **方法原型：**

```python
rm_set_tool_do_state(self, io_num: int, state: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `io_num`      | `int` | IO 端口号，范围：1~2                    |
| `state` | `int` | IO 状态，1-输出高，0-输出低 |

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

# 设置工具端IO 1通道输出高
print(arm.rm_set_tool_do_state(1, 1))

arm.rm_delete_robot_arm()
```

## 设置工具端数字 IO 模式`rm_set_tool_IO_mode()`

- **方法原型：**

```python
rm_set_tool_IO_mode(self, io_num: int, state: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `io_num`      | `int` | IO 端口号，范围：1~2                    |
| `state` | `int` | 模式，0-输入状态，1-输出状态 |

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

# 设置工具端数字IO 1端口为输入模式
print(arm.rm_set_tool_IO_mode(1, 0))

arm.rm_delete_robot_arm()
```

## 获取工具端数字 IO 模式`rm_get_tool_io_state()`

- **方法原型：**

```python
rm_get_tool_io_state(self) -> dict[str, any]:
```

- **返回值:** </br>
`dict[str, any]`: 包含以下键值的字典。<br>

1. int: 函数执行的状态码：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 数字 IO 状态：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   `IO_Mode`  |    `list[int]`   |    0-输入模式，1-输出模式    |
|   `IO_state`  |    `list[int]`   |    0-低，1-高    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_tool_io_state())

arm.rm_delete_robot_arm()
```

## 设置工具端电源输出`rm_set_tool_voltage()`

- **方法原型：**

```python
rm_set_tool_voltage(self, voltage_type: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `voltage_type`      | `int` | 电源输出类型，0：0V，2：12V，3：24V  |

- **返回值:** </br>
dict[str, any]: 包含以下键值的字典。<br>

1. int: 函数执行的状态码：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 数字 IO 状态：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   `IO_Mode`  |    `list[int]`   |    0-输入模式，1-输出模式    |
|   `IO_state`  |    `list[int]`   |    0-低，1-高    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 设置工具端电源输出24V
print(arm.rm_set_tool_voltage(3))

arm.rm_delete_robot_arm()
```

## 获取工具端电源输出`rm_get_tool_voltage()`

- **方法原型：**

```python
rm_get_tool_voltage(self) -> tuple[int, int]:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `voltage_type`      | `int` | 电源输出类型，0：0V，2：12V，3：24V  |

- **返回值:** </br>
tuple[int, int]

1. int: 函数执行的状态码：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 电源输出类型：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   `IO_Mode`  |    `list[int]`   |  电源输出类型，0：0V，2：12V，3：24V|

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_tool_voltage())

arm.rm_delete_robot_arm()
```
