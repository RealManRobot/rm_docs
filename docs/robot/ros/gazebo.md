# rm\_gazebo功能包说明

rm\_gazebo的主要作用为帮助我们实现机械臂Moveit规划的仿真功能，我们将在gazebo的仿真环境中搭建一个虚拟机械臂，然后通过Moveit控制gazebo中的虚拟机械臂，在下文中将通过以下几个方面详细介绍该功能包。

1. 功能包使用。
2. 功能包架构说明。

通过这部分内容的介绍可以帮助大家：

1. 了解该功能包的使用。
2. 熟悉功能包中的文件构成及作用。

源码地址：[https://github.com/RealManRobot/rm\_robot/tree/main/rm\_gazebo。](https://github.com/RealManRobot/rm_robot/tree/main/rm_gazebo。)

## 1.rm\_gazebo功能包运行

### 1.1控制仿真机械臂

在完成环境安装和功能包安装后，我们可以进行rm\_gazebo功能包的运行。

在运行之前首先我们需要修改有关配置文件，找到如下路径中的rm\_<arm\_type>\_moveit\_controller\_manager.launch.xml文件，将下方的红框代码取消注释，注释之前的yaml加载代码。

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Pd6l2YkePP4NO7Ma/img/be75baa9-494d-437a-9833-cdf5794fd3f3.png)

完成上面操作后，使用如下指令启动gazebo虚拟空间和虚拟机械臂。

```ROS
rm@rm-desktop:~$ roslaunch rm_gazebo arm_<arm_type>_bringup_moveit.launch
```

运行成功后将弹出如下界面。

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Pd6l2YkePP4NO7Ma/img/5d6e47c5-1a21-43a0-84ff-3c0cb887dd08.png)

弹出rviz的控制界面后就可以进行Moveit和gazebo的仿真控制了。

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Pd6l2YkePP4NO7Ma/img/7a690926-e620-4cb9-a915-ed0f96b1bfe4.png)

## 2.rm\_gazebo功能包架构说明

### 2.1功能包文件总览

当前rm\_gazebo功能包的文件构成如下。

```
    ├── CMakeLists.txt                         #编译规则文件
    ├── config
    │   ├── ECO65                            #ECO65的仿真配置文件
    │   │   ├── arm_gazebo_control.yaml
    │   │   ├── arm_gazebo_joint_states.yam     #关节状态控制器
    │   │   ├── rm_eco65_trajectory_control.yaml  #关节控制器
    │   │   └── trajectory_control.yaml
    │   ├── RM65                              #同ECO65的仿真配置文件
    │   │   ├── arm_gazebo_control.yaml
    │   │   ├── arm_gazebo_joint_states.yaml
    │   │   ├── rm_65_trajectory_control.yaml
    │   │   ├── rviz_gazebo.rviz
    │   │   └── trajectory_control.yaml
    │   ├── RM75                              #同ECO65的仿真配置文件
    │   │   ├── arm_gazebo_control.yaml
    │   │   ├── arm_gazebo_joint_states.yaml
    │   │   ├── rm_75_trajectory_control.yaml
    │   │   ├── rviz_gazebo_bak.rviz
    │   │   ├── rviz_gazebo.rviz
    │   │   └── trajectory_control.yaml
    │   └── RML63                              #同ECO65的仿真配置文件
    │       ├── arm_gazebo_control.yaml
    │       ├── arm_gazebo_joint_states.yaml
    │       ├── rml_63_trajectory_control.yaml
    │       ├── rviz_gazebo.rviz
    │       └── trajectory_control.yaml
    ├── launch
    │   ├── arm_63_bringup_moveit.launch             #RML63仿真gazebo启动文件
    │   ├── arm_65_bringup_moveit.launch             # RM65仿真gazebo启动文件
    │   ├── arm_75_bringup_moveit.launch             # RM75仿真gazebo启动文件
    │   ├── arm_eco65_bringup_moveit.launch          # ECO65仿真gazebo启动文件
    │   ├── ECO65                                  # ECO65相关启动文件
    │   │   ├── arm_eco65_trajectory_controller.launch   #仿真控制器launch文件
    │   │   ├── rm_eco65_arm_gazebo_states.launch    #仿真机械臂状态监控launch文件
    │   │   ├── rm_eco65_arm_trajectory_controller.launch
    │   │   └── rm_eco65_arm_world.launch       #仿真机械臂gazebo加载launch文件
    │   ├── RM65                              # RM65gazebo相关启动文件(同eco65)
    │   │   ├── arm_65_trajectory_controller.launch
    │   │   ├── rm_65_arm_gazebo_states.launch
    │   │   ├── rm_65_arm_trajectory_controller.launch
    │   │   └── rm_65_arm_world.launch
    │   ├── RM75                              # RM75gazebo相关启动文件(同eco65)
    │   │   ├── arm_75_trajectory_controller.launch
    │   │   ├── arm_gazebo_states.launch
    │   │   ├── arm_trajectory_controller.launch
    │   │   └── arm_world.launch
    │   └── RML63                             # RML63gazebo相关启动文件(同eco65)
    │       ├── arm_gazebo_states.launch
    │       ├── arm_trajectory_controller.launch
    │       ├── arm_world.launch
    │       └── rml_63_trajectory_controller.launch
    └── package.xml
```
