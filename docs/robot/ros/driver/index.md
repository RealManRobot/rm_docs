# <p class="hidden">ROS：</p>rm_driver 功能包说明

rm_driver 功能包在机械臂 ROS 功能包中是十分重要的，该功能包实现了通过 ROS 与机械臂进行通信控制机械臂的功能，在下文中将通过以下几个方面详细介绍该功能包。

- 功能包使用。
- 功能包架构说明。
- 功能包话题说明。

通过这三部分内容的介绍可以帮助大家：

- 了解该功能包的使用。
- 熟悉功能包中的文件构成及作用。
- 熟悉功能包相关的话题，方便开发和使用。

Github 代码链接：[https://github.com/RealManRobot/rm_robot/tree/main/rm_driver](https://github.com/RealManRobot/rm_robot/tree/main/rm_driver)

## 1.rm_driver 功能包使用

### 1.1  功能包基础使用

首先配置好环境完成连接后我们可以通过以下命令直接启动节点，控制机械臂。

当前的控制基于我们没有改变过机械臂的 IP 即当前机械臂的 IP 仍为 192.168.1.18。

```
roslaunch rm_driver rm_<arm_type>_driver.launch
```

在实际使用时需要将以上的`<arm_type>`更换为实际的机械臂型号，可选择的机械臂型号有 65、63、eco65、75、gen72。

底层驱动启动成功后，将显示以下画面。

![alt text](image.png)

其配置文件内容如下：

```
    <launch>
        <!-- 标签 -->
        <arg name="Arm_IP"  default="192.168.1.18"/>  <!-- 设置TCP连接时的IP -->
        <arg name="Arm_Port" default="8080"/>         <!-- 设置TCP连接时的端口 -->
        <arg name="Arm_Dof"  default="6"/>            <!-- 机械臂自由度设置 -->
        <arg name="Arm_Type" default="RML63"/>       <!-- 机械臂型号设置 -->
        <arg name="Follow" default="false"/>           <!-- 高低跟随设置 false：低跟随 true：高跟随 -->
        <arg name="Udp_IP" default="192.168.1.10"/>    <!-- 设置udp主动上报IP -->
        <arg name="Udp_Port" default="8089"/>         <!-- 设置udp主动上报端口 -->
        <arg name="Udp_cycle" default="5"/>           <!-- 设置udp主动上报周期（ms） 最低为5(200Hz)，需要为5的倍数 -->
        <arg name="Udp_force_coordinate" default="0"/>  <!-- 设置六维力参考坐标系 -->

        <!-- 启动机械臂底层驱动节点 -->
        <node name="rm_driver" pkg="rm_driver" type="rm_driver" output="screen" respawn="false">
            <!-- 机器人坐标frame -->
            <param name="Arm_IP"                value="$(arg Arm_IP)"/>
            <param name="Arm_Port"              value="$(arg Arm_Port)"/>
            <param name="Arm_Dof"               value="$(arg Arm_Dof)"/>
            <param name="Arm_Type"              value="$(arg Arm_Type)"/>
            <param name="Follow"                value="$(arg Follow)"/>
            <param name="Udp_IP"                value="$(arg Udp_IP)"/>
            <param name="Udp_Port"              value="$(arg Udp_Port)"/>
            <param name="Udp_cycle"             value="$(arg Udp_cycle)"/>
            <param name="Udp_force_coordinate"  value="$(arg Udp_force_coordinate)"/>
        </node>
    </launch>
```

其中主要有以下几个参数。

Arm_IP：改参数代表机械臂当前的 IP<br>
Arm_Port：设置 TCP 连接时的端口。<br>
Arm_Type：该参数代表机械臂当前的型号，可以选择的参数有 RM65（RM65 系列）、 ECO65（ECO65 系列）、RML63（RML63 系列）、RM75（RM75 系列）、GEN72（GEN72 系列）。<br>
Arm_Dof: 机械臂自由度设置。6 为 6 自由度，7 为 7 自由度。<br>
Follow：透传跟随效果参数。false：低跟随，true：高跟随。<br>
Udp_IP: 设置 udp 主动上报目标 IP。<br>
Udp_cycle：udp 主动上报周期，需要是 5 的倍数，最低为 5ms(200Hz)。 <br>
Udp_Port：设置 udp 主动上报端口。<br>
Udp_force_coordinate：设置系统受力时六维力的基准坐标，0 为传感器坐标系（原 始数据） 1 为当前工作坐标系 2 为当前工具坐标系。

再实际使用时，我们选择对应的 launch 文件启动时会自动选择正确的型号，若有特殊要求可在此处进行相应的参数修改，修改之后需要重新启动该节点，之后修改的配置才会生效。

## 2.rm_driver 功能包架构说明

### 2.1  功能包文件总览

当前 rm_driver 功能包的文件构成如下。

```
├── CMakeLists.txt              #编译规则文件
├── launch                      #节点启动+参数配置文件
│ ├── rm_63_driver.launch       #RML63 启动文件
│ ├── rm_65_driver.launch       #RM65 启动文件
│ ├── rm_75_driver.launch       #RM75 启动文件
│ ├── rm_eco65_driver.launch    #ECO65 启动文件
│ └── rm_gen72_driver.launch    #GEN72 启动文件
├── package.xml #依赖声明文件
└── src
├── cJSON.c                     #JSON 协议文件
├── cJSON.h                     #JSON 协议头文件
├── rm_driver.cpp               #rm_driver 节点源文件
└── rm_robot.h                  #rm_driver 节点头文件
```

## 3.rm_driver 话题说明

rm_driver 的话题较多，可以通过如下指令了解其话题信息。

![alt text](image-1.png)

![alt text](image-2.png)

![alt text](image-3.png)
