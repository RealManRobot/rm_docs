# <p class="hidden">Python: </p>Pass-Through Force-Position Hybrid Control Compensation Configuration `ForcePositionControl`

It is used to set the pass-through force-position hybrid control compensation. The following is a detailed description of the member functions of the pass-through force-position hybrid control compensation configuration `ForcePositionControl`, including the method prototype, parameter description, return value, and usage demo.

## Enable pass-through force-position hybrid control compensation mode`rm_start_force_position_move()`

- **Method prototype:**

```python
rm_start_force_position_move(self) -> int:
```

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

print(arm.rm_start_force_position_move())

arm.rm_delete_robot_arm()
```

## Stop pass-through force-position hybrid control compensation mode`rm_stop_force_position_move()`

- **Method prototype:**

```python
rm_stop_force_position_move(self) -> int:
```

- **Return value:** <br>
State codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_stop_force_position_move())

arm.rm_delete_robot_arm()
```

## Pass-through force-position hybrid angle compensation `rm_force_position_move_joint()`

- **Method prototype:**

```python
rm_force_position_move_joint(self, joint: list[float], sensor: int, mode: int, dir: int, force: float, follow: bool) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| joint      | `list[float]` | Target joint angle, in °             |
|   sensor  |    `int`    |    Sensor type, 0: 1-DoF force, 1: 6-DoF force  |
|   mode  |    `int`    |    Mode, 0: along the base frame, 1: along the end frame  |
|   dir  |    `int`    |    Force control direction, 0−5: X/Y/Z/Rx/Ry/Rz. For the 1-DoF force type, the default direction is the Z-axis  |
| force      | `float` | Magnitude of the force, in N  |
|   follow  |    `bool`    |    Enable/Disable high follow  |

- **Return value:** <br>
State codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Control the 2 N force of the 6-DoF force sensor along the Z-axis of the tool frame, and set high follow for the pass-through angle
print(arm.rm_force_position_move_joint([0, 0, 0, 0, 0, 0], 1, 1, 2, 2, True))

arm.rm_delete_robot_arm()
```

## Pass-through force-position hybrid pose compensation `rm_force_position_move_pose()`

- **Method prototype:**

```python
rm_force_position_move_pose(self, pose: list[float], sensor: int, mode: int, dir: int, force: float, follow: bool) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `pose`      | `list[float]` |  Target pose list in the current frame, with orientation represented by the Euler angle or the quaternion. The orientation is represented by the Euler angle if the list length is 6 or by the orientation if the list length is 7.     |
|   `sensor`  |    `int`    |    Sensor type, 0: 1-DoF force, 1: 6-DoF force.  |
|   `mode`  |    `int`    |    Mode, 0: along the base frame, 1: along the end frame.  |
|   `dir`  |    `int`    |    Force control direction, 0−5: X/Y/Z/Rx/Ry/Rz. For the 1-DoF force type, the default direction is the Z-axis.  |
|  `force`   | `float` | Magnitude of the force, in N.  |
|   `follow`  |    `bool`    |    Enable/Disable high follow.  |

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

# Get the current pose
ret = arm.rm_get_current_arm_state()
print(f"pose{ret[1]['pose']}")

# Control the 2 N force of the 6-DoF force sensor along the Z-axis of the tool frame, and set high follow for the pass-through pose
print(arm.rm_force_position_move_pose(ret[1]["pose"], 1, 1, 2, 2, True))

arm.rm_delete_robot_arm()
```

## Pass-through force-position hybrid compensation `rm_force_position_move()`

- **Method prototype:**

```python
rm_force_position_move(self, param:rm_force_position_move_t) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_force_position_move_t` | Pass-through force-position hybrid compensation parameters.     |

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

joint = [0, 40, 50, 0, 90, 0]
arm.rm_movej(joint, 20, 0, 0, 1)

joint[2] += 0.01
param = rm_force_position_move_t(flag=0, joint=joint, sensor=1, mode=1, follow=False,
                                                 control_mode=[3, 3, 4, 3, 3, 3],
                                                 desired_force=[0, 0, 0, 0, 0, 0],
                                                 limit_vel=[0.1, 0.1, 0.1, 10, 10, 10])
arm.rm_force_position_move(param)                                                 

arm.rm_delete_robot_arm()
```
