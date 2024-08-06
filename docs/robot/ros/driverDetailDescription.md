# 1.简介

为了方便用户通过ROS1控制机械臂，睿尔曼提供了基于JSON的ROS1功能包，有关机械臂的控制细节想要了解的话也可以参考JSON的相关文档和说明，在实际使用机械臂时，用户可通过以太网口与机械臂建立通信，并控制机械臂。

# 2.错误代码

## 2.1控制器错误代码

|  **序号**  |  **错误代码（16进制）**  |  **错误内容**  |
| --- | --- | --- |
|  1  |  0x0000  |  系统正常  |
|  2  |  0x1001  |  关节通信异常  |
|  3  |  0x1002  |  目标角度超过限位  |
|  4  |  0x1003  |  该处不可达，为奇异点  |
|  5  |  0x1004  |  实时内核通信错误  |
|  6  |  0x1005  |  关节通信总线错误  |
|  7  |  0x1006  |  规划层内核错误  |
|  8  |  0x1007  |  关节超速  |
|  9  |  0x1008  |  末端接口板无法连接  |
|  10  |  0x1009  |  超速度限制  |
|  11  |  0x100A  |  超加速度限制  |
|  12  |  0x100B  |  关节抱闸未打开  |
|  13  |  0x100C  |  拖动示教时超速  |
|  14  |  0x100D  |  机械臂发生碰撞  |
|  15  |  0x100E  |  无该工作坐标系  |
|  16  |  0x100F  |  无该工具坐标系  |
|  17  |  0x1010  |  关节发生掉使能错误  |
|  18  |  0x1011  |  圆弧规划错误  |
|  19  |  0x1012  |  自碰撞错误  |
|  20  |  0x1013  |  碰撞到电子围栏错误（预留）  |
|  21  |  0x5001  |  预留  |
|  22  |  0x5002  |  预留  |
|  23  |  0x5003  |  控制器过温  |
|  24  |  0x5004  |  预留  |
|  25  |  0x5005  |  控制器过流  |
|  26  |  0x5006  |  控制器欠流  |
|  27  |  0x5007  |  控制器过压  |
|  28  |  0x5008  |  控制器欠压  |
|  29  |  0x5009  |  实时内核通讯错误  |

## 2.2 关节错误代码

|  **序号**  |  **错误代码（16进制）**  |  **错误内容**  |
| --- | --- | --- |
|  1  |  0x0000  |  关节正常  |
|  2  |  0x0001  |  FOC错误  |
|  3  |  0x0002  |  过压  |
|  4  |  0x0004  |  欠压  |
|  5  |  0x0008  |  过温  |
|  6  |  0x0010  |  启动失败  |
|  7  |  0x0020  |  编码器错误  |
|  8  |  0x0040  |  过流  |
|  9  |  0x0080  |  软件错误  |
|  10  |  0x0100  |  温度传感器错误  |
|  11  |  0x0200  |  位置超限错误  |
|  12  |  0x0400  |  关节ID非法  |
|  13  |  0x0800  |  位置跟踪错误  |
|  14  |  0x1000  |  电流检测错误  |
|  15  |  0x2000  |  抱闸打开失败  |
|  16  |  0x4000  |  位置指令阶跃警告  |
|  17  |  0x8000  |  多圈关节丢圈数  |
|  18  |  0xF000  |  通信丢帧  |

# 3.ROS功能包机械臂相关指令使用说明

该部分介绍如何来通过ROS话题查询和控制机械臂。

## 3.1关节配置

### 3.1.1设置关节使能状态

|  功能描述  |  设置关节使能状态  |
| --- | --- |
|  发布指令参数说明  |  Joint\_Enable.msg #对指定关节进行使能操作 uint8 joint\_num：#对应关节序号，</br>从基座到机械臂手爪端，序号依次为1～6 bool state：#true\-上使能，false\-掉使能  |
|  命令示例  |  rostopic pub /rm\_driver/Joint\_Enable rm\_msgs/Joint\_Enable "joint\_num: 1 state: true"  |
|  返回值参数说明  |  std\_msgs::Bool   true-设置成功，false-设置失败  |
|  返回值查看  |  rostopic echo /rm\_driver/set\_joint\_err\_clear\_result  |

## 3.2工具坐标系设置

### 3.2.1切换当前工具坐标系

|  功能描述  |  切换当前工作坐标系  |
| --- | --- |
|  发布指令参数说明  |  ROS自带msg std\_msgs::String  |
|  命令示例  |  rostopic pub /rm\_driver/ChangeToolName\_Cmd rm\_msgs/ChangeTool\_Name "toolname: '6WM'"  |
|  返回值参数说明  |  std\_msgs::Bool   true-设置成功，false-设置失败  |
|  返回值查看  |  rostopic echo /rm\_driver/ChangeTool\_State  |

## 3.3工作坐标系设置

### 3.3.1切换当前工作坐标系

|  功能描述  |  切换当前工作坐标系  |
| --- | --- |
|  发布指令参数说明  |  ROS自带msg std\_msgs::String  |
|  命令示例  |  rostopic pub /rm\_driver/ChangeWorkFrame\_Cmd rm\_msgs/ChangeWorkFrame\_Name "WorkFrame\_name: 'Base'"  |
|  返回值参数说明  |  std\_msgs::Bool   true-设置成功，false-设置失败  |
|  返回值查看  |  rostopic echo /rm\_driver/ChangeWorkFrame\_State  |

## 3.4坐标系查询

### 3.4.1查询当前工作坐标系

|  功能描述  |  查询当前工具坐标系  |
| --- | --- |
|  参数说明  |  ROS自带msg std\_msgs::Empty  |
|  命令示例  |  rostopic pub /rm\_driver/GetTotalWorkFrame std\_msgs/Empty "{}"  |
|  返回值参数说明  |  无  |
|  返回值查看  |  根据rm\_driver节点打印信息查看  |

## 3.5机械臂状态查询

### 3.5.1获取机械臂关节当前电流

|  功能描述  |  获取机械臂当前电流  |
| --- | --- |
|  参数说明  |  ROS自带msg std\_msgs::Empty  |
|  命令示例  |  rostopic pub /rm\_driver/GetCurrentJointCurrent std\_msgs/Empty "{}"  |
|  返回值参数说明  |  Joint\_Current.msg  float32\[\] joint\_current     #关节电流（单位：uA）  |
|  返回值查看  |  rostopic echo /rm\_driver/Joint\_Current  |

## 3.6机械臂运动规划

### 3.6.1关节空间运动

<table>
  <thead>
    <tr>
      <th>功能描述</th>
      <th>关节空间运动MOVEJ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>参数说明</td>
      <td>MoveJ.msg </br>float32[] joint：关节角度，单位：弧度。 </br>float32 speed：速度比例系数，0~1。 </br>uint8 trajectory_connect：可选参数，代表是否和下一条运动一起规划，</br>0代表立即规划，1代表和下一条轨迹一起规划，当为1时，轨迹不会立即执行。</td>
    </tr>
    <tr>
      <td>命令示例</td>
      <td>六自由度 rostopic pub /rm_driver/MoveJ_Cmd rm_msgs/MoveJ </br>"joint: [0, 0, 0, 0, 0, 0] speed: 0.2" </br>七自由度 rostopic pub /rm_driver/MoveJ_Cmd rm_msgs/MoveJ </br>"joint: [0, 0, 0, 0, 0, 0, 0] speed: 0.2 trajectory_connect: 0"</td>
    </tr>
    <tr>
      <td rowspan=2>返值</td>
      <td>std_msgs::Bool 成功返回：true；失败返回：false。</td>
    </tr>
    <tr>
      <td>rostopic echo /rm_driver/Plan_State</td>
    </tr>
  </tbody>
</table>

### 3.6.2笛卡尔空间直线运动

<table>
  <thead>
    <tr>
      <th>功能描述</th>
      <th>笛卡尔空间直线运动MOVEL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>参数说明</td>
      <td>MoveL.msg geometry_msgs/Pose </br>Pose：机械臂位姿，geometry_msgs/Pose类型，x、y、z坐标（float类型，单位：m）+四元数。 </br>float32 speed：速度比例系数，0~1。 </br>uint8 trajectory_connect：可选参数，代表是否和下一条运动一起规划，</br>0代表立即规划，1代表和下一条轨迹一起规划，当为1时，轨迹不会立即执行。</td>
    </tr>
    <tr>
      <td>命令示例</td>
      <td>rostopic pub /rm_driver/MoveL_Cmd rm_msgs/MoveL "Pose: </br>position: </br>x: 0.0 </br>y: 0.0 </br>z: 0.0 </br>orientation: </br>x: 0.0 </br>y: 0.0 </br>z: 0.0 </br>w: 0.0 </br>speed: 0.2 </br>trajectory_connect: 0"</td>
    </tr>
    <tr>
      <td rowspan=2>返值</td>
      <td>std_msgs::Bool 成功返回：true；失败返回：false。</td>
    </tr>
    <tr>
      <td>rostopic echo /rm_driver/Plan_State</td>
    </tr>
  </tbody>
</table>

### 3.6.3笛卡尔空间圆弧运动

<table>
  <thead>
    <tr>
      <th>功能描述</th>
      <th>笛卡尔空间圆弧运动MOVEC</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>参数说明</td>
      <td>MoveC.msg geometry_msgs/Pose </br>Mid_Pose：中间位姿，geometry_msgs/Pose类型，x、y、z坐标（float类型，单位：m）+四元数。 </br>geometry_msgs/Pose End_Pose：终点位姿，geometry_msgs/Pose类型，x、y、z坐标（float类型，单位：m）+四元数。 </br>float32 speed：速度比例系数，0~1。 uint16 loop：旋转圈数。 </br>uint8 trajectory_connect：可选参数，代表是否和下一条运动一起规划，</br>0代表立即规划，1代表和下一条轨迹一起规划，当为1时，轨迹不会立即执行。</td>
    </tr>
    <tr>
      <td>命令示例</td>
      <td>rostopic pub /rm_driver/MoveC_Cmd rm_msgs/MoveC "Mid_Pose: position: x: 0.2949 y: 0.1377 z: 0.1048 orientation: x: 0.05 y: -0.989 z: -0.1359 w: 0.0274 End_Pose: position: x: 0.2417 y: 0.0 z: 0.1213 orientation: x: 0.0136 y: 0.9993 z: 0.0241 w: 0.0261 speed: 0.5 trajectory_connect: 0"</td>
    </tr>
    <tr>
      <td rowspan=2>返值</td>
      <td>std_msgs::Bool 成功返回：true；失败返回：false。</td>
    </tr>
    <tr>
      <td>rostopic echo /rm_driver/Plan_State</td>
    </tr>
  </tbody>
</table>

### 3.6.4关节角度CANFD透传

<table>
  <thead>
    <tr>
      <th>功能描述</th>
      <th>关节角度CANFD透传</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>参数说明</td>
      <td>JointPos.msg </br>float32[] joint：关节角度，单位：弧度。 </br>float32 expand：拓展关节，单位：弧度。</td>
    </tr>
    <tr>
      <td>命令示例</td>
      <td>透传需要连续发送多个连续的点实现，单纯靠以下命令并不能实现功能，当前moveit控制使用了角度透传的控制方式。 rostopic pub /rm_driver/JointPos rm_msgs/JointPos "joint: [0, 0, 0, 0, 0, 0] expand: 0.0"</td>
    </tr>
    <tr>
      <td rowspan=2>返值</td>
      <td>成功：无返回值；失败返回：driver终端返回错误码。</td>
    </tr>
    <tr>
      <td></td>
    </tr>
  </tbody>
</table>

### 3.6.5位姿CANFD透传

<table>
  <thead>
    <tr>
      <th>功能描述</th>
      <th>位姿CANFD透传</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>参数说明</td>
      <td>CartePos.msg geometry_msgs/Pose </br>Pose：透传位姿，geometry_msgs/Pose类型，</br>x、y、z坐标（float类型，单位：m）+四元数。</td>
    </tr>
    <tr>
      <td>命令示例</td>
      <td>需要是大量（10个以上）位置连续的点，单纯靠以下命令并不能实现功能，以2ms以上的周期持续发布。 </br>
      rostopic pub /rm_driver/MoveP_Fd_Cmd rm_msgs/CartePos </br>
      "Pose: position:</br>
       x: 0.0 </br>y: 0.0 </br>z: 0.0 </br>
       orientation: </br>
       x: 0.0 </br>y: 0.0 </br>z: 0.0 </br>w: 0.0"</td>
    </tr>
    <tr>
      <td rowspan=2>返值</td>
      <td>成功：无返回值；失败返回：driver终端返回错误码。</td>
    </tr>
    <tr>
      <td></td>
    </tr>
  </tbody>
</table>

### 3.6.6关节空间规划到目标位姿

<table>
  <thead>
    <tr>
      <th>功能描述</th>
      <th>关节空间规划到目标位姿MOVEJP</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>参数说明</td>
      <td>MoveJ_P.msg geometry_msgs/Pose </br>Pose：目标位姿，x、y、z坐标（float类型，单位：m）+四元数。 </br>
      float32 speed：速度百分比例系数，0~1。 </br>
      uint8 trajectory_connect：可选参数，代表是否和下一条运动一起规划，0代表立即规划，1代表和下一条轨迹一起规划，当为1时，轨迹不会立即执行。</td>
    </tr>
    <tr>
      <td>命令示例</td>
      <td>rostopic pub /rm_driver/MoveJ_P_Cmd rm_msgs/MoveJ_P</br>
      "Pose: position: </br>
      x: 0.0 </br>
      y: 0.0 </br>
      z: 0.0 </br>
      orientation: </br>
      x: 0.0 </br>y: 0.0 </br>z: 0.0 </br>w: 0.0 </br>
      speed: 0.0 </br>
      trajectory_connect: 0"</td>
    </tr>
    <tr>
      <td rowspan=2>返值</td>
      <td>std_msgs::Bool 成功返回：true；失败返回：false。</td>
    </tr>
    <tr>
      <td>rostopic echo /rm_driver/Plan_State</td>
    </tr>
  </tbody>
</table>

## 3.7机械臂运动配置-步进指令

### 3.7.1关节步进

|  功能描述  |  关节步进  |
| --- | --- |
|  参数说明  |  Joint\_Step.msg </br>uint8 joint\_num      #要运动的关节 </br>float32 step\_angle    #步进角度（单位：角度） </br>float32 speed        #运动速度  |
|  命令示例  |  六自由度 rostopic pub /rm\_driver/SetJointStep rm\_msgs/Joint\_Step "joint\_num: 6 step\_angle: 90.0  speed: 0.2"七自由度 rostopic pub /rm\_driver/MoveJ\_Cmd rm\_msgs/MoveJ </br>"joint:  [0, 0, 0, 0, 0, 0, 0] speed: 0.2"  |
|  返回值参数说明  |  std\_msgs::Bool   成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/Plan\_State  |

## 3.8机械臂运动配置-运动指令

### 3.8.1轨迹急停

|  功能描述  |  轨迹急停  |
| --- | --- |
|  参数说明  |  Stop.msg bool state      #true生效 false 不生效  |
|  命令示例  |  rostopic pub /rm\_driver/Emergency\_Stop rm\_msgs/Stop "state: true"  |
|  返回值参数说明  |  std\_msgs::Bool   成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/Set\_Arm\_Stop\_Result  |

## 3.9机械臂运动配置-示教指令类

### 3.9.1关节示教

|  功能描述  |  关节示教  |
| --- | --- |
|  参数说明  |  Joint\_Teach.msg </br>int16 teach\_joint   示教控制关节 </br>string direction     关节转动方向 “pos”：正方向，“neg”：反方向 </br>int16 v            关节转动速度0-100  |
|  命令示例  |  rostopic pub /rm\_driver/Arm\_JointTeach std\_msgs/msg/Empty "{}"  |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/SetJointTeach\_Result  |

### 3.9.2位置示教

|  功能描述  |  位置示教  |
| --- | --- |
|  参数说明  |  Pos\_Teach.msg </br>string teach\_type   坐标轴，”x”,”y”,”z” </br>string direction     示教方向 “pos”：正方向，“neg”：反方向 </br>int16 v            关节转动速度0-100  |
|  命令示例  |  rostopic pub /rm\_driver/Arm\_PosTeach rm\_msgs/Pos\_Teach "teach\_type: 'z' direction: 'pos' v: 10"  |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/SetPosTeach\_Result  |

### 3.9.3姿态示教

|  功能描述  |  姿态示教  |
| --- | --- |
|  参数说明  |  Ort\_Teach.msg </br>string teach\_type   旋转所绕坐标轴，”rx”,“ry”,“rz” </br>string direction     示教方向 “pos”：正方向，“neg”：反方向 </br>int16 v            关节转动速度0-100  |
|  命令示例  |  rostopic pub /rm\_driver/Arm\_OrtTeach rm\_msgs/Ort\_Teach "teach\_type: 'rz' direction: 'pos' v: 10"  |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/SetOrtTeach\_Result  |

### 3.9.4示教停止

|  功能描述  |  示教停止  |
| --- | --- |
|  参数说明  |  Stop\_Teach.msg string command     停止指令“set\_stop\_teach”，运行以下指令即可  |
|  命令示例  |  rostopic pub /rm\_driver/Arm\_StopTeach rm\_msgs/Stop\_Teach "command: ''"  |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/SetStopTeach\_Result  |

## 3.10系统配置

### 3.10.1控制机械臂上电断电

|  功能描述  |  控制机械臂上电断电  |
| --- | --- |
|  参数说明  |  std\_msgs::Byte msg    1控制机械臂上电 0控制机械臂断电  |
|  命令示例  |  rostopic pub /rm\_driver/SetArmPower std\_msgs/Byte "data: 0"  |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/Set\_Arm\_Power\_Result  |

### 3.10.2读取软件版本号

|  功能描述  |  读取软件版本号  |
| --- | --- |
|  参数说明  |  std\_msgs::Byte msg    1控制机械臂上电 0控制机械臂断电  |
|  命令示例  |  rostopic pub /rm\_driver/Get\_Arm\_Software\_Version std\_msgs/Empty "{}"  |
|  返回值参数说明  |  Arm type is RML63-BI Arm version is 3b0146  |
|  返回值查看  |  rm\_driver节点终端  |

### 3.10.3清除系统错误

|  功能描述  |  清除系统错误  |
| --- | --- |
|  参数说明  |  std\_msgs::Empty msg  |
|  命令示例  |  rostopic pub /rm\_driver/Clear\_System\_Err std\_msgs/Empty "{}"  |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/System\_En\_State\_Result  |

## 3.11查询机械臂状态信息

### 3.11.1获取机械臂关节当前电流

|  功能描述  |  获取机械臂当前电流  |
| --- | --- |
|  参数说明  |  ROS自带msg std\_msgs::Empty  |
|  命令示例  |  rostopic pub /rm\_driver/GetCurrentJointCurrent std\_msgs/Empty "{}"  |
|  返回值参数说明  |  Joint\_Current.msg  float32\[\] joint\_current     #关节电流（单位：uA）  |
|  返回值查看  |  rostopic echo /rm\_driver/Joint\_Current  |

### 3.11.2查询机械臂关节角度

|  功能描述  |  查询机械臂关节角度  |
| --- | --- |
|  参数说明  |  std\_msgs::Empty msg  |
|  命令示例  |  rostopic pub /rm\_driver/GetArmJoint\_Cmd std\_msgs/Empty "{}"  |
|  返回值参数说明  |  sensor\_msgs::JointState  |
|  返回值查看  |  rostopic echo /joint\_states  |

### 3.11.3查询机械臂状态（弧度+四元数）

|  功能描述  |  查询机械臂状态  |
| --- | --- |
|  参数说明  |  GetArmState\_Command.msg string command  |
|  命令示例  |  rostopic pub /rm\_driver/GetArmState\_Cmd rm\_msgs/GetArmState\_Command "command: ''"  |
|  返回值参数说明  |  ArmState.msg </br>float32[] joint            #机械臂弧度信息 </br>geometry\_msgs/Pose Pose    #机械臂当前位姿（四元数） </br>uint16 arm\_err             #机械臂错误信息 </br>uint16 sys\_err             #系统错误信息 </br>uint8  dof                 #机械臂自由度  |
|  返回值查看  |  rostopic echo /rm\_driver/ArmCurrentState  |

### 3.11.4查询机械臂状态（角度+欧拉角）

|  功能描述  |  查询机械臂状态  |
| --- | --- |
|  参数说明  |  GetArmState\_Command.msg </br>string command  |
|  命令示例  |  rostopic pub /rm\_driver/GetArmState\_Cmd rm\_msgs/GetArmState\_Command "command: ''"  |
|  返回值参数说明  |  Arm\_Current\_State.msg </br>float32[] joint            #机械臂角度信息 </br>float32[6] Pose        #机械臂当前位姿（欧拉角） </br>uint16 arm\_err         #机械臂错误信息 </br>uint16 sys\_err          #系统错误信息 </br>uint8  dof                 #机械臂自由度  |
|  返回值查看  |  rostopic echo /rm\_driver/Arm\_Current\_State  |

## 3.12控制器IO配置及获取

### 3.12.1设置机械臂数字IO输出状态

|  功能描述  |  查询机械臂关节角度  |
| --- | --- |
|  参数说明  |  Arm\_Digital\_Output.msg </br>uint8 num         # IO端口号，范围：1~4 </br>bool state       # “state”：IO状态，1-输出高，0-输出低  |
|  命令示例  |  rostopic pub /rm\_driver/Arm\_Digital\_Output rm\_msgs/Arm\_Digital\_Output "num: 1 state: true"  |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/Set\_DO\_State\_Result  |

### 3.12.2获取所有IO输入状态

|  功能描述  |  查询机械臂关节角度  |
| --- | --- |
|  参数说明  |  IO\_Update.msg </br>uint8 type   1查询控制器IO状态; 2查询工具端IO状态  |
|  命令示例  |  rostopic pub /rm\_driver/IO\_Update rm\_msgs/IO\_Update "type: 1"  |
|  返回值参数说明  |  Arm\_IO\_State.msg </br>int8[4] Arm\_Digital\_Input  #0代表低；1代表高；-1代表为输出状态  |
|  返回值查看  |  rostopic echo /rm\_driver/Arm\_IO\_State  |

## 3.13工具端IO配置及获取

### 3.13.1设置工具端数字IO输出状态

|  功能描述  |  查询机械臂关节角度  |
| --- | --- |
|  参数说明  |  Tool\_Digital\_Output.msg </br>uint8 num        # IO端口号，范围：1~4 </br>bool state        # “state”：IO状态，1-输出高，0-输出低  |
|  命令示例  |  rostopic pub /rm\_driver/Tool\_Digital\_Output rm\_msgs/Tool\_Digital\_Output "num: 1 state: true"  |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/Set\_Tool\_DO\_State\_Result  |

### 3.13.2获取工具端数字IO状态

|  功能描述  |  查询机械臂关节角度  |
| --- | --- |
|  参数说明  |  IO\_Update.msg </br>uint8 type    1查询控制器IO状态; 2查询工具端IO状态  |
|  命令示例  |  rostopic pub /rm\_driver/IO\_Update rm\_msgs/IO\_Update "type: 2"  |
|  返回值参数说明  |  Tool\_IO\_State.msg </br>bool[2] Tool\_IO\_Mode  #数字I/O输入/输出状态  0-输入模式，1-输出模式 </br>bool[2] Tool\_IO\_State   #数字I/O电平状态      0-低，1-高  |
|  返回值查看  |  rostopic echo /rm\_driver/Tool\_IO\_State  |

## 3.14末端手爪控制（选配）

睿尔曼机械臂末端配备了因时机器人公司的EG2-4C2手爪，为了便于用户操作手爪，机械臂控制器对用户适配了手爪的ROS控制方式

### 3.14.1设置夹爪持续力控夹取

|  功能描述  |  设置夹爪力控夹取  |
| --- | --- |
|  参数说明  |  Gripper\_Pick.msg </br>#手爪以设定的速度力控夹取，当受力超过设定力后，停止运动 </br>uint16 speed         #1~1000,代表手爪开合速度，无量纲 </br>uint16 force         #1～1000,代表手爪夹持力，最大1.5kg  |
|  命令示例  |  rostopic pub /rm\_driver/Gripper\_Pick\_On rm\_msgs/Gripper\_Pick "speed: 100 force: 100"  |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/Set\_Gripper\_Result  |

### 3.14.2设置夹爪力控夹取

|  功能描述  |  设置夹爪持续力控夹取  |
| --- | --- |
|  参数说明  |  Gripper\_Pick.msg </br>#手爪以设定的速度力控夹取，当受力超过设定力后，停止运动 </br>uint16 speed         #1~1000,代表手爪开合速度，无量纲 </br>uint16 force         #1～1000,代表手爪夹持力，最大1.5kg  |
|  命令示例  |  rostopic pub /rm\_driver/Gripper\_Pick rm\_msgs/Gripper\_Pick "speed: 100 force: 100"  |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/Set\_Gripper\_Result  |

### 3.14.3夹爪到达指定位置

|  功能描述  |  夹爪到达指定位置  |
| --- | --- |
|  参数说明  |  Gripper\_Set.msg  </br>#设置手爪到固定位置，手爪到位置后或者所受力超过阈值后停止 </br>uint16 position   #手爪目标位置，范围：1～1000,代表手爪开口度：0～70mm  |
|  命令示例  |  rostopic pub /rm\_driver/Gripper\_Set rm\_msgs/Gripper\_Set "position: 100"  |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/Set\_Gripper\_Result  |

## 3.15末端六维力传感器的使用（选配）

睿尔曼RM-65F机械臂末端配备集成式六维力传感器，无需外部走线，用户可直接通过ROS话题对六维力进行操作。

### 3.15.1查询六维力数据

|  功能描述  |  查询六维力数据  |
| --- | --- |
|  参数说明  |  std\_msgs::Empty   |
|  命令示例  |  rostopic pub /rm\_driver/GetSixForce\_Cmd std\_msgs/Empty "{}"  |
|  返回值参数说明  |  Six\_Force.msg float32 force\_Fx float32 force\_Fy float32 force\_Fz float32 force\_Mx float32 force\_My float32 force\_Mz  |
|  返回值查看  |  rostopic echo /rm\_driver/GetSixForce     #六维力原始数据 </br>rostopic echo /rm\_driver/SixZeroForce   #传感器坐标系下的六维力数据 </br>rostopic echo /rm\_driver/WorkZeroForce #工作坐标系下的传感器数据 </br>rostopic echo /rm\_driver/ToolZeroForce #工具坐标系下的传感器数据  |

### 3.15.2清空六维力数据

|  功能描述  |  清空六维力数据  |
| --- | --- |
|  参数说明  |  std\_msgs::Empty  |
|  命令示例  |  rostopic pub /rm\_driver/ClearForceData\_Cmd std\_msgs/Empty "{}"  |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/ClearForceData\_result  |

### 3.15.3自动设置六维力重心参数

|  功能描述  |  自动设置六维力重心参数  |
| --- | --- |
|  参数说明  |  std\_msgs::Empty  |
|  命令示例  |  rostopic pub /rm\_driver/SetForceSensor\_Cmd std\_msgs/Empty "{}"  |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/ForceSensorSet\_result  |

### 3.15.4手动标定六维力数据

|  功能描述  |  手动标定六维力数据  |
| --- | --- |
|  参数说明  |  Manual\_Set\_Force\_Pose.msg </br>string pose pose1:位置1关节角度;  </br>pose2:位置2关节角度; </br>pose3:位置3关节角度;  </br>pose4:位置4关节角度; </br>int64\[\] joint   0.001角度，如90度为90000  |
|  命令示例  |  rostopic pub /rm\_driver/ManualSetForcePose\_Cmd rm\_msgs/Manual\_Set\_Force\_Pose </br>"pose: ' pose1' joint:  [0, 0, 0, 0, 90000, 0]"  |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  /rm\_driver/ForceSensorSet\_result  |

### 3.15.5停止标定力传感器重心

|  功能描述  |  停止标定力传感器重心  |
| --- | --- |
|  参数说明  |  std\_msgs::Empty  |
|  命令示例  |  rostopic pub /rm\_driver/StopSetForceSensor\_Cmd std\_msgs/Empty "{}"  |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/StopSetForceSensor\_result  |

## 3.16拖动示教

### 3.16.1拖动示教结束

|  功能描述  |  拖动示教结束  |
| --- | --- |
|  参数说明  |  std\_msgs::Empty  |
|  命令示例  |  rostopic pub /rm\_driver/StartMultiDragTeach\_result std\_msgs/Empty "{}"  |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/StopDragTeach\_result  |

### 3.16.2开启复合拖动示教

|  功能描述  |  拖动示教结束  |
| --- | --- |
|  参数说明  |  Start\_Multi\_Drag\_Teach.msg </br>uint8 mode 0-电流环模式，1-使用末端六维力，只动位置，</br>2-使用末端六维力，只动姿态，3-使用末端六维力，位置和姿态同时动  |
|  命令示例  |  rostopic pub /rm\_driver/StartMultiDragTeach\_Cmd rm\_msgs/Start\_Multi\_Drag\_Teach "mode: 0"  |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/StartMultiDragTeach\_result  |

### 3.16.3力位混合控制

|  功能描述  |  结束力位混合控制  |
| --- | --- |
|  参数说明  |  Set\_Force\_Position.msg </br>uint8 sensor    #传感器；0-一维力；1-六维力 </br>uint8 mode     #0-工作坐标系力控；1-工具坐标系 </br>uint8 direction   #力控方向；0-沿X轴；1-沿Y轴；2-沿Z轴；3-沿RX姿态方向；</br>4-沿RY姿态方向；5-沿RZ姿态方向 </br>int16 N         # N:力的大小，单位0.1N  |
|  命令示例  |  rostopic pub /rm\_driver/SetForcePosition\_Cmd rm\_msgs/Set\_Force\_Position "sensor: 0 mode: 0 direction: 0 N: 0"。  |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/SetForcePosition\_result  |

### 3.16.4结束力位混合控制

|  功能描述  |  结束力位混合控制  |
| --- | --- |
|  参数说明  |  std\_msgs::Empty  |
|  命令示例  |  rostopic pub /rm\_driver/StopForcePostion\_Cmd std\_msgs/Empty "{}"  |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/StopForcePostion\_result  |

## 3.17末端五指灵巧手控制（选配）

睿尔曼机械臂末端配备了五指灵巧手，可通过ROS对灵巧手进行设置。

### 3.17.1设置灵巧手手势序号

|  功能描述  |  结束力位混合控制  |
| --- | --- |
|  参数说明  |  Hand\_Posture.msg </br>#设置灵巧手手势 </br>uint16 posture\_num    #预先保存在灵巧手内的手势序号，范围：1~40  |
|  命令示例  |  rostopic pub /rm\_driver/Hand\_SetPosture rm\_msgs/Hand\_Posture "posture\_num: 0"  |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/Set\_Hand\_Posture\_Result  |

### 3.17.2设置灵巧手动作序列

|  功能描述  |  设置灵巧手动作序列  |
| --- | --- |
|  参数说明  |  Hand\_Seq.msg </br>#设置灵巧手动作序列 </br>uint16 seq\_num   #预先保存在灵巧手内的序列序号，范围：1~40  |
|  命令示例  |  rostopic pub /rm\_driver/Hand\_SetSeq rm\_msgs/Hand\_Seq "seq\_num: 0"  |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/Set\_Hand\_Seq\_Result  |

### 3.17.3设置灵巧手各自由度角度

|  功能描述  |  设置灵巧手各自由度角度  |
| --- | --- |
|  参数说明  |  Hand\_Angle.msg </br>#设置灵巧手角度，灵巧手有 6 个自由度，</br>从 1~6 分别为小拇指，无名指，中指，食指，大拇指弯曲，大拇指旋转 </br>int16[6] hand\_angle  #手指角度数组，范围：0~1000.另外，-1 代表该自由度不执行任何操作，保持当前状态  |
|  命令示例  |  rostopic pub /rm\_driver/Hand\_SetAngle rm\_msgs/Hand\_Angle </br>"hand\_angle: [0, 0, 0, 0, 0, 0]" |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/Set\_Hand\_Angle\_Result  |

### 3.17.4设置灵巧手速度

|  功能描述  |  设置灵巧手速度  |
| --- | --- |
|  参数说明  |  Hand\_Speed.msg </br>#设置灵巧手关节速度 </br>uint16 hand\_speed   #手指速度，范围：1~1000  |
|  命令示例  |  rostopic pub /rm\_driver/Hand\_SetSpeed rm\_msgs/Hand\_Speed "hand\_speed: 0"  |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/Set\_Hand\_Speed\_Result  |

### 3.17.5设置灵巧手力阈值

|  功能描述  |  设置灵巧手力阈值  |
| --- | --- |
|  参数说明  |  Hand\_Force.msg </br>#设置灵巧手关节力阈值 uint16 hand\_force</br>#手指力，范围：1~1000  |
|  命令示例  |  rostopic pub /rm\_driver/Hand\_SetForce rm\_msgs/Hand\_Force "hand\_force: 0"  |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/Set\_Hand\_Force\_Result  |

## 3.18透传力位混合控制补偿模式

针对睿尔曼带一维力和六维力版本的机械臂，用户除了可直接使用示教器调用底层的力位混合控制模块外，还可以将自定义的轨迹以周期性透传的形式结合底层的力位混合控制算法进行补偿。

### 3.18.1开启透传力位混合控制补偿模式

|  功能描述  |  开启透传力位混合控制补偿模式  |
| --- | --- |
|  参数说明  |  std\_msgs::Empty  |
|  命令示例  |  rostopic pub /rm\_driver/StartForcePositionMove\_Cmd std\_msgs/Empty "{}"  |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/StartForcePositionMove\_result  |

### 3.18.2透传力位混合控制补偿(位姿)

|  功能描述  |  透传力位混合控制补偿(位姿)  |
| --- | --- |
|  参数说明  |  Force\_Position\_Move\_Pose.msg  </br>geometry\_msgs/Pose Pose   #四元数信息 </br>uint8 sensor     #所使用传感器类型，0-一维力，1-六维力 </br>uint8 mode      #模式，0-沿工作坐标系，1-沿工具端坐标系 </br>uint8 dir   #力控方向，0~5分别代表X/Y/Z/Rx/Ry/Rz，其中一维力类型时默认方向为Z方向 </br>int16 force     #力的大小，精度0.1N或者0.1Nm  |
|  命令示例  |  rostopic pub /rm\_driver/ForcePositionMovePose\_Cmd rm\_msgs/Force\_Position\_Move\_Pose "Pose:   position: {x: 0.0, y: 0.0, z: 0.0}   orientation: {x: 0.0, y: 0.0, z: 0.0, w: 0.0} sensor: 1 mode: 0 dir: 0 force: 0"  |
|  返回值参数说明  |  成功：无返回，失败：报错信息查看rm\_driver节点  |
|  返回值查看  |   |

### 3.18.3透传力位混合控制补偿(弧度)

|  功能描述  |  透传力位混合控制补偿(弧度)  |
| --- | --- |
|  参数说明  |  Force\_Position\_Move\_Joint.msg  </br>float32\[\] joint     #弧度信息 </br>uint8 sensor      #所使用传感器类型，0-一维力，1-六维力 </br>uint8 mode    #模式，0-沿工作坐标系，1-沿工具端坐标系 </br>uint8 dir        #力控方向，0~5分别代表X/Y/Z/Rx/Ry/Rz，其中一维力类型时默认方向为Z方向 </br>int16 force      #力的大小，精度0.1N或者0.1Nm </br>uint8 dof       #机械臂自由度信息  |
|  命令示例  |  rostopic pub /rm\_driver/ForcePositionMoveJiont\_Cmd rm\_msgs/Force\_Position\_Move\_Joint "joint: \[0, 0, 0, 0, 0, 0\] sensor: 0 mode: 0 dir: 0 force: 0 dof: 0"  |
|  返回值参数说明  |  成功：无返回，失败：报错信息查看rm\_driver节点  |
|  返回值查看  |   |

### 3.18.4开启透传力位混合控制补偿模式

|  功能描述  |  开启透传力位混合控制补偿模式  |
| --- | --- |
|  参数说明  |  std\_msgs::Empty  |
|  命令示例  |  rostopic pub /rm\_driver/StopForcePositionMove\_Cmd std\_msgs/Empty "{}"  |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/StopForcePositionMove\_result  |

## 3.19升降机构

睿尔曼机械臂可集成自主研发升降机构。

### 3.19.1升降机构速度开环控制

|  功能描述  |  升降机构速度开环控制  |
| --- | --- |
|  参数说明  |  Lift\_Speed.msg </br>#升降机构速度开环控制 </br>#Speed < 0:升降机构向下运动 #Speed > 0:升降机构向上运动 </br>#Speed = 0:升降机构停止运动 int16 speed         </br>#速度百分比，-100~100  |
|  命令示例  |  rostopic pub /rm\_driver/Lift\_SetSpeed rm\_msgs/Lift\_Speed "speed: 0"  |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/Set\_Lift\_Speed\_Result  |

### 3.19.2升降机构位置闭环控制

|  功能描述  |  升降机构位置闭环控制  |
| --- | --- |
|  参数说明  |  Lift\_Height.msg   </br>#升降机构运行到指定高度 </br>uint16 height   #目标高度，单位 mm，范围：0~2600 </br>uint16 speed   #速度百分比，1~100  |
|  命令示例  |  rostopic pub /rm\_driver/Lift\_SetHeight rm\_msgs/Lift\_Height "height: 0 speed: 0"  |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/Plan\_State  |

### 3.19.3获取升降机构状态

|  功能描述  |  获取升降机构状态  |
| --- | --- |
|  参数说明  |  std\_msgs::Empty  |
|  命令示例  |  rostopic pub /rm\_driver/get\_lift\_state\_cmd std\_msgs/msg/Empty "{}"  |
|  返回值参数说明  |  LiftState.msg </br>int16 height   #当前高度 </br>int16 current  #当前电流 </br>uint16 err\_flag #驱动错误代码 </br>byte mode  #当前升降状态，0-空闲，1-正方向速度运动，2-正方向位置运动，3-负方向速度运动，4-负方向位置运动  |
|  返回值查看  |  rostopic echo /rm\_driver/LiftState  |

## 3.20机械臂状态主动上报

### 3.20.1设置 UDP 机械臂状态主动上报配置

|  功能描述  |  设置UDP 机械臂状态主动上报配置  |
| --- | --- |
|  参数说明  |  Set\_Realtime\_Push.msg  </br>uint16 cycle：设置广播周期，为5ms的倍数（默认1即1\*5=5ms,200Hz）。 </br>uint16 port：设置广播的端口号（默认8089）。 </br>uint16 force\_coordinate：设置系统外受力数据的坐标系(仅带有力传感器的机械臂支持)。 </br>string ip：设置自定义的上报目标IP 地址（默认192.168.1.10）。  |
|  命令示例  |  rostopic pub /rm\_driver/Set\_Realtime\_Push rm\_msgs/Set\_Realtime\_Push "cycle: 1 </br>port: 8089 </br>force\_coordinate: 0 </br>ip: '192.168.1.10'"  |
|  返回值参数说明  |  成功返回：true；失败返回：false，driver终端返回错误码。  |
|  返回值查看  |  rostopic echo /rm\_driver/Set\_Realtime\_Push\_Result  |

### 3.20.2查询 UDP 机械臂状态主动上报配置

|  功能描述  |  设置UDP 机械臂状态主动上报配置  |
| --- | --- |
|  参数说明  |  std\_msgs/Empty  |
|  命令示例  |  rostopic pub /rm\_driver/Get\_Realtime\_Push std\_msgs/Empty "{}"  |
|  返回值参数说明  |  成功返回：true；失败返回：false，driver终端返回错误码。  |
|  返回值查看  |  rostopic echo /rm\_driver/Get\_Realtime\_Push\_Result  |

### 3.20.3UDP机械臂状态主动上报

#### 六维力

|  功能描述  |  六维力  |
| --- | --- |
|  参数说明  |  Six\_Force.msg </br>float32 force\_fx：沿x轴方向受力大小。 </br>float32 force\_fy：沿y轴方向受力大小。 </br>float32 force\_fz：沿z轴方向受力大小。 </br>float32 force\_mx：沿x轴方向转动受力大小。 </br>float32 force\_my：沿y轴方向转动受力大小。 </br>float32 force\_mz：沿z轴方向转动受力大小。  |
|  订阅命令  |  rostopic echo /rm\_driver/UdpSixForce  |

#### 一维力

|  功能描述  |  一维力  |
| --- | --- |
|  参数说明  |  Six\_Force.msg </br>float32 force\_fx：沿x轴方向受力大小。 </br>float32 force\_fy：沿y轴方向受力大小。 </br>float32 force\_fz：沿z轴方向受力大小。（仅该数值有效） </br>float32 force\_mx：沿x轴方向转动受力大小。 </br>float32 force\_my：沿y轴方向转动受力大小。 </br>float32 force\_mz：沿z轴方向转动受力大小。  |
|  订阅命令  |  rostopic echo /rm\_driver/UdpSixForce  |

#### 机械臂错误

|  功能描述  |  机械臂错误  |
| --- | --- |
|  参数说明  |  std\_msgs::msg::UInt16 </br>uint16 data：机械臂报错信息。  |
|  订阅命令  |  rostopic echo /rm\_driver/ArmError  |

#### 系统错误

|  功能描述  |  系统错误  |
| --- | --- |
|  参数说明  |  std\_msgs::msg::UInt16</br> uint16 data：系统报错信息。  |
|  订阅命令  |  rostopic echo/rm\_driver/SysError  |

#### 关节错误

|  功能描述  |  关节错误  |
| --- | --- |
|  参数说明  |  Joint\_Error\_Code.msg</br> uint16\[\] joint\_error   #每个关节报错信息。  |
|  订阅命令  |  rostopic echo /rm\_driver/JointErrorCode  |

#### 机械臂弧度数据

|  功能描述  |  机械臂弧度数据  |
| --- | --- |
|  参数说明  |  sensor\_msgs::msg::JointState</br>builtin\_interfaces/Time stamp</br>int32 sec：时间信息，秒。</br>uint32 nanosec：时间信息，纳秒。  </br>string frame\_id：坐标系名称。</br> string\[\] name：关节名称。</br> float64\[\] position：关节弧度信息。 </br>float64\[\] velocity：关节速度信息。（暂未使用） </br>float64\[\] effort：关节受力信息。（暂未使用）  |
|  订阅命令  |  rostopic echo /joint\_states  |

#### 位姿信息

|  功能描述  |  位姿信息  |
| --- | --- |
|  参数说明  |  geometry\_msgs::msg::Pose Point </br>position：机械臂当前坐标信息。   </br>float64 x    </br>float64 y    </br>float64 z </br>Quaternion orientation：机械臂当前姿态信息。    </br>float64 x 0    </br>float64 y 0   </br>float64 z 0     </br>float64 w 1  |
|  订阅命令  |  rostopic echo /rm\_driver/Pose\_State  |

#### 当前六维力传感器系统外受力数据

|  功能描述  |  当前六维力传感器系统外受力数据  |
| --- | --- |
|  参数说明  |  Six\_Force.msg </br>float32 force\_fx：当前传感器沿x轴方向受外力大小。 </br>float32 force\_fy：当前传感器沿y轴方向受外力大小。 </br>float32 force\_fz：当前传感器沿z轴方向受外力大小。</br> float32 force\_mx：当前传感器沿x轴方向转动受外力大小。</br> float32 force\_my：当前传感器沿y轴方向转动受外力大小。</br> float32 force\_mz：当前传感器沿z轴方向转动受外力大小。  |
|  订阅命令  |  rostopic echo /rm\_driver/UdpSixZeroForce  |

#### 当前一维力传感器系统外受力数据

|  功能描述  |  当前一维力传感器系统外受力数据  |
| --- | --- |
|  参数说明  |  Six\_Force.msg </br>float32 force\_fx：当前传感器沿x轴方向受外力大小。</br> float32 force\_fy：当前传感器沿y轴方向受外力大小。</br> float32 force\_fz：当前传感器沿z轴方向受外力大小。（仅该数据有效） </br>float32 force\_mx：当前传感器沿x轴方向转动受外力大小。 </br>float32 force\_my：当前传感器沿y轴方向转动受外力大小。</br> float32 force\_mz：当前传感器沿z轴方向转动受外力大小。  |
|  订阅命令  |  rostopic echo /rm\_driver/UdpSixZeroForce  |

#### 系统外受力数据参考坐标系

|  功能描述  |  系统外受力数据参考坐标系  |
| --- | --- |
|  参数说明  |  std\_msgs::UInt16 </br>uint16 data：系统外受力数据的坐标系，0 为传感器坐标系 </br>1 为当前工作坐标系 </br>2 为当前工具坐标系。</br>该数据会影响一维力和六维力传感器系统外受力数据的参考坐标系  |
|  订阅命令  |  rostopic echo /rm\_driver/Udp\_Coordinate |