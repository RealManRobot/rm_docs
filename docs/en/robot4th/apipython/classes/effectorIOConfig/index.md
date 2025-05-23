# <p class="hidden">Python: </p>End Effector IO Configuration and Query `effectorIOConfig`

The end effector of the robotic arm has multiple IO ports for interaction with peripheral equipment, and this interface is used to set and read the IO mode and power output of the end effector. The following is a detailed description of the member functions of the end effector IO configuration and query `effectorIOConfig`, including the method prototype, parameter description, return value, and usage demo.

**End-Effector Tool IO**
The quantity and classification of IO ports are as follows:<br>

|Type|Quantity|Description|
|:--|:--|:--|
|Power output|One channel|0 V/12 V/24 V available.|
|Digital IO|Two channels|Input or output available Input: reference voltage: 12 V-24 V; output: 12 V-24 V, matching the input voltage. |
|Communication port|One channel|RS485 available.|

---

## Set the tool digital output state `rm_set_tool_do_state()`

- **Method prototype:**

```python
rm_set_tool_do_state(self, io_num: int, state: int) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `io_num`      | `int` | IO port numbers 1−2                    |
| `state` | `int` | IO state, 1: high output, 0: low output |

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

# Set the tool IO channel 1 output to high
print(arm.rm_set_tool_do_state(1, 1))

arm.rm_delete_robot_arm()
```

## Set the tool digital IO mode `rm_set_tool_IO_mode()`

- **Method prototype:**

```python
rm_set_tool_IO_mode(self, io_num: int, state: int) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `io_num`      | `int` | IO port numbers 1−2                    |
| `state` | `int` | Mode, 0: input mode, 1: output mode |

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

# Set the tool digital IO port 1 to the input mode
print(arm.rm_set_tool_IO_mode(1, 0))

arm.rm_delete_robot_arm()
```

## Get the tool digital IO state `rm_get_tool_io_state()`

- **Method prototype:**

```python
rm_get_tool_io_state(self) -> dict[str, any]:
```

- **Return value:** <br>
`dict[str,any]`: a dictionary containing the following keys. <br>

1. int: state codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Digital IO state

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   `IO_Mode`  |    `list[int]`   |    0: input mode, 1: output mode    |
|   `IO_state`  |    `list[int]`   |    0: low, 1: high   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_tool_io_state())

arm.rm_delete_robot_arm()
```

## Set the tool-end power output`rm_set_tool_voltage()`

- **Method prototype:**

```python
rm_set_tool_voltage(self, voltage_type: int) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `voltage_type`      | `int` | Power output type, 0: 0 V, 2: 12 V, 3: 24 V       |

- **Return value:** <br>
`dict[str,any]`: a dictionary containing the following keys. <br>

1. int: state codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Digital IO state

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   `IO_Mode`  |    `list[int]`   |    0: input mode, 1: output mode    |
|   `IO_state`  |    `list[int]`   |    0: low, 1: high   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Set the tool power output to 24 V
print(arm.rm_set_tool_voltage(3))

arm.rm_delete_robot_arm()
```

## Get the tool-end power output`rm_get_tool_voltage()`

- **Method prototype:**

```python
rm_get_tool_voltage(self) -> tuple[int, int]:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `voltage_type`      | `int` | Power output type, 0: 0 V, 2: 12 V, 3: 24 V. |

- **Return value:** <br>
`tuple[int, int]`

1. int: state codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Power output type

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   `IO_Mode`  |  `list[int]` |  Power output type, 0: 0 V, 2: 12 V, 3: 24 V.|

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_tool_voltage())

arm.rm_delete_robot_arm()
```
