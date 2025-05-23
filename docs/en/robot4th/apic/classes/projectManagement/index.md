# <p class="hidden">C and C++: </p>Online Programming Configuration `projectManagement`

This interface supports the sending and management of online programming files, global waypoint management, and other functions.

## Change the speed ratio in trajectory planning `rm_set_plan_speed()`

- **Method prototype:**

```C
int rm_set_plan_speed(rm_robot_handle * handle,int speed)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_send_project_t](../../struct/sendProject/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `speed`  |    Input    |    Speed data of the current progress bar.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
int speed = 20;
ret = rm_set_plan_speed(robot_handle,speed);
```

## Get online program list `rm_get_program_trajectory_list()`

- **Method prototype:**

```C
int rm_get_program_trajectory_list(rm_robot_handle * handle,int page_num,int page_size,const char * vague_search,rm_program_trajectorys_t * trajectorys)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_program_trajectorys_t](../../struct/programTrajectorys/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `page_num`   |    Input    |    Page number.   |
|   `page_size`   |    Input    |    Page size.   |
|   `vague_search`   |    Input    |    Keyword for vague search.   |
|   `trajectorys`  |    Output    |    Online program list.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Query 10 online programming files on page 1.
int page_num = 1;
int page_size = 10;
const char *vague_search;
rm_program_trajectorys_t program_trajectorys;
int result = rm_get_program_trajectory_list(robot_handle, page_num, page_size, vague_search, &program_trajectorys);
printf("rm_get_program_trajectory_list result : %d\n", result);
```

## <div id = '6263'>Run Specified Program File `rm_set_program_id_run()`</div>

- **Method prototype:**

```C
int rm_set_program_id_run(rm_robot_handle * handle,int id,int speed,int block)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `id`  |    Input    |    Page number.   |
|   `speed`  |    Input    |    1−100, speed required to run the trajectory. If set to 0, run at the saved speed.   |
|   `block`  |    Input    |    Blocking settings: <br>multi-thread mode: 0: non-blocking mode, immediately return after sending commands; 1: blocking mode, return after the robotic arm reaches the target position or the planning fails. <br>Single-thread mode: 0: non-blocking mode; other values: blocking mode, and timeout period setting according to the movement time, in s.   |

::: warning
For single-thread blocking mode, set the timeout period to return the trajectory after running within the timeout period.
:::

- **Return value:**

<div class='tableWrap'>

|Parameter|Type|Description|Handling Suggestions|
|-|-|-|-|
|0|`int`|Success.|-|
|1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
|-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
|-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|  -4  |    `int`   |   The running has stopped, but the successful running information is not received. The trajectory may have stopped outside the range.   |Determine whether the trajectory has been externally stopped, such as by triggering pause, stop, or similar buttons.|

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

- **Usage demo**
  
```C
// Run the online programming file with the ID 1 at the default speed in blocking mode (multi-thread mode by default)
ret = rm_set_program_id_run(robot_handle, 1, 0, 1);
printf("rm_set_program_id_run result :%d\n", ret);
```

## <div id = '6303'>Query Flowchart Program Run State `rm_get_flowchart_program_run_state()`</div>

- **Method prototype:**

```C
int rm_get_flowchart_program_run_state(rm_robot_handle *handle, rm_flowchart_run_state_t *run_state);
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_flowchart_run_state_t](../../struct/flowchartstate/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |   Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.    |
|   `run_state`   |    Output    |    Flowchart Run State Structure.    |

- **Return value:**

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

- **Usage demo**
  
```C
rm_flowchart_run_state_t run_state = {0};
ret = rm_get_flowchart_program_run_state(handle, &run_state);
```

## Delete the specified trajectory `rm_delete_program_trajectory()`

- **Method prototype:**

```C
int rm_delete_program_trajectory(rm_robot_handle * handle,int id)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_program_run_state_t](../../struct/programRunState/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `id`   |    Input    |    ID of specified trajectory.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Delete the online programming file with the ID 50
ret = rm_delete_program_trajectory(robot_handle, 50);
printf("delete program trajectory result : %d\n", ret);
```

## Update the information of the specified trajectory `rm_update_program_trajectory()`

- **Method prototype:**

```C
int rm_update_program_trajectory(rm_robot_handle * handle,int id,int speed,const char * name)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `id`   |    Input    |    ID of specified trajectory.   |
|   `speed`   |    Input    |    Updated planned speed ratio 1−100.   |
|   `name`   |    Input    |    Updated file name.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Update the online programming file with the ID 1: planned speed ratio: 50%, file name: "test"
ret = rm_update_program_trajectory(robot_handle,1,50,"test");
printf("update program trajectory result : %d\n", ret);
```

## Set the ID of program that the IO runs by default `rm_set_default_run_program()`

- **Method prototype:**

```C
int rm_set_default_run_program(rm_robot_handle * handle,int id)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `id`   |    Input    |    Set the ID of online programming file that the IO runs by default. It is configurable from 0 to 100. 0 means canceling the setting.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Set the ID of online programming file that the IO runs by default to 1
int ret = -1;
ret = rm_set_default_run_program(robot_handle, 1);
```

## Get the ID of program that the IO runs by default `rm_get_default_run_program()`

- **Method prototype:**

```C
int rm_get_default_run_program(rm_robot_handle * handle,int * id)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `id`   |    Output    |    Save the ID of online programming file that the IO runs by default. It is configurable from 0 to 100. 0 means canceling the setting.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
int id;
ret = rm_get_default_run_program(robot_handle, id);
```
