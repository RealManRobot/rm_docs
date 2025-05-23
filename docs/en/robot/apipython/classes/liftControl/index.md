# <p class="hidden">Python: </p>Lifting Mechanism Configuration `LiftControl`

It is used to control the lifting mechanism. The following is a detailed description of the member functions of lifting mechanism control `LiftControl`, including the method prototype, parameter description, return value, and usage demo.

## Speed open-loop control of lifting mechanism `rm_set_lift_speed()`

- **Method prototype:**

```python
rm_set_lift_speed(self, speed: int) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `speed`      | `int` | Speed percentage, -100 to 100: <br>1. speed<0: Lifting mechanism moves down; <br>2. speed>0: Lifting mechanism moves up; <br>3. speed=0: Lifting mechanism stops moving. |

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

# Lifting mechanism moves down at 50% speed.
print(arm.rm_set_lift_speed(-50))

arm.rm_delete_robot_arm()
```

## Position closed-loop control of lifting mechanism `rm_set_lift_height()`

- **Method prototype:**

```python
rm_set_lift_height(self, speed: int, height: int, block: int) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `speed`      | `int` | Speed percentage, 1-100. |
| `height`      | `int` | Target height, in mm, range: 0-2,600. |
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

print(arm.rm_set_lift_height(20, 200, 1))

arm.rm_delete_robot_arm()
```

## Acquisition of lifting mechanism state `rm_get_lift_state()`

- **Method prototype:**

```python
rm_get_lift_state(self) -> tuple[int, dict[str, any]]:
```

- **Return value:** <br>
`tuple[int,dict[str,any]]`: a tuple containing two elements. <br>

1. Obtained lifting mechanism state dictionary

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Obtained lifting mechanism state dictionary

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   `rm_expand_state_t`  |    `dict[str,any]`   |    Obtained lifting mechanism state dictionary, key: field names of the rm_expand_state_t    |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_lift_state())

arm.rm_delete_robot_arm()
```
