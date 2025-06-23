# <p class="hidden">JSON 协议：</p>IO配置指令集

## 控制器IO

第四代控制器数量和分类如下所示：

| 类型 |说明|
| :----------- | :------------ |
| 数字IO：DO/DI复用 | 4路，可配置为0\~24V |

### 设置数字IO模式`set_IO_mode`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `set_IO_mode` | `string` |设置数字IO模式。|
| `IO_Num` | `int` |IO端口号，范围：1~4。|
| `IO_mode` | `int` |模式选择。<br>0-通用输入模式；<br>1-通用输出模式；<br>2-输入开始功能复用模式；<br>3-输入暂停功能复用模式；<br>4-输入继续功能复用模式；<br>5-输入急停功能复用模式；<br>6-输入进入电流环拖动复用模式；<br>7-输入进入力只动位置拖动模式（六维力版本可配置）；<br>8-输入进入力只动姿态拖动模式（六维力版本可配置）；<br>9-输入进入力位姿结合拖动复用模式（六维力版本可配置）；<br>10-输入外部轴最大软限位复用模式（扩展关节的外部轴模式可配置）；<br>11-输入外部轴最小软限位复用模式（扩展关节的外部轴模式可配置）；<br>12-输入初始位姿功能复用模式（低电平触发）；<br>13-输出碰撞功能复用模式（正常输出低电平，错误输出高电平）；<br>14-实时调速功能复用模式（低电平触发，IO低电平触发时切换到设置的速度，IO恢复高电平时速度恢复到初始值）。|
|`realtime_speed`|`string`|缺省参数，当`IO_mode`设置为14（实时调速功能复用模式）时，设置此参数。|
|`speed`|`int`|设置速度，取值范围0-100。|
|`mode`|`int`|模式选择。<br>1-单次触发模式，单次触发模式下当IO拉低速度设置为speed参数值，IO恢复高电平速度设置为初始值；<br>2-连续触发模式，连续触发模式下IO拉低速度设置为speed参数值，IO恢复高电平速度维持当前值。|

- **代码示例**

**输入**  

设置数字IO模式。

```json
{"command":"set_IO_mode","IO_Num":1,"IO_mode":14,"realtime_speed":{"speed":50,"mode":1}}
```

**输出**  

配置成功：

```json
{
    "command": "set_IO_mode",
    "set_state": true
}
```

配置失败：

```json
{
    "command": "set_IO_mode",
    "set_state": false
}
```

### 设置数字IO输出状态`set_DO_state`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `set_DO_state` | `string` |设置数字IO输出。|
| `IO_Num` | `int` |IO端口号，范围：1~4。|
| `state` | `int` |IO状态，1-输出高，0-输出低。|

- **代码示例**

**输入**  

```json
{"command":"set_DO_state","IO_Num":1,"state":1}
```

**输出**  

配置成功：

```json
{
    "command": "set_DO_state",
    "set_state": true
}
```

配置失败：

```json
{
    "command": "set_DO_state",
    "set_state": false
}
```

### 查询数字IO状态`get_IO_state`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `get_IO_state` | `string` |获取数字IO输出。|
| `IO_Num` | `int` |IO端口号，范围：1~4。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `IO_Num` | `int` |IO 端口号，范围：1~4。|
| `IO_mode` | `int` |输出设置模式。<br>0-通用输入模式；<br>1-通用输出模式；<br>2-输入开始功能复用模式；<br>3-输入暂停功能复用模式；<br>4-输入继续功能复用模式；<br>5-输入急停功能复用模式；<br>6-输入进入电流环拖动复用模式；<br>7-输入进入力只动位置拖动模式；<br>8-输入进入力只动姿态拖动模式；<br>9-输入进入力位姿结合拖动复用模式；<br>10-输入外部轴最大软限位复用模式；<br>11-输入外部轴最小软限位复用模式；<br>12-输入初始位姿功能复用模式；<br>13-输出碰撞功能复用模式；<br>14-实时调速功能复用模式。|
|`IO_State`|`int`|IO状态，1-输出高，0-输出低。|
|`realtime_speed`|`object`|缺省参数，当`IO_mode`为14（实时调速功能复用模式）时，返回此参数。|
|`speed`|`int`|输出设置速度，取值范围0-100。|
|`mode`|`int`|输出设置模式。<br>1-单次触发模式，单次触发模式下当IO拉低速度设置为speed参数值，IO恢复高电平速度设置为初始值。<br>2-连续触发模式，连续触发模式下IO拉低速度设置为speed参数值，IO恢复高电平速度维持当前值。|

- **代码示例**

**输入**  

获取数字IO输出状态

```json
 {"command":"get_IO_state","IO_Num":1}
```

**输出**  

```json
{
    "command":"get_IO_state",
    "IO_Num": 1,
    "IO_Mode": 14,
    "IO_state": 1,
    "realtime_speed":
    {
        "speed":50,
        "mode":1
    }
}
```

### 查询所有IO输入状态`get_IO_input`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `get_IO_input` | `string` |获取所有IO输入状态。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `DI` | `int` |数字输入状态，1-高，0-低。|
| `AI` | `int` |模拟输入电压，精度0.001V，如：1000，代表1V。|

- **代码示例**

**输入**  

获取所有IO输入状态。

```json
{"command":"get_IO_input"}   
```

**输出**  

```json
{
    "command":"get_IO_input",
    "DI": [
        1,
        1,
        1
    ],
    "AI": [
        1000,
        2000,
        3000,
        4000
    ]
}
```

### 查询所有IO输出状态`get_IO_output`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `get_IO_output` | `string` |获取所有IO输出状态。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `DO` | `int` |数字输出状态，1-高，0-低。|
| `AO` | `int` |模拟输出电压，精度0.001V，如：1000，代表1V。|

- **代码示例**

**输入**
获取所有IO输出。

```json
{"command":"get_IO_output"}    
```

**输出**  

```json
{
    "command":"get_IO_output",
    "DO": [
        1,
        1,
        1,
        1
    ],
    "AO": [
        1000,
        2000,
        3000,
        3000
    ]
}
```

### 设置电源输出`set_voltage`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `set_voltage` | `string` |设置电源输出。|
| `voltage_type` | `int` |电源输出类型，0：0V，2：12V，3：24V。|
|`start_enable`|`bool`|`true`代表开机启动时即输出此配置电压，`false`代表取消开机启动即配置电压。|

- **代码示例**

**输入**  

设置电源输出。

```json
 {"command":"set_voltage","voltage_type":2,"start_enable":true}
```

**输出**  

配置成功:

```json
{
    "command": "set_voltage",
    "state": true
}
```

配置失败:

```json
{
    "command": "set_voltage",
    "state": false
}
```

### 查询电源输出`get_voltage`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `get_voltage` | `string` |获取电源输出。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `voltage_type` | `int` |电源输出类型，0：0V，2：12V，3：24V。|

- **代码示例**

**输入**
获取控制器电源输出类型。

```json
{"command":"get_voltage"}   
```

**输出**  

```json
{
    "command": "voltage_state",
    "voltage_type": 2
}
```

## 末端工具IO

机械臂末端工具端具有IO端口，数量和分类如下所示：

| 类型 | 说明 |
| :--- | :------------------- |
| 电源输出 | 1路，可配置为0V/12V/24V。 |
| 数字IO | 2路，输入输出可配置。          |
| 通讯接口 | 1路，可配置为RS485。         |

### 设置工具端数字IO输出状态`set_tool_DO_state`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `set_tool_DO_state` | `string` |设置数字IO输出。|
| `IO_Num` | `int` |IO端口号，范围：1~2。|
| `state` | `int` |IO状态，1-输出高，0-输出低。|

- **代码示例**

**输入**
设置工具端数字IO输出。

```json
{"command":"set_tool_DO_state","IO_Num":1,"state":1}
```

**输出**
配置成功：

```json
{
    "command": "set_tool_DO_state",
    "set_state": true
}
```

配置失败：

```json
{
    "command": "set_tool_DO_state",
    "set_state": false
}
```

### 设置工具端数字IO模式`set_tool_IO_mode`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `set_tool_IO_mode` | `string` |设置数字IO模式。|
| `IO_Num` | `int` |IO端口号，范围：1~2。|
| `state` | `int` |IO状态，0-输入状态，1-输出状态。|

- **代码示例**

**输入**
设置数字IO模式

```json
{"command":"set_tool_IO_mode","IO_Num":1,"state":0}
```

**输出**
配置成功：

```json
{
    "command": "set_tool_IO_mode",
    "set_state": true
}
```

配置失败：

```json
{
    "command": "set_tool_IO_mode",
    "set_state": false
}
```

### 查询工具端数字IO状态`get_tool_IO_state`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `get_tool_IO_state` | `string` |获取数字IO状态。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `IO_Mode` | `int` |0-输入模式，1-输出模式。|
| `IO_State` | `int` |IO状态，1-输出高，0-输出低。|

- **代码示例**

**输入**
获取数字IO状态。

```json
{"command":"get_tool_IO_state"} 
```

**输出**  

```json
{
    "command":"get_tool_IO_state",
    "IO_Mode": [
        0,
        1
    ],
    "IO_State": [
        0,
        1
    ]
}
```

### 设置工具端电源输出`set_tool_voltage`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `set_tool_voltage` | `string` |设置电源输出。|
| `voltage_type` | `int` |电源输出类型，0：0V，2：12V，3：24V。|

- **代码示例**

**输入**
设置电源输出

```json
{"command":"set_tool_voltage","voltage_type":2}
```

**输出**
配置成功

```json
{
    "command": "set_tool_voltage",
    "state": true
}
```

配置失败

```json
{
    "command": "set_tool_voltage",
    "state": false
}
```

### 查询工具端电源输出`get_tool_voltage`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `get_tool_voltage` | `string` |获取电源输出。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `get_tool_voltage` | `int` |电源输出类型，0：0V，2：12V，3：24V。|

- **代码示例**

**输入**
获取电源输出类型

```json
{"command":"get_tool_voltage"} 
```

**输出**  

```json
{
    "command":"get_tool_voltage",
    "voltage_type": 2
}
```
