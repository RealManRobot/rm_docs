# <p class="hidden">JSON protocol: </p>IO Configuration Command Set

## Controller IO

The robotic arm is equipped with IO ports, categorized and quantified for Gen 2 as follows:

| Type | Description |
| :------ | :------------ |
| Digital output: DO | 4 channels, 0 V-12 V available|
| Digital input: DI | 3 channels, 0 V-12 V available |
| Analog output: AO | 4 channels, output voltage 0 V-10 V |
| Analog input: AI | 4 channels, input voltage 0 V-10 V |

The Gen 3 quantity and classification are as follows:

| Type | Description |
| :------ | :------------ |
| Digital IO: DO/DI multiplexing | 4 channels, 0 V-24 V available|

### Set the digital IO mode (Gen 3 controller) `set_IO_mode`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `set_IO_mode` | `string` |Set the digital IO mode. |
| `IO_Num` | `int` |IO port number, range: 1−4. |
| `IO_mode` | `int` |Mode select. 0: general-purpose input mode. <br>1: general-purpose output mode. <br>2: input start function multiplexing mode. <br>3: input pause function multiplexing mode. <br>4: input resumption function multiplexing mode. <br>5: input emergency stop function multiplexing mode. <br>6: input to current loop drag multiplexing mode. <br>7: input to position-only drag mode (available for the 6-DoF force version). <br>8: input to orientation-only drag mode (available for the 6-DoF force version). <br>9: input to position-orientation drag multiplexing mode (available for the 6-DoF force version). <br>10: input maximum external axis soft limit multiplexing mode (available for external axis mode of expansion joints). <br>11: input minimum external axis soft limit multiplexing mode (available for external axis mode of expansion joints). <br>12: input initial pose function multiplexing mode (triggered by low level). <br>13: output collision function multiplexing mode (normal output: low level, error output: high level).<br> 14: Real-Time Speed Adjustment Function Multiplexing Mode (Triggered by Low Level, when IO is pulled low, the speed is set to the value of the speed parameter, and when the IO returns to a high level, the speed is set to the initial value). |
| `realtime_speed` | `string` | Optional parameter, set this parameter when `IO_mode` is set to 14 (Real-Time Speed Adjustment Function Multiplexing Mode). |
| `speed` | `int` | Speed setting, value range 0-100. |
| `mode` | `int` | Mode selection. <br> 1-Single Trigger Mode, in single trigger mode, when IO is pulled low, the speed is set to the value of the speed parameter, and when the IO returns to a high level, the speed is set to the initial value; <br> 2-Continuous Trigger Mode, in continuous trigger mode, when IO is pulled low, the speed is set to the value of the speed parameter, and when the IO returns to a high level, the speed maintains the current value. |

- **Code demo**

**Input**

Set the digital IO mode.

```json
{"command":"set_IO_mode","IO_Num":1,"IO_mode":14,"realtime_speed":{"speed":50,"mode":1}}
```

**Output**

Setting succeeded:

```json
{
    "command": "set_IO_mode",
    "set_state": true
}
```

Setting failed:

```json
{
    "command": "set_IO_mode",
    "set_state": false
}
```

### Set the digital IO output state`set_DO_state`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `set_DO_state` | `string` |Set the digital IO output state. |
| `IO_Num` | `int` |IO port number, range: 1−4. |
| `state` | `int` |IO state, 1: high output, 0: low output. |

- **Code demo**

**Input**

```json
{"command":"set_DO_state","IO_Num":1,"state":1}
```

**Output**

Setting succeeded:

```json
{
    "command": "set_DO_state",
    "set_state": true
}
```

Setting failed:

```json
{
    "command": "set_DO_state",
    "set_state": false
}
```

### Get the digital IO state (Gen 3 controller)`get_IO_state`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `get_IO_state` | `string` |Get the digital IO output state. |
| `IO_Num` | `int` |IO port number, range: 1−4. |

- **Output parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `IO_Num` | `int` |IO port number, range: 1−4. |
| `IO_mode` | `int` |Output setting mode. <br>0 - General Purpose Input Mode; <br>1 - General Purpose Output Mode; <br>2 - Input Start Function Multiplexing Mode; <br>3 - Input Pause Function Multiplexing Mode; <br>4 - Input Resume Function Multiplexing Mode; <br>5 - Input Emergency Stop Function Multiplexing Mode; <br>6 - Input Current Loop Drag Multiplexing Mode; <br>7 - Input Force-Only Position Drag Mode; <br>8 - Input Force-Only Posture Drag Mode; <br>9 - Input Force-Position Hybrid Drag Multiplexing Mode; <br>10 - Input External Axis Maximum Soft Limit Multiplexing Mode; <br>11 - Input External Axis Minimum Soft Limit Multiplexing Mode; <br>12 - Input Initial Pose Function Multiplexing Mode; <br>13 - Output Collision Function Multiplexing Mode; <br>14 - Real-Time Speed Adjustment Function Multiplexing Mode. |
| `IO_State` | `int` | IO status, 1 for high output, 0 for low output. |
| `realtime_speed` | `object` | Optional parameter, returned when IO_mode is set to 14 (Real-Time Speed Adjustment Function Multiplexing Mode). |
| `speed` | `int` | Output setting speed, value range 0-100. |
| `mode` | `int` | Output setting mode. <br>1 - Single Trigger Mode, in single trigger mode, when the IO is pulled low, the speed is set to the value of the speed parameter, and when the IO returns to a high level, the speed is set to the initial value. <br>2 - Continuous Trigger Mode, in continuous trigger mode, when the IO is pulled low, the speed is set to the value of the speed parameter, and when the IO returns to a high level, the speed maintains the current value. |

- **Code demo**

**Input**

Get the digital IO output state

```json
 {"command":"get_IO_state","IO_Num":1}
```

**Output**

```json
{
    "state": "IO_state",
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

### Get the digital IO output state (Gen 2 controller)`get_DO_state`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `get_DO_state` | `string` |Get the digital IO output state. |
| `IO_Num` | `int` |IO port number, range: 1−4. |

- **Output parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `state` | `int` |IO state, 1: high output, 0: low output. |

- **Code demo**

**Input**

Get the digital IO output state.

```json
{"command":"get_DO_state","IO_Num":1}
```

**Output**

```json
{
    "state": "DO_state",
    "IO_Num": 1,
    "IO_state": 1
}
```

### Get the digital IO input state (Gen 2 controller)`get_DI_state`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `get_DI_state` | `string` |Get the digital IO input state. |
| `IO_Num` | `int` |IO port number, range: 1−4. |

- **Output parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `state` | `int` |IO state, 1: high output, 0: low output. |

- **Code demo**

**Input**

Get the digital IO output state

```json
{"command":"get_DI_state","IO_Num":1}
```

**Output**

```json
{
    "state": "DI_state",
    "IO_Num": 1,
    "IO_state": 1
}
```

### Set the analog IO output state (Gen 2 controller)`set_AO_state`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `set_AO_state` | `string` |Set the analog IO output state. |
| `IO_Num` | `int` |IO port number, range: 1−4. |
| `voltage` | `int` |IO output voltage, resolution: 0.001 V, range: 0-10,000, output voltage: 0 V-10 V. |

- **Code demo**

**Input**

Set the analog IO output state.

```json
{"command":"set_AO_state","IO_Num":1,"voltage":1000}
```

**Output**

Setting succeeded:

```json
{
    "command": "set_AO_state",
    "state": true
}
```

Setting failed:

```json
{
    "command": "set_AO_state",
    "state": false
}
```

### Get the analog IO output state (Gen 2 controller)`get_AO_state`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `get_AO_state` | `string` |Get the analog IO output state. |
| `IO_Num` | `int` |IO port number, range: 1−4. |

- **Output parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `IO_Num` | `int` |IO port number, range: 1−4. |
| `voltage` | `int` |IO output voltage, resolution: 0.001 V, range: 0-10,000, output voltage: 0 V-10 V. |

- **Code demo**

**Input**

Get the analog IO output state.

```json
{"command":"get_AO_state","IO_Num":1}
```

**Output**

```json
{
    "state": "AO_state",
    "IO_Num": 1,
    "voltage": 1000
}
```

### Get the analog IO input state (Gen 2 controller)`get_AI_state`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `get_AI_state` | `string` |Get the analog IO input state. |
| `IO_Num` | `int` |IO port number, range: 1−4. |

- **Output parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `IO_Num` | `int` |IO port number, range: 1−4. |
| `voltage` | `int` |IO output voltage, resolution: 0.001 V, range: 0-10,000, output voltage: 0 V-10 V. |

- **Code demo**

**Input**

Get the analog IO output state.

```json
{"command":"get_AI_state","IO_Num":1}
```

**Output**

```json
{
    "state": "AI_state",
    "IO_Num": 1,
    "voltage": 1000
}
```

### Get all IO input states`get_IO_input`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `get_IO_input` | `string` |Get all IO input states. |

- **Output parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `DI` | `int` |Digital input state, 1: high, 0: low. |
| `AI` | `int` |Analog input voltage, accuracy: 0.001 V. For example, 1,000 represents 1 V. |

- **Code demo**

**Input**

Get all IO input states.

```json
{"command":"get_IO_input"}   
```

**Output**

```json
{
    "state": "IO_input_state",
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

### Get all IO output states`get_IO_output`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `get_IO_output` | `string` |Get all IO output states. |

- **Output parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `DO` | `int` |Digital output state, 1: high, 0: low. |
| `AO` | `int` |Analog output voltage, accuracy: 0.001 V. For example, 1,000 represents 1 V. |

- **Code demo**

**Input**
Get all IO output states.

```json
{"command":"get_IO_output"}    
```

**Output**

```json
{
    "state": "IO_output_state",
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

### Set the power output (Gen 3 controller)`set_voltage`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `set_voltage` | `string` |Set the power output. |
| `voltage_type` | `int` |Power output type, range: 0-3. |

- **Code demo**

**Input**

Set the power output.

```json
 {"command":"set_voltage","voltage_type":2}
```

**Output**

Setting succeeded:

```json
{
    "command": "set_voltage",
    "state": true
}
```

Setting failed:

```json
{
    "command": "set_voltage",
    "state": false
}
```

### Get the power output (Gen 3 controller)`get_voltage`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `get_voltage` | `string` |Get the power output. |

- **Output parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `voltage_type` | `int` |Power output type, 0: 0 V, 2: 12 V, 3: 24 V. |

- **Code demo**

**Input**
Get the controller power output type.

```json
{"command":"get_voltage"}   
```

**Output**

```json
{
    "command": "voltage_state",
    "voltage_type": 2
}
```

## End Effector IO

The end effector is equipped with IO ports, categorized and quantified as follows:

| Type | Description |
| :--- | :------------------- |
| Power output | One channel, 0 V/12 V/24 V available. |
| Digital IO | Two channels, input/output available.         |
| Communication port | One channel, RS485 available.        |

### Set the tool-end digital IO output state`set_tool_DO_state`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `set_tool_DO_state` | `string` |Set the digital IO output state. |
| `IO_Num` | `int` |IO port number, range: 1−2. |
| `state` | `int` |IO state, 1: high output, 0: low output. |

- **Code demo**

**Input**
Set the tool-end digital IO output state.

```json
{"command":"set_tool_DO_state","IO_Num":1,"state":1}
```

**Output**
Setting succeeded:

```json
{
    "command": "set_tool_DO_state",
    "set_state": true
}
```

Setting failed:

```json
{
    "command": "set_tool_DO_state",
    "set_state": false
}
```

### Set the tool-end digital IO mode`set_tool_IO_mode`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `set_tool_IO_mode` | `string` |Set the digital IO mode. |
| `IO_Num` | `int` |IO port number, range: 1−2. |
| `state` | `int` |IO state, 0: input mode, 1: output mode. |

- **Code demo**

**Input**
Set the digital IO mode

```json
{"command":"set_tool_IO_mode","IO_Num":1,"state":0}
```

**Output**
Setting succeeded:

```json
{
    "command": "set_tool_IO_mode",
    "set_state": true
}
```

Setting failed:

```json
{
    "command": "set_tool_IO_mode",
    "set_state": false
}
```

### Get the tool-end digital IO state`get_tool_IO_state`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `get_tool_IO_state` | `string` |Get the digital IO state. |

- **Output parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `IO_Mode` | `int` |0: input mode, 1: output mode. |
| `IO_State` | `int` |IO state, 1: high output, 0: low output. |

- **Code demo**

**Input**
Get the digital IO state.

```json
{"command":"get_tool_IO_state"} 
```

**Output**

```json
{
    "state": "tool_IO_state",
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

### Set the tool-end power output`set_tool_voltage`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `set_tool_voltage` | `string` |Set the power output. |
| `voltage_type` | `int` |Power output type, 0: 0 V, 2: 12 V, 3: 24 V. |

- **Code demo**

**Input**
Set the power output

```json
{"command":"set_tool_voltage","voltage_type":2}
```

**Output**
Setting succeeded

```json
{
    "command": "set_tool_voltage",
    "state": true
}
```

Setting failed

```json
{
    "command": "set_tool_voltage",
    "state": false
}
```

### Get the tool-end power output`get_tool_voltage`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `get_tool_voltage` | `string` |Get the power output. |

- **Output parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| voltage_type | `int` |Power output type, 0: 0 V, 2: 12 V, 3: 24 V. |

- **Code demo**

**Input**
Get the power output type

```json
{"command":"get_tool_voltage"} 
```

**Output**

```json
{
    "state": "tool_voltage_state",
    "voltage_type": 2
}
```
