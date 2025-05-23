# <p class="hidden">C、C++: </p>General Extended Joint Configuration `expandControl`

This interface is used for joint speed loop control, position loop control, and state acquisition of expansion joints.

## State acquisition of expansion joints`rm_get_expand_state()`

- **Method prototype:**

```C
int rm_get_expand_state(rm_robot_handle * handle,rm_expand_state_t * state)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_expand_state_t](../../struct/expandState/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `state`  |    Input    |    State structure of expansion joints.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Query the state of expansion joints
rm_expand_state_t state;
int result = rm_get_expand_state(robot_handle, &state);
```

## Speed loop control of expansion joints`rm_set_expand_speed()`

- **Method prototype:**

```C
int rm_set_expand_speed(rm_robot_handle * handle,int speed)
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
int speed = 50;
ret = rm_set_expand_speed(robot_handle,speed);
```

## Position loop control of expansion joints`rm_set_expand_pos()`

- **Method prototype:**

```C
int rm_set_expand_pos(rm_robot_handle * handle,int speed,int pos,int block)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `speed`  |    Input    |    Speed percentage, 1 to 100.   |
|   `pos`  |    Input    |    Expansion joint angle, in °.   |
|   `block`  |    Input    |    Blocking settings: <br>multi-thread mode: 0: non-blocking mode, immediately return after sending commands; 1: blocking mode, return after the robotic arm reaches the target position or the planning fails. <br>Single-thread mode: 0: non-blocking mode; other values: blocking mode, and timeout period setting according to the movement time, in s.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// By default, the current thread mode is multi-threading, with the system operating at 20% speed and blocking until it reaches the 200 mm position
int ret;
int target = 200;
int speed = 20;
int block = 1;
ret = rm_set_expand_pos(robot_handle,speed,target,block);
```
