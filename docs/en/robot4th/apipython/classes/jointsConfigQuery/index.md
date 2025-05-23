# <p class="hidden">Python: </p>Joint Configuration Query `JointConfigReader`

It is used to query the maximum speed, acceleration, limits, etc., of joints and drivers. The following is a detailed description of the member functions of the joint configuration query `JointConfigReader`, including the method prototype, parameter description, return value, and usage demo.

## Query the maximum joint speed`rm_get_joint_max_speed()`

- **Method prototype:**

```python
rm_get_joint_max_speed(self) -> tuple[int, list]:
```

- **Return value:**

`tuple[int, list]`: a tuple containing two elements.

1. `return_code()`: a state code executed by functions.
0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Maximum joint speed.
|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|  list |    `float`    |    Maximum joint speed, in °/s.   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *
# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)
print(arm.rm_get_joint_max_speed())
arm.rm_delete_robot_arm()
```

## Query the maximum joint acceleration`rm_get_joint_max_acc()`

- **Method prototype:**

```python
rm_get_joint_max_acc(self) -> tuple[int, list]:
```

- **Return value:**
`tuple[int, list]`: a tuple containing two elements.

1. `return_code()`: a state code executed by functions.
0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Maximum joint acceleration.
|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|  list |    `float`    |    Maximum joint acceleration, in °/s.   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *
# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)
print(arm.rm_get_joint_max_acc())
arm.rm_delete_robot_arm()
```

## Query the minimum joint limit`rm_get_joint_min_pos()`

- **Method prototype:**

```python
rm_get_joint_min_pos(self) -> tuple[int, list]:
```

- **Return value:**
tuple[int, list]: a tuple containing two elements. <br>

1. `return_code()`: a state code executed by functions.
0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Minimum joint positions.
|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|  list |    `float`    |    Array of minimum joint positions, with a length corresponding to the number of joints in the robotic arm, in °.  |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *
# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)
print(arm.rm_get_joint_min_pos())
arm.rm_delete_robot_arm()
```

## Query the maximum joint limit`rm_get_joint_max_pos()`

- **Method prototype:**

```python
rm_get_joint_max_pos(self) -> tuple[int, list]:
```

- **Return value:** <br>
`tuple[int, list]`: a tuple containing two elements. <br>

1. `return_code()`: a state code executed by functions.
0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Maximum joint positions.
|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|  list |    `float`    |    Array of maximum joint positions, with a length corresponding to the number of joints in the robotic arm, in °.  |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *
# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)
print(arm.rm_get_joint_max_pos())
arm.rm_delete_robot_arm()
```

## Query the maximum joint speed (driver)`rm_get_joint_drive_max_speed()`

- **Method prototype:**

```python
rm_get_joint_drive_max_speed(self) -> tuple[int, list]:
```

- **Return value:** <br>
`tuple[int, list]`: a tuple containing two elements.

1. `return_code()`: a state code executed by functions.
0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Maximum joint speed.
|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|  list |    `float`    |    Maximum joint speed   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_joint_drive_max_speed())

arm.rm_delete_robot_arm()
```

## Query the maximum joint acceleration (driver)`rm_get_joint_drive_max_acc()`

- **Method prototype:**

```python
rm_get_joint_drive_max_acc(self) -> tuple[int, list]:
```

- **Return value:** <br>
`tuple[int, list]`: a tuple containing two elements. <br>

1. `return_code()`: a state code executed by functions.
0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Maximum acceleration of each joint.
|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|  list |    `float`    |    Maximum acceleration of each joint   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_joint_drive_max_acc())

arm.rm_delete_robot_arm()
```

## Query the minimum joint limit (driver)`rm_get_joint_drive_min_pos()`

- **Method prototype:**

```python
rm_get_joint_drive_min_pos(self) -> tuple[int, list]:
```

- **Return value:** <br>
`tuple[int, list]`: a tuple containing two elements. <br>

1. `return_code()`: a state code executed by functions.
0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Minimum joint positions.
|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|  list |    `float`    |    Array of minimum joint positions, with a length corresponding to the number of joints in the robotic arm, in °   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_joint_drive_min_pos())

arm.rm_delete_robot_arm()
```

## Query the maximum joint limit (driver)`rm_get_joint_drive_max_pos()`

- **Method prototype:**

```python
rm_get_joint_drive_max_pos(self) -> tuple[int, list]:
```

- **Return value:** <br>
`tuple[int, list]`: a tuple containing two elements. <br>

1. `return_code()`: a state code executed by functions.
0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Maximum joint positions.
|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|  list |    `float`    |    Array of maximum joint positions, with a length corresponding to the number of joints in the robotic arm, in °   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_joint_drive_max_pos())

arm.rm_delete_robot_arm()
```

## Get the joint enabling state`rm_get_joint_en_state()`

- **Method prototype:**

```python
rm_get_joint_en_state(self) -> tuple[int, list]:
```

- **Return value:** <br>
`tuple[int, list]`: a tuple containing two elements. <br>

1. `return_code()`: a state code executed by functions.
0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Enabling state of each joint.
|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|  list |    `float`    |    Array of enabling state of each joint, with a length corresponding to the number of joints in the robotic arm, in °  |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_joint_en_state())

arm.rm_delete_robot_arm()
```

## Get the joint error code`rm_get_joint_err_flag()`

- **Method prototype:**

```python
rm_get_joint_err_flag(self) -> dict[str, any]:
```

- **Return value:** <br>
`tuple[int, list]`: a tuple containing two elements. <br>

1. `return_code()`: a state code executed by functions.
0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. State of each joint.
|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|  `err_flag` |    `list[float]`    |    List of floats, representing the error flags for each joint. <br>If arm_dof is not 0, the length of the list will be equal to arm_dof; otherwise, the default ARM_DOF length will be used.  |
|  `brake_state` |    `list[float]`    |    List of floats, representing the brake state of each joint. <br>If arm_dof is not 0, the length of the list will be equal to arm_dof; otherwise, the default ARM_DOF length will be used.  |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_joint_err_flag())

arm.rm_delete_robot_arm()
```
