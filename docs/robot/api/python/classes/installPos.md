# 系统安装方式配置`InstallPos`

安装方式及关节、末端软件版本号查询。睿尔曼机械臂可支持不同形式的安装方式，但是安装方式不同，机器人的动力学模型参数和坐标系的方向也有所差别。下面安装方式及关节、末端软件版本号查询`InstallPos`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

## 设置安装方式参数`rm_set_install_pose()`

- **方法原型：**

```python
rm_set_install_pose(self, x: float, y: float, z: float) -> int:
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   x  |    `float`    |    旋转角，单位 °度 ；   |
|   y  |    `float`   |   俯仰角，单位 ° 度；    |
|   z  |    `float`   |    方位角，单位 ° 度；   |

- **返回值: **</br>
 int: 函数执行的状态码：

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功    |
|   1  |    `int`    |   控制器返回false，参数错误或机械臂状态发生错误。   |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。              |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。 |
|   -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_install_pose(0, 90, 0))

arm.rm_delete_robot_arm()
```

## 获取安装方式参数`rm_get_install_pose()`

- **方法原型：**

```python
rm_get_install_pose(self) -> dict[str, any]:
```

- **返回值 dict[str,any]: 包含以下键值的字典**

1. return_code()函数执行的状态码

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |   控制器返回false，参数错误或机械臂状态发生错误。   |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。              |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。 |
|   -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。    |

2. 姿态角度值

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   x  |    `float`    |    旋转角，单位 ° 度；  |
|   y  |    `float`   |   俯仰角，单位 ° 度；   |
|   z  |    `float`   |    方位角，单位 ° 度；  |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_install_pose())

arm.rm_delete_robot_arm()
```

## 查询关节软件版本号`rm_get_joint_software_version()`

> 获取到的关节软件版本号需转换为十六进制，例如获取某关节版本为54536，转换为十六进制为D508，则当前关节的版本号为 Vd5.0.8。

- **方法原型：**

```python
rm_get_joint_software_version(self) -> tuple[int, list[int]]:
```

- **返回值:** </br>
tuple[int,list[int]]: 包含两个元素的元组 -int 函数执行的状态码

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功    |
|   1  |    `int`    |   控制器返回false，参数错误或机械臂状态发生错误。   |
|   -1 |    `int`   |   数据发送失败，通信过程中出现问题。              |
|   -2 |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。 |
|   -3 |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。    |
| list |    `int`   |   获取到的各关节软件版本号数组。    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_joint_software_version())

arm.rm_delete_robot_arm()
```

## 查询末端接口板软件版本号`rm_get_tool_software_version()`

> 获取到的末端接口板软件版本号需转换为十六进制，例如获取到版本号393，转换为十六进制为189，则当前关节的版本号为 V1.8.9 。

- **方法原型：**

```python
rm_get_tool_software_version(self) -> tuple[int, int]:    
```

- **返回值: **</br>
tuple[int,int]: 包含两个元素的元组 -int 函数执行的状态码。

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功    |
|   1  |    `int`    |   控制器返回false，参数错误或机械臂状态发生错误。   |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。              |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。 |
|   -3  |    `int`   |  返回值解析失败，控制器返回的数据无法识别或不完整等情况。    |
| list  |    `int`   |   获取到的末端接口板软件版本号。    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_tool_software_version())

arm.rm_delete_robot_arm()
```
