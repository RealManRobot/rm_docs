# rm\_control功能包说明

rm\_control功能包为实现moveit控制真实机械臂时所必须的一个功能包，该功能包的主要作用为将moveit规划好的路径点进行进一步的细分，将细分后的路径点以透传的方式给到rm\_driver，实现机械臂的规划运行。

1. 功能包使用。
2. 功能包架构说明。
3. 功能包话题说明。

通过这三部分内容的介绍可以帮助大家：

1. 了解该功能包的使用。
2. 熟悉功能包中的文件构成及作用。
3. 熟悉功能包相关的话题，方便开发和使用

代码链接：[https://github.com/RealManRobot/rm\_robot/tree/main/rm\_control。](https://github.com/RealManRobot/rm_robot/tree/main/rm_control。)

## 1.rm\_control功能包使用

### 1.1功能包基础使用

首先配置好环境完成连接后我们可以通过以下命令直接启动节点，运行rm\_control功能包。

```ros
rm@rm-desktop:~$ roslaunch rm_control rm_<arm_type>_control.launch
```

在实际使用时需要将以上的<arm\_type>更换为实际的机械臂型号，可选择的机械臂型号有65、63、eco65、75。

例如65机械臂的启动命令：

```ros
rm@rm-desktop:~$ roslaunch rm_control rm_65_control.launch
```

节点启动成功后，将显示以下画面。

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MAeqxYr88RVxO8j9/img/7a7b1903-6c1b-4d76-8336-9d80fe300dde.png)

在单独启动该功能包的节点时并不发挥作用，需要结合rm\_driver功能包和moveit的相关节点一起使用才能发挥作用，详细请查看[rm_moveit_config](../ros/rm_moveit_config_ROS.md)相关内容。

### 1.2功能包进阶使用

在rm\_control功能包中也有一些参数可以进行配置，可以直接在launch文件中进行了解查看。

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MAeqxYr88RVxO8j9/img/b9769251-2ad7-4088-b306-2b88aa42b99d.png)

当前该文件只有一个配置参数。

Arm\_Dof：代表机械臂的自由度，当为RM65、RML63、ECO65时应配置为6，当为RM75时应配置为7。

## 2.rm\_control功能包架构说明

### 2.1功能包文件总览

当前rm\_driver功能包的文件构成如下。

```
    ├── CMakeLists.txt                #编译规则文件
    ├── launch
    │   ├── rm_63_control.launch        #63启动文件
    │   ├── rm_65_control.launch        #65启动文件
    │   ├── rm_75_control.launch        #75启动文件
    │   └── rm_eco65_control.launch     #eco65启动文件
    ├── package.xml                  #依赖声明文件
    └── src
        ├── cubicSpline.h               #三次样条插值头文件
        └── rm_control.cpp              #代码源文件
    4. rm_control话题说明
    如下为该功能包的话题说明。
    /joint_states
    /rm_driver/ArmError
    /rm_driver/Clear_System_Err
    /rm_driver/JointPos
    /rm_group/follow_joint_trajectory/cancel
    /rm_group/follow_joint_trajectory/feedback
    /rm_group/follow_joint_trajectory/goal
    /rm_group/follow_joint_trajectory/result
    /rm_group/follow_joint_trajectory/status
    /rosout
    /rosout_agg
```

我们主要关注以下几个话题:

`Publishers`:代表其当前发布的话题，其最主要发布的话题为/rm\_driver/JointPos，我们通过该话题将细分后的点发布给rm\_driver节点，rm\_driver节点再通过透传的指令方式给到机械臂执行相对应的路径。

`Action Servers`:代表其接受和发布的动作信息，rm\_group/follow\_joint\_trajectory动作为rm\_control与moveit进行通信的桥梁，通过该动作rm\_control接收到moveit规划的路径，rm\_control会将这些路径进行进一步细分由以上话题给到rm\_driver。
