# <p class="hidden">Python: </p>Teaching and Stepping Control of the Robotic Arm `ArmTeachMove`

It is used for teaching and stepping control of joints, position, and orientation. The following is a detailed description of the member functions of the teaching and stepping of the robotic arm `ArmTeachMove`, including the method prototype, parameter description, return value, and usage demo.

## Joint step `rm_set_joint_step()`

- **Method prototype:**

```python
rm_set_joint_step(self, num: int, step: float, v: int, block: int) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `num`  |    `int`    |    Joint number, 1-7    |
|   `step`  |    `float`    |    Step angle    |
|   `v`  |    `int`    | Velocity ratio: 1−100, indicating the percentage of the planned velocity and acceleration to the maximum linear speed and linear acceleration of the end effector    |
| `block` | `int` | Blocking settings: <br>multi-thread mode: <br>0: non-blocking mode, immediately return after sending commands; <br>1: blocking mode, return after the robotic arm reaches the target position or the planning fails; <br>single-thread mode: <br>0: non-blocking mode; <br>other values: blocking mode, and timeout period setting, in s. |

- **Return value:** <br>
State codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Step joint 5 by 3°
print(arm.rm_set_joint_step(5, 3, 20, 1))

arm.rm_delete_robot_arm()
```

## Position step `rm_set_pos_step()`

In the current work frame.

- **Method prototype:**

```python
rm_set_pos_step(self, teach_type: rm_pos_teach_type_e, step: float, v: int, block: int) -> int:
```

*Jump to [Type description](../../type/index.md) for details of`rm_thread_mode_e`*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `teach_type`  |    `rm_pos_teach_type_e`    |   Teaching type    |
|   `step`  |    `float`    |    Step distance in m, with an accuracy of 0.001 mm    |
|   `v`  |    `int`    | Velocity ratio: 1−100, indicating the percentage of the planned velocity and acceleration to the maximum linear speed and linear acceleration of the end effector    |
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

# Step 0.05 m in the X-axis direction of the current work frame
print(arm.rm_set_pos_step(rm_pos_teach_type_e.RM_X_DIR_E, 0.05, 20, 1))

arm.rm_delete_robot_arm()
```

## Orientation step `rm_set_ort_step()`

In the current work frame.

- **Method prototype:**

```python
rm_set_ort_step(self, teach_type: rm_ort_teach_type_e, step: float, v: int, block: int) -> int:
```

*Jump to [Type description](../../type/index.md)for details of `rm_ort_teach_type_e`.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `teach_type`  |    `rm_ort_teach_type_e`    |   Teaching type    |
|   `step`  |    `float`    |    Step radian in rad, with an accuracy of 0.001 rad    |
|   `v`  |    `int`    | Velocity ratio: 1−100, indicating the percentage of the planned velocity and acceleration to the maximum linear speed and linear acceleration of the end effector    |
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

# Rotate 0.01 rad around the X-axis of the current work frame
print(arm.rm_set_ort_step(rm_ort_teach_type_e.RM_RX_ROTATE_E, 0.01, 20, 1))

arm.rm_delete_robot_arm()
```

## Joint teaching `rm_set_joint_teach()`

- **Method prototype:**

```python
rm_set_joint_teach(self, num: int, direction: int, v: int) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `num`  |    `int`    |    Teaching joint number, 1-7    |
|   `direction`  |    `int`    |    Teaching direction, 0: backward, 1: forward    |
|   `v`  |    `int`    |    Velocity ratio: 1−100, indicating the percentage of the planned velocity and acceleration to the maximum linear velocity and acceleration of the joint    |

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

# Teach in the forward direction of joint 5
print(arm.rm_set_joint_teach(5, 1, 20))

arm.rm_delete_robot_arm()
```

## Cartesian spatial position teaching `rm_set_pos_teach()`

In the current work frame.

- **Method prototype:**

```python
rm_set_pos_teach(self, teach_type: rm_pos_teach_type_e, direction: int, v: int) -> int:
```

*Jump to [Type description](../../type/index.md) for details of`rm_thread_mode_e`*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `teach_type`  |    `rm_pos_teach_type_e`    |   Teaching type  |
|   `direction`  |    `int`    |    Teaching direction, 0: backward, 1: forward    |
|   `v`  |    `int` |Velocity ratio: 1−100, indicating the percentage of the planned velocity and acceleration to the maximum angular speed and angular acceleration of the end effector |

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

# Teach in the forward direction of the X-axis of the current work frame
print(arm.rm_set_pos_teach(rm_pos_teach_type_e.RM_X_DIR_E, 1, 20))

arm.rm_delete_robot_arm()
```

## Cartesian spatial orientation teaching `rm_set_ort_teach()`

In the current work frame.

- **Method prototype:**

```python
rm_set_ort_teach(self, teach_type: rm_ort_teach_type_e, direction: int, v: int) -> int:
```

*Jump to [Type description](../../type/index.md) for details of `rm_ort_teach_type_e`.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `teach_type`  |    `rm_ort_teach_type_e`    |   Teaching type   |
|   `direction`  |    `int`    |    Teaching direction, 0: backward, 1: forward    |
|   `v`  |    `int`    | Velocity ratio: 1−100, indicating the percentage of the planned velocity and acceleration to the maximum angular speed and angular acceleration of the end effector    |

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

# Teach in the forward direction around the X-axis of the current work frame
print(arm.rm_set_ort_teach(rm_ort_teach_type_e.RM_RX_ROTATE_E, 1, 20))

arm.rm_delete_robot_arm()
```

## Stop teaching `rm_set_stop_teach()`

- **Method prototype:**

```python
rm_set_stop_teach(self) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `num`  |    `int`    |    Teaching joint number, 1-7    |
|   `direction`  |    `int`    |    Teaching direction, 0: backward, 1: forward    |
|   `v`  |    `int`    |    Velocity ratio: 1−100, indicating the percentage of the planned velocity and acceleration to the maximum linear velocity and acceleration of the joint    |

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

print(arm.rm_set_stop_teach())

arm.rm_delete_robot_arm()
```

## Set teaching frame `rm_set_teach_frame()`

- **Method prototype:**

```python
rm_set_teach_frame(self, frame_type: int) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `frame_type`  |    `int`    |   0: work frame, 1: tool frame    |

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

# Switch the teaching frame to the current tool frame
print(arm.rm_set_teach_frame(1))

arm.rm_delete_robot_arm()
```

## Get teaching frame `rm_get_teach_frame()`

- **Method prototype:**

```python
rm_get_teach_frame(self) -> tuple[int, int]:
```

- **Return value:** <br>
`tuple[int,int]`: a tuple containing two elements. <br>

1. State codes executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Frame movement

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   0  |    `int`   |    Work frame    |
|   1  |    `int`   |   Tool frame    |

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_teach_frame())

arm.rm_delete_robot_arm()
```
