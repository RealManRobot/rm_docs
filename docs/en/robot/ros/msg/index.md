# <p class="hidden">ROS: </p>Introduction to the Rm_msg Package

The primary function of the rm_msgs package is to provide the necessary message files for the operation of the robotic arm within the ROS framework. This package does not include any executable commands. The following will provide a detailed introduction to this package.

- Package structure description: Understand the composition and function of files in the package.

Code link: [https://github.com/RealManRobot/rm_robot/tree/main/rm_msgs](https://github.com/RealManRobot/rm_robot/tree/main/rm_msgs).

## 1. Structure description of rm_msgs package

```
    ├── CMakeLists.txt                # Build rule file
    ├── include                       # Dependency header file folder
    │   └── rm_msgss
    ├── msg                          # Current message file (see detailed description below)
    │   ├── Arm_Analog_Output.msg
    │   ├── Arm_Current_State.msg
    │   ├── Arm_Digital_Output.msg
    │   ├── Arm_IO_State.msg
    │   ├── Arm_Joint_Speed_Max.msg
    │   ├── ArmState.msg
    │   ├── Cabinet.msg
    │   ├── CartePos.msg
    │   ├── ChangeTool_Name.msg
    │   ├── ChangeTool_State.msg
    │   ├── ChangeWorkFrame_Name.msg
    │   ├── ChangeWorkFrame_State.msg
    │   ├── Force_Position_Move_Joint.msg
    │   ├── Force_Position_Move_Pose.msg
    │   ├── Force_Position_State.msg
    │   ├── GetArmState_Command.msg
    │   ├── Gripper_Pick.msg
    │   ├── Gripper_Set.msg
    │   ├── Hand_Angle.msg
    │   ├── Hand_Force.msg
    │   ├── Hand_Posture.msg
    │   ├── Hand_Seq.msg
    │   ├── Hand_Speed.msg
    │   ├── IO_Update.msg
    │   ├── Joint_Current.msg
    │   ├── Joint_Enable.msg
    │   ├── Joint_Error_Code.msg
    │   ├── Joint_Max_Speed.msg
    │   ├── JointPos.msg
    │   ├── Joint_Step.msg
    │   ├── Joint_Teach.msg
    │   ├── Lift_Height.msg
    │   ├── Lift_Speed.msg
    │   ├── LiftState.msg
    │   ├── Manual_Set_Force_Pose.msg
    │   ├── MoveC.msg
    │   ├── MoveJ.msg
    │   ├── MoveJ_P.msg
    │   ├── MoveL.msg
    │   ├── Ort_Teach.msg
    │   ├── Plan_State.msg
    │   ├── Pos_Teach.msg
    │   ├── Servo_GetAngle.msg
    │   ├── Servo_Move.msg
    │   ├── Set_Force_Position.msg
    │   ├── Set_Realtime_Push.msg
    │   ├── Six_Force.msg
    │   ├── Socket_Command.msg
    │   ├── Start_Multi_Drag_Teach.msg
    │   ├── Stop.msg
    │   ├── Stop_Teach.msg
    │   ├── Tool_Analog_Output.msg
    │   ├── Tool_Digital_Output.msg
    │   ├── Tool_IO_State.msg
    │   └── Turtle_Driver.msg
    ├── package.xml                       # Dependency declaration file
    └── src
```
