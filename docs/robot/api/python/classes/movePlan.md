# <p class="hidden">Python: </p>机械臂轨迹控制`MovePlan`

可用于规划机械臂的运动轨迹。下面是机械臂轨迹规划指令`MovePlan`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

## 关节空间运动`rm_movej()`

- **方法原型：**

```python
rm_movej(self, joint: list[float], v: int, r: int, connect: int, block: int) -> int:
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `joint`  |    `list`    |    各关节目标角度数组，单位：°度。    |
|   `v`  |    `int`    |    速度比例1~100，即规划速度和加速度占关节最大线转速和加速度的百分比。    |
|   `r`  |    `int`    |   交融半径百分比系数，0-100。  |
|   `connect`  |    `int`    |   轨迹连接标志</br>0：立即规划并执行轨迹，不与后续轨迹连接。</br> 1：将当前轨迹与下一条轨迹一起规划，但不立即执行。阻塞模式下，即使发送成功也会立即返回。 |
|   `block`  |    `int`    |   阻塞设置</br>多线程模式：</br>0：非阻塞模式，发送指令后立即返回。</br> 1：阻塞模式，等待机械臂到达目标位置或规划失败后才返回。</br>单线程模式</br>0：非阻塞模式。</br>其他值：阻塞模式并设置超时时间，单位为秒。 |

>注意:使用单线程阻塞模式时，请设置超时时间确保轨迹在超时时间内运行结束返回。<br>
>注意：trajectory_connect参数为1交融半径才生效，如果为0则交融半径不生效。

- **返回值:** </br>
函数执行的状态码：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |   成功。    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |
|  -4  |    `int`   |   当前到位设备校验失败，即当前到位设备不为关节。   |
|  -5  |    `int`   |   单线程模式超时未接收到返回，请确保超时时间设置合理。   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 关节阻塞运动到[0, 20, 70, 0, 90, 0]
print(arm.rm_movej([0, 20, 70, 0, 90, 0], 20, 0, 0, 1))

arm.rm_delete_robot_arm()
```

## 笛卡尔空间直线运动`rm_movel()`

- **方法原型：**

```python
rm_movel(self, pose: list[float], v: int, r: int, connect: int, block: int) -> int:
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `pose`  |    `list[float]`    |    目标位姿,位置单位：米，姿态单位：弧度   |
|   `v`  |    `int`    |    速度比例1~100，即规划速度和加速度占关节最大线转速和加速度的百分比    |
|   `r`  |    `int`    |   交融半径百分比系数，0-100  |
|   `connect`  |    `int`    |   轨迹连接标志</br>0：立即规划并执行轨迹，不与后续轨迹连接。</br> 1：将当前轨迹与下一条轨迹一起规划，但不立即执行。阻塞模式下，即使发送成功也会立即返回。 |
|   `block`  |    `int`    |   阻塞设置</br>多线程模式：</br>0：非阻塞模式，发送指令后立即返回。</br> 1：阻塞模式，等待机械臂到达目标位置或规划失败后才返回。</br>单线程模式</br>0：非阻塞模式。</br>其他值：阻塞模式并设置超时时间，单位为秒。 |

>注意:使用单线程阻塞模式时，请设置超时时间确保轨迹在超时时间内运行结束返回。<br>
>注意：trajectory_connect参数为1交融半径才生效，如果为0则交融半径不生效。

- **返回值:** </br>
函数执行的状态码：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |
|  -4  |    `int`   |   当前到位设备校验失败，即当前到位设备不为关节。   |
|  -5  |    `int`   |   单线程模式超时未接收到返回，请确保超时时间设置合理。   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_movej_p([0.2, 0, 0.4, 3.141, 0, 0], 20, 0, 0, 1))
print(arm.rm_movel([0.3, 0, 0.4, 3.141, 0, 0], 20, 0, 0, 1))

arm.rm_delete_robot_arm()
```

## 样条曲线运动`rm_moves()`

- **方法原型：**

```python
rm_moves(self, pose: list[float], v: int, r: int, connect: int, block: int) -> int:
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `pose`  |    `list[float]`    |    目标位姿，位置单位：米，姿态单位：弧度   |
|   `v`  |    `int`    |    速度比例1~100，即规划速度和加速度占关节最大线转速和加速度的百分比    |
|   `r`  |    `int`    |   交融半径百分比系数，0-100  |
|   `connect`  |    `int`    |   轨迹连接标志</br>0：立即规划并执行轨迹，不与后续轨迹连接。</br> 1：将当前轨迹与下一条轨迹一起规划，但不立即执行。阻塞模式下，即使发送成功也会立即返回。 |
|   `block`  |    `int`    |   阻塞设置</br>多线程模式：</br>0：非阻塞模式，发送指令后立即返回。</br> 1：阻塞模式，等待机械臂到达目标位置或规划失败后才返回。</br>单线程模式</br>0：非阻塞模式。</br>其他值：阻塞模式并设置超时时间，单位为秒。 |

>样条曲线运动需至少连续下发三个点位（connect设置为1），否则运动轨迹为直线。
>注意:使用单线程阻塞模式时，请设置超时时间确保轨迹在超时时间内运行结束返回。<br>

- **返回值:** </br>
函数执行的状态码：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |
|  -4  |    `int`   |   当前到位设备校验失败，即当前到位设备不为关节。   |
|  -5  |    `int`   |   单线程模式超时未接收到返回，请确保超时时间设置合理。   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_movej_p([0.3, 0, 0.3, 3.14, 0, 0], 20, 0, 0, 1))
print(arm.rm_moves([0.3, 0, 0.3, 3.14, 0, 0], 20, 0, 1, 1))
print(arm.rm_moves([0.3, 0.1, 0.3, 3.14, 0, 0], 20, 0, 1, 1))
print(arm.rm_moves([0.2, 0.1, 0.3, 3.14, 0, 0], 20, 0, 0, 1))

arm.rm_delete_robot_arm()
```

## 笛卡尔空间圆弧运动`rm_movec()`

- **方法原型：**

```python
rm_movec(self, pose_via: list[float], pose_to: list[float], v: int, r: int, loop: int, connect: int, block: int) -> int:
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `pose_via`  |    `list[float]`    |    中间点位姿，位置单位：米，姿态单位：弧度   |
|   `pose_to`  |    `list[float]`    |    终点位姿，位置单位：米，姿态单位：弧度   |
|   `v`  |    `int`    |    速度比例1~100，即规划速度和加速度占关节最大线转速和加速度的百分比    |
|   `loop`  |    `int`    |    规划圈数    |
|   `r`  |    `int`    |   交融半径百分比系数，0-100  |
|   `connect`  |    `int`    |   轨迹连接标志</br>0：立即规划并执行轨迹，不与后续轨迹连接。</br> 1：将当前轨迹与下一条轨迹一起规划，但不立即执行。阻塞模式下，即使发送成功也会立即返回。 |
|   `block`  |    `int`    |   阻塞设置</br>多线程模式：</br>0：非阻塞模式，发送指令后立即返回。</br> 1：阻塞模式，等待机械臂到达目标位置或规划失败后才返回。</br>单线程模式</br>0：非阻塞模式。</br>其他值：阻塞模式并设置超时时间，单位为秒。 |

>注意:使用单线程阻塞模式时，请设置超时时间确保轨迹在超时时间内运行结束返回。<br>
>注意：trajectory_connect参数为1交融半径才生效，如果为0则交融半径不生效。

- **返回值:** </br>
函数执行的状态码：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |
|  -4  |    `int`   |   当前到位设备校验失败，即当前到位设备不为关节。   |
|  -5  |    `int`   |   单线程模式超时未接收到返回，请确保超时时间设置合理。   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_movej([0, 10, 80, 0, 90, 0], 20, 0, 0, 0))
ret1 = arm.rm_get_current_arm_state()
ret2 = arm.rm_get_current_arm_state()
ret1[1]['pose'][0] += 0.02
ret2[1]['pose'][1] += 0.02
print(arm.rm_movec(ret1[1]['pose'], ret2[1]['pose'], 20, 0, 0, 0, 1))

arm.rm_delete_robot_arm()
```

## 关节空间运动到目标位姿`rm_movej_p()`

- **方法原型：**

```python
rm_movej_p(self, pose: list[float], v: int, r: int, connect: int, block: int) -> int:
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `pose`  |    `list[float]`    |    目标位姿，位置单位：米，姿态单位：弧度   |
|   `v`  |    `int`    |    速度比例1~100，即规划速度和加速度占关节最大线转速和加速度的百分比    |
|   `r`  |    `int`    |   交融半径百分比系数，0-100  |
|   `connect`  |    `int`    |   轨迹连接标志</br>0：立即规划并执行轨迹，不与后续轨迹连接。</br> 1：将当前轨迹与下一条轨迹一起规划，但不立即执行。阻塞模式下，即使发送成功也会立即返回。 |
|   `block`  |    `int`    |   阻塞设置</br>多线程模式：</br>0：非阻塞模式，发送指令后立即返回。</br> 1：阻塞模式，等待机械臂到达目标位置或规划失败后才返回。</br>单线程模式</br>0：非阻塞模式。</br>其他值：阻塞模式并设置超时时间，单位为秒。 |

>注意:使用单线程阻塞模式时，请设置超时时间确保轨迹在超时时间内运行结束返回。<br>

- **返回值:** </br>
函数执行的状态码：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |
|  -4  |    `int`   |   当前到位设备校验失败，即当前到位设备不为关节。   |
|  -5  |    `int`   |   单线程模式超时未接收到返回，请确保超时时间设置合理。   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_movej_p([0.3, 0, 0.3, 3.14, 0, 0], 20, 0, 0, 1))

arm.rm_delete_robot_arm()
```

## 角度透传控制`rm_movej_canfd()`

- **方法原型：**

```python
rm_movej_canfd(self, joint: list[float], follow: bool, expand: float = 0) -> int:
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `joint`  |    `list[float]`    |    关节1~7目标角度数组,单位：°度。   |
|   `follow`  |    `bool`   | true-高跟随，false-低跟随。若使用高跟随，透传周期要求不超过 10ms。  |
|   `expand`  |    `int, optional`    |   如果存在通用扩展轴，并需要进行透传，可使用该参数进行透传发送，默认为0。 |

- **返回值:** </br>
函数执行的状态码：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_movej_canfd([0,0,0,0,0,0], False))

arm.rm_delete_robot_arm()
```

> 角度不经规划，直接通过CANFD透传给机械臂。角度透传到 CANFD，若指令正确，机械臂立即执行。</br>透传效果受通信周期和轨迹平滑度影响，因此要求通信周期稳定，避免大幅波动。</br>
> 用户在使用此功能时，建议进行良好的轨迹规划，以确保机械臂的稳定运行。</br>
> 第三代有线网口周期最快可达2ms，提供了更高的实时性。

## 位姿透传（CANFD）`rm_movep_canfd()`

- **方法原型：**

```python
rm_movep_canfd(self, pose: list[float], follow: bool) -> int:
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `joint`  |    `list[float]`    |    关节1~7目标角度数组,单位：°度   |
|   `follow`  |    `bool`   | true-高跟随，false-低跟随。若使用高跟随，透传周期要求不超过 10ms。  |

- **返回值:** </br>
函数执行的状态码：

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_movep_canfd([0,0,0.879,0,0,0],False))

arm.rm_delete_robot_arm()
```

> 当目标位姿被透传到机械臂控制器时，控制器首先尝试进行逆解计算。 若逆解成功且计算出的各关节角度与当前角度差异不大，则直接下发至关节执行，跳过额外的轨迹规划步骤。 这一特性适用于需要周期性调整位姿的场景，如视觉伺服等应用。</br>透传效果受通信周期和轨迹平滑度影响，因此要求通信周期稳定，避免大幅波动。</br>
用户在使用此功能时，建议进行良好的轨迹规划，以确保机械臂的稳定运行。</br>
第三代有线网口周期最快可达2ms，提供了更高的实时性。
