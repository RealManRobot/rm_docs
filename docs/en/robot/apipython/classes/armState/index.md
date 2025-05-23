# <p class="hidden">Python: </p>Get the Robotic Arm State `ArmState`

It is used to get the robotic arm state. The following is a detailed description of the member functions of getting the robotic arm state `ArmState`, including the method prototype, parameter description, return value, and usage demo.

## Get the current robotic arm state `rm_get_current_arm_state()`

- **Method prototype:**

```python
rm_get_current_arm_state(self) -> tuple[int, dict[str, any]]:
```

- **Return value:** <br>
`tuple[int, dict[str,any]]`: a tuple containing two elements.

1. State codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Current robotic arm state

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   `rm_current_arm_state_t`  |    `dict`   |    Dictionary of the current robotic arm state, key: parameters of rm_current_arm_state_t.   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_current_arm_state())

arm.rm_delete_robot_arm()
```

## Get the current joint temperature `rm_get_current_joint_temperature()`

- **Method prototype:**

```python
rm_get_current_joint_temperature(self) -> tuple[int, list[float]]:
```

- **Return value:** <br>
`tuple[int, list[float]]`: a tuple containing two elements.

1. State codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Robotic arm joint temperature

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   -  |    `list[float]`   |    Temperature array of joints 1−7, in °C  |

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_current_joint_temperature())

arm.rm_delete_robot_arm()
```

## Get the current joint current `rm_get_current_joint_current()`

- **Method prototype:**

```python
rm_get_current_joint_current(self) -> tuple[int, list[float]]:
```

- **Return value:** <br>
`tuple[int, list[float]]`: a tuple containing two elements.

1. State codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Robotic arm joint current

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   -  |    `list[float]`   |    Current array of joints 1−7, in mA  |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_current_joint_current())

arm.rm_delete_robot_arm()
```

## Get the current joint voltage `rm_get_current_joint_voltage()`

- **Method prototype:**

```python
rm_get_current_joint_voltage(self) -> tuple[int, list[float]]:
```

- **Return value:** <br>
`tuple[int, list[float]]`: a tuple containing two elements.

1. State codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Robotic arm joint voltage

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   -  |    `list[float]`   |    Voltage array of joints 1−7, in V  |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_current_joint_voltage())

arm.rm_delete_robot_arm()
```

## Set the initial pose of the robotic arm `rm_set_init_pose()`

- **Method prototype:**

```python
int rm_set_init_pose(self, joint: list[float]) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   joint  |    `list[float]`    |    Joint angle array for the robotic arm's initial pose    |

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

print(arm.rm_set_init_pose())

arm.rm_delete_robot_arm()
```

## Get the initial pose of the robotic arm `rm_get_init_pose()`

- **Method prototype:**

```python
rm_get_init_pose(self) -> tuple[int, list[float]]:
```

- **Return value:** <br>
`tuple[int, list[float]]`: a tuple containing two elements.

1. State codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Joint angle for the robotic arm's initial pose

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   -  |    `list[float]`   |   Joint angle array for the robotic arm's initial pose, in ° |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_init_pose())

arm.rm_delete_robot_arm()
```

## Get the current joint angle `rm_get_joint_degree()`

- **Method prototype:**

```python
rm_get_joint_degree(self) -> tuple[int, list[float]]:
```

- **Return value:** <br>
`tuple[int, list[float]]`: a tuple containing two elements.

1. State codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Joint angle for the robotic arm's initial pose

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   -  |    `list[float]`   |   Joint angle array for the robotic arm's initial pose, in ° |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_joint_degree())

arm.rm_delete_robot_arm()
```

## Get all robotic arm states `rm_get_arm_all_state()`

- **Method prototype:**

```python
rm_get_arm_all_state(self) -> tuple[int, dict[str, any]]:
```

- **Return value:** <br>
`tuple[int, dict[str, any]]`: a tuple containing two elements.

1. State codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. All robotic arm states

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   `rm_arm_all_state_t`  |  `dict`   | Dictionary of all robotic arm states, key: parameters of rm_arm_all_state_t. |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_arm_all_state())

arm.rm_delete_robot_arm()
```

## Get the controller RS485 mode `rm_get_controller_rs485_mode()`

- **Method prototype:**

```python
rm_get_controller_rs485_mode(self) -> dict[str, any]:
```

- **Return value:** <br>
`dict[str,any]`: a dictionary containing the following keys

1. State codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Robotic arm state mode

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   mode  |  `int`   | 0: RS485 serial communication by default, 1: modbus-RTU master mode, 2: modbus-RTU slave mode. |

3. Baud rate

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   baudrate  |    `int`   |    Baud rate    |

4. Timeout

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   timeout  |    `int`    |    modbus protocol timeout period in 100 ms, available only in modbus-RTU mode.|

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_controller_rs485_mode())

arm.rm_delete_robot_arm()
```

## Get the tool RS485 mode `rm_get_tool_rs485_mode()`

- **Method prototype:**

```python
rm_get_tool_rs485_mode(self) -> dict[str, any]:
```

- **Return value:** <br>
`dict[str,any]`: a dictionary containing the following keys

1. State codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Robotic arm state mode

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   `mode`  |  `int`   | 0: RS485 serial communication by default, 1: modbus-RTU master mode. |

3. Baud rate

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   `baudrate`  |    `int`   |    Baud rate    |

4. Timeout

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   `timeout`  |    `int`    |    modbus protocol timeout period in 100 ms, available only in modbus-RTU mode.|

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_tool_rs485_mode())

arm.rm_delete_robot_arm()
```
