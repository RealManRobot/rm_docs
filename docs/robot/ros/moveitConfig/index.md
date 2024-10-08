# <p class="hidden">ROS：</p>rm_moveit_config说明

rm_moveit_config文件夹为实现moveit控制真实机械臂的功能包，该功能包的主要作用为调用官方的moveit框架，结合我们机械臂本身的URDF生成适配于我们机械臂的moveit的配置和启动文件，通过该功能包我们可以实现moveit控制虚拟机械臂和控制真实机械臂。

1. 功能包使用。
2. 功能包架构说明。
3. 功能包话题说明。

通过这三部分内容的介绍可以帮助大家：

1. 了解该功能包的使用。
2. 熟悉功能包中的文件构成及作用。
3. 熟悉功能包相关的话题，方便开发和使用。

代码链接：[https://github.com/RealManRobot/rm/robot/tree/main/rm/moveit/config](https://github.com/RealManRobot/rm_robot/tree/main/rm_moveit_config)

## 1.rm_moveit_config使用

### 1.1moveit控制虚拟机械臂

首先配置好环境完成连接后我们可以通过以下命令直接启动节点。

```
roslaunch rm_<arm_type>_moveit_config demo.launch
```

在实际使用时需要将以上的`<arm_type>`更换为实际的机械臂型号，可选择的机械臂型号有65、eco65、75、gen72六维力的型号有65_6f、eco65_6f、75_6f。

63机械臂需要使用以下指令启动，63的六维力型号为63_6f。
```
roslaunch rml_63_moveit_config demo.launch
```

例如65机械臂的启动命令：
```
roslaunch rm_65_moveit_config demo.launch
```

节点启动成功后，将显示以下画面。

![alt text](image.png)

接下来我们可以通过拖动控制球使机械臂到达目标位置，然后点击规划执行。

![alt text](image-1.png)

规划执行。

![alt text](image-2.png)

### 1.2 moveit控制真实机械臂

控制真实机械臂需要的控制指令相对较多一些，如下为详细的控制方式。

首先运行底盘驱动节点。

```
roslaunch rm_driver rm_<arm_type>_driver.launch
```

之后需要运行中间功能包rm_control的相关节点。
```
roslaunch rm_control rm_<arm_type>_control.launch
```

最终需要启动控制真实机械臂的moveit节点。

```
roslaunch rm_<arm_type>_moveit_config demo_realrobot.launch
```

注意以上指令均需要将<arm_type>更换为对应的机械臂型号，可选择的型号有65、eco65、75、65_6f、eco65_6f、75_6f、gen72。

注意在使用63时应使用如下启动指令，若使用六维力设备时，应将63更换为63_6f。

```
roslaunch rml_63_config demo_realrobot.launch
```

完成以上操作后将会出现以下界面，我们可以通过拖动控制球的方式控制机械臂运动。

![alt text](image-3.png)

## 2.rm_moveit_config架构说明

### 2.1功能包文件总览

当前rm_driver功能包的文件构成如下。
```
    ├── rm_65_moveit_config              #65机械臂moveit功能包
    │   ├── CMakeLists.txt                   #65机械臂moveit功能包编译规则
    │   ├── config                           #65机械臂moveit2功能包参数文件
    │   │   ├── cartesian_limits.yaml
    │   │   ├── chomp_planning.yaml
    │   │   ├── controllers_gazebo.yaml        #gazebo仿真控制器
    │   │   ├── controllers.yaml               #真实机械臂控制器
    │   │   ├── fake_controllers.yaml
    │   │   ├── joint_limits.yaml                #65机械臂关节限制
    │   │   ├── kinematics.yaml                #65机械臂运动学参数
    │   │   ├── ompl_planning.yaml
    │   │   ├── rm_65.srdf                      #65机械臂moveit控制配置文件
    │   │   ├── ros_controllers.yaml              #65机械臂运动控制器
    │   │   └── sensors_3d.yaml
    │   ├── launch
    │   │   ├── chomp_planning_pipeline.launch.xml
    │   │   ├── default_warehouse_db.launch
    │   │   ├── demo_gazebo.launch            #65仿真机械臂moveit2启动文件
    │   │   ├── demo.launch                    #65虚拟机械臂moveit2启动文件
    │   │   ├── demo_realrobot.launch           #65真实机械臂moveit2启动文件
    │   │   ├── fake_moveit_controller_manager.launch.xml
    │   │   ├── gazebo.launch
    │   │   ├── joystick_control.launch
    │   │   ├── move_group.launch
    │   │   ├── moveit_planning_execution.launch
    │   │   ├── moveit.rviz
    │   │   ├── moveit_rviz.launch
    │   │   ├── ompl_planning_pipeline.launch.xml
    │   │   ├── pilz_industrial_motion_planner_planning_pipeline.launch.xml
    │   │   ├── planning_context.launch
    │   │   ├── planning_pipeline.launch.xml
    │   │   ├── rm_65_moveit_controller_manager.launch(复件).xml
    │   │   ├── rm_65_moveit_controller_manager.launch.xml
    │   │   ├── rm_65_moveit_sensor_manager.launch.xml
    │   │   ├── ros_controllers.launch
    │   │   ├── run_benchmark_ompl.launch
    │   │   ├── sensor_manager.launch.xml
    │   │   ├── setup_assistant.launch
    │   │   ├── trajectory_execution.launch(复件).xml
    │   │   ├── trajectory_execution.launch.xml
    │   │   ├── warehouse.launch
    │   │   └── warehouse_settings.launch.xml
    │   └── package.xml
    ├── rm_75_moveit_config           #75机械臂moveit功能包（文件解释参考65）
    │   ├── CMakeLists.txt
    │   ├── config
    │   │   ├── cartesian_limits.yaml
    │   │   ├── chomp_planning.yaml
    │   │   ├── controllers_gazebo.yaml
    │   │   ├── controllers.yaml
    │   │   ├── fake_controllers.yaml
    │   │   ├── joint_limits.yaml
    │   │   ├── kinematics.yaml
    │   │   ├── ompl_planning.yaml
    │   │   ├── rm_75.srdf
    │   │   ├── ros_controllers.yaml
    │   │   └── sensors_3d.yaml
    │   ├── launch
    │   │   ├── chomp_planning_pipeline.launch.xml
    │   │   ├── default_warehouse_db.launch
    │   │   ├── demo_gazebo.launch
    │   │   ├── demo.launch
    │   │   ├── demo_realrobot.launch
    │   │   ├── fake_moveit_controller_manager.launch.xml
    │   │   ├── gazebo.launch
    │   │   ├── joystick_control.launch
    │   │   ├── move_group.launch
    │   │   ├── moveit_planning_execution.launch
    │   │   ├── moveit.rviz
    │   │   ├── moveit_rviz.launch
    │   │   ├── ompl_planning_pipeline.launch.xml
    │   │   ├── pilz_industrial_motion_planner_planning_pipeline.launch.xml
    │   │   ├── planning_context.launch
    │   │   ├── planning_pipeline.launch.xml
    │   │   ├── rm_75_moveit_controller_manager.launch(复件).xml
    │   │   ├── rm_75_moveit_controller_manager.launch.xml
    │   │   ├── rm_75_moveit_sensor_manager.launch.xml
    │   │   ├── ros_controllers.launch
    │   │   ├── run_benchmark_ompl.launch
    │   │   ├── sensor_manager.launch.xml
    │   │   ├── setup_assistant.launch
    │   │   ├── trajectory_execution.launch.xml
    │   │   ├── warehouse.launch
    │   │   └── warehouse_settings.launch.xml
    │   └── package.xml
    ├── rm_eco65_moveit_config       #ECO65机械臂moveit功能包（文件解释参考65）
    │   ├── CMakeLists.txt
    │   ├── config
    │   │   ├── cartesian_limits.yaml
    │   │   ├── chomp_planning.yaml
    │   │   ├── controllers_gazebo.yaml
    │   │   ├── controllers.yaml
    │   │   ├── fake_controllers.yaml
    │   │   ├── gazebo_controllers.yaml
    │   │   ├── gazebo_rm_eco65.urdf
    │   │   ├── joint_limits.yaml
    │   │   ├── kinematics.yaml
    │   │   ├── ompl_planning.yaml
    │   │   ├── rm_eco65.srdf
    │   │   ├── ros_controllers.yaml
    │   │   ├── sensors_3d.yaml
    │   │   ├── simple_moveit_controllers.yaml
    │   │   └── stomp_planning.yaml
    │   ├── launch
    │   │   ├── chomp_planning_pipeline.launch.xml
    │   │   ├── default_warehouse_db.launch
    │   │   ├── demo_gazebo.launch
    │   │   ├── demo.launch
    │   │   ├── demo_realrobot.launch
    │   │   ├── fake_moveit_controller_manager.launch.xml
    │   │   ├── gazebo.launch
    │   │   ├── joystick_control.launch
    │   │   ├── move_group.launch
    │   │   ├── moveit_planning_execution.launch
    │   │   ├── moveit.rviz
    │   │   ├── moveit_rviz.launch
    │   │   ├── ompl-chomp_planning_pipeline.launch.xml
    │   │   ├── ompl_planning_pipeline.launch.xml
    │   │   ├── pilz_industrial_motion_planner_planning_pipeline.launch.xml
    │   │   ├── planning_context.launch
    │   │   ├── planning_pipeline.launch.xml
    │   │   ├── rm_eco65_moveit_controller_manager.launch copy.xml
    │   │   ├── rm_eco65_moveit_controller_manager.launch.xml
    │   │   ├── rm_eco65_moveit_sensor_manager.launch.xml
    │   │   ├── ros_controllers.launch
    │   │   ├── ros_control_moveit_controller_manager.launch.xml
    │   │   ├── run_benchmark_ompl.launch
    │   │   ├── sensor_manager.launch.xml
    │   │   ├── setup_assistant.launch
    │   │   ├── simple_moveit_controller_manager.launch.xml
    │   │   ├── stomp_planning_pipeline.launch.xml
    │   │   ├── trajectory_execution.launch.xml
    │   │   ├── warehouse.launch
    │   │   └── warehouse_settings.launch.xml
    │   └── package.xml
    └── rml_63_moveit_config          #63机械臂moveit功能包（文件解释参考65）
        ├── CMakeLists.txt
        ├── config
        │   ├── cartesian_limits.yaml
        │   ├── chomp_planning.yaml
        │   ├── controllers_gazebo.yaml
        │   ├── controllers.yaml
        │   ├── fake_controllers.yaml
        │   ├── joint_limits.yaml
        │   ├── kinematics.yaml
        │   ├── ompl_planning.yaml
        │   ├── rml_63_description.srdf
        │   ├── ros_controllers.yaml
        │   └── sensors_3d.yaml
        ├── launch
        │   ├── chomp_planning_pipeline.launch.xml
        │   ├── default_warehouse_db.launch
        │   ├── demo_gazebo.launch
        │   ├── demo.launch
        │   ├── demo_realrobot.launch
        │   ├── fake_moveit_controller_manager.launch(复件).xml
        │   ├── fake_moveit_controller_manager.launch.xml
        │   ├── gazebo.launch
        │   ├── joystick_control.launch
        │   ├── move_group.launch
        │   ├── moveit_planning_execution.launch
        │   ├── moveit.rviz
        │   ├── moveit_rviz.launch
        │   ├── ompl_planning_pipeline.launch.xml
        │   ├── pilz_industrial_motion_planner_planning_pipeline.launch.xml
        │   ├── planning_context.launch
        │   ├── planning_pipeline.launch.xml
        │   ├── rml_63_description_moveit_controller_manager.launch.xml
        │   ├── rml_63_description_moveit_sensor_manager.launch.xml
        │   ├── ros_controllers.launch
        │   ├── run_benchmark_ompl.launch
        │   ├── sensor_manager.launch.xml
        │   ├── setup_assistant.launch
        │   ├── trajectory_execution.launch.xml
        │   ├── warehouse.launch
        │   └── warehouse_settings.launch.xml
        └── package.xml
```

## 3.rm_moveit_config话题说明

关于moveit的话题说明，为使其话题结构更加清晰明白在这里以节点话题的数据流图的方式进行查看和讲解。

在启动如上控制真实机器人的节点后可以运行如下指令查看当前话题的对接情况。

```
rosrun rqt_graph rqt_graph
```

运行成功后界面将显示如下画面。

![alt text](image-4.png)

该图反应了当前运行的节点与节点之间的话题通信关系，首先查看/rm_driver节点，该节点在moveit运行时订阅和发布的话题如下。

由图可知，rm_driver发布的/joint_states话题在持续被/robot_state_publiser节点和/move_group节点订阅。/robot_state_publiser接收/joint_states是为了持续发布关节间的TF变换；/move_group是moveit的相关节点，moveit在规划时也需要实时获取当前机械臂的关节状态信息，所以也订阅了该话题。

由图可知rm_driver还订阅了rm_control的/rm_driver/jointPos话题，该话题是机械臂透传功能的话题，通过该话题rm_control将规划的关节点位发布给rm_driver节点控制机械臂进行运动。

rm_control为rm_driver与moveit之间通信的桥梁，其通过/rm_group /follow_joint_trajectory动作与/move_group进行通信，获取规划点，并进行插值运算，将插值之后的数据通过透传的方式给到rm_driver。
