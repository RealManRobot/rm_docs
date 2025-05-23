# Access to relevant information

## Content of JSON files

1. [Robotic arm JSON protocol - Get started](../../json/getStartedJson/index.md)
2. [Motion parameter instruction set](../../json/armConfig/index.md)
3. [State query instruction set](../../json/armState/index.md)
4. [Coordinate system instruction set](../../json/coordinate/index.md)
5. [Drag teaching instruction set](../../json/dragTech/index.md)
6. [Electronic fence and virtual wall instruction set](../../json/electronicFence/index.md)
7. [End tool instruction set (optional)](../../json/endTool/index.md)
8. [Controller expansion instruction set (optional)](../../json/expandControl/index.md)
9. [Force sensor instruction set (optional)](../../json/forceSensor/index.md)
10. [I/O configuration instruction set](../../json/ioConfig/index.md)
11. [Joint configuration instruction set](../../json/jointConfig/index.md)
12. [Joint parameter instruction set](../../json/jointParameter/index.md)
13. [Modbus instruction set](../../json/modbus/index.md)
14. [Motion instruction set](../../json/motionConfig/index.md)
15. [Network configuration instruction set](../../json/networkConfig/index.md)
16. [Online programming configuration instruction set](../../json/onlineProgram/index.md)
17. [Self-collision safety detection configuration instruction set](../../json/selfCollision/index.md)
18. [System instruction set](../../json/systemConfig/index.md)
19. [Trajectory File instruction Set](../../json/trajectoryfile/index.md)
20. [UDP active reporting configuration instruction set](../../json/udpConfig/index.md)
21. [Appendix: Error code](../../json/errorList/index.md)

## Version information

| **Version No.** | **Time** | **Remarks** |
| --- | --- | --- |
|3.7.7|2025-03-11|**Detailed description of update**: <br>1. End-Effector Ecosystem Protocol Mode: Added settings and queries for the end-effector ecosystem protocol mode.<br>2. Tactile Sensor Mode: Added settings and queries for the tactile sensor mode.<br>3. Reading End-Effector Device Information: Added reading of basic and real-time information of end-effector devices.<br>4. Updates: The UDP robot arm status proactive reporting interface, UDP robot arm status proactive reporting configuration, and UDP settings reporting interface have added instruction sets for reporting end-effector ecosystem device information.|
|3.7.6|2025-01-15|**Detailed description of update**: <br>6D Force Dragging Teaching Mode: Added settings and queries for the 6D force dragging teaching mode.|
|3.7.5|2024-12-20|**Detailed description of update**: <br>1. [Setting Digital IO Mode] Added real-time speed adjustment function multiplexing mode.<br> 2. [Acquiring Digital IO Status] Added real-time speed adjustment function multiplexing mode.<br> 3. [Angle Transparency, Position Transparency, and Transparency Force-Position Hybrid Compensation] New high-follow mode setting, supporting full transparency mode, curve fitting mode, and filtering mode, with curve fitting mode and filtering mode supporting the setting of a smoothing factor. <br> 4. [Elevator Mechanism Position Closed-Loop Control]: Added failure return value information. |
| 3.7.4 | 2024-10-15 | **Detailed description of update**<br>1.[UDP interface for actively reporting the robotic arm state] Add aloha master arm state, the parameter aloha_state.<br>2. [Query the UDP configuration for actively reporting the robotic arm state] Add the function "Return to aloha master arm state", the parameter aloha_state<br>3. [Set the UDP configuration for actively reporting the robotic arm state] Add the function "Set aloha master arm state", the parameter aloha_state|
| 3.7.3 | 2024-09-27 | **Update**: Start the drag teaching in hybrid mode, force-position hybrid control, and pass-through force-position hybrid compensation, set digital I/O mode, UDP interface for actively reporting the robotic arm state, query the UDP configuration for actively reporting the robotic arm state, and set the UDP configuration for actively reporting the robotic arm state. <br>**New contents**: Set the sensitivity of current loop drag teaching, get the sensitivity of current loop drag teaching, joint following motion in space, and following motion in Cartesian space. <br>**Detailed description of update:**<br>1. [Select any force control drag direction] Optimize the position-only, orientation-only, and combined position-orientation 6-DoF force drag teaching function on the original extension page, and implement the selection of the reference frame as the current work or tool frame, and support the combined position-orientation mode, plane mode, position-only mode, orientation-only mode and free mode. In addition, the related functions of triggering force control drag through I/O are not affected, and the API interfaces are compatible. <br>2. [Sensitivity of current loop drag] Support the configuration of the sensitivity of current loop drag in the range of 0−100, which is 100 by default. When the sensitivity is set to 100, the hand feeling is the same as previous versions, while also maintaining the memory function. <br>3. [User-defined parameters for force-position hybrid control] Users can self-define parameters in the force-position hybrid control function. <br>4. [Add controller I/O multiplexing function] Add "input initial pose function" and "collision detection output function". <br>5. [UDP reporting] Add the optional field of the current robotic arm state in UDP broadcast information. <br>6. [Optimize the pass-through low-following scenarios] Rebuild the pass-through (movej_canfd, movep_canfd, Force_Position_Move) function in low-following scenario, adopt the online trajectory planning algorithm at the bottom layer, and solve several problems about this function: (1) At the beginning of pass-through, the robotic arm needs to move to the vicinity of the first pass-through point, which is not needed now. Low-following pass-through can be started at any time. (2) The joint angle difference along the pass-through trajectory cannot exceed 10°, while now any angle and range within the limit of the working range can be sent. (3) The limit on the joint space during pass-through had to be considered. Now, it is no longer necessary. The trajectory will be planned according to the maximum reachable range if the position sent is beyond the limit. In addition, the ease of use in the high-following pass-through scenarios will be solved in later versions. Please be patient to wait for it. <br>7. [Online trajectory planning following interface] Add the online trajectory planning interface functions (movej_follow and movep_follow interfaces), to provide joint space following motion control and Cartesian space following motion control, which are suitable for the scenarios where the latest target points are followed. In these scenarios, the motion following effect of this interface is better than pass-through low following, but it is not suitable for high-frequency pass-through. |
| 3.7.2 | 2024-08-12 | Add the optional configuration for UDP active reporting configuration. <br> Support blend radius optimize the unit description. |
| 3.7.1 | 2024-05-20 | Add spline curve motion interface; <br>Add modbus to support reading of multi-input register interface; <br>Update DH parameter-related interfaces. |
| 3.6.0 | 2024-02-01 | Add 6-DoF force drag teaching threshold parameters; <br>Add the interface for querying 6-DoF force drag teaching threshold parameters; <br>Add the interface for initializing 6-DoF force drag teaching threshold parameters. |
| 3.5.9 | 2023-12-15 | Add the interface for reading software information;<br>Add the interfaces for setting and querying the speed, acceleration and maximum and minimum limit of joint driver; <br>Extend and optimize the interface for starting drag teaching in hybrid mode and the interfaces for movej, movel, movec, movej_p, and one-button joint limit setting; <br>Add the interface for querying gripper information; <br>Add the error codes for exceeding the software limit and for end interface board-related errors. |
| 3.5.8 | 2023-11-21 | Add electronic fence interfaces; <br>Add modbus-TCP master station and modbus-RTU slave station interfaces; <br>Add the interface for setting the teaching reference frame and querying the teaching reference frame; <br>Add interfaces related to self-collision safety detection; <br>Supplementary notes on system error codes; <br>Corrigendum. |
| 3.5.7 | 2023-10-11 | Add the robotic arm slow stop interface; <br>Add the interface for querying the controller RS485 mode and tool end RS485 mode; <br>Optimize the network information query interface of wireless network card; <br>Add the interface for disabling the WiFi function; <br>Add the interface for querying the protocol for the given frame failing to be returned. |
| 3.5.6 | 2023-09-08 | Optimize the UDP active reporting interface and force data query interface; <br>Add the data of force sensor in different frames; <br>Add the logic and configuration parameters of the UDP actively reporting the target address. |
| 3.5.5 | 2023-08-19 | Add interfaces for online programming and storage of I-series robots; add universal extension interfaces related to axis extension; <br>Add the interface for querying the active reporting function configuration; <br>Corrigendum of other contents. |
| 3.5.4 | 2023-07-18 | Corrigendum on part of protocol contents; <br>Add the UPD active reporting interface for I-series robotic arms; <br>Add supplementary notes on error codes. |
| 3.5.3 | 2023-06-07 | Corrigendum on position step example. |
| 3.5.2 | 2023-05-25 | Add the system external force data feedback in the returned values of the interface for querying 6-DoF force data; <br>Add the force in each direction in the returned values of the interface for querying the force-position hybrid pass-through compensation; <br>Optimize the Modbus protocol<br>Optimize the in-position state protocol, and distinguish between different in-place states; <br>Add the interface for clearing system errors, which is used to manually clear system errors; <br>Add the brake state in the joint error code feedback interface; <br>Correct joint error codes; <br>Update the TCP defaulted parameter configuration; <br>Corrigendum on part of text. |
| 3.5.1 | 2023-03-16 | Add necessary descriptions; <br>Add examples on high-speed Ethernet port configuration for the basic series. |
| 3.5.0 | 2023-02-15 | Add I-series new protocol support; <br>Mark the differences in interfaces between Gen 3 controller and basic series; <br>Correct description errors of work frame and tool frame; <br>Corrigendum on part of contents; <br>Add the interface for IP address configuration and query of high-speed Ethernet port of basic series robotic arms. |
| V3.4 | 2022-12-29 | Delete the command for automatic return of system state;<br> Add the Modbus command for reading multiple coils and multiple holding registers; <br>Modify the format of gripper protocol, and add blocking mode; <br>Delete the calibration of robotic arm joints. |
| V3.3 | 2022-09-23 | Modify the force-position hybrid control commands, installation mode parameters, pass-through returned values of pose, etc. |
| V3.2 | 2022-07-01 | Add multi-coil and multi-register operations in the Modbus protocol section. |
| V3.1 | 2022-05-13 | Optimize the document. |
| V3.0 | 2022-05-06 | Shield testing commands. |
| V2.9 | 2022-04-14 | Modify the return state of lifting mechanism. |
| V2.8 | 2022-04-08 | Add the control of high-speed Ethernet port. |
| V2.7 | 2022-03-07 | Add the pass-through force-position hybrid compensation, and modify the pass-through of angle and pose. |
| V2.6 | 2022-02-19 | Corrigendum. |
| V2.5 | 2022-02-15 | Add the one-key setting of joint limit. |
| V2.4 | 2022-02-12 | Clarify the use of RS485. |
| V2.3 | 2022-01-28 | Add the setting of 1-DoF force. |
| V2.2 | 2022-01-12 | Add online programming setting. |
| V2.1 | 2021-11-20 | Add joint calibration setting. |
| V2.0 | 2021-09-27 | Add anti-collision level setting. |
| V1.9 | 2021-09-26 | Can display the software versions of multiple cores. |
| V1.8 | 2021-08-18 | Add the Modbus protocol configuration of controller and end interface board. |
| V1.7 | 2021-07-26 | Add the command for downloading dynamic calibration parameters. |
| V1.6 | 2021-05-20 | Add Movej_P command, PWM setting, and 1-DoF force setting. |
| V1.5 | 2021-03-12 | Add functions such as cache of end center of mass and waypoints. |
| V1.4.8 | 2020-08-02 | Add the end interface section. |
| V1.4.7 | 2020-07-28 | Add the drag teaching section. |
| V1.4.6 | 2020-07-03 | Modify the names of some commands. |
| V1.4.5 | 2020-06-29 | Add protocols in the I/O section. |
| V1.4.4 | 2020-06-29 | Modify communication error prompts. |
| V1.4.3 | 2020-06-18 | Modify returned frame of arm_all_state. |
| V1.4.2 | 2020-06-05 | Modify the WiFi configuration process. |
| V1.4.1 | 2020-05-25 | Modify part of the format. |
| V1.4 | 2020-05-20 | Modify part of punctuation marks. |
| V1.3 | 2020-05-17 | Simplify the returned values of some protocols. |
| V1.2 | 2020-05-15 | Revise (general revisions). |
| V1.1 | 2020-05-10 | Revise. |
| V1.0 | 2020-05-01 | Draft. |
