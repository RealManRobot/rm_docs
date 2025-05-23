# <p class="hidden">C、C++: </p>Joint Configuration Query `JointConfigReader`

It is used to query the maximum speed, acceleration, limits, etc., of joints and drivers.

## Query the maximum joint speed`rm_get_joint_max_speed()`

- **Method prototype:**

```C
int rm_get_joint_max_speed(rm_robot_handle * handle,float * max_speed)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `max_speed`  |    Input    |    Array of speed of joints 1 to 7, in °/s.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
float max_speed[6];
ret = rm_get_joint_max_speed(robot_handle, max_speed);
printf("get joint max speed result : %d\n", ret);
printf("Max speeds: ");
for (int i = 0; i < 6; i++) {
    printf("%.2f ", max_speed[i]);
}
printf("\n");
```

## Query the maximum joint acceleration`rm_get_joint_max_acc()`

- **Method prototype:**

```C
int rm_get_joint_max_acc(rm_robot_handle * handle,float * max_acc)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `max_acc`  |    Input    |    Array of acceleration of joints 1 to 7, in °/s.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
float max_acc[6];
ret = rm_get_joint_max_acc(robot_handle, max_acc);
printf("get joint max acc result : %d\n", ret);
printf("Max accelerations: ");
for (int i = 0; i < 6; i++) {
    printf("%.2f ", max_acc[i]);
}
printf("\n");
```

## Query the joint minimum limit`rm_get_joint_min_pos()`

- **Method prototype:**

```C
int rm_get_joint_min_pos(rm_robot_handle * handle,float * min_pos)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `min_pos`  |    Input    |    Array of minimum position of joints 1 to 7, in °.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
float min_pos[6];
ret = rm_get_joint_min_pos(robot_handle, min_pos);
printf("get joint min pos result : %d\n", ret);
printf("Min positions: ");
for (int i = 0; i < 6; i++) {
    printf("%.2f ", min_pos[i]);
}
printf("\n");
```

## Query the maximum joint limit`rm_get_joint_max_pos()`

- **Method prototype:**

```C
int rm_get_joint_max_pos(rm_robot_handle * handle,float * max_pos)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `max_pos`  |    Input    |    Array of maximum position of joints 1 to 7, in °.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
float max_pos[6];
ret = rm_get_joint_max_pos(robot_handle, max_pos);
printf("get joint max pos result : %d\n", ret);
printf("Max positions: ");
for (int i = 0; i < 6; i++) {
    printf("%.2f ", max_pos[i]);
}
printf("\n");
```

## Query the maximum joint speed (driver)`rm_get_joint_drive_max_speed()`

- **Method prototype:**

```C
int rm_get_joint_drive_max_speed(rm_robot_handle * handle,float * max_speed)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `max_speed`  |    Input    |    Array of speed of joints 1 to 7, in °/s.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
float max_speed[6];
ret = rm_get_joint_drive_max_speed(robot_handle, max_speed);
printf("get joint drive max speed result : %d\n", ret);
printf("Max drive speeds: ");
for (int i = 0; i < 6; i++) {
    printf("%.2f ", max_speed[i]);
}
printf("\n");
```

## Query the maximum joint acceleration (driver)`rm_get_joint_drive_max_acc()`

- **Method prototype:**

```C
int rm_get_joint_drive_max_acc(rm_robot_handle * handle,float * max_acc)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `max_acc`  |    Input    |    Array of acceleration of joints 1 to 7, in °/s.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
float max_acc[6];
ret = rm_get_joint_drive_max_acc(robot_handle, max_acc);
printf("get joint drive max acc result : %d\n", ret);
printf("Max accelerations: ");
for (int i = 0; i < 6; i++) {
    printf("%.2f ", max_acc[i]);
}
printf("\n");
```

## Query the joint minimum limit (driver)`rm_get_joint_drive_min_pos()`

- **Method prototype:**

```C
int rm_get_joint_drive_min_pos(rm_robot_handle * handle,float * min_pos)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `min_pos`  |    Input    |    Array of minimum position of joints 1 to 7, in °.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
float min_pos[6];
ret = rm_get_joint_drive_min_pos(robot_handle, min_pos);
printf("get joint drive min pos result : %d\n", ret);
printf("Min positions: ");
for (int i = 0; i < 6; i++) {
    printf("%.2f ", min_pos[i]);
}
printf("\n");
```

## Query the maximum joint limit (driver)`rm_get_joint_drive_max_pos()`

- **Method prototype:**

```C
int rm_get_joint_drive_max_pos(rm_robot_handle * handle,float * max_pos)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `max_pos`  |    Input    |    Array of maximum position of joints 1 to 7, in °.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
float max_pos[6];
ret = rm_get_joint_drive_max_pos(robot_handle, max_pos);
printf("get joint drive max pos result : %d\n", ret);
printf("Max positions: ");
for (int i = 0; i < 6; i++) {
    printf("%.2f ", max_pos[i]);
}
printf("\n");
```

## Query the joint enable state`rm_get_joint_en_state()`

- **Method prototype:**

```C
int rm_get_joint_en_state(rm_robot_handle * handle,uint8_t * en_state)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `en_state`  |    Input    |    Array of enable state of joints 1 to 7, 1: enabled state, 0: disabled state.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
uint8_t en_state[6];
ret = rm_get_joint_en_state(robot_handle, en_state);
printf("get joint en state result : %d\n", ret);
printf("Enable states: ");
for (int i = 0; i < 6; i++) {
    printf("%d ", en_state[i]);
}
printf("\n");
```

## Query the joint error code`rm_get_joint_err_flag()`

- **Method prototype:**

```C
int rm_get_joint_err_flag(rm_robot_handle * handle,uint16_t * err_flag,uint16_t * brake_state)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `err_flag`  |    Input    |    Joint error code feedback. For error codes, please refer to [Error code query of robotic arms](../../../json/errorList/index.md#joint-error-code).   |
|  `brake_state`  |    Input    |    Joint brake state feedback, where 1 indicates the brake is not engaged, and 0 indicates the brake is engaged.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
uint16_t err_flag[6];
uint16_t brake_state[6];
ret = rm_get_joint_err_flag(robot_handle, err_flag,brake_state);
printf("get joint err flag result : %d\n", ret);
printf("Error flags: ");
for (int i = 0; i < 6; i++) {
    printf("%d ", err_flag[i]);
}
printf("\n");
printf("Brake states: ");
for (int i = 0; i < 6; i++) {
    printf("%d ", brake_state[i]);
}
printf("\n");
```
