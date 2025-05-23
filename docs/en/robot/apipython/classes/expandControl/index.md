# <p class="hidden">Python: </p>Universal Extended Joint Control `ExpandControl`

It is used for the expansion joint control. The following is a detailed description of the member functions of the general expansion joint control `ExpandControl`, including the method prototype, parameter description, return value, and usage demo.

## Speed loop control of expansion joints`rm_set_expand_speed()`

- **Method prototype:**

```python
rm_set_expand_speed(self, speed: int) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `speed`      | `int` | Speed percentage, -100 to 100: <br>1. speed<0: Lifting mechanism moves down; <br>2. speed>0: Lifting mechanism moves up; <br>3. speed=0: Lifting mechanism stops moving.|

- **Return value:** <br>
State codes executed by functions:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Set the expansion joint to move backward at a speed of 50%
print(arm.rm_set_expand_speed(-50))

arm.rm_delete_robot_arm()
```

## Position loop control of expansion joints`rm_set_expand_pos()`

- **Method prototype:**

```python
rm_set_expand_pos(self, speed: int, height: int, block: int) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `speed`      | `int` | Speed percentage, 1−100                    |
| `height`      | `int` | Expansion joint angle, in °                   |
| `block` | `int` | Blocking settings: <br>multi-thread mode: <br>0: non-blocking mode, immediately return after sending commands; <br>1: blocking mode, return after the robotic arm reaches the target position or the planning fails; <br>single-thread mode: <br>0: non-blocking mode; <br>other values: blocking mode, and timeout period setting, in s. |

- **Return value:** <br>
State codes executed by functions:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_expand_pos(200, 20, 1))

arm.rm_delete_robot_arm()
```

## Get the state of expansion joints `rm_get_expand_state()`

- **Method prototype:**

```python
rm_get_expand_state(self) -> tuple[int, dict[str, any]]:
```

- **Return value:** <br>

1. int: state codes executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Dictionary of the expansion joint state

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   `rm_expand_state_t`  |    `dict[str,any]`   |    Obtained dictionary of the expansion joint state, key: field name of rm_expand_state_t    |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_expand_state())

arm.rm_delete_robot_arm()
```
