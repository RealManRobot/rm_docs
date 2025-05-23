# <p class="hidden">Python: </p>Global Waypoint Management `GlobalWaypointManage`

It is used to add, query, or update global waypoints. The following is a detailed description of the member functions of the global waypoint management `GlobalWaypointManage`, including the method prototype, parameter description, return value, and usage demo.

## Add global waypoints`rm_add_global_waypoint()`

- **Method prototype:**

```python
rm_add_global_waypoint(self, waypoint: rm_waypoint_t) -> int:
```

   *Jump to [rm_waypoint_t](../../struct/waypoint/index.md) for details of the structure.*

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `waypoint`      | `rm_waypoint_t` | Add global waypoint parameters (the time for adding the waypoint is not required).  |

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

point = rm_waypoint_t("point1", [0, 20, 70, 0, 90, 0],
                      [0.3, 0, 0.3, 3.142, 0, 0], 'World', 'Arm_Tip')
print(arm.rm_add_global_waypoint(point))

arm.rm_delete_robot_arm()
```

## Update global waypoints`rm_update_global_waypoint()`

- **Method prototype:**

```python
rm_update_global_waypoint(self, waypoint: rm_waypoint_t) -> int:
```

   *Jump to [rm_waypoint_t](../../struct/waypoint/index.md) for details of the structure.*

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `waypoint`      | `rm_waypoint_t` | Update global waypoint parameters (the time for updating the waypoint is not required).  |

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

point = rm_waypoint_t("point1", [0, 40, 50, 0, 90, 0],[0.3, 0, 0.3, 3.142, 0, 0], 'World', 'Arm_Tip')
print(arm.rm_update_global_waypoint(point))

arm.rm_delete_robot_arm()
```

## Delete global waypoints`rm_delete_global_waypoint()`

- **Method prototype:**

```python
rm_delete_global_waypoint(self, point_name: str) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `point_name`      | `str` | Name of the global waypoint.  |

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

print(arm.rm_delete_global_waypoint("point"))

arm.rm_delete_robot_arm()
```

## Query given global waypoints`rm_get_given_global_waypoint()`

- **Method prototype:**

```python
rm_get_given_global_waypoint(self, point_name: str) -> tuple[int, dict[str, any]]:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `point_name`      | `str` | Name of the given global waypoint.  |

- **Return value:** <br>
`tuple[int, dict[str,any]]`: a tuple containing two elements

1. int: state codes executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Dictionary of global waypoint parameters

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   `rm_waypoint_t`  |    `dict[str,any]`   |    Return the dictionary of given global waypoint parameters, key: field name of rm_waypoint_t.   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_given_global_waypoint("point"))

arm.rm_delete_robot_arm()
```

## Query multiple global waypoints`rm_get_global_waypoints_list()`

- **Method prototype:**

```python
rm_get_global_waypoints_list(self, page_num: int, page_size: int, vague_search: str) -> tuple[int, dict[str, any]]:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `point_name`      | `str` | Name of the given global waypoint.|

- **Return value:** <br>
`tuple[int,dict[str,any]]`: a tuple containing two elements. <br>

1. int: state codes executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Dictionary of the global waypoint list

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   `rm_waypoint_list_t`  |    `dict[str,any]`   |    Return the dictionary of the conforming global waypoint list, key: field name of rm_waypoint_list_t    |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Search “test” waypoints vaguely
print(arm.rm_get_global_waypoints_list(1, 10, "test"))

arm.rm_delete_robot_arm()
```
