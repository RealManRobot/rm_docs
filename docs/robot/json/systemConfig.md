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
    "state": "arm_power_state",
    "power_state": 1
}
```

## 版本信息

### 查询软件版本（第二代控制器）`get_arm_software_version`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `get_arm_software_version` | `string` |查询机械臂软件版本。|

- **输入参数**

```json
7013129：转换成uint32_t类型的16进制数据，0x6B0309。
6B：代表RM65-B型号6D-代表RM65-ZF型号6F-代表RM65-SF型号。
0309：代表软件版本号为V3.0.9。
Product_version：机械臂型号，仅第三代机械臂支持。
```

- **代码示例**

**输入**  

说明：查询机械臂软件版本。

```json
{"command":"get_arm_software_version"}
```

**输出**  

```json
{
    "Real-time_Kernal2": 515,
    "state": "arm_software_version",
    "Ctrl_version": 7014147,
    "Plan_version": 7013891,
    "ctrlM4_build_info": "202212282001",
    "Real-time_Kernal1": 515,
    "ctrlM7_build_info": "202212282001",
    "Plan_build_info": "202212282001",
    "Product_version": "RM65-BI"
}
```

### 查询软件版本（第三代控制器）`get_arm_software_info`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `get_arm_software_info` | `string` |查询机械臂软件信息。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| plan_info | `string` |plan层软件信息。|
| version | `float` |代表版本号。|
| build_time | `string` |代表编译时间。|
| ctrl_info | `string` |ctrl层软件信息。|
| version | `string` |代表版本号。|
| algorithm_info | `string` |算法库信息。|
| Product_version | `string` |机械臂型号，仅第三代机械臂支持。|
| dynamic_info | `string` |动力学版本，model_version 动力学模型版本号。|

- **代码示例**

**输入**  

查询机械臂软件信息。

```json
{"command":"get_arm_software_info"} 
```

**输出**  

```json
{
    "Product_version": "RM65-BI",
    "algorithm_info": {
        "version": "1.2.3"
    },
    "command": "arm_software_info",
    "ctrl_info": {
        "build_time": "2023/12/13 20:58:10",
        "version": "V1.4.6"
    },
    "dynamic_info": {
        "model_version": "1"
    },
    "plan_info": {
        "build_time": "2023/12/13 20:58:24",
        "version": "V1.4.6"
    }
}
```

### 查询关节软件版本号`get_joint_software_version`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `get_joint_software_version` | `string` |获取关节软件版本号。|

- **代码示例**

**输入**  

```json
{"command":"get_joint_software_version"}
```

**输出**
531为uint16类型，转化为16进制为：0x0213，则当前关节的版本号为2.13。

```json
{
    "state": "joint_software_version",
    "version": [
        531,
        531,
        531,
        531,
        531,
        531
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
531为uint16类型，转化为16进制为：0x0213，则当前末端接口板的版本号为2.13。

```json
{
    "state": "tool_software_version",
    "version": 531
}
```

## 累计数据

### 读取控制器的累计运行时间`get_system_runtime`

查询控制器自出厂以来，累计的运行时间。

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `get_system_runtime` | `string` |查询控制器累计的运行时间。|

- **代码示例**

**输入**  

说明：查询系统运行时间。

```json
{"command":"get_system_runtime"}
```

**输出**  

若系统正常，则返回运行时间。

```json
{
    "command": "get_system_runtime",
    "day": 0,
    "hour": 0,
    "min": 0,
    "sec": 0
}
```

### 清零控制器的累计运行时间`clear_system_runtime`

清零控制器自出厂以来，累计的运行时间。

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `clear_system_runtime` | `string` |清零控制器累计的运行时间。|

- **代码示例**

**输入**  

说明：清零系统运行时间。

```json
{"command":"clear_system_runtime"}
```

**输出**  
清除成功（true-清除成功，false-清除失败）。

```json
{
    "command": "clear_system_runtime",
    "clear_state": true
}
```

### 读取关节的累计转动角度`get_joint_odom`

查询各关节自出厂以来，累计的转动角度。

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `get_joint_odom` | `string` |查询各关节的累计转动角度。|

- **代码示例**

**输入**  

说明：查询关节的累计转动角度。

```json
{"command":"get_joint_odom"}  
```

**输出**  

若指令正确，返回六自由度各关节累计的转动角度。

```json
{
    "command": "get_joint_odom",
    "odom": [
        1000,
        2000,
        3000,
        4000,
        5000,
        6000
    ]
}
```

若指令正确，返回七自由度各关节累计的转动角度。

```json
{
    "command": "get_joint_odom",
    "odom": [
        1000,
        2000,
        3000,
        4000,
        5000,
        6000,
        7000
    ]
}
```

### 清零关节的累计转动角度`clear_joint_odom`

清零各关节自出厂以来，累计的转动角度。

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `clear_joint_odom` | `string` |清零关节累计转动的角度。|

- **代码示例**

**输入**  

说明：清零关节累计转动的角度。

```json
{"command":"clear_joint_odom"}
```

**输出**
清除成功（true-清除成功，false-清除失败）。

```json
{
    "command": "get_joint_odom",
    "odom": [
        1000,
        2000,
        3000,
        4000,
        5000,
        6000,
        7000
    ]
}
```

## 参数保存

### 参数保存（第二代）`save_device_info_all`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `save_device_info_all` | `string` |保存所有参数。|

- **代码示例**

**输入**  

说明：保存所有参数

```json
{"command":"save_device_info_all"}
```

**输出**  

设置成功（true-设置成功，false-设置失败）。

```json
{
    "command": "save_device_info_all",
    "model": true
}
```
