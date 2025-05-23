# <p class="hidden">Python: </p>末端生态协议配置`RmPlusConfig`

## 设置末端生态协议模式`rm_set_rm_plus_mode()`

- **方法原型：**

```python
rm_set_rm_plus_mode(self, mode: int) -> int:
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |  
|   `mode`  |    `int`    |   末端生态协议模式。0：禁用协议，9600：开启协议（波特率9600）115200：开启协议（波特率115200）256000：开启协议（波特率256000）460800：开启协议（波特率460800）   |

- **返回值:**

函数执行的状态码：0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**

```python
from Robotic_Arm.rm_robot_interface import *
# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)
# 设置末端生态协议模式
arm.rm_set_rm_plus_mode(9600)
# 断开所有连接，销毁线程
RoboticArm.rm_destory()
```

## 获取末端生态协议模式`rm_get_rm_plus_mode()`

- **方法原型：**

```python
rm_get_rm_plus_mode(self) -> tuple[int, int]:
```

- **返回值:**

`tuple[int, int]`: 包含两个元素的元组。<br>

1. 函数执行的状态码：0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。
2. 末端生态协议模式：
    - 0：禁用协议
    - 9600：开启协议（波特率9600）
    - 115200：开启协议（波特率115200）
    - 256000：开启协议（波特率256000）
    - 460800：开启协议（波特率460800）

- **使用示例**

```python
from Robotic_Arm.rm_robot_interface import *
# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E) 
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 获取末端生态协议模式
tag, mode = arm.rm_get_rm_plus_mode()
print(tag, mode)
# 断开所有连接，销毁线程
RoboticArm.rm_destory()
```

## 设置触觉传感器模式(末端生态协议支持)`rm_set_rm_plus_touch()`

- **方法原型：**

```python
rm_set_rm_plus_touch(self,mode: int) -> int:
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `mode`  |    `int`    |   触觉传感器开关状态 0：关闭触觉传感器 1：打开触觉传感器（返回处理后数据） 2：打开触觉传感器（返回原始数据）   |

- **返回值:**

函数执行的状态码：0成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**

```python
from Robotic_Arm.rm_robot_interface import *
# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)
# 设置触觉传感器模式
arm.rm_set_rm_plus_touch(1)
# 断开所有连接，销毁线程
RoboticArm.rm_destory()
```

## 获取触觉传感器模式(末端生态协议支持)`rm_get_rm_plus_touch()`

- **方法原型：**

```python
rm_get_rm_plus_touch(self) -> tuple[int,int]:
```

- **返回值:**

`tuple[int,int]`: 包含两个元素的元组。<br>

1. 函数执行的状态码：0成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。
2. 触觉传感器开关状态：
    - 0：关闭触觉传感器
    - 1：打开触觉传感器（返回处理后数据）
    - 2：打开触觉传感器（返回原始数据）

- **使用示例**

```python
from Robotic_Arm.rm_robot_interface import *
# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E) 

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)
# 获取触觉传感器模式
tag, mode = arm.rm_get_rm_plus_touch()
print(tag, mode)
# 断开所有连接，销毁线程
RoboticArm.rm_destory()
```

## 读取末端设备基础信息(末端生态协议支持)`rm_get_rm_plus_base_info()`

- **方法原型：**

```python
rm_get_rm_plus_base_info(self) -> tuple[int,dict[str, any]]:
```

- **返回值:**

`tuple[int,dict[str, any]]`: 包含两个元素的元组。<br>

1. 函数执行的状态码：0成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。
2. 末端设备基础信息：
    - `dict[str, any]` 末端设备基础信息字典，键为rm_plus_base_info_t结构体的字段名称。

- **使用示例**

```python
from Robotic_Arm.rm_robot_interface import *
# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E) 

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)  

# 读取末端设备基础信息
tag, base_info = arm.rm_get_rm_plus_base_info()
print(tag, base_info)
# 断开所有连接，销毁线程
RoboticArm.rm_destory()
```

## 读取末端设备实时信息(末端生态协议支持)`rm_get_rm_plus_state_info()`

- **方法原型：**

```python
rm_get_rm_plus_state_info(self) -> tuple[int, dict[str, any]]:
```

- **返回值:**

`tuple[int, dict[str, any]]`: 包含两个元素的元组。<br>

1. 函数执行的状态码：0成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。
2. 末端设备实时信息：
    - `dict[str, any]` 末端设备实时信息字典，键为rm_plus_state_info_t结构体的字段名称。

- **使用示例**

```python
from Robotic_Arm.rm_robot_interface import *
# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 读取末端设备实时信息
tag, state_info = arm.rm_get_rm_plus_state_info()
print(tag, state_info)
# 断开所有连接，销毁线程
RoboticArm.rm_destory()
```
