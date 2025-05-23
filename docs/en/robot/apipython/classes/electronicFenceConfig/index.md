# <p class="hidden">Python: </p>Electronic Fence and Virtual Wall Configuration `ElectronicFenceConfig`

The Gen 3 Controller functions electronic fences and virtual walls, and provides an interface for configuring the geometric model parameters of the electronic fence or virtual wall stored in the controller. Users can utilize these interfaces to add, query, update, or delete electronic fences or virtual walls. During use, they can flexibly apply the parameters stored in the controller. It is important to note that the controller currently supports saving no more than 10 parameters.<br>

**Electronic fence**: The electronic fence function ensures that the robotic arm's trajectory planning, teaching, and other movements are carried out within the set boundaries of the electronic fence through precise parameter configuration. If the robotic arm's trajectory is at risk of exceeding the boundaries of the electronic fence, the system will immediately return the corresponding error code and automatically halt the motion, thereby effectively ensuring the safe operation of the robotic arm. <br>

::: warning
The electronic fence currently supports only two shapes, i.e., cubes and planes.
:::

**Virtual wall**: The virtual wall function supports the precise limitation of the dragging range in both current loop drag teaching and force control drag teaching modes. In these two specific teaching modes, users can utilize the virtual wall function to ensure that the robotic arm's dragging operation does not exceed the preset range. <br>

::: warning
The virtual wall function currently supports two shapes, i.e., cubes and spheres, and is only effective in the aforementioned two teaching modes. In other operating modes, this function will be automatically disabled. Therefore, please ensure that the virtual wall function is used in the correct operating mode to fully leverage its ability to limit the dragging range. <br>
:::

The following is a detailed description of the member functions of the electronic fence and virtual wall configuration `ElectronicFenceConfig`, including the method prototype, parameter description, return value, and usage demo. <br>

## Add geometric model parameters`rm_add_electronic_fence_config()`

- **Method prototype:**

```python
rm_add_electronic_fence_config(self, electronic_fence: rm_fence_config_t) -> int:   
```

*Jump to [rm_fence_config_t](../../struct/fenceConfig/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `electronic_fence`  |    `(rm_fence_config_t)`    |    Geometric model parameter structure.  |

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

config = rm_fence_config_t(
    1, "test", cube=rm_fence_config_cube_t(-1.1, 1.1, -1.1, 1.1, -1.1, 1.1))

print(arm.rm_add_electronic_fence_config())

arm.rm_delete_robot_arm()
```

## Update geometric model parameters`rm_update_electronic_fence_config()`

- **Method prototype:**

```python
rm_update_electronic_fence_config(self, electronic_fence: rm_fence_config_t) -> int:
```

*Jump to [rm_fence_config_t](../../struct/fenceConfig/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `electronic_fence`  |    `(rm_fence_config_t)`    |    Geometric model parameter structure      |

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

config = rm_fence_config_t(
    1, "test", cube=rm_fence_config_cube_t(-1.0, 1.0, -1.0, 1.0, -1.0, 1.0))
print(arm.rm_update_electronic_fence_config(config))

arm.rm_delete_robot_arm()
```

## Delete given geometric model`rm_delete_electronic_fence_config()`

- **Method prototype:**

```python
rm_delete_electronic_fence_config(self, name: str) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `name`  |    `str`    |    Geometric model name, up to 10 bytes, supporting letters, numbers, and underscores.   |

- **Return value:**
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

print(arm.rm_delete_electronic_fence_config("test"))

arm.rm_delete_robot_arm()
```

## Query all geometric model names`rm_get_electronic_fence_list_names()`

- **Method prototype:**

```python
rm_get_electronic_fence_list_names(self) -> dict[str, any]:
```

- **Return value:**
`dict[str,any]`: a dictionary containing the following keys. <br>

1. `return_code` (int): a state code executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Names of all geometric models.

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   job_names  |    `list[str]`    |    List of strings, indicating the names of all geometric models.|

3. Length of the geometric model name list.

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   len  |    `int`    |    Length of the geometric model name list  |

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_electronic_fence_list_names())

arm.rm_delete_robot_arm()
```

## Query given geometric model parameter`rm_get_given_electronic_fence_config()`

- **Method prototype:**

```python
rm_get_given_electronic_fence_config(self, name: str) -> tuple[int, dict[str, any]]:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
| `name` |    `str`    |     Name of given geometric model    |

- **Return value:** <br>
tuple[int,dict[str,any]]: a tuple containing two elements.

1. `return_code` (int): a state code executed by functions.
0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Parameter of given geometric models.
|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|dict|  `[str,any]` |Return the parameter dictionary of given geometric models, key: field name of rm_fence_config_t.  |

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_given_electronic_fence_config("test"))

arm.rm_delete_robot_arm()
```

## Query all geometric model parameters`rm_get_electronic_fence_list_infos()`

- **Method prototype:**

```python
rm_get_electronic_fence_list_infos(self) -> dict[str, any]:
```

- **Return value:**
type: a dictionary containing the following keys

1. `return_code`(int): a state code executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Geometric model parameter list.

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `electronic_fence_list`  |    `list[str]`    |    Geometric model parameter list    |

3. Length of the geometric model list.

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `len`  |    `int`    |    Length of the geometric model list  |

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_electronic_fence_list_infos())

arm.rm_delete_robot_arm()
```

## Set electronic fence enabling state `rm_set_electronic_fence_enable()`

- **Method prototype:**

```python
rm_set_electronic_fence_enable(self, electronic_fence_enable: rm_electronic_fence_enable_t) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `electronic_fence_enable` |    `rm_electronic_fence_enable_t`    |     Electronic fence enabling state |

- **Return value:**

int: state codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

electronic_fence_enable = rm_electronic_fence_enable_t(True, 0, 0)
print(arm.rm_set_electronic_fence_enable(electronic_fence_enable))

arm.rm_delete_robot_arm()
```

## Get electronic fence enabling state`rm_get_electronic_fence_enable()`

- **Method prototype:**

```python
rm_get_electronic_fence_enable(self) -> tuple[int, dict[str, any]]:
```

- **Return value:**
`tuple[int,dict[str,any]]`: a tuple containing two elements.

1. `return_code`(int): a state code executed by functions.
0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Electronic fence enabling state.
|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   dict  | `[str,any]`|   Return the dictionary of the electronic fence enabling state, key: field name of rm_electronic_fence_enable_t    |

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_electronic_fence_enable())

arm.rm_delete_robot_arm()
```

## Set current electronic fence parameter configuration`rm_set_electronic_fence_config()`

- **Method prototype:**

```python
rm_set_electronic_fence_config(self, electronic_fence: rm_fence_config_t) -> int:
```

*Jump to [rm_fence_config_t](../../struct/fenceConfig/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `electronic_fence` |    `rm_fence_config_t`    |     Current electronic fence parameter structure (no electronic fence name is required)  |

- **Return value:**
int: state codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

config = rm_fence_config_t(1, cube=rm_fence_config_cube_t(-0.9, 0.9, -0.9, 0.9, -0.9, 0.9))
print(arm.rm_set_electronic_fence_config(config))

arm.rm_delete_robot_arm()
```

## Get current electronic fence parameters`rm_get_electronic_fence_config()`

- **Method prototype:**

```python
rm_get_electronic_fence_config(self) -> tuple[int, dict[str, any]]:
```

- **Return value:**
`tuple[int,dict[str,any]]`: a tuple containing two elements. <br>

1. int: state codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Electronic fence parameter dictionary

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `dict`  | `[str,any]`|   Return the parameter dictionary of the current electronic fence, key: field name of rm_fence_config_t (no electronic fence name is returned)    |

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_electronic_fence_config())

arm.rm_delete_robot_arm()
```

## Set virtual wall enabling state`rm_set_virtual_wall_enable()`

- **Method prototype:**

```python
rm_set_virtual_wall_enable(self, virtual_wall_enable: rm_electronic_fence_enable_t) -> int:
```

*Jump to [rm_electronic_fence_enable_t](../../struct/electronicFenceEnable/index.md) for details of the structure.*

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

electronic_fence_enable = rm_electronic_fence_enable_t(True, 0, 1)
print(arm.rm_set_virtual_wall_enable(electronic_fence_enable))

arm.rm_delete_robot_arm()
```

## Get virtual wall enabling state `rm_get_virtual_wall_enable()`

- **Method prototype:**

```python
rm_get_virtual_wall_enable(self) -> tuple[int, dict[str, any]]:
```

- **Return value:**
`tuple[int,dict[str,any]]`: a tuple containing two elements. <br>

1. int: state codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Virtual wall enabling state dictionary

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `dict`  | `[str,any]`|   Return the dictionary of the virtual wall enabling state, key: field name of rm_electronic_fence_enable_t    |

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_virtual_wall_enable())

arm.rm_delete_robot_arm()
```

## Set current virtual wall parameters`rm_set_virtual_wall_config()`

- **Method prototype:**

```python
rm_set_virtual_wall_config(self, virtual_wall: rm_fence_config_t) -> int:
```

*Jump to [rm_fence_config_t](../../struct/fenceConfig/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `virtual_wall` |    `rm_fence_config_t`    |   Current virtual wall parameters (no virtual wall name is required). |

- **Return value:**
int: state codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

config = rm_fence_config_t(1, cube=rm_fence_config_cube_t(-0.9, 0.9, -0.9, 0.9, -0.9, 0.9))
print(arm.rm_set_virtual_wall_config(config))

arm.rm_delete_robot_arm()
```

## Get current virtual wall parameters`rm_get_virtual_wall_config()`

- **Method prototype:**

```python
rm_get_virtual_wall_config(self) -> tuple[int, dict[str, any]]:
```

- **Return value:**
`tuple[int,dict[str,any]]`: a tuple containing two elements. <br>

1. `return_code`(int): a state code executed by functions.
0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Parameter of the current virtual wall.
|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   dict  | `[str,any]`|   Return the parameter dictionary of the current virtual wall, key: field name of rm_fence_config_t (no virtual wall name is returned)    |

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_virtual_wall_config())

arm.rm_delete_robot_arm()
```
