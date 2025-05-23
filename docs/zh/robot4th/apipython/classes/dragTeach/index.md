# <p class="hidden">Python: </p>拖动示教配置`DragTeach`

可用拖动示教的设置等，睿尔曼机械臂在拖动示教过程中，可记录拖动的轨迹点，并根据用户的指令对轨迹进行复现。下面是拖动示教`DragTeach`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

## 拖动示教开始`rm_start_drag_teach()`

- **方法原型：**

```python
rm_start_drag_teach(self, trajectory_record: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `trajectory_record`      | `int` | 拖动示教时记录轨迹，0-不记录，1-记录轨迹 |

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

print(arm.rm_start_drag_teach(1))

arm.rm_delete_robot_arm()
```

## 拖动示教结束`rm_stop_drag_teach()`

- **方法原型：**

```python
rm_stop_drag_teach(self) -> int:
```

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

print(arm.rm_stop_drag_teach())

arm.rm_delete_robot_arm()
```

## 开始复合模式拖动示教`rm_start_multi_drag_teach_new()`

- **方法原型：**

```python
rm_start_multi_drag_teach_new(self, param: rm_multi_drag_teach_t) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_multi_drag_teach_t` | 复合拖动示教参数 |

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

param = rm_multi_drag_teach_t((0, 1, 1, 0, 1, 0), 0, 1)
result1 = arm.rm_start_multi_drag_teach_new(param)
time.sleep(2)
result2 = arm.rm_set_stop_teach()

arm.rm_delete_robot_arm()
```

## 设置电流环拖动示教灵敏度`rm_set_drag_teach_sensitivity()`

- **方法原型：**

```python
rm_set_drag_teach_sensitivity(self, grade: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `grade`      | `int` | 灵敏度等级，取值范围0~100%，数值越小越沉，当设置为100时保持原本拖动灵敏度 |

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

print(arm.rm_set_drag_teach_sensitivity(50))

arm.rm_delete_robot_arm()
```

## 获取电流环拖动示教灵敏度`rm_get_drag_teach_sensitivity()`

- **方法原型：**

```python
rm_get_drag_teach_sensitivity(self) -> int:
```

- **返回值:** <br>
tuple[int,int]: 包含两个元素的元组。<br>

1. int: 函数执行的状态码

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

2. int: 灵敏度等级

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `int`   |    灵敏度等级，取值范围0~100%，数值越小越沉，当设置为100时保持原本拖动灵敏度   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_drag_teach_sensitivity())

arm.rm_delete_robot_arm()
```

## 运动到轨迹起点`rm_drag_trajectory_origin()`

轨迹复现前，必须控制机械臂运动到轨迹起点，如果设置正确，机械臂将以20的速度运动到轨迹起点

- **方法原型：**

```python
rm_drag_trajectory_origin(self, block: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
|   `block`  |    `int`    |   阻塞设置<br>多线程模式：<br>0：非阻塞模式，发送指令后立即返回。<br> 1：阻塞模式，等待机械臂到达目标位置或规划失败后才返回。<br>单线程模式：<br>0：非阻塞模式。<br>其他值：阻塞模式并设置超时时间，单位为秒。 |

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

# 阻塞模式运动到轨迹起点
print(arm.rm_drag_trajectory_origin(1))

arm.rm_delete_robot_arm()
```

## 拖动示教复现`rm_run_drag_trajectory()`

必须在拖动示教结束后才能使用，同时保证机械臂位于拖动示教的起点位置，可调用rm_drag_trajectory_origin接口运动至起点位置。

- **方法原型：**

```python
rm_run_drag_trajectory(self, timeout: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
|   `timeout`  |    `int`    |   阻塞设置<br>多线程模式：<br>0：非阻塞模式，发送指令后立即返回。<br> 1：阻塞模式，等待机械臂到达目标位置或规划失败后才返回。<br>单线程模式：<br>0：非阻塞模式。<br>其他值：阻塞模式并设置超时时间，单位为秒。 |

- **返回值:** <br>
函数执行的状态码

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_run_drag_trajectory(1))

arm.rm_delete_robot_arm()
```

## 控制轨迹复现过程中暂停`rm_pause_drag_trajectory()`

- **方法原型：**

```python
rm_pause_drag_trajectory(self) -> int:
```

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

print(arm.rm_pause_drag_trajectory())

arm.rm_delete_robot_arm()
```

## 控制轨迹复现过程的继续`rm_continue_drag_trajectory()`

控制轨迹复现过程中暂停之后的继续。

- **方法原型：**

```python
rm_continue_drag_trajectory(self) -> int:
```

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

print(arm.rm_continue_drag_trajectory())

arm.rm_delete_robot_arm()
```

## 控制轨迹复现过程中的停止`rm_stop_drag_trajectory()`

控制机械臂在轨迹复现过程中的停止。

- **方法原型：**

```python
rm_stop_drag_trajectory(self) -> int:
```

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

print(arm.rm_stop_drag_trajectory())

arm.rm_delete_robot_arm()
```

## 力位混合控制`rm_set_force_position()`

在笛卡尔空间轨迹规划时，使用该功能可保证机械臂末端接触力恒定，使用时力的方向与机械臂运动方向不能在同一方向。 开启力位混合控制，执行笛卡尔空间运动，接收到运动完成反馈后，需要等待2S后继续下发下一条运动指令。

- **方法原型：**

```python
rm_set_force_position(self, sensor: int, mode: int, direction: int, force: float) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `sensor`      | `int` | 0-一维力；1-六维力。 |
| `mode`      | `int` | 0-基坐标系力控；1-工具坐标系力控。 |
| `direction`      | `int` | 力控方向；0-沿X轴；1-沿Y轴；2-沿Z轴；3-沿RX姿态方向；4-沿RY姿态方向；5-沿RZ姿态方向。 |
| `force`      | `float` | 力的大小，单位N。 |

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

print(arm.rm_set_force_position(1, 0, 2, 5))

arm.rm_delete_robot_arm()
```

## 力位混合控制`rm_set_force_position_new()`

在笛卡尔空间轨迹规划时，使用该功能可保证机械臂末端接触力恒定，使用时力的方向与机械臂运动方向不能在同一方向。 开启力位混合控制，执行笛卡尔空间运动，接收到运动完成反馈后，需要等待2S后继续下发下一条运动指令。

- **方法原型：**

```python
rm_set_force_position_new(self, param: rm_force_position_t) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_force_position_t` | 力位混合控制参数。 |

*可以跳转[rm_force_position_t](../../struct/forcePosition/index.md)查阅结构体详细描述。*

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

arm.rm_movej_p([0.2, 0, 0.3, 3.142, 0, 0], 20, 0, 0, 1)
param = rm_force_position_t(1, 0, (3, 3, 4, 3, 3, 3), (0, 0, 1, 0, 0, 0), (0.1, 0.1, 0.1, 10, 10, 10))
for i in range(3):
    result1 = arm.rm_movel([0.2, 0, 0.3, 3.142, 0, 0], 20, 0, 0, 1)
    result2 = arm.rm_set_force_position_new(param)
    result3 = arm.rm_movel([0.3, 0, 0.3, 3.142, 0, 0], 20, 0, 0, 1)

arm.rm_stop_force_position()
arm.rm_delete_robot_arm()
```

## 结束力位混合控制`rm_stop_force_position()`

- **方法原型：**

```python
rm_stop_force_position(self) -> int:
```

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

print(arm.rm_stop_force_position())

arm.rm_delete_robot_arm()
```

## <div id = '6214'>保存拖动示教轨迹`rm_save_trajectory()`</div>

- **方法原型：**

```python
rm_save_trajectory(self, file_path: str) -> tuple[int, int]:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `file_path`      | `str` | 轨迹要保存的文件路径及名称，例: c:/rm_test.txt |

- **返回值:** <br>
tuple[int,int]: 包含两个元素的元组。<br>

1. int: 函数执行的状态码

|   参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**： ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |    文件打开失败。    |- **检查文件路径**：确保文件路径是正确的，没有拼写错误。<br>- **检查文件权限**：确保用户有权限读取该文件。如果文件位于受保护的目录中，可能需要管理员权限。<br>- **检查文件是否被其他程序占用**：确保文件没有被其他程序打开或锁定。如果文件被占用，可能需要关闭占用文件的程序。<br>- **联系技术支持**：如果以上步骤都无法解决问题，用户可以联系技术支持团队，提供详细的错误信息和操作步骤，以便技术支持人员进行进一步的调查和诊断。<br>- **重试操作**：尝试重新执行 rm_save_trajectory 函数，看看问题是否仍然存在。<br>- **尝试保存到其他文件**：测试是否与特定文件有关。|
|  -5  |    `int`    |    文件名称截取失败。    |检查文件路径是否为空或格式不正确。|
|  -6  |    `int`    |    获取到的点位解析错误，保存失败。    |- **查看日志**：检查保存过程中控制器返回的json指令是否正确。<br>- **检查网络连接**：如果网络不稳定，没有接收到完整的json协议可能会返回此报错，确保网络连接正常后重试。<br>- **联系技术支持**：如果以上步骤都无法解决问题，可联系技术支持团队，提供操作步骤以及日志文件，以便技术支持人员进行进一步的调查和诊断。|

1. 轨迹点总数

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `int`   |    轨迹点总数    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_save_trajectory("H:/Desktop/example.txt"))

arm.rm_delete_robot_arm()
```

## <div id = '6216'>设置六维力拖动示教模式`rm_set_force_drag_mode()`</div>

- **方法原型：**

```python
rm_set_force_drag_mode(self, mode: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `mode`      | `int` | 0表示快速拖动模式 1表示精准拖动模式 |

- **返回值：** <br>
函数执行的状态码：

|   参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**： ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`   |   非六维力版本机械臂，不支持此功能。   |该功能需要六维力版本机械臂，如果机械臂为六维力版本：<br>1.检查连接句柄是否有效：无效的连接句柄会导致API无法正确获取到机械臂末端信息；<br>2.检查机械臂版本信息：确保机械臂型号为六维力版本，避免误使用标准末端的机械臂升级包给机械臂升级导致该功能不可用。|

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_force_drag_mode(50))

arm.rm_delete_robot_arm()
```

## <div id = '6218'>获取六维力拖动示教模式`rm_get_force_drag_mode()`</div>

- **方法原型：**

```python
rm_get_force_drag_mode(self) -> int:
```

- **返回值：** <br>
tuple[int,int]: 包含两个元素的元组。<br>

1. int: 函数执行的状态码

|   参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**： ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`   |   非六维力版本机械臂，不支持此功能。   |该功能需要六维力版本机械臂，如果机械臂为六维力版本：<br>1.检查连接句柄是否有效：无效的连接句柄会导致API无法正确获取到机械臂末端信息；<br>2.检查机械臂版本信息：确保机械臂型号为六维力版本，避免误使用标准末端的机械臂升级包给机械臂升级导致该功能不可用。|

2. int: 拖动模式

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `int`   |    0表示快速拖动模式 1表示精准拖动模式   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_force_drag_mode())

arm.rm_delete_robot_arm()
```
