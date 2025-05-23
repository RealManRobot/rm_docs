# <p class="hidden">Start guide: </p>Robot Arm Teaching

The teaching pendant software panel is used for robot teaching operations, where users move the robot by clicking on icons on the panel. The panel also provides feedback to the user about the robot's movement.

![示教界面标号](image.png)

<center>Robot Teaching Panel</center>

**Names of Functional Areas on the Robot Teaching Panel**:

| No. | Name             |
|:------|:------------------|
| 1    | Top Navigation Bar: Includes work mode selection, speed percentage, robot arm status, configuration management, work coordinate system selection, tool coordinate system selection, initial posture, and zero position.  |
| 2    | Quick Menu: Includes emergency stop/cancel emergency stop, robot power switch, and full screen/exit full screen.  |
| 3    | Work Coordinate System Area: Includes start/end trajectory drawing, reset view, position and posture, and copy position and joint information.  |
| 4    | Graphical Programming Area: Supports graphical programming and debugging.  |
| 5    | Menu Bar Options: Includes teaching, programming, trajectory, coordinate system, file, point, variable, expansion, and status.      |
| 6    | 3D Simulation Model   |

The following sections will describe each area/button in the order listed in the table above:

## Work Mode Selection

- When `Real` is displayed, it indicates the current mode is real mode. In this mode, the program runs on the actual robot, and the robot will move according to the commands. The interface will display the robot parameters and the image of the robot arm's movement.
- When `Simulation` is displayed, it indicates the current mode is simulation mode. In this mode, the actual robot does not move; only the 3D simulation model moves. After completing a robot program, you can first choose simulation mode to verify whether the program is feasible, thereby enhancing the safety of robot applications and ensuring that the planned trajectory is achievable.

<div align="center"> <img src="../armTeching/image-1.png" width = 250 /> </div>

<center>Work Mode Selection</center>

## Speed Display

This section can display or set the robot's movement speed as a percentage of its maximum speed in real-time. When using position editing, you can set the data change speed when holding down the plus or minus buttons here.

<div align="center"> <img src="../armTeching/image-2.png" alt="速度设置示意图" width = 250 /> </div>

<center>Speed Setting Diagram</center>

::: tip
Here, speed refers to the running speed during online programming; teaching speed refers to the speed at which the teaching pendant operates in initial posture, zero position, angle teaching, and position teaching.
:::

![alt text](image-3.png)

## Robot Arm Status Display

When an error occurs with the robot, it will be displayed here. Clicking the icon will open a list of error messages.

<div align="center"> <img src="../armTeching/image-4.png" alt="机械臂错误状态显示" width = 300 /> </div>

<center>Robot Arm Error Status Display</center>

## Configuration Management

Clicking the configuration button will take you to the teaching pendant configuration page, where you can perform Basic Config, Security Config, About, Modbus, Force Config, and view teaching pendant information and updates. The specific operations can be referred to in [Robot Arm Configuration](../setting/index.md)。

![alt text](image-5.png)

## Work Coordinate System Selection

Users can select a work coordinate system to control the robot's movement. In the teaching pendant interface, selecting the base coordinate system (Base) will control the robot to move in the direction of the coordinate system shown in the figure. Users can also create their own work coordinate system based on actual project needs as a reference direction for robot movement. For example, if work1 is a user-defined work coordinate system (see [Setting Robot Work Coordinate System](../onlineCode/index.md#352411)), you can switch to this work coordinate system after setting it up.

![alt text](image-6.png)

<center>Robot Base Coordinate System Diagram</center>

<div align="center"> <img src="../armTeching/image-7.png" width = 250 /> </div>

<center>Work Coordinate System Selection Diagram</center>

## Tool Coordinate System Selection

The tool coordinate system can be selected from a drop-down menu. The default target position is the center of the flange. Users can define their own tool coordinate system. For example, if tool1 is a user-defined tool coordinate system (see [Setting Robot Tool Coordinate System](../onlineCode/index.md#352412)), you can switch to this tool coordinate system after setting it up.

![机器人末端法兰盘中心坐标系](image-6.png)

<center>Robot End Flange Center Coordinate System</center>

<div align="center"> <img src="../armTeching/image-8.png" width = 250 /> </div>

<center>Tool Coordinate System Selection Diagram</center>

## Initial Posture Button

Initial Position: Holding down the `Initial` button will return the robot to its initial position. Users can set the initial position of the robot through the teaching pendant interface (see [Setting Initial Position](../onlineCode/index.md#352413)). Releasing the button stops the movement.

<div align="center"> <img src="../armTeching/image-9.png" width = 100 /> </div>

<center>Initial Posture Button</center>

## Zero Position Button

Zero Position: Holding down the `Zero` button will return the robot to its zero position. Releasing the button stops the movement.

<div align="center"> <img src="../armTeching/image-10.png" width = 100 /> </div>

<center>Zero Position Button</center>

## Robot Emergency Stop Button

After pressing the emergency stop button, the robot stops at its maximum speed. Pressing it again cancels the emergency stop, allowing the robotic arm to be operated again.

<div align="center"> <img src="../armTeching/image-11.png" width = 300 /> </div>

<center>Robot Emergency Stop Button</center>

## Power Button

This button is used to control the power switch of the robot. Green indicates that the robot's power is on, while gray indicates that the robot's power is off.

<div align="center"> <img src="../armTeching/image-13.png" width = 150 /> </div>

<center>Robot Power Switch</center>

## Full Screen Button

This button is used to control the teaching interface to enter or exit full screen.

<div align="center"> <img src="../armTeching/image-12.png" width = 150 /> </div>

<center>Full Screen Button</center>

## Teaching Coordinate System Selection

Selecting the work coordinate system will cause the robot to move according to the direction of the work end coordinate system. Selecting the tool coordinate system will cause the robot to move according to the direction of the tool end coordinate system.

<div align="center"> <img src="../armTeching/image-16.png" alt="运动坐标系选择示意图" width = 250 /> </div>

<center>Motion Coordinate System Selection Diagram</center>

![工作坐标系运动示意图](image-17.png)

<center>Work Coordinate System Motion Diagram</center>

![工具端运动示意图](image-18.png)

<center>Tool End Motion Diagram</center>

## Trajectory Drawing

By enabling the `Trajectory Drawing` function, the robot's end-effector trajectory line will be displayed in real-time in the model preview area.

<div align="center"> <img src="../armTeching/image-24.png" width = 30 /> </div>

<center>Trajectory Drawing Button</center>

![绘制轨迹示意图](image-14.png)

<center>Trajectory Drawing Diagram</center>

By disabling the `Trajectory Drawing` function, the robot's trajectory line in the model preview area will be cleared.

![清除轨迹示意图](image-15.png)

<center>Clear Trajectory Diagram</center>

## One-Click Reset Button

Clicking the `One-Click Reset` button will quickly restore the 3D simulation model view to its initial view.

<div align="center"> <img src="../armTeching/image-19.png" width = 30 /> </div>

<center>One-Click Reset Button</center>

## Robot Position and Pose Parameter Display

X, Y, Z represent the coordinates of the tool flange center point (selected tool coordinate system) in the selected coordinate system (base coordinate system, end-effector coordinate system, user-defined coordinate system). RX, RY, RZ represent the radian values of rotation relative to the selected coordinate system. <br>
The copy button in the upper right corner supports copying pose information or joint information, allowing you to copy the corresponding data.

![末端位姿显示示意图](image-20.png)

<center>End-Effector Pose Display Diagram</center>

## Graphical Programming Area

This area displays the current graphical programming information, supporting programming operations for Reeman series robots to achieve complex movements and various debugging methods such as Step, Low, and Run. For specific operations, please refer to [Teaching Pendant Operation Guide](../onlineCode/index.md).

![alt text](image-22.png)

<center>Graphical Programming Area</center>

## Menu Bar Options

Clicking on the option names in the menu bar will switch to the corresponding panel, making it convenient for users to operate. The selected panel will have a gray background. For specific operations, please refer to [Teaching Pendant Operation Guide](../onlineCode/index.md).

<div align="center"> <img src="../armTeching/image-21.png" width = 400 /> </div>

<center>Menu Bar Options</center>

## 3D Simulation Model

The purpose of the robot simulation interface is to validate user-written programs without using a real robotic arm. Users can use the simulation environment to check if the control program for the robot is reasonable. Additionally, the model area has the following functions to facilitate user use:

- The simulation model can be resized and rotated by dragging with a mouse (or touching a tablet interface) as needed.
- Each joint of the red virtual robotic arm can be dragged with a mouse. If a joint is dragged beyond its limit, a pop-up message will appear at the top of the page.

![alt text](image-23.png)

<center>Drag Limit Exceeded Prompt</center>
