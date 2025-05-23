# <p class="hidden">Python: </p>五指灵巧手配置`HandControl`

该接口可用于设置五指灵巧手控制，下面是五指灵巧手控制`HandControl`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

## <div id = '6228'>运行灵巧手目标手势序列号`rm_set_hand_posture()`</div>

- **方法原型：**

```python
rm_set_hand_posture(self, posture_num: int, block: bool, timeout: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `posture_num`      | `int` | 预先保存在灵巧手内的手势序号，范围：1~40    |
| `block` | `bool` | true 表示阻塞模式，等待灵巧手运动结束后返回<br>false 表示非阻塞模式，发送后立即返回  |
| `timeout`      | `int` | 阻塞模式下超时时间设置，单位：秒   |

- **返回值:** <br>
函数执行的状态码：

|   参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**： ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotes/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotes/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |    当前到位设备校验失败，即当前到位设备不为夹爪。   |- **检测多设备并发控制**：检查是否有其他设备给机械臂发送运动指令：包括机械臂、夹爪、灵巧手、升降机的运动；<br>- **实时监听指令事件**：注册回调函数 `rm_get_arm_event_call_back`：<br>①捕获设备到位事件（如运动完成、超时等）；<br>②通过回调参数 device 判断触发事件的具体设备类型。|
|  -5  |    `int`    |    超时未返回。    |- **检查超时时长设置**：阻塞模式下，支持配置等待设备运动完成的超时时间，务必确保设置超时时间大于设备运动时间；<br>- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|


- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_hand_posture(1, True, 10))

arm.rm_delete_robot_arm()
```

## <div id = '6230'>运行灵巧手动作序列号`rm_set_hand_seq()`</div>

- **方法原型：**

```python
rm_set_hand_seq(self, seq_num: int, block: bool, timeout: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `seq_num`   | `int` | 预先保存在灵巧手内的手势序号，范围：1~40    |
| `block` | `bool` | true 表示阻塞模式，等待灵巧手运动结束后返回<br>false 表示非阻塞模式，发送后立即返回  |
| `timeout`      | `int` | 阻塞模式下超时时间设置，单位：秒   |

- **返回值:** <br>
函数执行的状态码：

|   参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**： ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotes/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotes/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |    当前到位设备校验失败，即当前到位设备不为夹爪。   |- **检测多设备并发控制**：检查是否有其他设备给机械臂发送运动指令：包括机械臂、夹爪、灵巧手、升降机的运动；<br>- **实时监听指令事件**：注册回调函数 `rm_get_arm_event_call_back`：<br>①捕获设备到位事件（如运动完成、超时等）；<br>②通过回调参数 device 判断触发事件的具体设备类型。|
|  -5  |    `int`    |    超时未返回。    |- **检查超时时长设置**：阻塞模式下，支持配置等待设备运动完成的超时时间，务必确保设置超时时间大于设备运动时间；<br>- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_hand_seq(1, True, 15))

arm.rm_delete_robot_arm()
```

## 设置灵巧手各自由度角度`rm_set_hand_angle()`

- **方法原型：**

```python
rm_set_hand_angle(self, hand_angle: list[int]) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `seq_num`   | `int` | 预先保存在灵巧手内的手势序号，范围：1~40    |
| `block` | `bool` | true 表示阻塞模式，等待灵巧手运动结束后返回<br>false 表示非阻塞模式，发送后立即返回  |
| `timeout`      | `int` | 阻塞模式下超时时间设置，单位：秒   |

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

# 设置灵巧手各手指角度
print(arm.rm_set_hand_angle([-1,100,200,300,400,500]))

arm.rm_delete_robot_arm()
```

## 设置灵巧手速度`rm_set_hand_speed()`

- **方法原型：**

```python
rm_set_hand_speed(self, speed: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `speed`   | `int` | 手指速度，范围：1~1000    |

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

print(arm.rm_set_hand_speed(500))

arm.rm_delete_robot_arm()
```

## 设置灵巧手力阈值`rm_set_hand_force()`

- **方法原型：**

```python
rm_set_hand_force(self, force: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| force   | `int` | 手指力，范围：1~1000    |

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

print(arm.rm_set_hand_force(500))

arm.rm_delete_robot_arm()
```

## 设置灵巧手角度跟随控制`rm_set_hand_follow_angle()`

- 设置灵巧手跟随角度，灵巧手有6个自由度，从1~6分别为小拇指，无名指，中指，食指，大拇指弯曲，大拇指旋转，最高50Hz的控制频率。
- 灵巧手角度的定义（int16）：

   1. 傲意：第一指关节1的角度*100。<br>
   2. 因时：0-2000，通过联系技术支持得到驱动器行程与角度关系表。

::: warning 注意
如果要使用此功能，需要联系技术支持发送定制的灵巧手固件升级包（傲意或者因时）。
:::

- **方法原型：**

```python
rm_set_hand_follow_angle(self, hand_angle: list[int], block:int) -> int
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `hand_angle`  | `List[int]` | 设置灵巧手各手指动作，hand_angle表示手指角度数组，按照灵巧手厂商定义的角度做控制，例如：<br>1. 因时的角度范围为0到+2000；<br>2. 傲意的角度范围为-32768到+32767。   |
| `block` | `int` | 设置等待机械臂返回状态超时时间，设置0时为非阻塞模式，单位为毫秒。  |

- **因时各自由度的角度定义和运动范围说明如下。**

| 角度 | 图例说明 |范围|
| :--- | :--- |:---|
| 小拇指<br>无名指<br>中指<br>食指 | ![image6](../../../json/doc/image6.png) |19°~176.7°|
| 大拇指弯曲角度 | ![image7](../../../json/doc/image7.png) |-130~53.6°|
| 大拇旋转曲角度 | ![image8](../../../json/doc/image8.png) |90°~165°|

- **傲意各自由度的角度定义和运动范围说明如下。**

| 角度 | 图例说明 |范围|
| :--- | :--- |:---|
| 食指<br>中指<br>无名指<br>小拇指 | ![image9](../../../json/doc/image9.png) |100.22°~178.37°<br> 97.81° ~ 176.06°<br>101.38°~176.54°<br>98.84°~174.86°|
| 大拇指弯曲角度 | ![image10](../../../json/doc/image10.png) |2.26° ~ 36.76°|
| 大拇旋转曲角度 | ![image11](../../../json/doc/image11.png) |0° ~ 90°|

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

# 灵巧手角度跟随控制
print(arm.rm_set_hand_follow_angle([0,100,200,300,400,500], 100))

arm.rm_delete_robot_arm()
```

## 设置灵巧手位置跟随控制`rm_set_hand_follow_pos()`

::: warning 注意
如果要使用此功能，需要联系技术支持发送定制的灵巧手固件升级包（傲意或者因时）。
:::

- **方法原型：**

```python
rm_set_hand_follow_pos(self, hand_pos: list[int], block:int) -> int
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `hand_pos` | `list[int]` | 设置灵巧手各手指动作，hand_pos表示手指位置数组，按照灵巧手厂商定义的角度做控制，例如：<br>1. 因时的位置范围为0-1000；<br>2. 傲意的位置范围为0-65535。   |
| `block` | `int` | 设置等待机械臂返回状态超时时间，设置0时为非阻塞模式，单位为毫秒。  |

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

# 灵巧手位置跟随控制
print(arm.rm_set_hand_follow_pos([0,100,200,300,400,500], 100))

arm.rm_delete_robot_arm()
```
