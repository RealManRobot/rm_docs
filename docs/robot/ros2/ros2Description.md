# ROS2调用API接口功能包说明V1.0.0

为了方便用户通过ROS2控制机械臂，睿尔曼提供了基于API的ROS2功能包，有关机械臂的控制细节想要了解的话也可以参考API的相关文档和说明，在实际使用机械臂时，用户可通过以太网口与机械臂建立通信，并控制机械臂。

## 报错说明

### 控制器错误类型

| 序号 | 错误代码(16进制) | 错误内容 |
| :---: | :---- | :---: |
| 1 | 0x0000 | 系统正常 |
| 2 | 0x1001 | 关节通信异常 |
| 3 | 0x1002 | 目标角度超过限位 |
| 4 | 0x1003 | 该处不可达，为奇异点 |
| 5 | 0x1004 | 实时内核通信错误 |
| 6 | 0x1005 | 关节通信总线错误 |
| 7 | 0x1006 | 规划层内核错误 |
| 8 | 0x1007 | 关节超速 |
| 9 | 0x1008 | 末端接口板无法连接 |
| 10 | 0x1009 | 超速度限制 |
| 11 | 0x100A | 超加速度限制 |
| 12 | 0x100B | 关节抱闸未打开 |
| 13 | 0x100C | 拖动示教时超速 |
| 14 | 0x100D | 机械臂发生碰撞 |
| 15 | 0x100E | 无该工作坐标系 |
| 16 | 0x100F | 无该工具坐标系 |
| 17 | 0x1010 | 关节发生掉使能错误 |

### 关节错误类型

| 序号 | 错误代码(16进制) | 错误内容 |
| :---: | :---- | :---: |
| 1 | 0x0000 | 关节正常 |
| 2 | 0x0001 | FOC错误 |
| 3 | 0x0002 | 过压 |
| 4 | 0x0004 | 欠压 |
| 5 | 0x0008 | 过温 |
| 6 | 0x0010 | 启动失败 |
| 7 | 0x0020 | 编码器错误 |
| 8 | 0x0040 | 过流 |
| 9 | 0x0080 | 软件错误 |
| 10 | 0x0100 | 温度传感器错误 |
| 11 | 0x0200 | 位置超限错误 |
| 12 | 0x0400 | 关节ID非法 |
| 13 | 0x0800 | 位置跟踪错误 |
| 14 | 0x1000 | 电流检测错误 |
| 15 | 0x2000 | 抱闸打开失败 |
| 16 | 0x4000 | 位置指令阶跃警告 |
| 17 | 0x8000 | 多圈关节丢圈数 |
| 18 | 0xF000 | 通信丢帧 |

### API错误类型

| 序号 | 错误代码(16进制) | 错误内容 |
| :---: | :---- | :---: |
| 1 | 0x0000 | 系统运行正常 |
| 2 | 0x0001 | 消息请求返回FALSE |
| 3 | 0x0002 | 机械臂未初始化或输入型号非法 |
| 4 | 0x0003 | 非法超时时间 |
| 5 | 0x0004 | Socket初始化失败 |
| 6 | 0x0005 | Socket连接失败 |
| 7 | 0x0006 | Socket发送失败 |
| 8 | 0x0007 | Socket通讯超时 |
| 9 | 0x0008 | 未知错误 |
| 10 | 0x0009 | 数据不完整 |
| 11 | 0x000A | 数组长度错误 |
| 12 | 0x000B | 数据类型错误 |
| 13 | 0x000C | 型号错误 |
| 14 | 0x000D | 缺少回调函数 |
| 15 | 0x000E | 机械臂异常停止 |
| 16 | 0x000F | 轨迹文件名称过长 |
| 17 | 0x0010 | 轨迹文件校验失败 |
| 18 | 0x0011 | 轨迹文件读取失败 |
| 19 | 0x0012 | 控制器忙，请稍后再试 |
| 20 | 0x0013 | 非法输入 |
| 21 | 0x0014 | 数据队列已满 |
| 22 | 0x0015 | 计算失败 |
| 23 | 0x0016 | 文件打开失败 |
| 24 | 0x0017 | 力控标定手动停止 |
| 25 | 0x0018 | 没有可保存轨迹 |

## 关节配置

### 清除关节错误代码`Jointerrclear.msg`

**参数说明：**
| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`joint_num`|   `uint8`   | 对应关节序号，从基座到机械臂手爪端，序号依次为1～6。          |
|`block`|   `bool`   | 是否为阻塞模式。true:阻塞，false:非阻塞。    |

**使用命令示例：**

```json
ros2 topic pub /rm_driver/set_joint_err_clear_cmd rm_ros_interfaces/msg/Jointerrclear "joint_num: 1 block: true"
```

**返回命令示例：**

```json
ros2 topic echo /rm_driver/set_joint_err_clear_result
```

**参数说明：**
| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |true：设置成功；false：设置失败。 |

## 工作坐标系设置

### 切换当前工作坐标系

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `String`   | ROS自带msg。          |

**使用命令示例：**

```json
ros2 topic pub /rm_driver/change_work_frame_cmd std_msgs/msg/String "data: 'Base'"
```

**返回命令示例：**

```json
ros2 topic echo /rm_driver/change_work_frame_result
```

**参数说明：**
| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |true：设置成功；false：设置失败。 |

## 坐标系查询

### 查询当前工具坐标系

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   | ROS自带msg。          |

**使用命令示例：**

```json
ros2 topic pub --once /rm_driver/get_current_tool_frame_cmd std_msgs/msg/Empty "{}"
```

**返回命令示例：**
当前工具坐标系名称。

```json
ros2 topic echo /rm_driver/get_current_tool_frame_result
```

### 查询所有工具坐标系名称

**参数说明：**

| 参数 | 类型 | 说明 |
|:---|:---|:---|
|`std_msgs`|   `Empty`   | ROS自带msg。          |

**使用命令示例：**

```json
ros2 topic pub /rm_driver/get_all_tool_frame_cmd std_msgs/msg/Empty "{}"
```

**返回命令示例：**
当前工具坐标系所有名称。

```json
ros2 topic echo /rm_driver/get_all_tool_frame_result
```

### 查询当前工作坐标系

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   | ROS自带msg。          |

**使用命令示例：**

```json
ros2 topic pub --once /rm_driver/get_curr_workFrame_cmd std_msgs/msg/Empty "{}"
```

**返回命令示例：**

```json
ros2 topic echo /rm_driver/get_curr_workFrame_result
```

**参数说明：**
| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`std_msgs`            | `bool` |true：设置成功；false：设置失败。 |

### 查询所有工作坐标系

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   | ROS自带msg。          |

**使用命令示例：**

```json
ros2 topic pub --once /rm_driver/get_all_work_frame_cmd std_msgs/msg/Empty "{}"
```

**返回命令示例：**
所有工作坐标系名称。

```json
ros2 topic echo /rm_driver/change_work_frame_result
```

## 机械臂状态查询

### 获取机械臂当前状态-返回各关节角度和欧拉角

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   | ROS自带msg。          |

**使用命令示例：**

```json
ros2 topic pub --once /rm_driver/get_current_arm_state_cmd std_msgs/msg/Empty "{}"
```

**返回命令示例：**
当前机械臂关节状态(角度)+位姿信息(欧拉角)+报错信息。

```json
ros2 topic echo /rm_driver/get_current_arm_original_state_result
```

### 获取机械臂当前状态-返回各关节弧度和四元数

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`std_msgs`|   `Empty`   | ROS自带msg。          |

**使用命令示例：**

```json
ros2 topic pub --once /rm_driver/get_current_arm_state_cmd std_msgs/msg/Empty "{}"
```

**返回命令示例：**
当前机械臂关节状态(弧度)+位姿信息(四元数)+报错信息。

```json
ros2 topic echo /rm_driver/get_current_arm_state_result
```

## 机械臂运动规划

### 关节空间运动

**参数说明：**

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`joint`|   `float32[6]`   | 关节角度，单位：弧度。          |
|`speed`|   `uint8`   | 速度百分比例系数，0~100。          |
|`block`|   `bool`   | 是否为阻塞模式，true:阻塞，false:非阻塞。          |

**使用命令示例：**
六自由度：

```json
ros2 topic pub --once /rm_driver/movej_cmd rm_ros_interfaces/msg/Movej "joint: [0, 0, 0, 0, 0, 0] speed: 20 block: true dof: 6"
```

七自由度：

```json
ros2 topic pub --once /rm_driver/movej_cmd rm_ros_interfaces/msg/Movej "joint: [0, 0, 0, 0, 0, 0, 0] speed: 20 block: true trajectory_connect: 0 dof: 7"
```

**返回命令示例：**

```json
ros2 topic echo /rm_driver/movej_result
```

**参数说明：**
| 参数  | 类型     | 说明      |
|:---|:---|:---|
|`std_msgs`  | `bool` |true：设置成功；false：设置失败。driver终端返回错误码。 |

### 笛卡尔空间直线运动`Movel.msg`

**参数说明：**

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`geometry_msgs/Pose`|   `float`   | 机械臂位姿,x、y、z坐标(float类型，单位：m)+四元数。          |
|`speed`|   `uint8`   | 速度百分比例系数，0~100。          |
|`block`|   `bool`   | 是否为阻塞模式，true:阻塞，false:非阻塞。          |

**使用命令示例：**
先使用MoveJ_P：

```json
ros2 topic pub --once /rm_driver/movej_p_cmd rm_ros_interfaces/msg/Movejp "pose:position: x: -0.317239 y: 0.120903 z: 0.255765 orientation: x: -0.983404 y: -0.178432 z: 0.032271 w: 0.006129<br>speed:20 block: true"
```

后使用MoveL：

```json
ros2 topic pub --once /rm_driver/movel_cmd rm_ros_interfaces/msg/Movel "pose: position: x: -0.317239 y: 0.120903 z: 0.295765 orientation: x: -0.983404 y: -0.178432 z: 0.032271 w: 0.006129 speed: 20 trajectory_connect: 0 block: true"
```

**返回命令示例：**

```json
ros2 topic echo /rm_driver/movel_result
```

**参数说明：**
| 参数  | 类型     | 说明      |
|:---|:---|:---|
|`std_msgs`  | `bool` |true：设置成功；false：设置失败。driver终端返回错误码。 |

### 笛卡尔空间圆弧运动`Movec.msg`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`pose_mid`|   `geometry_msgs/Pose`   | 机械臂中间位姿,x、y、z坐标(float类型，单位：m)+四元数。          |
|`pose_end`|   `geometry_msgs/Pose类型`   | 终点位姿,x、y、z坐标(float类型，单位：m)+四元数。          |
|`speed`|   `uint8`   | 速度百分比例系数，0~100。          |
|`block`|   `bool`   | 是否为阻塞模式，true:阻塞，false:非阻塞。          |

**使用命令示例：**
先使用MoveJ_P：

```json
ros2 topic pub --once /rm_driver/movej_p_cmd rm_ros_interfaces/msg/Movejp "pose: position: x: 0.274946 y: -0.058786 z: 0.299028 orientation: x: 0.7071 y: -0.7071 z: 0.0 w: 0.0 speed: 0 block: true"
```

使用movec到达指定位置：

```json
ros2 topic pub --once /rm_driver/movec_cmd rm_ros_interfaces/msg/Movec "pose_mid: position: x: 0.324946 y: -0.008786 z: 0.299028 orientation: x: 0.7071 y: -0.7071 z: 0.0 w: 0.0<br>pose_end: position: x: 0.274946 y: 0.041214 z: 0.299028 orientation: x: 0.7071 y: -0.7071 z: 0.0 w: 0.0 speed: 20 trajectory_connect: 0 block: false loop: 0
```

**返回命令示例：**

```json
ros2 topic echo /rm_driver/movec_result
```

### 关节角度CANFD透传`Jointpos.msg`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`joint`|   `float32[6]`   | 关节角度，单位：弧度。          |
|`follow`|   `bool`   | 跟随状态，true高跟随，false低跟随，不设置默认高跟随。          |
|`expand`|   `float32`   | 拓展关节，单位：弧度。          |
|`block`|   `bool`   | 是否为阻塞模式，true:阻塞，false:非阻塞。          |

**使用命令示例：**
透传需要连续发送多个连续的点实现，单纯靠以下命令并不能实现功能，当前moveit2控制使用了角度透传的控制方式。

```json
ros2 topic pub /rm_driver/movej_canfd_cmd rm_ros_interfaces/msg/Jointpos "joint: [0, 0, 0, 0, 0, 0] follow: false expand: 0.0 dof: 6"
```

**返回命令示例：**
成功：无返回值；失败返回：driver终端返回错误码。

### 位姿CANFD透传`Jointpos.msg`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`pose`|   `geometry_msgs/Pose`   | 透传位姿，x、y、z坐标(float类型，单位：m)+四元数。          |
|`follow`|   `bool`   | 跟随状态，true高跟随，false低跟随，不设置默认高跟随。          |

**使用命令示例：**
需要是大量(10个以上)位置连续的点，单纯靠以下命令并不能实现功能，以2ms以上的周期持续发布。

```json
ros2 topic pub /rm_driver/movep_canfd_cmd rm_ros_interfaces/msg/Cartepos "pose: position: x: 0.0 y: 0.0 z: 0.0 orientation: x: 0.0 y: 0.0 z: 0.0 w: 1.0 follow: false"
```

**返回命令示例：**
成功：无返回值；失败返回：driver终端返回错误码。

### 关节空间规划到目标位姿`Movejp.msg`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`pose`|   `geometry_msgs/Pose`   | 目标位姿，x、y、z坐标(float类型，单位：m)+四元数。          |
|`speed`|   `uint8`   | 速度百分比例系数，0~100。          |
|`block`|   `bool`   | 是否为阻塞模式，true:阻塞，false:非阻塞。          |

**使用命令示例：**

```json
ros2 topic pub --once /rm_driver/movej_p_cmd rm_ros_interfaces/msg/Movejp "pose: position: x: -0.317239 y: 0.120903 z: 0.255765 orientation: x: -0.983404 y: -0.178432 z: 0.032271 w: 0.006129 speed: 20 block: true"
```

**返回命令示例：**

```json
ros2 topic echo /rm_driver/movej_p_result
```

**参数说明：**
| 参数  | 类型     | 说明      |
|:---|:---|:---|
|`std_msgs`  | `bool` |true：设置成功；false：设置失败。driver终端返回错误码。 |

### 轨迹急停`std_msgs`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`data`|   `bool`   | 是否轨迹急停true急停，false不急停。          |

**使用命令示例：**

```json
ros2 topic pub /rm_driver/move_stop_cmd std_msgs/msg/Bool "data: true"
```

**返回命令示例：**

```json
ros2 topic echo /rm_driver/move_stop_result
```

**参数说明：**
| 参数  | 类型     | 说明      |
|:---|:---|:---|
|`std_msgs`  | `bool` |true：设置成功；false：设置失败。driver终端返回错误码。 |

## 控制器配置

### 获取控制器版本`Armsoftversion.msg`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`planversion`|   `string`   | 读取到的用户接口内核版本号。          |
|`ctrlversion`|   `string`   | 实时内核版本号。          |
|`kernal1`|   `string`   | 实时内核子核心 1 版本号。          |
|`kernal2`|   `string`   | 实时内核子核心 2 版本号。          |
|`productversion`|   `string`   | 机械臂型号。          |

**使用命令示例：**

```json
ros2 topic pub /rm_driver/get_arm_software_version_cmd std_msgs/msg/Empty "{}"
```

**返回命令示例：**

```json
ros2 topic echo /rm_driver/get_arm_software_version_result
```

**参数说明：**
| 参数  | 类型     | 说明      |
|:---|:---|:---|
|`std_msgs`  | `bool` |true：设置成功；false：设置失败。driver终端返回错误码。 |

## 末端工具IO配置

### 设置工具端电源输出`std_msgs`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`data`|   `uint16`   | 电源输出类型,范围：0~3。0-0V，1-5V，2-12V，3-24V。          |

**使用命令示例：**

```json
ros2 topic pub --once /rm_driver/set_tool_voltage_cmd std_msgs/msg/UInt16 "data: 0"
```

**返回命令示例：**

```json
ros2 topic echo /rm_driver/set_tool_voltage_result
```

**参数说明：**
| 参数  | 类型     | 说明      |
|:---|:---|:---|
|`std_msgs`  | `bool` |true：设置成功；false：设置失败。driver终端返回错误码。 |

## 末端手爪控制

睿尔曼机械臂末端支持各种常见夹爪，系统配置了因时的EG2-4C2手爪，为了便于用户操作手爪，机械臂控制器对用户适配了手爪的ROS控制。

### 设置夹爪力控夹取`Gripperpick.msg`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`speed`|   `uint16`   | 1～1000,代表手爪开合速度，无量纲。          |
|`force`|   `uint16`   | 1～1000,代表手爪夹持力，最大1.5kg。          |
|`block`|   `uint16`   | 是否为阻塞模式，true:阻塞，false:非阻塞。          |

**使用命令示例：**

```json
ros2 topic pub --once /rm_driver/set_gripper_pick_cmd rm_ros_interfaces/msg/Gripperpick "speed: 200 force: 200 block: true"
```

**返回命令示例：**

```json
ros2 topic echo /rm_driver/set_gripper_pick_result
```

**参数说明：**
| 参数  | 类型     | 说明      |
|:---|:---|:---|
|`std_msgs`  | `bool` |true：设置成功；false：设置失败。driver终端返回错误码。 |

### 设置夹爪持续力控夹取`Gripperpick.msg`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`speed`|   `uint16`   | 1～1000,代表手爪开合速度，无量纲。          |
|`force`|   `uint16`   | 1～1000,代表手爪夹持力，最大1.5kg。          |
|`block`|   `bool`   | 是否为阻塞模式，true:阻塞，false:非阻塞。          |

**使用命令示例：**

```json
ros2 topic pub --once /rm_driver/set_gripper_pick_on_cmd rm_ros_interfaces/msg/Gripperpick "speed: 200 force: 200 block: true"
```

**返回命令示例：**

```json
ros2 topic echo /rm_driver/set_gripper_pick_on_result
```

**参数说明：**
| 参数  | 类型     | 说明      |
|:---|:---|:---|
|`std_msgs`  | `bool` |true：设置成功；false：设置失败。driver终端返回错误码。 |

### 夹爪到达指定位置`Gripperset.msg`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`position`|   `uint16`   | 手爪目标位置，范围：1～1000,代表手爪开口度：0～70mm。          |
|`block`|   `bool`   | 是否为阻塞模式，true:阻塞，false:非阻塞。          |

**使用命令示例：**

```json
ros2 topic pub --once /rm_driver/set_gripper_position_cmd rm_ros_interfaces/msg/Gripperset "position: 500 block: true"
```

**返回命令示例：**

```json
ros2 topic echo /rm_driver/set_gripper_position_result
```

**参数说明：**
| 参数  | 类型     | 说明      |
|:---|:---|:---|
|`std_msgs`  | `bool` |true：设置成功；false：设置失败。driver终端返回错误码。 |

## 拖动示教及轨迹复现

### 设置力位混合控制`Setforceposition.msg`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`sensor`|   `uint8`   | 0-一维力；1-六维力<br>uint8 mode: 0-基坐标系力控；1-工具坐标系力控。          |
|`direction`|   `uint8`   | 力控方向；0-沿X轴；1-沿Y轴；2-沿Z轴；3-沿RX姿态方向；4-沿RY姿态方向；5-沿RZ姿态方向。          |
|`n`|   `int16`   | 力的大小，单位N，精确到0.1N。          |
|`block`|   `bool`   | 是否为阻塞模式，true:阻塞，false:非阻塞。          |

**使用命令示例：**

```json
ros2 topic pub --once /rm_driver/set_force_postion_cmd rm_ros_interfaces/msg/Setforceposition "sensor: 1 mode: 0 direction: 2 n: 3 block: false"
```

**返回命令示例：**

```json
ros2 topic echo /rm_driver/set_force_postion_result
```

**参数说明：**
| 参数  | 类型     | 说明      |
|:---|:---|:---|
|`std_msgs`  | `bool` |true：设置成功；false：设置失败。driver终端返回错误码。 |

### 结束力位混合控制`std_msgs`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`data`|   `bool`   | 是否为阻塞模式，true:阻塞，false:非阻塞。          |

**使用命令示例：**

```json
ros2 topic pub /rm_driver/stop_force_postion_cmd std_msgs/msg/Bool "data: true"
```

**返回命令示例：**

```json
ros2 topic echo /rm_driver/clear_force_data_result
```

**参数说明：**
| 参数  | 类型     | 说明      |
|:---|:---|:---|
|`std_msgs`  | `bool` |true：设置成功；false：设置失败。driver终端返回错误码。 |

## 末端六维力传感器的使用

睿尔曼RM-65F机械臂末端配备集成式六维力传感器，无需外部走线，用户可直接通过ROS话题对六维力进行操作。

### 清空六维力数据`std_msgs`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`data`|   `bool`   | 是否为阻塞模式，true:阻塞，false:非阻塞。          |

**使用命令示例：**

```json
ros2 topic pub /rm_driver/clear_force_data_cmd std_msgs/msg/Bool "data: true"
```

**返回命令示例：**

```json
ros2 topic echo /rm_driver/clear_force_data_result
```

**参数说明：**
| 参数  | 类型     | 说明      |
|:---|:---|:---|
|`std_msgs`  | `bool` |true：设置成功；false：设置失败。driver终端返回错误码。 |

## 末端五指灵巧手控制

睿尔曼RM-65机械臂末端配备了五指灵巧手，可通过ROS对灵巧手进行设置。

### 设置灵巧手手势序号`Handposture.msg`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`posture_num`|   `uint16`   | 预先保存在灵巧手内的手势序号，范围：1~40。          |
|`data`|   `bool`   | 是否为阻塞模式，true:阻塞，false:非阻塞。          |

**使用命令示例：**

```json
ros2 topic pub --once /rm_driver/set_hand_posture_cmd rm_ros_interfaces/msg/Handposture "posture_num: 1 block: true"
```

**返回命令示例：**

```json
ros2 topic echo /rm_driver/set_hand_posture_result
```

**参数说明：**
| 参数  | 类型     | 说明      |
|:---|:---|:---|
|`std_msgs`  | `bool` |true：设置成功；false：设置失败。driver终端返回错误码。 |

### 设置灵巧手动作序列`Handseq.msg`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`seq_num`|   `uint16`   | 预先保存在灵巧手内的序列序号，范围：1~40。          |
|`data`|   `bool`   | 是否为阻塞模式，true:阻塞，false:非阻塞。          |

**使用命令示例：**

```json
ros2 topic pub --once /rm_driver/set_hand_seq_cmd rm_ros_interfaces/msg/Handseq "seq_num: 1 block: true"
```

**返回命令示例：**

```json
ros2 topic echo /rm_driver/set_hand_seq_result
```

**参数说明：**
| 参数  | 类型     | 说明      |
|:---|:---|:---|
|`std_msgs`  | `bool` |true：设置成功；false：设置失败。driver终端返回错误码。 |

### 设置灵巧手各自由度角度`Handangle.msg`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`hand_angle`|   `int16[6]`   | 手指角度数组，范围：0~1000.另外，-1 代表该自由度不执行任何操作，保持当前状态。          |
|`data`|   `bool`   | 是否为阻塞模式，true:阻塞，false:非阻塞。          |

**使用命令示例：**

```json
ros2 topic pub --once /rm_driver/set_hand_angle_cmd rm_ros_interfaces/msg/Handangle "hand_angle: - 0 - 0 - 0 - 0 - 0 - 0 block: true"
```

**返回命令示例：**

```json
ros2 topic echo /rm_driver/set_hand_angle_result
```

**参数说明：**
| 参数  | 类型     | 说明      |
|:---|:---|:---|
|`std_msgs`  | `bool` |true：设置成功；false：设置失败。driver终端返回错误码。 |

### 设置灵巧手速度`Handspeed.msg`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`hand_speed`|   `int16[6]`   | 手指速度，范围：1~1000。          |
|`data`|   `bool`   | 是否为阻塞模式，true:阻塞，false:非阻塞。          |

**使用命令示例：**

```json
ros2 topic pub --once /rm_driver/set_hand_speed_cmd rm_ros_interfaces/msg/Handspeed "hand_speed: 200 block: true"
```

**返回命令示例：**

```json
ros2 topic echo /rm_driver/set_hand_speed_result
```

**参数说明：**
| 参数  | 类型     | 说明      |
|:---|:---|:---|
|`std_msgs`  | `bool` |true：设置成功；false：设置失败。driver终端返回错误码。 |

### 设置灵巧手力阈值`Handforce.msg`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`hand_force`|   `int16`   | 手指力，范围：1~1000。          |
|`data`|   `bool`   | 是否为阻塞模式，true:阻塞，false:非阻塞。          |

**使用命令示例：**

```json
ros2 topic pub --once /rm_driver/set_hand_force_cmd rm_ros_interfaces/msg/Handforce "hand_force: 200 block: true"
```

**返回命令示例：**

```json
ros2 topic echo /rm_driver/set_hand_force_result
```

**参数说明：**
| 参数  | 类型     | 说明      |
|:---|:---|:---|
|`std_msgs`  | `bool` |true：设置成功；false：设置失败。driver终端返回错误码。 |

## 升降机构

睿尔曼机械臂控制器可集成自主研发升降机构，本接口可以用于升降机构的控制。

### 升降机构速度开环控制`Liftspeed.msg`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`speed`|   `int16`   | 速度百分比，-100~100，Speed < 0:升降机构向下运动，Speed > 0:升降机构向上运动，Speed = 0:升降机构停止运动。          |
|`data`|   `bool`   | 是否为阻塞模式，true:阻塞，false:非阻塞。          |

**使用命令示例：**

```json
ros2 topic pub /rm_driver/set_lift_speed_cmd rm_ros_interfaces/msg/Liftspeed "speed: 100"
```

**返回命令示例：**

```json
ros2 topic echo /rm_driver/set_lift_speed_result
```

**参数说明：**
| 参数  | 类型     | 说明      |
|:---|:---|:---|
|`std_msgs`  | `bool` |true：设置成功；false：设置失败。driver终端返回错误码。 |

### 升降机构位置闭环控制`Liftheight.msg`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`height`|   `int16`   | 目标高度，单位 mm，范围：0-2600。          |
|`speed`|   `int16`   | 速度百分比，1-100。          |
|`data`|   `bool`   | 是否为阻塞模式，true:阻塞，false:非阻塞。          |

**使用命令示例：**

```json
ros2 topic pub --once /rm_driver/set_lift_speed_cmd rm_ros_interfaces/msg/Liftspeed "speed: 100"
```

**返回命令示例：**

```json
ros2 topic echo /rm_driver/set_lift_height_result
```

**参数说明：**

| 参数  | 类型     | 说明      |
|:---|:---|:---|
|`std_msgs`  | `bool` |ture：设置成功；false：设置失败。driver终端返回错误码。 |

### 获取升降机构状态`Liftstate.msg`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`height`|   `int16`   | 目标高度，单位 mm，范围：0-2600。          |
|`current`|   `int16`   | 当前电流。          |
|`err_flag`|   `uint16`   | 驱动错误代码。          |

**使用命令示例：**

```json
ros2 topic pub /rm_driver/get_lift_state_cmd std_msgs/msg/Empty "{}"
```

**返回命令示例：**
成功返回：升降机构当前状态；失败返回：driver终端返回错误码.

```json
ros2 topic echo /rm_driver/get_lift_state_result
```

## 透传力位混合控制补偿

针对睿尔曼六维力版本的机械臂，用户除了可直接使用示教器调用底层的力位混合控制模块外，还可以将自定义的轨迹以周期性透传的形式结合底层的力位混合控制算法进行补偿。
在进行力的操作之前，如果未进行力数据标定，可使用清空六维力数据接口对零位进行标定。

### 开启透传力位混合控制补偿模式`std_msgs`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`std_msgs`|   `Empty`   | 开启透传力位混合控制补偿模式。          |

**使用命令示例：**

```json
ros2 topic pub /rm_driver/start_force_position_move_cmd std_msgs/msg/Empty "{}"
```

**返回命令示例：**

```json
ros2 topic echo /rm_driver/start_force_position_move_result
```

**参数说明：**
| 参数  | 类型     | 说明      |
|:---|:---|:---|
|`std_msgs`  | `bool` |ture：设置成功；false：设置失败。driver终端返回错误码。 |

### 关闭透传力位混合控制补偿模式`std_msgs`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`std_msgs`|   `Empty`   | 关闭透传力位混合控制补偿模式。          |

**使用命令示例：**

```json
ros2 topic pub /rm_driver/stop_force_position_move_cmd std_msgs/msg/Empty "{}"
```

**返回命令示例：**

```json
ros2 topic echo /rm_driver/stop_force_position_move_result
```

**参数说明：**
| 参数  | 类型     | 说明      |
|:---|:---|:---|
|`std_msgs`  | `bool` |true：设置成功；false：设置失败。driver终端返回错误码。 |

### 透传力位混合补偿-关节`Forcepositionmovejoint.msg`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`joint`|   `float32[6]`   | 目标关节弧度。          |
|`sensor`|   `uint8`   | 所使用传感器类型，0-一维力，1-六维力。          |
|`mode`|   `uint8`   | 模式，0-沿基坐标系，1-沿工具端坐标系。          |
|`dir`|   `int16`   | 力控方向，0~5分别代表X/Y/Z/Rx/Ry/Rz，其中一维力类型时默认方向为Z方向。          |
|`force`|   `float32`   | 力的大小 单位0.1N。          |
|`follow`|   `bool`   | 是否高跟随，true:高跟随，false：低跟随。          |
|`dof`|   `uint8`   | 机械臂自由度。          |

**使用命令示例：**
需要是大量(10个以上)位置连续的点，以2ms以上的周期持续发布。

```json
ros2 topic pub /rm_driver/force_position_move_joint_cmd rm_ros_interfaces/msg/Forcepositionmovejoint " joint: [0, 0, 0, 0, 0, 0] sensor: 0 mode: 0 dir: 0 force: 0.0 follow: false dof: 6
```

**返回命令示例：**
成功无返回；失败返回：false，driver终端返回错误码。

### 透传力位混合补偿-位姿`Forcepositionmovepose.msg`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`pose`|   `float`   | 目标位姿，x、y、z坐标(单位：m)+四元数。          |
|`sensor`|   `uint8`   | 所使用传感器类型，0-一维力，1-六维力。          |
|`mode`|   `uint8`   | 模式，0-沿基坐标系，1-沿工具端坐标系。          |
|`dir`|   `int16`   | 力控方向，0~5分别代表X/Y/Z/Rx/Ry/Rz，其中一维力类型时默认方向为Z方向。          |
|`force`|   `float32`   | 力的大小 单位0.1N。          |
|`follow`|   `bool`   | 是否高跟随，true:高跟随，false：低跟随。          |

**使用命令示例：**
需要是大量(10个以上)位置连续 的点，以2ms以上的周期持续发布。

```json
ros2 topic pub /rm_driver/force_position_move_pose_cmd rm_ros_interfaces/msg/Forcepositionmovepose "pose: position: x: 0.0 y: 0.0 z: 0.0 orientation: x: 0.0 y: 0.0 z: 0.0 w: 1.0 sensor: 0 mode: 0 dir: 0 force: 0 follow: false"
```

**返回命令示例：**
成功无返回；失败返回：false，driver终端返回错误码。

## 机械臂状态主动上报

### 设置UDP机械臂状态主动上报配置`Setrealtimepush.msg`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`cycle`|   `uint16`   | 设置广播周期，单位为5ms(默认1即1*5=5ms,200Hz)。          |
|`port`|   `uint16`   | 设置广播的端口号(默认8089)。          |
|`force_coordinate`|   `uint16`   | 设置系统外受力数据的坐标系(仅带有力传感器的机械臂支持)。          |
|`ip`|   `string`   | 设置自定义的上报目标IP 地址(默认192.168.1.10)。          |
|`force`|   `float32`   | 力的大小 单位0.1N。          |
|`follow`|   `bool`   | 是否高跟随，true:高跟随，false：低跟随。          |

**使用命令示例：**

```json
ros2 topic pub --once /rm_driver/set_realtime_push_cmd rm_ros_interfaces/msg/Setrealtimepush "cycle: 1<br>port: 8089 force_coordinate: 0 ip: '192.168.1.10'"
```

**返回命令示例：**

```json
ros2 topic echo /rm_driver/set_realtime_push_result
```

**参数说明：**
| 参数  | 类型     | 说明      |
|:---|:---|:---|
|`std_msgs`  | `bool` |true：设置成功；false：设置失败。driver终端返回错误码。 |

### 查询UDP机械臂状态主动上报配置`Setrealtimepush.msg`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`cycle`|   `uint16`   | 设置广播周期，单位为5ms(默认1即1*5=5ms,200Hz)。          |
|`port`|   `uint16`   | 设置广播的端口号(默认8089)。          |
|`force_coordinate`|   `uint16`   | 设置系统外受力数据的坐标系(仅带有力传感器的机械臂支持)。          |
|`ip`|   `string`   | 设置自定义的上报目标IP 地址(默认192.168.1.10)。          |

**使用命令示例：**

```json
ros2 topic pub --once /rm_driver/get_realtime_push_cmd std_msgs/msg/Empty "{}"
```

**返回命令示例：**
成功设置信息；失败返回：driver终端返回错误码。

```json
ros2 topic echo /rm_driver/get_realtime_push_result
```

### UDP机械臂状态主动上报

#### 六维力`Sixforce.msg`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`force_fx`|   `float32`   | 沿x轴方向受力大小。          |
|`force_fy`|   `float32`   | 沿y轴方向受力大小。          |
|`force_fz`|   `float32`   | 沿z轴方向受力大小。          |
|`force_mx`|   `float32`   | 沿x轴方向转动受力大小。          |
|`force_my`|   `float32`   | 沿y轴方向转动受力大小。          |
|`force_mz`|   `float32`   | 沿y轴方向转动受力大小。          |

**使用命令示例：**

```json
ros2 topic echo /rm_driver/udp_six_force
```

#### 机械臂错误`std_msgs`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`data`|   `uint16`   | 机械臂报错信息。          |

**使用命令示例：**

```json
ros2 topic echo /rm_driver/udp_six_force
```

#### 系统错误`std_msgs`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`data`|   `uint16`   | 系统报错信息。          |

**使用命令示例：**

```json
ros2 topic echo /rm_driver/udp_sys_err
```

#### 关节错误`Jointerrorcode.msg`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`joint_error`|   `uint16`   | 每个关节报错信息。          |
|`dof`|   `uint8`   | 机械臂自由度信息。          |

**使用命令示例：**

```json
ros2 topic echo /rm_driver/udp_joint_error_code
```

#### 机械臂弧度数据`sensor_msgs`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`stamp`|   `int32`   | sec：时间信息，秒。          |
|`nanosec`|   `uint32`   | 时间信息，纳秒。          |
|`frame_id`|   `string`   | 坐标系名称。          |
|`name`|   `string`   | 关节名称。          |
|`position`|   `float64`   | 关节弧度信息。          |
|`elocity`|   `float64`   | 关节速度信息。          |
|`effort`|   `float64`   | 关节受力信息。          |

**使用命令示例：**

```json
ros2 topic echo /joint_states
```

#### 位姿信息`geometry_msgs`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`Point position`|   `float64`   | 机械臂当前坐标信息：x,y,z。          |
|`Quaternion orientation`|   `float64`   | 机械臂当前姿态信息：x，y，z，w。          |

**使用命令示例：**

```json
ros2 topic echo /rm_driver/udp_arm_position
```

#### 六维力传感器外受力数据`Sixforce.msg`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`force_fx`|   `float32`   | 当前传感器沿x轴方向受外力大小。          |
|`force_fy`|   `float32`   | 当前传感器沿y轴方向受外力大小。          |
|`force_fz`|   `float32`   | 当前传感器沿z轴方向受外力大小。          |
|`force_mx`|   `float32`   | 当前传感器沿x轴方向转动受外力大小。          |
|`force_my`|   `float32`   | 当前传感器沿y轴方向转动受外力大小。          |
|`force_mz`|   `float32`   | 当前传感器沿z轴方向转动受外力大小。          |

**使用命令示例：**

```json
ros2 topic echo /rm_driver/udp_six_zero_force
```

#### 系统外受力数据参考坐标系`std_msgs`

| 参数   | 类型 | 说明 |
|:--|:---|:----|
|`data`|   `uint16`   | 系统外受力数据的坐标系，0 为传感器坐标系 1 为当前工作坐标系 2 为当前工具坐标系。该数据会影响六维力传感器系统外受力数据的参考坐标系。          |

**使用命令示例：**

```json
ros2 topic echo /rm_driver/udp_arm_coordinate
```
