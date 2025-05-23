# <p class="hidden">Python: </p>Controller IO Configuration and Query `controllerIOConfig`

It is used for IO configuration. The following is a detailed description of the member functions of the controller IO configuration and query `controllerIOConfig`, including the method prototype, parameter description, return value, and usage demo.

**Controller IO**
The robotic arm controller has IO ports for interaction with peripheral equipment. The quantity and classification of IO ports are as follows:<br>

|Type|Quantity|Description|
|:--|:--|:--|
|Digital IO|Four channels|Optional for 0 V−24 V, DO/DI multiplexing|

---

## Set the IO mode `rm_set_io_mode()`

- **Method prototype:**

```python
rm_set_io_mode(self, io_num: int, io_mode: int, io_speed: int=0, io_speed_mode: int=0) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `io_num`      | `int` | IO port numbers 1−4.                    |
|  `io_mode`  |  `int`    |    Mode, <br>0: general-purpose input mode. <br>1: general-purpose output mode. <br>2: input start function multiplexing mode. <br>3: input pause function multiplexing mode. <br>4: input resumption function multiplexing mode. <br>5: input emergency stop function multiplexing mode. <br>6: input to current loop drag multiplexing mode. <br>7: input to position-only drag mode (available for the 6-DoF force version). <br>8: input to orientation-only drag mode (available for the 6-DoF force version). <br>9: input to position-orientation drag multiplexing mode (available for the 6-DoF force version). <br>10: input maximum external axis soft limit multiplexing mode (available for external axis mode). <br>11: input minimum external axis soft limit multiplexing mode (available for external axis mode). <br>12: input initial pose function multiplexing mode. <br>13: output collision function multiplexing mode.<br>14: Real-Time Speed Adjustment Function Multiplexing Mode. |
| `io_speed` | `int` |The speed value range is 0-100. |
| `io_speed_mode` | `int`  | The mode value range is 1 or 2.<br> 1-indicates single-trigger mode. In single-trigger mode, when the IO is pulled low, the speed is set to the value of the speed parameter. When the IO returns to a high level, the speed is set to the initial value.<br>2-indicates continuous-trigger mode. In continuous-trigger mode, when the IO is pulled low, the speed is set to the value of the speed parameter, and when the IO returns to a high level, the speed maintains the current value. |

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

# Set the IO channel 1 to the general-purpose output mode
print(arm.rm_set_io_mode(1, 1))
print(arm.rm_set_io_mode(2, 14,50,2))
arm.rm_delete_robot_arm()
```

## Set the digital output state `rm_set_do_state()`

- **Method prototype:**

```python
rm_set_do_state(self, io_num: int, state: int) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `io_num`      | `str` | IO port number, range: 1−4  |
| `state` | `int` | IO state, 1: high output, 0: low output |

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

# Set the IO channel 1 output to high
print(arm.rm_set_do_state(1, 1))

arm.rm_delete_robot_arm()
```

## Get the digital IO state `rm_get_io_state()`

- **Method prototype:**

```python
rm_get_io_state(self, io_num: int) -> dict[str, any]:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `io_num`      | `str` | IO port number, range: 1−4  |

- **Return value:** <br>
`dict[str,any]`: a dictionary containing the following keys

1. **int: state codes executed by functions**.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. **IO state and mode**.

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
| `io_state` | `int` |   IO Status Acquisition Structure  |
|  `io_mode`  |  `int`    |    Mode, <br>0: general-purpose input mode. <br>1: general-purpose output mode. <br>2: input start function multiplexing mode. <br>3: input pause function multiplexing mode. <br>4: input resumption function multiplexing mode. <br>5: input emergency stop function multiplexing mode. <br>6: input to current loop drag multiplexing mode. <br>7: input to position-only drag mode (available for the 6-DoF force version). <br>8: input to orientation-only drag mode (available for the 6-DoF force version). <br>9: input to position-orientation drag multiplexing mode (available for the 6-DoF force version). <br>10: input maximum external axis soft limit multiplexing mode (available for external axis mode). <br>11: input minimum external axis soft limit multiplexing mode (available for external axis mode). <br>12: input initial pose function multiplexing mode. <br>13: output collision function multiplexing mode.<br>14: Real-Time Speed Adjustment Function Multiplexing Mode. |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Get the state of the IO channel 1
print(arm.rm_get_io_state(1))

arm.rm_delete_robot_arm()
```

## Get all IO input state `rm_get_io_input()`

- **Method prototype:**

```python
rm_get_io_input(self) -> tuple[int, list[int]]:
```

- **Return value:** <br>
tuple[int, list[int]]: A tuple containing two elements.<br>

1. int: state codes executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Four-channel digital input state list

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   -  |    `list[int]`   |     Four-channel digital input state list, 1: high, 0: low, -1: the port is not in input mode    |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Get the IO input state
print(arm.rm_get_io_input())

arm.rm_delete_robot_arm()
```

## Get all IO output state `rm_get_io_output()`

- **Method prototype:**

```python
rm_get_io_output(self) -> tuple[int, list[int]]:
```

- **Return value:** <br>
`tuple[int, list[int]]`: A tuple containing two elements. <br>

1. int: state codes executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Four-channel digital output state list

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   -  |    `list[int]`   |     Four-channel digital output state list, 1: high, 0: low, -1: the port is not in output mode    |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_io_output())

arm.rm_delete_robot_arm()
```

## Set the controller power output `rm_set_voltage()`

- **Method prototype:**

```python
rm_set_voltage(self, voltage_type: int) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :----| :----------------------------------- |
| `voltage_type`  | `int` | Power output type, 0: 0 V, 2: 12 V, 3: 24 V.  |

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

# Set the controller power output to 24 V
print(arm.rm_set_voltage(3))

arm.rm_delete_robot_arm()
```

## Get the controller power output `rm_get_voltage()`

- **Method prototype:**

```python
rm_get_voltage(self) -> tuple[int, int]:
```

- **Return value:** <br>
`tuple[int, int]`

1. int: state codes executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Power output type

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   -  |    `int`   |    Power output type, 0: 0 V, 2: 12 V, 3: 24 V.    |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_voltage())

arm.rm_delete_robot_arm()
```
