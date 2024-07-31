# rm\_example功能包说明

rm\_bringup功能包为实现了一些基本的机械臂功能，通过该功能包我们可以实现机械臂的一些基本的控制功能，还可以参考代码，实现其他的机械臂功能，在下文中将通过以下几个方面详细介绍该功能包。

1. 功能包使用。
2. 功能包架构说明。
3. 功能包话题说明。

通过这三部分内容的介绍可以帮助大家：

1. 了解该功能包的使用。
2. 熟悉功能包中的文件构成及作用。
3. 熟悉功能包相关的话题，方便开发和使用

源码地址：[https://github.com/RealManRobot/rm\_robot/tree/main/rm\_demo。](https://github.com/RealManRobot/rm_robot/tree/main/rm_demo。)

## 1.rm\_example功能包使用

### 1.1 更换工作坐标系

首先需要运行机械臂的底层驱动节点rm\_driver。

```
rm@rm-desktop:~$ roslaunch rm_driver rm_<arm_type>_driver.launch
```

在实际使用时需要将以上的<arm\_type>更换为实际的机械臂型号，可选择的机械臂型号有65、63、eco65、75。

例如65机械臂的启动命令：

```
rm@rm-desktop:~$ roslaunch rm_driver rm_65_driver.launch
```

节点启动成功后，需要执行如下指令运行我们更换工作坐标系的节点。

```
rm@rm-desktop:~$ rosrun rm_demo api_ChangeWorkFrame_demo
```

弹出以下指令代表更换成功。

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/8oLl9y4PrdVglapY/img/d564b490-314d-4845-9131-c440082e6bd4.png)

### 1.2 更换工具坐标系

首先需要运行机械臂的底层驱动节点rm\_driver。

```
rm@rm-desktop:~$ roslaunch rm_driver rm_<arm_type>_driver.launch
```

在实际使用时需要将以上的<arm\_type>更换为实际的机械臂型号，可选择的机械臂型号有65、63、eco65、75。

例如65机械臂的启动命令：

```
rm@rm-desktop:~$ roslaunch rm_driver rm_65_driver.launch
```

节点启动成功后，需要执行如下指令运行我们更换工作坐标系的节点。

```
rm@rm-desktop:~$ rosrun rm_demo api_ChangeToolFrame_demo
```

弹出以下指令代表更换成功。

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/8oLl9y4PrdVglapY/img/86f12eb0-f177-460f-bfa5-e92dacc41151.png)

### 1.3 得到当前的机械臂状态信息

首先需要运行机械臂的底层驱动节点rm\_driver。

```
rm@rm-desktop:~$ roslaunch rm_driver rm_<arm_type>_driver.launch
```

在实际使用时需要将以上的<arm\_type>更换为实际的机械臂型号，可选择的机械臂型号有65、63、eco65、75。

例如65机械臂的启动命令：

```
rm@rm-desktop:~$ roslaunch rm_driver rm_65_driver.launch
```

节点启动成功后，需要执行如下指令运行获得机械臂当前状态的节点。

```
rm@rm-desktop:~$ rosrun rm_demo api_Get_Arm_State_demo
```

弹出以下指令代表获取成功。

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/8oLl9y4PrdVglapY/img/ece847b4-db34-47f8-8d27-5453c22fc031.png)

界面中现实的为机械臂当前的角度信息，以及机械臂当前的末端坐标位置和欧拉角姿态信息。

### 1.4 机械臂MoveJ运动

通过如下指令可以控制机械臂进行MoveJ关节运动。

首先需要运行机械臂的底层驱动节点rm\_driver。

```
rm@rm-desktop:~$ roslaunch rm_driver rm_<arm_type>_driver.launch
```

在实际使用时需要将以上的<arm\_type>更换为实际的机械臂型号，可选择的机械臂型号有65、63、eco65、75。

例如65机械臂的启动命令：

```
rm@rm-desktop:~$ roslaunch rm_driver rm_65_driver.launch
```

节点启动成功后，需要执行如下指令控制机械臂进行运动。

```
rm@rm-desktop:~$ rosrun rm_demo api_moveJ_demo _Arm_Dof:=6
```

命令中的\_Arm\_Dof代表机械当前的自由度信息，可以选的参数有6和7

例如启动7轴的机械臂时需要使用如下指令。

```
rm@rm-desktop:~$ rosrun rm_demo api_moveJ_demo _Arm_Dof:=7
```

运行成功后，机械臂的关节将发生转动，且界面将显示如下信息。

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/8oLl9y4PrdVglapY/img/836688ec-48de-4eda-9ed9-f21edac7186d.png)

### 1.5 机械臂MoveJ\_P运动

通过如下指令可以控制机械臂进行MoveJ\_P关节运动。

首先需要运行机械臂的底层驱动节点rm\_driver。

```
rm@rm-desktop:~$ roslaunch rm_driver rm_<arm_type>_driver.launch
```

在实际使用时需要将以上的<arm\_type>更换为实际的机械臂型号，可选择的机械臂型号有65、63、eco65、75。

例如65机械臂的启动命令：

```
rm@rm-desktop:~$ roslaunch rm_driver rm_65_driver.launch
```

节点启动成功后，需要执行如下指令控制机械臂进行运动。

```
rm@rm-desktop:~$ rosrun rm_demo api_moveJ_P_demo
```

执行成功后界面将出现如下提示，并且机械臂运动到指定位姿。

 ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/8oLl9y4PrdVglapY/img/e3d4eea6-4399-40fa-a6ed-048c4b56ba13.png)

### 1.6 机械臂MoveL运动

通过如下指令可以控制机械臂进行MoveL关节运动。

首先需要运行机械臂的底层驱动节点rm\_driver。

```
rm@rm-desktop:~$ roslaunch rm_driver rm_<arm_type>_driver.launch
```

在实际使用时需要将以上的<arm\_type>更换为实际的机械臂型号，可选择的机械臂型号有65、63、eco65、75。

例如65机械臂的启动命令：

```
rm@rm-desktop:~$ roslaunch rm_driver rm_65_driver.launch
```

节点启动成功后，需要执行如下指令控制机械臂进行运动。

```
rm@rm-desktop:~$ rosrun rm_demo api_moveL_demo
```

执行成功后界面将出现如下提示，并且机械臂将进行两次运动，首先通过MoveJP运动到指定位姿，之后通过MoveL进行关节运动。

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/8oLl9y4PrdVglapY/img/704a5680-49f5-4eb7-addb-f64fba9909de.png)

### 1.7 机械臂场景规划

通过如下指令可以控制机械臂进行场景规划运动。

首先需要运行虚拟机械臂的moveit控制节点。

```
rm@rm-desktop:~$ roslaunch rm_<arm_type>_moveit_config demo.launch
```

在实际使用时需要将以上的<arm\_type>更换为实际的机械臂型号，可选择的机械臂型号有65、eco65、75，63机械臂的启动指令如下。

```
rm@rm-desktop:~$ roslaunch rml_63_moveit_config demo.launch
```

其中<arm\_type>可选择的型号有65、63、75、eco65。

例如65机械臂的启动命令：

```
rm@rm-desktop:~$ roslaunch rm_65_moveit_config demo.launch
```

节点启动成功后，弹出如下rviz界面。

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/8oLl9y4PrdVglapY/img/5078e263-2bc3-411a-b3db-d1dd051b4621.png)

因为本示例程序使用MoveItVisualTools插件控制程序运行，所以需要在rviz中添加RvizVisualToolsGui插件，点击rviz中Add New Panel。

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/8oLl9y4PrdVglapY/img/7f78f4d2-d367-4280-bed9-d13bb6f4bfe5.png)

在rviz中添加RvizVisualToolsGui

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/8oLl9y4PrdVglapY/img/c1c741e1-afe6-48a2-9249-54874ab5e84c.png)

打开一个新的终端，执行以下命令启动场景规划节点

```
rm@rm-desktop:~$ roslaunch rm_demo arm_<arm_type>_planning_scene_ros_api_demo
```

场景规划节点启动完成后提示点击rviz中RvizVisualToolsGui面板中的Next按钮开始运行程序。

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/8oLl9y4PrdVglapY/img/ec314293-9e55-4103-a952-942633089bcc.png)

多次点击Next，执行完成后，会退出场景规划节点。

### 1.8 机械臂避障规划

通过如下指令可以控制机械臂进行避障规划运动。

首先需要运行虚拟机械臂的moveit控制节点。

```
rm@rm-desktop:~$ roslaunch rm_<arm_type>_moveit_config demo.launch
```

在实际使用时需要将以上的<arm\_type>更换为实际的机械臂型号，可选择的机械臂型号有65、eco65、75，63机械臂的启动指令如下。

```
rm@rm-desktop:~$ roslaunch rml_63_moveit_config demo.launch
```

例如65机械臂的启动命令：

```
rm@rm-desktop:~$ roslaunch rm_65_moveit_config demo.launch
```

节点启动成功后，弹出如下rviz界面。

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/8oLl9y4PrdVglapY/img/da2797f3-aedb-490b-a1c5-25e50c792fb7.png)

再打开一个新的终端，执行以下命令启动避障规划节点：

```
rm@rm-desktop:~$ rosrun rm_demo rm_<arm_type>_moveit_obstacles_demo.py
```

其中<arm\_type>可选择的型号有65、63、75、eco65。

节点运行后，在rviz中可以看到场景中添加了一个table物体，然后机器人自动避开table运行到forward位姿，最后从forward位姿自动避开table回到zero位姿

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/8oLl9y4PrdVglapY/img/1f8f8124-1a25-4156-82eb-dafc2d181ec2.png)

### 1.9 机械臂pick and place

通过如下指令可以控制机械臂进行拾取运动。

首先需要运行虚拟机械臂的moveit控制节点。

```
rm@rm-desktop:~$ roslaunch rm_<arm_type>_moveit_config demo.launch
```

在实际使用时需要将以上的<arm\_type>更换为实际的机械臂型号，可选择的机械臂型号有65、eco65、75，63机械臂的启动指令如下。

```
rm@rm-desktop:~$ roslaunch rml_63_moveit_config demo.launch
```

例如65机械臂的启动命令：

```
rm@rm-desktop:~$ roslaunch rm_65_moveit_config demo.launch
```

节点启动成功后，弹出如下rviz界面。

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/8oLl9y4PrdVglapY/img/15bcf080-5db6-41ee-8ab6-907142265b98.png)

再打开一个新的终端，执行以下命令运行pick\_place\_demo节点

```
rm@rm-desktop:~$ rosrun rm_demo rm_<arm_type>_pick_place_demo
```

其中<arm\_type>可选择的型号有65、63、75、eco65。

节点运行后，在rviz中可以看到场景中添加了三个物体，分别代表两个桌子和一个抓取的目标物，然后机器人运动到目标物的位置将目标物附着到机器人上模拟抓取物体，接着进行运动规划将目标物体放置到另一个桌子上然后解除附着，最后机器人返回zero姿态。

## 2.rm\_example功能包架构说明

### 2.1功能包文件总览

当前rm\_driver功能包的文件构成如下。
```
    ├── CMakeLists.txt                             #编译规则文件
    ├── launch
    │   └── planning_scene_ros_api_demo.launch
    ├── package.xml
    ├── scripts
    │   ├── getHSV.py
    │   ├── moveit_obstacles_demo.py
    │   ├── moveit_plan_and_stop.py
    │   ├── rm_63_moveit_obstacles_demo.py        #63机械臂避障程序
    │   ├── rm_65_moveit_obstacles_demo.py        #65机械臂避障程序
    │   ├── rm_75_moveit_obstacles_demo.py        #75机械臂避障程序
    │   ├── rm_eco65_moveit_obstacles_demo.py     #eco65机械臂避障程序
    │   └── test_rgb.py
    └── src
        ├── api_ChangeToolName_demo.cpp         #更换工具坐标系源代码
        ├── api_ChangeWorkFrame_demo.cpp        #更换工作坐标系源代码
        ├── api_eco65_pick_place_demo.cpp         # pick_and_place源代码
        ├── api_getArmCurrentState.cpp             #获取机械臂状态
        ├── api_Get_Arm_State_demo.cpp           #获取机械臂状态
        ├── api_moveJ_demo.cpp                   #moveJ运动
        ├── api_moveJ_P_demo.cpp                 #moveJ_P运动
        ├── api_moveL_demo.cpp                   #moveL运动
        ├── api_rm65_pick_place_demo.cpp         # pick_and_place源代码
        ├── api_rm75_pick_place_demo.cpp         # pick_and_place源代码
        ├── api_rml63_pick_place_demo.cpp         # pick_and_place源代码
        ├── api_teach_demo.cpp                    # 示教源代码
        ├── arm_63_planning_scene_ros_api_demo.cpp #63场景规划源代码
        ├── arm_65_planning_scene_ros_api_demo.cpp #65场景规划源代码
        ├── arm_75_planning_scene_ros_api_demo.cpp #75场景规划源代码
        ├── arm_eco65_planning_scene_ros_api_demo.cpp #eco65场景规划源代码
        ├── planning_scene_ros_api_demo.cpp
        └── test_api_movel.cpp
```

## 3.rm\_example话题说明

### 3.1切换工作坐标系话题说明

以下为该节点的数据通信图：

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/8oLl9y4PrdVglapY/img/cd2813dd-683c-4b72-ad56-61d8aea022cf.png)

可以看到/api\_ChangeWorkFrame\_demo节点和/rm\_driver之间的主要通信话题为/rm\_driver/ChangeWorkFrame\_State和/rm\_driver/ChangeWorkFrame\_Cmd。/rm\_driver/ChangeWorkFrame\_Cmd为切换请求和切换目标坐标的发布，/rm\_driver/ChangeWorkFrame\_State为切换结果。

### 3.2切换工具坐标系话题说明

以下为该节点的数据通信图：

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/8oLl9y4PrdVglapY/img/92db79bd-cfe2-48d3-bdbf-4dfbfc0b9834.png)

可以看到/api\_ChangeToolName\_demo节点和/rm\_driver之间的主要通信话题为/rm\_driver/ChangeTool\_State和/rm\_driver/ChangeToolName\_Cmd。/rm\_driver/ChangeToolName\_Cmd为切换请求和切换目标坐标的发布，/rm\_driver/ChangeTool\_State为切换结果。

### 3.3rm\_get\_state话题说明

以下为该节点的数据通信图：

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/8oLl9y4PrdVglapY/img/b4e724f3-9512-4347-b138-616b4028dbd2.png)

可以看到/api\_Get\_Arm\_State\_demo节点和/rm\_driver之间的主要通信话题为/rm\_driver/Arm\_Current\_State和/rm\_driver/GetArmState\_Cmd。/rm\_driver/GetArmState\_Cmd为获取机械臂当前状态请求，/rm\_driver/Arm\_Current\_State为当前状态结果。

### 3.4movej\_demo话题说明

以下为该节点的数据通信图：

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/8oLl9y4PrdVglapY/img/5c0127ed-39f1-49ae-a2d2-0bfac2257f1d.png)

可以看到/api\_moveJ\_demo节点和/rm\_driver之间的主要通信话题为/rm\_driver/MoveJ\_Cmd和/rm\_driver/Plan\_State。/rm\_driver/MoveJ\_Cmd为控制机械臂运动的请求，将发布需要运动到的各关节的弧度信息，/rm\_driver/Plan\_State为运动结果。

### 3.5moveJ\_P\_demo话题说明

以下为该节点的数据通信图：

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/8oLl9y4PrdVglapY/img/be250e42-0eec-4534-8349-21d845d1ea8c.png)

可以看到/api\_moveJ\_P\_demo节点和/rm\_driver之间的主要通信话题为/rm\_driver/MoveJ\_P\_Cmd和/rm\_driver/Plan\_State。/rm\_driver/MoveJ\_P\_Cmd为控制机械臂运动规划的请求，将发布需要运动到的目标点的坐标，/rm\_driver/Plan\_State为运动结果。

### 3.6movel\_demo话题说明

以下为该节点的数据通信图：

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/8oLl9y4PrdVglapY/img/e13a081b-13e3-49ac-ae26-41d3198fea38.png)

可以看到/Movel\_demo\_node节点和/rm\_driver之间的主要通信话题为/rm\_driver/MoveJ\_P\_Cmd和/rm\_driver/MoveL\_Cmd还有/rm\_driver/Plan\_State。/rm\_driver/MoveJ\_P\_Cmd为控制机械臂运动规划的请求，将发布机械臂首先需要运动到的目标点的坐标， /rm\_driver/Plan\_State为运动结果，到达第一个点位后我们通过直线运动到达第二个点位，就可以通过/rm\_driver/MoveL\_Cmd发布第二个点位的位姿，/rm\_driver/Plan\_State话题代表运动的结果。

### 3.7机械臂场景规划

话题节点的通信图如下：

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/8oLl9y4PrdVglapY/img/2a584e42-1385-4cab-bf41-5d22d3c7e334.png)

可以看到/planning\_scene\_ros\_api\_demo节点和/move\_group之间的主要通信话题为/planning\_scene，其为添加障碍物的话题，详细信息可查看其源码，其中有较详细的说明。

### 3.8机械臂避障规划

话题节点通信如下。

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/8oLl9y4PrdVglapY/img/bfab8257-e93c-4ef0-aee8-3e14fa194f59.png)

### 3.9机械臂pick and place

话题节点通信如下。

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/8oLl9y4PrdVglapY/img/90bd8583-abd0-4109-91f5-f0098b03bf10.png)