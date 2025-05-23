# <p class="hidden">Python: </p>Tool Frame Configuration `ToolCoordinateConfig`

It is used to automatically/manually set, delete, and switch tool frames, etc. The following is a detailed description of the member functions of the tool frame `ToolCoordinateConfig`, including the method prototype, parameter description, return value, and usage demo.

## Automatically set the tool frame with the 6-point method — Point marking`rm_set_auto_tool_frame()`

- **Method prototype:**

```python
rm_set_auto_tool_frame(self, point_num: int) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `point_num`  |    `int`    |    1-6 represent the 6 calibration points.   |

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

print(arm.rm_change_work_frame("Base"))

# The point is with the end effector oriented vertically downward, and the tool end effector contacts the reference end effector
print(arm.rm_movej([0, 20, 70, 0, 90, 0], 20, 0, 0, True))
# Record the reference end effector pose
result = arm.rm_get_current_arm_state()
# Transform to any orientation, with the tool end effector contacting the reference end effector, calibrating points 1, 2, and 3
result[1]["pose"][3] += 0.1
move_res = arm.rm_movel(result[1]["pose"], 20, 0, 0, 1)
time.sleep(1)
print(arm.rm_set_auto_tool_frame(1))    # Point 1
print("Point 1 calibration completed")

result[1]["pose"][4] += 0.2
move_res = arm.rm_movel(result[1]["pose"], 20, 0, 0, 1)
time.sleep(1)
print(arm.rm_set_auto_tool_frame(2))    # Point 2
print("Point 2 calibration completed")

result[1]["pose"][5] += 0.3
move_res = arm.rm_movel(result[1]["pose"], 20, 0, 0, 1)
time.sleep(1)
print(arm.rm_set_auto_tool_frame(3))    # Point 3
print("Point 3 calibration completed")

# The tool end effector is vertically downward, in contact with the reference end effector, calibrating point 4
print(arm.rm_movej([0, 20, 70, 0, 90, 0], 20, 0, 0, True))
time.sleep(1)
print(arm.rm_set_auto_tool_frame(4))    # Point 4
print("Point 4 calibration completed")

# Maintain the orientation of point 4, and move backward along the X-axis of the base frame from point 4 to a position where the distance from point 4 is greater than 10 cm, calibrating point 5
result = arm.rm_get_current_arm_state()
result[1]["pose"][0] += 0.1
move_res = arm.rm_movel(result[1]["pose"], 20, 0, 0, 1)
time.sleep(1)
print(arm.rm_set_auto_tool_frame(5))    # Point 5
print("Point 5 calibration completed")

# Maintain the orientation of point 4, and move from point 4 along the positive Z-axis of the base frame to a position where the distance from point 4 is greater than 10 cm, calibrating point 6
print(arm.rm_movej([0, 20, 70, 0, 90, 0], 20, 0, 0, True))
result = arm.rm_get_current_arm_state()
result[1]["pose"][2] += 0.1
move_res = arm.rm_movel(result[1]["pose"], 20, 0, 0, 1)
time.sleep(1)
result = arm.rm_set_auto_tool_frame(6)  # Point 6
print("Point 6 calibration completed")

# Automatically generate the frame "test" with a 2 kg payload (ensure that the number of frames does not exceed 10, and the name does not already exist. Otherwise, the creation will fail)
print(arm.rm_generate_auto_tool_frame("test", 2, 0, 0, 0))
print("The frame has been created")

print(arm.rm_change_work_frame("World"))

arm.rm_delete_robot_arm()
```

## Automatically set the tool frame with the 6-point method — submission`rm_generate_auto_tool_frame()`

- **Method prototype:**

```python
rm_generate_auto_tool_frame(self, tool_name: str, payload: float, x: float, y: float, z: float) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `tool_name`  |    `str`    |    Tool frame name, no longer than 10 bytes.   |
|   `payload`    | `payload`   |    New tool's end effector payload weight, in kg    |
|   `x`  |    `float`    |    New tool's end effector payload position, position x, in m.   |
|   `y`  |    `float`    |    New tool's end effector payload position, position y, in m.   |
|   `z`  |    `float`    |    New tool's end effector payload position, position z, in m.   |

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

# Automatically generate the frame "test" with a 2 kg payload (for the complete generation process, please refer to the usage demo of rm_set_auto_tool_frame)
print(arm.rm_generate_auto_tool_frame("test", 2, 0, 0, 0))

arm.rm_delete_robot_arm()
```

## Manually set the tool frame`rm_set_manual_tool_frame()`

- **Method prototype:**

```python
rm_set_manual_tool_frame(self, frame: rm_frame_t) -> int:
```

*Jump to [rm_frame_t](../../struct/frame/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `frame`  |    `rm_frame_t`    |    New tool frame parameter structure.  |

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

frame = rm_frame_t("test", [0, 0, 0, 0, 0, 0], 1, 0, 0, 0)
print(arm.rm_set_manual_tool_frame(frame))

arm.rm_delete_robot_arm()
```

## Change the current tool frame `rm_change_tool_frame()`

- **Method prototype:**

```python
rm_change_tool_frame(self, tool_name: str) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `tool_name`  |    `str`    |    Name of target tool frame.  |

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

print(arm.rm_change_tool_frame("test"))

arm.rm_delete_robot_arm()
```

## Delete the specified tool frame `rm_delete_tool_frame()`

- **Method prototype:**

```python
rm_delete_tool_frame(self, tool_name: str) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `tool_name`  |    `str`    |    Name of tool frame to delete.  |

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

print(arm.rm_delete_tool_frame("test"))

arm.rm_delete_robot_arm()
```

## Update the specified tool frame `rm_update_tool_frame()`

- **Method prototype:**

```python
rm_update_tool_frame(self, frame: rm_frame_t) -> int:
```

*Jump to [rm_frame_t](../../struct/frame/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `frame`  |    `rm_frame_t`    |    Name of tool frame to update.  |

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

frame = rm_frame_t("test", [0.186350, 0.062099, 0.2, 3.141, 0, 1.569], 5, 1, 1, 1)
print(arm.rm_update_tool_frame(frame))

arm.rm_delete_robot_arm()
```

## Get names of all tool frames `rm_get_total_tool_frame()`

- **Method prototype:**

```python
rm_get_total_tool_frame(self) -> dict[str, any]:
```

- **Return value:** <br>
`dict[str, any]`: a dictionary containing the following keys:<br>

1. `return_code` (int): a state code executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Names of all tool frames

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `tool_names`  |    `list[str]`    |    List of strings, representing the names of all tool frames.   |

3. Number of tool frame names

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `len`  |    `int`    |    Number of tool frame names.   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_total_tool_frame())

arm.rm_delete_robot_arm()
```

## Get the specified tool frame `rm_get_given_tool_frame()`

- **Method prototype:**

```python
rm_get_given_tool_frame(self, tool_name: str) -> tuple[int, dict[str, any]]:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `tool_name`  |    `str`    |   Tool frame name.  |

- **Return value:** <br>
`tuple`: a tuple containing two elements. <br>

1. int: state codes executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Tool frame dictionary

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `rm_frame_t`  |    `dict[str, any]`    |    Tool frame dictionary, key: parameters of rm_frame_t.  |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_given_tool_frame("test"))

arm.rm_delete_robot_arm()
```

## Get the current tool frame `rm_get_current_tool_frame()`

- **Method prototype:**

```python
rm_get_current_tool_frame(self) -> tuple[int, dict[str, any]]:
```

- **Return value:** <br>
`tuple`: a tuple containing two elements. <br>

1. int: state codes executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Tool frame dictionary

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `rm_frame_t`  |    `dict[str, any]`    |    Tool frame dictionary, key: parameters of rm_frame_t.  |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_current_tool_frame())

arm.rm_delete_robot_arm()
```
