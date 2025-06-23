# <p class="hidden">JSON protocol: </p>Controller Extension Device Command Set (Optional)

## Lifting mechanism

### Set the open-loop speed control `set_lift_speed`

Set the open-loop speed control of the lifting mechanism.

- **Input parameter**

| Parameter        | Type    | Description                             |
| :-------------- | :--- | :----------------------- |
| `set_lift_speed` |   `string`   | Set the speed of the lifting mechanism.            |
| `speed`      | `int` | Speed percentage, -100 to 100: <br>1. speed<0: Lifting mechanism moves down; <br>2. speed>0: Lifting mechanism moves up; <br>3. speed=0: Lifting mechanism stops moving.       |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :---------- | :----- | :------------------------------------ |
| `set_state` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Set the lifting mechanism to move at a speed of 50%.

```json
{"command":"set_lift_speed","speed":50}
```

**Output**

Setting succeeded

```json
{
    "command": "set_lift_speed",
    "set_state": true
}
```

### Set the closed-loop position control `set_lift_height`

Set the closed-loop position control of the lifting mechanism.

- **Input parameter**

| Parameter        | Type    | Description                             |
| :-------------- | :--- | :----------------------- |
| `set_lift_height` |   `string`   | Set the height of the lifting mechanism.            |
| `height`      | `int` | Target height, unit: mm.         |
| `speed`      | `int` | Speed percentage, 1−100.         |
| `block` |   `bool`   | `true`: indicates blocking mode,`false`: indicates non-blocking mode. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :---------- | :----- | :------------------------------------ |
| `trajectory_state` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Set the lifting mechanism to move to the height of 1 m at a speed of 50%.

```json
{"command":"set_lift_height","height":1000,"speed":50,"block":true}
```

**Output**

Set success

```json
{
    "command":"set_lift_height",
    "set_state":true
}
```

In-position success

```json
{
    "device": 3,
    "state": "current _trajectory_state",
    "trajectory_connect": 0,
    "trajectory_state": true
}
```

### Get the state of the lifting mechanism `get_lift_state`

- **Input parameter**

| Parameter        | Type    | Description                             |
| :-------------- | :--- | :----------------------- |
| `get_lift_state` |   `string`   | Get the state of the lifting mechanism.            |

- **Output parameter**

| Parameter        | Type    | Description                             |
| :-------------- | :--- | :----------------------- |
|  `height`  |  `int`  |  Height of the current lifting mechanism, unit: mm, accuracy: 1 mm.         |
|  `current`  |  `int`  |  Current of the current lifting drive, unit: mA, accuracy: 1 mA.         |
|  `err_flag`  |  `int`  |  Error code of the lifting drive, refer to joint error codes for details.         |
|  `mode`  |  `int`  |  Current lifting state, 0: idle, 1: forward speed motion, 2: forward position motion, 3: backward speed motion, 4: backward position motion.         |

- **Code demo**

**Input**

Get the state of the lifting mechanism

```json
{"command":"get_lift_state"}
```

**Output**

In-position success

```json
{
    "current": 2554,
    "en_flag": "1",
    "err_flag": "0",
    "height": 0,
    "joint_id": 1,
    "mode": 0,
    "command":"get_lift_state"
}
```

## General expansion joint

### Get the state of the expansion joint `expand_get_state`

- **Input parameter**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`expand_get_state`|   `string`   | Get the state of the expansion joint.         |

- **Output parameter**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`pos`            | `int` | Angle of the expansion joint, unit: °, accuracy: 0.001°. |
|  `err_flag`  |  `int`  |  Error code of the lifting drive, refer to joint error codes for details. |
|`en_flag`       | `int` |Enabling state of the expansion joint. |
|  `current`  |  `int`  |  Current of the current lifting drive, unit: mA, accuracy: 1 mA. |
|  `mode`  |  `int`  |  Current lifting state, 0: idle, 1: forward speed motion, 2: forward position motion, 3: backward speed motion, 4: backward position motion. |
|`joint_id`        | `int` |  ID of the expansion joint. |

- **Code demo**

**Input**

Execution: Get the state of the expansion joint.

```json
{"command":"expand_get_state"}
```

**Output**

```json
{
    "command":"expand_get_state",
    "pos": 0,
    "err_flag": 0,
    "en_flag": 1,
    "current": 0,
    " mode": 0,
    "joint_id": 1
}
```

### Set the open-loop speed control of the expansion joint `expand_set_speed`

- **Input parameter**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`expand_set_speed`|   `string`   | Set the open-loop speed control of the expansion joint.        |
| `speed`      | `int` | Speed percentage.         |

- **Output parameter**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
| `set_speed_state` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: Move at a maximum speed of 50%.

```json
{"command":"expand_set_speed","speed":-50}
```

**Output**

```json
{
    "command": "expand_set_speed",
    "set_speed_state": true
}
```

### Set the closed-loop position control of the expansion joint `expand_set_pos`

- **Input parameter**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`expand_set_pos`|   `string`   | Set the closed-loop position control of the expansion joint.         |
|`pos`|   `int`   | Position.         |
| `speed`      | `int` | Speed percentage.         |
| `block` |   `bool`   | `true`: indicates blocking mode,`false`: indicates non-blocking mode. |

- **Output parameter**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`set_pos_state`            | `bool` |`true`: setting succeeded, `false`: setting failed. |

You can refer to [current_trajectory_state](../motionConfig/index.md#5439) for the output parameters of the motion completion return result.

- **Code demo**

**Input**

Move to 0.0100° at a maximum speed of 50%.

```json
{"command":"expand_set_pos","pos":100,"speed":50,"block":true}
```

**Output**

```json
{
    "command": "expand_set_pos",
    "set_pos_state": true
}
```

Once in position, an in-position command will be returned as follows:

```json
{
    "state": "current_trajectory_state",
    "trajectory_state": true,
    "device": 4,
    "trajectory_connect": 1
}
```
