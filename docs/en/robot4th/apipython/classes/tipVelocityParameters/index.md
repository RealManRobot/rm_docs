# <p class="hidden">Python: </p>Robotic Arm Motion Parameter Configuration `ArmTipVelocityParameters`

It is used to set and get the motion parameters of the robotic arm. The following is a detailed description of the member functions of the robotic arm motion parameter `ArmTipVelocityParameters`, including the method prototype, parameter description, return value, and usage demo.

## Set the maximum linear speed of the end effector`rm_set_arm_max_line_speed()`

- **Method prototype:**

```python
rm_set_arm_max_line_speed(self, speed: float) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `speed`  |    `float`    |    Maximum linear speed of the end effector, in m/s.   |

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

print(arm.rm_set_arm_max_line_speed(0.25))

arm.rm_delete_robot_arm()
```

## Set the maximum linear acceleration of the end effector`rm_set_arm_max_line_acc()`

- **Method prototype:**

```python
rm_set_arm_max_line_acc(self, acc: float) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `acc`  |    `float`    |    Maximum linear acceleration of the end effector, in m/s^2.   |

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

print(arm.rm_set_arm_max_line_acc(1.6))

arm.rm_delete_robot_arm()
```

## Set the maximum angular speed of the end effector`rm_set_arm_max_angular_speed()`

- **Method prototype:**

```python
rm_set_arm_max_angular_speed(self, speed: float) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `speed`  |    `float`    |    Maximum angular speed of the end effector, in rad/s.   |

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

print(arm.rm_set_arm_max_angular_speed(0.6))

arm.rm_delete_robot_arm()
```

## Set the maximum angular speed of the end effector`rm_set_arm_max_angular_acc()`

- **Method prototype:**

```python
rm_set_arm_max_angular_acc(self, acc: float) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `acc`  |    `float`    |    Maximum angular acceleration of the end effector, in rad/s^2    |

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

print(arm.rm_set_arm_max_angular_acc(4))

arm.rm_delete_robot_arm()
```

## Set the end effector parameters to defaults`rm_set_arm_tcp_init()`

- **Method prototype:**

```python
rm_set_arm_tcp_init(self) -> int:
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

# Initialize the parameters of the robotic arm, and the end effector parameters will be restored to defaults. The defaults of the end effector are:
# Linear speed: 0.1 m/s; linear acceleration: 0.5 m/s²
# Angular speed: 0.2 rad/s; angular acceleration: 1 rad/s²
print(arm.rm_set_arm_tcp_init())

arm.rm_delete_robot_arm()
```

## Set the dynamic collision stage of the robotic arm`rm_set_collision_state()`

- **Method prototype:**

```python
rm_set_collision_state(self, stage: int) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `stage`  |    `int`    |    Stage: 0-8, 0: no collision detection, 8: most sensitive collision detection.   |

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

# Set the collision stage of the robotic arm to 1
print(arm.rm_set_collision_state(1))

arm.rm_delete_robot_arm()
```

## Get the collision stage `rm_get_collision_stage()`

- **Method prototype:**

```python
rm_get_collision_stage(self) -> tuple[int, int]:
```

- **Return value:** <br>
`tuple[int,int]`: a tuple containing two elements. <br>

1. State codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Collision stage

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   0～8  |    `int`   |    Stage: 0-8, 0: no collision detection, 8: most sensitive collision detection.     |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_collision_stage())

arm.rm_delete_robot_arm()
```

## Get the maximum linear speed of the end effector`rm_get_arm_max_line_speed()`

- **Method prototype:**

```python
rm_get_arm_max_line_speed(self) -> tuple[int, float]:
```

- **Return value:** <br>
`tuple[int,int]`: a tuple containing two elements. <br>

1. State codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Maximum linear speed of the end effector

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   -  |    `float`   |    Maximum linear speed of the end effector, in m/s.     |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_arm_max_line_speed())

arm.rm_delete_robot_arm()
```

## Get the maximum linear acceleration of the end effector`rm_get_arm_max_line_acc()`

- **Method prototype:**

```python
rm_get_arm_max_line_acc(self) -> tuple[int, float]:
```

- **Return value:** <br>
`tuple[int,float]`: a tuple containing two elements. <br>

1. State codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Maximum linear acceleration of the end effector

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   -  |    `float`   |    Maximum linear acceleration of the end effector, in m/s^2.     |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_arm_max_line_acc())

arm.rm_delete_robot_arm()
```

## Get the maximum angular speed of the end effector`rm_get_arm_max_angular_speed()`

- **Method prototype:**

```python
rm_get_arm_max_angular_speed(self) -> tuple[int, float]:
```

- **Return value:** <br>
`tuple[int,float]`: a tuple containing two elements. <br>

1. State codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

1. Maximum angular speed of the end effector

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   -  |    `float`   |    Maximum angular speed of the end effector, in rad/s.     |

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_arm_max_angular_speed())

arm.rm_delete_robot_arm()
```

## Get the maximum angular acceleration of the end effector`rm_get_arm_max_angular_acc()`

- **Method prototype:**

```python
rm_get_arm_max_angular_speed(self) -> tuple[int, float]:
```

- **Return value:** <br>
`tuple[int,float]`: a tuple containing two elements. <br>

1. State codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

1. Maximum angular acceleration of the end effector

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   -  |    `float`   |    Maximum angular acceleration of the end effector, in rad/s^2.     |

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_arm_max_angular_acc())

arm.rm_delete_robot_arm()
```

## Set the Robot Arm DH Parameters `rm_set_DH_data()`

- **Method prototype**:

```python
rm_set_DH_data(self, dh_data: rm_dh_t) -> int:
```

*Jump to [rm_dh_t](../../struct/dh/index.md) for details of the structure.*

- **Parameter description**:

|   Name    |   Type    |   Description    |
| :--- | :--- | :--- |
|   `dh_data`  |    `rm_dh_t`    |    Set the current DH parameters.  |

- **Return value**: <br>
The status code of the function execution:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create a robot arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Set the current DH parameters for the robot arm (example values; modify according to actual DH parameters)
dh_data = rm_dh_t(a=[0, 0, 0, 0, 0, 0], d=[0, 0, 0, 0, 0, 0], alpha=[0, 0, 0, 0, 0, 0], offset=[0, 0, 0, 0, 0, 0])
print(arm.rm_set_DH_data(dh_data))

arm.rm_delete_robot_arm()
```

## Get the Robot Arm DH Parameters `rm_get_DH_data()`

- **Method prototype**:

```python
rm_get_DH_data(self) -> tuple[int, rm_dh_t]:
```

*Jump to [rm_dh_t](../../struct/dh/index.md) for details of the structure.*

- **Return value**: <br>
`tuple[int,rm_dh_t]`: A tuple containing two elements.<br>

1. **int**: The status code of the function execution

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. **rm_dh_t**: The current DH parameters

|   Parameter    |  Type   |   Description    |
| :--- | :--- | :---|
|   -  |    `rm_dh_t`   |    Current DH parameters of the robot arm.  |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create a robot arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

[ret, dh] = arm.rm_get_DH_data()
print(dh.to_dict())

arm.rm_delete_robot_arm()
```

## Restore the Default Robot Arm DH Parameters `rm_set_DH_data_default()`

- **Method prototype**:

```python
rm_set_DH_data_default(self) -> int:
```

- **Return value**: <br>
The status code of the function execution:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create a robot arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Restore the default DH parameters of the robot arm
print(arm.rm_set_DH_data_default())

arm.rm_delete_robot_arm()
```
