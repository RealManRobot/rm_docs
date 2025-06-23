# <p class="hidden">JSON协议：</p>系统指令集

## 电源控制

### 控制上电与断电`set_arm_power`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `set_arm_power` | `string` |控制机械臂上电、断电。|
| `arm_power` | `int` |上电状态1-上电0-断电。|

- **代码示例**

**输入**  

说明：控制机械臂上电。

```json
{"command":"set_arm_power","arm_power":1}
```

**输出**  

```json
{
    "command": "set_arm_power",
    "arm_power": true
}
```

### 读取电源状态`get_arm_power_state`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `get_arm_power_state` | `string` |查询机械臂电源状态。               |

- **代码示例**

**输入**  

说明：查询机械臂电源状态。

```json
{"command":"get_arm_power_state"}
```

**输出**  

上电状态（1-上电状态，0断电状态）。

```json
{
    "command":"get_arm_power_state",
    "power_state": 1
}
```

## 紧急停止

### 设置机械臂急停状态`set_arm_emergency_stop`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `set_arm_emergency_stop` | `string` |设置机械臂型号。               |
| `state` | `bool` |`true`：进入急停状态，`false`：关闭急停状态。               |

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `emergency_stop` | `bool` |`true`：成功，`false`：失败       |

- **代码示例**

**输入**  

设置机械臂进入急停状态。

```json
{ "command": "set_arm_emergency_stop","state":true}
```

**输出**  

设置成功：

```json
{
    "command":"set_arm_emergency_stop",
    "emergency_stop":true
}
```

设置失败：

```json
{
    "command":"set_arm_emergency_stop",
    "emergency_stop":false
}
```

## 版本信息

### 查询软件版本`get_arm_software_info`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `get_arm_software_info` | `string` |查询机械臂软件信息。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| Product_version | `string` |机械臂型号。|
| algorithm_info | `object` |算法库信息，其中version代表版本号。|
| communication_info | `object` |communication层软件信息，其中build_time代表编译时间，version代表版本号。|
| ctrl_info | `object` |ctrl层软件信息，其中build_time代表编译时间，version代表版本号。|
| program_info | `object` |program层软件信息，其中build_time代表编译时间，version代表版本号。|
| robot_controller_version | `string` |机械臂控制器版本信息。|

- **代码示例**

**输入**  

查询机械臂软件信息。

```json
{"command":"get_arm_software_info"} 
```

**输出**  

```json
{
    "Product_version":"ECO65-B",
    "algorithm_info":{
        "version":"1.4.11"
    },
    "command":"arm_software_info",
    "communication_info":{
        "build_time":"2024/11/5 21:00:00",
        "version":"1.0.1"
    },
    "ctrl_info":{
        "build_time":"2024/11/5 21:00:00",
        "version":"V1.0.3"
    },
    "program_info":{
        "build_time":"2025-04-09 10:46:48",
        "version":"V1.0.3"
    },
    "robot_controller_version":"4.0"
}
```

### 查询关节软件版本号`get_joint_software_version`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `get_joint_software_version` | `string` |获取关节软件版本号。|

- **代码示例**

**输入**：

```json
{"command":"get_joint_software_version"}
```

**输出**：

当前关节的版本号分别为：Vd5.1.0、Vd5.1.0、Vd5.1.0、Vd5.1.0、Vd5.1.0、Ve5.1.0。

```json
{
    "command":"get_joint_software_version",
    "version": [
        "Vd5.1.0",
        "Vd5.1.0",
        "Vd5.1.0",
        "Vd5.1.0",
        "Vd5.1.0",
        "Ve5.1.0"
    ]
}
```

### 查询末端接口板软件版本号`get_tool_software_version`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `get_tool_software_version` | `string` |获取末端接口板软件版本号。|

- **代码示例**

**输入**  

```json
{"command":"get_tool_software_version"}
```

**输出**
当前末端接口板的版本号为V1.9.3。

```json
{
    "command":"get_tool_software_version",
    "version": "V1.9.3"
}
```
