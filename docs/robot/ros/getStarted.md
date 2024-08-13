# ROS快速开始

机械臂的ROS支持是基于`rm_robot`功能包，以下为使用环境：
* 当前支持的机械臂有RM65系列、RM75系列、ECO65系列、RML63系列和GEN72系列，详细可参考网址 [RealMan robots](http://www.realman-robotics.cn/)。
* 版本2.1.0.
* 支持的机械臂控制器版本1.4.3以上。
* 基于的Ubuntu版本为18.04或20.04。
* ROS版本支持melodic和noetic。

功能包下载地址：[wwwwwwwww]()

---

## 1.搭建环境

### 1.1安装ROS

ROS安装可以下面的参考网址进行安装：

* [MELODIC](https://wiki.ros.org/melodic/Installation/Ubuntu)
* [NOETIC](https://wiki.ros.org/noetic/Installation/Ubuntu)

### 1.2安装moveit

Moveit可以参考下面的网址进行安装：

* [Moveit_install](http://docs.ros.org/en/melodic/api/moveit_tutorials/html/doc/getting_started/getting_started.html)。

### 1.4编译

以上执行成功后，可以执行如下指令进行功能包编译，首先需要构建工作空间，并将功能包文件导入工作空间下的src文件夹下，之后使用colcon build指令进行编译。

```ros
mkdir -p ~/ros_ws/src
cp -r rm_robot ~/ros_ws/src
cd ~/ros_ws
catkin build rm_msgs
source ~/ros_ws/devel/setup.bash
catkin build
source ~/ros_ws/devel/setup.bash
```

编译完成后即可进行功能包的运行操作。

## 2.功能运行

### 2.1功能包简介

1.	硬件驱动([rm_driver](https://github.com/RealManRobot/rm_robot/tree/V2.1.0/rm_driver))
* 该功能包为机械臂的ROS底层驱动功能包，其作用为订阅和发布机械臂底层相关话题信息。
5.	启动([rm_bringup](https://github.com/RealManRobot/rm_robot/tree/V2.1.0/rm_bringup))
* 该功能包为机械臂的节点启动功能包，其作用为快速启动多节点复合的机械臂功能。
6.	模型描述([rm_description](https://github.com/RealManRobot/rm_robot/tree/V2.1.0/rm_description))
* 该功能包为机械臂模型描述功能包，其作用为提供机械臂模型文件和模型加载节点，并为其他功能包提供机械臂关节间的坐标变换关系。
7.	ROS消息接口([rm_msgs](https://github.com/RealManRobot/rm_robot/tree/V2.1.0/rm_msgs))
* 该功能包为机械臂的消息文件功能包，其作用为提供机械臂适配ROS的所有控制消息和状态消息。
8.	moveit配置([rm_moveit_config](https://github.com/RealManRobot/rm_robot/tree/V2.1.0/rm_moveit_config))
* 该功能包为机械臂的moveit适配功能包，其作用为适配和实现各系列机械臂的moveit规划控制功能，主要包括虚拟机械臂控制和真实机械臂控制两部分控制功能。
9.	Moveit与硬件驱动通信连接([rm_config](https://github.com/RealManRobot/rm_robot/tree/V2.1.0/rm_control))
* 该功能包为底层驱动功能包（rm_driver）和moveit功能包（rm_moveit_config）之间的通信连接功能包，主要功能为将moveit的规划点进行细分然后通过透传的形式传递给底层驱动功能包控制机械臂运动。
10. Gazebo仿真机械臂控制([rm_gazebo](https://github.com/RealManRobot/rm_robot/tree/V2.1.0/rm_gazebo))
* 该功能包为gazebo仿真机械臂功能包，主要功能为在gazebo仿真环境中显示机械臂模型，可通过moveit对仿真的机械臂进行规划控制。
11. 使用案例([rm_demo](https://github.com/RealManRobot/rm_robot/tree/V2.1.0/rm_demo))
* 该功能包为机械臂的一些使用案例，主要功能为实现机械臂的一些基本的控制功能和运动功能的使用案例。
12. 技术文档([rm_doc](https://github.com/RealManRobot/rm_robot/tree/V2.1.0/rm_doc))
* 该功能包为介绍文档的功能包，其主要包括为对整体的功能包内容和使用方式进行总体介绍的文档和对每个功能包中的内容和使用方式进行详细介绍的文档。

以上为当前的十个功能包，每个功能包都有其独特的作用，详情请参考rm_doc功能包下的doc文件夹中的文档进行详细了解。

### 2.2运行虚拟机械臂

使用如下指令可以启动gazebo显示仿真机械臂，并同时启动moveit进行仿真机械臂的规划操控。

```ros
source ~/ros_ws/install/setup.bash
roslaunch rm_gazebo arm_<arm_type>_bringup_moveit.launch
```

启动成功后即可使用moveit进行虚拟机械臂的控制。

### 2.3控制真实机械臂

使用如下指令可以启动机械臂硬件驱动，并同时启动moveit进行机械臂的规划操控。

```ros
source ~/ros_ws/install/setup.bash
roslaunch rm_control rm_<arm_type>_control.launch
```

<arm_type>需要使用65、75、eco65、63字符进行代替，如使用RM65机械臂时，命令如下。

```ros
source ~/ros_ws/install/setup.bash
roslaunch rm_bringup rm_<arm_type>_robot.launch
```

启动成功后即可使用moveit进行真实机械臂的控制。

## 3.安全提示

在使用机械臂时，为保证使用者安全，请参考如下操作规范。
* 每次使用前检查机械臂的安装情况，包括固定螺丝是否松动，机械臂是否存在震动、晃动的情况。
* 机械臂在运行过程中，人不可处于机械臂落下或工作范围内，也不可将其他物体放到机械臂动作的安全范围内。
* 在不使用机械臂时，应将机械臂置于安全位置，防止震动时机械臂跌落而损坏或砸伤其他物体。
* 在不使用机械臂时应及时断开机械臂电源。
