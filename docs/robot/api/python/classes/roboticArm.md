# <p class="hidden">Python: </p>机械臂连接控制`ArmRobotic`

机械臂连接、断开、日志设置等操作。

## 初始化线程模式`__init__()`

>此为构造函数。

- **方法原型：**

```python
__init__(self, mode: rm_thread_mode_e = None):
```

*可以跳转[typeList](../type/typeList)查阅`rm_thread_mode_e`枚举详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `mode`  |    `rm_robot_arm_model_e`    |    RM_SINGLE_MODE_E：单线程模式，单线程非阻塞等待数据返回；RM_DUAL_MODE_E：双线程模式，增加接收线程监测队列中的数据； RM_TRIPLE_MODE_E：三线程模式，在双线程模式基础上增加线程监测UDP接口数据。    |

- **使用示例**

```python
from Robotic_Arm.rm_robot_interface import *

# 初始化为三线程模式
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 结束机械臂控制，删除指定机械臂对象
arm.rm_delete_robot_arm()
```

## 创建机械臂连接控制句柄`rm_create_robot_arm()`

- **方法原型：**

```python
rm_create_robot_arm(self, ip: str, port: int, level: int = 3, log_func: CFUNCTYPE = None) -> rm_robot_handle:
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|`ip`|`str`|机械臂的IP地址。|
|`port`|`int`|机械臂的端口号。|
|`level`|`int`|日志打印等级，默认为3。- 0: debug模式;- 1: info模式;- 2: warning模式;- 3: error模式。|
|`log_func`|`CFUNCTYPE`|自定义日志打印函数（当前Python版本API暂不支持）。默认为None。|

- **返回值:**

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   /  |    `rm_robot_handle`   |    机械臂句柄，其中包含机械臂id标识。    |

- **使用示例**
使用RoboticArm类连接两条机械臂，并进行状态查询：

```python
from Robotic_Arm.rm_robot_interface import *

# 初始化为三线程模式
arm1 = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
arm2 = RoboticArm()

# 创建机械臂连接，打印连接id
handle1 = arm1.rm_create_robot_arm("192.168.1.18", 8080)
print(handle1.id)
handle2 = arm2.rm_create_robot_arm("192.168.1.19", 8080)
print(handle2.id)

# 获取当前机械臂状态
print(arm1.rm_get_current_arm_state())
print(arm2.rm_get_current_arm_state())

# 断开所有连接，销毁线程
RoboticArm.rm_destory()
```

## 删除指定机械臂对象`rm_delete_robot_arm()`

- **方法原型：**

```python
rm_delete_robot_arm(self) -> int:
```

- **返回值:**

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   /  |    `int`   |    0表示成功，非0表示失败。    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 初始化为三线程模式
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 删除指定机械臂对象
arm.rm_delete_robot_arm()
```

## 关闭所有机械臂连接`rm_destory()`

>销毁所有线程。

- **方法原型：**

```python
rm_destory(self) -> int:
```

- **返回值:**

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   /  |    `int`   |    0表示成功，非0表示失败。    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 初始化为三线程模式
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 断开所有连接
RoboticArm.rm_destory()
```

## 保存日志到文件`rm_set_log_save()`

- **方法原型：**

```python
rm_set_log_save(self, path) -> None:
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|`path`|`string`|日志保存文件路径。|

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 初始化为三线程模式
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

arm.rm_set_log_save("/home/aisha/work/rm_log.txt")

# 删除指定机械臂对象
arm.rm_delete_robot_arm()
```

## 设置真实/仿真模式`rm_set_arm_run_mode()`

- **方法原型：**

```python
rm_set_arm_run_mode(self, mode: int) -> int:
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|`mode`|int|模式 0:仿真 1:真实。|

- **返回值:**
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

# 初始化为三线程模式
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 设置机械臂为仿真模式
arm.rm_set_arm_run_mode(0)

# 删除指定机械臂对象
arm.rm_delete_robot_arm()
```

## 获取真实/仿真模式`rm_get_arm_run_mode()`

- **方法原型：**

```python
rm_get_arm_run_mode(self) -> tuple[int, int]:
```

- **返回值:**
`tuple[int, int]`: 包含两个元素的元组。<br>

1.函数执行的状态码：
|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功。    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2.模式：
|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   /  |    `int`   |    0:仿真 1:真实。    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 初始化为三线程模式
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 获取机械臂当前运行模式
print(arm.rm_set_arm_run_mode(0))

# 删除指定机械臂对象
arm.rm_delete_robot_arm()
```

## 获取机械臂基本信息`rm_get_robot_info()`

- **方法原型：**

```python
rm_get_robot_info(self) -> tuple[int, dict[str, any]]:
```

- **返回值:**
`tuple[int, dict[str, any]]`: 包含两个元素的元组。<br>

1.函数执行的状态码：
|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功。    |
|  -1  |    `int`   |   未找到对应句柄,句柄为空或已被删除。    |
|  -2  |    `int`   |   获取到的机械臂基本信息非法，检查句柄是否已被删除。    |

2.返回当前工具坐标系字典：
|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   `dict[str, any]`  |    `str`   |    返回当前工具坐标系字典，键为rm_robot_info_t结构体的字段名称。    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 初始化为三线程模式
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 获取机械臂型号、末端力传感器版本及自由度信息
print(arm.rm_get_robot_info())

# 删除指定机械臂对象
arm.rm_delete_robot_arm()
```

## 注册机械臂事件回调函数`rm_get_arm_event_call_back()`

当机械臂返回运动到位指令或者文件运行结束指令时会有数据返回。

- **方法原型：**

```python
rm_get_arm_event_call_back(self, event_callback: rm_event_callback_ptr):
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|`event_callback`|`rm_event_callback_ptr`|机械臂事件回调函数，该回调函数接收rm_event_push_data_t类型的数据作为参数，没有返回值。|

>注意：单线程模式无法使用该回调函数。

- **使用示例**

```python
# 下面是一个如何注册机械臂事件回调函数的示例：
# 在这个示例中，我们定义了一个名为`event_callback`的函数，用于处理机械臂的事件，并将其注册为回调函数。
# 当机械臂事件发生时，`event_callback`函数将被调用，并接收一个包含事件数据的对象作为参数
from Robotic_Arm.rm_robot_interface import *

def event_func(data:rm_event_push_data_t) -> None:
    print("The motion is complete, the arm is in place.")
    # 判断接口类型
    if data.event_type == 1:  # 轨迹规划完成
        print("运动结果:", data.trajectory_state)
        print("当前设备:", data.device)
        print("是否连接下一条轨迹:", data.trajectory_connect)
    elif data.codeKey == 2:  # 在线编程文件运行完成
        print("在线编程文件结束id:", data.program_id)

# 初始化为三线程模式
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

event_callback = rm_event_callback_ptr(event_func)
arm.rm_get_arm_event_call_back(event_callback)

# 非阻塞关节运动
ret = arm.rm_movej([0, 30, 60, 0, 90, 0], 50, 0, 0, 0)
print("movej: ", ret)

# 等待打印数据
time.sleep(10)

# 删除指定机械臂对象
arm.rm_delete_robot_arm()
```

## UDP注册机械臂实时状态`rm_realtime_arm_state_call_back()`

该回调函数接收rm_realtime_arm_joint_state_t类型数据作为参数，没有返回值。当使用三线程，并且UDP机械臂状态主动上报正确配置时，数据会以设定的周期返回。

- **方法原型：**

```python
rm_realtime_arm_state_call_back(self, arm_state_callback):
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|`arm_state_callback`|`rm_realtime_arm_state_callback_ptr`|机械臂实时状态信息回调函数。|

>注意：需确保打开三线程模式，仅在三线程模式会打开UDP接口接收数据；需确保广播端口号、上报目标IP、是否主动上报等 UDP 机械臂状态主动上报配置正确；需确保防火墙不会阻止数据的接收。

- **使用示例**
  
```python
# 下面是一个如何注册UDP机械臂实时状态主动上报信息回调函数的示例：
# 在这个示例中，我们定义了一个名为`arm_state_callback`的函数，用于处理机械臂实时上报的数据，并将其注册为回调函数。
# `arm_state_callback`函数会按照UDP接口设置的周期被调用，该函数接收一个rm_realtime_arm_joint_state_t的对象作为参数
from Robotic_Arm.rm_robot_interface import *

def arm_state_callback(data):
    print("Current arm ip: ", data.arm_ip)
    print("Current arm pose: ", data.waypoint.to_dict())

# 初始化为三线程模式
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 设置UDP端口，广播周期500ms，使能，广播端口号8089，力数据坐标系使用传感器坐标系，上报目标IP为"192.168.1.104"
# 用户需根据实际情况修改这些配置
config = rm_realtime_push_config_t(100, True, 8089, 0, "192.168.1.104")
print(arm.rm_set_realtime_push(config))
print(arm.rm_get_realtime_push())

arm_state_callback = rm_realtime_arm_state_callback_ptr(event_func)
arm.rm_get_arm_event_call_back(arm_state_callback)

# 关节运动
ret = arm.rm_movej([0, 30, 60, 0, 90, 0], 30, 0, 0, 1)
print("movej: ", ret)

# 删除指定机械臂对象
arm.rm_delete_robot_arm()
```
