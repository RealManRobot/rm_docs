# <p class="hidden">JSON协议：</p>末端生态指令集

## 设置末端生态协议模式`set_rm_plus_mode`

设置末端生态协议模式，需要根据接口的波特率开启协议。

- **输入参数**  

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `set_rm_plus_mode` | `string` |设置末端生态协议。|
| `mode` | `int` |0-禁用协议；<br>9600-开启协议（波特率9600）；<br>115200-开启协议（波特率115200）；<br>256000-开启协议（波特率256000）；<br>460800-开启协议（波特率460800）。|

- **代码示例**

**输入**  

设置末端生态协议模式。

```json
{"command":"set_rm_plus_mode","mode":9600}
```

**输出**  

配置成功:

```json
{
    "command":"set_rm_plus_mode",
    "set_state":true
}
```

配置失败:

```json
{
    "command": "set_rm_plus_mode",
    "set_state":false
}
```

## 查询末端生态协议模式`get_rm_plus_mode`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `get_rm_plus_mode` | `string` |获取末端生态协议模式。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `get_rm_plus_mode` | `string` |获取末端生态协议模式。|
| `mode` | `int` |0-禁用协议；<br>9600-开启协议（波特率9600）；<br>115200-开启协议（波特率115200）；<br>256000-开启协议（波特率256000）；<br>460800-开启协议（波特率460800）。|

- **代码示例**

**输入**  

获取末端生态协议模式

```json
 {"command":"get_rm_plus_mode"}
```

**输出**  

```json
{
    "command":"get_rm_plus_mode",
    "mode":9600
}
```

## 设置触觉传感器模式`set_rm_plus_touch`

- **输入参数**  

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `set_rm_plus_touch` | `string` |设置触觉传感器开关。|
| `mode` | `int` |0-关闭触觉传感器；<br>1-打开触觉传感器（返回处理后数据）；<br> 2-打开触觉传感器（返回原始数据）。|

- **代码示例**

**输入**  

设置触觉传感器开关。

```json
{"command":"set_rm_plus_touch","mode":0}
```

**输出**  

配置成功:

```json
{
    "command":"set_rm_plus_touch",
    "set_state":true
}
```

配置失败:

```json
{
    "command":"set_rm_plus_touch",
    "set_state":false
}
```

## 查询触觉传感器模式`get_rm_plus_touch`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `get_rm_plus_touch` | `string` |获取触觉传感器模式。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `get_rm_plus_touch` | `string` |获取触觉传感器模式。|
| `mode` | `int` |0-关闭触觉传感器；<br>1-打开触觉传感器（返回处理后数据）；<br> 2-打开触觉传感器（返回原始数据）。|

- **代码示例**

**输入**  

获取触觉传感器模式

```json
{"command":"get_rm_plus_touch"}
```

**输出**  

```json
{
    "command":"get_rm_plus_touch",
    "mode":0
}
```

## 读取末端设备基础信息`get_rm_plus_base_info`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `get_rm_plus_base_info` | `string` |读取末端设备基础信息。|

- **输出参数**

<div class='tableWrap'>

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `get_rm_plus_base_info` | `string` |读取末端设备基础信息。|
| `base_info` | `object` |输出参数说明如下：<br>“manu”：设备厂家；<br>“type”：设备类型，包括1-两指夹爪、2-五指灵巧手、3-三指夹爪；<br>“hv”：硬件版本；<br>“sv”：软件版本；<br>“bv”：boot版本；<br>“id”：设备ID；<br>“dof”：自由度；<br>“check”：自检开关；<br>“bee”：蜂鸣器开关；<br>“force”：力控支持；<br>“touch”：触觉支持；<br>“touch_num”：触觉个数；<br>“touch_sw”：触觉开关；<br>“hand”：手方向，包括1-左手、2-右手；<br>“pos_up”：位置上限；<br>“pos_low”：位置下限；<br>“angle_up”：角度上限；<br>“angle_low”：角度下限；<br>“speed_up”：速度上限；<br>“speed_low”：速度下限；<br>“force_up”：力上限；<br>“force_low”：力下限。|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **代码示例**

**输入**  

获取触觉传感器模式

```json
{"command":"get_rm_plus_base_info"}
```

**输出**  

查询成功：

```json
{
    "command":"get_rm_plus_base_info",
    "base_info":{
        "angle_low":[0,0,0,0,0,0],
        "angle_up":[5500,7000,7000,7000,7000,9000],
        "bee":0,
        "bv":1286,
        "check":0,
        "dof":6,
        "force":false,
        "force_low":[0,0,0,0,0,0],
        "force_up":[0,0,0,0,0,0],
        "hand":1,
        "hv":256,
        "id":1,
        "manu":"QN",
        "pos_low":[0,0,0,0,0,0],
        "pos_up":[100,100,100,100,100,100],
        "speed_low":[0,0,0,0,0,0],
        "speed_up":[100,100,100,100,100,100],
        "sv":772,
        "touch":true,
        "touch_num":0,
        "touch_sw":0,
        "type":2
    }
}
```

查询失败：

```json
{
    "command":"get_rm_plus_base_info",
    "get_state":false
}
```

## 读取末端设备实时信息`get_rm_plus_state_info`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `get_rm_plus_state_info` | `string` |读取末端设备实时信息。|

- **输出参数**

<div class='tableWrap'>

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `get_rm_plus_state_info` | `string` |读取末端设备实时信息。|
| `state_info` | `object` |输出参数说明如下：<br>“sys_state”：系统状态；<br>“sys_error”：系统错误；<br>“dof_state”：各自由度当前状态；<br>“dof_err”：各自由度错误信息；<br>“pos”：各自由度当前位置；<br>"speed"：各自由度当前速度；<br>“angle”：各自由度当前角度；<br>“current”：各自由度当前电流；<br>“force”：自由度力矩，不带力控则不返回此字段；<br>“normal_force”：自由度触觉三维力的法向力；<br>“tangential_force”：自由度触觉三维力的切向力；<br>“tangential_force_dir”：自由度触觉三维力的切向力方向；<br>“tsa”：自由度触觉自接近；<br>“tma”：自由度触觉互接近；<br>“touch_data”：触觉传感器原始数据。|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **代码示例**

**输入**  

获取触觉传感器模式

```json
{"command":"get_rm_plus_state_info"}
```

**输出**  

查询成功：

```json
{
    "command":"get_rm_plus_state_info",
    "state_info":{
        "angle":[0,0,0,0,0,0],
        "current":[0,0,0,0,0,0],
        "dof_err":[0,0,0,0,0,0],
        "dof_state":[0,0,0,0,0,0],
        "normal_force":[65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535],
        "pos":[0,0,0,0,0,0],
        "speed":[0,0,0,0,0,0],
        "sys_state":0,
        "sys_err":0,
        "tangential_force":[65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535],
        "tangential_force_dir":[65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535],
        "tma":[4294967295,4294967295,4294967295],
        "tsa":[4294967295,4294967295,4294967295,4294967295,4294967295,4294967295,4294967295,4294967295]
    }
}
```

查询失败：

```json
{
    "command":"get_rm_plus_state_info",
    "get_state":false
}
```
