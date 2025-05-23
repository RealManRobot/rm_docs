# <p class="hidden">Python: </p>Communication Configuration `CommunicationConfig`

The robotic arm controller communicates with the user through the network port, RS232-USB port, and RS485 port, and there is no need for users to switch when using. With any of the above ports, after receiving the command, the controller will return the data through the same port if the command format is correct. The following is a detailed description of the member functions of the communication configuration `CommunicationConfig`, including the method prototype, parameter description, return value, and usage demo.

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
