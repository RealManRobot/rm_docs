# Modbus 配置`ModbusConfig`

可用于Modbus 配置，睿尔曼机械臂在控制器和末端接口板上各提供一个RS485通讯接口，这些接口可通过接口配置为标准的Modbus RTU模式。在Modbus RTU模式下，用户可通过提供的接口对连接在端口上的外设进行读写操作。下面是工作坐标系`WorkCoordinateConfig`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

> **注意**</br>
>
> - 控制器的RS485接口在未配置为Modbus RTU模式时，可用于直接控制机械臂。
> - Modbus RTU模式与机械臂控制模式不兼容。若需恢复机械臂控制模式，必须关闭该端口的Modbus RTU模式。
> - 关闭Modbus RTU模式后，系统将自动切换回机械臂控制模式，使用波特率460800BPS，停止位1，数据位8，无校验。

此外，I系列控制器还支持modbus-TCP主站配置，允许用户配置使用modbus-TCP主站，以连接外部设备的modbus-TCP从站。

---

## 配置通讯端口ModbusRTU模式`rm_set_modbus_mode()`

- **方法原型：**

```python
rm_set_modbus_mode(self, port: int, baudrate: int, timeout: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| port      | `int` | 通讯端口</br>0-控制器RS485端口为RTU主站</br>1-末端接口板RS485接口为RTU主站</br>2-控制器RS485端口为RTU从站。                    |
| baudrate | `int` | 支持 9600,115200,460800 三种常见波特率。 |
| timeout | `int` | 超时时间，单位百毫秒。对Modbus设备所有的读写指令，在规定的超时时间内未返回响应数据，则返回超时报错提醒。超时时间不能为0，若设置为0，则机械臂按1进行配置。 |

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

print(arm.rm_set_modbus_mode(1,115200,2))

arm.rm_delete_robot_arm()
```

## 关闭通讯端口 Modbus RTU 模式`rm_close_modbus_mode()`

- **方法原型：**

```python
rm_close_modbus_mode(self, port: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| port      | `int` | 通讯端口</br>0-控制器RS485端口为RTU主站</br>1-末端接口板RS485接口为RTU主站</br>2-控制器RS485端口为RTU从站                    |

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

print(arm.rm_close_modbus_mode(2))

arm.rm_delete_robot_arm()
```

## 配置连接`rm_set_modbustcp_mode()`

- **方法原型：**

```python
rm_set_modbustcp_mode(self, ip: str, port: int, timeout: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| ip      | `str` | 从机IP地址                   |
| port      | `int` | 端口号                   |
| timeout      | `int` | 超时时间，单位秒                   |

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

print(arm.rm_set_modbustcp_mode("192.168.1.120", 502, 2000))

arm.rm_delete_robot_arm()
```

## 关闭通讯端口ModbusRTU模式`rm_close_modbustcp_mode()`

- **方法原型：**

```python
rm_close_modbustcp_mode(self) -> int:
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

print(arm.rm_close_modbustcp_mode())

arm.rm_delete_robot_arm()
```

## 读线圈`rm_read_coils()`

- **方法原型：**

```python
rm_read_coils(self, read_params: rm_peripheral_read_write_params_t) -> tuple[int, int]:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| read_params      | `rm_peripheral_read_write_params_t` | 线圈读取参数结构体，该指令最多一次性支持读 8 个线圈数据，即返回的数据不会超过一个字节     |

- **返回值:** </br>
tuple[int,int]: 包含两个元素的元组

1. int: 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. int: 线圈状态

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `int`   |    返回线圈状态，数据类型：int8    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

# 通过控制器RS485接口读数据，起始地址为10， 外设设备地址为2，读2个数据
read_params = rm_peripheral_read_write_params_t(0, 10, 2, 2)
print(arm.rm_read_coils(read_params))

arm.rm_delete_robot_arm()
```

## 读离散量输入`rm_read_input_status()`

- **方法原型：**

```python
rm_read_input_status(self, read_params: rm_peripheral_read_write_params_t) -> tuple[int, int]:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| read_params      | `rm_peripheral_read_write_params_t` | 离散量输入读取参数结构体，该指令最多一次性支持读 8 个离散量数据，即返回的数据不会超过一个字节   |

- **返回值:** </br>
tuple[int,int]: 包含两个元素的元组

1. int: 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. int: 寄存器数据

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `int`   |    返回离散量，数据类型：int8    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

# 通过控制器RS485接口读数据，起始地址为10， 外设设备地址为2，读3个数据
read_params = rm_peripheral_read_write_params_t(0, 10, 2, 3)
print(arm.rm_read_input_status(read_params))

arm.rm_delete_robot_arm()
```

## 读保持寄存器`rm_read_holding_registers()`

- **方法原型：**

```python
rm_read_holding_registers(self, read_params: rm_peripheral_read_write_params_t) -> tuple[int, int]:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| read_params      | `rm_peripheral_read_write_params_t` | 保持寄存器数据读取参数结构体，该指令每次只能读 1 个寄存器，即 2 个字节的数据，不可一次性读取多个寄存器数据，该结构体成员num无需设置   |

- **返回值:** </br>
tuple[int,int]: 包含两个元素的元组

1. int: 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. int: 寄存器数据

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `int`   |    返回寄存器数据，数据类型：int8    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

# 通过控制器RS485端口读取数据，起始地址为10， 外设设备地址为2
param = rm_peripheral_read_write_params_t(0, 10, 2)
print("读保持寄存器: ", arm.rm_read_holding_registers(param))

arm.rm_delete_robot_arm()
```

## 读输入寄存器`rm_read_input_registers()`

- **方法原型：**

```python
rm_read_input_registers(self, read_params: rm_peripheral_read_write_params_t) -> tuple[int, int]:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| read_params      | `rm_peripheral_read_write_params_t` |  输入寄存器数据读取参数结构体，该指令每次只能读 1 个寄存器，即 2 个字节的数据，不可一次性读取多个寄存器数据，该结构体成员num无需设置，该指令每次只能读 1 个寄存器，即 2 个字节的数据，不可一次性读取多个寄存器数据，该结构体成员num无需设置   |

- **返回值:** </br>
tuple[int,int]: 包含两个元素的元组

1. int: 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. int: 寄存器数据

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `int`   |    返回寄存器数据，数据类型：int16    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

# 通过控制器RS485端口读取数据，起始地址为10，外设设备地址为2
param = rm_peripheral_read_write_params_t(0, 10, 2)
print("读保持寄存器: ", arm.rm_read_input_registers(param))

arm.rm_delete_robot_arm()
```

## 写单圈数据`rm_write_single_coil()`

- **方法原型：**

```python
rm_write_single_coil(self, write_params: rm_peripheral_read_write_params_t, data: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
|   write_params    | `/` |单圈数据写入参数结构体，该结构体成员num无需设置。|
|   data    | `int16` |  要写入线圈的数据。   |

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

```

## 写单个寄存器`rm_write_single_register()`

- **方法原型：**

```python
rm_write_single_register(self, write_params: rm_peripheral_read_write_params_t, data: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| read_params      | `rm_peripheral_read_write_params_t` |  单个寄存器数据写入参数结构体，该结构体成员num无需设置   |
| data      | `int` |  要写入寄存器的数据，数据类型：int16   |

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

# 通过控制器RS485接口写100数据，起始地址为10， 外设设备地址为2
write_params = rm_peripheral_read_write_params_t(0, 10, 2)
print(arm.rm_write_single_register(write_params, 100))

arm.rm_delete_robot_arm()
```

## 写多个寄存器`rm_write_registers()`

- **方法原型：**

```python
rm_write_registers(self, write_params: rm_peripheral_read_write_params_t, data: list[int]) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| read_params      | `rm_peripheral_read_write_params_t` |  多个寄存器数据写入参数结构体。其中寄存器每次写的数量不超过10个，即该结构体成员num<=10。   |
| data      | `list[int]` |  要写入寄存器的数据数组，类型：byte。   |

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

# 通过控制器RS485接口写数据，起始地址为10， 外设设备地址为2，寄存器数量为2
write_params = rm_peripheral_read_write_params_t(0, 10, 2, 2)
print(arm.rm_write_registers(write_params), [15, 20, 25, 30])

arm.rm_delete_robot_arm()
```

## 写多圈数据`rm_write_coils()`

- **方法原型：**

```python
rm_write_coils(self, write_params: rm_peripheral_read_write_params_t, data: list[int]) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| write_params      | `rm_peripheral_read_write_params_t` |  多圈数据写入参数结构体。每次写的数量不超过 160 个，即该结构体成员num<=160。   |
| data      | `list[int]` |  要写入线圈的数据数组，类型：byte。   |


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

# 通过控制器RS485接口写数据，起始地址为10， 外设设备地址为2，线圈数量为16
write_params = rm_peripheral_read_write_params_t(0, 10, 2, 16)
print(arm.rm_write_coils(write_params, [15, 20]))

arm.rm_delete_robot_arm()
```

## 读多圈数据`rm_read_multiple_coils()`

- **方法原型：**

```python
rm_read_multiple_coils(self, read_params: rm_peripheral_read_write_params_t) -> tuple[int, list[int]]:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| read_params      | `rm_peripheral_read_write_params_t` | 多圈数据读取参数结构体，要读的线圈的数量 8< num <= 120，该指令最多一次性支持读 120 个线圈数据， 即 15 个 byte   |

- **返回值:** </br>
tuple[int,list[int]]: 包含两个元素的元组

1. int: 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. int: 线圈状态列表

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `int`   |    返回线圈状态列表，数据类型：int8    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

# 通过控制器RS485端口读取数据，起始地址为10，外设设备地址为2，线圈数量为24
param = rm_peripheral_read_write_params_t(0, 10, 2, 24)
print(arm.rm_read_multiple_coils(param))

arm.rm_delete_robot_arm()
```

## 读多个保存寄存器`rm_read_multiple_holding_registers()`

- **方法原型：**

```python
rm_read_multiple_holding_registers(self, read_params: rm_peripheral_read_write_params_t) -> tuple[int, list[int]]:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| read_params      | `rm_peripheral_read_write_params_t` | 多个保存寄存器读取参数结构体，要读的寄存器的数量 2 < num < 13，该指令最多一次性支持读 12 个寄存器数据， 即 24 个 byte   |

- **返回值:** </br>
tuple[int,list[int]]: 包含两个元素的元组

1. int: 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. int: 寄存器数据列表

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `int`   |    返回寄存器数据列表，数据类型：int8    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

# 通过控制器RS485端口读取数据，起始地址为10，外设设备地址为2，寄存器数量为5
param = rm_peripheral_read_write_params_t(0, 10, 2, 5)
print(arm.rm_read_multiple_holding_registers(param))

arm.rm_delete_robot_arm()
```

## 读多个输入寄存器`rm_read_multiple_input_registers()`

- **方法原型：**

```python
rm_read_multiple_input_registers(self, read_params: rm_peripheral_read_write_params_t) -> tuple[int, list[int]]:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| read_params      | `rm_peripheral_read_write_params_t` | 多个输入寄存器读取参数结构体。要读的寄存器的数量 2 < num < 13，该指令最多一次性支持读 12 个寄存器数据， 即 24 个 byte   |

- **返回值:** </br>
tuple[int,list[int]]: 包含两个元素的元组

1. int: 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. int: 寄存器数据列表

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `int`   |    返回寄存器数据列表，数据类型：int8    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

# 通过控制器RS485端口读取数据，起始地址为10，外设设备地址为2，寄存器数量为5
param = rm_peripheral_read_write_params_t(0, 10, 2, 5)
print(arm.rm_read_multiple_input_registers(param))

arm.rm_delete_robot_arm()
```
