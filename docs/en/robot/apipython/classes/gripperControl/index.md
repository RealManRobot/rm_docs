# <p class="hidden">Python: </p>Gripper Configuration `gripperControl`

It is used to control the gripper and get its state. The RealMan robotic arm supports various common grippers. In the system, the INSPIRE-ROBOTS EG2-4C2 gripper is adapted for use. To facilitate user operation of the gripper, the robotic arm controller provides an open gripper control protocol (the gripper control protocol is mutually exclusive with the end modbus functionality). The following is a detailed description of the member functions of the gripper configuration `gripperControl`, including the method prototype, parameter description, return value, and usage demo.

## Set gripper stroke`rm_set_gripper_route()`

It refers to the maximum and minimum opening values of the gripper. Once set successfully, the values are saved automatically and will not be lost when the gripper is powered off.

- **Method prototype:**

```python
rm_set_gripper_route(self, min_route: int, max_route: int) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `min_route` | `int` | Minimum opening value of the gripper, range: 0−1,000, without a unit of measurement; max_route (int): maximum opening value of the gripper, range: 0−1,000, without a unit of measurement                   |

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

print(arm.rm_set_gripper_route(70, 200))

arm.rm_delete_robot_arm()
```

## <div id = '6250'>Release gripper`rm_set_gripper_release()`</div>

The gripper moves to the maximum opening position at the specified speed.

- **Method prototype:**

```python
rm_set_gripper_release(self, speed: int, block: bool, timeout: int) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
|  `speed`  |    `int`    |    Release speed of the gripper, range: 1−1,000, without a unit of measurement.   |
|  `block`  |    `bool`    |    true: blocking mode, where the system waits for the controller to return the gripper in-position command; false: non-blocking mode, where no gripper in-position command is received.  |
|  `timeout`  |    `int`    |    Blocking mode: set the timeout period for waiting for the in-position gripper, in s; non-blocking mode: 0: immediately return after sending the command; other values: return after receiving the successful setting command.   |

- **Return value:** <br>
State codes executed by functions

|Parameter|Type|Description|Handling Suggestions|
|-|-|-|-|
|0|`int`|Success.|-|
|1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
|-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
|-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotes/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotes/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|  -4  |    `int`    |    Timeout.    |- **Check Timeout Setting**: In blocking mode, it supports configuring the timeout for waiting for the device to complete its motion. Ensure that the timeout is set longer than the device's motion time.<br> - **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
|-5|`int`|The current in-position equipment verification fails, indicating the current in-position equipment is not a gripper.|- **Detect Concurrent Control by Multiple Devices**: Check if other devices are sending motion commands to the robot arm, including the motion of the robot arm, gripper, dexterous hand, and elevator.<br> - **Monitor Command Events in Real-Time**: Register the callback function `rm_get_arm_event_call_back`:<br> ① Capture device arrival events (such as motion completion, timeout, etc.).<br> ② Determine the specific device type that triggered the event through the device parameter in the callback.|

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_gripper_release(500, True, 10))

arm.rm_delete_robot_arm()
```

## <div id = '6252'>Gripper force-controlled grasping`rm_set_gripper_pick()`</div>

The gripper grasps with the set speed and force. When the gripping force exceeds the preset threshold, the grasping operation stops.

- **Method prototype:**

```python
rm_set_gripper_pick(self, speed: int, force: int, block: bool, timeout: int) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
|  `speed`  |    `int`    |    Grasping speed of the gripper, range: 1−1,000, without a unit of measurement    |
|  `force`  |    `int`    |    Force control threshold, range: 50−1,000, without a unit of measurement    |
|  `block`  |    `bool`    |    true: blocking mode, where the system waits for the controller to return the gripper in-position command; false: non-blocking mode, where no gripper in-position command is received.  |
|  `timeout`  |    `int`    |    Blocking mode: set the timeout period for waiting for the in-position gripper, in s; non-blocking mode: 0: immediately return after sending the command; other values: return after receiving the successful setting command.   |

- **Return value:** <br>
State codes executed by functions:

|Parameter|Type|Description|Handling Suggestions|
|-|-|-|-|
|0|`int`|Success.|-|
|1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
|-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
|-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotes/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotes/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|  -4  |    `int`    |    Timeout.    |- **Check Timeout Setting**: In blocking mode, it supports configuring the timeout for waiting for the device to complete its motion. Ensure that the timeout is set longer than the device's motion time.<br> - **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
|-5|`int`|The current in-position equipment verification fails, indicating the current in-position equipment is not a gripper.|- **Detect Concurrent Control by Multiple Devices**: Check if other devices are sending motion commands to the robot arm, including the motion of the robot arm, gripper, dexterous hand, and elevator.<br> - **Monitor Command Events in Real-Time**: Register the callback function `rm_get_arm_event_call_back`:<br> ① Capture device arrival events (such as motion completion, timeout, etc.).<br> ② Determine the specific device type that triggered the event through the device parameter in the callback.|

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_gripper_pick(500, 200, True, 10))

arm.rm_delete_robot_arm()
```

## <div id = '6254'>Gripper continuous force-controlled grasping`rm_set_gripper_pick_on()`</div>

- **Method prototype:**

```python
rm_set_gripper_pick_on(self, speed: int, force: int, block: bool, timeout: int) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
|  `speed`  |    `int`    |    Grasping speed of the gripper, range: 1−1,000, without a unit of measurement.   |
|  `force`  |    `int`    |    Force control threshold, range: 50−1,000, without a unit of measurement.   |
|  `block`  |    `bool`    |    true: blocking mode, where the system waits for the controller to return the gripper in-position command; false: non-blocking mode, where no gripper in-position command is received.  |
|  `timeout`  |    `int`    |    Blocking mode: set the timeout period for waiting for the in-position gripper, in s; non-blocking mode: 0: immediately return after sending the command; other values: return after receiving the successful setting command.   |

- **Return value:** <br>
State codes executed by functions:

|Parameter|Type|Description|Handling Suggestions|
|-|-|-|-|
|0|`int`|Success.|-|
|1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
|-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
|-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotes/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotes/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|  -4  |    `int`    |    Timeout.    |- **Check Timeout Setting**: In blocking mode, it supports configuring the timeout for waiting for the device to complete its motion. Ensure that the timeout is set longer than the device's motion time.<br> - **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
|-5|`int`|The current in-position equipment verification fails, indicating the current in-position equipment is not a gripper.|- **Detect Concurrent Control by Multiple Devices**: Check if other devices are sending motion commands to the robot arm, including the motion of the robot arm, gripper, dexterous hand, and elevator.<br> - **Monitor Command Events in Real-Time**: Register the callback function `rm_get_arm_event_call_back`:<br> ① Capture device arrival events (such as motion completion, timeout, etc.).<br> ② Determine the specific device type that triggered the event through the device parameter in the callback.|

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_gripper_pick_on(500, 200, True, 10))

arm.rm_delete_robot_arm()
```

## <div id = '6256'>Set gripper to a specified position`rm_set_gripper_position()`</div>

- **Method prototype:**

```python
rm_set_gripper_position(self, position: int, block: bool, timeout: int) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
|  `position`  |    `int`    |    Opening position of the gripper, range: 1−1,000, without a unit of measurement    |
|  `block`  |    `bool`    |    true: blocking mode, where the system waits for the controller to return the gripper in-position command; false: non-blocking mode, where no gripper in-position command is received.  |
|  `timeout`  |    `int`    |    Blocking mode: set the timeout period for waiting for the in-position gripper, in s; non-blocking mode: 0: immediately return after sending the command; other values: return after receiving the successful setting command.   |

- **Return value:** <br>
State codes executed by functions:

|Parameter|Type|Description|Handling Suggestions|
|-|-|-|-|
|0|`int`|Success.|-|
|1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
|-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
|-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotes/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotes/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|  -4  |    `int`    |    Timeout.    |- **Check Timeout Setting**: In blocking mode, it supports configuring the timeout for waiting for the device to complete its motion. Ensure that the timeout is set longer than the device's motion time.<br> - **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
|-5|`int`|The current in-position equipment verification fails, indicating the current in-position equipment is not a gripper.|- **Detect Concurrent Control by Multiple Devices**: Check if other devices are sending motion commands to the robot arm, including the motion of the robot arm, gripper, dexterous hand, and elevator.<br> - **Monitor Command Events in Real-Time**: Register the callback function `rm_get_arm_event_call_back`:<br> ① Capture device arrival events (such as motion completion, timeout, etc.).<br> ② Determine the specific device type that triggered the event through the device parameter in the callback.|

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_gripper_position(500, True, 10))

arm.rm_delete_robot_arm()
```

## Query gripper state`rm_get_gripper_state()`

- **Method prototype:**

```python
rm_get_gripper_state(self) -> tuple[int, dict[str, any]]:
```

- **Return value:** <br>
`tuple[int,dict[str, any]]`: a tuple containing two elements.

1. int: state codes executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Gripper state information

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   `rm_gripper_state_t`  |    `dict[str, any]`   |    Dictionary of gripper state information, key: field name of rm_gripper_state_t    |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_gripper_state())

arm.rm_delete_robot_arm()
```
