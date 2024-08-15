# <p class="hidden">Python: </p>电子围栏和虚拟墙配置`ElectronicFenceConfig`

**电子围栏**
电子围栏功能通过精确设置参数，确保机械臂的轨迹规划、示教等运动均在设定的电子围栏范围内进行。当机械臂的运动 轨迹可能超出电子围栏的界限时，系统会立即返回相应的错误码，并自动中止运动，从而有效保障机械臂的安全运行。

> **注意**
>电子围栏目前仅支持长方体和点面矢量平面这两种形状，并且其仅在仿真模式下生效，为用户提供一个预演轨迹与进行轨迹优化的安全环境。

**虚拟墙**
虚拟墙功能支持在电流环拖动示教与力控拖动示教两种模式下，对拖动范围进行精确限制。在这两种特定的示教模式下，用户可以借助虚拟墙功能，确保 机械臂的拖动操作不会超出预设的范围。

> **注意**
虚拟墙功能目前支持长方体和球体两种形状，并仅在上述两种示教模式下有效。在其他操作模式下，此功能将自动失效。因此，请确保在正确的操作模式 下使用虚拟墙功能，以充分发挥其限制拖动范围的作用。

第三代机械臂具备电子围栏与虚拟墙功能，并提供了针对控制器所保存的电子围栏或虚拟墙几何模型参数的操作接口。 用户可以通过这些接口，实现对电子围栏或虚拟墙的新增、查询、更新和删除操作，在使用中，可以灵活地使用保存在 控制器中的参数配置，需要注意的是，目前控制器支持保存的参数要求不超过10 个。下面是关节配置`ElectronicFenceConfig`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

## 新增几何模型参数`rm_add_electronic_fence_config()`

- **方法原型：**

```python
rm_add_electronic_fence_config(self, electronic_fence: rm_fence_config_t) -> int:   
```

*可以跳转[rm_fence_config_t](../struct/fenceConfig.md)查阅结构体详细描述*

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   electronic_fence |    `(rm_fence_config_t)`    |  几何模型参数结构体。   |

- **返回值:**
函数执行的状态码：

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`   |   控制器返回设置失败，可能是参数错误或控制器发生错误。    |
|   -1  |    `int`   |   控制器返回设置失败，可能是参数错误或控制器发生错误。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|   -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**

```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

config = rm_fence_config_t(
    1, "test", cube=rm_fence_config_cube_t(-1.1, 1.1, -1.1, 1.1, -1.1, 1.1))

print(arm.rm_add_electronic_fence_config())

arm.rm_delete_robot_arm()
```

## 更新几何模型参数`rm_update_electronic_fence_config()`

- **方法原型：**

```python
rm_update_electronic_fence_config(self, electronic_fence: rm_fence_config_t) -> int:
```

*可以跳转[rm_fence_config_t](../struct/fenceConfig.md)查阅结构体详细描述*

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   electronic_fence |    `(rm_fence_config_t)`   |   几何模型参数结构体    |

- **返回值:**
函数执行的状态码：

|   参数    |   类型    |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功。    |
|   1  |    `int`   |   控制器返回设置失败，可能是参数错误或控制器发生错误。    |
|  -1  |    `int`   |   控制器返回设置失败，可能是参数错误或控制器发生错误。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**

```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

config = rm_fence_config_t(
    1, "test", cube=rm_fence_config_cube_t(-1.0, 1.0, -1.0, 1.0, -1.0, 1.0))
print(arm.rm_update_electronic_fence_config(config))

arm.rm_delete_robot_arm()
```

## 删除指定几何模型`rm_delete_electronic_fence_config()`

- **方法原型：**

```python
rm_delete_electronic_fence_config(self, name: str) -> int:
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
| name |    `str`    |  几何模型名称，不超过 10 个字节，支持字母、数字、下划线。    |

- **返回值:**
函数执行的状态码

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |   控制器返回false，参数错误或机械臂状态发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|   -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**

```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_delete_electronic_fence_config("test"))

arm.rm_delete_robot_arm()
```

## 查询所有几何模型名称`rm_get_electronic_fence_list_names()`

- **方法原型：**

```python
rm_get_electronic_fence_list_names(self) -> dict[str, any]:
```

- **返回值:**
dict[str,any]: 包含以下键值的字典

1. 'return_code' (int): 函数执行的状态码

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功    |
|   1  |    `int`   |   控制器返回设置失败，可能是参数错误或控制器发生错误。    |
|   -1  |    `int`   |   控制器返回设置失败，可能是参数错误或控制器发生错误。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。   |
|   -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。    |

2. 所有几何模型名称

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   job_names  |    `list[str]`    |    字符串列表，表示所有几何模型名称    |

3. 几何模型名称列表长度

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   len  |    `int`    |    几何模型名称列表长度    |

- **使用示例**

```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_electronic_fence_list_names())

arm.rm_delete_robot_arm()
```

## 查询指定几何模型参数`rm_get_given_electronic_fence_config()`

- **方法原型：**

```python
rm_get_given_electronic_fence_config(self, name: str) -> tuple[int, dict[str, any]]:
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
| name |    `str`    |     指定几何模型名称    |

- **返回值:**<br>
tuple[int,dict[str,any]]: 包含两个元素的元组。-int 函数执行的状态码。

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |   控制器返回false，参数错误或机械臂状态发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|   -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。    |
|dict| `[str,any] `|返回指定几何模型的参数字典，键为rm_fence_config_t结构体的字段名称。  |

- **使用示例**

```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_given_electronic_fence_config("test"))

arm.rm_delete_robot_arm()
```

## 查询所有几何模型参数`rm_get_electronic_fence_list_infos()`

- **方法原型：**

```python
rm_get_electronic_fence_list_infos(self) -> dict[str, any]:
```

- **返回值:**
type: 包含以下键值的字典:

1. 'return_code' (int): 函数执行的状态码。

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功    |
|   1  |    `int`   |   控制器返回设置失败，可能是参数错误或控制器发生错误。    |
|   -1  |    `int`   |   控制器返回设置失败，可能是参数错误或控制器发生错误。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。   |
|   -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。    |

2. 几何模型参数列表

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   electronic_fence_list  |    `list[str]`    |    几何模型参数列表    |


3. 几何模型列表长度

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   len  |    `int`    |    几何模型列表长度    |

- **使用示例**

```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_electronic_fence_list_infos())

arm.rm_delete_robot_arm()
```

## 设置电子围栏使能状态`rm_set_electronic_fence_enable()`

- **方法原型：**

```python
rm_set_electronic_fence_enable(self, electronic_fence_enable: rm_electronic_fence_enable_t) -> int:
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   electronic_fence_enable |    `rm_electronic_fence_enable_t`    |     电子围栏使能状态|

- **返回值:**

int: 函数执行的状态码：

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功    |
|   1  |    `int`    |   控制器返回false，参数错误或机械臂状态发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。   |
|   -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**

```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

electronic_fence_enable = rm_electronic_fence_enable_t(True, 0, 0)
print(arm.rm_set_electronic_fence_enable(electronic_fence_enable))

arm.rm_delete_robot_arm()
```

## 获取电子围栏使能状态`rm_get_electronic_fence_enable()`

- **方法原型：**

```python
rm_get_electronic_fence_enable(self) -> tuple[int, dict[str, any]]:
```

- **返回值:**
tuple[int,dict[str,any]]: 包含两个元素的元组。-int 函数执行的状态码。

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功    |
|   1  |    `int`    |   控制器返回false，参数错误或机械臂状态发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。   |
|   -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。    |
|   dict  | `[str,any]`|   返回电子围栏使能状态字典，键为rm_electronic_fence_enable_t结构体的字段名称    |

- **使用示例**

```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_electronic_fence_enable())

arm.rm_delete_robot_arm()
```

## 设置当前电子围栏参数配置`rm_set_electronic_fence_config()`

- **方法原型：**

```python
rm_set_electronic_fence_config(self, electronic_fence: rm_fence_config_t) -> int:
```

*可以跳转[rm_fence_config_t](../struct/fenceConfig.md)查阅结构体详细描述*

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   electronic_fence |    `rm_fence_config_t`    |     当前电子围栏参数结构体（无需设置电子围栏名称）|

- **返回值:**
int: 函数执行的状态码：

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |   控制器返回false，参数错误或机械臂状态发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。   |
|   -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**

```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

config = rm_fence_config_t(1, cube=rm_fence_config_cube_t(-0.9, 0.9, -0.9, 0.9, -0.9, 0.9))
print(arm.rm_set_electronic_fence_config(config))

arm.rm_delete_robot_arm()
```

## 获取当前电子围栏参数`rm_get_electronic_fence_config()`

- **方法原型：**

```python
rm_get_electronic_fence_config(self) -> tuple[int, dict[str, any]]:
```

- **返回值:**
tuple[int,dict[str,any]]: 包含两个元素的元组。

1. int 函数执行的状态码

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |   控制器返回false，参数错误或机械臂状态发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。   |
|   -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。    |

2. 电子围栏参数字典
|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   dict  | `[str,any]`|   返回当前电子围栏参数字典，键为rm_fence_config_t结构体的字段名称（不返回电子围栏名称）    |

- **使用示例**

```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_electronic_fence_config())

arm.rm_delete_robot_arm()
```

## 设置虚拟墙使能状态`rm_set_virtual_wall_enable()`

- **方法原型：**

```python
rm_set_virtual_wall_enable(self, virtual_wall_enable: rm_electronic_fence_enable_t) -> int:
```

*可以跳转[rm_electronic_fence_enable_t](../struct/electronicFenceEnable.md)查阅结构体详细描述*

- **返回值:**
函数执行的状态码：

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |   控制器返回false，参数错误或机械臂状态发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。   |
|   -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**

```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

electronic_fence_enable = rm_electronic_fence_enable_t(True, 0, 1)
print(arm.rm_set_virtual_wall_enable(electronic_fence_enable))

arm.rm_delete_robot_arm()
```

## 获取虚拟墙使能状态`rm_get_virtual_wall_enable()`

- **方法原型：**

```python
rm_get_virtual_wall_enable(self) -> tuple[int, dict[str, any]]:
```

- **返回值:**
tuple[int,dict[str,any]]: 包含两个元素的元组。

1. int 函数执行的状态码

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |   控制器返回false，参数错误或机械臂状态发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。   |
|   -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。    |

2. 虚拟墙使能状态字典

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   dict  | `[str,any]`|   返回虚拟墙使能状态字典，键为rm_electronic_fence_enable_t结构体的字段名称。    |

- **使用示例**

```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_virtual_wall_enable())

arm.rm_delete_robot_arm()
```

## 设置当前虚拟墙参数`rm_set_virtual_wall_config()`

- **方法原型：**

```python
rm_set_virtual_wall_config(self, virtual_wall: rm_fence_config_t) -> int:
```

*可以跳转[rm_fence_config_t](../struct/fenceConfig.md)查阅结构体详细描述*

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   virtual_wall |    `rm_fence_config_t`    |   当前虚拟墙参数（无需设置虚拟墙名称）。|

- **返回值:**
int: 函数执行的状态码：

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |   控制器返回false，参数错误或机械臂状态发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。   |
|   -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**

```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

config = rm_fence_config_t(1, cube=rm_fence_config_cube_t(-0.9, 0.9, -0.9, 0.9, -0.9, 0.9))
print(arm.rm_set_virtual_wall_config(config))

arm.rm_delete_robot_arm()
```

## 获取当前虚拟墙参数`rm_get_virtual_wall_config()`

- **方法原型：**

```python
rm_get_virtual_wall_config(self) -> tuple[int, dict[str, any]]:
```

- **返回值:**
tuple[int,dict[str,any]]: 包含两个元素的元组
-int 函数执行的状态码

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |   控制器返回false，参数错误或机械臂状态发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。   |
|   -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。    |
|   dict  | `[str,any]`|   返回当前虚拟墙参数字典，键为rm_fence_config_t结构体的字段名称（不返回虚拟墙名称）    |

- **使用示例**

```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_virtual_wall_config())

arm.rm_delete_robot_arm()
```
