# <p class="hidden">ROS: </p>Call Robotic Arm JSON Protocol

To facilitate users in controlling the robotic arm through ROS1, RealMan provides a JSON-based ROS1 package, which allows querying and controlling the robotic arm through ROS topics. In actual use of the robotic arm, users can establish communication and control the robotic arm through the Ethernet port.

## System error code

|  **S/N**  |  **Error Code (Hexadecimal)**  |  **Description**  |
| :--- | :--- | :--- |
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
|  18  |  0x1011  |  Circular planning error  |
|  19  |  0x1012  |  Self-collision error  |
|  20  |  0x1013  |  Electronic fence collision error (reserved)  |
|  21  |  0x5001  |  Reserved  |
|  22  |  0x5002  |  Reserved  |
|  23  |  0x5003  |  Controller over-temperature  |
|  24  |  0x5004  |  Reserved  |
|  25  |  0x5005  |  Controller overcurrent  |
|  26  |  0x5006  |  Controller undercurrent  |
|  27  |  0x5007  |  Controller overvoltage  |
|  28  |  0x5008  |  Controller undervoltage  |
|  29  |  0x5009  |  Real-time layer communication error  |

## Joint error code

|  **S/N**  |  **Error Code (Hexadecimal)**  |  **Description**  |
| :--- | :--- | :--- |
|  1  |  0x0000  |  Normal joint  |
|  2  |  0x0001  |  FOC error  |
|  3  |  0x0002  |  Overvoltage  |
|  4  |  0x0004  |  Undervoltage  |
|  5  |  0x0008  |  over-temperature  |
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

## Set the joint enabling state

**Parameter description:**
`Joint_Enable.msg` performs the enabling operation on the specified joint

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`joint_num`|   `uint8`   | Corresponding joint number, from the base to the robotic arm's gripper. <br>The joint numbers for the 6-DoF are sequentially 1 to 6, and those for the 7-DoF are sequentially 1 to 7.          |
|`state`|   `bool`   | true: enable, false: disable          |

**Usage command demo:**

```json
rostopic pub /rm_driver/Joint_Enable rm_msgs/Joint_Enable "joint_num: 1 state: true"
```

**Return command demo:**

```json
rostopic echo /rm_driver/Joint_En_State_Result
```

**Parameter description:**
| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |true: setting succeeded, false: setting failed. |

## Change the current tool frame

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `String`   | ROS built-in msg          |

**Usage command demo:**

```json
rostopic pub /rm_driver/ChangeToolName_Cmd rm_msgs/ChangeTool_Name "toolname: '6WM'"
```

**Return command demo:**

```json
rostopic echo /rm_driver/ChangeTool_State
```

**Parameter description:**
| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |true: setting succeeded, false: setting failed. |

## Change the current work frame

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `String`   | ROS built-in msg          |

**Usage command demo:**

```json
rostopic pub /rm_driver/ChangeWorkFrame_Cmd rm_msgs/ChangeWorkFrame_Name "WorkFrame_name: 'Base'"
```

**Return command demo:**

```json
rostopic echo /rm_driver/ChangeWorkFrame_State
```

**Parameter description:**
| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |true: setting succeeded, false: setting failed. |

## Get the current work frame

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   | ROS built-in msg          |

**Usage command demo:**

```json
rostopic pub /rm_driver/GetTotalWorkFrame std_msgs/Empty "{}"
```

**Return value check:** check according to the printed information from the rm_driver node.

## Get the current joint current of the robotic arm

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `String`   | ROS built-in msg          |

**Usage command demo:**

```json
rostopic pub /rm_driver/GetCurrentJointCurrent std_msgs/Empty "{}"
```

**Return command demo:**

```json
rostopic echo /rm_driver/Joint_Current
```

**Parameter description:**
`Joint_Current.msg`

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`joint_current`     | `float32[]` |Joint current (in uA) |

## Robotic arm motion planning

### Joint motion in space`MoveJ.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`joint`|   `float32[]`   | Joint angle, in rad.         |
|`speed`|   `float32`   | Speed ratio, 0-1.         |
|`trajectory_connect`|   `uint8`   | Optional, indicating whether to plan the motion together with the next trajectory. <br>0: The motion is planned immediately, <br>1: It is planned together with the next trajectory. When set to 1, the trajectory will not execute immediately.         |

**Usage command demo:**

6-DoF robotic arm

```json
rostopic pub /rm_driver/MoveJ_Cmd rm_msgs/MoveJ "joint: [0, 0, 0, 0, 0, 0] speed: 0.2"
```

7-DoF robotic arm

```json
rostopic pub /rm_driver/MoveJ_Cmd rm_msgs/MoveJ "joint: [0, 0, 0, 0, 0, 0, 0] speed: 0.2 trajectory_connect: 0"
```

**Return command demo:**

```json
rostopic echo /rm_driver/Plan_State
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |true: setting succeeded, false: setting failed. |

### Cartesian-space linear motion`MoveL.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`Pose`|   `geometry_msgs/Pose`   | Robotic arm pose, including x, y, z coordinates (float type, in m) + quaternion.         |
|`speed`|   `float32`   | Speed ratio, 0-1.         |
|`trajectory_connect`|   `uint8`   | Optional, indicating whether to plan the motion together with the next trajectory. <br>0: The motion is planned immediately, <br>1: It is planned together with the next trajectory. When set to 1, the trajectory will not execute immediately.         |

**Usage command demo:**

```json
rostopic pub /rm_driver/MoveL_Cmd rm_msgs/MoveL "Pose:
  position:
    x: 0.0
    y: 0.0
    z: 0.0
  orientation:
    x: 0.0
    y: 0.0
    z: 0.0
    w: 0.0
speed: 0.2
trajectory_connect: 0"
```

**Return command demo:**

```json
rostopic echo /rm_driver/Plan_State
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |true: setting succeeded, false: setting failed. |

### Cartesian-space circular motion`MoveC.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`Mid_Pose`|   `geometry_msgs/Pose`   | Middle pose, including x, y, z coordinates (float type, in m) + quaternion.         |
|`End_Pose`|   `geometry_msgs/Pose`   | End pose, including x, y, z coordinates (float type, in m) + quaternion.         |
|`speed`|   `float32`   | Speed ratio, 0-1.         |
|`trajectory_connect`|   `uint8`   | Optional, indicating whether to plan the motion together with the next trajectory. <br>0: The motion is planned immediately, 1: It is planned together with the next trajectory. When set to 1, the trajectory will not execute immediately.         |

**Usage command demo:**

```json
rostopic pub /rm_driver/MoveC_Cmd rm_msgs/MoveC "Mid_Pose:
  position:
    x: 0.2949
    y: 0.1377
    z: 0.1048
  orientation:
    x: 0.05
    y: -0.989
    z: -0.1359
    w: 0.0274
End_Pose:
  position:
    x: 0.2417
    y: 0.0
    z: 0.1213
  orientation:
    x: 0.0136
    y: 0.9993
    z: 0.0241
    w: 0.0261
speed: 0.5
trajectory_connect: 0"
```

**Return command demo:**

```json
rostopic echo /rm_driver/Plan_State
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |true: setting succeeded, false: setting failed. |

### Joint angle CANFD pass-through`JointPos.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`joint`|   `float32[]`   | Joint angle, in rad.         |
|`expand`|   `float32`   | Expansion angle, in rad.         |

**Usage command demo:**
Pass-through requires continuously sending multiple consecutive points to achieve the functionality. Simply relying on the following command will not accomplish the task. Currently, moveit control uses an angle pass-through control method.

```json
rostopic pub /rm_driver/JointPos rm_msgs/JointPos "joint: [0, 0, 0, 0, 0, 0] expand: 0.0"
```

**Return parameter description:**
Succeeded: no return value; failed: return the error code from the driver terminal.

### Pose CANFD pass-through`CartePos.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`Pose`|   `geometry_msgs/Pose`   | Pass-through pose, including x, y, z coordinates (float type, in m) + quaternion.         |

**Usage command demo:**
A large number of consecutive points (more than 10) are required. Simply relying on the following command will not accomplish the task. It needs to continuously publish with a cycle of at least 2 ms.

```json
rostopic pub /rm_driver/MoveP_Fd_Cmd rm_msgs/CartePos 
"Pose:
  position:
    x: 0.0
    y: 0.0
    z: 0.0
  orientation:
    x: 0.0
    y: 0.0
    z: 0.0
    w: 0.0"
```

**Return parameter description:**
Succeeded: no return value; failed: return the error code from the driver terminal.

### Joint space planning to target orientation`MoveJ_P.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`Mid_Pose`|   `geometry_msgs/Pose`   | Target pose, including x, y, z coordinates (float type, in m) + quaternion.         |
|`speed`|   `float32`   | Speed ratio, 0-1.         |
|`trajectory_connect`|   `uint8`   | Optional, indicating whether to plan the motion together with the next trajectory. <br>0: The motion is planned immediately, <br>1: It is planned together with the next trajectory. When set to 1, the trajectory will not execute immediately.         |

**Usage command demo:**

```json
rostopic pub /rm_driver/MoveJ_P_Cmd rm_msgs/MoveJ_P "Pose:
  position:
    x: 0.0
    y: 0.0
    z: 0.0
  orientation:
    x: 0.0
    y: 0.0
    z: 0.0
    w: 0.0
speed: 0.0
trajectory_connect: 0"
```

**Return command demo:**

```json
rostopic echo /rm_driver/Plan_State
```

## Robotic arm motion configuration - step command

### Joint step`Joint_Step.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`joint_num`|   `uint8`   | Joint to be moved.         |
|`step_angle`|   `float32`   | Step angle (in °).         |
|`speed`|   `float32`   | Motion speed.       |

**Usage command demo:**
6-DoF robotic arm

```json
rostopic pub /rm_driver/SetJointStep rm_msgs/Joint_Step "joint_num: 6 step_angle: 90.0  speed: 0.2"
```

7-DoF robotic arm

```json
rostopic pub /rm_driver/SetJointStep rm_msgs/Joint_Step "joint_num: 7 step_angle: 90.0 speed: 0.2"
```

**Return command demo:**

```json
rostopic echo /rm_driver/Plan_State
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |true: setting succeeded, false: setting failed. |

## Robotic arm motion configuration - motion command

### Quick stop`Stop.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`state`|   `tool`   | true: valid, false: invalid          |

**Usage command demo:**

```json
rostopic pub /rm_driver/Emergency_Stop rm_msgs/Stop "state: true"
```

**Return command demo:**

```json
rostopic echo /rm_driver/Set_Arm_Stop_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |true: setting succeeded, false: setting failed. |

## Robotic arm motion configuration - teaching command class

### Joint teaching`Joint_Teach.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`teach_joint`|   `int16`   | Teaching control joint          |
|`direction`|   `string`   | Joint rotation direction, "pos": positive direction, "neg": negative direction          |
|`v`|   `int16`   | Joint rotation speed, 0-100          |

**Usage command demo:**
6-DoF robotic arm

```json
rostopic pub /rm_driver/Arm_JointTeach rm_msgs/Joint_Teach "teach_joint: 1 direction: 'pos' v: 20"
```

**Return command demo:**

```json
rostopic echo /rm_driver/SetJointTeach_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |true: setting succeeded, false: setting failed. |

### Position teaching`Pos_Teach.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`teach_type`|   `string`   | Coordinate axis, "x", "y", "z"          |
|`direction`|   `string`   | Teaching direction, "pos": positive direction, "neg": negative direction          |
|`v`|   `int16`   | Joint rotation speed, 0-100          |

**Usage command demo:**

```json
rostopic pub /rm_driver/Arm_PosTeach rm_msgs/Pos_Teach "teach_type: 'z' direction: 'pos' v: 10"
```

**Return command demo:**

```json
rostopic echo /rm_driver/SetPosTeach_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |true: setting succeeded, false: setting failed. |

### Orientation teaching`Ort_Teach.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`joint_num`|   `string`   | Rotation axis, "rx", "ry", "rz"          |
|`step_angle`|   `string`   | Teaching direction, "pos": positive direction, "neg": negative direction          |
|`v`|   `int16`   | Joint rotation speed, 0-100          |

**Usage command demo:**

```json
rostopic pub /rm_driver/Arm_OrtTeach rm_msgs/Ort_Teach "teach_type: 'rz' direction: 'pos' v: 10"
```

**Return command demo:**

```json
rostopic echo /rm_driver/SetOrtTeach_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |true: setting succeeded, false: setting failed. |

### Stop teaching`Stop_Teach.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`command`|   `string`   |  Stop command "set_stop_teach", execute the following command to stop          |

**Usage command demo:**

```json
rostopic pub /rm_driver/Arm_StopTeach rm_msgs/Stop_Teach "command: ''"
```

**Return command demo:**

```json
rostopic echo /rm_driver/SetStopTeach_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |true: setting succeeded, false: setting failed. |

## System configuration

### Control the power on/off of the robotic arm

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Byte msg`   |  1: Power on the robotic arm, 0: Power off the robotic arm        |

**Usage command demo:**

```json
rostopic pub /rm_driver/SetArmPower std_msgs/Byte "data: 0"
```

**Return command demo:**

```json
rostopic echo /rm_driver/Set_Arm_Power_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |true: setting succeeded, false: setting failed. |

### Read the software version number

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Byte msg`   |  1: Power on the robotic arm, 0: Power off the robotic arm        |

**Usage command demo:**

```json
rostopic pub /rm_driver/Get_Arm_Software_Version std_msgs/Empty "{}"
```

**Return command demo:**

```json
rostopic echo /rm_driver/Get_Arm_Software_Version_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`Arm_Software_Version.msg`            | `string` |Product_version # Robotic arm type<br> Plan_version #Software version number|

### Clear system errors

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty msg`   |  /       |

**Usage command demo:**

```json
rostopic pub /rm_driver/Clear_System_Err std_msgs/Empty "{}"
```

**Return command demo:**

```json
rostopic echo /rm_driver/System_En_State_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |true: setting succeeded, false: setting failed. |

## Get the robotic arm state

### Get the current joint current of the robotic arm`Joint_Current.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   |  ROS built-in msg       |

**Usage command demo:**

```json
rostopic pub /rm_driver/GetCurrentJointCurrent std_msgs/Empty "{}"
```

**Return command demo:**

```json
rostopic echo /rm_driver/Joint_Current
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`joint_current`            | `float32[]` |Joint current (in uA) |

### Get the joint angle of the robotic arm

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty msg`   |  /       |

**Usage command demo:**

```json
rostopic pub /rm_driver/GetArmJoint_Cmd std_msgs/Empty "{}"
```

**Return command demo:**

```json
rostopic echo /joint_states
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`sensor_msgs`            | `JointState` |/ |

### Get the robotic arm state (radian + quaternion)`GetArmState_Command.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`command`|   `string`   |  /       |

**Usage command demo:**

```json
rostopic pub /rm_driver/GetArmState_Cmd rm_msgs/GetArmState_Command "command: ''"
```

**Return command demo:**

```json
rostopic echo /rm_driver/ArmCurrentState
```

**Parameter description:**
`ArmState.msg`

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`joint`            | `float32[]` |Radian of the robotic arm |
|`Pose`            | `bool` | Current pose of the robotic arm (quaternion)|
|`arm_err`            | `bool` |  Robotic arm error|
|`sys_err`            | `bool` |System error |
|`dof`            | `bool` |Degree of freedom of the robotic arm |

### Get the robotic arm state (angle + Euler angle)`GetArmState_Command.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`command`|   `string`   |  /       |

**Usage command demo:**

```json
rostopic pub /rm_driver/GetArmState_Cmd rm_msgs/GetArmState_Command "command: ''"
```

**Return command demo:**

```json
rostopic echo /rm_driver/Arm_Current_State
```

**Parameter description:**
`Arm_Current_State.msg`

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`joint`            | `float32[]` |Angle of the robotic arm |
|`Pose`            | `bool` | Current pose of the robotic arm (Euler angle)|
|`arm_err`            | `bool` |  Robotic arm error|
|`sys_err`            | `bool` |System error |
|`dof`            | `bool` |Degree of freedom of the robotic arm |

## Controller IO configuration and acquisition

### Set the digital IO output state of the robotic arm`Arm_Digital_Output.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`num`|   `uint8`   |  IO port number, range: 1-4       |
|`state`|   `bool`   |  “state”: IO state, 1: high output, 0: low output       |

**Usage command demo:**

```json
rostopic pub /rm_driver/Arm_Digital_Output rm_msgs/Arm_Digital_Output "num: 1 state: true"
```

**Return command demo:**

```json
rostopic echo /rm_driver/Set_DO_State_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |true: setting succeeded, false: setting failed. |

### Get all IO input states`IO_Update.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`type`|   `int8`   |  1: Get controller IO state; 2: Get tool-end IO state       |

**Usage command demo:**

```json
rostopic pub /rm_driver/IO_Update rm_msgs/IO_Update "type: 1"
```

**Return command demo:**

```json
rostopic echo /rm_driver/Arm_IO_State
```

**Parameter description:**
`Arm_IO_State.msg`

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`Arm_Digital_Input`            | `nt8[4]` |   1: high, -1: output |

## Tool-end IO configuration and acquisition

### Set tool-end digital IO output state`Tool_Digital_Output.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`num`|   `uint8`   |  IO port number, range: 1-4       |
|`state`|   `bool`   |  “state”: IO state, 1: high output, 0: low output       |

**Usage command demo:**

```json
rostopic pub /rm_driver/Tool_Digital_Output rm_msgs/Tool_Digital_Output "num: 1 state: true"
```

**Return command demo:**

```json
rostopic echo /rm_driver/Set_Tool_DO_State_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |true: setting succeeded, false: setting failed. |

### Get tool-end digital IO state`IO_Update.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`type`|   `uint8`   |  1: Get controller IO state; 2: Get tool-end IO state     |

**Usage command demo:**

```json
rostopic pub /rm_driver/IO_Update rm_msgs/IO_Update "type: 2"
```

**Return command demo:**

```json
rostopic echo /rm_driver/Tool_IO_State
```

**Parameter description:**
`Tool_IO_State.msg`

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`Tool_IO_Mode`            | `bool[2]` |Digital I/O input/output state, 0: input mode, 1: output mode |
|`Tool_IO_State`            | `bool[2]` |Digital I/O level state      0: Low, 1: High |

## Control of the end effector gripper (optional)

The RealMan robotic arm is equipped with the INSPIRE-ROBOTS EG2-4C2 gripper at the end effector. To facilitate user operation of the gripper, the robotic arm controller has adapted the gripper for ROS-based control.

### Set the continuous force-controlled grasping of the gripper `Gripper_Pick.msg`

The gripper controls the gripping force at a set speed, and stops moving when the applied force exceeds the preset limit

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`speed`|   `uint16`   |  1-1000, representing the gripper opening and closing speed, without unit of measurement       |
|`force`|   `uint16`   |  1-1000, representing the gripping force of the gripper, with a maximum of 1.5 kg       |

**Usage command demo:**

```json
rostopic pub /rm_driver/Gripper_Pick_On rm_msgs/Gripper_Pick "speed: 100 force: 100"
```

**Return command demo:**

```json
rostopic echo /rm_driver/Set_Gripper_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |true: setting succeeded, false: setting failed. |

### Set the force-controlled grasping of the gripper `Gripper_Pick.msg`

The gripper controls the gripping force at a set speed, and stops moving when the applied force exceeds the preset limit.

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`speed`|   `uint16`   |  1-1000, representing the gripper opening and closing speed, without unit of measurement       |
|`force`|   `uint16`   |  1-1000, representing the gripping force of the gripper, with a maximum of 1.5 kg       |

**Usage command demo:**

```json
rostopic pub /rm_driver/Gripper_Pick rm_msgs/Gripper_Pick "speed: 100 force: 100"
```

**Return command demo:**

```json
rostopic echo /rm_driver/Set_Gripper_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |true: setting succeeded, false: setting failed. |

### Set the gripper to a given position`Gripper_Set.msg`

Set the gripper to a fixed position. The gripper should stop either once it reaches the position or when the force exceeds the threshold.

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`position`|   `uint16`   |  Gripper target position, range: 1-1.000, representing the gripper opening: 0-70 mm       |

**Usage command demo:**

```json
rostopic pub /rm_driver/Gripper_Set rm_msgs/Gripper_Set "position: 100"
```

**Return command demo:**

```json
rostopic echo /rm_driver/Set_Gripper_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |true: setting succeeded, false: setting failed. |

## Use of end effector s6-DoF force sensor (optional)

The RealMan RM-65F robotic arm is equipped with an integrated 6-DoF force sensor at the end effector, eliminating the need for external wiring. Users can directly control the 6-DoF force through ROS topics.

### Get the 6-DoF force data

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty msg`   |  /       |

**Usage command demo:**

```json
rostopic pub /rm_driver/GetSixForce_Cmd std_msgs/Empty "{}"
```

**Return command demo:**

```json
rostopic echo /rm_driver/GetSixForce     #Original 6-DoF force state
rostopic echo /rm_driver/SixZeroForce    #6-DoF force state in the sensor frame
rostopic echo /rm_driver/WorkZeroForce   #Sensor data in the work frame
rostopic echo /rm_driver/ToolZeroForce   #Sensor data in the tool frame
```

**Parameter description:**
`Six_Force.msg`

| Parameter        | Type    | Description                             |
|:------------------|:-------|:---------------|
|`force_Fx`            | `float32` |/ |
|`force_Fy`            | `float32` |/ |
|`force_Fz`            | `float32` |/ |
|`force_Mx`            | `float32` |/ |
|`force_My`            | `float32` |/ |
|`force_Mz`            | `float32` |/ |

### Clear the 6-DoF force data

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   |  /       |

**Usage command demo:**

```json
rostopic pub /rm_driver/ClearForceData_Cmd std_msgs/Empty "{}"
```

**Return command demo:**

```json
rostopic echo /rm_driver/ClearForceData_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |true: setting succeeded, false: setting failed. |

### Automatically set 6-DoF force center of gravity parameters

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   |  /       |

**Usage command demo:**

```json
rostopic pub /rm_driver/SetForceSensor_Cmd std_msgs/Empty "{}"
```

**Return command demo:**

```json
rostopic echo /rm_driver/ForceSensorSet_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |true: setting succeeded, false: setting failed. |

### Manually calibrate 6-DoF force data

**Parameter description:**

`Manual_Set_Force_Pose.msg`

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`pose1`|   `string`   |  Pose 1 joint angle;       |
|`pose2`|   `string`   |  Pose 2 joint angle;       |
|`pose3`|   `string`   |  Pose 3 joint angle;       |
|`pose4`|   `string`   |  Pose 4 joint angle;       |
|`joint`|   `int64[]`   |  Accuracy: 0.001°, e.g., 90°: 90000;       |

::: warning Warning
The four poses must be issued in sequence. Once pose4 is set, the robotic arm will move to the given pose.
:::

**Usage command demo:**

```json
rostopic pub /rm_driver/ManualSetForcePose_Cmd rm_msgs/Manual_Set_Force_Pose "pose: ' pose1' joint:  [0, 0, 0, 0, 90000, 0]"
```

**Return command demo:**

```json
rostopic echo /rm_driver/ForceSensorSet_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |true: setting succeeded, false: setting failed. |

## Stop calibrating the center of gravity of the force sensor

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   |  /       |

**Usage command demo:**

```json
rostopic pub /rm_driver/StopSetForceSensor_Cmd std_msgs/Empty "{}"
```

**Return command demo:**

```json
rostopic echo /rm_driver/StopSetForceSensor_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |true: setting succeeded, false: setting failed. |

## Drag teaching

### Stop the drag teaching

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   |  /       |

**Usage command demo:**

```json
rostopic pub /rm_driver/StartMultiDragTeach_result std_msgs/Empty "{}"
```

**Return command demo:**

```json
rostopic echo /rm_driver/StopDragTeach_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |true: setting succeeded, false: setting failed. |

### Enable multiple drag teaching

**Parameter description:**
`Start_Multi_Drag_Teach.msg`

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`mode`|   `uint8`   |  0: current loop mode. <br>1: position-only drag in the 6-DoF force mode, <br>2: orientation-only drag in the 6-DoF force mode, <br>3: position-orientation drag in the 6-DoF force mode       |

**Usage command demo:**

```json
rostopic pub /rm_driver/StartMultiDragTeach_Cmd rm_msgs/Start_Multi_Drag_Teach "mode: 0"
```

**Return command demo:**

```json
rostopic echo /rm_driver/StartMultiDragTeach_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |true: setting succeeded, false: setting failed. |

### Force-position hybrid control`Set_Force_Position.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`mode`|   `sensor`   |    Sensor, 0: 1-DoF force, 1: 6-DoF force     |
|`mode`|   `uint8`   |     0: force control in the work frame, 1: force control in the tool frame    |
|`direction`|   `uint8`   |     Force control direction<br>0: along the X-axis<br>1: along the Y-axis<br>2: along the Z-axis<br>3: along the RX orientation<br>4: along the RY orientation<br>5: along the RZ orientation    |

**Usage command demo:**

```json
rostopic pub /rm_driver/SetForcePosition_Cmd rm_msgs/Set_Force_Position "sensor: 0 mode: 0 direction: 0 N: 0"。
```

**Return command demo:**

```json
rostopic echo /rm_driver/SetForcePosition_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |   true: setting succeeded, false: setting failed. |

### Stop the force-position hybrid control

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   |  /       |

**Usage command demo:**

```json
rostopic pub /rm_driver/StopForcePostion_Cmd std_msgs/Empty "{}"
```

**Return command demo:**

```json
rostopic echo /rm_driver/StopForcePostion_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |true: setting succeeded, false: setting failed. |

## Control of end effector five-fingered dexterous hand (optional)

The RealMan robotic arm is equipped with a five-fingered dexterous hand, which can be configured by the ROS.

### Set the gesture sequence number of the dexterous hand`Hand_Posture.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`posture_num`|   `uint16`   |  #Gesture sequence number pre-stored in the dexterous hand, range: 1-40       |

**Usage command demo:**

```json
rostopic pub /rm_driver/Hand_SetPosture rm_msgs/Hand_Posture "posture_num: 0"
```

**Return command demo:**

```json
rostopic echo /rm_driver/Set_Hand_Posture_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |true: setting succeeded, false: setting failed. |

### Set the action sequence of the dexterous hand`Hand_Seq.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`seq_num`|   `uint16`   |  Sequence number pre-stored in the dexterous hand, range: 1-40       |

**Usage command demo:**

```json
rostopic pub /rm_driver/Hand_SetSeq rm_msgs/Hand_Seq "seq_num: 0"
```

**Return command demo:**

```json
rostopic echo /rm_driver/Set_Hand_Seq_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |true: setting succeeded, false: setting failed. |

### Set the angles of the dexterous hand`Hand_Angle.msg`

Set the angles of the dexterous hand, which has 6 degrees of freedom: 1. Little finger, 2. Ring finger, 3. Middle finger, 4. Index finger, 5. Thumb bending, 6. Thumb rotation.
**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`hand_angle`|   `uint16`   |  Array of finger angles, range: 0-1,000. <br>Additionally, -1 indicates that no action will be performed for this degree of freedom, and the current state will be maintained       |

**Usage command demo:**

```json
rostopic pub /rm_driver/Hand_SetAngle rm_msgs/Hand_Angle "hand_angle: [0, 0, 0, 0, 0, 0]"
```

**Return command demo:**

```json
rostopic echo /rm_driver/Set_Hand_Angle_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |true: setting succeeded, false: setting failed. |

### Set the speed of the dexterous hand`Hand_Speed.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`hand_speed`|   `uint16`   |  Finger speed, range: 1−1,000       |

**Usage command demo:**

```json
rostopic pub /rm_driver/Hand_SetSpeed rm_msgs/Hand_Speed "hand_speed: 0"
```

**Return command demo:**

```json
rostopic echo /rm_driver/Set_Hand_Speed_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |  true: setting succeeded, false: setting failed. |

### Set the force threshold of the dexterous hand`Hand_Force.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`hand_Force`|   `uint16`   |  Finger force, range: 1−1,000       |

**Usage command demo:**

```json
rostopic pub /rm_driver/Hand_SetForce rm_msgs/Hand_Force "hand_force: 0"
```

**Return command demo:**

```json
rostopic echo /rm_driver/Set_Hand_Force_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |  true: setting succeeded, false: setting failed. |

## Pass-through force-position hybrid control compensation mode

For RealMan robotic arms with both 1-DoF and 6-DoF force versions, in addition to directly using the teach pendant to call the underlying force-position hybrid control module, users can also use this interface to integrate custom trajectories with the underlying force-position hybrid control algorithm for compensation in a periodic pass-through form.

### Enable the pass-through force-position hybrid control compensation mode

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty msg`   |  /       |

**Usage command demo:**

```json
rostopic pub /rm_driver/StartForcePositionMove_Cmd std_msgs/Empty "{}"
```

**Return command demo:**

```json
rostopic echo /rm_driver/StartForcePositionMove_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |true: setting succeeded, false: setting failed. |

### Pass-through force-position hybrid control compensation (pose)`Force_Position_Move_Pose.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`Pose`|   `geometry_msgs/Pose`   |  Quaternion       |
|`sensor`|   `geometry_msgs/Pose`   |  Type of sensor used, 0: 1-DoF force, 1: 6-DoF force       |
|`mode`|   `geometry_msgs/Pose`   |  Mode, 0: along the work frame, 1: along the tool frame       |
|`dir`|   `geometry_msgs/Pose`   |  Force control direction, 0−5: X/Y/Z/Rx/Ry/Rz. For the 1-DoF force type, the default direction is the Z-axis       |
|`force`|   `geometry_msgs/Pose`   |  Magnitude of the force, accuracy: 0.1 N or 0.1 N.m       |

**Usage command demo:**

```json
rostopic pub /rm_driver/ForcePositionMovePose_Cmd rm_msgs/Force_Position_Move_Pose "Pose:   position: {x: 0.0, y: 0.0, z: 0.0}   orientation: {x: 0.0, y: 0.0, z: 0.0, w: 0.0} sensor: 1 mode: 0 dir: 0 force: 0"
```

**Parameter description:**

Succeeded: no return value, failed: return error message in the rm_driver node.

### Pass-through force-position hybrid control compensation (radian)`Force_Position_Move_Joint.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`joint`|   `float32[]`   |  Radian.     |
|`sensor`|   `geometry_msgs/Pose`   |  Type of sensor used, 0: 1-DoF force, 1: 6-DoF force.     |
|`mode`|   `geometry_msgs/Pose`   |  Mode, 0: along the work frame, 1: along the tool frame.     |
|`dir`|   `geometry_msgs/Pose`   |  Force control direction, 0−5: X/Y/Z/Rx/Ry/Rz. For the 1-DoF force type, the default direction is the Z-axis.     |
|`force`|   `geometry_msgs/Pose`   |  Magnitude of the force, accuracy: 0.1 N or 0.1 N.m.     |
|`dof`|   `uint8`   |  Degree of freedom of the robotic arm.     |

**Usage command demo:**

```json
rostopic pub /rm_driver/ForcePositionMoveJiont_Cmd rm_msgs/Force_Position_Move_Joint "joint: [0, 0, 0, 0, 0, 0] sensor: 0 mode: 0 dir: 0 force: 0 dof: 0"
```

**Parameter description:**

Succeeded: no return value, failed: return error message in the rm_driver node

### Enable the pass-through force-position hybrid control compensation mode

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   |  /       |

**Usage command demo:**

```json
rostopic pub /rm_driver/StopForcePositionMove_Cmd std_msgs/Empty "{}"
```

**Return command demo:**

```json
rostopic echo /rm_driver/StopForcePositionMove_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |   true: setting succeeded, false: setting failed. |

## Lifting mechanism

The RealMan robotic arm can integrate a self-developed lifting mechanism.

### Set the open-loop speed control of the lifting mechanism`Lift_Speed.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`speed`|   `int16`   |  Speed percentage, -100 to 100: <br>1. speed<0: Lifting mechanism moves down; <br>2. speed>0: Lifting mechanism moves up; <br>3. speed=0: Lifting mechanism stops moving.     |

**Usage command demo:**

```json
rostopic pub /rm_driver/Lift_SetSpeed rm_msgs/Lift_Speed "speed: 0"
```

**Return command demo:**

```json
rostopic echo /rm_driver/Set_Lift_Speed_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |   true: setting succeeded, false: setting failed. |

### Set the closed-loop position control of the lifting mechanism`Lift_Height.msg`

The lifting mechanism runs to the specified height.
**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`height`|   `uint16`   |  Target height, in mm, range: 0-2,600.     |
|`speed`|   `uint16`   |  Speed percentage, 1−100.     |

**Usage command demo:**

```json
rostopic pub /rm_driver/Lift_SetHeight rm_msgs/Lift_Height "height: 0 speed: 0"
```

**Return command demo:**

```json
rostopic echo /rm_driver/Plan_State
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |   true: setting succeeded, false: setting failed. |

### Get the state of the lifting mechanism

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty msg`   |  /       |

**Usage command demo:**

```json
rostopic pub /rm_driver/Lift_GetState std_msgs/Empty "{}"
```

**Return command demo:**

```json
rostopic echo /rm_driver/LiftState
```

**Parameter description:**
`LiftState.msg`

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`height`            | `int16` |Current height. |
|`current`            | `int16` |Current current. |
|`err_flag`            | `uint16` |Drive error code. |
|`mode`            | `byte` |Current lifting state<br>0: idle<br>1: forward speed motion<br>2: forward position motion<br>3: backward speed motion<br>4: backward position motion. |

## Robotic arm state active reporting

### Set the UDP robotic arm state active reporting configuration`Set_Realtime_Push.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`cycle`|   `uint16`   |  Set the broadcast cycle, which is a multiple of 5 ms (1 by default, i.e., 1*5=5 ms, or 200 Hz).     |
|`port`|   `uint16`   |  Set the broadcast port number (8089 by default).     |
|`force_coordinate`|   `uint16`   |  Set the frame for external force data (only supported by robotic arms with force sensors).     |
|`ip`|   `string`   |  Set the custom reporting target IP address (192.168.1.10 by default).     |

**Usage command demo:**

```json
rostopic pub /rm_driver/Set_Realtime_Push rm_msgs/Set_Realtime_Push "cycle: 1 port: 8089 force_coordinate: 0 ip: '192.168.1.10'"
```

**Return command demo:**

```json
rostopic echo /rm_driver/Set_Realtime_Push_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |   true: setting succeeded, false: setting failed. |

### Get the UDP robotic arm state active reporting configuration

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   |  /       |

**Usage command demo:**

```json
rostopic pub /rm_driver/Get_Realtime_Push std_msgs/Empty "{}"
```

**Return command demo:**

```json
rostopic echo /rm_driver/Get_Realtime_Push_Result
```

**Parameter description:**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |  true: setting succeeded, false: setting failed. |

### UDP robotic arm state active reporting

#### 6-DoF force`Six_Force.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`force_fx`|   `float32`   |  Magnitude of the force along the x-axis.     |
|`force_fy`|   `float32`   |  Magnitude of the force along the y-axis.     |
|`force_fz`|   `float32`   |  Magnitude of the force along the z-axis.     |
|`force_mx`|   `float32`   |  Magnitude of rotation force along the x-axis.     |
|`force_my`|   `float32`   |  Magnitude of rotation force along the y-axis.     |
|`force_mz`|   `float32`   |  Magnitude of rotation force along the z-axis.     |

**Usage command demo:**

```json
rostopic echo /rm_driver/UdpSixForce
```

#### Robotic arm error`std_msgs::msg::UInt16`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`data`|   `uint16`   |  Robotic arm error.     |

**Usage command demo:**

```json
rostopic echo /rm_driver/ArmError
```

#### System error`std_msgs::msg::UInt16`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`data`|   `uint16`   |  System error.     |

**Usage command demo:**

```json
rostopic echo/rm_driver/SysError
```

#### Joint error`Joint_Error_Code.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`joint_error`|   `uint16[]`   |  Each joint error       |

**Usage command demo:**

```json
rostopic echo /rm_driver/JointErrorCode
```

#### Robot arm radian data`sensor_msgs::msg::JointState`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`header.seq`|   `uint32`   |  Time, in s.     |
|`header.stamp`|   `class`   |  Time, in s.     |
|`header.frame_id`|   `string`   |  Frame name.        |
|`name`|   `string[]`   |  Joint name.     |
|`position`|   `float64[]`   |  Joint radian.     |
|`velocity`|   `float64[]`   |  Joint velocity. (Not currently in use)       |
|`sec`|   `float64[]`   |  Joint force. (Not currently in use)       |

**Usage command demo:**

```json
rostopic echo /joint_states
```

|  Function description  |  Robotic arm radian data  |
| --- | --- |
|  Parameter description  |  sensor_msgs::msg::JointState<br>builtin_interfaces/Time stamp<br>int32 sec: time, in s. <br>uint32 nanosec: time, in ns. <br>string frame_id: frame name. <br> string[] name: joint name. <br> float64[] position: joint radian. <br>float64[] velocity: joint velocity. (Not currently in use) <br>float64[] effort: Joint force. (Not currently in use)  |
|  Subscription command  |  rostopic echo /joint_states  |

#### Pose information`geometry_msgs::msg::Pose Point`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`position.x`|   `float64`   |  Current coordinates of the robotic arm.     |
|`position.y`|   `float64`   |  Current coordinates of the robotic arm.     |
|`position.z`|   `float64`   |  Current coordinates of the robotic arm.     |
|`Quaternion orientation.x`|   `float64`   |  Current orientation of the robotic arm.        |
|`Quaternion orientation.y`|   `float64`   |  Current orientation of the robotic arm.        |
|`Quaternion orientation.z`|   `float64`   |  Current orientation of the robotic arm.        |
|`Quaternion orientation.w`|   `float64`   |  Current orientation of the robotic arm.        |

**Usage command demo:**

```json
rostopic echo /rm_driver/Pose_State
```

#### Current external force data of the 6-DoF force sensor system`Six_Force.msg`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`force_fx`|   `float32`   |  Magnitude of external force along the x-axis of the current sensor.     |
|`force_fy`|   `float32`   |  Magnitude of external force along the y-axis of the current sensor.     |
|`force_fz`|   `float32`   |  Magnitude of external force along the z-axis of the current sensor.     |
|`force_mx`|   `float32`   |  Magnitude of rotation force along the x-axis.     |
|`force_my`|   `float32`   |  Magnitude of rotation force along the y-axis.     |
|`force_mz`|   `float32`   |  Magnitude of rotation force along the z-axis.     |

**Usage command demo:**

```json
rostopic echo /rm_driver/UdpSixZeroForce
```

#### Reference frame for external force data`std_msgs::UInt16`

**Parameter description:**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`force_fx`|   `float32`   |  Magnitude of the force along the x-axis.     |
|`data`|   `uint16`   |  Frame for external force data<br>0: sensor frame<br>1: current work frame<br>2: current tool frame<br>This data will affect the reference coordinate system for the external force data of the 1-DoF force and 6-DoF force sensor systems.       |

**Usage command demo:**

```json
rostopic echo /rm_driver/Udp_Coordinate
```
