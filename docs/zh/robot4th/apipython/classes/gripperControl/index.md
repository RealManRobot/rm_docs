# <p class="hidden">Python: </p>末端工具夹爪配置`GripperControl`

可用于夹爪控制及状态获取。睿尔曼机械臂末端支持各种常见夹爪，系统配置了因时的 EG2-4C2 夹爪，为了便于用户操作夹爪，机械臂控制器 对用户开放了夹爪的控制协议（夹爪控制协议与末端modbus 功能互斥）。下面是夹爪控制及状态获取`GripperControl`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

## 设置夹爪行程`rm_set_gripper_route()`

即夹爪开口的最大值和最小值，设置成功后会自动保存，夹爪断电不丢失。

- **方法原型：**

```python
rm_set_gripper_route(self, min_route: int, max_route: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `min_route`      | `int` | 夹爪开口最小值，范围：0~1000，无单位量纲 max_route (int): 夹爪开口最大值，范围：0~1000，无单位量纲                    |

- **返回值:** <br>
函数执行的状态码：

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_gripper_route(70, 200))

arm.rm_delete_robot_arm()
```

## <div id = '6220'>松开夹爪`rm_set_gripper_release()`</div>

即夹爪以指定的速度运动到开口最大处。

- **方法原型：**

```python
rm_set_gripper_release(self, speed: int, block: bool, timeout: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `speed`      | `int` | 夹爪松开速度，范围 1~1000，无单位量纲    |
| `block`      | `bool` | true 表示阻塞模式，等待控制器返回夹爪到位指令；false 表示非阻塞模式，不接收夹爪到位指令。   |
| `timeout`      | `int` | 阻塞模式：设置等待夹爪到位超时时间，单位：秒；非阻塞模式：0-发送后立即返回；其他值-接收设置成功指令后返回。    |

- **返回值:** <br>
函数执行的状态码

|   参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**： ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |    超时。    |- **检查超时时长设置**：阻塞模式下，支持配置等待设备运动完成的超时时间，务必确保设置超时时间大于设备运动时间；<br>- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -5  |    `int`    |    当前到位设备校验失败，即当前到位设备不为夹爪。   |- **检测多设备并发控制**：检查是否有其他设备给机械臂发送运动指令：包括机械臂、夹爪、灵巧手、升降机的运动；<br>- **实时监听指令事件**：注册回调函数 `rm_get_arm_event_call_back`：<br>①捕获设备到位事件（如运动完成、超时等）；<br>②通过回调参数 device 判断触发事件的具体设备类型。|

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_gripper_release(500, True, 10))

arm.rm_delete_robot_arm()
```

## <div id = '6222'>夹爪力控夹取`rm_set_gripper_pick()`</div>

夹爪以设定的速度和力夹取，当夹持力超过设定的力阈值后，停止夹取。

- **方法原型：**

```python
rm_set_gripper_pick(self, speed: int, force: int, block: bool, timeout: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `speed`      | `int` | 夹爪夹取速度，范围 1~1000，无单位量纲    |
| `force`      | `int` | 力控阈值，范围：50~1000，无单位量纲    |
| `block`      | `bool` | true 表示阻塞模式，等待控制器返回夹爪到位指令；false 表示非阻塞模式，不接收夹爪到位指令。   |
| `timeout`      | `int` | 阻塞模式：设置等待夹爪到位超时时间，单位：秒；非阻塞模式：0-发送后立即返回；其他值-接收设置成功指令后返回。    |

- **返回值:** <br>
函数执行的状态码：

|   参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**： ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |    超时。    |- **检查超时时长设置**：阻塞模式下，支持配置等待设备运动完成的超时时间，务必确保设置超时时间大于设备运动时间；<br>- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -5  |    `int`    |    当前到位设备校验失败，即当前到位设备不为夹爪。   |- **检测多设备并发控制**：检查是否有其他设备给机械臂发送运动指令：包括机械臂、夹爪、灵巧手、升降机的运动；<br>- **实时监听指令事件**：注册回调函数 `rm_get_arm_event_call_back`：<br>①捕获设备到位事件（如运动完成、超时等）；<br>②通过回调参数 device 判断触发事件的具体设备类型。|

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_gripper_pick(500, 200, True, 10))

arm.rm_delete_robot_arm()
```

## <div id = '6224'>夹爪持续力控夹取`rm_set_gripper_pick_on()`</div>

- **方法原型：**

```python
rm_set_gripper_pick_on(self, speed: int, force: int, block: bool, timeout: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `speed`      | `int` | 夹爪夹取速度，范围 1~1000，无单位量纲。    |
| `force`      | `int` | 力控阈值，范围：50~1000，无单位量纲。    |
| `block`      | `bool` | true 表示阻塞模式，等待控制器返回夹爪到位指令；false 表示非阻塞模式，不接收夹爪到位指令。   |
| `timeout`      | `int` | 阻塞模式：设置等待夹爪到位超时时间，单位：秒；非阻塞模式：0-发送后立即返回；其他值-接收设置成功指令后返回。    |

- **返回值:** <br>
函数执行的状态码：

|   参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**： ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |    超时。    |- **检查超时时长设置**：阻塞模式下，支持配置等待设备运动完成的超时时间，务必确保设置超时时间大于设备运动时间；<br>- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -5  |    `int`    |    当前到位设备校验失败，即当前到位设备不为夹爪。   |- **检测多设备并发控制**：检查是否有其他设备给机械臂发送运动指令：包括机械臂、夹爪、灵巧手、升降机的运动；<br>- **实时监听指令事件**：注册回调函数 `rm_get_arm_event_call_back`：<br>①捕获设备到位事件（如运动完成、超时等）；<br>②通过回调参数 device 判断触发事件的具体设备类型。|

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_gripper_pick_on(500, 200, True, 10))

arm.rm_delete_robot_arm()
```

## <div id = '6226'>设置夹爪达到指定位置`rm_set_gripper_position()`</div>

- **方法原型：**

```python
rm_set_gripper_position(self, position: int, block: bool, timeout: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `position`      | `int` | 夹爪开口位置，范围：1~1000，无单位量纲    |
| `block`      | `bool` | true 表示阻塞模式，等待控制器返回夹爪到位指令；false 表示非阻塞模式，不接收夹爪到位指令。   |
| `timeout`      | `int` | 阻塞模式：设置等待夹爪到位超时时间，单位：秒；非阻塞模式：0-发送后立即返回；其他值-接收设置成功指令后返回。    |

- **返回值:** <br>
函数执行的状态码：

|   参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**： ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |    超时。    |- **检查超时时长设置**：阻塞模式下，支持配置等待设备运动完成的超时时间，务必确保设置超时时间大于设备运动时间；<br>- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -5  |    `int`    |    当前到位设备校验失败，即当前到位设备不为夹爪。   |- **检测多设备并发控制**：检查是否有其他设备给机械臂发送运动指令：包括机械臂、夹爪、灵巧手、升降机的运动；<br>- **实时监听指令事件**：注册回调函数 `rm_get_arm_event_call_back`：<br>①捕获设备到位事件（如运动完成、超时等）；<br>②通过回调参数 device 判断触发事件的具体设备类型。|

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_gripper_position(500, True, 10))

arm.rm_delete_robot_arm()
```

## 查询夹爪状态`rm_get_gripper_state()`

- **方法原型：**

```python
rm_get_gripper_state(self) -> tuple[int, dict[str, any]]:
```

- **返回值:** <br>
`tuple[int,dict[str, any]]`: 包含两个元素的元组。

1. int: 函数执行的状态码

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

2. 夹爪状态信息

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   `rm_gripper_state_t`  |    `dict[str, any]`   |    夹爪状态信息字典，键为rm_gripper_state_t结构体的字段名称    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_gripper_state())

arm.rm_delete_robot_arm()
```
