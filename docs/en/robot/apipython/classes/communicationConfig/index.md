# <p class="hidden">Python: </p>Communication Configuration `CommunicationConfig`

The robotic arm controller communicates with the user through the network port, WiFi, RS232-USB port, and RS485 port, and there is no need for users to switch when using. With any of the above ports, after receiving the command, the controller will return the data through the same port if the command format is correct. The following is a detailed description of the member functions of the communication configuration `CommunicationConfig`, including the method prototype, parameter description, return value, and usage demo.

## Set the WiFi AP mode `rm_set_wifi_ap()`

- **Method prototype:**

```python
rm_set_wifi_ap(self, wifi_name: str, password: str) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `wifi_name`      | `str` |  WiFi name                   |
| `password` | `str` | WiFi password |

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

print(arm.rm_set_wifi_ap("robot", "12345678"))

arm.rm_delete_robot_arm()
```

## Set the WiFi STA mode `rm_set_wifi_sta()`

- **Method prototype:**

```python
rm_set_wifi_sta(self, router_name: str, password: str) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `router_name`      | `str` | Router name                    |
| `password` | `str` | Router WiFi password |

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

print(arm.rm_set_wifi_sta("robot", "12345678"))

arm.rm_delete_robot_arm()
```

## Set the baud rate of the controller RS485 `rm_set_RS485()`

After the setting is successful, the buzzer rings.

- **Method prototype:**

```python
rm_set_RS485(self, baudrate: int) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
|  `baudrate`  |    `int`    |    Baud rate: 9600, 19200, 38400, 115200, and 460800. If the user sets other values, the controller uses 460800 by default.                    |

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

print(arm.rm_set_RS485(115200))

arm.rm_delete_robot_arm()
```

## Get the wired network information`rm_get_wired_net()`

If the wired network is not connected, invalid data will be returned.

- **Method prototype:**

```python
rm_get_wired_net(self) -> dict[str, any]:
```

- **Return value:** <br>
`dict[str,any]`: a dictionary containing the following keys

1. `return_code` (int): a state code executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Network address

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   ip  |    `str`   |    IP address    |
|   mask  |    `str`   |    Subnet mask  |
|   mac  |    `str`   |    MAC address   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_wired_net())

arm.rm_delete_robot_arm()
```

## Get the WiFi network information `rm_get_wifi_net()`

- **Method prototype:**

```python
rm_get_wifi_net(self) -> tuple[int, dict[str, any]]:
```

- **Return value:** <br>
`dict[str,any]`: a dictionary containing the following keys

1. `return_code` (int): a state code executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. WiFi network information

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   `rm_wifi_net_t`  |    `dict[str,any]`   |      Dictionary of the WiFi network information, key: field of rm_wifi_net_t    |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_wifi_net())

arm.rm_delete_robot_arm()
```

## Restore the network factory default `rm_set_net_default()`

- **Method prototype:**

```python
rm_set_net_default(self) -> int:
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

print(arm.rm_set_net_default())

arm.rm_delete_robot_arm()
```

## Set the WiFi OFF `rm_set_wifi_close()`

It will be enabled after the restart.

- **Method prototype:**

```python
rm_set_wifi_close(self) -> int:
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

print(arm.rm_set_wifi_close())

arm.rm_delete_robot_arm()
```
