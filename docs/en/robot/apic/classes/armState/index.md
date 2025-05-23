# <p class="hidden">C, C++: </p>Get the Robotic Arm State `armState`

Get the current state, joint temperature, current, and voltage of the robotic arm.

## Get the current robotic arm state `rm_get_current_arm_state()`

Get the robotic arm pose, angle, error code, and system error code.

- **Method prototype:**

```C
int rm_get_current_arm_state(rm_robot_handle * handle,rm_current_arm_state_t * state)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_current_arm_state_t](../../struct/currentState/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `state`  |    Output    |    Structure for the current robotic arm state.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Get the current robotic arm state
rm_current_arm_state_t current_state;  
if (rm_get_current_arm_state(robot_handle, &current_state) == 0) { 
    printf("Current Pose: \n");  
    printf("Position: (%.3f, %.3f, %.3f) m\n",  
           current_state.pose.position.x, current_state.pose.position.y, current_state.pose.position.z);  
    printf("Quaternion: (%.3f, %.3f, %.3f, %.3f)\n",  
           current_state.pose.quaternion.w, current_state.pose.quaternion.x, current_state.pose.quaternion.y, current_state.pose.quaternion.z);  
    printf("Euler Angles: (%.3f, %.3f, %.3f) rad\n",  
           current_state.pose.euler.rx, current_state.pose.euler.ry, current_state.pose.euler.rz);  
    printf("Joint Angles: ");  
    for (int i = 0; i < ARM_DOF; i++) {  
        printf("%.2f ", current_state.joint[i]);  
    }  
    printf("\nArm Error: %u\n", current_state.arm_err);  
    printf("System Error: %u\n", current_state.sys_err);  
} else {  
    printf("Failed to get current arm state\n");  
}  
```

## Get the current joint temperature `rm_get_current_joint_temperature()`

- **Method prototype:**

```C
int rm_get_current_joint_temperature(rm_robot_handle * handle,float * temperature)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `temperature`  |    Output    |    Save the temperature array of joints 1−7.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
float temperature[ARM_DOF];  
if (rm_get_current_joint_temperature(robot_handle, temperature) == 0) {  
    printf("Joint Temperature: "); 
    for (int i = 0; i < ARM_DOF; i++) {  
        printf("%.2f ", temperature[i]);  
    }
    printf("\n");  
} else {  
    printf("Failed to get joint temperature\n");  
} 
```

## Get the current joint current `rm_get_current_joint_current()`

- **Method prototype:**

```C
int rm_get_current_joint_current(rm_robot_handle * handle,float * current)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `current`  |    Output    |    Save the current array of joints 1−7.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
float current[ARM_DOF];  
if (rm_get_current_joint_current(robot_handle, current) == 0) {  
    printf("Joint current: "); 
    for (int i = 0; i < ARM_DOF; i++) {  
        printf("%.2f ", current[i]);  
    }
    printf("\n");  
} else {  
    printf("Failed to get joint current\n");  
} 
```

## Get the current joint voltage `rm_get_current_joint_voltage()`

- **Method prototype:**

```C
int rm_get_current_joint_voltage(rm_robot_handle * handle,float * voltage)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `voltage`  |    Output    |    Save the voltage array of joints 1−7.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
float voltage[ARM_DOF];  
if (rm_get_current_joint_voltage(robot_handle, voltage) == 0) {  
    printf("Joint voltage: "); 
    for (int i = 0; i < ARM_DOF; i++) {  
        printf("%.2f ", voltage[i]);  
    }
    printf("\n");  
} else {  
    printf("Failed to get joint voltage\n");  
} 
```

## Get the current joint angle `rm_get_joint_degree()`

- **Method prototype:**

```C
int rm_get_joint_degree(rm_robot_handle * handle,float * joint)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `joint`  |    Output    |    Angle array of the current 7 joints.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
float degree[ARM_DOF];  
if (rm_get_joint_degree(robot_handle, degree) == 0) {  
    printf("Joint degree: "); 
    for (int i = 0; i < ARM_DOF; i++) {  
        printf("%.2f ", degree[i]);  
    }
    printf("\n");  
} else {  
    printf("Failed to get joint degree\n");  
} 
```

## Get all robotic arm states `rm_get_arm_all_state()`

- **Method prototype:**

```C
int rm_get_arm_all_state(rm_robot_handle * handle,rm_arm_all_state_t * state) Get the robotic arm state
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md)和[rm_arm_all_state_t](../../struct/allState/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   handle  |    Input    |    Robotic arm handle.   |
|  state  |    Output    |    Structure to save robotic arm information.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
rm_arm_all_state_t all_state;  
if (rm_get_arm_all_state(robot_handle, &all_state) == 0) {  
    printf("Joint Currents: ");  
    for (int i = 0; i < ARM_DOF; i++) {  
        printf("%.2f mA ", all_state.joint_current[i]);  
    }  
    printf("\nJoint Temperatures: ");  
    for (int i = 0; i < ARM_DOF; i++) {  
        printf("%.2f C ", all_state.joint_temperature[i]);  
    }  
    // Print other information...  
} else {  
    printf("Failed to get arm all state\n");  
} 
```

## Set the initial pose of the robotic arm `rm_set_init_pose()`

Based on the given joint angles, set them to the initial pose of the robotic arm.

- **Method prototype:**

```C
int rm_set_init_pose(rm_robot_handle * handle,float * joint)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `joint`  |    Input    |    Joint angle array for the robotic arm's initial pose.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Define an array of joint angles (6-axis robotic arm)
float joint_angles[6] = {0.1, -0.3, 1.5, 2.7, -1.2, 0.8};  

// Call the function to set the initial pose
int result = rm_set_init_pose(robot_handle, joint_angles);  
if (result == 0) { 
    printf("Initial pose set successfully.\n");  
} else {  
    printf("Failed to set initial pose. Error code: %d\n", result);  
} 
```

## Get the initial pose of the robotic arm `rm_get_init_pose()`

Read the angle of each joint under the set initial pose of the robotic arm.

- **Method prototype:**

```C
int rm_get_init_pose(rm_robot_handle * handle,float * joint)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `joint`  |    Output    |    Save the joint angle array for the robotic arm's initial pose.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
float joint_angles[6];  
// Call the function to get the initial pose
int result = rm_get_init_pose(robot_handle, joint_angles);  
if (result == 0) { 
    printf("Initial pose retrieved successfully.\n");  
    // Print joint angle or position 
    for (int i = 0; i < 6; i++) {  
        printf("Joint %d: %.2f\n", i + 1, joint_angles[i]);  
    }  
} else {  
    printf("Failed to retrieve initial pose.\n");  
}  
```
