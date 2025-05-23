# <p class="hidden">Python: </p>System Installation Method Configuration `InstallPos`

It is used to configure the installation method and query the end effector software version. The RealMan robotic arm supports different installation methods. However, the robot's dynamic model parameters and frame directions may vary depending on the installation method. The following is a detailed description of the member functions of `DragTeach` to configure the installation method and query the end effector software version, including the method prototype, parameter description, return value, and usage demo.

## Set installation method parameters`rm_set_install_pose()`

- **Method prototype:**

```python
rm_set_install_pose(self, x: float, y: float, z: float) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `x`  |    `float`    |    Rotation angle, in °;   |
|   `y`  |    `float`   |   Pitch angle, in °;    |
|   `z`  |    `float`   |    Azimuth angle, in °;   |

- **Return value:**<br>
 int: state codes executed by functions:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_install_pose(0, 90, 0))

arm.rm_delete_robot_arm()
```

## Get installation method parameters`rm_get_install_pose()`

- **Method prototype:**

```python
rm_get_install_pose(self) -> dict[str, any]:
```

- **Return value**:<br> dict[str,any]: a dictionary containing the following keys.

1. `return_code()`: a state code executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Pose angle value.

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `x`  |    `float`    |    Rotation angle, in °;  |
|   `y`  |    `float`   |   Pitch angle, in °;   |
|   `z`  |    `float`   |    Azimuth angle, in °;  |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_install_pose())

arm.rm_delete_robot_arm()
```

## Get the joint software version `rm_get_joint_software_version()`

The joint software version number obtained needs to be converted to hexadecimal. For example, if a joint version is obtained as 54536, converting it to hexadecimal results in D508. Therefore, the version number of the current joint is Vd5.0.8.

- **Method prototype:**

```python
rm_get_joint_software_version(self) -> tuple[int, dict[str, any]]:
```

- **Return value:** <br>

tuple[int, dict[str, any]]: A tuple containing two elements:

1. int: a state code executed by functions.
    0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. dict[str, any]: A dictionary containing the following key-value pairs:

    |   Parameter    |   Type    |   Description    |
    | :--- | :--- | :--- |
    | `version` |    list[int]  |   An array of software version numbers for each joint obtained.   |
    | `joints_v` |    list[str]   |   Reserved parameter, not applicable to the Gen 3 controller.    |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_joint_software_version())

arm.rm_delete_robot_arm()
```

## Get the software version of the end interface board `rm_get_tool_software_version()`

The software version number of the end interface board obtained needs to be converted to hexadecimal. For example, if the version number obtained is 393, converting it to hexadecimal results in 189. Therefore, the version number of the current joint is V1.8.9.

- **Method prototype:**

```python
rm_get_tool_software_version(self) -> tuple[int,dict[str,any]]:
```

- **Return value:**<br>

tuple[int, dict[str, any]]: A tuple containing two elements:

1. int: a state code executed by functions.

    0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. dict[str, any]: A dictionary containing the following key-value pairs:

    |   Parameter    |  Type    |   Description    |
    | :--- | :--- | :--- |
    | `version` |    list[int]    |   Obtained software version of the end interface board.   |
    |  `tool_v` |    list[str]   |   Reserved parameter, not applicable to the Gen 3 controller.  |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_tool_software_version())

arm.rm_delete_robot_arm()
```
