# <p class="hidden">C、C++: </p>Five-Finger Dexterous Hand Configuration `handControl`

The RealMan robotic arm is equipped with an INSPIRE-ROBOTS five-fingered dexterous hand at its end-effector, which can be configured through this interface. It includes settings for gesture actions, movement angles, speed, force control range, etc.

## <div id = '6257'>Run dexterous hand target gesture sequence number `rm_set_hand_posture()`</div>

- **Method prototype:**

```C
int rm_set_hand_posture(rm_robot_handle * handle,int posture_num,bool block,int timeout)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `posture_num`  |    Input    |    Gesture sequence number pre-stored in the dexterous hand, range: 1-40.   |
|  `block`  |    Input    |    Blocking settings: <br> multi-thread mode: 0: non-blocking mode, immediately return after sending commands; 1: blocking mode, return after the robotic arm reaches the target position or the planning fails. <br>Single-thread mode: 0: non-blocking mode; other values: blocking mode, and timeout period setting according to the movement time, in s.   |
|   `timeout`  |    Input    |    Timeout setting in blocking mode, in s.   |

- **Return value:**

|Parameter|Type|Description|Handling Suggestions|
|-|-|-|-|
|0|`int`|Success.|-|
|1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
|-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
|-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|-4|`int`|The current in-position equipment verification fails, indicating the current in-position equipment is not a dexterous hand.|- **Detect Concurrent Control by Multiple Devices**: Check if other devices are sending motion commands to the robot arm, including the motion of the robot arm, gripper, dexterous hand, and elevator.<br> - **Monitor Command Events in Real-Time**: Register the callback function `rm_get_arm_event_call_back`:<br> ① Capture device arrival events (such as motion completion, timeout, etc.).<br> ② Determine the specific device type that triggered the event through the device parameter in the callback.|
|  -5  |    `int`    |    Timeout, no response returns.    |- **Check Timeout Setting**: In blocking mode, it supports configuring the timeout for waiting for the device to complete its motion. Ensure that the timeout is set longer than the device's motion time.<br> - **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|

- **Usage demo**
  
```C
//Set the dexterous hand to execute gesture 1 in blocking mode, and trigger a timeout if no response is received within 10 seconds
int posture_num = 1;
ret = rm_set_hand_posture(robot_handle,posture_num,true,10);
```

## <div id = '6259'>Run dexterous hand action sequence number `rm_set_hand_seq()`</div>

- **Method prototype:**

```C
int rm_set_hand_seq(rm_robot_handle * handle,int seq_num,bool block,int timeout)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `seq_num`  |    Input    |    Action sequence number pre-stored in the dexterous hand, range: 1-40.   |
|  `block`  |    Input    |    `true` indicates blocking mode, where the system waits for the dexterous hand to finish its movement before returning; <br>`false`indicates non-blocking mode, where the system returns immediately after sending the command.   |
|   `timeout`  |    Input    |    Timeout setting in blocking mode, in s.   |

- **Return value:**

|Parameter|Type|Description|Handling Suggestions|
|-|-|-|-|
|0|`int`|Success.|-|
|1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
|-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
|-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|-4|`int`|The current in-position equipment verification fails, indicating the current in-position equipment is not a dexterous hand.|- **Detect Concurrent Control by Multiple Devices**: Check if other devices are sending motion commands to the robot arm, including the motion of the robot arm, gripper, dexterous hand, and elevator.<br> - **Monitor Command Events in Real-Time**: Register the callback function `rm_get_arm_event_call_back`:<br> ① Capture device arrival events (such as motion completion, timeout, etc.).<br> ② Determine the specific device type that triggered the event through the device parameter in the callback.|
|  -5  |    `int`    |    Timeout, no response returns.    |- **Check Timeout Setting**: In blocking mode, it supports configuring the timeout for waiting for the device to complete its motion. Ensure that the timeout is set longer than the device's motion time.<br> - **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|

- **Usage demo**
  
```C
//Set the dexterous hand to execute action sequence 1 in blocking mode, and trigger a timeout if no response is received within 15 seconds
int posture_num = 1;
ret = rm_set_hand_seq(robot_handle,posture_num,true,15);
```

## Set the angles of the dexterous hand’s degrees of freedom`rm_set_hand_angle()`

Set the angles of the dexterous hand, which has 6 degrees of freedom: 1. Little finger, 2. Ring finger, 3. Middle finger, 4. Index finger, 5. Thumb bending, 6. Thumb rotation.

- **Method prototype:**

```C
int rm_set_hand_angle(rm_robot_handle * handle,const int * hand_angle)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `hand_angle`  |    Input    |    Array of predefined finger angles, range: 0-1,000. <br>Additionally, -1 indicates that no action will be performed for this degree of freedom, and the current state will be maintained.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Set the actions of each finger of the dexterous hand
const int angle[6]= {-1,100,200,300,400,500};
ret = rm_set_hand_angle(robot_handle,angle);
```

## Set the speed of the dexterous hand`rm_set_hand_speed()`

- **Method prototype:**

```C
int rm_set_hand_speed(rm_robot_handle * handle,int speed)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `speed`  |    Input    |    Finger speed, range: 1-1,000.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Set the speed of each finger of the dexterous hand
int speed = 500;
ret = rm_set_hand_speed(robot_handle,speed);
```

## Set the force threshold of the dexterous hand`rm_set_hand_force()`

- **Method prototype:**

```C
int rm_set_hand_force(rm_robot_handle * handle,int hand_force)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `hand_force`  |    Input    |    Finger force, range: 1-1,000.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Set the force threshold of the dexterous hand to 500
int force = 500;
ret = rm_set_hand_force(robot_handle,force);
```

## Set the angle follow control of the dexterous hand`rm_set_hand_follow_angle()`

- Set the follow angles of the dexterous hand, which has 6 degrees of freedom: 1. Little finger, 2. Ring finger, 3. Middle finger, 4. Index finger, 5. Thumb bending, 6. Thumb rotation. The control frequency is up to 50 Hz.
- Definition of angles of the dexterous hand (int16):
   1. OYMotion: angle of joint 1 of the first finger *100. <br>
   2. INSPIRE-ROBOTS: 0-2,000, obtain the relationship table between the driver stroke and angle by contacting technical support.

::: warning
To use this feature, you need to contact technical support to receive a customized firmware upgrade package for the dexterous hand (OYMotion or INSPIRE-ROBOTS).
:::

- **Method prototype:**

```C
int rm_set_hand_follow_angle(rm_robot_handle *handle, const int *hand_angle, int block);
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `hand_angle`  |    Input    | Set the actions of each finger of the dexterous hand. hand_angle represents the array of finger angles, controlled according to the angles defined by the manufacturer of the dexterous hand. For example: <br>1. INSPIRE-ROBOTS has an angle range from 0 to +2,000; <br>2. OYMotion has an angle range from -32,768 to +32,767.  |
|  `block`  |    Input    |    Set the timeout for waiting for the robotic arm's status return in milliseconds. When set to 0, it operates in non-blocking mode.   |

- **The angle definitions and motion ranges for each degree of freedom of INSPIRE-ROBOTS are as follows.**

| Angle | Legend |Range|
| :--- | :--- |:---|
| Little finger<br>Ring finger<br>Middle finger<br>Index finger | ![image6](../../../json/doc/image6.png) |19°-176.7°|
| Thumb bending angle | ![image7](../../../json/doc/image7.png) |-130-53.6°|
| Thumb rotation angle | ![image8](../../../json/doc/image8.png) |90°-165°|

- **The angle definitions and motion ranges for each degree of freedom of OYMotion are as follows.**

| Angle | Legend |Range|
| :--- | :--- |:---|
| Index finger<br>Middle finger<br>Ring finger<br>Little finger | ![image9](../../../json/doc/image9.png) |100.22°~178.37°<br> 97.81° ~ 176.06°<br>101.38°~176.54°<br>98.84°~174.86°|
| Thumb bending angle | ![image10](../../../json/doc/image10.png) |2.26° - 36.76°|
| Thumb rotation angle | ![image11](../../../json/doc/image11.png) |0° - 90°|

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// High-speed control of the dexterous hand, non-blocking mode
const int angle[6]= {0,100,200,300,400,500};
ret = rm_set_hand_follow_angle(robot_handle,angle,0);
```

## Set the position follow control of the dexterous hand`rm_set_hand_follow_pos()`

Set the follow positions of the dexterous hand, which has 6 degrees of freedom: 1. Little finger, 2. Ring finger, 3. Middle finger, 4. Index finger, 5. Thumb bending, 6. Thumb rotation. The control frequency is up to 50 Hz.

::: warning
To use this feature, you need to contact technical support to receive a customized firmware upgrade package for the dexterous hand (OYMotion or INSPIRE-ROBOTS).
:::

- **Method prototype:**

```C
int rm_set_hand_follow_pos(rm_robot_handle *handle, const int *hand_pos, int block);
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `hand_pos`  |    Input    |    Set the actions of each finger of the dexterous hand. hand_angle represents the array of finger positions, controlled according to the angles defined by the manufacturer of the dexterous hand. For example: <br>1. INSPIRE-ROBOTS has a position range from 0 to 1,000; <br>2. OYMotion has a position range from 0 to 65,535.  |
|  `block`  |    Input    |    Set the timeout for waiting for the robotic arm's status return in milliseconds. When set to 0, it operates in non-blocking mode.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// High-speed control of the dexterous hand, non-blocking mode
const int pos[6]= {0,100,200,300,400,500};
ret = rm_set_hand_follow_pos(robot_handle,pos,0);
```
