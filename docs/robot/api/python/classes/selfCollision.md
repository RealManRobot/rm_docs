# 自碰撞安全检测接口配置`SelfCollision`

可用于自碰撞安全检测，睿尔曼机械臂支持自碰撞安全检测，自碰撞安全检测使能状态下，可确保在轨迹规划、示教等运动过程中机械臂的各个部分不会相互碰撞。下面是自碰撞安全检测`SelfCollision`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

> **注意**</br>以上自碰撞安全检测功能目前只在仿真模式下生效，用于进行预演轨迹与轨迹优化。

## 设置自碰撞安全检测使能状态`rm_set_self_collision_enable()`

- **方法原型：**

```python
rm_set_self_collision_enable(self, enable: bool) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| enable      | `bool` | True代表使能，False代表禁使能。                    |

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

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_self_collision_enable(True))

arm.rm_delete_robot_arm()
```

## 获取自碰撞安全检测使能状态`rm_get_self_collision_enable()`

- **方法原型：**

```python
rm_get_self_collision_enable(self) -> tuple[int, bool]:
```

- **返回值:** 
tuple[int,bool]: 包含两个元素的元组

1. int: 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 返回自碰撞安全检测使能状态，true代表使能，false代表禁使能

| 参数        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| -      | `bool` | 返回自碰撞安全检测使能状态，true代表使能，false代表禁使能   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_self_collision_enable())

arm.rm_delete_robot_arm()
```
