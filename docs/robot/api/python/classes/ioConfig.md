# <p class="hidden">Python: </p>IO控制`IOConfig`

可用于IO控制。下面是IO控制`IOConfig`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

**末端工具IO**
机械臂末端工具端提供多种IO端口，用于与外部设备交互。数量和分类如下所示：</br>
|类型|数量|说明|
|:--|:--|:--|
|电源输出|1路|可配置为0V/12V/24V|
|数字IO|2路|可配置输入输出。输入：参考电平12V-24V；输出：12V-24V，与输出电压一致。|
|通讯接口|1路|可配置为RS485|

**控制器端IO**
机械臂控制器提供IO端口，用于与外部设备交互。数量和分类如下所示：</br>
|类型|数量|说明|
|:--|:--|:--|
|输出IO|4路|可配置为0-24V；DO/DI复用；|

---

## 配置IO模式`rm_set_io_mode()`

- **方法原型：**

```python
rm_set_io_mode(self, io_num: int, io_mode: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| io_num      | `int` | IO 端口号，范围：1~4。                    |
| io_mode | `int` | 模式</br>0-通用输入模式；</br>1-通用输出模式；</br>2-输入开始功能复用模式；</br>3-输入暂停功能复用模式；</br>4-输入继续功能复用模式；</br>5-输入急停功能复用模式；</br>6-输入进入电流环拖动复用模式；</br>7-输入进入力只动位置拖动模式（六维力版本可配置）；</br>8-输入进入力只动姿态拖动模式（六维力版本可配置）；</br>9-输入进入力位姿结合拖动复用模式（六维力版本可配置）；</br>10-输入外部轴最大软限位复用模式（外部轴模式可配置）；</br>11-输入外部轴最小软限位复用模式（外部轴模式可配置）。 |

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
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 设置IO 1通道为通用输出模式
print(arm.rm_set_io_mode(1, 1))

arm.rm_delete_robot_arm()
```

## 设置数字IO输出`rm_set_do_state()`

- **方法原型：**

```python
rm_set_do_state(self, io_num: int, state: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| io_num      | `str` | IO 端口号，范围：1~4 |
| state | `int` | IO 状态，1-输出高，0-输出低 |

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
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 设置IO 1通道输出高
print(arm.rm_set_do_state(1, 1))

arm.rm_delete_robot_arm()
```

## 获取数字 IO 状态`rm_get_io_state()`

- **方法原型：**

```python
rm_get_io_state(self, io_num: int) -> dict[str, any]:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| io_num      | `str` | IO 端口号，范围：1~4 |

- **返回值:** </br>
dict[str,any]: 包含以下键值的字典

1. int: 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. IO 状态和模式

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   IO_state  |    `int`   |     IO 状态。    |
| io_mode | `int` | 模式</br>0-通用输入模式</br>1-通用输出模式</br>2-输入开始功能复用模式</br>3-输入暂停功能复用模式</br>4-输入继续功能复用模式</br>5-输入急停功能复用模式</br>6-输入进入电流环拖动复用模式</br>7-输入进入力只动位置拖动模式（六维力版本可配置）</br>8-输入进入力只动姿态拖动模式（六维力版本可配置）</br>9-输入进入力位姿结合拖动复用模式（六维力版本可配置）</br>10-输入外部轴最大软限位复用模式（外部轴模式可配置）</br>11-输入外部轴最小软限位复用模式（外部轴模式可配置） |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 获取IO 1通道状态
print(arm.rm_get_io_state(1))

arm.rm_delete_robot_arm()
```

## 获取所有 IO 输入状态`rm_get_io_input()`

- **方法原型：**

```python
rm_get_io_input(self) -> tuple[int, list[int]]:
```

- **返回值:** </br>
tuple[int, list[int]]: 函数执行的状态码。<br>

1. int: 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2.  4 路数字输入状态列表

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `list[int]`   |     4路数字输入状态列表，1：高，0：低，-1：该端口不是输入模式    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 获取IO输入状态
print(arm.rm_get_io_input())

arm.rm_delete_robot_arm()
```

## 获取所有 IO 输出状态`rm_get_io_output()`

- **方法原型：**

```python
rm_get_io_output(self) -> tuple[int, list[int]]:
```

- **返回值:** </br>
tuple[int, list[int]]: 函数执行的状态码。<br>

1. int: 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功。    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 4 路数字输出状态列表

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `list[int]`   |     4路数字输出状态列表，1：高，0：低，-1：该端口不是输出模式    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_io_output())

arm.rm_delete_robot_arm()
```

## 设置控制器电源输出`rm_set_voltage()`

- **方法原型：**

```python
rm_set_voltage(self, voltage_type: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| voltage_type      | `int` | 电源输出类型，0：0V，2：12V，3：24V       |

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

# 设置控制器电源输出24V
print(arm.rm_set_voltage(3))

arm.rm_delete_robot_arm()
```

## 获取控制器电源输出类`rm_get_voltage()`

- **方法原型：**

```python
rm_get_voltage(self) -> tuple[int, int]:
```

- **返回值:** </br>
tuple[int, int]

1. int: 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 电源输出类型

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `int`   |    电源输出类型，0：0V，2：12V，3：24V    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_voltage())

arm.rm_delete_robot_arm()
```

## 设置工具端数字 IO 输出`rm_set_tool_do_state()`

- **方法原型：**

```python
rm_set_tool_do_state(self, io_num: int, state: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| io_num      | `int` | IO 端口号，范围：1~2                    |
| state | `int` | IO 状态，1-输出高，0-输出低 |

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
| io_num      | `int` | IO 端口号，范围：1~2                    |
| state | `int` | 模式，0-输入状态，1-输出状态 |

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
|   IO_Mode  |    `list[int]`   |    0-输入模式，1-输出模式    |
|   IO_state  |    `list[int]`   |    0-低，1-高    |

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
| voltage_type      | `int` | 电源输出类型，0：0V，2：12V，3：24V  |

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
|   IO_Mode  |    `list[int]`   |    0-输入模式，1-输出模式    |
|   IO_state  |    `list[int]`   |    0-低，1-高    |

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
| voltage_type      | `int` | 电源输出类型，0：0V，2：12V，3：24V  |

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
|   IO_Mode  |    `list[int]`   |  电源输出类型，0：0V，2：12V，3：24V|

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
