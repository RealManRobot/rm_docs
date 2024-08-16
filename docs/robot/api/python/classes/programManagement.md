# <p class="hidden">Python: </p>在线编程文件管理`ProjectManagement`

可用于在线编程文件下发、管理等。下面是在线编程文件下发、管理`ProjectManagement`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

## 文件下发`rm_send_project()`

- **方法原型：**

```python
rm_send_project(self, send_project: rm_send_project_t) -> tuple[int, int]:
```

*可以跳转[rm_send_project_t](../struct/sendProject.md)查阅结构体详细描述*

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `send_project`      | `rm_send_project_t` | 要发送的文件数据。        |

- **返回值:** </br>
`tuple[int, int]`: 包含两个元素的元组。<br>

1. int: 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功。    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

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

# 将文件保存到控制器，编号为8，规划速度比例系数50%。并且运行文件
file_path = "../TestDatas/example.txt"
send_project = rm_send_project_t(file_path, 50, 0, 8, 0, 0)
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

- **返回值:** </br>
`tuple[int, dict[str,any]]`: 包含两个元素的元组。<br>

1. int: 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功。    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

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

## 开始运行指定轨迹`rm_set_program_id_run()`

- **方法原型：**

```python
rm_set_program_id_run(self, tra_id: int, speed: int, timeout: int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `tra_id`      | `int` | 运行指定的ID，1-100，存在轨迹可运行。                    |
| `speed` | `int` |  1-100，需要运行轨迹的速度，若设置为0，则按照存储的速度运行。 |
|   `timeout`  |    `int`    |   阻塞设置</br>多线程模式：</br>0：非阻塞模式，发送指令后立即返回。</br> 1：阻塞模式，等待机械臂到达目标位置或规划失败后才返回。</br>单线程模式</br>0：非阻塞模式。</br>其他值：阻塞模式并设置超时时间，单位为秒。 |

- **返回值:** </br>
函数执行的状态码：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功。    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |
|  -4  |    `int`   |   运行状态已停止但未接收到运行成功，是否在外部停止了轨迹。   |

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

- **返回值:** </br>
`tuple[int, dict[str,any]]`: 包含两个元素的元组。<br>

1. int: 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功。    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

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

print(arm.rm_set_default_run_program(8))

arm.rm_delete_robot_arm()
```

## 获取IO默认运行编号`rm_get_default_run_program()`

- **方法原型：**

```python
rm_get_default_run_program(self) -> tuple[int, int]:
```

- **返回值:** </br>
`tuple[int,int]`: 包含两个元素的元组。<br>

1. int: 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功。    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

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
