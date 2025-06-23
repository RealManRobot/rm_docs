# <p class="hidden">JSON协议：</p>UDP主动上报指令集

## UDP 主动上报

### UDP 机械臂状态主动上报接口

提供 UDP 机械臂状态主动上报接口，使用时，需要和机械臂处于同一局域网络下，通过设置主动上报配置接口的目标 IP或和机械臂建立 TCP 连接，机械臂即会主动周期性上报机械臂状态数据，上报的默认目标端口为 8089（可配置），使用 UDP 协议监听本机的 8089 端口，即可收到数据，数据周期可配置，默认 5ms。

- **输入参数**

关节相关数组的大小跟关节数一致，如7轴，则joint_status等关节信息的字段，数组大小为7。详细参数如下：

|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|`state`|`string`|realtime_arm_joint_state 实时机械臂状态上报。|
|`arm_current_status`|`string`|"idle"：使能但空闲状态<br>"move_L"：move L运动中状态<br> "move_J"：move J运动中状态<br>"move_C"：move C运动中状态<br>"move_S"：move S运动中状态<br>"move_through_joint"：角度透传状态<br>"move_through_pose"： 位姿透传状态<br>"move_through_force_pose"： 力控透传状态<br>"move_through_current"： 电流环透传状态<br>"stop"： 急停状态<br>"slow_stop"： 缓停状态<br>"pause"： 暂停状态<br>"current_drag"： 电流环拖动状态<br>"sensor_drag"： 六维力拖动状态<br>"tech_demonstration"： 示教状态|
|`err`|`int`|系统错误码。|
|`joint_status`|`int`|当前关节状态。|
|`joint_current`|`int`|当前关节电流，精度 0.001mA。|
|`joint_en_flag`|`int`|当前关节使能状态 ，1 为上使能，0 为掉使能。|
|`joint_err_code`|`int`|当前关节错误码。|
|`joint_position`|`int`|当前关节角度，精度 0.001°。|
|`joint_temperature`|`int`|当前关节温度，精度 0.001℃。|
|`joint_voltage`|`int`|当前关节电压，精度 0.001V。|
|`joint_speed`|`int`|当前关节速度，精度0.02RPM。|
|`waypoint`|`object`|当前路点信息。|
|`position`|`int`|当前路点位置，精度 0.000001M。|
|`euler`|`object`|当前路点姿态欧拉角，精度 0.001rad。|
|`quat`|`object`|当前路点四元数，精度 0.000001。|
|`six_force_sensor`|`object`|六维力数据（六维力版本支持）。|
|`force`|`object`|当前力传感器原始数据 0.001N 或 0.001Nm。|
|`zero_force`|`object`|当前力传感器系统外受力数据 0.001N 或 0.001Nm。|
|`coordinate`|`int`|系统外受力数据的坐标系，0 为传感器坐标系 1 为当前工作坐标系 2 为当前工具坐标系。|
|`lift_state`|`int`|升降关节数据。包含：<br>height：当前升降机构高度，单位：mm，精度：1mm；<br>pos：当前角度  精度 0.001°；<br>current：当前升降驱动电流，单位：mA，精度：1mA；<br>err_flag：升降驱动错误代码，错误代码类型参考关节错误代码；<br>en_flag：当前关节使能状态 ，1 为上使能，0 为掉使能。<br>|
|`expand_state`|`int`|扩展关节相关数据。包含：<br>pos：当前角度，精度 0.001°；<br>current：当前升降驱动电流，单位：mA，精度：1mA；<br>err_flag：升降驱动错误代码，错误代码类型参考关节错误代码；<br>en_flag：当前关节使能状态 ，1 为上使能，0 为掉使能。<br>mode：当前升降状态，0-空闲，1-正方向速度运动，2-正方向位置运动，3-负方向速度运动，4-负方向位置运动。<br>joint_id：扩展关节ID。|
|`aloha_state`|`int`|aloha主臂状态。包含：<br>io1_state：IO1状态（手柄光电检测），0为按键未触发，1为按键触发；<br>io2_state：IO2状态（手柄按键检测），0为按键未触发，1为按键触发。|
|`hand`|`int`|灵巧手状态：<br>hand_pos ，表示灵巧手位置<br>hand_angle ，表示灵巧手角度<br>hand_force，表示灵巧手自由度力，单位mN<br>hand_state，表示灵巧手自由度状态，由灵巧手厂商定义状态含义<br>hand_err，表示灵巧手系统错误，由灵巧手厂商定义错误含义，具体定义如下表格所示。|
|`rm_plus_state`|`object`|末端设备实时信息，返回“disable”表示协议未开启，返回“offline”表示协议开启但是设备不在线。包含：<br>“sys_state”：系统状态；<br>“sys_err”：系统错误；<br>“dof_state”：各自由度当前状态；<br>“dof_err”：各自由度错误信息；<br>“pos”：各自由度当前位置；<br>“angle”：各自由度当前角度；<br>“current”：各自由度当前电流；<br>“force”：自由度力矩；<br>“normal_force”：自由度触觉三维力的法向力；<br>“tangential_force”：自由度触觉三维力的切向力；<br>“tangential_force_dir”：自由度触觉三维力的切向力方向；<br>“tsa”：自由度触觉自接近；<br>“tma”：自由度触觉互接近；<br>“touch_data”：触觉传感器原始数据。|
|`rm_plus_base`|`object`|末端设备基础信息，返回“disable”表示协议未开启，返回“offline”表示协议开启但是设备不在线。包含：<br>"manu"：设备厂家；<br>“type”：设备类型，1-两指夹爪，2-五指灵巧手，3-三指夹爪；<br>“hv”：硬件版本；<br>“sv”：软件版本；<br>“bv”：boot版本；<br>“id”：设备ID；<br>“dof”：自由度；<br>“check”：自检开关；<br>“bee”：蜂鸣器开关；<br>“force”：力控支持；<br>“touch”：触觉支持；<br>“touch_num”：触觉个数；<br>“touch_sw”：触觉开关；<br>“hand”：手方向，1-左手，2-右手；<br>“pos_up”：位置上限；<br>“pos_low”：位置下限；<br>“angle_up”：角度上限；<br>“angle_low”：角度下限；<br>“speed_up”：速度上限；<br>“speed_low”：速度下限；<br>“force_up”：力上限；<br>“force_low”：力下限|

- **灵巧手状态定义**

傲意：

| 状态名称             | 状态码 | 说明         |
| :-------------------- | :----- | :------------ |
| STATUS_OPENING       |      0 | 正在展开     |
| STATUS_CLOSING       |      1 | 正在抓取     |
| STATUS_POS_REACHED   |      2 | 位置到位停止 |
| STATUS_OVER_CURRENT  |      3 | 电流保护停止 |
| STATUS_FORCE_REACHED |      4 | 力控到位停止 |
| STATUS_STUCK         |      5 | 电机堵转停止 |

因时：

| 状态码 | 说明 |
| :--- | :--- |
| 0 | 正在松开 |
| 1 | 正在抓取 |
| 2 | 位置到位停止 |
| 3 | 力控到位停止 |
| 5 | 电流保护停止 |
| 6 | 电缸堵转停止 |
| 7 | 电缸故障停止 |

- **代码示例**

六自由度UDP数据上报。

```json
{"rm_plus_state":{"angle":[0,0,0,0,0,0],"current":[0,0,0,0,0,0],"dof_err":[0,0,0,0,0,0],"dof_state":[0,0,0,0,0,0],"normal_force":[65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535],"pos":[0,0,0,0,0,0],"speed":[0,0,0,0,0,0],"sys_state":0,"sys_err":0,"tangential_force":[65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535],"tangential_force_dir":[65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535],"tma":[4294967295,4294967295,4294967295],"tsa":[4294967295,4294967295,4294967295,4294967295,4294967295,4294967295,4294967295,4294967295]},
"rm_plus_base":{"angle_low":[0,0,0,0,0,0],"angle_up":[5500,7000,7000,7000,7000,9000],"bee":0,"bv":1286,"check":0,"dof":6,"force":false,"force_low":[0,0,0,0,0,0],"force_up":[0,0,0,0,0,0],"hand":1,"hv":256,"id":1,"manu":"QN","pos_low":[0,0,0,0,0,0],"pos_up":[100,100,100,100,100,100],"speed_low":[0,0,0,0,0,0],"speed_up":[100,100,100,100,100,100],"sv":772,"touch":true,"touch_num":0,"touch_sw":0,"type":2},"aloha_state":{"io1_state":0,"io2_state":0},"arm_current_status":"idle","err":[0],"joint_status":{"joint_current":[43000,2085000,1020000,1000,257000,-57000],"joint_en_flag":[1,1,1,1,1,1],"joint_err_code":[0,0,0,0,0,0],"joint_position":[13434,-69764,2926,-4742,-45721,-223],"joint_temperature":[33000,35000,37000,36000,37000,39000],"joint_voltage":[22000,22000,22000,22000,22000,22000]},"six_force_sensor":{"force":[-13000,3799,-22393,-216,-408,481],"zero_force":[17476,10415,30827,5,2,2],"coordinate":1},"state":"realtime_arm_joint_state","waypoint":{"euler":[2935,2935,2935],"position":[578568,127709,345856],"quat":[-23405,824245,106348,555663]}}
```

七自由度UDP数据上报。

```json
{"rm_plus_state":{"angle":[0,0,0,0,0,0],"current":[0,0,0,0,0,0],"dof_err":[0,0,0,0,0,0],"dof_state":[0,0,0,0,0,0],"normal_force":[65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535],"pos":[0,0,0,0,0,0],"speed":[0,0,0,0,0,0],"sys_state":0,"sys_err":0,"tangential_force":[65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535],"tangential_force_dir":[65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535],"tma":[4294967295,4294967295,4294967295],"tsa":[4294967295,4294967295,4294967295,4294967295,4294967295,4294967295,4294967295,4294967295]},
"rm_plus_base":{"angle_low":[0,0,0,0,0,0],"angle_up":[5500,7000,7000,7000,7000,9000],"bee":0,"bv":"V7.1","check":0,"dof":6,"force":false,"force_low":[0,0,0,0,0,0],"force_up":[0,0,0,0,0,0],"hand":1,"hv":"V1.27","id":1,"manu":"QN","pos_low":[0,0,0,0,0,0],"pos_up":[100,100,100,100,100,100],"speed_low":[0,0,0,0,0,0],"speed_up":[100,100,100,100,100,100],"sv":"V3.0","touch":true,"touch_num":0,"touch_sw":0,"type":2},"aloha_state":{"io1_state":0,"io2_state":0},"arm_current_status":"idle","err":[0],"joint_status":{"joint_current":[43000,2085000,1020000,1000,257000,-57000,1000],"joint_en_flag":[1,1,1,1,1,1,1],"joint_err_code":[0,0,0,0,0,0,0],"joint_position":[13434,-69764,2926,-4742,-45721,-223,-223],"joint_temperature":[33000,35000,37000,36000,37000,39000,37000],"joint_voltage":[22000,22000,22000,22000,22000,22000,22000]},"six_force_sensor":{"force":[-13000,3799,-22393,-216,-408,481],"zero_force":[17476,10415,30827,5,2,2],"coordinate":1},"state":"realtime_arm_joint_state","waypoint":{"euler":[2935,2935,2935],"position":[578568,127709,345856],"quat":[-23405,824245,106348,555663]}}
```

### 查询 UDP 机械臂状态主动上报配置`get_realtime_push`

- **输入参数**

|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|   `get_realtime_push`     |   `string`   |   查询 UDP 机械臂状态主动上报配置     |

- **输出参数**

|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|`port`|`int`|设置广播的端口号。|
|`cycle`|`int`|设置广播周期，单位为 5ms。|
|`enable`|`bool`|设置使能，是否使能主动上报。|
|`force_coordinate`|`int`|系统外受力数据的坐标系：<br>0 为传感器坐标系； <br>1 为当前工作坐标系； <br>2 为当前工具坐标系（力传感器版本支持）。|
|`ip`|`string`|自定义的上报目标 IP 地址。|
|`custom`|`object`| 包含<br>joint_speed：关节速度；<br>lift_state：升降关节信息；<br>expand_state：扩展关节信息；<br>arm_current_status：机械臂当前状态；<br>aloha_state：aloha主臂状态；<br>hand：灵巧手状态；<br>rm_plus_base：末端设备基础信息；<br>rm_plus_state：末端设备实时信息。|

- **代码示例**

**输入**  

用于查询 UDP 机械臂状态主动上报配置。

```json
{"command":"get_realtime_push"}
```

**输出**  

```json
{
    "command": "get_realtime_push",
    "custom": {
        "rm_plus_base":true,
        "rm_plus_state":true,
        "aloha_state": false,
        "expand_state": true,
        "joint_speed": true,
        "lift_state": true,
        "arm_current_status": true
    },
    "cycle": 100,
    "enable": true,
    "force_coordinate": 2,
    "ip": "192.168.1.10",
    "port": 8099
}
```

### 设置 UDP 机械臂状态主动上报配置`set_realtime_push`

- **输入参数**

|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|`set_realtime_push`|   `string`   |   设置 UDP 机械臂状态主动上报配置。     |
|`port`|`int`|设置广播的端口号。|
|`cycle`|`int`|设置广播周期，单位为5ms的倍数，如参数为1则表示5ms，参数为2则表示10ms。|
|`enable`|`bool`|设置使能，是否使能主动上报。|
|`force_coordinate`|`int`|系统外受力数据的坐标系，0 为传感器坐标系 1 为当前工作坐标系 2 为当前工具坐标系（力传感器版本支持）。|
|`ip`|`string`|自定义的上报目标 IP 地址。|
|`custom`|`object`| 自定义项内容，如下选项不是必选项，如果不设置，则保持设置之前的状态。包含：<br>joint_speed：关节速度；<br>lift_state：升降关节信息；<br>expand_state：扩展关节信息（升降关节和扩展关节为二选一，优先显示升降关节）；<br>arm_current_status：机械臂当前状态；<br>aloha_state：aloha主臂状态；<br>hand：灵巧手状态；<br>rm_plus_base：上报末端设备基础信息；<br>rm_plus_state：上报末端设备实时信息。|

::: warning 注意
hand字段，以下数据只有在调用[hand_follow_angle](../../json/endTool/index.md#灵巧手角度跟随控制hand_follow_angle)和[hand_follow_pos](../../json/endTool/index.md#灵巧手位置跟随控制hand_follow_pos)接口后才具有实际含义，顺序分别为大拇指弯曲，食指、中指、无名指、小拇指、大拇指旋转。

1. hand_pos ，表示灵巧手位置
2. hand_angle ，表示灵巧手角度
3. hand_force，表示灵巧手自由度力，单位mN
4. hand_state，表示灵巧手自由度状态，由灵巧手厂商定义状态含义
5. hand_err，表示灵巧手系统错误，由灵巧手厂商定义错误含义，例如因时状态码如下：1表示有错误，0表示无错误
:::

- **输出参数**

|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|`set_realtime_push`|`bool`|`true` 成功  `false`  失败。|

- **代码示例**

**输入**  

用于设置 UDP 机械臂状态主动上报配置

```json
{"command":"set_realtime_push","cycle":100,"enable":true,"port":8099,"force_coordinate":2,"ip":"192.168.1.223","custom":{"aloha_state":true,"joint_speed":true,"lift_state":true,"expand_state":true,"arm_current_status":true,"hand":true,"rm_plus_base":true, "rm_plus_state":true}}
```

**返回示例：**

```json
{
    "command": "set_realtime_push",
    "state": true
}
```
