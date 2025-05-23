# <p class="hidden">ROS2: </p> Introduction to the ROS2 Calling API Interface Package (V1.0.0)

To facilitate users in controlling the robotic arm through ROS2, RealMan provides an API-based ROS2 package, and the details on the control of the robotic arm are available in the relevant documents and descriptions of the API. In actual use, users establish communication with the robotic arm through the Ethernet port to control the robotic arm.

## Error description

### Type of the system error

| S/N | Error Code (Hexadecimal) | Description |
| :---: | :---- | :---: |
|  1  |  0x0000  |  Normal system  |
|  2  |  0x1001  |  Abnormal joint communication  |
|  3  |  0x1002  |  Target angle out of limit  |
|  4  |  0x1003  |  Point unreachable as a singularity  |
|  5  |  0x1004  |  Real-time kernel communication error  |
|  6  |  0x1005  |  Joint communication bus error  |
|  7  |  0x1006  |  Planning layer kernel error  |
|  8  |  0x1007  |  Joint overspeed  |
|  9  |  0x1008  |  End interface board disconnected  |
|  10  |  0x1009  |  Speed out of limit  |
|  11  |  0x100A  |  Acceleration out of limit  |
|  12  |  0x100B  |  Joint brake release failed  |
|  13  |  0x100C  |  Overspeed during drag teaching  |
|  14  |  0x100D  |  Robotic arm collision  |
|  15  |  0x100E  |  Null work frame  |
|  16  |  0x100F  |  Null tool frame  |
|  17  |  0x1010  |  Joint disabling error  |

### Type of the joint error

| S/N | Error Code (Hexadecimal) | Description |
| :---: | :---- | :---: |
|  1  |  0x0000  |  Normal joint  |
|  2  |  0x0001  |  FOC error  |
|  3  |  0x0002  |  Overvoltage  |
|  4  |  0x0004  |  Undervoltage  |
|  5  |  0x0008  |  Over-temperature  |
|  6  |  0x0010  |  Start failed  |
|  7  |  0x0020  |  Encoder error  |
|  8  |  0x0040  |  Overcurrent  |
|  9  |  0x0080  |  Software error  |
|  10  |  0x0100  |  Temperature sensor error  |
|  11  |  0x0200  |  Position out of limit error  |
|  12  |  0x0400  |  Invalid joint ID  |
|  13  |  0x0800  |  Position tracking error  |
|  14  |  0x1000  |  Current detection error  |
|  15  |  0x2000  |  Brake release failed  |
|  16  |  0x4000  |  Position command step warning  |
|  17  |  0x8000  |  Multi-coil joint data loss  |
|  18  |  0xF000  |  Communication frame loss  |

### Type of the API error

| S/N | Error Code (Hexadecimal) | Description |
| :---: | :---- | :---: |
| 1 | 0x0000 | Normal system |
| 2 | 0x0001 | Request return: FALSE |
| 3 | 0x0002 | Uninitialized robotic arm or invalid type input  |
| 4 | 0x0003 | Illegal timeout |
| 5 | 0x0004 | Socket initialization failed |
| 6 | 0x0005 | Socket connection failed |
| 7 | 0x0006 | Socket transmission failed |
| 8 | 0x0007 | Socket communication timeout |
| 9 | 0x0008 | Unknown error |
| 10 | 0x0009 | Incomplete data |
| 11 | 0x000A | Array length error |
| 12 | 0x000B | Data type error |
| 13 | 0x000C | Type error |
| 14 | 0x000D | Callback function missing |
| 15 | 0x000E | Abnormal robotic arm stop |
| 16 | 0x000F | Excessively long name of the trajectory file |
| 17 | 0x0010 | Trajectory file verification failed  |
| 18 | 0x0011 | Trajectory file read failed |
| 19 | 0x0012 | The controller is busy, please try again later |
| 20 | 0x0013 | Invalid input |
| 21 | 0x0014 |  Full data queue |
| 22 | 0x0015 | Computation failed |
| 23 | 0x0016 | File open failed |
| 24 | 0x0017 | Manual stop of the force control calibration  |
| 25 | 0x0018 | No savable trajectory |

## Joint configuration

### Clear the joint error code `Jointerrclear.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`joint_num`|   `uint8`   | Corresponding joint number, 1−6 from the base to the robotic arm's gripper.         |
|`block`|   `bool`   | Blocking/Non-blocking mode, true: blocking mode, false: non-blocking mode.   |

**Usage command demo:**

```json
ros2 topic pub /rm_driver/set_joint_err_clear_cmd rm_ros_interfaces/msg/Jointerrclear "joint_num: 1 block: true"
```

**Return command demo:**

```json
ros2 topic echo /rm_driver/set_joint_err_clear_result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |true: setting succeeded, false: setting failed. |

## Work frame setting

### Change the current work frame

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `String`   | ROS built-in msg.         |

**Usage command demo:**

```json
ros2 topic pub /rm_driver/change_work_frame_cmd std_msgs/msg/String "data: 'Base'"
```

**Return command demo:**

```json
ros2 topic echo /rm_driver/change_work_frame_result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |true: setting succeeded, false: setting failed. |

## Frame getting

### Get the current tool frame

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   |  ROS built-in msg.         |

**Usage command demo:**

```json
ros2 topic pub --once /rm_driver/get_current_tool_frame_cmd std_msgs/msg/Empty "{}"
```

**Return command demo:**
Name of the current tool frame.

```json
ros2 topic echo /rm_driver/get_current_tool_frame_result
```

### Get the names of all tool frames

**Parameter description:**

| Parameter  | Type | Description  |
|:---|:---|:---|
|`std_msgs`|   `Empty`   |  ROS built-in msg.         |

**Usage command demo:**

```json
ros2 topic pub /rm_driver/get_all_tool_frame_cmd std_msgs/msg/Empty "{}"
```

**Return command demo:**
Names of all tool frames.

```json
ros2 topic echo /rm_driver/get_all_tool_frame_result
```

### Get the current work frame

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   |  ROS built-in msg.         |

**Usage command demo:**

```json
ros2 topic pub --once /rm_driver/get_curr_workFrame_cmd std_msgs/msg/Empty "{}"
```

**Return command demo:**

```json
ros2 topic echo /rm_driver/get_curr_workFrame_result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |true: setting succeeded, false: setting failed. |

### Get the names of all work frames

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   |  ROS built-in msg.         |

**Usage command demo:**

```json
ros2 topic pub --once /rm_driver/get_all_work_frame_cmd std_msgs/msg/Empty "{}"
```

**Return command demo:**
Names of all work frames.

```json
ros2 topic echo /rm_driver/get_all_work_frame_result
```

## Robotic arm state getting

### Get the current robotic arm state — return the angle and Euler angle of each joint

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   |  ROS built-in msg.         |

**Usage command demo:**

```json
ros2 topic pub --once /rm_driver/get_current_arm_state_cmd std_msgs/msg/Empty "{}"
```

**Return command demo:**
Current joint state (angle) + pose (Euler angle) + error message.

```json
ros2 topic echo /rm_driver/get_current_arm_original_state_result
```

### Get the current robotic arm state — return the radian and quaternion of each joint

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   |  ROS built-in msg.         |

**Usage command demo:**

```json
ros2 topic pub --once /rm_driver/get_current_arm_state_cmd std_msgs/msg/Empty "{}"
```

**Return command demo:**
Current joint state (radian) + pose (quaternion) + error message.

```json
ros2 topic echo /rm_driver/get_current_arm_state_result
```

## Robotic arm motion planning

### Joint motion

**Parameter description:**

| Parameter  | Type | Description  |
|:--|:---|:----|
|`joint`|   `float32[6]`   | Joint angle, in rad.         |
| `speed`      | `uint8` | Speed percentage, 0−100.         |
|`block`|   `bool`   | Blocking/Non-blocking mode, true: blocking mode, false: non-blocking mode.         |

**Usage command demo:**
6-DoF robotic arm:

```json
ros2 topic pub --once /rm_driver/movej_cmd rm_ros_interfaces/msg/Movej "joint: [0, 0, 0, 0, 0, 0] speed: 20 block: true dof: 6"
```

7-DoF robotic arm:

```json
ros2 topic pub --once /rm_driver/movej_cmd rm_ros_interfaces/msg/Movej "joint: [0, 0, 0, 0, 0, 0, 0] speed: 20 block: true trajectory_connect: 0 dof: 7"
```

**Return command demo:**

```json
ros2 topic echo /rm_driver/movej_result
```

**Parameter description:**

| Parameter  | Type | Description  |
|:---|:---|:---|
|`std_msgs`   | `bool` |true: setting succeeded, false: setting failed. Return the error code from the driver terminal. |

### Cartesian-space linear motion `Movel.msg`

**Parameter description:**

| Parameter  | Type | Description  |
|:--|:---|:----|
|`geometry_msgs/Pose`|   `float`   | Robotic arm pose, including x, y, z coordinates (float type, in m) + quaternion.         |
| `speed`      | `uint8` | Speed percentage, 0−100.         |
|`block`|   `bool`   | Blocking/Non-blocking mode, true: blocking mode, false: non-blocking mode.         |

**Usage command demo:**
Firstly, execute the MoveJ_P:

```json
ros2 topic pub --once /rm_driver/movej_p_cmd rm_ros_interfaces/msg/Movejp "pose:position: x: -0.317239 y: 0.120903 z: 0.255765 orientation: x: -0.983404 y: -0.178432 z: 0.032271 w: 0.006129<br>speed:20 block: true"
```

Then, execute the MoveL:

```json
ros2 topic pub --once /rm_driver/movel_cmd rm_ros_interfaces/msg/Movel "pose: position: x: -0.317239 y: 0.120903 z: 0.295765 orientation: x: -0.983404 y: -0.178432 z: 0.032271 w: 0.006129 speed: 20 trajectory_connect: 0 block: true"
```

**Return command demo:**

```json
ros2 topic echo /rm_driver/movel_result
```

**Parameter description:**

| Parameter  | Type | Description  |
|:---|:---|:---|
|`std_msgs`   | `bool` |true: setting succeeded, false: setting failed. Return the error code from the driver terminal. |

### Cartesian-space circular motion `Movec.msg`

| Parameter  | Type | Description  |
|:--|:---|:----|
|`pose_mid`|   `geometry_msgs/Pose`   | Middle pose of the robotic arm, including x, y, z coordinates (float type, in m) + quaternion.         |
|`pose_end`|   `geometry_msgs/Pose`   | End pose of the robotic arm, including x, y, z coordinates (float type, in m) + quaternion.         |
| `speed`      | `uint8` | Speed percentage, 0−100.         |
|`block`|   `bool`   | Blocking/Non-blocking mode, true: blocking mode, false: non-blocking mode.         |

**Usage command demo:**
Firstly, execute the MoveJ_P:

```json
ros2 topic pub --once /rm_driver/movej_p_cmd rm_ros_interfaces/msg/Movejp "pose: position: x: 0.274946 y: -0.058786 z: 0.299028 orientation: x: 0.7071 y: -0.7071 z: 0.0 w: 0.0 speed: 0 block: true"
```

Then, execute the MoveC to reach the given position:

```json
ros2 topic pub --once /rm_driver/movec_cmd rm_ros_interfaces/msg/Movec "pose_mid: position: x: 0.324946 y: -0.008786 z: 0.299028 orientation: x: 0.7071 y: -0.7071 z: 0.0 w: 0.0<br>pose_end: position: x: 0.274946 y: 0.041214 z: 0.299028 orientation: x: 0.7071 y: -0.7071 z: 0.0 w: 0.0 speed: 20 trajectory_connect: 0 block: false loop: 0
```

**Return command demo:**

```json
ros2 topic echo /rm_driver/movec_result
```

### Joint angle pass-through via CANFD `JointPos.msg`

| Parameter  | Type | Description  |
|:--|:---|:----|
|`joint`|   `float32[6]`   | Joint angle, in rad.         |
|`follow`|   `bool`   | Follow state, true: high follow, false: low follow, default: high follow.         |
|`expand`|   `float32`   | Expansion angle, in rad.         |
|`block`|   `bool`   | Blocking/Non-blocking mode, true: blocking mode, false: non-blocking mode.         |

**Usage command demo:**
Pass-through requires continuously sending multiple consecutive points to achieve the functionality, rather than simply relying on the following command. Currently, the moveit2 uses an angle pass-through control.

```json
ros2 topic pub /rm_driver/movej_canfd_cmd rm_ros_interfaces/msg/Jointpos "joint: [0, 0, 0, 0, 0, 0] follow: false expand: 0.0 dof: 6"
```

**Return command demo:**
Succeeded: no return value; failed: return the error code from the driver terminal.

### Pose pass-through via CANFD `Jointpos.msg`

| Parameter  | Type | Description  |
|:--|:---|:----|
|`pose`|   `geometry_msgs/Pose`   | Pass-through pose, including x, y, z coordinates (float type, in m) + quaternion.         |
|`follow`|   `bool`   | Follow state, true: high follow, false: low follow, default: high follow.         |

**Usage command demo:**
A large number of consecutive points (more than 10) are required and continuously published with a cycle of at least 2 ms. However, simply relying on the following command will not accomplish the task.

```json
ros2 topic pub /rm_driver/movep_canfd_cmd rm_ros_interfaces/msg/Cartepos "pose: position: x: 0.0 y: 0.0 z: 0.0 orientation: x: 0.0 y: 0.0 z: 0.0 w: 1.0 follow: false"
```

**Return command demo:**
Succeeded: no return value; failed: return the error code from the driver terminal.

### Joint space planning to target pose `Movejp.msg`

| Parameter  | Type | Description  |
|:--|:---|:----|
|`pose`|   `geometry_msgs/Pose`   | Target pose, including x, y, z coordinates (float type, in m) + quaternion.         |
| `speed`      | `uint8` | Speed percentage, 0−100.         |
|`block`|   `bool`   | Blocking/Non-blocking mode, true: blocking mode, false: non-blocking mode.         |

**Usage command demo:**

```json
ros2 topic pub --once /rm_driver/movej_p_cmd rm_ros_interfaces/msg/Movejp "pose: position: x: -0.317239 y: 0.120903 z: 0.255765 orientation: x: -0.983404 y: -0.178432 z: 0.032271 w: 0.006129 speed: 20 block: true"
```

**Return command demo:**

```json
ros2 topic echo /rm_driver/movej_p_result
```

**Parameter description:**

| Parameter  | Type | Description  |
|:---|:---|:---|
|`std_msgs`   | `bool` |true: setting succeeded, false: setting failed. Return the error code from the driver terminal. |

### Quick stop `std_msgs`

| Parameter  | Type | Description  |
|:--|:---|:----|
|`data`|   `bool`   | Quick/Non-quick stop, true: quick stop, false: non-quick stop.         |

**Usage command demo:**

```json
ros2 topic pub /rm_driver/move_stop_cmd std_msgs/msg/Bool "data: true"
```

**Return command demo:**

```json
ros2 topic echo /rm_driver/move_stop_result
```

**Parameter description:**

| Parameter  | Type | Description  |
|:---|:---|:---|
|`std_msgs`   | `bool` |true: setting succeeded, false: setting failed. Return the error code from the driver terminal. |

## Controller configuration

### Get the controller version `Armsoftversion.msg`

| Parameter  | Type | Description  |
|:--|:---|:----|
|`planversion`|   `string`   | Kernel version of the user interface.         |
|`ctrlversion`|   `string`   | Real-time kernel version.         |
|`kernal1`|   `string`   | Real-time version of kernel 1.         |
|`kernal2`|   `string`   | Real-time version of kernel 2.         |
|`productversion`|   `string`   | Model of the robotic arm.         |

**Usage command demo:**

```json
ros2 topic pub /rm_driver/get_arm_software_version_cmd std_msgs/msg/Empty "{}"
```

**Return command demo:**

```json
ros2 topic echo /rm_driver/get_arm_software_version_result
```

**Parameter description:**

| Parameter  | Type | Description  |
|:---|:---|:---|
|`std_msgs`   | `bool` |true: setting succeeded, false: setting failed. Return the error code from the driver terminal. |

## End effector IO configuration

### Set the tool power output `std_msgs`

| Parameter  | Type | Description  |
|:--|:---|:----|
|`data`|   `uint16`   | Power output type, 0: 0 V, 2: 12 V, 3: 24 V.         |

**Usage command demo:**

```json
ros2 topic pub --once /rm_driver/set_tool_voltage_cmd std_msgs/msg/UInt16 "data: 0"
```

**Return command demo:**

```json
ros2 topic echo /rm_driver/set_tool_voltage_result
```

**Parameter description:**

| Parameter  | Type | Description  |
|:---|:---|:---|
|`std_msgs`   | `bool` |true: setting succeeded, false: setting failed. Return the error code from the driver terminal. |

## Gripper control

The RealMan robotic arm supports various common grippers. In the system, the INSPIRE-ROBOTS EG2-4C2 gripper is equipped. To facilitate user operation of the gripper, the robotic arm controller has adapted the gripper for ROS-based control.

### Set the force-controlled grasping of the gripper `Gripperpick.msg`

| Parameter  | Type | Description  |
|:--|:---|:----|
|`speed`|   `uint16`   |  1−1,000, representing the gripper opening and closing speed, without a unit of measurement.         |
|`force`|   `uint16`   |  1−1,000, representing the gripping force of the gripper, with a maximum of 1.5 kg.         |
|`block`|   `uint16`   | Blocking/Non-blocking mode, true: blocking mode, false: non-blocking mode.         |

**Usage command demo:**

```json
ros2 topic pub --once /rm_driver/set_gripper_pick_cmd rm_ros_interfaces/msg/Gripperpick "speed: 200 force: 200 block: true"
```

**Return command demo:**

```json
ros2 topic echo /rm_driver/set_gripper_pick_result
```

**Parameter description:**

| Parameter  | Type | Description  |
|:---|:---|:---|
|`std_msgs`   | `bool` |true: setting succeeded, false: setting failed. Return the error code from the driver terminal. |

### Set the continuous force-controlled grasping of the gripper `Gripperpick.msg`

| Parameter  | Type | Description  |
|:--|:---|:----|
|`speed`|   `uint16`   |  1−1,000, representing the gripper opening and closing speed, without a unit of measurement.         |
|`force`|   `uint16`   |  1−1,000, representing the gripping force of the gripper, with a maximum of 1.5 kg.         |
|`block`|   `bool`   | Blocking/Non-blocking mode, true: blocking mode, false: non-blocking mode.         |

**Usage command demo:**

```json
ros2 topic pub --once /rm_driver/set_gripper_pick_on_cmd rm_ros_interfaces/msg/Gripperpick "speed: 200 force: 200 block: true"
```

**Return command demo:**

```json
ros2 topic echo /rm_driver/set_gripper_pick_on_result
```

**Parameter description:**

| Parameter  | Type | Description  |
|:---|:---|:---|
|`std_msgs`   | `bool` |true: setting succeeded, false: setting failed. Return the error code from the driver terminal. |

### Set the gripper to a given position `Gripperset.msg`

| Parameter  | Type | Description  |
|:--|:---|:----|
|`position`|   `uint16`   |  Gripper target position, range: 1−1,000, representing the gripper opening: 0−70 mm.         |
|`block`|   `bool`   | Blocking/Non-blocking mode, true: blocking mode, false: non-blocking mode.         |

**Usage command demo:**

```json
ros2 topic pub --once /rm_driver/set_gripper_position_cmd rm_ros_interfaces/msg/Gripperset "position: 500 block: true"
```

**Return command demo:**

```json
ros2 topic echo /rm_driver/set_gripper_position_result
```

**Parameter description:**

| Parameter  | Type | Description  |
|:---|:---|:---|
|`std_msgs`   | `bool` |true: setting succeeded, false: setting failed. Return the error code from the driver terminal. |

## Drag teaching and trajectory replay

### Set the force-position hybrid control `Setforceposition.msg`

| Parameter  | Type | Description  |
|:--|:---|:----|
|`sensor`|   `uint8`   | 0: 1-DoF force, 1: 6-DoF force <br>uint8 mode: 0: force control in the base frame, 1: force control in the tool frame.         |
| `direction` | `uint8` | Force control direction, 0: along the X-axis, 1: along the Y-axis, 2: along the Z-axis, 3: along the RX orientation, 4: along the RY orientation, 5: along the RZ orientation.         |
|`n`|   `int16`   | Magnitude of the force, unit: N, accuracy: 0.1 N.         |
|`block`|   `bool`   | Blocking/Non-blocking mode, true: blocking mode, false: non-blocking mode.         |

**Usage command demo:**

```json
ros2 topic pub --once /rm_driver/set_force_postion_cmd rm_ros_interfaces/msg/Setforceposition "sensor: 1 mode: 0 direction: 2 n: 3 block: false"
```

**Return command demo:**

```json
ros2 topic echo /rm_driver/set_force_postion_result
```

**Parameter description:**

| Parameter  | Type | Description  |
|:---|:---|:---|
|`std_msgs`   | `bool` |true: setting succeeded, false: setting failed. Return the error code from the driver terminal. |

### Stop the force-position hybrid control `std_msgs`

| Parameter  | Type | Description  |
|:--|:---|:----|
|`data`|   `bool`   | Blocking/Non-blocking mode, true: blocking mode, false: non-blocking mode.         |

**Usage command demo:**

```json
ros2 topic pub /rm_driver/stop_force_postion_cmd std_msgs/msg/Bool "data: true"
```

**Return command demo:**

```json
ros2 topic echo /rm_driver/clear_force_data_result
```

**Parameter description:**

| Parameter  | Type | Description  |
|:---|:---|:---|
|`std_msgs`   | `bool` |true: setting succeeded, false: setting failed. Return the error code from the driver terminal. |

## Use of the 6-DoF force sensor

The RealMan RM-65F robotic arm is equipped with an integrated 6-DoF force sensor at the end effector, eliminating the need for external wiring. Users can directly control the 6-DoF force through ROS topics.

### Clear the 6-DoF force data `std_msgs`

| Parameter  | Type | Description  |
|:--|:---|:----|
|`data`|   `bool`   | Blocking/Non-blocking mode, true: blocking mode, false: non-blocking mode.         |

**Usage command demo:**

```json
ros2 topic pub /rm_driver/clear_force_data_cmd std_msgs/msg/Bool "data: true"
```

**Return command demo:**

```json
ros2 topic echo /rm_driver/clear_force_data_result
```

**Parameter description:**

| Parameter  | Type | Description  |
|:---|:---|:---|
|`std_msgs`   | `bool` |true: setting succeeded, false: setting failed. Return the error code from the driver terminal. |

## Control of the five-fingered dexterous hand

The RealMan RM65 robotic arm is equipped with a five-fingered dexterous hand, which can be configured by the ROS.

### Set the gesture sequence number of the dexterous hand `Handposture.msg`

| Parameter  | Type | Description  |
|:--|:---|:----|
|  `posture_num`  |  `uint16`      |    Gesture sequence number pre-stored in the dexterous hand, range: 1−40.         |
|`data`|   `bool`   | Blocking/Non-blocking mode, true: blocking mode, false: non-blocking mode.         |

**Usage command demo:**

```json
ros2 topic pub --once /rm_driver/set_hand_posture_cmd rm_ros_interfaces/msg/Handposture "posture_num: 1 block: true"
```

**Return command demo:**

```json
ros2 topic echo /rm_driver/set_hand_posture_result
```

**Parameter description:**

| Parameter  | Type | Description  |
|:---|:---|:---|
|`std_msgs`   | `bool` |true: setting succeeded, false: setting failed. Return the error code from the driver terminal. |

### Set the action sequence number of the dexterous hand `Handseq.msg`

| Parameter  | Type | Description  |
|:--|:---|:----|
|  `seq_num`  |  `uint16`      | Action sequence number pre-stored in the dexterous hand, range: 1−40.         |
|`data`|   `bool`   | Blocking/Non-blocking mode, true: blocking mode, false: non-blocking mode.         |

**Usage command demo:**

```json
ros2 topic pub --once /rm_driver/set_hand_seq_cmd rm_ros_interfaces/msg/Handseq "seq_num: 1 block: true"
```

**Return command demo:**

```json
ros2 topic echo /rm_driver/set_hand_seq_result
```

**Parameter description:**

| Parameter  | Type | Description  |
|:---|:---|:---|
|`std_msgs`   | `bool` |true: setting succeeded, false: setting failed. Return the error code from the driver terminal. |

### Set the angles of the dexterous hand `Handangle.msg`

| Parameter  | Type | Description  |
|:--|:---|:----|
|  `hand_angle`  |  `int16[6]`       |    Array of finger angles, range: 0−1,000. <br>Additionally, -1 indicates that no action will be performed for this degree of freedom, and the current state will be maintained.         |
|`data`|   `bool`   | Blocking/Non-blocking mode, true: blocking mode, false: non-blocking mode.         |

**Usage command demo:**

```json
ros2 topic pub --once /rm_driver/set_hand_angle_cmd rm_ros_interfaces/msg/Handangle "hand_angle: - 0 - 0 - 0 - 0 - 0 - 0 block: true"
```

**Return command demo:**

```json
ros2 topic echo /rm_driver/set_hand_angle_result
```

**Parameter description:**

| Parameter  | Type | Description  |
|:---|:---|:---|
|`std_msgs`   | `bool` |true: setting succeeded, false: setting failed. Return the error code from the driver terminal. |

### Set the speed of the dexterous hand `Handspeed.msg`

| Parameter  | Type | Description  |
|:--|:---|:----|
| `hand_speed` | `int16[6]` | Finger speed, range: 1−1,000.         |
|`data`|   `bool`   | Blocking/Non-blocking mode, true: blocking mode, false: non-blocking mode.         |

**Usage command demo:**

```json
ros2 topic pub --once /rm_driver/set_hand_speed_cmd rm_ros_interfaces/msg/Handspeed "hand_speed: 200 block: true"
```

**Return command demo:**

```json
ros2 topic echo /rm_driver/set_hand_speed_result
```

**Parameter description:**

| Parameter  | Type | Description  |
|:---|:---|:---|
|`std_msgs`   | `bool` |true: setting succeeded, false: setting failed. Return the error code from the driver terminal. |

### Set the force threshold of the dexterous hand `Handforce.msg`

| Parameter  | Type | Description  |
|:--|:---|:----|
| `hand_force` | `int16` | Finger force, range: 1−1,000.         |
|`data`|   `bool`   | Blocking/Non-blocking mode, true: blocking mode, false: non-blocking mode.         |

**Usage command demo:**

```json
ros2 topic pub --once /rm_driver/set_hand_force_cmd rm_ros_interfaces/msg/Handforce "hand_force: 200 block: true"
```

**Return command demo:**

```json
ros2 topic echo /rm_driver/set_hand_force_result
```

**Parameter description:**

| Parameter  | Type | Description  |
|:---|:---|:---|
|`std_msgs`   | `bool` |true: setting succeeded, false: setting failed. Return the error code from the driver terminal. |

## Lifting mechanism

The RealMan robotic arm controller can integrate a self-developed lifting mechanism, and this interface is used for the control of the lifting mechanism.

### Set the open-loop speed control of the lifting mechanism `Liftspeed.msg`

| Parameter  | Type | Description  |
|:--|:---|:----|
|`speed`|   `int16`   | Speed percentage, -100 to 100: <br>1. speed<0: Lifting mechanism moves down; <br>2. speed>0: Lifting mechanism moves up; <br>3. speed=0: Lifting mechanism stops moving.   |
|`data`|   `bool`   | Blocking/Non-blocking mode, true: blocking mode, false: non-blocking mode.         |

**Usage command demo:**

```json
ros2 topic pub /rm_driver/set_lift_speed_cmd rm_ros_interfaces/msg/Liftspeed "speed: 100"
```

**Return command demo:**

```json
ros2 topic echo /rm_driver/set_lift_speed_result
```

**Parameter description:**

| Parameter  | Type | Description  |
|:---|:---|:---|
|`std_msgs`   | `bool` |true: setting succeeded, false: setting failed. Return the error code from the driver terminal. |

### Set the closed-loop position control of the lifting mechanism `Liftheight.msg`

| Parameter  | Type | Description  |
|:--|:---|:----|
| `height`      | `int16` | Target height, unit: mm, range: 0−2,600.         |
| `speed`      | `int16` | Speed percentage, 1−100.         |
|`data`|   `bool`   | Blocking/Non-blocking mode, true: blocking mode, false: non-blocking mode.         |

**Usage command demo:**

```json
ros2 topic pub --once /rm_driver/set_lift_height_cmd rm_ros_interfaces/msg/Liftheight "height: 0 speed: 10 block: true"
```

**Return command demo:**

```json
ros2 topic echo /rm_driver/set_lift_height_result
```

**Parameter description:**

| Parameter  | Type | Description  |
|:---|:---|:---|
|`std_msgs`      | `bool` |true: setting succeeded, false: setting failed. Return the error code from the driver terminal. |

### Get the state of the lifting mechanism `Liftstate.msg`

| Parameter  | Type | Description  |
|:--|:---|:----|
| `height`      | `int16` | Target height, unit: mm, range: 0−2,600.         |
|`current`|   `int16`   | Current current.         |
|`err_flag`|   `uint16`   | Drive error code.         |

**Usage command demo:**

```json
ros2 topic pub /rm_driver/get_lift_state_cmd std_msgs/msg/Empty "{}"
```

**Return command demo:**
Return if succeeded: current state of the lifting mechanism; return if failed: error code from the driver terminal.

```json
ros2 topic echo /rm_driver/get_lift_state_result
```

## Pass-through force-position hybrid control compensation mode

For RealMan robotic arms in 6-DoF force versions, in addition to directly using the teach pendant to call the underlying force-position hybrid control module, users can also use this interface to integrate custom trajectories with the underlying force-position hybrid control algorithm for compensation in a periodic pass-through form.
If the force data calibration is not performed before the force operation, the zero position can be calibrated through the 6-DoF force data clearing interface.

### Start the pass-through force-position hybrid control compensation mode `std_msgs`

| Parameter  | Type | Description  |
|:--|:---|:----|
|`std_msgs`|   `Empty`   | Start the pass-through force-position hybrid control compensation mode.         |

**Usage command demo:**

```json
ros2 topic pub /rm_driver/start_force_position_move_cmd std_msgs/msg/Empty "{}"
```

**Return command demo:**

```json
ros2 topic echo /rm_driver/start_force_position_move_result
```

**Parameter description:**

| Parameter  | Type | Description  |
|:---|:---|:---|
|`std_msgs`      | `bool` |true: setting succeeded, false: setting failed. Return the error code from the driver terminal. |

### Stop the pass-through force-position hybrid control compensation mode `std_msgs`

| Parameter  | Type | Description  |
|:--|:---|:----|
|`std_msgs`|   `Empty`   | Stop the pass-through force-position hybrid control compensation mode.         |

**Usage command demo:**

```json
ros2 topic pub /rm_driver/stop_force_position_move_cmd std_msgs/msg/Empty "{}"
```

**Return command demo:**

```json
ros2 topic echo /rm_driver/stop_force_position_move_result
```

**Parameter description:**

| Parameter  | Type | Description  |
|:---|:---|:---|
|`std_msgs`   | `bool` |true: setting succeeded, false: setting failed. Return the error code from the driver terminal. |

### Pass-through force-position hybrid control compensation — joint `Forcepositionmovejoint.msg`

| Parameter  | Type | Description  |
|:--|:---|:----|
|`joint`|   `float32[6]`   |  Target joint radian.         |
|   `sensor`  |   `uint8`     |  Sensor type, 0: 1-DoF force, 1: 6-DoF force.         |
|   `mode`  |   `uint8`     |   Mode, 0: along the base frame, 1: along the end frame.         |
|   `dir`  |   `int16`     |  Force control direction, 0−5: X/Y/Z/Rx/Ry/Rz. For the 1-DoF force type, the default direction is the Z-axis.         |
|  `force`   | `float32` | Magnitude of the force, in N.         |
|   `follow`  |    `bool`   | Follow state, true: high follow, false: low follow.         |
|`dof`|   `uint8`   |  Degree of freedom of the robotic arm.         |

**Usage command demo:**
A large number of consecutive points (more than 10) are required and continuously published with a cycle of at least 2 ms.

```json
ros2 topic pub /rm_driver/force_position_move_joint_cmd rm_ros_interfaces/msg/Forcepositionmovejoint " joint: [0, 0, 0, 0, 0, 0] sensor: 0 mode: 0 dir: 0 force: 0.0 follow: false dof: 6
```

**Return command demo:**
Return if succeeded: NULL; return if failed: false and error code from the driver terminal.

### Pass-through force-position hybrid control compensation — pose `Forcepositionmovepose.msg`

| Parameter  | Type | Description  |
|:--|:---|:----|
|`pose`|   `float`   | Target pose, including x, y, z coordinates (in m) + quaternion.         |
|   `sensor`  |   `uint8`     |  Sensor type, 0: 1-DoF force, 1: 6-DoF force.         |
|   `mode`  |   `uint8`     |   Mode, 0: along the base frame, 1: along the end frame.         |
|   `dir`  |   `int16`     |  Force control direction, 0−5: X/Y/Z/Rx/Ry/Rz. For the 1-DoF force type, the default direction is the Z-axis.         |
|  `force`   | `float32` | Magnitude of the force, in N.         |
|   `follow`  |    `bool`   | Follow state, true: high follow, false: low follow.         |

**Usage command demo:**
A large number of consecutive points (more than 10) are required and continuously published with a cycle of at least 2 ms.

```json
ros2 topic pub /rm_driver/force_position_move_pose_cmd rm_ros_interfaces/msg/Forcepositionmovepose "pose: position: x: 0.0 y: 0.0 z: 0.0 orientation: x: 0.0 y: 0.0 z: 0.0 w: 1.0 sensor: 0 mode: 0 dir: 0 force: 0 follow: false"
```

**Return command demo:**
Return if succeeded: NULL; return if failed: false and error code from the driver terminal.

## Robotic arm state active reporting

### Set the UDP-based real-time robotic arm state pushing `Setrealtimepush.msg`

| Parameter  | Type | Description  |
|:--|:---|:----|
|`cycle`|   `uint16`   |  Set the broadcast cycle, in multiple of 5 ms (1 by default, i.e., 1*5=5 ms, or 200 Hz).         |
|`port`|   `uint16`   |  Set the broadcast port number (8089 by default).         |
|`force_coordinate`|   `uint16`   |  Set the frame for external force data (only supported by robotic arms with force sensors).         |
|`ip`|   `string`   |  Set the custom pushing target IP address (192.168.1.10 by default).         |
|  `force`   | `float32` | Magnitude of the force, in N.         |
|   `follow`  |    `bool`   | Follow state, true: high follow, false: low follow.         |

**Usage command demo:**

```json
ros2 topic pub --once /rm_driver/set_realtime_push_cmd rm_ros_interfaces/msg/Setrealtimepush "cycle: 1<br>port: 8089 force_coordinate: 0 ip: '192.168.1.10'"
```

**Return command demo:**

```json
ros2 topic echo /rm_driver/set_realtime_push_result
```

**Parameter description:**

| Parameter  | Type | Description  |
|:---|:---|:---|
|`std_msgs`   | `bool` |true: setting succeeded, false: setting failed. Return the error code from the driver terminal. |

### Get the UDP-based real-time robotic arm state pushing `Getrealtimepush.msg`

| Parameter  | Type | Description  |
|:--|:---|:----|
|`cycle`|   `uint16`   |  Set the broadcast cycle, in multiple of 5 ms (1 by default, i.e., 1*5=5 ms, or 200 Hz).         |
|`port`|   `uint16`   |  Set the broadcast port number (8089 by default).         |
|`force_coordinate`|   `uint16`   |  Set the frame for external force data (only supported by robotic arms with force sensors).         |
|`ip`|   `string`   |  Set the custom pushing target IP address (192.168.1.10 by default).         |

**Usage command demo:**

```json
ros2 topic pub --once /rm_driver/get_realtime_push_cmd std_msgs/msg/Empty "{}"
```

**Return command demo:**
Return if succeeded: settings; return if failed: error code from the driver terminal.

```json
ros2 topic echo /rm_driver/get_realtime_push_result
```

### UDP robotic arm state active reporting

#### 6-DoF force `Sixforce.msg`

| Parameter  | Type | Description  |
|:--|:---|:----|
|`force_fx`|   `float32`   |  Magnitude of the force along the X-axis.         |
|`force_fy`|   `float32`   |  Magnitude of the force along the Y-axis.         |
|`force_fz`|   `float32`   |  Magnitude of the force along the Z-axis.         |
|`force_mx`|   `float32`   |  Magnitude of the rotation force along the X-axis.         |
|`force_my`|   `float32`   |  Magnitude of the rotation force along the Y-axis.         |
|`force_mz`|   `float32`   |  Magnitude of the rotation force along the Z-axis.         |

**Usage command demo:**

```json
ros2 topic echo /rm_driver/udp_six_force
```

#### Robotic arm error `std_msgs`

| Parameter  | Type | Description  |
|:--|:---|:----|
|`data`|   `uint16`   |  Robotic arm error.         |

**Usage command demo:**

```json
ros2 topic echo /rm_driver/udp_six_force
```

#### System error `std_msgs`

| Parameter  | Type | Description  |
|:--|:---|:----|
|`data`|   `uint16`   |  System error.         |

**Usage command demo:**

```json
ros2 topic echo /rm_driver/udp_sys_err
```

#### Joint error `Jointerrorcode.msg`

| Parameter  | Type | Description  |
|:--|:---|:----|
|`joint_error`|   `uint16`   |  Each joint error.         |
|`dof`|   `uint8`   |  Degree of freedom of the robotic arm.         |

**Usage command demo:**

```json
ros2 topic echo /rm_driver/udp_joint_error_code
```

#### Robotic arm radian data `sensor_msgs`

| Parameter  | Type | Description  |
|:--|:---|:----|
|`stamp`|   `int32`   | sec: second.         |
|`nanosec`|   `uint32`   |  Time, in ns.         |
|`frame_id`|   `string`   | Frame name.         |
|`name`|   `string`   | Joint name.         |
|`position`|   `float64`   |  Joint radian.         |
|`velocity`|   `float64`   |  Joint velocity.         |
|`effort`|   `float64`   |  Joint force.         |

**Usage command demo:**

```json
ros2 topic echo /joint_states
```

#### Pose `geometry_msgs`

| Parameter  | Type | Description  |
|:--|:---|:----|
|`Point position`|   `float64`   |  Current coordinates of the robotic arm: x, y, z.         |
|`Quaternion orientation`|   `float64`   |  Current orientation of the robotic arm: x, y, z, w.         |

**Usage command demo:**

```json
ros2 topic echo /rm_driver/udp_arm_position
```

#### External force data of the current 6-DoF force sensor frame `Sixforce.msg`

| Parameter  | Type | Description  |
|:--|:---|:----|
|`force_fx`|   `float32`   |  Magnitude of external force along the X-axis of the current sensor frame.         |
|`force_fy`|   `float32`   |  Magnitude of external force along the Y-axis of the current sensor frame.         |
|`force_fz`|   `float32`   |  Magnitude of external force along the Z-axis of the current sensor frame.         |
|`force_mx`|   `float32`   |  Magnitude of the rotation force along the X-axis of the current sensor frame.         |
|`force_my`|   `float32`   |  Magnitude of the rotation force along the Y-axis of the current sensor frame.         |
|`force_mz`|   `float32`   |  Magnitude of the rotation force along the Z-axis of the current sensor frame.         |

**Usage command demo:**

```json
ros2 topic echo /rm_driver/udp_six_zero_force
```

#### Reference frame for external force data `std_msgs`

| Parameter  | Type | Description  |
|:--|:---|:----|
|`data`|   `uint16`   | Frame for external force data, 0: sensor frame, 1: current work frame, 2: current tool frame. This data will affect the reference frame for the external force data of the 6-DoF force sensor.         |

**Usage command demo:**

```json
ros2 topic echo /rm_driver/udp_arm_coordinate
```
