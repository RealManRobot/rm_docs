import{_ as s,c as n,o as a,a3 as p}from"./chunks/framework.DpFyhY0e.js";const h=JSON.parse('{"title":"1.rm_ msg功能包说明","description":"","frontmatter":{},"headers":[],"relativePath":"robot/ros/msg.md","filePath":"robot/ros/msg.md","lastUpdated":null}'),e={name:"robot/ros/msg.md"},l=p(`<h1 id="_1-rm-msg功能包说明" tabindex="-1">1.rm_ msg功能包说明 <a class="header-anchor" href="#_1-rm-msg功能包说明" aria-label="Permalink to &quot;1.rm\\_ msg功能包说明&quot;">​</a></h1><p>rm_msgs功能包的主要作用为为机械臂在ROS的框架下运行提供必要的 消息文件，在下文中将通过以下几个方面详细介绍该功能包。</p><ul><li>功能包使用。</li><li>功能包架构说明。 通过这三部分内容的介绍可以帮助大家：</li><li>了解该功能包的使用。</li><li>熟悉功能包中的文件构成及作用。</li></ul><p>代码链接：<a href="https://github.com/RealManRobot/rm_robot/tree/main/rm_msgs" target="_blank" rel="noreferrer">https://github.com/RealManRobot/rm_robot/tree/main/rm_msgs</a>。</p><h1 id="_2-rm-msgs功能包使用" tabindex="-1">2.rm_msgs功能包使用 <a class="header-anchor" href="#_2-rm-msgs功能包使用" aria-label="Permalink to &quot;2.rm\\_msgs功能包使用&quot;">​</a></h1><p>该功能包并没有可执行的使用命令，其主要作用为为其他功能包提供必须的消息文件。</p><h1 id="_3-rm-msgs功能包架构说明" tabindex="-1">3.rm_msgs功能包架构说明 <a class="header-anchor" href="#_3-rm-msgs功能包架构说明" aria-label="Permalink to &quot;3.rm\\_msgs功能包架构说明&quot;">​</a></h1><h2 id="_3-1功能包文件总览" tabindex="-1">3.1功能包文件总览 <a class="header-anchor" href="#_3-1功能包文件总览" aria-label="Permalink to &quot;3.1功能包文件总览&quot;">​</a></h2><p>当前rm_driver功能包的文件构成如下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    ├── CMakeLists.txt                #编译规则文件</span></span>
<span class="line"><span>    ├── include                       #依赖头文件文件夹</span></span>
<span class="line"><span>    │   └── rm_msgss</span></span>
<span class="line"><span>    ├── msg                          #当前的消息文件（详细请看下方介绍）</span></span>
<span class="line"><span>    │   ├── Arm_Analog_Output.msg</span></span>
<span class="line"><span>    │   ├── Arm_Current_State.msg</span></span>
<span class="line"><span>    │   ├── Arm_Digital_Output.msg</span></span>
<span class="line"><span>    │   ├── Arm_IO_State.msg</span></span>
<span class="line"><span>    │   ├── Arm_Joint_Speed_Max.msg</span></span>
<span class="line"><span>    │   ├── ArmState.msg</span></span>
<span class="line"><span>    │   ├── Cabinet.msg</span></span>
<span class="line"><span>    │   ├── CartePos.msg</span></span>
<span class="line"><span>    │   ├── ChangeTool_Name.msg</span></span>
<span class="line"><span>    │   ├── ChangeTool_State.msg</span></span>
<span class="line"><span>    │   ├── ChangeWorkFrame_Name.msg</span></span>
<span class="line"><span>    │   ├── ChangeWorkFrame_State.msg</span></span>
<span class="line"><span>    │   ├── Force_Position_Move_Joint.msg</span></span>
<span class="line"><span>    │   ├── Force_Position_Move_Pose.msg</span></span>
<span class="line"><span>    │   ├── Force_Position_State.msg</span></span>
<span class="line"><span>    │   ├── GetArmState_Command.msg</span></span>
<span class="line"><span>    │   ├── Gripper_Pick.msg</span></span>
<span class="line"><span>    │   ├── Gripper_Set.msg</span></span>
<span class="line"><span>    │   ├── Hand_Angle.msg</span></span>
<span class="line"><span>    │   ├── Hand_Force.msg</span></span>
<span class="line"><span>    │   ├── Hand_Posture.msg</span></span>
<span class="line"><span>    │   ├── Hand_Seq.msg</span></span>
<span class="line"><span>    │   ├── Hand_Speed.msg</span></span>
<span class="line"><span>    │   ├── IO_Update.msg</span></span>
<span class="line"><span>    │   ├── Joint_Current.msg</span></span>
<span class="line"><span>    │   ├── Joint_Enable.msg</span></span>
<span class="line"><span>    │   ├── Joint_Error_Code.msg</span></span>
<span class="line"><span>    │   ├── Joint_Max_Speed.msg</span></span>
<span class="line"><span>    │   ├── JointPos.msg</span></span>
<span class="line"><span>    │   ├── Joint_Step.msg</span></span>
<span class="line"><span>    │   ├── Joint_Teach.msg</span></span>
<span class="line"><span>    │   ├── Lift_Height.msg</span></span>
<span class="line"><span>    │   ├── Lift_Speed.msg</span></span>
<span class="line"><span>    │   ├── LiftState.msg</span></span>
<span class="line"><span>    │   ├── Manual_Set_Force_Pose.msg</span></span>
<span class="line"><span>    │   ├── MoveC.msg</span></span>
<span class="line"><span>    │   ├── MoveJ.msg</span></span>
<span class="line"><span>    │   ├── MoveJ_P.msg</span></span>
<span class="line"><span>    │   ├── MoveL.msg</span></span>
<span class="line"><span>    │   ├── Ort_Teach.msg</span></span>
<span class="line"><span>    │   ├── Plan_State.msg</span></span>
<span class="line"><span>    │   ├── Pos_Teach.msg</span></span>
<span class="line"><span>    │   ├── Servo_GetAngle.msg</span></span>
<span class="line"><span>    │   ├── Servo_Move.msg</span></span>
<span class="line"><span>    │   ├── Set_Force_Position.msg</span></span>
<span class="line"><span>    │   ├── Set_Realtime_Push.msg</span></span>
<span class="line"><span>    │   ├── Six_Force.msg</span></span>
<span class="line"><span>    │   ├── Socket_Command.msg</span></span>
<span class="line"><span>    │   ├── Start_Multi_Drag_Teach.msg</span></span>
<span class="line"><span>    │   ├── Stop.msg</span></span>
<span class="line"><span>    │   ├── Stop_Teach.msg</span></span>
<span class="line"><span>    │   ├── Tool_Analog_Output.msg</span></span>
<span class="line"><span>    │   ├── Tool_Digital_Output.msg</span></span>
<span class="line"><span>    │   ├── Tool_IO_State.msg</span></span>
<span class="line"><span>    │   └── Turtle_Driver.msg</span></span>
<span class="line"><span>    ├── package.xml                       #依赖声明文件</span></span>
<span class="line"><span>    └── src</span></span></code></pre></div><p>有关以上消息文件的详细说明就不在此详细展开了，详情可查看《睿尔曼机械臂ROS1rm_driver话题详细说明V1.0.0》进行查看。</p>`,11),t=[l];function i(m,o,r,_,c,g){return a(),n("div",null,t)}const u=s(e,[["render",i]]);export{h as __pageData,u as default};
