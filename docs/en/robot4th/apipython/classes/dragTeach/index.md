# <p class="hidden">Python: </p>Drag Teaching Configuration `DragTeach`

It is used for the drag teaching configuration. During the drag teaching, the RealMan robotic arm records the drag trajectory and replays the trajectory according to the user's commands. The following is a detailed description of the member functions of the drag teaching configuration `DragTeach`, including the method prototype, parameter description, return value, and usage demo.

## Start the drag teaching `rm_start_drag_teach()`

- **Method prototype:**

```python
rm_start_drag_teach(self, trajectory_record: int) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `trajectory_record`      | `int` | Trajectory record during the drag teaching, 0: no record, 1: trajectory record |

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

print(arm.rm_start_drag_teach(1))

arm.rm_delete_robot_arm()
```

## Stop the drag teaching `rm_stop_drag_teach()`

- **Method prototype:**

```python
rm_stop_drag_teach(self) -> int:
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

print(arm.rm_stop_drag_teach())

arm.rm_delete_robot_arm()
```

## Start the multiple drag teaching `rm_start_multi_drag_teach_new()`

- **Method prototype:**

```python
rm_start_multi_drag_teach_new(self, param: rm_multi_drag_teach_t) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_multi_drag_teach_t` | Multiple drag teaching parameters |

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

param = rm_multi_drag_teach_t((0, 1, 1, 0, 1, 0), 0, 1)
result1 = arm.rm_start_multi_drag_teach_new(param)
time.sleep(2)
result2 = arm.rm_set_stop_teach()

arm.rm_delete_robot_arm()
```

## Set the drag teaching sensitivity of the current loop `rm_set_drag_teach_sensitivity()`

- **Method prototype:**

```python
rm_set_drag_teach_sensitivity(self, grade: int) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `grade`      | `int` | Sensitivity grades 0−100 in %, the smaller the number, the lower the sensitivity. The initial sensitivity is kept when it is 100.|

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

print(arm.rm_set_drag_teach_sensitivity(50))

arm.rm_delete_robot_arm()
```

## Get the drag teaching sensitivity of the current loop `rm_get_drag_teach_sensitivity()`

- **Method prototype:**

```python
rm_get_drag_teach_sensitivity(self) -> int:
```

- **Return value:** <br>
tuple[int,int]: a tuple containing two elements. <br>

1. int: state codes executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. int: Sensitivity grade

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   -  |    `int`   | Sensitivity grades 0−100 in %, the smaller the number, the lower the sensitivity. The initial sensitivity is kept when it is 100.|

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_drag_teach_sensitivity())

arm.rm_delete_robot_arm()
```

## Move to the trajectory origin `rm_drag_trajectory_origin()`

Before the trajectory replay, it is required to move the robotic arm to the trajectory origin. If the setting is correct, the robotic arm will move to the trajectory origin at a speed of 20

- **Method prototype:**

```python
rm_drag_trajectory_origin(self, block: int) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `block` | `int` | Blocking settings: <br>multi-thread mode: <br>0: non-blocking mode, immediately return after sending commands; <br>1: blocking mode, return after the robotic arm reaches the target position or the planning fails; <br>single-thread mode: <br>0: non-blocking mode; <br>other values: blocking mode, and timeout period setting, in s. |

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

# Move to the trajectory origin in the blocking mode
print(arm.rm_drag_trajectory_origin(1))

arm.rm_delete_robot_arm()
```

## Start the drag teaching replay `rm_run_drag_trajectory()`

It is available only after the drag teaching is complete, and the robotic arm is located at the trajectory origin. The rm_drag_trajectory_origin interface can be called to move the robotic arm to the trajectory origin.

- **Method prototype:**

```python
rm_run_drag_trajectory(self, timeout: int) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `timeout` | `int` | Blocking settings: <br>multi-thread mode: <br>0: non-blocking mode, immediately return after sending commands; <br>1: blocking mode, return after the robotic arm reaches the target position or the planning fails; <br>single-thread mode: <br>0: non-blocking mode; <br>other values: blocking mode, and timeout period setting, in s. |

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

print(arm.rm_run_drag_trajectory(1))

arm.rm_delete_robot_arm()
```

## Pause the trajectory replay `rm_pause_drag_trajectory()`

- **Method prototype:**

```python
rm_pause_drag_trajectory(self) -> int:
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

print(arm.rm_pause_drag_trajectory())

arm.rm_delete_robot_arm()
```

## Continue the trajectory replay `rm_continue_drag_trajectory()`

Control the continuation of the robotic arm after a pause during the trajectory replay.

- **Method prototype:**

```python
rm_continue_drag_trajectory(self) -> int:
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

print(arm.rm_continue_drag_trajectory())

arm.rm_delete_robot_arm()
```

## Stop the trajectory replay `rm_stop_drag_trajectory()`

Control the stop of the robotic arm during the trajectory replay.

- **Method prototype:**

```python
rm_stop_drag_trajectory(self) -> int:
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

print(arm.rm_stop_drag_trajectory())

arm.rm_delete_robot_arm()
```

## Set the force-position hybrid control `rm_set_force_position()`

In Cartesian space trajectory planning, this function is available to ensure that the contact force of the end effector is constant when the force is not in the same direction as the robotic arm movement. Turn on the force-position hybrid control, perform the Cartesian space movement, and wait for 2s to issue the next movement command after receiving the feedback of the movement completion.

- **Method prototype:**

```python
rm_set_force_position(self, sensor: int, mode: int, direction: int, force: float) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `sensor`      | `int` | 0: 1-DoF force, 1: 6-DoF force. |
| `mode`      | `int` | 0: force control in the base frame, 1: force control in the tool frame. |
| `direction`      | `int` | Force control direction, 0: along the X-axis, 1: along the Y-axis, 2: along the Z-axis, 3: along the RX orientation, 4: along the RY orientation, 5: along the RZ orientation. |
| `force`      | `float` | Magnitude of the force, in N. |

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

print(arm.rm_set_force_position(1, 0, 2, 5))

arm.rm_delete_robot_arm()
```

## Set the force-position hybrid control `rm_set_force_position_new()`

In Cartesian space trajectory planning, this function is available to ensure that the contact force of the end effector is constant when the force is not in the same direction as the robotic arm movement. Turn on the force-position hybrid control, perform the Cartesian space movement, and wait for 2s to issue the next movement command after receiving the feedback of the movement completion.

- **Method prototype:**

```python
rm_set_force_position_new(self, param: rm_force_position_t) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_force_position_t` | Force-position hybrid control parameters. |

*Jump to [rm_force_position_t](../../struct/forcePosition/index.md) for details of the structure.*

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

arm.rm_movej_p([0.2, 0, 0.3, 3.142, 0, 0], 20, 0, 0, 1)
param = rm_force_position_t(1, 0, (3, 3, 4, 3, 3, 3), (0, 0, 1, 0, 0, 0), (0.1, 0.1, 0.1, 10, 10, 10))
for i in range(3):
    result1 = arm.rm_movel([0.2, 0, 0.3, 3.142, 0, 0], 20, 0, 0, 1)
    result2 = arm.rm_set_force_position_new(param)
    result3 = arm.rm_movel([0.3, 0, 0.3, 3.142, 0, 0], 20, 0, 0, 1)

arm.rm_stop_force_position()
arm.rm_delete_robot_arm()
```

## Stop the force-position hybrid control `rm_stop_force_position()`

- **Method prototype:**

```python
rm_stop_force_position(self) -> int:
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

print(arm.rm_stop_force_position())

arm.rm_delete_robot_arm()
```

## <div id = '6244'>Save the drag teaching trajectory `rm_save_trajectory()`</div>

- **Method prototype:**

```python
rm_save_trajectory(self, file_path: str) -> tuple[int, int]:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `file_path`      | `str` | Path and name of the file to save the trajectory, e.g., c:/rm_test.txt |

- **Return value:** <br>
tuple[int,int]: a tuple containing two elements. <br>

1. int: state codes executed by functions.

|   Parameter    |  Type    |   Description    |Handling Suggestions|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    Success.   |-|
|   1  |    `int`    |    The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.   |- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
|  -1  |    `int`    |    The data transmission fails, indicating that a problem occurs during the communication.   |**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
|  -2  |    `int`    |    The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.   |- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Change Notes](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|  -3  |    `int`    |    The return value parse fails, indicating that the received data format is incorrect or incomplete.   |**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Change Notes](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|  -4  |    `int`    |    File open fails.   |- **Check file path**: Ensure the file path is correct and there are no spelling errors.<br>- **Check file permissions**: Ensure the user has permission to read the file. If the file is in a protected directory, administrative privileges may be required.<br>- **Check if the file is being used by another program**: Ensure the file is not being opened or locked by another program. If the file is in use, you may need to close the program that is using the file.<br>- **Contact technical support**: If none of the above steps resolve the issue, the user can contact the technical support team, providing detailed error information and steps taken, to allow the support staff to further investigate and diagnose the issue.<br>- **Retry the operation**: Attempt to re-execute the rm_save_trajectory function to see if the problem persists.<br>- **Try saving to another file**: Test to see if the issue is related to a specific file.|
|  -5  |    `int`    |    File name interception fails.   |Check if the file path is empty or formatted incorrectly.|
|  -6  |    `int`    |    The obtained point parsing error occurs and the save fails.   |- **Check logs**: Verify if the JSON command returned by the controller during the saving process is correct.<br>- **Check network connection**: If the network is unstable and the complete JSON protocol is not received, this error may occur. Ensure the network connection is stable and retry.<br>- **Contact technical support**: If none of the above steps resolve the issue, contact the technical support team, providing the steps taken and log files, to allow the support staff to further investigate and diagnose the issue.|

1. Total number of trajectory points

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   -  |    `int`    |    Total number of trajectory points   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_save_trajectory("H:/Desktop/example.txt"))

arm.rm_delete_robot_arm()
```

## <div id = '6246'>Set the 6-DoF Drag Mode `rm_set_force_drag_mode()`</div>

- **Method prototype**:

```python
rm_set_force_drag_mode(self, mode: int) -> int:
```

- **Parameter description**:

| Name        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `mode`      | `int` | 0 for fast drag mode, 1 for precise drag mode |

- **Return value**: <br>
The status code of the function execution:

|   Parameter    |  Type    |   Description    |Handling Suggestions|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    Success.   |-|
|   1  |    `int`    |    The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.   |- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
|  -1  |    `int`    |    The data transmission fails, indicating that a problem occurs during the communication.   |**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
|  -2  |    `int`    |    The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.   |- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Change Notes](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|  -3  |    `int`    |    The return value parse fails, indicating that the received data format is incorrect or incomplete.   |**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Change Notes](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|  -4  |    `int`    |    The robot arm is not a 6-DoF version and does not support this feature.   |This function requires a six-dimensional force version of the robot arm. If the robot arm is a six-dimensional force version:<br>- **Check if the connection handle is valid**: An invalid connection handle will prevent the API from correctly obtaining the end-effector information of the robot arm.<br>- **Check the robot arm version information**: Ensure that the robot arm model is the six-dimensional force version to avoid mistakenly using a standard end-effector upgrade package for the robot arm, which would render this function unavailable.|

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create a robot arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_force_drag_mode(50))

arm.rm_delete_robot_arm()
```

## <div id = '6248'>Get the 6-DoF Drag Mode `rm_get_force_drag_mode()`</div>

- **Method prototype**:

```python
rm_get_force_drag_mode(self) -> int:
```

- **Return value**: <br>
tuple[int,int]: A tuple containing two elements. <br>

1. int:The status code of the function execution

|   Parameter    |  Type    |   Description    |Handling Suggestions|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    Success.   |-|
|   1  |    `int`    |    The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.   |- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
|  -1  |    `int`    |    The data transmission fails, indicating that a problem occurs during the communication.   |**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
|  -2  |    `int`    |    The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.   |- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Change Notes](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|  -3  |    `int`    |    The return value parse fails, indicating that the received data format is incorrect or incomplete.   |**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Change Notes](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|  -4  |    `int`    |    The robot arm is not a 6-DoF version and does not support this feature.   |This function requires a six-dimensional force version of the robot arm. If the robot arm is a six-dimensional force version:<br>- **Check if the connection handle is valid**: An invalid connection handle will prevent the API from correctly obtaining the end-effector information of the robot arm.<br>- **Check the robot arm version information**: Ensure that the robot arm model is the six-dimensional force version to avoid mistakenly using a standard end-effector upgrade package for the robot arm, which would render this function unavailable.|

2. int: The drag mode

|   Parameter    |  Type   |   Description    |
| :--- | :--- | :---|
|   -  |    `int`   |  0 for fast drag mode, 1 for precise drag mode.  |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create a robot arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_force_drag_mode())

arm.rm_delete_robot_arm()
```
