# <p class="hidden">ROS2: </p>Introduction to the Rm_ros_interface Package

The rm_ros_interface package is intended to provide necessary message files for the RM robotic arm to run under the ROS2 framework, without any executable usage commands.
The package will be introduced in detail from the following three aspects with different purposes:

* 1. Package application: Learn how to use the package.
* 2. Package structure description: Understand the composition and function of files in the package.
* 3. Package topic description: Know the topics of the package for easy development and use.

Code link: [https://github.com/RealManRobot/ros2_rm_robot/tree/main/rm_ros_interfaces](https://github.com/RealManRobot/ros2_rm_robot/tree/main/rm_ros_interfaces)

## Structure description of the rm_ros_interface package

```
The current rm_ros_interface package consists of the following files.
├── CMakeLists.txt             #Build rule file
├── include                         #Dependency header file folder
│   └── rm_ros_interfaces
├── msg                          #Current message file (refer to the description below for details)
│   ├── Armoriginalstate_msg
│   ├── Armsoftversion_msg
│   ├── Armstate_msg
│   ├── Cartepos_msg
│   ├── Forcepositionmovejoint75_msg
│   ├── Forcepositionmovejoint_msg
│   ├── Forcepositionmovepose_msg
│   ├── Force_Position_State_msg
│   ├── Getallframe_msg
│   ├── GetArmState_Command_msg
│   ├── Gripperpick_msg
│   ├── Gripperset_msg
│   ├── Handangle_msg
│   ├── Handforce_msg
│   ├── Handposture_msg
│   ├── Handseq_msg
│   ├── Handspeed_msg
│   ├── Jointerrclear_msg
│   ├── Jointerrorcode75_msg
│   ├── Jointerrorcode_msg
│   ├── Jointpos75_msg
│   ├── Jointpos_msg
│   ├── Liftheight_msg
│   ├── Liftspeed_msg
│   ├── Liftstate_msg
│   ├── Movec_msg
│   ├── Movej75_msg
│   ├── Movej_msg
│   ├── Movejp_msg
│   ├── Movel_msg
│   ├── Setforceposition_msg
│   ├── Setrealtimepush_msg
│   ├── Sixforce_msg
│   └── Stop_msg
├── package.xml                       #Dependency declaration file
└── src
```

## Message description of the rm_ros_interface package

### Joint error code Jointerrorcode_msg

```
uint16[] joint_error  
uint8 dof
```

**msg members:**

`uint16[] joint_error`: each joint error.
`uint8 dof`: degree of freedom of the robotic arm.

### Clear the joint error code Jointerrclear_msg

```
uint8 joint_num  
bool block
```

**msg members:**

`joint_num`: corresponding joint number, 1−6 or 1−7 from the base to the robotic arm's gripper.
`block`: blocking/non-blocking mode (bool type), true: blocking mode, false: non-blocking mode.

### Get the names of all frames Getallframe_msg

```
string[10] frame_name
```

**msg members:**

`frame_name`: returned name array of all work frames.

### Joint motion Movej_msg

```
float32[] joint  
uint8 speed  
bool block  
uint8 trajectory_connect  
uint8 dof 
```

**msg members:**

`joint`: joint angle (float type), in rad.
`speed`: speed percentage, 0−100.
`block`: blocking/non-blocking mode (bool type), true: blocking mode, false: non-blocking mode.
`trajectory_connect`: #0: immediate motion planning, 1: planning together with the next trajectory. When set to 1, the trajectory will not execute immediately.
`dof`: degree of freedom of the robotic arm.

### Linear motion Movel_msg

```
geometry_msgs/Pose pose  
uint8 speed  
uint8 trajectory_connect  
bool block
```

**msg members:**

`pose`: robotic arm pose (geometry_msgs/Pose type), including x, y, z coordinates (float type, in m) + quaternion (float type).
`speed`: speed percentage, 0−100.
`trajectory_connect`: #0: immediate motion planning, 1: planning together with the next trajectory. When set to 1, the trajectory will not execute immediately.
`block`: blocking/non-blocking mode (bool type), true: blocking mode, false: non-blocking mode.

### Circular motion Movec_msg

```
geometry_msgs/Pose pose_mid  
geometry_msgs/Pose pose_end  
uint8 speed  
uint8 trajectory_connect  
bool block  
uint8 loop
```

**msg members:**

`pose_mid`: middle pose (geometry_msgs/Pose type), including x, y, z coordinates (float type, in m) + quaternion.
`pose_end`: target pose (geometry_msgs/Pose type), including x, y, z coordinates (float type, in m) + quaternion.
`speed`: speed percentage, 0−100.
`trajectory_connect`: #0: immediate motion planning, 1: planning together with the next trajectory. When set to 1, the trajectory will not execute immediately.
`block`: blocking/non-blocking mode (bool type), true: blocking mode, false: non-blocking mode.
`loop`: loop count.

### Joint space planning to target pose Movejp_msg

```
geometry_msgs/Pose pose  
uint8 speed  
uint8 trajectory_connect
bool block
```

**msg members:**

`pose`: target pose (geometry_msgs/Pose type), including x, y, z coordinates (float type, in m) + quaternion.
`speed`: speed percentage, 0−100.
`trajectory_connect`: #0: immediate motion planning, 1: planning together with the next trajectory. When set to 1, the trajectory will not execute immediately.
`block`: blocking/non-blocking mode (bool type), true: blocking mode, false: non-blocking mode.

### Angle pass-through Jointpos_msg

```
float32[] joint  
bool follow  
float32 expand  
uint8 dof
```

**msg members:**

`joint`: joint angle (float type), in rad.
`follow`: follow state (bool type), true: high follow, false: low follow, default: high follow.
`expand`: expansion joint angle (float type), in rad.
`dof`: degree of freedom of the robotic arm.

### Pose pass-through Cartepos_msg

```
geometry_msgs/Pose pose  
bool follow
```

**msg members:**

`pose`: robotic arm pose (geometry_msgs/Pose type), including x, y, z coordinates (float type, in m) + quaternion.
`follow`: follow state (bool type), true: high follow, false: low follow, default: high follow.

### Current robotic arm state — angle and Euler angle Armoriginalstate_msg

```
float32[] joint  
float32[6] pose  
uint16 arm_err  
uint16 sys_err  
uint8 dof
```

**msg members:**

`joint`: joint angle (float type), in °.
`pose`: current pose of the robotic arm (float type), including x, y, z coordinates, in m, and x, y, z Euler angles, in °.
`arm_err`: robotic arm error code (unsigned int type).
`sys_err`: system error code (unsigned int type).
`dof`: degree of freedom of the robotic arm.

### Current robotic arm state — radian and quaternion Armstate_msg

```
float32[] joint  
geometry_msgs/Pose pose  
uint16 arm_err  
uint16 sys_err  
uint8 dof
```

**msg members:**

`joint`: joint angle (float type), in rad.
`pose`: current pose of the robotic arm (float type), including x, y, z coordinates, in m, and x, y, z, w quaternions.
`arm_err`: robotic arm error code (unsigned int type).
`sys_err`: system error code (unsigned int type).
`dof`: degree of freedom of the robotic arm.

### Read the software version Armsoftversion_msg

```
string planversion  
string ctrlversion  
string kernal1  
string kernal2  
string productversion
```

**msg members:**

`planversion`: kernel version of the user interface (string type).
`ctrlversion`: real-time kernel version (string type).
`kernal1`: real-time version of kernel 1 (string type).
`kernal2`: real-time version of kernel 2 (string type).
`productversion`: model of the robotic arm (string type).

### Set the force-controlled grasping of the gripper Gripperpick_msg

```
uint16 speed  
uint16 force  
bool block
```

**msg members:**

`speed`: grasping speed (unsigned int type), range: 1−1,000.
`force`: grasping force threshold (unsigned int type), range: 50−1,000.
`block`: blocking/non-blocking mode (bool type), true: blocking mode, false: non-blocking mode.

### Set the continuous force-controlled grasping of the gripper Gripperpick_msg

```
uint16 speed  
uint16 force  
bool block
```

**msg members:**

`speed`: grasping speed (unsigned int type), range: 1−1,000.
`force`: grasping force threshold (unsigned int type), range: 50−1,000.
`block`: blocking/non-blocking mode (bool type), true: blocking mode, false: non-blocking mode.

### Set the gripper to a given position Gripperset_msg

```
uint16 position  
bool block
```

**msg members:**

`position`: gripper target position (unsigned int type), range: 1−1,000, representing the gripper opening: 0−70 mm.
`block`: blocking/non-blocking mode (bool type), true: blocking mode, false: non-blocking mode.

### Set the force-position hybrid control Setforceposition_msg

```
uint8 sensor  
uint8 mode  
uint8 direction  
int16 n  
bool block
```

**msg members:**

`sensor`: sensor, 0: 1-DoF force, 1: 6-DoF force.
`mode`: mode, 0: force control in the work frame, 1: force control in the tool frame.
`direction`: force control direction, 0: along the X-axis, 1: along the Y-axis, 2: along the Z-axis, 3: along the RX orientation, 4: along the RY orientation, 5: along the RZ orientation.
`n`: magnitude of the force, in N.
`block`: blocking/non-blocking mode, true: blocking mode, false: non-blocking mode.

### 6-DoF force data Sixforce_msg

```
float32 force_fx  
float32 force_fy  
float32 force_fz  
float32 force_mx  
float32 force_my  
float32 force_mz
```

**msg members:**

`force_fx`: magnitude of the force along the X-axis.
`force_fy`: magnitude of the force along the Y-axis.
`force_fz`: magnitude of the force along the Z-axis.
`force_mx`: magnitude of the rotation force along the X-axis.
`force_my`: magnitude of the rotation force along the Y-axis.
`force_mz`: magnitude of the rotation force along the Z-axis.

### Set the gesture sequence number of the dexterous hand Handposture_msg

```
uint16 posture_num  
bool block
```

**msg members:**

`posture_num`: gesture sequence number pre-stored in the dexterous hand, range: 1−40.
`block`: blocking/non-blocking mode (bool type), true: blocking mode, false: non-blocking mode.

### Set the action sequence number of the dexterous hand Handseq_msg

```
uint16 seq_num  
bool block
```

**msg members:**

`seq_num`: action sequence number pre-stored in the dexterous hand, range: 1−40.
`block`: blocking/non-blocking mode (bool type), true: blocking mode, false: non-blocking mode.

### Set the angles of the dexterous hand Handangle_msg

```
int16[6] hand_angle   
bool block
```

**msg members:**

`hand_angle`: array of finger angles, range: 0−1,000. Additionally, -1 indicates that no action will be performed for this degree of freedom, and the current state will be maintained.
`block`: blocking/non-blocking mode (bool type), true: blocking mode, false: non-blocking mode.

### Set the speed of the dexterous hand Handspeed_msg

```
uint16 hand_speed  
bool block
```

**msg members:**

`hand_speed`: finger speed, range: 1−1,000.
`block`: blocking/non-blocking mode (bool type), true: blocking mode, false: non-blocking mode.

### Set the force threshold of the dexterous hand Handforce_msg

```
uint16 hand_force  
bool block
```

**msg members:**

`hand_force`: finger force, range: 1−1,000.
`block`: blocking/non-blocking mode (bool type), true: blocking mode, false: non-blocking mode.

### Pass-through force-position hybrid control compensation — angle Forcepositionmovejoint_msg

```
float32[] joint  
uint8 sensor  
uint8 mode  
int16 dir  
float32 force  
bool follow  
uint8 dof
```

**msg members:**

`joint`: pass-through force-position hybrid control of angle, in rad.
`sensor`: sensor type, 0: 1-DoF force, 1: 6-DoF force.
`mode`: mode: 0: along the work frame, 1: along the tool frame.
`dir`: force control direction, 0−5: X/Y/Z/Rx/Ry/Rz. For the 1-DoF force type, the default direction is the Z-axis.
`force`: magnitude of the force, accuracy: 0.1 N or 0.1 N.m.
`block`: blocking/non-blocking mode (bool type), true: blocking mode, false: non-blocking mode.
`dof`: degree of freedom of the robotic arm.

### Pass-through force-position hybrid control compensation — pose Forcepositionmovejoint_msg

```
geometry_msgs/Pose pose  
uint8 sensor  
uint8 mode  
int16 dir  
float32 force  
bool follow
```

**msg members:**

`pose`: robotic arm pose, including position (x, y, z) + orientation (quaternion).
`sensor`: sensor type, 0: 1-DoF force, 1: 6-DoF force.
`mode`: mode: 0: along the work frame, 1: along the tool frame.
`dir`: force control direction, 0−5: X/Y/Z/Rx/Ry/Rz. For the 1-DoF force type, the default direction is the Z-axis.
`force`: magnitude of the force, accuracy: 0.1 N or 0.1 N.m.
`block`: blocking/non-blocking mode (bool type), true: blocking mode, false: non-blocking mode. 

### Set the open-loop speed control — lifting mechanism Liftspeed_msg

```
int16 speed  
bool block
```

**msg members:**

`speed`: speed percentage, -100 to 100. 1. speed<0: Lifting mechanism moves down; 2. speed>0: Lifting mechanism moves up; 3. speed=0: Lifting mechanism stops moving.
`block`: blocking/non-blocking mode (bool type), true: blocking mode, false: non-blocking mode.

### Set the closed-loop position control — lifting mechanism Liftheight_msg

```
uint16 height  
uint16 speed  
bool block
```

**msg members:**

`height`: target height, unit: mm, range: 0−2,600.
`speed`: speed percentage, 1−100.
`block`: blocking/non-blocking mode (bool type), true: blocking mode, false: non-blocking mode.

### Get the state of the lifting mechanism Liftstate_msg

```
int16 height   
int16 current  
uint16 err_flag
```

**msg members:**

`height`: height of the current lifting mechanism, unit: mm, accuracy: 1 mm, range: 0−2,300.
`current`: error code of the lifting drive, refer to joint error codes for details.

### Get or set the UDP-based real-time robotic arm state pushing Setrealtimepush_msg

```
uint16 cycle  
uint16 port  
uint16 force_coordinate  
string ip
```

**msg members:**

`cycle`: broadcast cycle, in multiples of 5 ms.
`port`: broadcast port number.
`force_coordinate`: frame for external force data, 0: sensor frame, 1: current work frame, 2: current tool frame.
`ip`: custom pushing target IP address.
