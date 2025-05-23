# <p class="hidden">Python: </p>在线编程文件管理`ProjectManagement`

可用于在线编程文件下发、管理等。下面是在线编程文件下发、管理`ProjectManagement`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

## <div id = '6232'>文件下发`rm_send_project()`</div>

- **方法原型：**

```python
rm_send_project(self, send_project: rm_send_project_t) -> tuple[int, int]:
```

*可以跳转[rm_send_project_t](../../struct/sendProject/index.md)查阅结构体详细描述。*

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `send_project`      | `rm_send_project_t` | 要发送的文件数据。        |

- **返回值:** <br>
`tuple[int, int]`: 包含两个元素的元组。<br>

1. int: 函数执行的状态码

|   参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**： ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotes/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotes/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`   |   文件名称校验失败。    |**检查文件路径和格式**：<br>检查文件路径是否为空或格式不正确。|
|  -5  |    `int`   |   文件读取失败。   |- **检查文件路径**：<br> ①确保文件路径是正确的，没有拼写错误。<br> ②确认文件确实存在于指定的路径中。<br>- **检查文件权限**：确保用户有权限读取该文件。如果文件位于受保护的目录中，可能需要管理员权限。<br>- **检查文件是否被占用**：确保文件没有被其他程序打开或锁定。如果文件被占用，可能需要关闭占用文件的程序。<br>- **联系技术支持**：如果以上步骤都无法解决问题，用户可以联系技术支持团队，提供详细的错误信息和操作步骤，以便技术支持人员进行进一步的调查和诊断。<br>- **重试操作**：尝试重新执行 rm_send_project 函数，看看问题是否仍然存在。<br>- **尝试其他文件**：如果可能，尝试读取其他文件，看看问题是否与特定文件相关。|

2. int: 若运行失败，该参数返回有问题的工程行数

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    校验数据长度不对。    |
|   其他值  |    `int`   |   有问题的工程行数。    |
|  -1  |    `int`   |   无错误，文件成功下发。    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 将在线编程文件保存到控制器，编号为8，规划速度比例系数50%。并且运行文件
file_path = "../TestDatas/example.txt"
send_project = rm_send_project_t(file_path, 50, 0, 8, 0, 0, 0)
print(arm.rm_send_project(send_project))

arm.rm_delete_robot_arm()
```

## 获取在线编程列表`rm_get_program_trajectory_list()`

- **方法原型：**

```python
rm_get_program_trajectory_list(self, page_num: int, page_size: int, vague_search: str) -> tuple[int, dict[str, any]]:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `page_num`      | `int` | 页码。        |
| `page_size`      | `int` | 每页大小。        |
| `vague_search`      | `str` | 模糊搜索。        |

- **返回值:** <br>
`tuple[int, dict[str,any]]`: 包含两个元素的元组。<br>

1. int: 函数执行的状态码

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

2. 在线编程列表字典

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   `rm_program_trajectorys_t`  |    `dict[str,any]`   |    获取到的在线编程列表字典，键为rm_program_trajectorys_t结构体的字段名称。    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 模糊搜索“a”在线编程文件
print(arm.rm_get_program_trajectory_list(1, 10, "a"))

arm.rm_delete_robot_arm()
```

## <div id = '6234'>开始运行指定编程文件`rm_set_program_id_run()`</div>

- **方法原型：**

```python
rm_set_program_id_run(self, tra_id: int, speed: int, timeout: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `tra_id`      | `int` | 运行指定的ID，1-100，存在轨迹可运行。                    |
| `speed` | `int` |  1-100，需要运行轨迹的速度，若设置为0，则按照存储的速度运行。 |
|   `timeout`  |    `int`    |   阻塞设置<br>多线程模式：<br>0：非阻塞模式，发送指令后立即返回。<br> 1：阻塞模式，等待机械臂到达目标位置或规划失败后才返回。<br>单线程模式：<br>0：非阻塞模式。<br>其他值：阻塞模式并设置超时时间，单位为秒。 |

- **返回值:** <br>
函数执行的状态码：

|   参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**： ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotes/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotes/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`   |   运行状态已停止但未接收到运行成功，是否在外部停止了轨迹。   |判断是否在外部停止了轨迹，例如触发了暂停、停止等按钮。|

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 以20%速度阻塞运行编号为8的在线编程
print(arm.rm_set_program_id_run(8, 20, 1))

arm.rm_delete_robot_arm()
```

## 查询在线编程运行状态`rm_get_program_run_state()`

- **方法原型：**

```python
rm_get_program_run_state(self) -> tuple[int, dict[str, any]]:
```

- **返回值:** <br>
`tuple[int, dict[str,any]]`: 包含两个元素的元组。<br>

1. int: 函数执行的状态码

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

2. 在线编程运行状态字典

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   `rm_program_run_state_t`  |    `dict[str,any]`   |    获取到的在线编程运行状态字典，键为rm_program_run_state_t结构体的字段名称。    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_program_run_state())

arm.rm_delete_robot_arm()
```

## 删除指定轨迹`rm_delete_program_trajectory()`

- **方法原型：**

```python
rm_delete_program_trajectory(self, tra_id: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `tra_id`      | `int` | 指定轨迹的ID。                    |

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

print(arm.rm_delete_program_trajectory(8))

arm.rm_delete_robot_arm()
```

## 修改指定轨迹信息`rm_update_program_trajectory()`

- **方法原型：**

```python
rm_update_program_trajectory(self, tra_id: int, speed: int, name: str) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `tra_id`      | `int` | 指定在线编程轨迹编号。       |
| `speed` | `int` | 更新后的规划速度比例 1-100。 |
| `name` | `str` | 更新后的文件名称。 |

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

print(arm.rm_update_program_trajectory(8, 20, "test"))

arm.rm_delete_robot_arm()
```

## 设置IO默认运行编号`rm_set_default_run_program()`

- **方法原型：**

```python
rm_set_default_run_program(self, tra_id: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `tra_id`      | `int` | 设置 IO 默认运行的在线编程文件编号，支持 0-100，0 代表取消设置。   |

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

print(arm.rm_set_default_run_program(8))

arm.rm_delete_robot_arm()
```

## 获取IO默认运行编号`rm_get_default_run_program()`

- **方法原型：**

```python
rm_get_default_run_program(self) -> tuple[int, int]:
```

- **返回值:** <br>
`tuple[int,int]`: 包含两个元素的元组。<br>

1. int: 函数执行的状态码

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

2. 在线编程文件编号

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   -  |    `int`   |    获取到的在线编程运行状态字典，键为rm_program_run_state_t结构体的字段名称。    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_default_run_program())

arm.rm_delete_robot_arm()
```
