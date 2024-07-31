# 1.rm\_ msg功能包说明

rm\_msgs功能包的主要作用为为机械臂在ROS的框架下运行提供必要的 消息文件，在下文中将通过以下几个方面详细介绍该功能包。

- 功能包使用。
- 功能包架构说明。
通过这三部分内容的介绍可以帮助大家：
- 了解该功能包的使用。
- 熟悉功能包中的文件构成及作用。

代码链接：[https://github.com/RealManRobot/rm\_robot/tree/main/rm\_msgs](https://github.com/RealManRobot/rm_robot/tree/main/rm_msgs)。

# 2.rm\_msgs功能包使用

该功能包并没有可执行的使用命令，其主要作用为为其他功能包提供必须的消息文件。

# 3.rm\_msgs功能包架构说明
## 3.1功能包文件总览

当前rm\_driver功能包的文件构成如下。

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

有关以上消息文件的详细说明就不在此详细展开了，详情可查看《睿尔曼机械臂ROS1rm\_driver话题详细说明V1.0.0》进行查看。