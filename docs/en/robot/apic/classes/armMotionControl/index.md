# <p class="hidden">C, C++: </p>Motion State Control Command `armMotionControl`

Control the quick stop, slow stop, pause, and continuous motion, delete the trajectory, and query the current planning type.

## Set slow stop `rm_set_arm_slow_stop()`

::: tip
Stop on the currently running trajectory.
:::

- **Method prototype:**

```C
int rm_set_arm_slow_stop(rm_robot_handle * handle)
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
// Set the robot to stop slowly
if (rm_set_arm_slow_stop(robot_handle) == 0) {  
    printf("Arm set to slow stop successfully.\n");  
} else {  
    printf("Failed to set arm to slow stop.\n");  
} 
```

## Set quick stop `rm_set_arm_stop()`

::: tip
Stop at the fastest speed with an unrecoverable trajectory.
:::

- **Method prototype:**

```C
int rm_set_arm_stop(rm_robot_handle * handle)
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
// Set the robot to stop quickly
if (rm_set_arm_stop(robot_handle) == 0) {  
    printf("Arm set to stop successfully.\n");  
} else {  
    printf("Failed to set arm to stop.\n");  
}
```

## Set pause `rm_set_arm_pause()`

::: tip
Pause on the planned trajectory with a recoverable trajectory.
:::

- **Method prototype:**

```C
int rm_set_arm_pause(rm_robot_handle * handle)
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
// Set robot to pause
if (rm_set_arm_pause(robot_handle) == 0) {  
    printf("Arm set to pause successfully.\n");  
} else {  
    printf("Failed to set arm to pause.\n");  
} 
```

## Set continuous motion after a pause `rm_set_arm_continue()`

- **Method prototype:**

```C
int rm_set_arm_continue(rm_robot_handle * handle)
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
// Set the robot to continue after a pause
if (rm_set_arm_continue(robot_handle) == 0) {  
    printf("Arm set to continue successfully.\n");  
} else {  
    printf("Failed to set arm to continue.\n");  
} 
```

## Delete current trajectory `rm_set_delete_current_trajectory()`

- **Method prototype:**

```C
int rm_set_delete_current_trajectory(rm_robot_handle * handle)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

::: warning
It is available only after a pause, otherwise the robotic arm will have an accident!
:::

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Delete current trajectory
if (rm_set_delete_current_trajectory(robot_handle) == 0) {  
    printf("Current trajectory deleted successfully.\n");
} else {  
    printf("Failed to delete Current trajectory.\n");  
} 
```

## Delete all trajectories `rm_set_arm_delete_trajectory()`

- **Method prototype:**

```C
int rm_set_arm_delete_trajectory(rm_robot_handle * handle)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

::: warning
It is available only after a pause, otherwise the robotic arm will have an accident!
:::

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Delete all trajectories
if (rm_set_arm_delete_trajectory(robot_handle) == 0) {  
    printf("Trajectory deleted successfully.\n");
} else {  
    printf("Failed to delete Trajectory.\n");  
} 
```

## Get the currently planned trajectory `rm_get_arm_current_trajectory()`

- **Method prototype:**

```C
int rm_get_arm_current_trajectory(rm_robot_handle * handle,rm_arm_current_trajectory_e * type,float * data)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.* <br>
*Jump to [rm_arm_current_trajectory_e](../../type/index.md#rm_arm_current_trajectory_e-current-robotic-arm-planning-type) for details of trajectory type*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `type`  |    Input    |    Returned planning type.   |
|   `data`  |    Output    |    Save the angle array of current joints 1−7 for no planning and joint space planning; and current end pose for Cartesian space planning.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Get the current trajectory of the robotic arm
rm_arm_current_trajectory_e trajectory_type;  
float trajectory_data[7]; 
if (rm_get_arm_current_trajectory(robot_handle, &trajectory_type, trajectory_data) == 0) {  
    printf("Current arm trajectory type: %d\n", trajectory_type);    
} 
```
