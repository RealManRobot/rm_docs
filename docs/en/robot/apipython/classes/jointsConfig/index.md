# <p class="hidden">Python: </p>Joint Configuration `JointConfigSettings`

It is used to configure joint speed, acceleration, limits, enabling state, zero position, error clearing, etc. The following is a detailed description of the member functions of the joint configuration `JointConfigSettings`, including the method prototype, parameter description, return value, and usage demo.

## Set the maximum speed for the specified joint`rm_set_joint_max_speed()`

- **Method prototype:**

```python
rm_set_joint_max_speed(self, joint_num: int, speed: float) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `joint_num`  |    `int`    |    Joint number, ranging from 1 to 7, representing the ID of different joints on the robotic arm.   |
|   `speed`  |    `float`   |   Maximum joint speed, in °/s, defining the highest speed the joint can achieve during motion.   |

- **Return value:**<br>
int: state codes executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_joint_max_speed(1, 180))

arm.rm_delete_robot_arm()
```

## Set the maximum joint acceleration`rm_set_joint_max_acc()`

- **Method prototype:**

```python
rm_set_joint_max_acc(self, joint_num: int, acc: float) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `joint_num`  |    `int`    |    Joint number, ranging from 1 to 7, representing the ID of different joints on the robotic arm.   |
|   `acc`  |    `float`   |   Maximum joint acceleration, in °/s², defining the highest acceleration the joint can achieve during motion.   |

- **Return value:**<br>
int: state codes executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_joint_max_acc(1, 600))

arm.rm_delete_robot_arm()
```

## Set the minimum joint position limit`rm_set_joint_min_pos()`

- **Method prototype:**

```python
rm_set_joint_min_pos(self, joint_num: int, min_pos: float) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `joint_num`  |    `int`    |    Joint number, ranging from 1 to 7, representing the ID of different joints on the robotic arm.   |
|   `min_pos`  |    `float`   |   Minimum joint position, in °.   |

- **Return value:**<br>
int: state codes executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *
# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_joint_min_pos(1, -178))

arm.rm_delete_robot_arm()
```

## Set the maximum joint position limit`rm_set_joint_max_pos()`

- **Method prototype:**

```python
rm_set_joint_max_pos(self, joint_num: int, max_pos: float) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `joint_num`  |    `int`    |    Joint number, ranging from 1 to 7, representing the ID of different joints on the robotic arm.   |
|   `max_pos`  |    `float`   |   Maximum joint position, in °.   |

- **Return value:**<br>
int: state codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_joint_max_pos(1, 178))

arm.rm_delete_robot_arm()
```

## Set the maximum speed for the specified joint`rm_set_joint_drive_max_speed()`

- **Method prototype:**

```python
rm_set_joint_drive_max_speed(self, joint_num: int, speed: float) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `joint_num`  |    `int`    |    Joint number, ranging from 1 to 7, representing the ID of different joints on the robotic arm.   |
|   `speed`  |    `float`   |   Maximum joint speed, in °/s, defining the highest speed the joint can achieve during motion.   |

- **Return value:**<br>
int: state codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_joint_drive_max_speed(1, 180))

arm.rm_delete_robot_arm()
```

## Set the maximum acceleration for the specified joint (driver)`rm_set_joint_drive_max_acc()`

- **Method prototype:**

```python
rm_set_joint_drive_max_acc(self, joint_num: int, acc: float) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `joint_num`  |    `int`    |    Joint number, ranging from 1 to 7, representing the ID of different joints on the robotic arm.   |
|   `acc`  |    `float`    |    Maximum joint acceleration, in °/s².   |

- **Return value:**<br>
int: state codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_joint_drive_max_acc(1, 600))

arm.rm_delete_robot_arm()
```

## Set the minimum limit for the specified joint (driver)`rm_set_joint_drive_min_pos()`

- **Method prototype:**

```python
rm_set_joint_drive_min_pos(self, joint_num: int, min_pos: float) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `joint_num`  |    `int`    |    Joint number, ranging from 1 to 7, representing the ID of different joints on the robotic arm.   |
|   `min_pos`  |    `float`   |   Minimum joint position, in °.   |

- **Return value:**<br>
int: state codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_joint_drive_min_pos(1, -178))

arm.rm_delete_robot_arm()
```

## Set the maximum limit for the specified joint (driver)`rm_set_joint_drive_max_pos()`

- **Method prototype:**

```python
rm_set_joint_drive_max_pos(self, joint_num: int, max_pos: float) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `joint_num`  |    `int`    |    Joint number, ranging from 1 to 7, representing the ID of different joints on the robotic arm.   |
|   `max_pos`  |    `float`   |   Maximum joint position, in °.   |

- **Return value:**<br>
int: state codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_joint_drive_max_pos(1, 178))

arm.rm_delete_robot_arm()
```

## Set the enabling state for the specified joint`rm_set_joint_en_state()`

- **Method prototype:**

```python
rm_set_joint_en_state(self, joint_num: int, en_state: int) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `joint_num`  |    `int`    |    Joint number, ranging from 1 to 7, representing the ID of different joints on the robotic arm.   |
|   `en_state`  |    `int`   |   1: Enable 0: Disable.   |

- **Return value:**<br>
int: state codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_joint_en_state(1, 1))

arm.rm_delete_robot_arm()
```

## Set the current position of the specified joint as the zero position `rm_set_joint_zero_pos()`

- **Method prototype:**

```python
rm_set_joint_zero_pos(self, joint_num: int) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `joint_num`  |    `int`    |    Joint number, ranging from 1 to 7, representing the ID of different joints on the robotic arm.   |

- **Return value:**<br>
int: state codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_joint_zero_pos(1))

arm.rm_delete_robot_arm()
```

## Clear the error codes for the specified joint`rm_set_joint_clear_err()`

- **Method prototype:**

```python
rm_set_joint_clear_err(self, joint_num: int) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `joint_num`  |    `int`    |    Joint number, ranging from 1 to 7, representing the ID of different joints on the robotic arm.   |

- **Return value:**<br>
int: state codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_joint_clear_err(1))

arm.rm_delete_robot_arm()
```

## One-click setting of joint limits`rm_auto_set_joint_limit()`

- **Method prototype:**

```python
rm_auto_set_joint_limit(self, mode: int) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `mode`  |    `int`    |    1: Normal mode, where each joint's limits are defined by the soft limit and hardware limit from the specification parameters.   |

- **Return value:**<br>
int: state codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_auto_set_joint_limit(1))

arm.rm_delete_robot_arm()
```
