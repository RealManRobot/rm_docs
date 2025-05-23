# <p class="hidden">ROS：</p>rm_ msg功能包说明

rm_msgs功能包的主要作用为为机械臂在ROS的框架下运行提供必要的消息文件，该功能包并没有可执行的使用命令。在下文中将通过以下几个方面详细介绍该功能包。

- 功能包架构说明:熟悉功能包中的文件构成及作用。

代码链接：[https://github.com/RealManRobot/rm_robot/tree/main/rm_msgs](https://github.com/RealManRobot/rm_robot/tree/main/rm_msgs)。

## 1.rm_msgs功能包架构说明

```
    ├── CMakeLists.txt                #编译规则文件
    ├── include                       #依赖头文件文件夹
    │   └── rm_msgss
    ├── msg                          #当前的消息文件（详细请看下方介绍）
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
    ├── package.xml                       #依赖声明文件
    └── src
```
