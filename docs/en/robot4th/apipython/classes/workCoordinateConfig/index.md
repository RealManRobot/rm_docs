# <p class="hidden">Python: </p>Work Frame Configuration `WorkCoordinateConfig`

It is used to automatically/manually set, delete, and switch work frames, etc. The following is a detailed description of the member functions of the work frame `WorkCoordinateConfig`, including the method prototype, parameter description, return value, and usage demo.

## Automatically set the work frame with the 3-point method`rm_set_auto_work_frame()`

- **Method prototype:**

```python
rm_set_auto_work_frame(self, name: str, point_num: int) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `name`      | `str` | Work frame name, no longer than 10 bytes.                    |
| `point_num` | `int` | 1 to 3 represent the three calibration points, corresponding to the origin, a point on the X-axis, and a point on the Y-axis in sequence. 4 represents the creation of the frame. |

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

# Set the joint angles [0, 20, 70, 0, 90, 0] as the origin of the work frame
print(arm.rm_movej([0, 20, 70, 0, 90, 0], 20, 0, 0, 1))
print(arm.rm_set_auto_work_frame("test_work", 1))
# Set a point on the X-axis of the work frame
time.sleep(1)
result = arm.rm_get_current_arm_state()
result[1]["pose"][0] += 0.1    # 0.1 m along the X-axis
result = arm.rm_movel(result[1]["pose"], 20, 0, 0, 1)
print(arm.rm_set_auto_work_frame("test_work", 2))
# Set a point on the Y-axis of the work frame
time.sleep(1)
print(arm.rm_movej([0, 20, 70, 0, 90, 0], 20, 0, 0, 1))
result = arm.rm_get_current_arm_state()
result[1]["pose"][1] += 0.1    # 0.1 m along the Y-axis
result = arm.rm_movel(result[1]["pose"], 20, 0, 0, 1)
print(arm.rm_set_auto_work_frame("test_work", 3))
# Create the "test_work" frame
print(arm.rm_set_auto_work_frame("test_work", 4))

arm.rm_delete_robot_arm()
```

## Manually set the work frame`rm_set_manual_work_frame()`

- **Method prototype:**

```python
rm_set_manual_work_frame(self, name: str, pose: list) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `name`      | `str` | Work frame name, no longer than 10 bytes.        |
| `pose` | `list` | Pose of the new work frame relative to the base frame.            |

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

print(arm.rm_set_manual_work_frame("test", [-0.259256, -0.170727, 0.35621, 0, -0.447394, -1.81038]))

arm.rm_delete_robot_arm()
```

## Change the current work frame `rm_change_work_frame()`

- **Method prototype:**

```python
rm_change_work_frame(self, tool_name: str) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `tool_name`      | `str` | Name of the target work frame |

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

print(arm.rm_change_work_frame("test"))

arm.rm_delete_robot_arm()
```

## Delete the specified work frame `rm_delete_work_frame()`

- **Method prototype:**

```python
rm_delete_work_frame(self, tool_name: str) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `tool_name`      | `str` | Name of work frame to delete |

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

print(arm.rm_delete_work_frame("test"))

arm.rm_delete_robot_arm()
```

## Update the specified work frame `rm_update_work_frame()`

- **Method prototype:**

```python
rm_update_work_frame(self, name: str, pose: list) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `name`      | `str` | Name of the specified tool frame. |
| `pose`      | `list` | Update the pose of the work frame relative to the base frame. |

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

print(arm.rm_update_work_frame("test", [0,0,0,0,0,0]))

arm.rm_delete_robot_arm()
```

## Get names of all work frames`rm_get_total_work_frame()`

- **Method prototype:**

```python
rm_get_total_work_frame(self) -> dict[str, any]:
```

- **Return value:** <br>
`dict[str, any]`: a dictionary containing the following keys:<br>

1. `return_code`(int): a state code executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Names of all work frames

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `tool_names`  |    `list[str]`    |    List of strings, representing the names of all work frames.   |

3. Number of work frame names

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `len`  |    `int`    |    Number of work frame names.   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_total_work_frame())
```

## Get the specified work frame `rm_get_given_work_frame()`

- **Method prototype:**

```python
rm_get_given_work_frame(self, name: str) -> tuple[int, list[float]]:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `name`      | `str` | Name of the specified work frame. |

- **Return value:** <br>
tuple[int, list[float]]: a tuple containing two elements. <br>

1. `return_code`(int): a state code executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Work frame pose

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `pose`  |    `list[float]`    |    List of work frame poses.  |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_given_work_frame("test"))

arm.rm_delete_robot_arm()
```

## Get the current work frame `rm_get_current_work_frame()`

- **Method prototype:**

```python
rm_get_current_work_frame(self) -> tuple[int, dict[str, any]]:
```

- **Return value:** <br>
`tuple[int, dict[str, any]]`: a tuple containing two elements. <br>

1. `return_code`(int): a state code executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Work frame pose

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `rm_frame_t`  |    `dict[str, any]`    |    Work frame dictionary, key: parameters of rm_frame_t.  |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_current_work_frame())

arm.rm_delete_robot_arm()
```
