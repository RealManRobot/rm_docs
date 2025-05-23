# <p class="hidden">C, C++: </p>End Effector Motion Parameter Configuration `armTipVelocityParameters`

The setting and query of the end effector motion parameters include linear speed, linear acceleration, angular speed, angular acceleration, collision stage, etc.

## Set the maximum linear speed of the end effector `rm_set_arm_max_line_speed()`

- **Method prototype:**

```C
int rm_set_arm_max_line_speed(rm_robot_handle * handle,float speed)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `speed`  |    Input    |    Maximum linear speed of the end effector, in m/s.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Set the maximum linear speed of the end effector to 0.1 m/s
float speed = 0.1;
ret = rm_set_arm_max_line_speed(robot_handle,speed);
```

## Set the maximum linear acceleration of the end effector `rm_set_arm_max_line_acc()`

- **Method prototype:**

```C
int rm_set_arm_max_line_acc(rm_robot_handle * handle,float acc)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `acc`  |    Input    |    Maximum linear acceleration of the end effector, in m/s2.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Set the maximum linear acceleration of the end effector to 2 m/s2
float acc = 2;
ret = rm_set_arm_max_line_acc(robot_handle,acc);
```

## Set the maximum angular speed of the end effector `rm_set_arm_max_angular_speed()`

- **Method prototype:**

```C
int rm_set_arm_max_angular_speed(rm_robot_handle * handle,float speed)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `speed`  |    Input    |    Maximum angular speed of the end effector, in rad/s.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Set the maximum angular speed of the end effector to 0.2 rad/s
float speed = 0.2;
ret=rm_set_arm_max_angular_speed(robot_handle,speed);
```

## Set the maximum angular acceleration of the end effector `rm_set_arm_max_angular_acc()`

- **Method prototype:**

```C
int rm_set_arm_max_angular_acc(rm_robot_handle * handle,float acc)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `acc`  |    Input    |    Maximum angular acceleration of the end effector, in rad/s2.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Set the maximum angular acceleration of the end effector to 4 rads/s2
float acc = 4;
ret = rm_set_arm_max_angular_acc(robot_handle,acc);
```

## Set the end effector parameters to defaults `rm_set_arm_tcp_init()`

- **Method prototype:**

```C
int rm_set_arm_tcp_init(rm_robot_handle * handle)
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
//Initialize the parameters of the robotic arm, and the end effector parameters will be restored to defaults. The defaults of the end effector are:
//Linear speed: 0.1 m/s; linear acceleration: 0.5 m/s2
//Angular speed: 0.2 rad/s; angular acceleration: 1 rad/s2
ret = rm_set_arm_tcp_init(robot_handle);
```

## Set the dynamic collision stage `rm_set_collision_state()`

- **Method prototype:**

```C
int rm_set_collision_state(rm_robot_handle * handle,int collision_stage)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `collision_stage`  |    Input    |    Stage: 0−8; 0: no collision detection, 8: most sensitive collision detection.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Set the collision stage of the robotic arm to 1
int stage = 1;
ret=rm_set_collision_state(robot_handle,stage,RM_BLOCK);
```

## Get the collision stage `rm_get_collision_stage()`

- **Method prototype:**

```C
int rm_get_collision_stage(rm_robot_handle * handle,int * collision_stage)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `collision_stage`  |    Output    |    Save the returned collision stage, <br> value: 0−8; 0: no collision detection, 8: most sensitive collision detection.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Query the dynamic collision stage of the robotic arm
int stage = -1;
ret = rm_get_collision_stage(robot_handle,&stage);
```

## Get the maximum linear speed of the end effector `rm_get_arm_max_line_speed()`

- **Method prototype:**

```C
int rm_get_arm_max_line_speed(rm_robot_handle * handle,float * speed)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `speed`  |    Output    |    Save the returned maximum linear speed of the end effector, in m/s.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Get the linear speed of the end effector
float speed = 0;                                                              
ret = rm_get_arm_max_line_speed(robot_handle,&speed);
```

## Get the maximum linear acceleration of the end effector `rm_get_arm_max_line_acc()`

- **Method prototype:**

```C
int rm_get_arm_max_line_acc(rm_robot_handle * handle,float * acc)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `acc`  |    Output    |    Save the returned maximum linear acceleration of the end effector, in m/s2.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Get the linear acceleration of the end effector
float acc = 0;                                                            
ret = rm_get_arm_max_line_acc(robot_handle,&acc);      
```

## Get the maximum angular speed of the end effector `rm_get_arm_max_angular_speed()`

- **Method prototype:**

```C
int rm_get_arm_max_angular_speed(rm_robot_handle * handle,float * speed)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `speed`  |    Output    |    Save the returned maximum angular speed of the end effector, in rad/s.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Get the angular speed of the end effector
float speed = 0;
ret = rm_get_arm_max_angular_speed(robot_handle,&speed);
```

## Get the maximum angular acceleration of the end effector `rm_get_arm_max_angular_acc()`

- **Method prototype:**

```C
int rm_get_arm_max_angular_speed(rm_robot_handle * handle,float * speed)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `acc`  |    Output    |    Save the returned maximum angular acceleration of the end effector, in rad/s2.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Get the angular acceleration of the end effector
float acc = 0;
ret = rm_get_arm_max_angular_speed(robot_handle,&acc);
```

## Set DH Parameters `rm_set_DH_data()`

- **Method prototype**:

```C
int rm_set_DH_data(rm_robot_handle * handle, rm_dh_t dh)
```

*You can refer to the detailed descriptions of the [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_dh_t](../../struct/dh/index.md) structures.*

- **Parameter description**:

|   Parameter    |   Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robot arm handle.  |
|  `dh`  |    Input    |   DH parameters.  |

- **Return value**:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Set the current DH parameters for the robot arm (example values; modify according to actual requirements)
rm_dh_t dh_data = {
    .a = {0.0, 0.0, 0.0, 0.0, 0.0, 0.0},
    .d = {0.0, 0.0, 0.0, 0.0, 0.0, 0.0},
    .alpha = {0.0, 0.0, 0.0, 0.0, 0.0, 0.0},
    .offset = {0.0, 0.0, 0.0, 0.0, 0.0, 0.0}
};
rm_set_DH_data(handle, dh_data);
```

## Get DH Parameters `rm_get_DH_data()`

- **Method prototype**:

```C
int rm_get_DH_data(rm_robot_handle * handle, rm_dh_t *dh)
```

*You can refer to the detailed descriptions of the [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_dh_t](../../struct/dh/index.md) structures.*

- **Parameter description**:

|   Parameter    |   Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robot arm handle.   |
|  `dh`  |    Output    |    DH parameters.   |

- **Return value**:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Query the robot arm's DH parameters
rm_dh_t dh_data;
ret = rm_get_DH_data(handle, &dh_data);
```

## Restore Default DH Parameters `rm_set_DH_data_default()`

- **Method prototype**:

```C
int rm_set_DH_data_default(rm_robot_handle * handle)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description**:

|   Parameter    |   Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |   Robot arm handle. |

- **Return value**:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Restore the robot arm's default DH parameters
ret = rm_set_DH_data_default(handle);
```
