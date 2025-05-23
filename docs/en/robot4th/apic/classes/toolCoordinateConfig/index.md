# <p class="hidden">C and C++: </p> Tool Frame Configuration `toolCoordinateConfig`

It is used for calibration, change, deletion, update, query, and other configurations of tool frames.

## Automatically set tool frame with 6-point method - Mark points `rm_set_auto_tool_frame()`

- **Method prototype:**

```C
int rm_set_auto_tool_frame(rm_robot_handle * handle,int point_num)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `point_num`  |    Input    |    1−6 represents 6 calibration points.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
int point_num = 1; // Set the current position as the first calibration point  
  
 // Set the current position as the first calibration point  
ret = rm_set_auto_tool_frame(robot_handle, point_num);  
if (ret == 0) {  
    // Succeed  
    printf("Auto tool frame set successfully with point number: %d\n", point_num);  
} else {  
    // Fail
    printf("Failed to set auto tool frame. Error code: %d\n", result);  
}
```

## Automatically set tool frame with 6-point method - Submit `rm_generate_auto_tool_frame()`

- **Method prototype:**

```C
int rm_generate_auto_tool_frame(rm_robot_handle * handle,const char * name,float payload,float x,float y,float z)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `name`  |    Input    |    Name of tool frame, no longer than 10 bytes.   |
|   `payload`  |    Input    |    End effector payload weight, in kg    |
|   `x`  |    Input    |    Position of end effector payload in x-axis, in m.   |
|   `y`  |    Input    |    Position of end effector payload in y-axis, in m.   |
|   `z`  |    Input    |    Position of end effector payload in z-axis, in m.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Define the name, end effector payload weight, and center of mass of tool frame  
const char *tool_name = "Tool1";  
float tool_payload = 5.0; // The end effector payload weight is 5 kg  
float tool_x = 0.1; // Center of mass of end effector payload CX  
float tool_y = 0.2; // Center of mass of end effector payload CY  
float tool_z = 0.3; // Center of mass of end effector payload CZ  
  
// Call functions to automatically generate tool frame  
ret = rm_generate_auto_tool_frame(robot_handle, tool_name, tool_payload, tool_x, tool_y, tool_z);  
if (ret == 0) {  
    // Successfully generate and set tool frame  
    printf("Auto tool frame '%s' generated and set successfully. \n", tool_name);  
} else {  
    // Handle in case of failure to generate and set tool frame  
    printf("Failed to generate and set auto tool frame '%s'. Error code: %d\n", tool_name, ret);  
}
```

## Set the tool frame `rm_set_manual_tool_frame()`

- **Method prototype:**

```C
int rm_set_manual_tool_frame(rm_robot_handle * handle,rm_frame_t frame)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_frame_t](../../struct/frame/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `frame`  |    Input    |    Tool frame parameters, including the end effector payload weight, coordinates of the center of mass, and other parameters.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Create a rm_frame_t structure instance and initialize
rm_frame_t toolframe;
strncpy(toolframe.frame_name, "Tool2", sizeof(toolframe.frame_name) - 1);
toolframe.payload = 3.0;
toolframe.pose.position.x = 0.0f;
toolframe.pose.position.y = 0.0f;
toolframe.pose.position.z = 0.0f;
toolframe.pose.euler.rx = 0.0f;
toolframe.pose.euler.ry = 0.0f;
toolframe.pose.euler.rz = 0.0f;
toolframe.x = 0.0f;
toolframe.y = 0.0f;
toolframe.z = 0.0f;

// Call functions to manually set tool frame
int result = rm_set_manual_tool_frame(robot_handle, toolframe);
if (result == 0) {  
    printf("Manual tool frame '%s' set successfully\n", toolframe.frame_name);  
} else {  
    printf("Failed to set manual tool frame '%s'. Error code: %d\n", toolframe.frame_name, result);  
}  
```

## Change the current tool frame `rm_change_tool_frame()`

- **Method prototype:**

```C
int rm_change_tool_frame(rm_robot_handle * handle,const char * tool_name )
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `tool_name`  |    Input    |    Name of target tool frame.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Name of tool, which shall match one of the tool frame names already set  
const char *tool_name = "Tool1";  

// Call functions to change the current tool frame  
int result = rm_change_tool_frame(robot_handle, tool_name);  
if (result == 0) {  
    printf("Successfully changed to tool frame '%s'\n", tool_name);  
} else {  
    printf("Failed to change to tool frame '%s'. Error code: %d\n", tool_name, result);  
} 
```

## Delete the specified tool frame `rm_delete_tool_frame()`

- **Method prototype:**

```C
int rm_delete_tool_frame(rm_robot_handle * handle,const char * tool_name )
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `tool_name`  |    Input    |    Name of tool frame to delete.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Name of tool, which shall match one of the tool frame names already set  
const char *tool_name = "Tool1";  

// Call functions to delete the specified tool frame  
int result = rm_delete_tool_frame(robot_handle, tool_name);  
if (result == 0) {  
    printf("Successfully delete tool frame '%s'\n", tool_name);  
} else {  
    printf("Failed to delete tool frame '%s'. Error code: %d\n", tool_name, result);  
}
```

## Update the specified tool frame `rm_update_tool_frame()`

- **Method prototype:**

```C
int rm_update_tool_frame(rm_robot_handle * handle,rm_frame_t frame)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_frame_t](../../struct/frame/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `Frame`  |    Input    |    Name of tool frame to update.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Create a rm_frame_t structure instance and initialize
rm_frame_t toolframe;
// Name of tool frame, which shall match one of the tool frame names already set  
strncpy(toolframe.frame_name, "Tool2", sizeof(toolframe.frame_name) - 1);
// Update frame parameters
toolframe.payload = 5.0;
toolframe.pose.position.x = 0.0f;
toolframe.pose.position.y = 0.0f;
toolframe.pose.position.z = 0.1f;
toolframe.pose.euler.rx = 0.0f;
toolframe.pose.euler.ry = 0.0f;
toolframe.pose.euler.rz = 0.0f;
toolframe.x = 0.0f;
toolframe.y = 0.0f;
toolframe.z = 0.0f;

// Call functions to update Tool2 tool frame
int result = rm_update_tool_frame(robot_handle, toolframe);
if (result == 0) {  
    printf("Tool frame '%s' update successfully\n", toolframe.frame_name);  
} else {  
    printf("Failed to update tool frame '%s'. Error code: %d\n", toolframe.frame_name, result);  
}  
```

## Get names of all tool frames `rm_get_total_tool_frame()`

- **Method prototype:**

```C
int rm_get_total_tool_frame(rm_robot_handle * handle,rm_frame_name_t * frame_names,int * len)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_frame_name_t](../../struct/frameName/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `frame_names`  |    Input    |    Store the character array of returned tool frame names.   |
|  `len`  |    Output    |    Store the length of returned tool frame names.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
rm_frame_name_t frame_names[10]; // A maximum of 10 tool frames  
int len = -1;  

int result = rm_get_total_tool_frame(robot_handle, frame_names, &len);  

if (result == 0) {  
    printf("Total tool frames: %d\n", len);  
    for (int i = 0; i < len; i++) {  
        printf("Frame %d: %s\n", i, frame_names[i]);  
    }  
}
else{
    printf("Failed to get total tool frames. Error code: %d\n", result)
}
```

## Get the specified tool frame `rm_get_given_tool_frame()`

- **Method prototype:**

```C
int rm_get_given_tool_frame(rm_robot_handle * handle,const char * name,rm_frame_t * frame)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_frame_t](../../struct/frame/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `name`  |    Input    |    Name of specified tool frame.   |
|  `frame`  |    Output    |    Store returned tool parameters.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
rm_frame_t tool_frame;
const char *given_name = "Tool2";
result = rm_get_given_tool_frame(robot_handle, given_name, &tool_frame);
if (result == 0) {  
    printf("given tool frame name : %s\n", tool_frame.frame_name);
    printf("given tool frame payload : %f\n", tool_frame.payload);
    printf("given tool frame x : %f\n", tool_frame.x); 
    printf("given tool frame y : %f\n", tool_frame.y);
    printf("given tool frame z : %f\n", tool_frame.z);
}  else {  
    printf("Failed to get tool frame '%s'. Error code: %d\n", tool_frame.frame_name, result);  
}  
```

## Get the current tool frame `rm_get_current_tool_frame()`

- **Method prototype:**

```C
int rm_get_current_tool_frame(rm_robot_handle * handle,rm_frame_t * tool_frame)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_frame_t](../../struct/frame/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `tool_fram`  |    Output    |    Store the returned frame.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
rm_frame_t tool_frame;
result = rm_get_current_tool_frame(robot_handle, &tool_frame);
if (result == 0) {  
    printf("current tool frame name : %s\n", tool_frame.frame_name);
    printf("current tool frame payload : %f\n", tool_frame.payload);
    printf("current tool frame x : %f\n", tool_frame.x);
    printf("current tool frame y : %f\n", tool_frame.y);
    printf("current tool frame z : %f\n", tool_frame.z);
}  else {  
    printf("Failed to get current tool frame. Error code: %d\n", result);  
} 
```
