# <p class="hidden">Python: </p>UDP 主动上报配置`UdpConfig`

可用于UDP 主动上报配置，睿尔曼机械臂提供 UDP 机械臂状态主动上报接口，使用时，需要和机械臂处于同一局域网络下，通过设置主动上报配置接口的目标 IP或和机械臂建立 TCP 连接， 机械臂即会主动周期性上报机械臂状态数据，数据周期可配置，默认 5ms。下面是UDP 主动上报配置`UdpConfig`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

> **注意**</br>配置正确并开启三线程模式后，通过注册回调函数可接收并处理主动上报数据。

## 设置UDP机械臂状态主动上报配置`rm_set_realtime_push()`

- **方法原型：**

```python
rm_set_realtime_push(self, config: rm_realtime_push_config_t) -> int:
```

*可以跳转[rm_realtime_push_config_t](../struct/realtimePushConfig.md)查阅结构体详细描述*

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `config`      | `rm_realtime_push_config_t` | UDP配置结构体。     |

- **返回值:** 
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

# 设置使能UDP上报配置，周期为500ms，端口号8089，系统外受力坐标系为传感器坐标系，上报目标IP地址为"192.168.1.104"
custom = rm_udp_custom_config()
custom.joint_speed = 0
custom.lift_state = 0
custom.expand_state = 0
config = rm_realtime_push_config_t(100, True, 8089, 0, "192.168.1.104", custom)
print(arm.rm_set_realtime_push(config))

arm.rm_delete_robot_arm()
```

## 查询UDP机械臂状态主动上报配置`rm_get_realtime_push()`

- **方法原型：**

```python
rm_get_realtime_push(self) -> tuple[int, dict[str, any]]:
```

- **返回值:**
`tuple[int,dict[str,any]]`: 包含两个元素的元组。<br>

1. int: 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功。    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. UDP 机械臂状态主动上报配置字典

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `dict[str,any]`   |    返回 UDP 机械臂状态主动上报配置字典，键为rm_realtime_push_config_t结构体的字段名称。    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_realtime_push())

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
# 在这个示例中，我们定义了一个名为`arm_state_func`的函数，用于处理机械臂实时上报的数据，并将其注册为回调函数。
# `arm_state_func`函数会按照UDP接口设置的周期被调用，该函数接收一个rm_realtime_arm_joint_state_t的对象作为参数
from Robotic_Arm.rm_robot_interface import *

def arm_state_func(data):
    print("Current arm ip: ", data.arm_ip)
    print("Current arm pose: ", data.waypoint.to_dict())

# 初始化为三线程模式
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 设置UDP端口，广播周期500ms，使能，广播端口号8089，力数据坐标系使用传感器坐标系，上报目标IP为"192.168.1.104"
# 自定义上报项均设置关闭，用户可根据实际情况修改这些配置
custom = rm_udp_custom_config()
custom.joint_speed = 0
custom.lift_state = 0
custom.expand_state = 0
config = rm_realtime_push_config_t(100, True, 8089, 0, "192.168.1.104", custom)
print(arm.rm_set_realtime_push(config))
print(arm.rm_get_realtime_push())

arm_state_callback = rm_realtime_arm_state_callback_ptr(arm_state_func)
arm.rm_realtime_arm_state_call_back(arm_state_callback)

# 关节运动
ret = arm.rm_movej([0, 30, 60, 0, 90, 0], 30, 0, 0, 1)
print("movej: ", ret)

# 删除指定机械臂对象
arm.rm_delete_robot_arm()
```
