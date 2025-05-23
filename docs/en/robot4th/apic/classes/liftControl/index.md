# <p class="hidden">C and C++: </p>Lifting Mechanism Configuration `liftControl`

This interface is used for speed open-loop control, position closed-loop control, and state acquisition of lifting mechanism.

## Speed open-loop control of lifting mechanism `rm_set_lift_speed()`

- **Method prototype:**

```C
int rm_set_lift_speed(rm_robot_handle * handle,int speed)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `speed`  |    Input    |    Speed percentage, -100 to 100: <br>1. speed<0: Lifting mechanism moves down; <br>2. speed>0: Lifting mechanism moves up; <br>3. speed=0: Lifting mechanism stops moving.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Set the moving platform to move at a speed of 50% and downwards
int speed = -50;
ret = rm_set_lift_speed(robot_handle,speed);
```

## Position closed-loop control of lifting mechanism `rm_set_lift_height()`

- **Method prototype:**

```C
int rm_set_lift_height(rm_robot_handle * handle,int speed,int height,int block)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `speed`  |    Input    |    Speed percentage, 1 to 100.   |
|   `height`  |    Input    |    Target height, unit: mm, range: 0~2600.   |
|   `block`  |    Input    |    Blocking settings: <br>multi-thread mode: 0: non-blocking mode, immediately return after sending commands; 1: blocking mode, return after the robotic arm reaches the target position or the planning fails. <br>Single-thread mode: 0: non-blocking mode; other values: blocking mode, and timeout period setting according to the movement time, in s.   |

::: warning
For single-thread blocking mode, set the timeout period to return the trajectory after running within the timeout period.
:::

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Set the target height to 100 mm, lifting speed to 50%, and movement to multi-thread blocking mode by default
int height = 100;
int speed = 50;
ret = rm_set_lift_height(robot_handle,speed,height,1);
```

## Acquisition of lifting mechanism state `rm_get_lift_state()`

- **Method prototype:**

```C
int rm_get_lift_state(rm_robot_handle * handle,rm_expand_state_t * state)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_expand_state_t](../../struct/expandState/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `state`   |    Output    |    Current state of lifting mechanism.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Query the state of lifting mechanism
rm_expand_state_t state;
int result = rm_get_lift_state(robot_handle, &state);
```
