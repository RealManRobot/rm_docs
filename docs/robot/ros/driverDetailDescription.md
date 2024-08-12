# 调用机械臂JSON协议

为了方便用户通过ROS1控制机械臂，睿尔曼提供了基于JSON的ROS1功能包，可以通过ROS话题查询和控制机械臂。在实际使用机械臂时，用户可通过以太网口与机械臂建立通信控制机械臂。

## 1.控制器错误代码

|  **序号**  |  **错误代码（16进制）**  |  **错误内容**  |
| :--- | :--- | :--- |
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

## 2.关节错误代码

|  **序号**  |  **错误代码（16进制）**  |  **错误内容**  |
| :--- | :--- | :--- |
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

## 3.设置关节使能状态

**参数说明：**
`Joint_Enable.msg` 对指定关节进行使能操作

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`joint_num`|   `uint8`   | 对应关节序号，从基座到机械臂手爪端，序号依次为1～6          |
|`state`|   `bool`   | true-上使能，false-掉使能          |

**使用示例：**

```json
rostopic pub /rm_driver/Joint_Enable rm_msgs/Joint_Enable "joint_num: 1 state: true"
```

**返回示例：**

```json
rostopic echo /rm_driver/set_joint_err_clear_result
```

**参数说明：**
| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |`ture`：设置成功；`false`：设置失败。 |

## 3.2切换当前工具坐标系

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `String`   | ROS自带msg          |

**使用示例：**

```json
rostopic pub /rm_driver/ChangeToolName_Cmd rm_msgs/ChangeTool_Name "toolname: '6WM'"
```

**返回示例：**

```json
rostopic echo /rm_driver/ChangeTool_State
```

**参数说明：**
| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |`ture`：设置成功；`false`：设置失败。 |

## 3.3切换当前工作坐标系

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `String`   | ROS自带msg          |

**使用示例：**

```json
rostopic pub /rm_driver/ChangeWorkFrame_Cmd rm_msgs/ChangeWorkFrame_Name "WorkFrame_name: 'Base'"
```

**返回示例：**

```json
rostopic echo /rm_driver/ChangeWorkFrame_State
```

**参数说明：**
| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |`ture`：设置成功；`false`：设置失败。 |

## 3.4查询当前工作坐标系

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   | ROS自带msg          |

**使用示例：**

```json
rostopic pub /rm_driver/GetTotalWorkFrame std_msgs/Empty "{}"
```

**返回示例：**
根据rm_driver节点打印信息查看

## 3.5获取机械臂关节当前电流

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `String`   | ROS自带msg          |

**使用示例：**

```json
rostopic pub /rm_driver/GetCurrentJointCurrent std_msgs/Empty "{}"
```

**返回示例：**

```json
rostopic echo /rm_driver/Joint_Current
```

**参数说明：**
`Joint_Current.msg`
| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`joint_current`     | `float32[]` |关节电流（单位：uA） |

## 3.6机械臂运动规划

### 3.6.1关节空间运动`MoveJ.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`joint`|   `float32[]`   | 关节角度，单位：弧度。          |
|`speed`|   `float32`   | 速度比例系数，0~1。          |
|`trajectory_connect`|   `uint8`   | 可选参数，代表是否和下一条运动一起规划，</br>0代表立即规划，</br>1代表和下一条轨迹一起规划，当为1时，轨迹不会立即执行。          |


**使用示例：**

六自由度
```json
rostopic pub /rm_driver/MoveJ_Cmd rm_msgs/MoveJ "joint: [0, 0, 0, 0, 0, 0] speed: 0.2"
```

七自由度
```json
rostopic pub /rm_driver/MoveJ_Cmd rm_msgs/MoveJ "joint: [0, 0, 0, 0, 0, 0, 0] speed: 0.2 trajectory_connect: 0"
```

**返回示例：**

```json
rostopic echo /rm_driver/Plan_State
```

**参数说明：**
| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |`ture`：设置成功；`false`：设置失败。 |

### 3.6.2笛卡尔空间直线运动`MoveL.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`Pose`|   `geometry_msgs/Pose`   | 机械臂位姿，x、y、z坐标（float类型，单位：m）+四元数。          |
|`speed`|   `float32`   | 速度比例系数，0~1。          |
|`trajectory_connect`|   `uint8`   | 可选参数，代表是否和下一条运动一起规划，</br>0代表立即规划，</br>1代表和下一条轨迹一起规划，当为1时，轨迹不会立即执行。          |

**使用示例：**

```json
rostopic pub /rm_driver/MoveL_Cmd rm_msgs/MoveL "Pose:
position:
  x: 0.0
  y: 0.0
  z: 0.0
orientation:
  x: 0.0
  y: 0.0
  z: 0.0
  w: 0.0
speed: 0.2
trajectory_connect: 0"
```

**返回示例：**

```json
rostopic echo /rm_driver/Plan_State
```

**参数说明：**
| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |`ture`：设置成功；`false`：设置失败。 |

### 3.6.3笛卡尔空间圆弧运动`MoveC.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`Mid_Pose`|   `geometry_msgs/Pose`   | 中间位姿，x、y、z坐标（float类型，单位：m）+四元数。          |
|`End_Pose`|   `geometry_msgs/Pose`   | 终点位姿，x、y、z坐标（float类型，单位：m）+四元数。          |
|`speed`|   `float32`   | 速度比例系数，0~1。          |
|`trajectory_connect`|   `uint8`   | 可选参数，代表是否和下一条运动一起规划。</br>0代表立即规划，1代表和下一条轨迹一起规划，当为1时，轨迹不会立即执行。          |

**使用示例：**

```json
rostopic pub /rm_driver/MoveC_Cmd rm_msgs/MoveC "Mid_Pose:
  position:
    x: 0.2949
    y: 0.1377
    z: 0.1048
  orientation:
    x: 0.05
    y: -0.989
    z: -0.1359
    w: 0.0274
End_Pose:
  position:
    x: 0.2417
    y: 0.0
    z: 0.1213
  orientation:
    x: 0.0136
    y: 0.9993
    z: 0.0241
    w: 0.0261
speed: 0.5
trajectory_connect: 0"
```

**返回示例：**

```json
rostopic echo /rm_driver/Plan_State
```

**参数说明：**
| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |`ture`：设置成功；`false`：设置失败。 |

### 3.6.4关节角度CANFD透传`JointPos.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`joint`|   `float32[]`   | 关节角度，单位：弧度。          |
|`expand`|   `float32`   | 拓展关节，单位：弧度。          |

**使用示例：**
透传需要连续发送多个连续的点实现，单纯靠以下命令并不能实现功能，当前moveit控制使用了角度透传的控制方式。

```json
rostopic pub /rm_driver/JointPos rm_msgs/JointPos "joint: [0, 0, 0, 0, 0, 0] expand: 0.0"
```

**返回参数说明：**
成功：无返回值；失败返回：driver终端返回错误码。

### 3.6.5位姿CANFD透传`CartePos.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`Pose`|   `geometry_msgs/Pose`   | 透传位姿，x、y、z坐标（float类型，单位：m）+四元数。          |

**使用示例：**
需要是大量（10个以上）位置连续的点，单纯靠以下命令并不能实现功能，以2ms以上的周期持续发布。

```json
rostopic pub /rm_driver/MoveP_Fd_Cmd rm_msgs/CartePos 
"Pose:
  position:
    x: 0.0
    y: 0.0
    z: 0.0
  orientation:
    x: 0.0
    y: 0.0
    z: 0.0
    w: 0.0"
```

**返回参数说明：**
成功：无返回值；失败返回：driver终端返回错误码。

### 3.6.6关节空间规划到目标位姿`MoveJ_P.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`Mid_Pose`|   `geometry_msgs/Pose`   | 目标位姿，x、y、z坐标（float类型，单位：m）+四元数。          |
|`speed`|   `float32`   | 速度比例系数，0~1。          |
|`trajectory_connect`|   `uint8`   | 可选参数，代表是否和下一条运动一起规划，</br>0代表立即规划，</br>1代表和下一条轨迹一起规划，当为1时，轨迹不会立即执行。          |

**使用示例：**

```json
rostopic pub /rm_driver/MoveJ_P_Cmd rm_msgs/MoveJ_P "Pose:
  position:
    x: 0.0
    y: 0.0
    z: 0.0
  orientation:
    x: 0.0
    y: 0.0
    z: 0.0
    w: 0.0
speed: 0.0
trajectory_connect: 0"
```

**返回示例：**

```json
rostopic echo /rm_driver/Plan_State
```

## 3.7机械臂运动配置-步进指令

### 3.7.1关节步进`Joint_Step.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`joint_num`|   `uint8`   | 要运动的关节。          |
|`step_angle`|   `float32`   | 步进角度（单位：角度）。          |
|`speed`|   `float32`   | 运动速度。        |

**使用示例：**
六自由度

```json
rostopic pub /rm_driver/SetJointStep rm_msgs/Joint_Step "joint_num: 6 step_angle: 90.0  speed: 0.2"
```

七自由度

```json
rostopic pub /rm_driver/MoveJ_Cmd rm_msgs/MoveJ 
"joint:  [0, 0, 0, 0, 0, 0, 0] speed: 0.2"
```

**返回示例：**

```json
rostopic echo /rm_driver/Plan_State
```

**参数说明：**
| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |`ture`：设置成功；`false`：设置失败。 |

## 3.8机械臂运动配置-运动指令

### 3.8.1轨迹急停`Stop.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`state`|   `tool`   | true生效 false 不生效          |

**使用示例：**

```json
rostopic pub /rm_driver/Emergency_Stop rm_msgs/Stop "state: true"
```

**返回示例：**

```json
rostopic echo /rm_driver/Set_Arm_Stop_Result
```

**参数说明：**
| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |`ture`：设置成功；`false`：设置失败。 |

## 3.9机械臂运动配置-示教指令类

### 3.9.1关节示教`Joint_Teach.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`teach_joint`|   `int16`   | 示教控制关节          |
|`direction`|   `string`   | 关节转动方向 “pos”：正方向，“neg”：反方向          |
|`v`|   `int16`   | 关节转动速度0-100          |

**使用示例：**
六自由度

```json
rostopic pub /rm_driver/Arm_JointTeach std_msgs/msg/Empty "{}"
```

**返回示例：**

```json
rostopic echo /rm_driver/SetJointTeach_Result
```

**参数说明：**
| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |`ture`：设置成功；`false`：设置失败。 |

### 3.9.2位置示教`Pos_Teach.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`teach_type`|   `string`   | 坐标轴，”x”,”y”,”z”          |
|`direction`|   `string`   | 示教方向 “pos”：正方向，“neg”：反方向          |
|`v`|   `int16`   | 关节转动速度0-100          |

**使用示例：**
六自由度

```json
rostopic pub /rm_driver/Arm_PosTeach rm_msgs/Pos_Teach "teach_type: 'z' direction: 'pos' v: 10"
```

**返回示例：**

```json
rostopic echo /rm_driver/SetPosTeach_Result
```

**参数说明：**
| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |`ture`：设置成功；`false`：设置失败。 |

### 3.9.3姿态示教`Ort_Teach.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`joint_num`|   `string`   | 旋转所绕坐标轴，”rx”,“ry”,“rz”          |
|`step_angle`|   `string`   | 示教方向 “pos”：正方向，“neg”：反方向          |
|`v`|   `int16`   | 关节转动速度0-100          |

**使用示例：**

```json
rostopic pub /rm_driver/Arm_OrtTeach rm_msgs/Ort_Teach "teach_type: 'rz' direction: 'pos' v: 10"
```

**返回示例：**

```json
rostopic echo /rm_driver/SetOrtTeach_Result
```

**参数说明：**
| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |`ture`：设置成功；`false`：设置失败。 |

### 3.9.4示教停止`Stop_Teach.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`command`|   `string`   |  停止指令“set_stop_teach”，运行以下指令即可          |

**使用示例：**

```json
rostopic pub /rm_driver/Arm_StopTeach rm_msgs/Stop_Teach "command: ''"
```

**返回示例：**

```json
rostopic echo /rm_driver/SetStopTeach_Result
```

**参数说明：**
| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |`ture`：设置成功；`false`：设置失败。 |

## 3.10系统配置

### 3.10.1控制机械臂上电断电

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Byte msg`   |  1控制机械臂上电 0控制机械臂断电        |

**使用示例：**

```json
rostopic pub /rm_driver/SetArmPower std_msgs/Byte "data: 0"
```

**返回示例：**

```json
rostopic echo /rm_driver/Set_Arm_Power_Result
```

**参数说明：**
| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |`ture`：设置成功；`false`：设置失败。 |

### 3.10.2读取软件版本号

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Byte msg`   |  1控制机械臂上电 0控制机械臂断电        |

**使用示例：**

```json
rostopic pub /rm_driver/Get_Arm_Software_Version std_msgs/Empty "{}"
```

**返回示例：**
rm_driver节点终端

**参数说明：**
Arm type is RML63-BI Arm version is 3b0146

### 3.10.3清除系统错误

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty msg`   |  /       |

**使用示例：**

```json
rostopic pub /rm_driver/Clear_System_Err std_msgs/Empty "{}"
```

**返回示例：**

```json
rostopic echo /rm_driver/System_En_State_Result
```

**参数说明：**
| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |`ture`：设置成功；`false`：设置失败。 |

## 3.11查询机械臂状态信息

### 3.11.1获取机械臂关节当前电流`Joint_Current.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   |  ROS自带msg       |

**使用示例：**

```json
rostopic pub /rm_driver/GetCurrentJointCurrent std_msgs/Empty "{}"
```

**返回示例：**

```json
rostopic echo /rm_driver/Joint_Current
```

**参数说明：**
| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`joint_current`            | `float32[]` |关节电流（单位：uA） |

### 3.11.2查询机械臂关节角度

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty msg`   |  /       |

**使用示例：**

```json
rostopic pub /rm_driver/GetArmJoint_Cmd std_msgs/Empty "{}"
```

**返回示例：**

```json
rostopic echo /joint_states
```

**参数说明：**
| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`sensor_msgs`            | `JointState` |/ |

### 3.11.3查询机械臂状态（弧度+四元数）`GetArmState_Command.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`command`|   `string`   |  /       |

**使用示例：**

```json
rostopic pub /rm_driver/GetArmState_Cmd rm_msgs/GetArmState_Command "command: ''"
```

**返回示例：**

```json
rostopic echo /rm_driver/ArmCurrentState
```

**参数说明：**
`ArmState.msg`

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`joint`            | `float32[]` |机械臂弧度信息 |
|`Pose`            | `bool` | 机械臂当前位姿（四元数）|
|`arm_err`            | `bool` |  机械臂错误信息|
|`sys_err`            | `bool` |系统错误信息 |
|`dof`            | `bool` |机械臂自由度 |

## 3.11.4查询机械臂状态（角度+欧拉角）`GetArmState_Command.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`command`|   `string`   |  /       |

**使用示例：**

```json
rostopic pub /rm_driver/GetArmState_Cmd rm_msgs/GetArmState_Command "command: ''"
```

**返回示例：**

```json
rostopic echo /rm_driver/Arm_Current_State
```

**参数说明：**
`Arm_Current_State.msg`

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`joint`            | `float32[]` |机械臂角度信息 |
|`Pose`            | `bool` | 机械臂当前位姿（欧拉角）|
|`arm_err`            | `bool` |  机械臂错误信息|
|`sys_err`            | `bool` |系统错误信息 |
|`dof`            | `bool` |机械臂自由度 |

## 3.12控制器IO配置及获取

### 3.12.1设置机械臂数字IO输出状态`Arm_Digital_Output.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`num`|   `uint8`   |  IO端口号，范围：1~4       |
|`state`|   `bool`   |  “state”：IO状态，1-输出高，0-输出低       |

**使用示例：**

```json
rostopic pub /rm_driver/Arm_Digital_Output rm_msgs/Arm_Digital_Output "num: 1 state: true"
```

**返回示例：**

```json
rostopic echo /rm_driver/Set_DO_State_Result
```

**参数说明：**

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |成功返回：true；失败返回：false。 |

### 3.12.2获取所有IO输入状态`IO_Update.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`type`|   `uint8`   |  1查询控制器IO状态; 2查询工具端IO状态       |

**使用示例：**

```json
rostopic pub /rm_driver/IO_Update rm_msgs/IO_Update "type: 1"
```

**返回示例：**

```json
rostopic echo /rm_driver/Arm_IO_State
```

**参数说明：**
`Arm_IO_State.msg`

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`Arm_Digital_Input`            | `nt8[4]` |   1代表高；-1代表为输出状态 |

## 3.13工具端IO配置及获取

### 3.13.1设置工具端数字IO输出状态`Tool_Digital_Output.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`num`|   `uint8`   |  IO端口号，范围：1~4       |
|`state`|   `bool`   |  “state”：IO状态，1-输出高，0-输出低       |

**使用示例：**

```json
rostopic pub /rm_driver/Tool_Digital_Output rm_msgs/Tool_Digital_Output "num: 1 state: true"
```

**返回示例：**

```json
rostopic echo /rm_driver/Set_Tool_DO_State_Result
```

**参数说明：**

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |成功返回：true；失败返回：false。 |

### 3.13.2获取工具端数字IO状态`IO_Update.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`type`|   `uint8`   |  1查询控制器IO状态; 2查询工具端IO状态     |

**使用示例：**

```json
rostopic pub /rm_driver/IO_Update rm_msgs/IO_Update "type: 2"
```

**返回示例：**

```json
rostopic echo /rm_driver/Tool_IO_State
```

**参数说明：**
`Tool_IO_State.msg`

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`Tool_IO_Mode`            | `bool[2]` |数字I/O输入/输出状态  0-输入模式，1-输出模式 |
|`Tool_IO_State`            | `bool[2]` |数字I/O电平状态      0-低，1-高 |

## 3.14末端手爪控制（选配）

睿尔曼机械臂末端配备了因时机器人公司的EG2-4C2手爪，为了便于用户操作手爪，机械臂控制器对用户适配了手爪的ROS控制方式。

### 3.14.1设置夹爪持续力控夹取`Gripper_Pick.msg`

手爪以设定的速度力控夹取，当受力超过设定力后，停止运动

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`speed`|   `uint16`   |  1~1000,代表手爪开合速度，无量纲       |
|`force`|   `uint16`   |  1～1000,代表手爪夹持力，最大1.5kg       |

**使用示例：**

```json
rostopic pub /rm_driver/Gripper_Pick_On rm_msgs/Gripper_Pick "speed: 100 force: 100"
```

**返回示例：**

```json
rostopic echo /rm_driver/Set_Gripper_Result
```

**参数说明：**

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |成功返回：true；失败返回：false。 |

### 3.14.2设置夹爪力控夹取`Gripper_Pick.msg`

手爪以设定的速度力控夹取，当受力超过设定力后，停止运动。

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`speed`|   `uint16`   |  1~1000,代表手爪开合速度，无量纲       |
|`force`|   `uint16`   |  1～1000,代表手爪夹持力，最大1.5kg       |

**使用示例：**

```json
rostopic pub /rm_driver/Gripper_Pick rm_msgs/Gripper_Pick "speed: 100 force: 100"
```

**返回示例：**

```json
rostopic echo /rm_driver/Set_Gripper_Result
```

**参数说明：**

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |成功返回：true；失败返回：false。 |

### 3.14.3夹爪到达指定位置`Gripper_Set.msg`

设置手爪到固定位置，手爪到位置后或者所受力超过阈值后停止。

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`position`|   `uint16`   |  手爪目标位置，范围：1～1000,代表手爪开口度：0～70mm       |

**使用示例：**

```json
rostopic pub /rm_driver/Gripper_Set rm_msgs/Gripper_Set "position: 100"
```

**返回示例：**

```json
rostopic echo /rm_driver/Set_Gripper_Result
```

**参数说明：**

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |成功返回：true；失败返回：false。 |

## 3.15末端六维力传感器的使用（选配）

睿尔曼RM-65F机械臂末端配备集成式六维力传感器，无需外部走线，用户可直接通过ROS话题对六维力进行操作。

### 3.15.1查询六维力数据

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   |  /       |

**使用示例：**

```json
rostopic pub /rm_driver/GetSixForce_Cmd std_msgs/Empty "{}"
```

**返回示例：**

```json
rostopic echo /rm_driver/GetSixForce     #六维力原始数据
rostopic echo /rm_driver/SixZeroForce    #传感器坐标系下的六维力数据
rostopic echo /rm_driver/WorkZeroForce   #工作坐标系下的传感器数据
rostopic echo /rm_driver/ToolZeroForce   #工具坐标系下的传感器数据
```

**参数说明：**
`Six_Force.msg`

| 参数                | 类型     | 说明      |
|:------------------|:-------|:---------------|
|`force_Fx`            | `float32` |/ |
|`force_Fy`            | `float32` |/ |
|`force_Fz`            | `float32` |/ |
|`force_Mx`            | `float32` |/ |
|`force_My`            | `float32` |/ |
|`force_Mz`            | `float32` |/ |

### 3.15.2清空六维力数据

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   |  /       |

**使用示例：**

```json
rostopic pub /rm_driver/ClearForceData_Cmd std_msgs/Empty "{}"
```

**返回示例：**

```json
rostopic echo /rm_driver/ClearForceData_result
```

**参数说明：**

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |成功返回：true；失败返回：false。 |

### 3.15.3自动设置六维力重心参数

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   |  /       |

**使用示例：**

```json
rostopic pub /rm_driver/SetForceSensor_Cmd std_msgs/Empty "{}"
```

**返回示例：**

```json
rostopic echo /rm_driver/ForceSensorSet_result
```

**参数说明：**

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |成功返回：true；失败返回：false。 |

### 3.15.4手动标定六维力数据

**参数说明：**

`Manual_Set_Force_Pose.msg`

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`pose1`|   `string`   |  位置1关节角度;       |
|`pose2`|   `string`   |  位置1关节角度;       |
|`pose3`|   `string`   |  位置1关节角度;       |
|`pose4`|   `string`   |  位置1关节角度;       |
|`pose5`|   `string`   |  位置1关节角度;       |
|`joint`|   `int64[]`   |  0.001角度，如90度为90000;       |

**使用示例：**

```json
rostopic pub /rm_driver/ManualSetForcePose_Cmd rm_msgs/Manual_Set_Force_Pose "pose: ' pose1' joint:  [0, 0, 0, 0, 90000, 0]"
```

**返回示例：**

```json
/rm_driver/ForceSensorSet_result
```

**参数说明：**

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |成功返回：true；失败返回：false。 |

## 3.15.5停止标定力传感器重心

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   |  /       |

**使用示例：**

```json
rostopic pub /rm_driver/StopSetForceSensor_Cmd std_msgs/Empty "{}"
```

**返回示例：**

```json
rostopic echo /rm_driver/StopSetForceSensor_result
```

**参数说明：**

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |成功返回：true；失败返回：false。 |

## 3.16拖动示教

### 3.16.1拖动示教结束

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   |  /       |

**使用示例：**

```json
rostopic pub /rm_driver/StartMultiDragTeach_result std_msgs/Empty "{}"
```

**返回示例：**

```json
rostopic echo /rm_driver/StopDragTeach_result
```

**参数说明：**

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |成功返回：true；失败返回：false。 |

### 3.16.2开启复合拖动示教

**参数说明：**
`Start_Multi_Drag_Teach.msg`

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`mode`|   `uint8`   |  0-电流环模式，1-使用末端六维力</br>只动位置</br>2-使用末端六维力，只动姿态</br>3-使用末端六维力，位置和姿态同时动       |

**使用示例：**

```json
rostopic pub /rm_driver/StartMultiDragTeach_Cmd rm_msgs/Start_Multi_Drag_Teach "mode: 0"
```

**返回示例：**

```json
rostopic echo /rm_driver/StartMultiDragTeach_result
```

**参数说明：**

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |成功返回：true；失败返回：false。 |

### 3.16.3力位混合控制`Set_Force_Position.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`mode`|   `sensor`   |    传感器；0-一维力；1-六维力     |
|`mode`|   `uint8`   |     0-工作坐标系力控；1-工具坐标系    |
|`direction`|   `uint8`   |     力控方向</br>0-沿X轴</br>1-沿Y轴</br>2-沿Z轴</br>3-沿RX姿态方向</br>4-沿RY姿态方向</br>5-沿RZ姿态方向    |

**使用示例：**

```json
rostopic pub /rm_driver/SetForcePosition_Cmd rm_msgs/Set_Force_Position "sensor: 0 mode: 0 direction: 0 N: 0"。
```

**返回示例：**

```json
rostopic echo /rm_driver/SetForcePosition_result
```

**参数说明：**

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |成功返回：true；失败返回：false。 |

### 3.16.4结束力位混合控制

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   |  /       |

**使用示例：**

```json
rostopic pub /rm_driver/StopForcePostion_Cmd std_msgs/Empty "{}"
```

**返回示例：**

```json
rostopic echo /rm_driver/StopForcePostion_result
```

**参数说明：**

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |成功返回：true；失败返回：false。 |

## 3.17末端五指灵巧手控制（选配）

睿尔曼机械臂末端配备了五指灵巧手，可通过ROS对灵巧手进行设置。

### 3.17.1设置灵巧手手势序号`Hand_Posture.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`posture_num`|   `uint16`   |  #预先保存在灵巧手内的手势序号，范围：1~40       |

**使用示例：**

```json
rostopic pub /rm_driver/Hand_SetPosture rm_msgs/Hand_Posture "posture_num: 0"
```

**返回示例：**

```json
rostopic echo /rm_driver/Set_Hand_Posture_Result
```

**参数说明：**

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |成功返回：true；失败返回：false。 |

### 3.17.2设置灵巧手动作序列`Hand_Seq.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`seq_num`|   `uint16`   |  预先保存在灵巧手内的序列序号，范围：1~40       |

**使用示例：**

```json
rostopic pub /rm_driver/Hand_SetSeq rm_msgs/Hand_Seq "seq_num: 0"
```

**返回示例：**

```json
rostopic echo /rm_driver/Set_Hand_Seq_Result
```

**参数说明：**

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |成功返回：true；失败返回：false。 |

### 3.17.3设置灵巧手各自由度角度`Hand_Angle.msg`

设置灵巧手角度，灵巧手有 6 个自由度，从 1~6 分别为小拇指，无名指，中指，食指，大拇指弯曲，大拇指旋转。
**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`hand_angle`|   `uint16`   |  手指角度数组，范围：0~1000.</br>另外，-1 代表该自由度不执行任何操作，保持当前状态       |

**使用示例：**

```json
rostopic pub /rm_driver/Hand_SetAngle rm_msgs/Hand_Angle "hand_angle: [0, 0, 0, 0, 0, 0]"
```

**返回示例：**

```json
rostopic echo /rm_driver/Set_Hand_Angle_Result
```

**参数说明：**

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |成功返回：true；失败返回：false。 |

### 3.17.4设置灵巧手速度`Hand_Speed.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`hand_speed`|   `uint16`   |  手指速度，范围：1~1000       |

**使用示例：**

```json
rostopic pub /rm_driver/Hand_SetSpeed rm_msgs/Hand_Speed "hand_speed: 0"
```

**返回示例：**

```json
rostopic echo /rm_driver/Set_Hand_Speed_Result
```

**参数说明：**

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |成功返回：true；失败返回：false。 |

### 3.17.5设置灵巧手力阈值`Hand_Force.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`hand_Force`|   `uint16`   |  手指力，范围：1~1000       |

**使用示例：**

```json
rostopic pub /rm_driver/Hand_SetForce rm_msgs/Hand_Force "hand_force: 0"
```

**返回示例：**

```json
rostopic echo /rm_driver/Set_Hand_Force_Result
```

**参数说明：**

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |成功返回：true；失败返回：false。 |

## 3.18透传力位混合控制补偿模式

针对睿尔曼带一维力和六维力版本的机械臂，用户除了可直接使用示教器调用底层的力位混合控制模块外，还可以将自定义的轨迹以周期性透传的形式结合底层的力位混合控制算法进行补偿。

### 3.18.1开启透传力位混合控制补偿模式

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   |  /       |

**使用示例：**

```json
rostopic pub /rm_driver/StartForcePositionMove_Cmd std_msgs/Empty "{}"
```

**返回示例：**

```json
rostopic echo /rm_driver/StartForcePositionMove_result
```

**参数说明：**

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |成功返回：true；失败返回：false。 |

### 3.18.2透传力位混合控制补偿(位姿)`Force_Position_Move_Pose.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`Pose`|   `geometry_msgs/Pose`   |  #四元数信息       |
|`sensor`|   `geometry_msgs/Pose`   |  #所使用传感器类型，0-一维力，1-六维力       |
|`mode`|   `geometry_msgs/Pose`   |  #模式，0-沿工作坐标系，1-沿工具端坐标系       |
|`dir`|   `geometry_msgs/Pose`   |  #力控方向，0~5分别代表X/Y/Z/Rx/Ry/Rz，其中一维力类型时默认方向为Z方向       |
|`force`|   `geometry_msgs/Pose`   |  #力的大小，精度0.1N或者0.1Nm       |

**使用示例：**

```json
rostopic pub /rm_driver/ForcePositionMovePose_Cmd rm_msgs/Force_Position_Move_Pose "Pose:   position: {x: 0.0, y: 0.0, z: 0.0}   orientation: {x: 0.0, y: 0.0, z: 0.0, w: 0.0} sensor: 1 mode: 0 dir: 0 force: 0"
```

**参数说明：**

成功：无返回，失败：报错信息查看rm_driver节点。

### 3.18.3透传力位混合控制补偿(弧度)`Force_Position_Move_Joint.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`joint`|   `float32[]`   |  弧度信息。       |
|`sensor`|   `geometry_msgs/Pose`   |  所使用传感器类型，0-一维力，1-六维力。       |
|`mode`|   `geometry_msgs/Pose`   |  模式，0-沿工作坐标系，1-沿工具端坐标系。       |
|`dir`|   `geometry_msgs/Pose`   |  力控方向，0~5分别代表X/Y/Z/Rx/Ry/Rz，其中一维力类型时默认方向为Z方向。       |
|`force`|   `geometry_msgs/Pose`   |  力的大小，精度0.1N或者0.1Nm。       |
|`dof`|   `uint8`   |  机械臂自由度信息。      |


**使用示例：**

```json
rostopic pub /rm_driver/ForcePositionMoveJiont_Cmd rm_msgs/Force_Position_Move_Joint "joint: [0, 0, 0, 0, 0, 0] sensor: 0 mode: 0 dir: 0 force: 0 dof: 0"
```

**参数说明：**

成功：无返回，失败：报错信息查看rm_driver节点

### 3.18.4开启透传力位混合控制补偿模式

|  功能描述  |  开启透传力位混合控制补偿模式  |
| --- | --- |
|  参数说明  |  std\_msgs::Empty  |
|  命令示例  |  rostopic pub /rm\_driver/StopForcePositionMove\_Cmd std\_msgs/Empty "{}"  |
|  返回值参数说明  |  std\_msgs::Bool  成功返回：true；失败返回：false。  |
|  返回值查看  |  rostopic echo /rm\_driver/StopForcePositionMove\_result  |

## 3.19升降机构

睿尔曼机械臂可集成自主研发升降机构。

### 3.19.1升降机构速度开环控制`Lift_Speed.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`speed`|   `int16`   |  速度百分比，-100~100</br>Speed < 0:升降机构向下运动</br>Speed > 0:升降机构向上运动</br>Speed = 0:升降机构停止运动。       |

**使用示例：**

```json
rostopic pub /rm_driver/Lift_SetSpeed rm_msgs/Lift_Speed "speed: 0"
```

**返回示例：**

```json
rostopic echo /rm_driver/Set_Lift_Speed_Result
```

**参数说明：**

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |成功返回：true；失败返回：false。 |

### 3.19.2升降机构位置闭环控制`Lift_Height.msg`

升降机构运行到指定高度。
**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`height`|   `uint16`   |  目标高度，单位 mm，范围：0~2600。       |
|`speed`|   `uint16`   |  速度百分比，1~100。      |

**使用示例：**

```json
rostopic pub /rm_driver/Lift_SetHeight rm_msgs/Lift_Height "height: 0 speed: 0"
```

**返回示例：**

```json
rostopic echo /rm_driver/Plan_State
```

**参数说明：**

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |成功返回：true；失败返回：false。 |

### 3.19.3获取升降机构状态

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   |  /       |

**使用示例：**

```json
rostopic pub /rm_driver/get_lift_state_cmd std_msgs/msg/Empty "{}"
```

**返回示例：**

```json
rostopic echo /rm_driver/LiftState
```

**参数说明：**
`LiftState.msg`
| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`height`            | `int16` |当前高度。 |
|`current`            | `int16` |当前电流。 |
|`err_flag`            | `uint16` |驱动错误代码。 |
|`mode`            | `byte` |当前升降状态</br>0-空闲</br>1-正方向速度运动</br>2-正方向位置运动</br>3-负方向速度运动</br>4-负方向位置运动。 |

## 3.20机械臂状态主动上报

### 3.20.1设置 UDP 机械臂状态主动上报配置`Set_Realtime_Push.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`cycle`|   `uint16`   |  设置广播周期，为5ms的倍数（默认1即1*5=5ms,200Hz）。      |
|`port`|   `uint16`   |  设置广播的端口号（默认8089）。       |
|`force_coordinate`|   `uint16`   |  设置系统外受力数据的坐标系(仅带有力传感器的机械臂支持)。       |
|`ip`|   `string`   |  设置自定义的上报目标IP 地址（默认192.168.1.10）。       |

**使用示例：**

```json
rostopic pub /rm_driver/Set_Realtime_Push rm_msgs/Set_Realtime_Push "cycle: 1 port: 8089 force_coordinate: 0 ip: '192.168.1.10'"
```

**返回示例：**

```json
rostopic echo /rm_driver/Set_Realtime_Push_Result
```

**参数说明：**

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |成功返回：true；失败返回：false。 |

### 3.20.2查询 UDP 机械臂状态主动上报配置

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   |  /       |

**使用示例：**

```json
rostopic pub /rm_driver/Get_Realtime_Push std_msgs/Empty "{}"
```

**返回示例：**

```json
rostopic echo /rm_driver/Get_Realtime_Push_Result
```

**参数说明：**

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `Bool` |成功返回：true；失败返回：false。 |

### 3.20.3UDP机械臂状态主动上报

#### 六维力`Six_Force.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`force_fx`|   `float32`   |  沿x轴方向受力大小。       |
|`force_fy`|   `float32`   |  沿y轴方向受力大小。       |
|`force_fz`|   `float32`   |  沿z轴方向受力大小。       |
|`force_mx`|   `float32`   |  沿x轴方向转动受力大小。       |
|`force_my`|   `float32`   |  沿y轴方向转动受力大小。       |
|`force_mz`|   `float32`   |  沿z轴方向转动受力大小。       |

**使用示例：**

```json
rostopic echo /rm_driver/UdpSixForce
```

#### 机械臂错误`std_msgs::msg::UInt16`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`data`|   `uint16`   |  机械臂报错信息。       |

**使用示例：**

```json
rostopic echo /rm_driver/ArmError
```

#### 系统错误`std_msgs::msg::UInt16`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`data`|   `uint16`   |  系统报错信息。       |

**使用示例：**

```json
rostopic echo/rm_driver/SysError
```

#### 关节错误`Joint_Error_Code.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`joint_error`|   `uint16[]`   |  每个关节报错信息.       |

**使用示例：**

```json
rostopic echo /rm_driver/JointErrorCode
```

#### 机械臂弧度数据`sensor_msgs::msg::JointState`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`header.seq`|   `uint32`   |  时间信息，秒。       |
|`header.stamp`|   `class`   |  时间信息，秒。       |
|`header.frame_id`|   `string`   |  坐标系名称。         |
|`name`|   `string[]`   |  关节名称。       |
|`position`|   `float64[]`   |  关节弧度信息。       |
|`velocity`|   `float64[]`   |  关节速度信息。（暂未使用）       |
|`sec`|   `float64[]`   |  关节受力信息。（暂未使用）       |

**使用示例：**

```json
rostopic echo /joint_states
```

|  功能描述  |  机械臂弧度数据  |
| --- | --- |
|  参数说明  |  sensor\_msgs::msg::JointState</br>builtin\_interfaces/Time stamp</br>int32 sec：时间信息，秒。</br>uint32 nanosec：时间信息，纳秒。  </br>string frame\_id：坐标系名称。</br> string\[\] name：关节名称。</br> float64\[\] position：关节弧度信息。 </br>float64\[\] velocity：关节速度信息。（暂未使用） </br>float64\[\] effort：关节受力信息。（暂未使用）  |
|  订阅命令  |  rostopic echo /joint\_states  |

#### 位姿信息`geometry_msgs::msg::Pose Point`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`position.x`|   `float64`   |  机械臂当前坐标信息。       |
|`position.y`|   `float64`   |  机械臂当前坐标信息。       |
|`position.z`|   `float64`   |  机械臂当前坐标信息。       |
|`Quaternion orientation.x`|   `float64`   |  机械臂当前姿态信息。         |
|`Quaternion orientation.y`|   `float64`   |  机械臂当前姿态信息。         |
|`Quaternion orientation.z`|   `float64`   |  机械臂当前姿态信息。         |
|`Quaternion orientation.w`|   `float64`   |  机械臂当前姿态信息。         |

**使用示例：**

```json
rostopic echo /rm_driver/Pose_State
```

#### 当前六维力传感器系统外受力数据`Six_Force.msg`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`force_fx`|   `float32`   |  当前传感器沿x轴方向受外力大小。       |
|`force_fy`|   `float32`   |  当前传感器沿y轴方向受外力大小。       |
|`force_fz`|   `float32`   |  当前传感器沿z轴方向受外力大小。       |
|`force_mx`|   `float32`   |  沿x轴方向转动受力大小。       |
|`force_my`|   `float32`   |  沿y轴方向转动受力大小。       |
|`force_mz`|   `float32`   |  沿z轴方向转动受力大小。       |

**使用示例：**

```json
rostopic echo /rm_driver/UdpSixZeroForce
```

#### 系统外受力数据参考坐标系`std_msgs::UInt16`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`force_fx`|   `float32`   |  沿x轴方向受力大小。       |
|`data`|   `uint16`   |  系统外受力数据的坐标系</br>0 为传感器坐标系</br>1 为当前工作坐标系</br>2 为当前工具坐标系</br>该数据会影响一维力和六维力传感器系统外受力数据的参考坐标系。        |

**使用示例：**

```json
rostopic echo /rm_driver/Udp_Coordinate
```
