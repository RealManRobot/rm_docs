# <p class="hidden">C and C++: </p>Work Frame Configuration `WorkCoordinateConfig`

Calibration, change, deletion, update, query, and other configurations of work frames.

## Set the work frame with the 3-point method `rm_set_auto_work_frame()`

- **Method prototype:**

```C
int rm_set_auto_work_frame(rm_robot_handle * handle,const char * workname,int point_num)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm control handle.   |
|  `workname`  |    Input    |    Name of work frame, no longer than 10 bytes.   |
|  `point_num`  |    Input    |    1−3 represents three calibration points, respectively the origin, a point on X-axis, and a point on Y-axis, and 4 represents the frame generated.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Name of work frame  
const char *workname = "Work1";  

int point_num = 1; // Calibrate the current position as the origin of work frame  

// Call functions to set automatic work frame  
int result = rm_set_auto_work_frame(robot_handle, workname, point_num);  
if (result == 0) {
    printf("Successfully set auto work frame '%s' with point number %d.\n", workname, point_num);  
} else {  
    printf("Failed to set auto work frame '%s'.\n", workname);  
}  
```

## Set the work frame `rm_set_manual_work_frame()`

- **Method prototype:**

```C
int rm_set_manual_work_frame(rm_robot_handle * handle,const char * work_name,rm_pose_t pose)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm control handle.   |
|  `workname`  |    Input    |    Name of work frame, no longer than 10 bytes.   |
|  `pose`  |    Input    |    Pose of new work frame relative to the base frame.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Define the name and pose of work frame  
const char *work_name = "Work2";  
rm_pose_t pose; 
pose.position.x = 0.1f;
pose.position.y = 0.0f;
pose.position.z = 0.0f;
pose.euler.rx = 0.0f;
pose.euler.ry = 0.0f;
pose.euler.rz = 0.0f;

// Call functions to set work frame  
int result = rm_set_manual_work_frame(handle, work_name, pose);  

// Check the results  
if (result == 0) {  
    printf("Successfully set work frame '%s'.\n", work_name);  
} else {  
    printf("Failed to set work frame '%s'.\n", work_name);
}  
```

## Change the current work frame `rm_change_work_frame()`

- **Method prototype:**

```C
int rm_change_work_frame(rm_robot_handle * handle,const char * work_name)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm control handle.   |
|  `work_name`  |    Input    |    Name of target work frame.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Name of frame, which shall match one of the work frame names already set  
const char *work_name = "Work1";  

// Call functions to change the current work frame  
int result = rm_change_work_frame(robot_handle, work_name);  
if (result == 0) {  
    printf("Successfully changed to work frame '%s'\n", work_name);  
} else {  
    printf("Failed to change to work frame '%s'. Error code: %d\n", work_name, result);  
}
```

## Delete the specified work frame `rm_delete_work_frame()`

- **Method prototype:**

```C
int rm_delete_work_frame(rm_robot_handle * handle,const char * work_name)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm control handle.   |
|  `work_name`  |    Input    |    Name of work frame to delete.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Name of frame specified to delete, which shall match one of the work frame names already set  
const char *delete_name = "Work1";  

// Call functions to delete the specified work frame  
int result = rm_delete_work_frame(robot_handle, delete_name);  
if (result == 0) {  
    printf("Successfully delete work frame '%s'\n", delete_name);  
} else {  
    printf("Failed to delete work frame '%s'. Error code: %d\n", delete_name, result);  
}
```

## Update the specified work frame `rm_update_work_frame()`

- **Method prototype:**

```C
int rm_update_work_frame(rm_robot_handle * handle,const char * work_name,rm_pose_t pose)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm control handle.   |
|  `workname`  |    Input    |    Name of work frame, no longer than 10 bytes.   |
|  `pose`  |    Input    |    Pose of new work frame relative to the base frame.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Name of frame specified to delete, which shall match one of the work frame names already set  
const char *work_name = "Work2";  
rm_pose_t new_pose = {
        .position = {0.1, 0.1, 0.1},
        .euler = {0.0, 0.0, 0.0}
};
int result = rm_update_work_frame(robot_handle, work_name, new_pose);  
if (result == 0) {  
    printf("Work frame '%s' update successfully\n", work_name);  
} else {  
    printf("Failed to update Work frame '%s'. Error code: %d\n", work_name, result);  
}
```

## Get names of all work frames `rm_get_total_work_frame()`

- **Method prototype:**

```C
int rm_get_total_work_frame(rm_robot_handle * handle,rm_frame_name_t * frame_names,int * len)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_frame_name_t](../../struct/frameName/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm control handle.   |
|  `frame_names`  |    Output    |    Store the character array of returned work frame names.   |
|  `len`  |    Output    |    Store the length of returned work frame names.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
rm_frame_name_t frame_names[10]; // A maximum of 10 work frames  
int len = -1;  

int result = rm_get_total_work_frame(robot_handle, frame_names, &len);  

if (result == 0) {  
    printf("Total work frames: %d\n", len);  
    for (int i = 0; i < len; i++) {  
        printf("Frame %d: %s\n", i, frame_names[i]);  
    }  
}
else{
    printf("Failed to get total work frames. Error code: %d\n", result)
}
```

## Get the specified work frame `rm_get_given_work_frame()`

- **Method prototype:**

```C
int rm_get_given_work_frame(rm_robot_handle * handle,const char * name,rm_pose_t * pose)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm control handle.   |
|  `name`  |    Input    |    Name of specified work frame.   |
|  `pose`  |    Output    |    Store the returned pose.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
rm_pose_t work_pose;
const char *given_name = "Work2";
result = rm_get_given_work_frame(robot_handle, given_name, &work_pose);
if (result == 0) {  
    printf("Successfully get work frame '%s'\n", tool_frame.frame_name);
}  else {  
    printf("Failed to get work frame '%s'. Error code: %d\n", tool_frame.frame_name, result);  
}
```

## Get the current work frame `rm_get_current_work_frame()`

- **Method prototype:**

```C
int rm_get_current_work_frame(rm_robot_handle * handle,rm_frame_t * work_frame)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_frame_t](../../struct/frame/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm control handle.   |
|  `work_frame`  |    Output    |    Store the returned frame.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
rm_frame_t work_frame;
result = rm_get_current_work_frame(robot_handle, &work_frame);
if (result == 0) {  
    printf("current work frame name : %s\n", work_frame.frame_name);
}  else {  
    printf("Failed to get current work frame. Error code: %d\n", result);  
}
```
