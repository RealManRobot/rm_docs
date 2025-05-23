# <p class="hidden">Python: </p>Self-Collision Safety Detection Configuration `SelfCollision`

It is used for self-collision safety detection. The RealMan robotic arm supports self-collision safety detection, which ensures that, when enabled, the various parts of the robotic arm do not collide with each other during processes such as trajectory planning and teaching. The following is a detailed description of the member functions of the self-collision safety detection `SelfCollision`, including the method prototype, parameter description, return value, and usage demo.

## Enable/Disable self-collision safety detection`rm_set_self_collision_enable()`

- **Method prototype:**

```python
rm_set_self_collision_enable(self, enable: bool) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `enable`      | `bool` | True: enabled, False: disabled.                    |

- **Return value:**
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

print(arm.rm_set_self_collision_enable(True))

arm.rm_delete_robot_arm()
```

## Get the enabling state of self-collision safety detection`rm_get_self_collision_enable()`

- **Method prototype:**

```python
rm_get_self_collision_enable(self) -> tuple[int, bool]:
```

- **Return value:**
`tuple[int,bool]`: a tuple containing two elements

1. int: state codes executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Return the enabling state of self-collision safety detection, true: enabled, false: disabled

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| -      | `bool` | Return the enabling state of self-collision safety detection, true: enabled, false: disabled   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_self_collision_enable())

arm.rm_delete_robot_arm()
```
