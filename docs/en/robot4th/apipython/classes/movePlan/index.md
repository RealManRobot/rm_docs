# <p class="hidden">Python: </p>Robotic Arm Trajectory Control `MovePlan`

It is used to plan the robotic arm's trajectory. The following is a detailed description of the member functions of the robotic arm trajectory planning command `MovePlan`, including the method prototype, parameter description, return value, and usage demo.

## Joint motions in space `rm_movej()`

- **Method prototype:**

```python
rm_movej(self, joint: list[float], v: int, r: int, connect: int, block: int) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `joint`  |    `list`    |    Array of target angles of each joint, in °.   |
|   `v`  |    `int`    |    Velocity ratio: 1−100, indicating the percentage of the planned velocity and acceleration to the maximum linear velocity and acceleration of the joint.   |
|   `r`  |    `int`    |   Percentage coefficient of blend radius, 0−100.  |
|   `connect`  |    `int`    |   Trajectory connection signs<br>0: Plan and execute the trajectory immediately, not connecting the following trajectory. <br>1: Plan the current trajectory together with the following trajectory, but do not execute it immediately. In blocking mode, even if the trajectory is transmitted successfully, it will be returned immediately. |
| `block` | `int` | Blocking settings: <br>multi-thread mode: <br>0: non-blocking mode, immediately return after sending commands; <br>1: blocking mode, return after the robotic arm reaches the target position or the planning fails; <br>single-thread mode: <br>0: non-blocking mode; <br>other values: blocking mode, and timeout period setting, in s. |

::: warning

- For single-thread blocking mode, set the timeout period to return the trajectory after running within the timeout period. <br>
- The blend radius is valid only when trajectory_connect is 1, and is invalid when trajectory_connect is 0.
:::

- **Return value:** <br>
State codes executed by functions:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Joint blocking movement to [0, 20, 70, 0, 90, 0]
print(arm.rm_movej([0, 20, 70, 0, 90, 0], 20, 0, 0, 1))

arm.rm_delete_robot_arm()
```

## Cartesian-space straight-line motion `rm_movel()`

- **Method prototype:**

```python
rm_movel(self, pose: list[float], v: int, r: int, connect: int, block: int) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `pose`  |    `list[float]`    |    Target pose, unit of position: m; unit of orientation: radian   |
|   `v`  |    `int`    |    Velocity ratio: 1−100, indicating the percentage of the planned velocity and acceleration to the maximum linear velocity and acceleration of the joint    |
|   `r`  |    `int`    |   Percentage coefficient of blend radius, 0−100  |
|   `connect`  |    `int`    |   Trajectory connection signs<br>0: Plan and execute the trajectory immediately, not connecting the following trajectory. <br>1: Plan the current trajectory together with the following trajectory, but do not execute it immediately. In blocking mode, even if the trajectory is transmitted successfully, it will be returned immediately. |
| `block` | `int` | Blocking settings: <br>multi-thread mode: <br>0: non-blocking mode, immediately return after sending commands; <br>1: blocking mode, return after the robotic arm reaches the target position or the planning fails; <br>single-thread mode: <br>0: non-blocking mode; <br>other values: blocking mode, and timeout period setting, in s. |

::: warning

- For single-thread blocking mode, set the timeout period to return the trajectory after running within the timeout period. <br>
- The blend radius is valid only when trajectory_connect is 1, and is invalid when trajectory_connect is 0.
:::

- **Return value:** <br>
State codes executed by functions:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_movej_p([0.2, 0, 0.4, 3.141, 0, 0], 20, 0, 0, 1))
print(arm.rm_movel([0.3, 0, 0.4, 3.141, 0, 0], 20, 0, 0, 1))

arm.rm_delete_robot_arm()
```

## Cartesian Space Linear Offset Motion `rm_movel_offset()`

- **Method prototype:**

```python
rm_movel_offset(self, pose: list[float], v: int, r: int, connect: int, frame_type: int, block: int) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `offset`  |    `list[float]`    |    Position and orientation offset, position unit: meters, orientation unit: radians.    |
|   `v`  |    `int`    |    Velocity ratio: 1−100, indicating the percentage of the planned velocity and acceleration to the maximum linear velocity and acceleration of the joint.    |
|   `r`  |    `int`    |   Percentage coefficient of blend radius, 0−100.  |
|   `connect`  |    `int`    |   Trajectory connection signs<br>0: Plan and execute the trajectory immediately, not connecting the following trajectory. <br>1: Plan the current trajectory together with the following trajectory, but do not execute it immediately. In blocking mode, even if the trajectory is transmitted successfully, it will be returned immediately. |
|  `frame_type`  |    Input    |   Reference coordinate system type: 0 - Work coordinate system, 1 - Tool coordinate system.    |
| `block` | `int` | Blocking settings: <br>multi-thread mode: <br>0: non-blocking mode, immediately return after sending commands; <br>1: blocking mode, return after the robotic arm reaches the target position or the planning fails; <br>single-thread mode: <br>0: non-blocking mode; <br>other values: blocking mode, and timeout period setting, in s. |

::: warning

- For single-thread blocking mode, set the timeout period to return the trajectory after running within the timeout period. <br>
- The blend radius is valid only when trajectory_connect is 1, and is invalid when trajectory_connect is 0.
:::

- **Return value:** <br>
State codes executed by functions:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_movej_p([0.2, 0, 0.4, 3.141, 0, 0], 20, 0, 0, 1))
# Current work coordinate system blocking offset motion, offset along the x-axis forward 0.05 meters
print(arm.rm_movel_offset([0.05, 0, 0, 0.0, 0.0, 0.0],5,0,0,0,1))

arm.rm_delete_robot_arm()
```

## Spline curve motion `rm_moves()`

- **Method prototype:**

```python
rm_moves(self, pose: list[float], v: int, r: int, connect: int, block: int) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `pose`  |    `list[float]`    |    Target pose, unit of position: m; unit of orientation: radian   |
|   `v`  |    `int`    |    Velocity ratio: 1−100, indicating the percentage of the planned velocity and acceleration to the maximum linear velocity and acceleration of the joint    |
|   `r`  |    `int`    |   Percentage coefficient of blend radius, 0−100  |
|   `connect`  |    `int`    |   Trajectory connection signs<br>0: Plan and execute the trajectory immediately, not connecting the following trajectory. <br>1: Plan the current trajectory together with the following trajectory, but do not execute it immediately. In blocking mode, even if the trajectory is transmitted successfully, it will be returned immediately. |
| `block` | `int` | Blocking settings: <br>multi-thread mode: <br>0: non-blocking mode, immediately return after sending commands; <br>1: blocking mode, return after the robotic arm reaches the target position or the planning fails; <br>single-thread mode: <br>0: non-blocking mode; <br>other values: blocking mode, and timeout period setting, in s. |

::: warning

- For spline curve motion, at least three points need to be issued continuously (connect is set to 1); otherwise, the trajectory will be a straight line.<br>
- For single-thread blocking mode, set the timeout period to return the trajectory after running within the timeout period.
:::

- **Return value:** <br>
State codes executed by functions:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_movej_p([0.3, 0, 0.3, 3.14, 0, 0], 20, 0, 0, 1))
print(arm.rm_moves([0.3, 0, 0.3, 3.14, 0, 0], 20, 0, 1, 1))
print(arm.rm_moves([0.3, 0.1, 0.3, 3.14, 0, 0], 20, 0, 1, 1))
print(arm.rm_moves([0.2, 0.1, 0.3, 3.14, 0, 0], 20, 0, 0, 1))

arm.rm_delete_robot_arm()
```

## Cartesian-space arc motion `rm_movel()`

- **Method prototype:**

```python
rm_movec(self, pose_via: list[float], pose_to: list[float], v: int, r: int, loop: int, connect: int, block: int) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `pose`  |    `list[float]`    |    Pose of via-point, unit of position: m; unit of orientation: radian   |
|   `pose`  |    `list[float]`    |    Pose of final point, unit of position: m; unit of orientation: radian   |
|   `v`  |    `int`    |    Velocity ratio: 1−100, indicating the percentage of the planned velocity and acceleration to the maximum linear velocity and acceleration of the joint    |
|   `loop`  |    `int`    |    Planned number of loops    |
|   `r`  |    `int`    |   Percentage coefficient of blend radius, 0−100  |
|   `connect`  |    `int`    |   Trajectory connection signs<br>0: Plan and execute the trajectory immediately, not connecting the following trajectory. <br>1: Plan the current trajectory together with the following trajectory, but do not execute it immediately. In blocking mode, even if the trajectory is transmitted successfully, it will be returned immediately. |
| `block` | `int` | Blocking settings: <br>multi-thread mode: <br>0: non-blocking mode, immediately return after sending commands; <br>1: blocking mode, return after the robotic arm reaches the target position or the planning fails; <br>single-thread mode: <br>0: non-blocking mode; <br>other values: blocking mode, and timeout period setting, in s. |

::: warning

- For single-thread blocking mode, set the timeout period to return the trajectory after running within the timeout period. <br>
- The blend radius is valid only when trajectory_connect is 1, and is invalid when trajectory_connect is 0.
:::

- **Return value:** <br>
State codes executed by functions:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
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

## Joint motion in space to target pose`rm_movej_p()`

- **Method prototype:**

```python
rm_movej_p(self, pose: list[float], v: int, r: int, connect: int, block: int) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `pose`  |    `list[float]`    |    Target pose, unit of position: m; unit of orientation: radian   |
|   `v`  |    `int`    |    Velocity ratio: 1−100, indicating the percentage of the planned velocity and acceleration to the maximum linear velocity and acceleration of the joint    |
|   `r`  |    `int`    |   Percentage coefficient of blend radius, 0−100  |
|   `connect`  |    `int`    |   Trajectory connection signs<br>0: Plan and execute the trajectory immediately, not connecting the following trajectory. <br>1: Plan the current trajectory together with the following trajectory, but do not execute it immediately. In blocking mode, even if the trajectory is transmitted successfully, it will be returned immediately. |
| `block` | `int` | Blocking settings: <br>multi-thread mode: <br>0: non-blocking mode, immediately return after sending commands; <br>1: blocking mode, return after the robotic arm reaches the target position or the planning fails; <br>single-thread mode: <br>0: non-blocking mode; <br>other values: blocking mode, and timeout period setting, in s. |

::: warning
For single-thread blocking mode, set the timeout period to return the trajectory after running within the timeout period.
:::

- **Return value:** <br>
State codes executed by functions:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_movej_p([0.3, 0, 0.3, 3.14, 0, 0], 20, 0, 0, 1))

arm.rm_delete_robot_arm()
```

## Angle pass-through (CANFD)`rm_movej_canfd()`

- **Method prototype:**

```python
rm_movej_canfd(self, joint: list[float], follow: bool, expand: float = 0, trajectory_mode: int = 0, radio: int = 0) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `joint`  |    `list[float]`    |    Array of target angles of joints 1 to 7, in °.  |
|   `follow`  |    `bool`   | true: high follow, false: low follow. If high follow is used, the pass-through cycle should not exceed 10 ms.  |
|   `expand`  |    `int, optional`    |   If a universal extension axis exists and pass-through is required, this parameter can be used for pass-through transmission, with a default of 0. |
| `trajectory_mode` | `int` | high follow mode: 0 represents Full Transparency Mode, 1 represents Curve Fitting Mode, and 2 represents Filtering Mode. |
| `radio` | `int` | The smoothing factor for Curve Fitting Mode and Filtering Mode (the higher the value, the better the effect), ranging from 0 to 100. |

- **Return value:** <br>
State codes executed by functions:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_movej_canfd([0,0,0,0,0,0], True, 0, 1, 50))

arm.rm_delete_robot_arm()
```

::: tip

- The angle is directly passed-through to the robotic arm via CANFD without being planned. The angle is passed-through to CANFD. If the command is correct, the robotic arm will execute it immediately. <br>
- The pass-through effect is influenced by the communication cycle and trajectory smoothness. Therefore, it is required that the communication cycle remains stable, avoiding significant fluctuations. <br>
- When using this function, it is recommended to perform proper trajectory planning to ensure the stable operation of the robotic arm. <br>
- The Ethernet port of the controller can attain a pass-through cycle as fast as 2 ms, providing higher real-time performance.
:::

## Pose pass-through (CANFD)`rm_movep_canfd()`

- **Method prototype:**

```python
rm_movep_canfd(self, pose: list[float], follow: bool, trajectory_mode: int = 0, radio: int = 0) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `pose`  |    `list[float]`    |    Array of target angles of joints 1 to 7, in °   |
|   `follow`  |    `bool`   | true: high follow, false: low follow. If high follow is used, the pass-through cycle should not exceed 10 ms.  |
| `trajectory_mode` | `int` | high follow mode: 0 represents Full Transparency Mode, 1 represents Curve Fitting Mode, and 2 represents Filtering Mode. |
| `radio` | `int` | The smoothing factor for Curve Fitting Mode and Filtering Mode (the higher the value, the better the effect), ranging from 0 to 100. |

- **Return value:** <br>
State codes executed by functions:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_movep_canfd([0,0,0.879,0,0,0], True, 1, 60))

arm.rm_delete_robot_arm()
```

::: warning

- When the target pose is passed-through to the robotic arm controller, the controller will first attempt to perform inverse kinematics calculation. If the inverse kinematics calculation succeeds and the calculated joint angles are close to the current angles, they will be directly issued to the joints to execute, while skipping the trajectory planning step. This feature is applicable to scenarios that require periodic adjustments of the pose, such as in visual servo applications. <br>
- The pass-through effect is influenced by the communication cycle and trajectory smoothness. Therefore, it is required that the communication cycle remains stable, avoiding significant fluctuations. <br>
- When using this function, it is recommended to perform proper trajectory planning to ensure the stable operation of the robotic arm. <br>
- The Ethernet port of the controller can attain a pass-through cycle as fast as 2 ms, providing higher real-time performance.
:::

## Joint following motion in space `rm_movej_follow()`

- **Method prototype:**

```python
rm_movej_follow(self, joint: list[float]) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `joint`  |    `list[float]`    |    Array of target angles of joints 1 to 7, in °.  |

- **Return value:** <br>
State codes executed by functions:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *
import time

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

joint_start = [0,-30,90,30,90,0]
joint_end = [0,0,0,0,0,0]
print(arm.rm_movej_follow(joint_start))
time.sleep(2)
print(arm.rm_movej_follow(joint_end))
time.sleep(2)

arm.rm_delete_robot_arm()
```

## Following motion in Cartesian space `rm_movej_follow()`

- **Method prototype:**

```python
rm_movep_canfd(self, pose: list[float], follow: bool) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `pose`  |    `list[float]`    |    Pose (If the pose list length is 7, it is considered to use quaternion representation; if the length is 6, it is considered to use Euler angle representation)   |

- **Return value:** <br>
State codes executed by functions:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *
import time

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_movep_follow([0,0,0.879,0,0,0]))
time.sleep(2)
print(arm.rm_movep_follow([0.3, 0, 0.3, 3.14, 0, 0]))
time.sleep(2)

arm.rm_delete_robot_arm()
```
