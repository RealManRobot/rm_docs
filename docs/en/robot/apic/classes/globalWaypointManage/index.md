# <p class="hidden">C、C++: </p>Global Waypoint Management `globalWaypointManage`

It is used to add, query, or update global waypoints.

## Add global waypoints`rm_add_global_waypoint()`

- **Method prototype:**

```C
int rm_add_global_waypoint(rm_robot_handle * handle,rm_waypoint_t waypoint)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_waypoint_t](../../struct/waypoint/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `waypoint`   |    Input    |    Add global waypoint parameters (the time for adding the waypoint is not required).   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Add global waypoint p3
rm_waypoint_t waypoint;
strcpy(waypoint.point_name,"p3");
waypoint.joint[0] = 20;
waypoint.joint[1] = 30;
// The remaining joint angles are all 0
for (int i = 2; i < 6; ++i) {
    waypoint.joint[i] = 0.0;
}
// Set position and orientation
waypoint.pose.position.x = 0.01;
waypoint.pose.position.y = 0.02;
waypoint.pose.position.z = 0.03;
waypoint.pose.euler.rx = 0.1;
waypoint.pose.euler.ry = 0.2;
waypoint.pose.euler.rz = 0.3;
strcpy(waypoint.work_frame, "World");
strcpy(waypoint.tool_frame, "Arm_Tip");
ret = rm_add_global_waypoint(robot_handle, waypoint);
```

## Update global waypoints`rm_update_global_waypoint()`

- **Method prototype:**

```C
int rm_update_global_waypoint(rm_robot_handle * handle,rm_waypoint_t waypoint)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_waypoint_t](../../struct/waypoint/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `waypoint`   |    Input    |    Update global waypoint parameters (the time for updating the waypoint is not required).   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Update global waypoint p3
rm_waypoint_t waypoint;
strcpy(waypoint.point_name,"p3");
waypoint.joint[0] = 20;
waypoint.joint[1] = 30;
// The remaining joint angles are all 0
for (int i = 2; i < 6; ++i) {
    waypoint.joint[i] = 0.0;
}
// Set position and orientation
waypoint.pose.position.x = 0.01;
waypoint.pose.position.y = 0.02;
waypoint.pose.position.z = 0.03;
waypoint.pose.euler.rx = 0.1;
waypoint.pose.euler.ry = 0.2;
waypoint.pose.euler.rz = 0.3;
strcpy(waypoint.work_frame, "World");
strcpy(waypoint.tool_frame, "Arm_Tip");
ret = rm_update_global_waypoint(robot_handle, waypoint);
```

## Delete global waypoints`rm_delete_global_waypoint()`

- **Method prototype:**

```C
int rm_delete_global_waypoint(rm_robot_handle * handle,const char * point_name)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_waypoint_t](../../struct/waypoint/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `point_name`   |    Input    |    Name of the global waypoint.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Delete global waypoint p3
rm_delete_global_waypoint(robot_handle, "p3");
```

## Query given global waypoints`rm_get_given_global_waypoint()`

- **Method prototype:**

```C
int rm_get_given_global_waypoint(rm_robot_handle * handle,const char * name,rm_waypoint_t * point)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_waypoint_t](../../struct/waypoint/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `name`   |    Input    |    Name of the given global waypoint.   |
|   `point`   |    Output    |    Return the given global waypoint parameters.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Get parameters for global waypoint p3
rm_waypoint_t point;
ret = rm_get_given_global_waypoint(robot_handle, "p3", &point);
```

## Query multiple global waypoints`rm_get_global_waypoints_list()`

- **Method prototype:**

```C
int rm_get_global_waypoints_list(rm_robot_handle * handle,int page_num,int page_size,const char * vague_search,rm_waypoint_list_t * point_list)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_waypoint_t](../../struct/waypoint/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `page_num`   |    Input    |    Page number.   |
|   `page_size`   |    Input    |    Page size.   |
|   `vague_search`   |    Input    |    Keyword for vague search.   |
|   `point_list`   |    Output    |    List of returned global waypoints.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Query the information of 10 global waypoints on the first page
rm_waypoint_list_t point_list;
int page_num = 1;
int page_size = 10;
const char *vague_search;
ret = rm_get_global_waypoints_list(robot_handle,page_num,page_size,vague_search,&point_list);
printf("get global waypoints list result : %d\n", ret);
```
