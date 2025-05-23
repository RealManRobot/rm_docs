# <p class="hidden">C, C++: </p>Drag Teaching Configuration `dragTeach`

During the drag teaching, the RealMan robotic arm records the drag trajectory and replays the trajectory according to the user's commands. This interface is intended for the drag teaching start control, the drag trajectory replay control, and the force-position hybrid control.

## Start the drag teaching `rm_start_drag_teach()`

- **Method prototype:**

```C
int rm_start_drag_teach(rm_robot_handle * handle,int trajectory_record)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `trajectory_record`  |    Input    |    Trajectory record during the drag teaching, 0: no record, 1: trajectory record.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Control the drag teaching mode of the robotic arm, and record the trajectory during the drag teaching
int trajectory_record = 1;
ret = rm_start_drag_teach(robot_handle,trajectory_record);
```

## Stop the drag teaching `rm_stop_drag_teach()`

- **Method prototype:**

```C
int rm_stop_drag_teach(rm_robot_handle * handle)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Exit the drag teaching mode
ret = rm_stop_drag_teach(robot_handle);
```

## Start the multiple drag teaching `rm_start_multi_drag_teach_new()`

- **Method prototype:**

```C
int rm_start_multi_drag_teach_new(rm_robot_handle * handle,rm_multi_drag_teach_t teach_state)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*
*Jump to [rm_multi_drag_teach_t](../../struct/multiDragTeach/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `teach_state`  |    Input    |     Multiple drag teaching parameter    |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

::: info
Possible reasons for failure

- The current robotic arm is not the 6-DoF force version (drag teaching in the 6-DoF force mode).
- The robotic arm is currently in IO emergency stop state.
- The robotic arm is currently in simulation mode.
- The input parameters are incorrect.
- During the drag teaching in the 6-DoF force mode, the robotic arm is currently in the singular zone.
:::

- **Usage demo**
  
```C
rm_multi_drag_teach_t teach = 
{
    {0,0,0,0,0,0},      //All axes are non-draggable
    0,      //Use the work frame
    0       //Disable the drag singular wall
};

teach.free_axes[0] = 1;     //The X-axis of the reference frame is draggable
ret = rm_start_multi_drag_teach_new(robot_handle, teach);
```

## Move to the trajectory origin `rm_drag_trajectory_origin()`

Before the trajectory replay, it is required to move the robotic arm to the trajectory origin. If the setting is correct, the robotic arm will move to the trajectory origin at a speed of 20.

- **Method prototype:**

```C
int rm_drag_trajectory_origin(rm_robot_handle * handle,int block)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `block`  |    Input    |    Blocking settings: <br> multi-thread mode: 0: non-blocking mode, immediately return after sending commands; 1: blocking mode, return after the robotic arm reaches the target position or the planning fails. <br>Single-thread mode: 0: non-blocking mode; other values: blocking mode, and timeout period setting according to the movement time, in s.   |

::: warning
For single-thread blocking mode, set the timeout period to return the trajectory after running within the timeout period.
:::

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//By default, the robotic arm moves to the trajectory origin in the multi-thread, blocking mode
ret = rm_drag_trajectory_origin(robot_handle,1);  
```

## Start the trajectory replay `rm_run_drag_trajectory()`

- **Method prototype:**

```C
int rm_run_drag_trajectory(rm_robot_handle * handle,int block)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

<br>It is available only after the drag teaching is complete, and the robotic arm is located at the trajectory origin. The rm_drag_trajectory_origin interface can be called to move the robotic arm to the trajectory origin.

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `block`  |    Input    |    Blocking settings: <br> multi-thread mode: 0: non-blocking mode, immediately return after sending commands; 1: blocking mode, return after the robotic arm reaches the target position or the planning fails. <br>Single-thread mode: 0: non-blocking mode; other values: blocking mode, and timeout period setting according to the movement time, in s.   |

::: warning
For single-thread blocking mode, set the timeout period to return the trajectory after running within the timeout period.
:::

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//By default, the drag teaching trajectory is replayed in the multi-thread, blocking mode
int block = 1;
ret = rm_run_drag_trajectory(robot_handle,block);
```

## Pause the trajectory replay `rm_pause_drag_trajectory()`

Control the pause of the robotic arm during the trajectory replay.

- **Method prototype:**

```C
int rm_pause_drag_trajectory(rm_robot_handle * handle)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Pause the trajectory replay
ret = rm_pause_drag_trajectory(robot_handle);
```

## Continue the trajectory replay `rm_continue_drag_trajectory()`

Control the continuation of the robotic arm after a pause during the trajectory replay.

- **Method prototype:**

```C
int rm_continue_drag_trajectory(rm_robot_handle * handle)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   handle  |    Input    |    Robotic arm handle.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Continue the trajectory replay
ret = rm_continue_drag_trajectory(robot_handle);
```

## Stop the trajectory replay `rm_stop_drag_trajectory()`

Control the stop of the robotic arm during the trajectory replay.

- **Method prototype:**

```C
int rm_stop_drag_trajectory(rm_robot_handle * handle)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Stop the trajectory replay
ret = rm_stop_drag_trajectory(robot_handle);
```

## <div id = '6243'>Save the drag teaching trajectory `rm_save_trajectory()`</div>

- **Method prototype:**

```C
int rm_save_trajectory(rm_robot_handle * handle,char * name,int * num)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `name`  |    Input    |    Path and name of the file to save the trajectory, including less than 300 characters, e.g., d:/rm_test.txt.   |
|   `num`  |    Output    |    Number of trajectory points.   |

- **Return value:**

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

- **Usage demo**
  
```C
//Save the drag teaching point to the specified path
char *name = "/home/realman/work/example.txt";
int num = -1;
ret = rm_save_trajectory(robot_handle, name, &num);
printf("rm_save_trajectory result :%d, num:%d\n", ret, num);
```

## Set the force-position hybrid control `rm_set_force_position()`

In Cartesian space trajectory planning, this function is available to ensure that the contact force of the end effector is constant when the force is not in the same direction as the robotic arm movement. Turn on the force-position hybrid control, perform the Cartesian space movement, and wait for 2s to issue the next movement command after receiving the feedback of the movement completion.

- **Method prototype:**

```C
int rm_set_force_position(rm_robot_handle * handle,int sensor,int mode,int direction,float N)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `sensor`  |    Input    |    0: 1-DoF force, 1: 6-DoF force.   |
|   `mode`  |    Input    |    0: force control in the base frame, 1: force control in the tool frame.   |
|   `direction`  |    Input    |    Force control direction, <br>0: along the X-axis, <br>1: along the Y-axis, <br>2: along the Z-axis, <br>3: along the RX orientation, <br>4: along the RY orientation, <br>5: along the RZ orientation.   |
|   `N`  |    Input    |    Magnitude of the force, in N.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Set the force control at the Z-axis of the 6-DoF force base frame to 5 N 
int sensor = 1;
int mode = 0;
int direction = 2;
float N = 5;                          
ret = rm_set_force_position(robot_handle, sensor, mode, direction, N);
```

## Set the force-position hybrid control `rm_set_force_position_new()`

In Cartesian space trajectory planning, this function is available to ensure that the contact force of the end effector is constant when the force is not in the same direction as the robotic arm movement. Turn on the force-position hybrid control, perform the Cartesian space movement, and wait for 2s to issue the next movement command after receiving the feedback of the movement completion.

- **Method prototype:**

```C
int rm_set_force_position_new(rm_robot_handle * handle, rm_force_position_t param)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*
*Jump to [rm_force_position_t](../../struct/forcePosition/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `param`  |    Input    |    Force-position hybrid control parameters.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
rm_force_position_t param = {
    1,
    1,
    {3, 3, 4, 3, 3, 3},
    {0, 0, 1, 0, 0, 0},
    {0.1, 0.1, 0.1, 10, 10, 10},
};

rm_set_force_position_new(robot_handle, param);
```

## Stop the force-position hybrid control `rm_stop_force_position()`

- **Method prototype:**

```C
int rm_stop_force_position(rm_robot_handle * handle)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   handle  |    Input    |    Robotic arm handle.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Stop the force-position hybrid control
ret = rm_stop_force_position(robot_handle);
```

## Set the drag teaching sensitivity of the current loop `rm_set_drag_teach_sensitivity()`

- **Method prototype:**

```C
int rm_set_drag_teach_sensitivity(rm_robot_handle * handle, int grade)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   handle  |    Input    |    Robotic arm handle.   |
|   grade  |    Input    |    Grades 0−100, in %. The initial state is kept when it is 100.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Set the sensitivity to 50%
ret = rm_set_drag_teach_sensitivity(robot_handle, 50);
```

## Get the drag teaching sensitivity of the current loop `rm_get_drag_teach_sensitivity()`

- **Method prototype:**

```C
int rm_get_drag_teach_sensitivity(rm_robot_handle * handle, int* grade)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   handle  |    Input    |    Robotic arm handle.   |
|   grade  |    Output    |    Grades 0−100, in %. The initial state is kept when it is 100.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
int grade;
ret = rm_get_drag_teach_sensitivity(robot_handle, &grade);
```

## <div id = '6245'>Set the 6-DoF Drag Mode `rm_set_force_drag_mode()`</div>

- **Method prototype**:

```C
int rm_set_force_drag_mode(rm_robot_handle * handle, int mode)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description**:

|   Parameter    |   Type    |   Description    |
| :--- | :--- | :--- |
|   handle  |    Input    |    Robot arm handle.   |
|   mode  |    Input    |   0 for fast drag mode, 1 for precise drag mode.    |

- **Return value**:

|   Parameter    |  Type    |   Description    |Handling Suggestions|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    Success.   |-|
|   1  |    `int`    |    The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.   |- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
|  -1  |    `int`    |    The data transmission fails, indicating that a problem occurs during the communication.   |**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
|  -2  |    `int`    |    The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.   |- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Change Notes](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|  -3  |    `int`    |    The return value parse fails, indicating that the received data format is incorrect or incomplete.   |**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Change Notes](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|  -4  |    `int`    |    The robot arm is not a 6-DoF version and does not support this feature.   |This function requires a six-dimensional force version of the robot arm. If the robot arm is a six-dimensional force version:<br>- **Check if the connection handle is valid**: An invalid connection handle will prevent the API from correctly obtaining the end-effector information of the robot arm.<br>- **Check the robot arm version information**: Ensure that the robot arm model is the six-dimensional force version to avoid mistakenly using a standard end-effector upgrade package for the robot arm, which would render this function unavailable.|

- **Usage demo**
  
```C
// Set precise drag mode
ret = rm_set_force_drag_mode(robot_handle, 1);
```

## <div id = '6247'>Get the 6-DoF Drag Mode `rm_get_drag_teach_sensitivity()`</div>

- **Method prototype**:

```C
int rm_get_force_drag_mode(rm_robot_handle * handle, int* mode)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description**:

|   Parameter    |   Type    |   Description    |
| :--- | :--- | :--- |
|   handle  |    Input    |    Robot arm handle.    |
|   mode   |    Output    |    0 for fast drag mode, 1 for precise drag mode.    |

- **Return value**:

|   Parameter    |  Type    |   Description    |Handling Suggestions|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    Success.   |-|
|   1  |    `int`    |    The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.   |- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
|  -1  |    `int`    |    The data transmission fails, indicating that a problem occurs during the communication.   |**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
|  -2  |    `int`    |    The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.   |- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Change Notes](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|  -3  |    `int`    |    The return value parse fails, indicating that the received data format is incorrect or incomplete.   |**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Change Notes](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|  -4  |    `int`    |    The robot arm is not a 6-DoF version and does not support this feature.   |This function requires a six-dimensional force version of the robot arm. If the robot arm is a six-dimensional force version:<br>- **Check if the connection handle is valid**: An invalid connection handle will prevent the API from correctly obtaining the end-effector information of the robot arm.<br>- **Check the robot arm version information**: Ensure that the robot arm model is the six-dimensional force version to avoid mistakenly using a standard end-effector upgrade package for the robot arm, which would render this function unavailable.|

- **Usage demo**
  
```C
int mode;
ret = rm_get_force_drag_mode(robot_handle, &mode);
```
