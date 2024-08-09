# 全局路点管理`GlobalWaypointManage`

可用于新增、查询或者更新全局路点。下面是全局路点管理`GlobalWaypointManage`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。


## 新增全局路点`rm_add_global_waypoint()`

- **方法原型：**

```python
rm_add_global_waypoint(self, waypoint: rm_waypoint_t) -> int:
```

*可以跳转[rm_waypoint_t](../struct/waypoint.md)查阅结构体详细描述*

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| waypoint      | `rm_waypoint_t` | 新增全局路点参数（无需输入新增全局路点时间）。  |

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

point = rm_waypoint_t("point1", [0, 20, 70, 0, 90, 0],
                      [0.3, 0, 0.3, 3.142, 0, 0], 'World', 'Arm_Tip')
print(arm.rm_add_global_waypoint(point))

arm.rm_delete_robot_arm()
```

## 更新全局路点`rm_update_global_waypoint()`

- **方法原型：**

```python
rm_update_global_waypoint(self, waypoint: rm_waypoint_t) -> int:
```

*可以跳转[rm_waypoint_t](../struct/waypoint.md)查阅结构体详细描述*

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| waypoint      | `rm_waypoint_t` | 更新全局路点参数（无需输入更新全局路点时间）。  |

- **返回值:** </br>
函数执行的状态码

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

point = rm_waypoint_t("point1", [0, 40, 50, 0, 90, 0],[0.3, 0, 0.3, 3.142, 0, 0], 'World', 'Arm_Tip')
print(arm.rm_update_global_waypoint(point))

arm.rm_delete_robot_arm()
```

## 删除全局路点`rm_delete_global_waypoint()`

- **方法原型：**

```python
rm_delete_global_waypoint(self, point_name: str) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| point_name      | `str` | 全局路点名称。  |

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

print(arm.rm_delete_global_waypoint("point"))

arm.rm_delete_robot_arm()
```

## 查询指定全局路点`rm_get_given_global_waypoint()`

- **方法原型：**

```python
rm_get_given_global_waypoint(self, point_name: str) -> tuple[int, dict[str, any]]:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| point_name      | `str` | 指定全局路点名称。  |

- **返回值:** </br>
tuple[int,dict[str,any]]: 包含两个元素的元组

1. int：函数执行的状态码。

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功。    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 全局路点的参数字典

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   rm_waypoint_t  |    `dict[str,any]`   |    返回指定全局路点的参数字典，键为rm_waypoint_t结构体的字段名称。    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

print(arm.rm_get_given_global_waypoint("point"))

arm.rm_delete_robot_arm()
```

## 查询多个全局路点`rm_get_global_waypoints_list()`

- **方法原型：**

```python
rm_get_global_waypoints_list(self, page_num: int, page_size: int, vague_search: str) -> tuple[int, dict[str, any]]:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| point_name      | `str` | 指定全局路点名称  |

- **返回值:** </br>
tuple[int,dict[str,any]]: 包含两个元素的元组

1. int：函数执行的状态码。

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 全局路点列表字典

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   rm_waypoint_list_t  |    `dict[str,any]`   |    返回符合条件的全局路点列表字典，键为rm_waypoint_list_t结构体的字段名称    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
print(arm.rm_create_robot_arm("192.168.1.18", 8080))

# 模糊查询“test”路点
print(arm.rm_get_global_waypoints_list(1, 10, "test"))

arm.rm_delete_robot_arm()
```
