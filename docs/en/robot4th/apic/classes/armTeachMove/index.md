# <p class="hidden">C, C++: </p>Robotic Arm Teaching Command `armTeachMove`

Robotic arm teaching control commands include step and teaching control of joints, position, and orientation.

## Joint step `rm_set_joint_step()`

- **Method prototype:**

```C
int rm_set_joint_step(rm_robot_handle * handle,int joint_num,float step,int v,int block)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `joint_num`  |    Input    |    Joint numbers 1−7.   |
|  `step`  |    Input    |    Step angle.   |
|  `v`  |    Input    |    Velocity ratio: 1−100, indicating the percentage of the planned velocity and acceleration to the maximum linear velocity and acceleration of the joint.   |
|  `block`  |    Input    |    Blocking settings: <br> multi-thread mode: 0: non-blocking mode, immediately return after sending commands; 1: blocking mode, return after the robotic arm reaches the target position or the planning fails. <br>Single-thread mode: 0: non-blocking mode; other values: blocking mode, and timeout period setting according to the movement time, in s.   |

::: warning
For single-thread blocking mode, set the timeout period to return the trajectory after running within the timeout period.
:::

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// By default, the current thread mode is multi-thread, blocking mode, and forward movement of joint 1 for 10° at a velocity of 50%
rm_set_joint_step(robot_handle, 1, 10, 50, 1); 
```

## Position step `rm_set_pos_step()`

In the current work frame, set the position step.

- **Method prototype:**

```C
int rm_set_pos_step(rm_robot_handle * handle,rm_pos_teach_type_e type,float step,int v,int block)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*
*Jump to [rm_pos_teach_type_e](../../type/index.md#rm_pos_teach_type_e-position-teaching-direction) for details of types*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `type`  |    Input    |    Teaching type.   |
|  `step`  |    Input    |    Step distance in m, with an accuracy of 0.001 mm.   |
|  `v`  |    Input    |    Velocity ratio: 1−100, indicating the percentage of the planned velocity and acceleration to the maximum linear velocity and acceleration of the joint.   |
|  `block`  |    Input    |    Blocking settings: <br> multi-thread mode: 0: non-blocking mode, immediately return after sending commands; 1: blocking mode, return after the robotic arm reaches the target position or the planning fails. <br>Single-thread mode: 0: non-blocking mode; other values: blocking mode, and timeout period setting according to the movement time, in s.   |

::: warning
For single-thread blocking mode, set the timeout period to return the trajectory after running within the timeout period.
:::

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

::: warning
The reference frame is the current work frame by default, which can be modified to the tool frame by calling `rm_set_teach_frame`.
:::

- **Usage demo**
  
```C
// By default, the current thread mode is multi-thread, blocking mode, and forward step of 0.05 m along the X-axis of the current work frame
rm_set_pos_step(robot_handle, RM_X_DIR_E, 0.05f, 50, 1);  
```

## Orientation step `rm_set_ort_step()`

In the current work frame, set the orientation step.

- **Method prototype:**

```C
int rm_set_ort_step(rm_robot_handle * handle,rm-ort-teach-type-e type,float step,int v,int block)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*
*Jump to [rm-ort-teach-type-e](../../type/index.md#rm_ort_teach_type_e-orientation-teaching-direction) for details of types*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `type`  |    Input    |    Teaching type.   |
|  `step`  |    Input    |    Step radian in rad, with an accuracy of 0.001 rad.   |
|  `v`  |    Input    |    Velocity ratio: 1−100, indicating the percentage of the planned velocity and acceleration to the maximum linear velocity and acceleration of the joint.   |
|  `block`  |    Input    |    Blocking settings: <br> multi-thread mode: 0: non-blocking mode, immediately return after sending commands; 1: blocking mode, return after the robotic arm reaches the target position or the planning fails. <br>Single-thread mode: 0: non-blocking mode; other values: blocking mode, and timeout period setting according to the movement time, in s.   |

::: warning
For single-thread blocking mode, set the timeout period to return the trajectory after running within the timeout period.
:::

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

::: warning
The reference frame is the current work frame by default, which can be modified to the tool frame by calling `rm_set_teach_frame`.
:::

- **Usage demo**
  
```C
// By default, the current thread mode is multi-thread, blocking mode, and backward rotation of 0.5 rad along the X-axis at a velocity of 20%
rm_set_ort_step(robot_handle, RM_RX_ROTATE_E, -0.5f, 20, 1); 
```

## Set teaching frame `rm_set_teach_frame()`

- **Method prototype:**

```C
int rm_set_teach_frame(rm_robot_handle * handle,int frame_type)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*
*Jump to [rm-ort-teach-type-e](../../type/index.md#rm_ort_teach_type_e-orientation-teaching-direction) for details of types*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `frame_type`  |    Input    |    0: work frame, 1: tool frame.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Set the teaching frame as the tool frame
if (rm_set_teach_frame(robot_handle, 1) == 0) {  
    printf("Teach Frame set successfully\n");
} else {  
    printf("Failed to get teach frame\n");  
} 
```

## Get teaching frame `rm_get_teach_frame()`

- **Method prototype:**

```C
int rm_get_teach_frame(rm_robot_handle * handle,int frame_type)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*
*Jump to [rm-ort-teach-type-e](../../type/index.md#rm_ort_teach_type_e-orientation-teaching-direction) for details of types*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `frame_type`  |    Input    |    0: work frame, 1: tool frame.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Get the current teaching frame 
int frame_type = -1;  
if (rm_get_teach_frame(&handle, &frame_type) == 0) {  
    printf("Current teach frame: %d\n", frame_type);
} else {  
    printf("Failed to get teach frame\n");  
} 
```

## Joint teaching `rm_set_joint_teach()`

- **Method prototype:**

```C
int rm_set_joint_teach(rm_robot_handle * handle,int joint_num,int direction,int v)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `joint_num`  |    Input    |    Teaching joint numbers 1−7.   |
|  `direction`  |    Input    |    Teaching direction, 0: backward, 1: forward.   |
|  `v`  |    Input    |    Velocity ratio: 1−100, indicating the percentage of the planned velocity and acceleration to the maximum linear velocity and acceleration of the joint.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Joint 1 teaching forward at a velocity of 50%
rm_set_joint_teach(robot_handle, 1, 1, 50);
```

## Cartesian spatial position teaching `rm_set_pos_teach()`

In the current work frame, set Cartesian spatial position teaching.

- **Method prototype:**

```C
int rm_set_pos_teach(rm_robot_handle * handle,rm_pos_teach_type_e type,int direction,int v)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_pos_teach_type_e](../..//type/index.md#rm_pos_teach_type_e-position-teaching-direction) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `type`  |    Input    |    Teaching type.   |
|  `direction`  |    Input    |    Teaching direction, 0: backward, 1: forward.   |
|  `v`  |    Input    |    Velocity ratio: 1−100, indicating the percentage of the planned velocity and acceleration to the maximum linear velocity and acceleration of the joint.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

::: warning
The reference frame is the current work frame by default, which can be modified to the tool frame by calling `rm_set_teach_frame`.
:::

- **Usage demo**
  
```C
// Teaching forward along the X-axis of the current work frame at a velocity of 50%
rm_set_pos_teach(robot_handle, RM_X_DIR_E, 1, 50);
```

## Cartesian spatial orientation teaching `rm_set_ort_teach()`

In the current work frame, set Cartesian spatial orientation teaching.

- **Method prototype:**

```C
int rm_set_ort_teach(rm_robot_handle * handle,rm-ort-teach-type-e type,int direction,int v)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*
*Jump to [rm-ort-teach-type-e](../../type/index.md#rm_ort_teach_type_e-orientation-teaching-direction) for details of types.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `type`  |    Input    |    Teaching type.   |
|  `direction`  |    Input    |    Teaching direction, 0: backward, 1: forward.   |
|  `v`  |    Input    |    Velocity ratio: 1−100, indicating the percentage of the planned velocity and acceleration to the maximum linear velocity and acceleration of the joint.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

::: warning
The reference frame is the current work frame by default, which can be modified to the tool frame by calling `rm_set_teach_frame`.
:::

- **Usage demo**
  
```C
// Orientation teaching in blocking mode to rotate backward along the X-axis at a velocity of 20%
rm_set_ort_teach(robot_handle, RM_RX_ROTATE_E, 0, 20);
```

## Stop teaching `rm_set_stop_teach()`

- **Method prototype:**

```C
int rm_set_stop_teach(rm_robot_handle * handle)
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
// Stop teaching
if (rm_set_stop_teach(robot_handle) == 0) {  
    printf("Teach stop successfully\n");
} else {  
    printf("Failed to stop teach\n");  
} 
```
