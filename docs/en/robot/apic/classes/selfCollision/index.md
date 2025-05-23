# <p class="hidden">C and C++: </p>Self-Collision Safety Detection Configuration `selfCollision`

The RealMan robotic arm supports self-collision safety detection, which ensures that, when enabled, the various parts of the robotic arm do not collide with each other during processes such as trajectory planning and teaching. Through this interface, the enabling state of self-collision safety detection of robotic arm can be set and read.

## Enable/Disable self-collision safety detection `rm_set_self_collision_enable()`

- **Method prototype:**

```C
int rm_set_self_collision_enable(rm_robot_handle * handle,bool state)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `state`  |    Input    |    true = enabled, false = disabled.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Disable self-collision safety detection
ret = rm_set_self_collision_enable(robot_handle, false);
```

## Get the self-collision safety detection enabling state `rm_get_self_collision_enable()`

- **Method prototype:**

```C
int rm_get_self_collision_enable(rm_robot_handle * handle,bool * state)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `state`  |    Output    |    true = enabled, false = disabled.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Query the enabling state of self-collision safety detection
bool state;
ret = rm_get_self_collision_enable(robot_handle, &state);
```
