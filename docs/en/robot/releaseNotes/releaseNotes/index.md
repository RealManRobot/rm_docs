# <p class="hidden">Version Description：</p> Version Description

## V 1.7.0

### Version Change Description

- **End-effector Control**:
  - The end-effector peripheral devices now support the RM_ARM+ protocol, which is disabled by default.
  - Four baud rates are supported: 9600 bps, 115200 bps, 256000 bps, and 460800 bps.
  - When enabled, the system automatically adapts to the connected end-effector and displays the corresponding control interface.
- **Robot Arm Teaching - Drag Teaching**: The drag teaching function has been moved to the `Robot Arm Teaching` - `Drag Teaching page`.

### Controller Version Correspondence

Table of correspondence between the controller version and the driver version, end interface board version, API version and ROS version. During software version upgrade, please refer to this table for version correspondence. <br>
When using the development package, be sure to use the corresponding controller version. Please contact the technical support personnel for help.

Updated on：2025/03/11

|Item|Version No.|
|:--|:--|
|RM, RML, ECO Series Joint Drivers|Conventional driver Vd5.1.0 <br> Multi-coil driver Ve5.1.0|
|GEN Series Joint Drives | Joint 1, 3, 4: Vd8.2.5<br>Joint 2: Vd8.a.5<br>Joints 5, 6, 7: Vd8.d.5|
|End interface board|V1.9.8|
|API2|V1.0.7|
|ROS1| - |
|ROS2| - |

## V 1.6.8

### Version Change Description

- **6-DoF Drag Teach**: Divides into two modes, Fast Dragging and Precise Dragging.

  - Precise Dragging Mode, which is heavier to drag but offers higher precision, suitable for precise dragging to the target position.
  - Fast Dragging Mode, which is lighter to drag but has lower precision, suitable for quickly dragging to the target position.

- **Multi-Language Support**: Added support for Spanish, Korean, and Japanese.
- **Online Programming**: Online programming is waiting for the modbus to be changed to read a single register mode.
- **RML63 Robotic Arm**: Supports the RML63 III configuration robotic arm.

### Controller Version Correspondence

Table of correspondence between the controller version and the driver version, end interface board version, API version and ROS version. During software version upgrade, please refer to this table for version correspondence. <br>
When using the development package, be sure to use the corresponding controller version. Please contact the technical support personnel for help.

Updated on：2025/01/15

|Item|Version No.|
|:--|:--|
|RM, RML, ECO Series Joint Drivers|Conventional driver Vd5.1.0 <br> Multi-coil driver Ve5.1.0|
|GEN Series Joint Drives | Joint 1, 3, 4: Vd8.2.5<br>Joint 2: Vd8.a.5<br>Joints 5, 6, 7: Vd8.d.5|
|End interface board|V1.9.4|
|API2|V1.0.6|
|ROS1| - |
|ROS2| - |

## V 1.6.7

### Version Change Description

- **High-Follow-Through Transparency Function Optimization**: In high-follow-through transparency scenarios, three modes are supported.

  - Mode 1: Full Transparency Mode, this is the default mode, which directly passes the original data to the joints, and the joints fully support the trajectory sent;
  - Mode 2: Curve Fitting Mode, in this mode, a smoothing coefficient (0-100) can be input, the larger the smoothing coefficient, the smoother the trajectory; however, the lag effect will be more noticeable, with a maximum lag of about 15 cycles;
  - Mode 3: Filtering Mode, in this mode, users can input filtering parameters (ranging from 0 to 1000). The larger the parameter value, the smoother the motion trajectory of the robotic arm will be. Since filtering technology is used, after the user inputs the last target point, to ensure that the robotic arm can accurately reach the target position, the user needs to continue sending instructions for the last target point until it is confirmed that the robotic arm has reached the final position.

- **Top Navigation Bar Optimization**: The speed bar displays or sets the current speed of the robotic arm in real-time.
- **Graphical Programming Optimization**: Adds real-time speed adjustment blocks to the basic category.
- **External Interface Optimization**: IO control adds real-time speed adjustment options.
- **Real-Time Speed Adjustment Function and Interface**: Real-time control of the robotic arm's movement speed can be achieved through the teach pendant, IO, Modbus, and online programming.
- **Joint Enable Error Optimization**: Optimizes the situation where, when the joint drops enable, sending errors and sending motion control commands (MOVEJ, MOVEL, MOVEC, MOVEJ_P, MOVES, etc.) do not return failures.
- **Support for Real Mode**: Electronic fences and self-collision support real mode.
- **3D Model Supports Copying Position Information**: In the pose information area of the 3D model, supports right-clicking to copy position information, and users can choose to copy joint information or pose information.
- **Online Programming File Export and Import Optimization**: Online programming files support one-click batch export and import.
- **Graphical Programming Optimization:**

  - Adds a modification time field, supporting viewing in ascending or descending order by modification time.
  - Prompts the line number when stopped, and the click on that line or rerun makes the indicator disappear.

- **Modbus Optimization**:

  - Add an emergency stop status to the input register addresses: The emergency stop status is triggered by an emergency stop operation and directly cleared upon release.
  - Adds start address inquiry.
  - Adds data format switching for controller 485 and end 485, including unsigned numbers, signed numbers, and hexadecimal numbers.

- **JSON Protocol Reply Optimization**: Elevator control supports immediate JSON protocol response, with a follow-up response indicating the status of arrival once the position is reached.
- **Support for Chinese Naming**: Position names and graphical programming file names support Chinese characters.

### Controller Version Correspondence

Table of correspondence between the controller version and the driver version, end interface board version, API version and ROS version. During software version upgrade, please refer to this table for version correspondence. <br>
When using the development package, be sure to use the corresponding controller version. Please contact the technical support personnel for help.

Updated on：2024/12/20

|Item|Version No.|
|:--|:--|
|RM, RML, ECO Series Joint Drivers|Conventional driver Vd5.1.0 <br> Multi-coil driver Ve5.1.0|
|GEN Series Joint Drives | Joint 1, 3, 4: Vd8.2.5<br>Joint 2: Vd8.a.5<br>Joints 5, 6, 7: Vd8.d.5|
|End interface board|V1.9.3|
|API2|V1.0.5|
|API|V4.3.7|
|ROS1|V2.3.0|
|ROS2| V1.3.0 `humble` <br> V1.3.0 `foxy`|

## V 1.6.6

### Version Change Description

- **ECO63：** Resolved the issue of abnormal display in the 3D model of the ECO63 arm's teach pendant.

### Controller Version Correspondence

Table of correspondence between the controller version and the driver version, end interface board version, API version and ROS version. During software version upgrade, please refer to this table for version correspondence. <br>
When using the development package, be sure to use the corresponding controller version. Please contact the technical support personnel for help.

Updated on：2024/11/22

|Item|Version No.|
|:--|:--|
|RM, RML, ECO Series Joint Drivers|Conventional driver Vd5.1.0 <br> Multi-coil driver Ve5.1.0|
|GEN Series Joint Drives | Joint 1, 3, 4: Vd8.2.5<br>Joint 2: Vd8.a.5<br>Joints 5, 6, 7: Vd8.d.5|
|End interface board|V1.9.3|
|API2|V1.0.4|
|API|V4.3.6|
|ROS1|V2.2.1|
|ROS2| V1.2.1 `humble` <br> V1.2.1 `foxy`|

## V 1.6.5

### Version Change Description

- **Graphical Programming**: Resolved the display issue for file names containing underscores "_".
- **Pose Editing**: To facilitate troubleshooting of joint angle data errors, the page can display the actual position when the joint exceeds the limit range.
- **Integrated Six-Axis Force**: 3D model rendering optimization; robotic arm models are now suffixed with 6FB.
- **TCP Communication Real-time Improvement**: Reconstructed the TCP server to enhance communication real-time performance and expand the limit on the number of connections.
- **Dynamic Calibration and Load Identification**: Dynamic calibration and load identification use a new motion execution strategy, optimizing the modification of joint limits caused by stopping during execution.
- **New High-Speed Dexterous Hand Interface**: Added interfaces for dexterous hand angle following control and dexterous hand position following control, and the UDP setup report interface now includes a dexterous hand status instruction set.

### Controller Version Correspondence

Table of correspondence between the controller version and the driver version, end interface board version, API version and ROS version. During software version upgrade, please refer to this table for version correspondence. <br>
When using the development package, be sure to use the corresponding controller version. Please contact the technical support personnel for help.

Updated on: 2024/11/11

|Item|Version No.|
|:--|:--|
|Driver|Conventional driver Vd5.1.0 <br> Multi-coil driver Ve5.1.0 <br> Soft brake driver V5.1.0|
|End interface board|V1.9.3|
|API2|V1.0.4|
|API|V4.3.6|
|ROS1|V2.2.1|
|ROS2| V1.2.1 `humble` <br> V1.2.1 `foxy`|

## Historical Versions

For more information on the correspondence of historical versions, please refer to the [Historical Version Correspondence](../versionComparisonTable/index.md)。
