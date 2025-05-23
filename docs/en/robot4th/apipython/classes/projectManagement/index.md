# <p class="hidden">Python: </p>Online Programming File Management `ProjectManagement`

It is used for the distribution and management of online programming files. The following is a detailed description of the member functions of the distribution and management of online programming files `ProjectManagement`, including the method prototype, parameter description, return value, and usage demo.

## Get online program list `rm_get_program_trajectory_list()`

- **Method prototype:**

```python
rm_get_program_trajectory_list(self, page_num: int, page_size: int, vague_search: str) -> tuple[int, dict[str, any]]:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `page_num`      | `int` | Page.       |
| `page_size`      | `int` | Page size.       |
| `vague_search`      | `str` | Vague search.       |

- **Return value:** <br>
`tuple[int, dict[str,any]]`: a tuple containing two elements. <br>

1. int: state codes executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Online programming list dictionary

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   `rm_program_trajectorys_t`  |    `dict[str,any]`   |    Obtained online programming list dictionary, key: field names of rm_program_trajectorys_t.   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Vaguely search "a" online programming file
print(arm.rm_get_program_trajectory_list(1, 10, "a"))

arm.rm_delete_robot_arm()
```

## <div id = '6264'>Run Specified Program File `rm_set_program_id_run()`</div>

- **Method prototype:**

```python
rm_set_program_id_run(self, tra_id: int, speed: int, timeout: int) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `tra_id`      | `int` | Run the specified ID, 1-100. The trajectory will be executed if it exists.                    |
| `speed` | `int` |  1-100, the speed of the trajectory to be run. If set to 0, it will run at the stored speed. |
| `timeout` | `int` | Blocking settings: <br>multi-thread mode: <br>0: non-blocking mode, immediately return after sending commands; <br>1: blocking mode, return after the robotic arm reaches the target position or the planning fails; <br>single-thread mode: <br>0: non-blocking mode; <br>other values: blocking mode, and timeout period setting, in s. |

- **Return value:** <br>
State codes executed by functions:

|Parameter|Type|Description|Handling Suggestions|
|-|-|-|-|
|0|`int`|Success.|-|
|1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
|-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
|-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|  -4  |    `int`   |   The running has stopped, but the successful running information is not received. The trajectory may have stopped outside the range.   |Determine whether the trajectory has been externally stopped, such as by triggering pause, stop, or similar buttons.|

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Run the online programming with the ID 8 at 20% speed in a blocking mode
print(arm.rm_set_program_id_run(8, 20, 1))

arm.rm_delete_robot_arm()
```

## Delete the specified trajectory`rm_delete_program_trajectory()`

- **Method prototype:**

```python
rm_delete_program_trajectory(self, tra_id: int) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `tra_id`      | `int` | ID of specified trajectory.                    |

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

print(arm.rm_delete_program_trajectory(8))

arm.rm_delete_robot_arm()
```

## Modify the information of the specified trajectory`rm_update_program_trajectory()`

- **Method prototype:**

```python
rm_update_program_trajectory(self, tra_id: int, speed: int, name: str) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `tra_id`      | `int` | ID of specified trajectory.     |
| `speed` | `int` | Updated planned speed ratio, 1-100. |
| `name` | `str` | Updated file name. |

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

print(arm.rm_update_program_trajectory(8, 20, "test"))

arm.rm_delete_robot_arm()
```

## <div id = '6304'>Query Flowchart Program Run State `rm_get_flowchart_program_run_state()`</div>

- **Method prototype:**

```python
rm_get_flowchart_program_run_state(self) -> tuple[int, dict[str, any]]:
```

- **Return value:** <br>

`tuple[int, dict[str,any]]`: a tuple containing two elements.<br>

1. int: state codes executed by functions.

    <div class='tableWrap'>

    |Parameter|Type|Description|Handling Suggestions|
    |-|-|-|-|
    |0|`int`|Success.|-|
    |1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
    |-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
    |-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
    |-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
    |  -4  |    `int`    |  This interface is not supported by the Gen 3 Controller.   |-|

    </div>

    <style scoped>
        .tableWrap {
            display: table;
            width: 100%;
            table-layout: fixed;
        }
        .tableWrap tr th, .tableWrap td {
            width: auto;
        }
    </style>

2. dict[str, any]: A dictionary of the online programming run state.

    |   Parameter    |  Type    |   Description    |
    | :--- | :--- | :---|
    |   `rm_arm_software_version_t`  |    `dict[str,any]`   |  A dictionary of the online programming run state, with keys being the field names of the rm_program_run_state_t structure. |

    *Jump to [rm_program_run_state_t](../../struct/programRunState/index.md) for details of the structure.*

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *
# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_flowchart_program_run_state())
arm.rm_delete_robot_arm()
```

## Set the ID of program that the IO runs by default `rm_set_default_run_program()`

- **Method prototype:**

```python
rm_set_default_run_program(self, tra_id: int) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `tra_id`      | `int` | Set the ID of online programming file that the IO runs by default. It is configurable from 0 to 100. 0 means canceling the setting.  |

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

print(arm.rm_set_default_run_program(8))

arm.rm_delete_robot_arm()
```

## Get the ID of program that the IO runs by default `rm_get_default_run_program()`

- **Method prototype:**

```python
rm_get_default_run_program(self) -> tuple[int, int]:
```

- **Return value:** <br>
`tuple[int,int]`: a tuple containing two elements. <br>

1. int: state codes executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. ID of online programming file

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   -  |    `int`   |    Obtained online programming running state dictionary, key: field names of rm_program_run_state_t.   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_default_run_program())

arm.rm_delete_robot_arm()
```
