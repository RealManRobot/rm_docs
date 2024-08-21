# <p class="hidden">JSON协议：</p>UDP主动上报配置指令集

## UDP 机械臂状态主动上报接口

第三代机械臂提供 UDP 机械臂状态主动上报接口，使用时，需要和机械臂处于同一局域网络下，通过设置主动上报配置接口的目标 IP或和机械臂建立 TCP 连接，机械臂即会主动周期性上报机械臂状态数据，广播的默认目标端口为 8089（可配置），使用 UDP 协议监听本机的 8089 端口，即可收到数据，数据周期可配置，默认 5ms。

- **输入参数**

关节相关数组的大小跟关节数一致，如7轴，则joint_status等关节信息的字段，数组大小为7。详细参数如下：

|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|`state`|`string`|realtime_arm_joint_state 实时机械臂状态上报。|
|`arm_err`|`int`|机械臂错误码。|
|`sys_err`|`int`|系统错误码。|
|`joint_status`|`int`|当前关节状态。|
|`joint_current`|`int`|当前关节电流，精度 0.001mA。|
|`joint_en_flag`|`int`|当前关节使能状态 ，1 为上使能，0 为掉使能。|
|`joint_err_code`|`int`|当前关节错误码。|
|`joint_position`|`int`|当前关节角度，精度 0.001°。|
|`joint_temperature`|`int`|当前关节温度，精度 0.001℃。|
|`joint_voltage`|`int`|当前关节电压，精度 0.001V。|
|`joint_speed`|`int`|当前关节速度，精度0.01RPM。|
|`waypoint`|`object`|当前路点信息。|
|`position`|`int`|当前路点位置，精度 0.000001M。|
|`euler`|`object`|当前路点姿态欧拉角，精度 0.001rad。|
|`quat`|`object`|当前路点四元数，精度 0.000001。|
|`six_force_sensor`|`object`|六维力数据（六维力版本支持）。|
|`one_force_sensor`|`object`|一维力数据（一维力版本支持）。|
|`force`|`object`|当前力传感器原始数据 0.001N 或 0.001Nm。|
|`zero_force`|`object`|当前力传感器系统外受力数据 0.001N 或 0.001Nm。|
|`coordinate`|`int`|系统外受力数据的坐标系，0 为传感器坐标系 1 为当前工作坐标系 2 为当前工具坐标系。|
|`lift_state`|`int`|升降关节数据。包含：<br>height：当前升降机构高度，单位：mm，精度：1mm；<br>pos：当前角度  精度 0.001°；<br>current：当前升降驱动电流，单位：mA，精度：1mA；<br>err_flag：升降驱动错误代码，错误代码类型参考关节错误代码；<br>en_flag：当前关节使能状态 ，1 为上使能，0 为掉使能。<br>mode: 当前升降状态，0-空闲，1-正方向速度运动，2-正方向位置运动，3-负方向速度运动，4-负方向位置运动。<br>joint_id: 扩展关节ID。|
|`expand_state`|`int`|扩展关节相关数据。包含：<br>pos：当前角度，精度 0.001°；<br>current：当前升降驱动电流，单位：mA，精度：1mA；<br>err_flag：升降驱动错误代码，错误代码类型参考关节错误代码；<br>en_flag：当前关节使能状态 ，1 为上使能，0 为掉使能。<br>mode: 当前升降状态，0-空闲，1-正方向速度运动，2-正方向位置运动，3-负方向速度运动，4-负方向位置运动。<br>joint_id: 扩展关节ID。|

- **代码示例**

**输入**
六自由度UDP数据上报。

```json
{"arm_err":0,"joint_status":{"joint_current":[43000,2085000,1020000,1000,257000,-57000],"joint_en_flag":[1,1,1,1,1,1],"joint_err_code":[0,0,0,0,0,0],"joint_position":[13434,-69764,2926,-4742,-45721,-223],"joint_temperature":[33000,35000,37000,36000,37000,39000],"joint_voltage":[22000,22000,22000,22000,22000,22000]},"six_force_sensor":{"force":[-13000,3799,-22393,-216,-408,481],"zero_force":[17476,10415,30827,5,2,2],"coordinate":1},"state":"realtime_arm_joint_state","sys_err":0,"waypoint":{"euler":[2935,2935,2935],"position":[578568,127709,345856],"quat":[-23405,824245,106348,555663]}}
```


七自由度UDP数据上报。

```json
{"arm_err":0,"joint_status":{"joint_current":[43000,2085000,1020000,1000,257000,-57000,1000],"joint_en_flag":[1,1,1,1,1,1,1],"joint_err_code":[0,0,0,0,0,0,0],"joint_position":[13434,-69764,2926,-4742,-45721,-223,-223],"joint_temperature":[33000,35000,37000,36000,37000,39000,37000],"joint_voltage":[22000,22000,22000,22000,22000,22000,22000]},"six_force_sensor":{"force":[-13000,3799,-22393,-216,-408,481],"zero_force":[17476,10415,30827,5,2,2],"coordinate":1},"state":"realtime_arm_joint_state","sys_err":0,"waypoint":{"euler":[2935,2935,2935],"position":[578568,127709,345856],"quat":[-23405,824245,106348,555663]}}
```

## 查询 UDP 机械臂状态主动上报配置`get_realtime_push`

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
|`force_coordinate`|`int`|系统外受力数据的坐标系，0 为传感器坐标系 1 为当前工作坐标系 2 为当前工具坐标系（力传感器版本支持）。|
|`ip`|`string`|自定义的上报目标 IP 地址。|
|`custom`|`int`| 包含joint_speed：关节速度；lift_state：升降关节信息；expand_state：扩展关节信息。|

- **代码示例**

**输入**

用于查询 UDP 机械臂状态主动上报配置。

```json
{"command":"get_realtime_push"}
```

**输出**

```json
{"command":"get_realtime_push","custom":{"expand_state":true,"joint_speed":true,"lift_state":true},"cycle":100,"enable":true,"force_coordinate":2,"ip":"192.168.1.10","port":8099}
```


## 设置 UDP 机械臂状态主动上报配置`set_realtime_push`

- **输入参数**

|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|`set_realtime_push`|   `string`   |   设置 UDP 机械臂状态主动上报配置。     |
|`port`|`int`|设置广播的端口号。|
|`cycle`|`int`|设置广播周期，单位为5ms，如参数为1则表示5ms，参数为2则表示10ms。|
|`enable`|`bool`|设置使能，是否使能主动上报。|
|`force_coordinate`|`int`|系统外受力数据的坐标系，0 为传感器坐标系 1 为当前工作坐标系 2 为当前工具坐标系（力传感器版本支持）。|
|`ip`|`string`|自定义的上报目标 IP 地址。|
|`custom`|`int`| 自定义项内容，如下选项不是必选项，如果不设置，则保持设置之前的状态。包含joint_speed：关节速度；lift_state：升降关节信息；expand_state：扩展关节信息（升降关节和扩展关节为二选一，优先显示升降关节）。|

- **输出参数**

|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|`set_realtime_push`|`bool`|`true` 成功  `false`  失败。|

- **代码示例**

**输入**

用于设置 UDP 机械臂状态主动上报配置

```json
{"command":"set_realtime_push","cycle":100,"enable":true,"port": 8099,"force_coordinate":2,"ip":"192.168.1.223","custom":{"joint_s peed":true,"lift_state":true,"expand_state":true}}
```

**返回示例：**

```json
{"command":"set_realtime_push","state":true}
```
