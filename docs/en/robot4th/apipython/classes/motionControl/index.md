# <p class="hidden">Python: </p>Robotic Arm Motion State Control `ArmMotionControl`

It is used to control the emergency stop, pause, continuation, and other motion states of the robotic arm. The following is a detailed description of the member functions of `ArmMotionControl` to control the emergency stop, pause, continuation, and other motion states of the robotic arm, including the method prototype, parameter description, return value, and usage demo.

## Set slow stop `rm_set_arm_slow_stop()`

Stop on the currently running trajectory.

- **Method prototype:**

```python
rm_set_arm_slow_stop(self) -> int:
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

print(arm.rm_set_arm_slow_stop())

arm.rm_delete_robot_arm()
```

## Set quick stop `rm_set_arm_stop()`

Stop at the fastest speed with an unrecoverable trajectory.

- **Method prototype:**

```python
rm_set_arm_stop(self) -> int:
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

print(arm.rm_set_arm_stop())

arm.rm_delete_robot_arm()
```

## Set pause `rm_set_arm_pause()`

Pause on the planned trajectory with a recoverable trajectory.

- **Method prototype:**

```python
rm_set_arm_pause(self) -> int:
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

print(arm.rm_set_arm_pause())

arm.rm_delete_robot_arm()
```

## Continue motion on the current trajectory`rm_set_arm_continue()`

Continue motion on the current trajectory after it has been paused.

- **Method prototype:**

```python
rm_set_arm_continue(self) -> int:
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

print(arm.rm_set_arm_continue())

arm.rm_delete_robot_arm()
```

## Delete current trajectory `rm_set_delete_current_trajectory()`

- **Method prototype:**

```python
rm_set_delete_current_trajectory(self) -> int:
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

print(arm.rm_set_delete_current_trajectory())

arm.rm_delete_robot_arm()
```

## Delete all trajectories `rm_set_arm_delete_trajectory()`

- **Method prototype:**

```python
rm_set_arm_delete_trajectory(self) -> int:
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

print(arm.rm_set_arm_delete_trajectory())

arm.rm_delete_robot_arm()
```

## Get the currently planned trajectory `rm_get_arm_current_trajectory()`

- **Method prototype:**

```python
rm_get_arm_current_trajectory(self) -> dict[str, any]:
```

- **Return value:** <br>
`dict[str,any]`: a dictionary containing the following keys. <br>

1. `return_code`(int): a state code executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Returned planning type

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   `trajectory_type`  |    `rm_arm_current_trajectory_e`   |    Returned planning type    |

3. For planning and joint space planning, it stores the angle array of current joints 1−7; for Cartesian space planning, it stores the current end effector pose. <br>

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   `data`  |    `list[float]`   |    For no planning and joint space planning, it stores the angle array of current joints 1−7; for Cartesian space planning, it stores the current end effector pose    |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_arm_current_trajectory())

arm.rm_delete_robot_arm()
```
