# <p class="hidden">Python: </p>System Configuration `ControllerConfig`

It is used for system configuration (e.g., robotic arm state and power). The following is a detailed description of the member functions of the system configuration `ControllerConfig`, including the method prototype, parameter description, return value, and usage demo.

## Get the controller state `rm_get_controller_state()`

- **Method prototype:**

```python
rm_get_controller_state(self) -> dict[str, any]:
```

- **Return value:** <br>
`dict[str,any]`: a dictionary containing the following keys. <br>

1. int: state codes executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. System state

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   `voltage`  |    `float`   |     Returned voltage   |
|   `current`  |    `float`   |    Returned current    |
|   `temperature`  |    `float`   |    Returned temperature    |
|   `sys_err`  |    `int`   |    System error code    |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_controller_state())

arm.rm_delete_robot_arm()
```

## Set the robotic arm power `rm_set_arm_power()`

- **Method prototype:**

```python
rm_set_arm_power(self, power: int) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `power`      | `int` | 1: power on, 0: power off.                   |

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

# Power on the robotic arm
print(arm.rm_set_arm_power(1))

arm.rm_delete_robot_arm()
```

## Get the power state of the robotic arm `rm_get_arm_power_state()`

- **Method prototype:**

```python
rm_get_arm_power_state(self) -> tuple[int, int]:
```

- **Return value:** <br>
`tuple[int, int]`: a tuple containing two elements

1. int: state codes executed by functions.

    0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Robotic arm power state

    |   Parameter    |  Type    |   Description    |
    | :--- | :--- | :---|
    |   -  |    `int`   |   Obtained power state of the robotic arm, 1: power on, 0: power off    |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_arm_power_state())

arm.rm_delete_robot_arm()
```

## Get the cumulative runtime of the controller `rm_get_system_runtime()`

- **Method prototype:**

```python
rm_get_system_runtime(self) -> dict[str, any]:
```

- **Return value:** <br>
`tuple[int, int]`: a tuple containing two elements

1. int: state codes executed by functions.

    0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Controller runtime

    |   Parameter    |  Type    |   Description    |
    | :--- | :--- | :---|
    |   `day`  |    `int`   |    Read time    |
    |   `hour`  |    `int`   |   Read time    |
    |   `min`  |    `int`   |    Read time    |
    |   `sec`  |    `int`   |    Read time    |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_system_runtime())

arm.rm_delete_robot_arm()
```

## Clear the cumulative runtime of the controller `rm_clear_system_runtime()`

- **Method prototype:**

```python
rm_clear_system_runtime(self) -> int:
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

print(arm.rm_clear_system_runtime())

arm.rm_delete_robot_arm()
```

## Get the cumulative rotation angle of the joint `rm_get_joint_odom()`

- **Method prototype:**

```python
rm_get_joint_odom(self) -> tuple[int, list[float]]:
```

- **Return value:** <br>
`tuple[int, list[float]]`: a tuple containing two elements. <br>

1. int: state codes executed by functions.

    0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Cumulative joint rotation angle

    |   Parameter    |  Type    |   Description    |
    | :--- | :--- | :---|
    |   -  |    `list[float]`   |    Cumulative rotation angle of each joint    |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_joint_odom())

arm.rm_delete_robot_arm()
```

## Clear the cumulative rotation angle of the joint `rm_clear_joint_odom()`

- **Method prototype:**

```python
int rm_clear_joint_odom(self) -> int:
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

print(arm.rm_clear_joint_odom())

arm.rm_delete_robot_arm()
```

## Get the software information of the robotic arm `rm_get_arm_software_info()`

- **Method prototype:**

```python
rm_get_arm_software_info(self) -> tuple[int, dict[str, any]]:
```

- **Return value:** <br>

`tuple[int, dict[str,any]]`: a tuple containing two elements

1. int: state codes executed by functions.

    0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Robotic arm software version information

    |   Parameter    |  Type    |   Description    |
    | :--- | :--- | :---|
    |   `rm_arm_software_version_t`  |    `dict[str,any]`   |   Dictionary of the robotic arm software version information, key: field name of rm_arm_software_version_t |

    *Jump to [rm_arm_software_version_t](../../struct/armSoftwareVersion/index.md) for details of the structure.*

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_arm_software_info())

arm.rm_delete_robot_arm()
```

## Set the wired network IP address `rm_set_netip()`

- **Method prototype:**

```python
rm_set_netip(self, ip: str) -> int:
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

# Set the IP address of the robotic arm to "192.168.1.19"
print(arm.rm_set_netip("192.168.1.19"))

arm.rm_delete_robot_arm()
```

## Clear the system error `rm_clear_system_err()`

- **Method prototype:**

```python
rm_clear_system_err(self) -> int:
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

print(arm.rm_clear_system_err())

arm.rm_delete_robot_arm()
```
