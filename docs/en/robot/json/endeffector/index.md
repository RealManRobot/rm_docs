# <p class="hidden">JSON protocol: </p>End-Effector Ecosystem Command Set

## Setting End-Effector Ecosystem Protocol Mode `set_rm_plus_mode`

To set the end-effector ecosystem protocol mode, the protocol must be enabled based on the interface's baud rate.

- **Input Parameters**

|Description|Type|Notes|
|:--|:--|:--|
|`set_rm_plus_mode`|`string`|Sets the end-effector ecosystem protocol.|
|`mode`|`int`|0 - Disable protocol;<br>9600 - Enable protocol (baud rate 9600);<br>115200 - Enable protocol (baud rate 115200);<br>256000 - Enable protocol (baud rate 256000);<br>460800 - Enable protocol (baud rate 460800).|

- **Code Example**

**Input**
Set the end-effector ecosystem protocol mode.

```json
{"command":"set_rm_plus_mode","mode":9600}
```

**Output**
Configuration successful:

```json
{
    "command":"set_rm_plus_mode",
    "set_state":true
}
```

Configuration failed:

```json
{
    "command": "set_rm_plus_mode",
    "set_state":false
}
```

## Querying End-Effector Ecosystem Protocol Mode `get_rm_plus_mode`

- **Input Parameters**

|Description|Type|Notes|
|:--|:--|:--|
|`get_rm_plus_mode`|`string`|Retrieves the end-effector ecosystem protocol mode.|

- **Output Parameters**

|Description|Type|Notes|
|:--|:--|:--|
|`get_rm_plus_mode`|`string`|Retrieves the end-effector ecosystem protocol mode.|
|`mode`|`int`|0 - Disable protocol;<br>9600 - Enable protocol (baud rate 9600);<br>115200 - Enable protocol (baud rate 115200);<br>256000 - Enable protocol (baud rate 256000);<br>460800 - Enable protocol (baud rate 460800).|

- **Code Example**

**Input**
Retrieve the end-effector ecosystem protocol mode.

```json
{"command":"get_rm_plus_mode"}
```

**Output**

```json
{
    "command":"get_rm_plus_mode",
    "mode":9600
}
```

## Setting Tactile Sensor Mode `set_rm_plus_touch`

- **Input Parameters**

|Description|Type|Notes|
|:--|:--|:--|
|`set_rm_plus_touch`|`string`|Sets the tactile sensor switch.|
|`mode`|`int`|0 - Disable tactile sensor;<br>1 - Enable tactile sensor (returns processed data);<br>2 - Enable tactile sensor (returns raw data).|

- **Code Example**

**Input**
Set the tactile sensor switch.

```json
{"command":"set_rm_plus_touch","mode":0}
```

**Output**
Configuration successful:

```json
{
    "command":"set_rm_plus_touch",
    "set_state":true
}
```

Configuration failed:

```json
{
    "command":"set_rm_plus_touch",
    "set_state":false
}
```

## Querying Tactile Sensor Mode `get_rm_plus_touch`

- **Input Parameters**

|Description|Type|Notes|
|:--|:--|:--|
|`get_rm_plus_touch`|`string`|Retrieves the tactile sensor mode.|

- **Output Parameters**

|Description|Type|Notes|
|:--|:--|:--|
|`get_rm_plus_touch`|`string`|Retrieves the tactile sensor mode.|
|`mode`|`int`|0 - Disable tactile sensor;<br>1 - Enable tactile sensor (returns processed data);<br>2 - Enable tactile sensor (returns raw data).|

- **Code Example**

**Input**
Retrieve the tactile sensor mode.

```json
{"command":"get_rm_plus_touch"}
```

**Output**

```json
{
    "command":"get_rm_plus_touch",
    "mode":0
}
```

## Reading Basic Information of End-Effector Device `get_rm_plus_base_info`

- **Input Parameters**

|Description|Type|Notes|
|:--|:--|:--|
|`get_rm_plus_base_info`|`string`|Reads the basic information of the end-effector device.|

- **Output Parameters**

<div class='tableWrap'>

|Description|Type|Notes|
|:--|:--|:--|
|`get_rm_plus_base_info`|`string`|Reads the basic information of the end-effector device.|
|`base_info`|`object`|Output parameter descriptions:<br>"manu": Device manufacturer;<br>"type": Device type, including 1 - Two-finger gripper, 2 - Five-finger dexterous hand, 3 - Three-finger gripper;<br>"hv": Hardware version;<br>"sv": Software version;<br>"bv": Bootloader version;<br>"id": Device ID;<br>"dof": Degrees of freedom;<br>"check": Self-check switch;<br>"bee": Beeper switch;<br>"force": Force control support;<br>"touch": Tactile support;<br>"touch_num": Number of tactile sensors;<br>"touch_sw": Tactile switch;<br>"hand": Hand orientation, including 1 - Left hand, 2 - Right hand;<br>"pos_up": Position upper limit;<br>"pos_low": Position lower limit;<br>"angle_up": Angle upper limit;<br>"angle_low": Angle lower limit;<br>"speed_up": Speed upper limit;<br>"speed_low": Speed lower limit;<br>"force_up": Force upper limit;<br>"force_low": Force lower limit.|

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

- **Code Example**
**Input**
Retrieve the tactile sensor mode.

```json
{"command":"get_rm_plus_base_info"}
```

**Output**
Query successful:

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

Query failed:

```json
{
    "command":"get_rm_plus_base_info",
    "get_state":false
}
```

## Reading Real-Time Information of End-Effector Device `get_rm_plus_state_info`

- **Input Parameters**

|Description|Type|Notes|
|:--|:--|:--|
|`get_rm_plus_state_info`|`string`|Reads the real-time information of the end-effector device.|

- **Output Parameters**

<div class='tableWrap'>

|Description|Type|Notes|
|:--|:--|:--|
|`get_rm_plus_state_info`|`string`|Reads the real-time information of the end-effector device.|
|`state_info`|`object`|Output parameter descriptions:<br>"sys_state": System status;<br>"sys_error": System error;<br>"dof_state": Current status of each degree of freedom (DoF);<br>"dof_err": Error information of each DoF;<br>"pos": Current position of each DoF;<br>"speed": Current speed of each DoF;<br>"angle": Current angle of each DoF;<br>"current": Current of each DoF;<br>"force": Torque of each DoF (not returned if force control is not supported);<br>"normal_force": Normal force of the tactile three-dimensional force of each DoF;<br>"tangential_force": Tangential force of the tactile three-dimensional force of each DoF;<br>"tangential_force_dir": Direction of the tangential force of the tactile three-dimensional force of each DoF;<br>"tsa": Tactile self-approach of each DoF;<br>"tma": Tactile mutual approach of each DoF;<br>"touch_data": Raw data from the tactile sensor.|

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

- **Code Example**
**Input**
Retrieve the tactile sensor mode.

```json
{"command":"get_rm_plus_state_info"}
```

**Output**
Query successful:

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

Query failed:

```json
{
    "command":"get_rm_plus_state_info",
    "get_state":false
}
```
