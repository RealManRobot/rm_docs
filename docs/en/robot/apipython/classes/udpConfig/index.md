# <p class="hidden">Python: </p>UDP Proactive Reporting Configuration `UdpConfig`

It is used for UDP active reporting configuration. The RealMan robotic arm provides a UDP interface for actively reporting the robotic arm's state. During use, the robotic arm must be in the same local network. By configuring the target IP for active reporting or establishing a TCP connection with the robotic arm, the robotic arm will actively and periodically report its state data. The reporting interval is configurable, with a default of 5 ms. The following is a detailed description of the member functions of the UDP active reporting configuration `UdpConfig`, including the method prototype, parameter description, return value, and usage demo.

::: warning
After configuring correctly and enabling the triple-thread mode, the callback function can be registered to receive and process the actively reported data.
:::

## Set the UDP robotic arm state active reporting configuration`rm_set_realtime_push()`

- **Method prototype:**

```python
rm_set_realtime_push(self, config: rm_realtime_push_config_t) -> int:
```

*Jump to [rm_realtime_push_config_t](../../struct/realtimePushConfig/index.md) for details of the structure.*

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `config`      | `rm_realtime_push_config_t` | UDP configuration structure.     |

- **Return value:**
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

# Enable the UDP reporting configuration with a cycle of 500 ms, port number of 8089, external force frame as the sensor frame, and reporting target IP address as "192.168.1.104"
custom = rm_udp_custom_config_t()
custom.joint_speed = 0
custom.lift_state = 0
custom.expand_state = 0
config = rm_realtime_push_config_t(100, True, 8089, 0, "192.168.1.104", custom)
print(arm.rm_set_realtime_push(config))

arm.rm_delete_robot_arm()
```

## Query the UDP robotic arm state active reporting configuration`rm_get_realtime_push()`

- **Method prototype:**

```python
rm_get_realtime_push(self) -> tuple[int, dict[str, any]]:
```

- **Return value:**
`tuple[int,dict[str,any]]`: a tuple containing two elements. <br>

1. int: state codes executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Dictionary of UDP robotic arm state active reporting configuration

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   -  |    `dict[str,any]`   |    Return the dictionary of UDP robotic arm state active reporting configuration, key: field names of rm_realtime_push_config_t.   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_realtime_push())

arm.rm_delete_robot_arm()
```

## Real-time state of UDP register robotic arm `rm_realtime_arm_state_call_back()`

This callback function receives data of rm_realtime_arm_joint_state_t type as its parameter and does not return any value. When using triple-thread mode and the UDP robotic arm state active reporting is correctly configured, data will be returned at the set reporting interval.

- **Method prototype:**

```python
rm_realtime_arm_state_call_back(self, arm_state_callback):
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|`arm_state_callback`|`rm_realtime_arm_state_callback_ptr`|Robotic arm real-time state callback function. |

::: warning
Ensure that the triple-thread mode is enabled, as the UDP interface for receiving data is only activated in triple-thread mode. Also, make sure that the UDP robotic arm state active reporting configuration (including broadcast port number, reporting target IP, and whether active reporting is enabled) is correct. Additionally, ensure that the firewall does not block the data reception.
:::

- **Usage demo**
  
```python
# The following is an example of how to register a callback function for receiving UDP robotic arm real-time state active reporting information:
# In this example, we define a function named `arm_state_func` to handle the real-time data reported by the robotic arm and register it as a callback function.
# The `arm_state_func` function will be called according to the cycle set in the UDP interface configuration and receive an object of rm_realtime_arm_joint_state_t as its parameter.
from Robotic_Arm.rm_robot_interface import *

def arm_state_func(data):
    print("Current arm ip: ", data.arm_ip)
    print("Current arm pose: ", data.waypoint.to_dict())

# Initialize in triple-thread mode
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Set and enable the UDP port with a broadcast cycle of 500 ms, broadcast port number of 8089, force data frame as the sensor frame, and reporting target IP address as "192.168.1.104"
# All custom reporting items are disabled by default, and users can modify these configurations according to their actual needs
custom = rm_udp_custom_config_t()
custom.joint_speed = 0
custom.lift_state = 0
custom.expand_state = 0
config = rm_realtime_push_config_t(100, True, 8089, 0, "192.168.1.104", custom)
print(arm.rm_set_realtime_push(config))
print(arm.rm_get_realtime_push())

arm_state_callback = rm_realtime_arm_state_callback_ptr(arm_state_func)
arm.rm_realtime_arm_state_call_back(arm_state_callback)

# Joint motion
ret = arm.rm_movej([0, 30, 60, 0, 90, 0], 30, 0, 0, 1)
print("movej: ", ret)

# Delete the specified robotic arm object
arm.rm_delete_robot_arm()
```
