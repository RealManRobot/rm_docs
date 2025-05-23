# <p class="hidden">C、C++: </p>Joint Configuration `jointConfigSettings`

This refers to setting the joint parameters of the robotic arm, such as speed, acceleration, limit, zero position, and joint error information. <br>

If a joint error occurs, the joint parameters cannot be modified, and the error code must first be cleared. Additionally, before configuring the joint, it must first be disabled; otherwise, the settings will not be applied successfully. <br>

Once all joint parameters are modified, they are automatically saved to the joint's Flash and take effect immediately. Afterward, the joint will be in a disabled state, and a command must be sent to re-enable the joint for normal operation.

## Set joint maximum speed`rm_set_joint_max_speed()`

- **Method prototype:**

```C
int rm_set_joint_max_speed(rm_robot_handle * handle,int joint_num,float max_speed)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `joint_num`  |    Input    |    Joint number.   |
|  `max_speed`  |    Input    |    Joint maximum speed, in °/s.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Set maximum speed of joint 1 to 180°/s  
int ret = rm_set_joint_max_speed(robot_handle,1,180);
printf("set_joint_max_speed result:%d\n",ret);
```

## Set joint maximum acceleration`rm_set_joint_max_acc()`

- **Method prototype:**

```C
int rm_set_joint_max_acc(rm_robot_handle *handle,int joint_num,float max_acc)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `joint_num`  |    Input    |    Joint number.   |
|  `max_acc`  |    Input    |    Joint maximum acceleration, in °/s².   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Set maximum acceleration of joint 2 to 600°/s²
int joint_num = 2;
float acc = 600;
ret = rm_set_joint_max_acc(robot_handle,joint_num,acc);
```

## Set joint minimum limit`rm_set_joint_min_pos()`

- **Method prototype:**

```C
int rm_set_joint_min_pos(rm_robot_handle * handle,int joint_num,float min_pos)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `joint_num`  |    Input    |    Joint number.   |
|  `min_pos`  |    Input    |    Joint minimum position, in °.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Set the minimum limit of joint 1 to -178°
int joint_num = 1;                                                        
float joint = -178;                                                        
ret=rm_set_joint_min_pos(robot_handle,joint_num,joint);
```

## Set joint maximum limit`rm_set_joint_max_pos()`

- **Method prototype:**

```C
int rm_set_joint_max_pos(rm_robot_handle * handle,int joint_num,float max_pos)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `joint_num`  |    Input    |    Joint number.   |
|  `max_pos`  |    Input    |    Joint maximum position, in °.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Set the maximum limit of joint 6 to 360°
int joint_num = 6;
float joint = 360;
ret = rm_set_joint_max_pos(robot_handle,joint_num,joint);
```

## Set joint maximum speed (driver)`rm_set_joint_drive_max_speed()`

- **Method prototype:**

```C
int rm_set_joint_drive_max_speed(rm_robot_handle * handle,int joint_num,float max_speed)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `joint_num`  |    Input    |    Joint number.   |
|  `max_speed`  |    Input    |    Joint maximum speed, in °/s.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Set the maximum speed of joint driver 1 to 180°/s
int ret = rm_set_joint_drive_max_speed(robot_handle,1,180);
printf("rm_set_joint_drive_max_speed result:%d\n",ret);
```

## Set joint maximum acceleration (driver)`rm_set_joint_drive_max_acc()`

- **Method prototype:**

```C
int rm_set_joint_drive_max_acc(rm_robot_handle * handle,int joint_num,float max_speed)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `joint_num`  |    Input    |    Joint number.   |
|  `max_acc`  |    Input    |    Joint maximum acceleration, in °/s².   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Set the maximum acceleration of joint driver 2 to 600°/s²
int joint_num = 2;
float acc = 600;
ret = rm_set_joint_drive_max_acc(robot_handle,joint_num,acc);
```

## Set joint minimum limit (driver)`rm_set_joint_drive_min_pos()`

- **Method prototype:**

```C
int rm_set_joint_drive_min_pos(rm_robot_handle * handle,int joint_num,float min_pos)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `joint_num`  |    Input    |    Joint number.   |
|  `min_pos`  |    Input    |    Joint minimum position.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Set the minimum limit of joint driver 6 to -360°
int joint_num = 6;                                                        
float joint = -360;                                                        
ret=rm_set_joint_drive_min_pos(robot_handle,joint_num,joint);
```

## Set joint maximum limit (driver)`rm_set_joint_drive_max_pos()`

- **Method prototype:**

```C
int rm_set_joint_drive_max_pos(rm_robot_handle * handle,int joint_num,float max_pos)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `joint_num`  |    Input    |    Joint number.   |
|  `max_pos`  |    Input    |    Joint maximum position.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Set the maximum limit of joint driver 6 to 360°
int joint_num = 6;
float joint = 360;
ret = rm_set_joint_drive_max_pos(robot_handle,joint_num,joint);
```

## Set joint enable state`rm_set_joint_en_state()`

- **Method prototype:**

```C
int rm_set_joint_en_state(rm_robot_handle * handle,int joint_num,int en_state)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `joint_num`  |    Input    |    Joint number.   |
|  `en_state`  |    Input     |    1: Enable 0: Disable.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Enable joint 1
int joint_num = 1;                                                         
ret=rm_set_joint_en_state(m_sockhand,joint_num,true,RM_BLOCK);
```

## Set joint zero position `rm_set_joint_zero_pos()`

- **Method prototype:**

```C
int rm_set_joint_zero_pos(rm_robot_handle * handle,int joint_num)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `joint_num`  |    Input    |    Joint number.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Set the current position of joint 3 to zero position
int joint_num = 3;                                                         
ret = rm_set_joint_zero_pos(m_sockhand,joint_num); 
```

## Clear joint error code`rm_set_joint_clear_err()`

- **Method prototype:**

```C
int rm_set_joint_clear_err(rm_robot_handle * handle,int joint_num)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `joint_num`  |    Input    |    Joint number.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Clear joint 2 error code
int joint_num = 2;                                                          
ret=rm_set_joint_clear_err(m_sockhand,joint_num);  
```

## Restore joint factory limit`rm_auto_set_joint_limit()`

- **Method prototype:**

```C
int rm_auto_set_joint_limit(rm_robot_handle *handle,int limit_mode)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `limit_mode`  |    Input    |    1: Normal mode, where each joint's limits are defined by the soft limit and hardware limit from the specification parameters.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
ret = rm_auto_set_joint_limit(robot_handle, 1);
printf("set joint limit result : %d\n", ret);
```
