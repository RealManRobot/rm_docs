# <p class="hidden">C and C++: </p>Robotic Arm Trajectory Command `movePlan`

Robotic arm motion control commands and pass-through control commands. Motion control commands include joint motions in space, Cartesian straight-line motion, spline curve motion, arc motion, etc. of joints; pass-through control commands include angle pass-through and pose pass-through.

## Joint motions in space `rm_movej()`

- **Method prototype:**

```C
int rm_movej(rm_robot_handle * handle,const float * joint,int v,int r,int trajectory_connect,int block)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `joint`  |    Input    |    Angle array of target 1−7 joints.   |
|  `v`  |    Input    |    Velocity ratio: 1−100, indicating the percentage of the planned velocity and acceleration to the maximum linear velocity and acceleration of the joint.   |
|  `r`  |    Input    |    Percentage coefficient of blend radius, 0−100.   |
|  `trajectory_connect`  |    Input    |    "Trajectory connection" flag:<br>0: Plan and execute the trajectory immediately, not connecting the following trajectory;<br>1: Plan the current trajectory together with the following trajectory, but do not execute it immediately. In blocking mode, even if the trajectory is transmitted successfully, it will be returned immediately.   |
|  `block`  |    Input    |    Blocking settings: <br> multi-thread mode: 0: non-blocking mode, immediately return after sending commands; 1: blocking mode, return after the robotic arm reaches the target position or the planning fails. <br>Single-thread mode: 0: non-blocking mode; other values: blocking mode, and timeout period setting according to the movement time, in s.   |

::: warning

- For single-thread blocking mode, set the timeout period to return the trajectory after running within the timeout period. <br>
- The blend radius is valid only when trajectory_connect is 1, and is invalid when trajectory_connect is 0.
:::

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
float joint[6] = {0.0, 0.0, 0.0, 0.0, 90.0, 0.0};

int v = 20; // velocity
int r = 0;  // blend radius
int trajectory_connect = 0; // plan and execute the trajectory immediately
int block = 1; // blocking mode (multi-thread mode by default)

ret = rm_movej(robot_handle, joint, v, r, trajectory_connect, block);
```

## Cartesian-space straight-line motion `rm_movel()`

- **Method prototype:**

```C
int rm_movel(rm_robot_handle * handle,rm_pose_t pose,int v,int r,int trajectory_connect,int block)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `pose`  |    Input    |    Target pose, unit of position: m; unit of orientation: radian.   |
|  `v`  |    Input    |    Velocity ratio: 1−100, indicating the percentage of the planned velocity and acceleration to the maximum linear velocity and acceleration of the joint.   |
|  `r`  |    Input    |    Percentage coefficient of blend radius, 0−100.   |
|  `trajectory_connect`  |    Input    |    "Trajectory connection" flag:<br>0: Plan and execute the trajectory immediately, not connecting the following trajectory;<br>1: Plan the current trajectory together with the following trajectory, but do not execute it immediately. In blocking mode, even if the trajectory is transmitted successfully, it will be returned immediately.   |
|  `block`  |    Input    |    Blocking settings: <br> multi-thread mode: 0: non-blocking mode, immediately return after sending commands; 1: blocking mode, return after the robotic arm reaches the target position or the planning fails. <br>Single-thread mode: 0: non-blocking mode; other values: blocking mode, and timeout period setting according to the movement time, in s.   |

::: warning

- For single-thread blocking mode, set the timeout period to return the trajectory after running within the timeout period. <br>
- The blend radius is valid only when trajectory_connect is 1, and is invalid when trajectory_connect is 0.
:::

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
int v = 20; // velocity
int r = 0;  // blend radius
int trajectory_connect = 0; // plan and execute the trajectory immediately
int block = 1; // blocking mode (multi-thread mode by default)
rm_pose_t pose = {
        .position = {0.5, 0.5, 0.5},
        .euler = {0.0, 0.0, 0.0}
};// pose example
ret = rm_movel(robot_handle, pose, v, r, trajectory_connect, block);
printf("rm_movel result : %d\n", ret);
```

## Spline curve motion `rm_moves()`

- **Method prototype:**

```C
int rm_moves(rm_robot_handle * handle,rm_pose_t pose,int v,int r,int trajectory_connect,int block)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `pose`  |    Input    |    Target pose, unit of position: m; unit of orientation: radian.   |
|  `v`  |    Input    |    Velocity ratio: 1−100, indicating the percentage of the planned velocity and acceleration to the maximum linear velocity and acceleration of the joint.   |
|  `r`  |    Input    |    Percentage coefficient of blend radius, 0−100.   |
|  `trajectory_connect`  |    Input    |    "Trajectory connection" flag:<br>0: Plan and execute the trajectory immediately, not connecting the following trajectory;<br>1: Plan the current trajectory together with the following trajectory, but do not execute it immediately. In blocking mode, even if the trajectory is transmitted successfully, it will be returned immediately.   |
|  `block`  |    Input    |    Blocking settings: <br> multi-thread mode: 0: non-blocking mode, immediately return after sending commands; 1: blocking mode, return after the robotic arm reaches the target position or the planning fails. <br>Single-thread mode: 0: non-blocking mode; other values: blocking mode, and timeout period setting according to the movement time, in s.   |

::: warning

- For spline curve motion, at least three points need to be issued continuously (trajectory_connect is set to 1); otherwise, the trajectory will be a straight line. <br>
- For single-thread blocking mode, set the timeout period to return the trajectory after running within the timeout period. <br>
:::

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
int v = 20; // velocity
int r = 0;  // blend radius
int trajectory_connect = 1; // plan the trajectory together with the following one
int block = 1; // blocking mode (multi-thread mode by default)
rm_pose_t pose1 = {
        .position = {0.1, 0.2, 0.5},
        .euler = {0.0, 0.0, 0.0}
};// pose example 1
rm_pose_t pose2 = {
        .position = {0.3, 0.5, 0.5},
        .euler = {0.0, 0.0, 0.0}
};// pose example 2
rm_pose_t pose3 = {
        .position = {0.4, 0.5, 0.5},
        .euler = {0.0, 0.0, 0.0}
};// pose example 3

// Issue the first point, and set the trajectory connection sign to 1 to perform spline curve connection
result = rm_moves(robot_handle, pose1, v, r, trajectory_connect, block);
if(result != 0) { 
    printf("rm_moves result : %d\n", result);
}

// Issue the second point, and set the trajectory connection sign to 1 to perform spline curve connection
result = rm_moves(robot_handle, pose2, v, r, trajectory_connect, block);
if(result != 0) { 
    printf("rm_moves result : %d\n", result);
}

// Issue the third point, and set the trajectory connection sign to 0 to immediately plan the trajectory
result = rm_moves(robot_handle, pose3, v, r, 0, block);
if(result != 0) { 
    printf("rm_moves result : %d\n", result);
}

```

## Cartesian-space arc motion `rm_movec()`

- **Method prototype:**

```C
int rm_movec(rm_robot_handle * handle,rm_pose_t pose_via,rm_pose_t pose_to,int v,int r,int loop,int trajectory_connect,int block)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `pose_via`  |    Input    |    Pose of via-point, unit of position: m; unit of orientation: radian.   |
|  `pose_to`  |    Input    |    Pose of final point, unit of position: m; unit of orientation: radian.   |
|  `v`  |    Input    |    Velocity ratio: 1−100, indicating the percentage of the planned velocity and acceleration to the maximum angular velocity and angular acceleration of the joint.   |
|  `r`  |    Input    |    Percentage coefficient of blend radius, 0−100.   |
|  `loop`  |    Input    |    Planned number of loops.   |
|  `trajectory_connect`  |    Input    |    "Trajectory connection" flag:<br>0: Plan and execute the trajectory immediately, not connecting the following trajectory;<br>1: Plan the current trajectory together with the following trajectory, but do not execute it immediately. In blocking mode, even if the trajectory is transmitted successfully, it will be returned immediately.   |
|  `block`  |    Input    |    Blocking settings: <br> multi-thread mode: 0: non-blocking mode, immediately return after sending commands; 1: blocking mode, return after the robotic arm reaches the target position or the planning fails. <br>Single-thread mode: 0: non-blocking mode; other values: blocking mode, and timeout period setting according to the movement time, in s.   |

::: warning

- For single-thread blocking mode, set the timeout period to return the trajectory after running within the timeout period. <br>
- The blend radius is valid only when trajectory_connect is 1, and is invalid when trajectory_connect is 0.
:::

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Arc motion
rm_pose_t povia;                                                        
povia.position.x=-0.300;                                                   
povia.position.y=-0.03;                                                   
povia.position.z=0.215;                                                    
povia.euler.rx=3.0;                                                      
povia.euler.ry=0.1;                                                      
povia.euler.rz=0.1;                                                      
rm_pose_t poto;                                                         
poto.position.x=-0.4;                                                      
poto.position.y=-0.030;                                                    
poto.position.z=0.215;                                                     
poto.rx=3.0;                                                       
poto.ry=0.1;                                                       
poto.rz=0.1;                                                       
ret = rm_movec(robot_handle,povia,poto,20,0,0,0,1);
```

## Joint motion in space to target pose `rm_movej_p()`

- **Method prototype:**

```C
int rm_movej_p(rm_robot_handle * handle,rm_pose_t pose,int v,int r,int trajectory_connect,int block)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `pose`  |    Input    |    Target pose, unit of position: m; unit of orientation: radian.   |
|  `v`  |    Input    |    Velocity ratio: 1−100, indicating the percentage of the planned velocity and acceleration to the maximum angular velocity and angular acceleration of the joint.   |
|  `r`  |    Input    |    Percentage coefficient of blend radius, 0−100.   |
|  `trajectory_connect`  |    Input    |    "Trajectory connection" flag:<br>0: Plan and execute the trajectory immediately, not connecting the following trajectory;<br>1: Plan the current trajectory together with the following trajectory, but do not execute it immediately. In blocking mode, even if the trajectory is transmitted successfully, it will be returned immediately.   |
|  `block`  |    Input    |    Blocking settings: <br> multi-thread mode: 0: non-blocking mode, immediately return after sending commands; 1: blocking mode, return after the robotic arm reaches the target position or the planning fails. <br>Single-thread mode: 0: non-blocking mode; other values: blocking mode, and timeout period setting according to the movement time, in s.   |

::: warning

- For single-thread blocking mode, set the timeout period to return the trajectory after running within the timeout period. <br>
- The blend radius is valid only when trajectory_connect is 1, and is invalid when trajectory_connect is 0.
:::

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Joint motion in space to target pose, blocking mode (multi-thread mode by default)
// Target position: x: 0.1 m, y: 0.2 m, z: 0.03 m; orientation: rx: 0.4 rad, ry: 0.5 rad, rz: 0.6 rad;
// Velocity coefficient: 20%, without blending, plan and execute immediately
rm_pose_t pose;                                                            
pose.position.x=-0.1;                                                       
pose.position.y=-0.2;                                                       
pose.position.z=0.3;                                                        
pose.euler.rx=0.4;                                                          
pose.euler.ry=0.5;                                                          
pose.euler.rz=0.6;                                                          
ret = rm_movej_p(robot_handle,pose, 20,0,0,1);  
```

## Angle pass-through `rm_movej_canfd()`

The angle is passed to the robotic arm through CANFD, without the need of controller planning. If the command is correct, the robotic arm will execute it immediately.

### C Language Version

- **Method prototype:**

```C
int rm_movej_canfd(rm_robot_handle * handle, rm_movej_canfd_mode_t config)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_movej_canfd_mode_t](../../struct/movejCanfdMode/index.md) for details of the structure.*<br>

::: warning

- The pass-through effect is influenced by the communication cycle and trajectory smoothness. Therefore, it is required that the communication cycle remains stable, avoiding significant fluctuations. <br>
- When using this function, it is recommended to perform proper trajectory planning to ensure the stable operation of the robotic arm. <br>
- The Ethernet port of Gen 3 controller can attain a pass-through cycle as fast as 2 ms, providing higher real-time performance. <br>
:::

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `config`  |    Input    |    Pose Transparency Mode Configuration Structure.    |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Angle pass-through to CANFD, target joint angle : [1°, 0°, 20°, 30°, 0°, 20°]
rm_movej_canfd_mode_t my_j_canfd = {
    .joint = {1.0, 0.0, 20.0, 3.0, 0.0, 20.0},
    .expand = 1.5f,
    .follow = true,
    .trajectory_mode = 2,
    .radio = 50
};
rm_movej_canfd(handle, my_j_canfd);
```

### C++ Version

- **Method prototype:**

```C
int rm_movej_canfd(rm_robot_handle *handle, float *joint, bool follow, int expand, int trajectory_mode=0, int radio=0)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_pose_t](../../struct/pose/index.md) for details of the structure.*<br>

::: warning

- The pass-through effect is influenced by the communication cycle and trajectory smoothness. Therefore, it is required that the communication cycle remains stable, avoiding significant fluctuations. <br>
- When using this function, it is recommended to perform proper trajectory planning to ensure the stable operation of the robotic arm. <br>
- The Ethernet port of Gen 3 controller can attain a pass-through cycle as fast as 2 ms, providing higher real-time performance. <br>
:::

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
| `joint`           | Input           | Array of target angles for joints 1 to 7, unit: degrees (°), precision: 0.0001°.              |
| `follow`          | Input           |true for high follow, false for low follow. If high follow is used, the transparency cycle must not exceed 10ms. |
| `expand`          | Input           | If there is a general-purpose extended axis that needs to be transmitted, this parameter can be used for transmission. |
| `trajectory_mode` | Input (Optional)| Under high follow mode, 0 - Full Transparency Mode, 1 - Curve Fitting Mode, 2 - Filtering Mode.   |
| `radio`           | Input (Optional)| When in Curve Fitting Mode, radio is the smoothing factor (0-100), when in Filtering Mode, radio is the filtering parameter (range is between 0 and 1000).  |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
RM_Service robot_service;
//Transmit the angle transparency to CANFD, target joint angles: [1°, 0°, 20°, 30°, 0°, 20°], high follow curve fitting mode. Smoothing factor is 50
float joint[6] = { 1, 0, 20, 30, 0, 20};
robot_service.rm_movej_canfd(robot_handle, joint, true, 0, 1, 50);
```

## Pose pass-through `rm_movep_canfd()`

- The pose is passed to the robotic arm through CANFD, without the need of controller planning. <br>
- When the target pose is passed-through to the robotic arm controller, the controller will first attempt to perform inverse kinematics calculation. If the inverse kinematics calculation succeeds and the calculated joint angles are close to the current angles, they will be directly issued to the joints to execute, while skipping the trajectory planning step. <br>
- This feature is applicable to scenarios that require periodic adjustment of the pose, such as in visual servo applications.

### C Language Version

- **Method prototype:**

```C
int rm_movep_canfd(rm_robot_handle *handle, rm_movep_canfd_mode_t config)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_movep_canfd_mode_t](../../struct/movepCanfdMode/index.md) for details of the structure.*

::: warning

- The pass-through effect is influenced by the communication cycle and trajectory smoothness. Therefore, it is required that the communication cycle remains stable, avoiding significant fluctuations.
- When using this function, it is recommended to perform proper trajectory planning to ensure the stable operation of the robotic arm.
- The Ethernet port of Gen 3 controller can attain a pass-through cycle as fast as 2 ms, providing higher real-time performance.
:::

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `config`  |    Input    |   Pose Transparency Mode Structure.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
/*pose: Target pose, position accuracy: 0.001 mm, orientation accuracy: 0.001 rad
Target position: x: 0 m, y: 0 m, z: 0.85049 m
Target orientation: rx: 0 rad, ry: 0 rad, rz: 3.142 rad
The target pose is the numerical values of the current tool in the current work frame. */
rm_movep_canfd_mode_t my_p_canfd = (rm_movep_canfd_mode_t){0};                                               
my_p_canfd.pose.position.x=0;                                                           
my_p_canfd.pose.position.y=0;                                                           
my_p_canfd.pose.position.z=0.85049;         
my_p_canfd.pose.euler.rx=0;                                                           
my_p_canfd.pose.euler.ry=0;
my_p_canfd.pose.euler.rz=3.142;
my_p_canfd.follow = 1;
my_p_canfd.trajectory_mode = 1;
my_p_canfd.radio = 50;
rm_movep_canfd(robot_handle, my_p_canfd);  
```

### C++ Version

- **Method prototype:**

```C
int rm_movep_canfd(rm_robot_handle * handle,rm_pose_t pose,bool follow, int trajectory_mode=0, int radio=0)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

::: warning

- The pass-through effect is influenced by the communication cycle and trajectory smoothness. Therefore, it is required that the communication cycle remains stable, avoiding significant fluctuations.
- When using this function, it is recommended to perform proper trajectory planning to ensure the stable operation of the robotic arm.
- The Ethernet port of Gen 3 controller can attain a pass-through cycle as fast as 2 ms, providing higher real-time performance.
:::

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `pose`  |    Input    |    Pose (expressed in quaternions preferably).   |
|   `follow`  |    Input   | true: high follow, false: low follow. If high follow is used, the pass-through cycle should not exceed 10 ms.   |
| `trajectory_mode` | Input (Optional)| Under high follow mode, 0 - Full Transparency Mode, 1 - Curve Fitting Mode, 2 - Filtering Mode.   |
| `radio`           | Input (Optional)| When in Curve Fitting Mode, radio is the smoothing factor (0-100), when in Filtering Mode, radio is the filtering parameter (range is between 0 and 1000).  |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
/*pose: Target pose, position accuracy: 0.001 mm, orientation accuracy: 0.001 rad
Target position: x: 0 m, y: 0 m, z: 0.85049 m
Target orientation: rx: 0 rad, ry: 0 rad, rz: 3.142 rad
The target pose is the numerical values of the current tool in the current work frame. */
rm_pose_t pose;                                                           
pose.position.x=0;                                                           
pose.position.y=0;                                                           
pose.position.z=0.85049;                                                         
pose.euler.rx=0;                                                           
pose.euler.ry=0;
pose.euler.rz=3.142;                       
//High Follow Filtering Mode, Smoothing Factor 500
rm_movep_canfd(robot_handle, pose, true, 2, 500);  
```

## Joint following motion in space `rm_movej_follow()`

- **Method prototype:**

```C
int rm_movej_follow(rm_robot_handle * handle,float * joint)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_pose_t](../../struct/pose/index.md) for details of the structure.*<br>

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `joint`  |    Input    |    Target angle array of 1−7 joints, unit: °.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Joint follows to the target joint angle [1°, 0°, 20°, 30°, 0°, 20°]
float joint[6] = { 1, 0, 20, 30, 0, 20};
rm_movej_follow(robot_handle,joint);
```

## Following motion in Cartesian space `rm_movej_follow()`

- **Method prototype:**

```C
int rm_movep_follow(rm_robot_handle * handle,rm_pose_t pose)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `pose`  |    Input    |    Pose (expressed in quaternions preferably).   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
/*pose: Target pose, position accuracy: 0.001 mm, orientation accuracy: 0.001 rad
Target position: x: 0 m, y: 0 m, z: 0.85049 m
Target orientation: rx: 0 rad, ry: 0 rad, rz: 3.142 rad
The target pose is the numerical values of the current tool in the current work frame. */
rm_pose_t pose;                                                           
pose.position.x=0;                                                           
pose.position.y=0;                                                           
pose.position.z=0.85049;                                                         
pose.euler.rx=0;                                                           
pose.euler.ry=0;
pose.euler.rz=3.142;                       
rm_movep_follow(robot_handle,pose);  
```
