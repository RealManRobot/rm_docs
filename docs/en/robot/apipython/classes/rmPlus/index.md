# <p class="hidden">Python: </p>End-Effector Ecosystem Protocol Configuration `RmPlusConfig`

## Set End-Effector Ecosystem Protocol Mode `rm_set_rm_plus_mode()`

- **Method prototype**:

```python
rm_set_rm_plus_mode(self, mode: int) -> int:
```

- **Parameter description:**

|   Parameter    |   Type    |   Description    |
| :--- | :--- | :--- |  
|   `mode`  |    `int`    |   End-effector ecosystem protocol mode. 0: Disable protocol, 9600: Enable protocol (baud rate 9600), 115200: Enable protocol (baud rate 115200), 256000: Enable protocol (baud rate 256000), 460800: Enable protocol (baud rate 460800).  |

- **Return value:**

State codes executed by functions:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *
# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create a robotic arm connection and print the connection ID

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create a robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)
# Set the end-effector ecosystem protocol mode
arm.rm_set_rm_plus_mode(9600)
# Disconnect all connections and destroy the thread
RoboticArm.rm_destory()
```

## Get End-Effector Ecosystem Protocol Mode `rm_get_rm_plus_mode()`

- **Method prototype**:

```python
rm_get_rm_plus_mode(self) -> tuple[int, int]:
```

- **Return value:**

`tuple[int, int]`: A tuple containing two elements.

1. State codes executed by functions: 0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).
2. End-effector ecosystem protocol mode:
    - 0: Disable protocol
    - 9600: Enable protocol (baud rate 9600)
    - 115200: Enable protocol (baud rate 115200)
    - 256000: Enable protocol (baud rate 256000)
    - 460800: Enable protocol (baud rate 460800)

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *
# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E) 
# Create a robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Get the end-effector ecosystem protocol mode
tag, mode = arm.rm_get_rm_plus_mode()
print(tag, mode)
# Disconnect all connections and destroy the thread
RoboticArm.rm_destory()
```

## Set Tactile Sensor Mode (Supported by End-Effector Ecosystem Protocol) `rm_set_rm_plus_touch()`

- **Method prototype**:

```python
rm_set_rm_plus_touch(self,mode: int) -> int:
```

- **Parameter description:**

|   Parameter    |   Type    |   Description    |
| :--- | :--- | :--- |
|   `mode`  |    `int`    |  Tactile sensor switch status. 0: Disable tactile sensor, 1: Enable tactile sensor (return processed data), 2: Enable tactile sensor (return raw data)   |

- **Return value:**

State codes executed by functions:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *
# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create a robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)
# Set the tactile sensor mode
arm.rm_set_rm_plus_touch(1)
# Disconnect all connections and destroy the thread
RoboticArm.rm_destory()
```

## Get Tactile Sensor Mode (Supported by End-Effector Ecosystem Protocol) `rm_get_rm_plus_touch()`

- **Method prototype**:

```python
rm_get_rm_plus_touch(self) -> tuple[int,int]:
```

- **Return value:**

`tuple[int,int]`: A tuple containing two elements.

1. State codes executed by functions: 0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).
2. Tactile sensor switch status:
    - 0: Disable tactile sensor
    - 1: Enable tactile sensor (return processed data)
    - 2: Enable tactile sensor (return raw data)

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *
# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E) 

# Create a robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)
# Get the tactile sensor mode
tag, mode = arm.rm_get_rm_plus_touch()
print(tag, mode)
# Disconnect all connections and destroy the thread
RoboticArm.rm_destory()
```

## Read End-Effector Basic Information (Supported by End-Effector Ecosystem Protocol) `rm_get_rm_plus_base_info()`

- **Method prototype**:

```python
rm_get_rm_plus_base_info(self) -> tuple[int,dict[str, any]]:
```

- **Return value:**

`tuple[int,dict[str, any]]`: A tuple containing two elements.

1. State codes executed by functions: 0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).
2. End-effector basic information:
    - `dict[str, any]` A dictionary of end-effector basic information, with keys being the field names of the `rm_plus_base_info_t` structure.

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *
# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E) 

# Create a robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)  

# Read the end-effector basic information
tag, base_info = arm.rm_get_rm_plus_base_info()
print(tag, base_info)
# Disconnect all connections and destroy the thread
RoboticArm.rm_destory()
```

## Read End-Effector Real-Time Information (Supported by End-Effector Ecosystem Protocol) `rm_get_rm_plus_state_info()`

- **Method prototype**:

```python
rm_get_rm_plus_state_info(self) -> tuple[int, dict[str, any]]:
```

- **Return value:**

`tuple[int, dict[str, any]]`: A tuple containing two elements.

1. State codes executed by functions: 0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).
2. End-effector real-time information:
    - `dict[str, any]` A dictionary of end-effector real-time information, with keys being the field names of the `rm_plus_state_info_t` structure.

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *
# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create a robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Read the end-effector real-time information
tag, state_info = arm.rm_get_rm_plus_state_info()
print(tag, state_info)
# Disconnect all connections and destroy the thread
RoboticArm.rm_destory()
```
