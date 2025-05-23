# <p class="hidden">C and C++: </p>Robotic Arm Connection Configuration `ArmRobotic`

This module provides interfaces for API and robotic arm initialization, including API version number query, API initialization, robotic arm connection/disconnection, log setting, robotic arm simulation/real mode setting, robotic arm information acquisition, motion information, and registration of robotic arm real-time state callback function, etc.

## Query sdk version number `rm_api_version()`

- **Method prototype:**

```C
char* rm_api_version(void)
```

- **Return value:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   /  |    `char*`    |    Returned version number    |

- **Usage demo**
  
```C
char *version = rm_api_version();
printf("api version: %s\n", version);
```

## <div id = '6265'>Initialize thread mode `rm_init()`</div>

- **Method prototype:**

```C
int rm_init(rm_thread_mode_e mode)
```

*Jump to [rm_thread_mode_e](../../type/index.md#rm_thread_mode_e-thread-mode) for details of types*

- **Parameter description:**

|   Parameter    |   Description    |
| :--- | :--- |
|   mode：`RM_SINGLE_MODE_E`    |    Single-thread mode, waiting for data return in a non-blocking manner.   |
|   mode：`RM_DUAL_MODE_E`   |   Dual-thread mode, adding a receiving thread to monitor data in the queue.   |
|   mode：`RM_TRIPLE_MODE_E`   |   Triple-thread mode, adding a thread to monitor UDP interface data based on the dual-thread mode.   |

- **Return value:**

|   Parameter    |  Type    |   Description    |Handling Suggestions|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    Success.   |-|
|  -1  |    `int`    |    Creation of thread fails. Check the log for specific errors    |Obtain detailed error information when thread creation fails through logs:<br> On Windows, when a thread creation error occurs, the specific error code can be obtained by calling the `GetLastError` function, and its definition can be viewed in the Windows header file `<windows.h>`.<br> On Linux, when a thread creation error occurs, the return value of `pthread_create` is returned, and its return value definition can be viewed in `<pthread.h>`.|

- **Usage demo**
  
```C
// The initial thread mode is triple-thread mode
rm_init(RM_TRIPLE_MODE_E);
```

## Destroy all threads `rm_destory()`

::: warning
This will disable all connections.
:::

- **Method prototype:**

```C
int rm_destory(void )
```

- **Return value:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   0  |    `int`    |    Success    |

- **Usage demo**
  
```C
rm_destory();
```

## Configure log printing `rm_set_log_call_back()`

- **Method prototype:**

```C
void rm_set_log_call_back(void(*)(const char *message, va_list args) LogCallback, int level)
```

*Jump to [rm_thread_mode_e](../../type/index.md#rm_thread_mode_e-thread-mode) for details of types*

- **Parameter description:**

|   Parameter    |   Description    |
| :--- | :--- |
|   `LogCallback`  |    Log printing callback function.   |
|   `level`  |   Log printing level. 0: debug level; 1: info level; 2: warn level; 3: error level.   |

- **Usage demo**
  
```C
// Get the current time information
char *get_cur_time()
{
  static char s[32] = {0};
  struct tm* ltime;
  struct timeval stamp;
  gettimeofday(&stamp, NULL);
  ltime = localtime(&stamp.tv_sec);
  strftime(s, 20, "%Y%m%d %H:%M:%S", ltime);
  return s;
}

// Log callback function
void api_log(const char* message, va_list args) {
    printf("[%s]: ",get_cur_time());
    vfprintf(stdout, message, args);
}

// Register the log printing callback function to print the error-level log information
rm_set_log_call_back(api_log, 3);
```

## Set Global Timeout `rm_set_timeout()`

- **Method prototype**：

```C
void rm_set_timeout(int timeout)
```

- **Parameter description:**

|   Parameter    |   Description     |
| :--- | :--- |
|   `timeout`  |  The timeout for receiving instructions from the controller. The default timeout for most interfaces is 500ms. Unit: ms. |

- **Usage demo**
  
```C
rm_set_timeout(500);
```

## Create a robotic arm control instance `rm_create_robot_arm()`

- **Method prototype:**

```C
rm_robot_handle* rm_create_robot_arm(const char * ip, int port)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |   Description    |
| :--- | :--- |
|   `ip`  |    IP address of robotic arm.   |
|   `port`  |   Port No. of robotic arm.   |

- **Return value:**

After the instance is created successfully, the robotic arm control [rm_robot_handle](../../struct/robotHandle/index.md) handle ID will be returned. The ID will be greater than 0 if connection succeeds. If connection fails, "-1" will be returned, and if the maximum number of connections is reached, "void" will be returned.

- **Usage demo**
  
```C
rm_robot_handle *robot_handle = rm_create_robot_arm("192.168.1.18",8080);
if(robot_handle->id == -1)
{
    rm_delete_robot_arm(robot_handle);
    printf("arm connect err...\n");
}
else if(robot_handle != NULL)
{
    printf("connect success,arm id %d\n",robot_handle->id);
}
```

## <div id = '6267'>Delete the specified robotic arm instance `rm_delete_robot_arm()`</div>

- **Method prototype:**

```C
int rm_delete_robot_arm(rm_robot_handle * handle)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Variable    |   Description    |
| :--- | :--- |
|   `handle`  |    Robotic arm handle to delete.   |

- **Return value:**

|   Parameter    |  Type    |   Description    |Handling Suggestions|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    Success.   |-|
|  -1  |    `int`   |   No corresponding handle found, the handle is either void or has been deleted.   |Check if the handle parameter passed in is valid.|

- **Usage demo**
  
```C
rm_delete_robot_arm(robot_handle);
```

## Set robotic arm simulation/real mode `rm_set_arm_run_mode()`

- **Method prototype:**

```C
int rm_set_arm_run_mode(rm_robot_handle * handle,int mode)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |   Description    |
| :--- | :--- |
|   `handle`  |    Robotic arm control handle.   |
|   `mode`  |    0: simulation mode; 1: real mode.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Set the robotic arm to simulation mode
int ret = rm_set_arm_run_mode(robot_handle, 0);   
if (ret == 0) {  
    // Succeed  
    printf("Robot arm run mode set successfully.\n");  
} else {  
    // Fail
    printf("Failed to set robot arm run mode. Error code: %d\n", ret);  
}
```

## Get robotic arm simulation/real mode `rm_get_arm_run_mode()`

- **Method prototype:**

```C
int rm_get_arm_run_mode(rm_robot_handle * handle,int * mode)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |   Description    |
| :--- | :--- |
|   `handle`  |    Robotic arm control handle.   |
|   `mode`  |    0: simulation mode; 1: real mode.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
int mode;
ret = rm_get_arm_run_mode(robot_handle, &mode);   
if (ret == 0) {  
    // Succeed  
    printf("Robot arm run mode get successfully. Current run mode: %d\n", mode);  
} else {  
    // Handle in case of setting failure
    printf("Failed to get robot arm run mode. Error code: %d\n", ret);  
}
```

## <div id = '6305'>Set Robotic Arm Emergency Stop State `rm_set_arm_emergency_stop()`</div>

- **Method prototype:**

```C
int rm_set_arm_emergency_stop(rm_robot_handle *handle, bool state);
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter  | Type | Description    |
| :--- | :--- |:--- |
|   `handle`  | `int` | Robotic arm control handle.    |
|   `state`  | `bool` | Emergency stop state, `true`: Emergency stop, `false`: Resume.   |

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
// Set the robotic arm to emergency stop
ret = rm_set_arm_emergency_stop(handle, true);
printf("arm emergency stop result : %d\n", ret);
```

## <div id = '6269'>Get basic information of robotic arm `rm_get_robot_info()`</div>

- **Method prototype:**

```C
int rm_get_robot_info(rm_robot_handle * handle,rm_robot_info_t * robot_info)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_robot_info_t](../../struct/robotInfo/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm control handle.   |
|   `robot_info`  |    Input    |    Structure storing the basic information of robotic arm.   |

- **Return value:**

|   Parameter    |  Type    |   Description    |Handling Suggestions|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    Success.   |-|
|  -1  |    `int`   |   No corresponding handle found, the handle is either void or has been deleted.   |Check if the passed-in handle is valid.|
|  -2  |    `int`   |   The obtained basic information of robotic arm is invalid. Check if the handle has been deleted.   |Check if the passed-in handle is valid.|

- **Usage demo**

```C
rm_robot_info_t info;
rm_get_robot_info(handle, &info);
printf("robot controller version: %d\n", info.robot_controller_version);
```

## Register the robotic arm event callback function `rm_get_arm_event_call_back()`

- **Method prototype:**

```C
void rm_get_arm_event_call_back(rm_event_callback_ptr event_callback)
```

*Here the robotic arm event callback function `rm_event_callback_ptr` is used. <br>Method prototype: `typedef void(* rm_event_callback_ptr) (rm_event_push_data_t data)`. <br>Jump to [rm_realtime_arm_joint_state_t](../../struct/realtimeArmJointState/index.md) for details of the structure.*

::: warning
This function cannot be used to get the in-position information in single-thread mode.
:::

- **Parameter description:**

|   Parameter    |   Value    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    User-defined    |    Robotic arm control handle.   |
|   `event_callback`  |    User-defined    |    Robotic arm event callback function. This function receives rm_event_push_data_t data as parameters, and returns no value.   |

- **Usage demo**
  
```C
// Robotic arm event callback function
void callback_event(rm_event_push_data_t data)
{
    printf("CallbackCallbackCallbackCallbackCallback\n");
    switch (data.event_type)
    {
    case RM_CURRENT_TRAJECTORY_STATE_E:
        printf("Current trajectory running result: %d, device in position: %d, existence of following trajectory: %d\n",data.trajectory_state,data.device, data.trajectory_connect);
        break;
    case RM_PROGRAM_RUN_FINISH_E:
        printf("Online program running ends, ending program ID: %d\n", data.program_id);
        break;
    default:
        break;
    }
}
// Register the robotic arm event callback function
rm_get_arm_event_call_back(callback_event);
```
