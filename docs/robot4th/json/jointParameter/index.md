# <p class="hidden">JSON protocol: </p>Joint Parameter Instruction Set

To configure the joint parameters of the robotic arm, errors in the joint must first be resolved. Joint parameters cannot be modified until the error codes are cleared. Additionally, before configuring the joint, it must first be disabled; otherwise, the settings will not be applied successfully.

::: warning
Once all joint parameters are modified, they are automatically saved to the joint's Flash and take effect immediately. Afterward, the joint will be in a disabled state, and a command must be sent to re-enable the joint for normal operation.

All parameters of the RealMan robotic arm are configured to their optimal state before delivery. It is generally not recommended for users to modify the underlying joint parameters. If the user needs to make modifications, the robotic arm must first be set to a non-enabled state. Afterward, the parameter modification command can be sent. Once the parameters are successfully updated, the joint re-enabling command should be issued. It is important to note that when re-enabling the joint, the user must ensure that the joint remains stationary to avoid errors during the enabling process. Once the joint is successfully re-enabled, the user can control its movement.
:::

## Set the joint configuration

### Set the maximum joint speed`set_joint_max_speed`

Set the maximum speed for the specified joint of the robotic arm. The joint sequence is arranged from the robotic arm's base to the end joint as follows:

For a 6-DoF robotic arm, the joint sequence is numbered from 1 to 6
For a 7-DoF robotic arm, the joint sequence is numbered from 1 to 7

- **Input parameter**

| Parameter                  | Type | Description                            |
| :-------------------- | :--- | :------------------------------ |
| `set_joint_max_speed` |   `string`   | Maximum joint speed setting command.         |
| `joint_max_speed`     |   `[int,int]`   | Joint number and maximum speed, in RPM. |

::: warning
It is recommended to use the default maximum speed. If any changes are required, the ratio of the maximum joint acceleration to the maximum speed of the joint must be ≥1.5, otherwise, abnormal motion may occur
:::

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :---------------- | :----- | :------------------------------------ |
| `joint_max_speed` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: Set joint 2 with a maximum speed of 30 RPM and a speed resolution of 0.001 RPM.

```json
{"command":"set_joint_max_speed","joint_max_speed":[2,30000]}
```

**Output**

```json
{
    "command": "set_joint_max_speed",
    "joint_max_speed": true
}
```

### Set the maximum joint acceleration`set_joint_max_acc`

- **Input parameter**

| Parameter                  | Type | Description                                |
| :-------------------- | :--- | :---------------------------------- |
| `set_joint_max_acc` |   `string`   | Set the maximum joint acceleration, with a parameter limit of no more than 500 RPM/s.             |
| `joint_max_acc`     |   `[int,int]`   | Joint number and maximum acceleration, in RPM/s. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :-------------- | :----- | :------------------------------------ |
| `joint_max_acc` | `bool` | `true`: setting succeeded, `false`: setting failed. |

::: warning
It is recommended to use the default maximum joint acceleration. If any changes are required, the ratio of the maximum joint acceleration to the maximum speed of the joint must be ≥1.5, otherwise, abnormal motion may occur
:::

- **Code demo**

**Input**

Execution: Set joint 2 with a maximum acceleration of 100 RPM/s and an acceleration resolution of 0.001 RPM/s.

```json
{"command":"set_joint_max_acc","joint_max_acc":[2,100000]}
```

**Output**

```json
{
    "command": "set_joint_max_acc",
    "joint_max_acc": true
}
```

### Set the minimum joint limit`set_joint_min_pos`

- **Input parameter**

| Parameter                | Type | Description                               |
| :------------------ | :--- | :--------------------------------- |
| `set_joint_min_pos` |   `string`   | Set the minimum joint limit.             |
| `joint_min_pos`     |   `[int,int]`   | Joint number and minimum limit angle, in °. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :-------------- | :----- | :------------------------------------ |
| `joint_min_pos` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: Set joint 1 with a minimum limit angle of -170°and a resolution of 0.001°.

```json
{"command":"set_joint_min_pos","joint_min_pos":[1,-170000]}
```

**Output**

```json
{
    "command": "set_joint_min_pos",
    "joint_min_pos": true
}
```

### Set the maximum joint limit`set_joint_max_pos`

- **Input parameter**

| Parameter                | Type | Description                               |
| :------------------ | :--- | :--------------------------------- |
| `set_joint_max_pos` |   `string`   | Set the maximum joint limit.             |
| `joint_max_pos`     |   `[int,int]`   | Joint number and maximum limit angle, in °. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :-------------- | :----- | :------------------------------------ |
| `joint_max_pos` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: Set joint 1 with a maximum limit angle of 170° and a resolution of 0.001°.

```json
{"command":"set_joint_max_pos","joint_max_pos":[1,170000]}
```

**Output**

```json
{
    "command": "set_joint_max_pos",
    "joint_max_pos": true
}
```

### Set the maximum joint speed (driver)`set_joint_drive_max_speed`

- **Input parameter**

| Parameter                        | Type | Description                            |
| :-------------------------- | :--- | :------------------------------ |
| `set_joint_drive_max_speed` |   `string`   | Maximum joint speed setting command.         |
| `joint_max_speed`           |   `[int,int]`   | Joint number and maximum speed, in RPM. |

::: warning
It is recommended to use the default maximum speed. If any changes are required, the ratio of the maximum joint acceleration to the maximum speed of the joint must be ≥1.5, otherwise, abnormal motion may occur
:::

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :---------------- | :----- | :------------------------------------ |
| `joint_max_speed` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: Set joint 2 with a maximum speed of 30 RPM and a speed resolution of 0.001 RPM.

```json
{"command":"set_joint_drive_max_speed","joint_max_speed":[2,30000]}
```

**Output**

```json
{
    "command": "set_joint_drive_max_speed",
    "joint_max_speed": true
}
```

### Set the maximum joint acceleration (driver)`set_joint_drive_max_acc`

- **Input parameter**

| Parameter                      | Type | Description                                |
| :------------------------ | :--- | :---------------------------------- |
| `set_joint_drive_max_acc` |   `string`   | Set the maximum joint acceleration.             |
| `joint_max_acc`           |   `[int,int]`   | Joint number and maximum acceleration, in RPM/s. |

::: warning
It is recommended to use the default maximum joint acceleration. If any changes are required, the ratio of the maximum joint acceleration to the maximum speed of the joint must be ≥1.5, otherwise, abnormal motion may occur
:::

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :-------------- | :----- | :------------------------------------ |
| `joint_max_acc` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: Set joint 2 with a maximum acceleration of 500 RPM/s and an acceleration resolution of 0.001 RPM/s.

```json
{"command":"set_joint_drive_max_acc","joint_max_acc":[2,500000]}
```

**Output**

```json
{
    "command": "set_joint_drive_max_acc",
    "joint_max_acc": true
}
```

### Set the minimum joint limit (driver)`set_joint_drive_min_pos`

- **Input parameter**

| Parameter                      | Type | Description                               |
| :------------------------ | :--- | :--------------------------------- |
| `set_joint_drive_min_pos` |   `string`   | Set the minimum joint limit.             |
| `joint_min_pos`           |   `[int,int]`   | Joint number and minimum limit angle, in °. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :-------------- | :----- | :------------------------------------ |
| `joint_min_pos` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: Set joint 1 with a minimum limit angle of -170°and a resolution of 0.001°.

```json
{"command":"set_joint_drive_min_pos","joint_min_pos":[1,-170000]}
```

**Output**

```json
{
    "command": "set_joint_drive_min_pos",
    "joint_min_pos": true
}
```

### Set the maximum joint limit (driver)`rm_set_joint_drive_max_pos()`

- **Input parameter**

| Parameter                      | Type | Description                               |
| :------------------------ | :--- | :--------------------------------- |
| `set_joint_drive_max_pos` |   `string`   | Set the maximum joint limit.             |
| `joint_max_pos`           |   `[int,int]`   | Joint number and maximum limit angle, in °. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :-------------- | :----- | :------------------------------------ |
| `joint_max_pos` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: Set joint 1 with a maximum limit angle of 170° and a resolution of 0.001°.

```json
{"command":"set_joint_drive_max_pos","joint_max_pos":[1,170000]}
```

**Output**

```json
{
    "command": "set_joint_drive_max_pos",
    "joint_max_pos": true
}
```

### Set the joint enabling state`set_joint_en_state`

- **Input parameter**

| Parameter                      | Type | Description                                     |
| :------------------------ | :--- | :--------------------------------------- |
| `set_joint_en_state` |   `string`   | Set the joint enabling state.                      |
| `joint_en_state`           |   `[int,int]`   | Joint number and enabling state, 1: enable, 0: disable. |

- **Output parameter**

| Parameter        | Type    | Description                         |
| :--------------- | :----- | :------------------------------------ |
| `joint_en_state` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: Enable joint 6.

```json
{"command":"set_joint_en_state","joint_en_state":[6,1]}
```

**Output**

```json
{
    "command": "set_joint_en_state",
    "joint_en_state": true
}
```

### Set the joint zero position`set_joint_zero_pos`

- **Input parameter**

| Parameter                 | Type | Description           |
| :------------------- | :--- | :------------- |
| `set_joint_zero_pos` |   `string`   | Set the joint zero position. |
| `joint_zero_pos`     |   `int`   | Joint number.     |

- **Output parameter**

| Parameter        | Type    | Description                         |
| :--------------- | :----- | :------------------------------------ |
| `joint_zero_pos` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: Set the position of Joint 3 to the zero position.

```json
{"command":"set_joint_zero_pos","joint_zero_pos":3}
```

**Output**

```json
{
    "command": "set_joint_zero_pos",
    "joint_zero_pos": true
}
```

### Clear the joint error code`set_joint_clear_err`

- **Input parameter**

| Parameter                  | Type | Description               |
| :-------------------- | :--- | :----------------- |
| `set_joint_clear_err` |   `string`   | Clear the joint error code. |
| `joint_clear_err`     |   `int`   | Joint number.        |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :---------------- | :----- | :------------------------------------ |
| `joint_clear_err` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: Clear joint 2 error code.

```json
{"command":"set_joint_clear_err","joint_clear_err":2}
```

**Output**

```json
{
    "command": "set_joint_clear_err",
    "joint_clear_err": true
}
```

### One-click setting of joint limits`auto_set_joint_limit`

- **Input parameter**

| Parameter                   | Type | Description               |
| :--------------------- | :--- | :----------------- |
| `auto_set_joint_limit` |   `string`   | One-click setting of joint limits. |
| `limit_mode`           |   `int`   | Limit setting mode.  |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :----------- | :----- | :------------------------------------ |
| `limit_mode` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: 1: Normal mode, where each joint's limits are defined by the soft limit and hardware limit from the specification parameters.

```json
{"command":"auto_set_joint_limit","limit_mode":1}
```

**Output**

```json
{
    "command": "auto_set_joint_limit",
    "limit_mode": true
}
```

## Query the joint configuration

Get information such as joint speed, acceleration, limits, and errors.

### Get the maximum joint speed`get_joint_max_speed`

- **Input parameter**

| Parameter                  | Type | Description               |
| :-------------------- | :--- | :----------------- |
| `get_joint_max_speed` |   `string`   | Get the maximum joint speed. |

- **Output parameter**

| Parameter              | Type | Description               |
| :---------------- | :--- | :----------------- |
| `joint_max_speed` |   `int`   | Return feedback on maximum joint speed. |

- **Code demo**

**Input**

Execution: Get the maximum joint speed.

```json
{"command":"get_joint_max_speed"}
```

**Output**

The maximum speed of each joint is sequentially reported as 0.03 RPM, in RPM, resolution: 0.

6-DoF robotic arm:

```json
{
    "state": "joint_max_speed",
    "joint_speed": [
        30,
        30,
        30,
        30,
        30,
        30
    ]
}
```

7-DoF robotic arm:

```json
{
    "state": "joint_max_speed",
    "joint_speed": [
        30,
        30,
        30,
        30,
        30,
        30,
        30
    ]
}
```

### Get the maximum joint acceleration`get_joint_max_acc`

- **Input parameter**

| Parameter                | Type | Description                 |
| :------------------ | :--- | :------------------- |
| `get_joint_max_acc` |   `string`   | Get the maximum joint acceleration. |

- **Output parameter**

| Parameter            | Type | Description                 |
| :-------------- | :--- | :------------------- |
| `joint_max_acc` |   `int`   | Return feedback on maximum joint acceleration. |

- **Code demo**

**Input**

Execution: Get the maximum joint acceleration.

```json
{"command":"get_joint_max_acc"}
```

**Output**

The maximum acceleration of each joint is sequentially reported as 0.5 RPM/s, in RPM/s, resolution: 0.001 RPM/s.

6-DoF robotic arm:

```json
{
    "state": "joint_max_acc",
    "joint_acc": [
        500,
        500,
        500,
        500,
        500,
        500
    ]
}
```

7-DoF robotic arm:

```json
{
    "state": "joint_max_acc",
    "joint_acc": [
        500,
        500,
        500,
        500,
        500,
        500,
        500
    ]
}
```

### Get the minimum joint limit`get_joint_min_pos`

- **Input parameter**

| Parameter                | Type | Description               |
| :------------------ | :--- | :----------------- |
| `get_joint_min_pos` |   `string`   | Get the minimum joint limit. |

- **Output parameter**

| Parameter            | Type | Description               |
| :-------------- | :--- | :----------------- |
| `joint_min_pos` |   `int`   | Return feedback on minimum joint limit. |

- **Code demo**

**Input**

Execution: Get the minimum joint limit.

```json
{"command":"get_joint_min_pos"}
```

**Output**

Return feedback on minimum joint limit:

For the 6-DoF, the minimum positions are as follows: joints 1, 3, and 5: -170°, joints 2, 4, and 6: -110°<br>
For the 7-DoF, the minimum positions are as follows: joints 1, 3, 4, and 6: -170°, joints 2, 5, and 7: -110°

Joint unit: °, resolution: 0.001°.

6-DoF robotic arm:

```json
{
    "state": "joint_min_pos",
    "min_pos": [
        -170000,
        -110000,
        -170000,
        -110000,
        -170000,
        -110000
    ]
}
```

7-DoF robotic arm:

```json
{
    "state": "joint_min_pos",
    "min_pos": [
        -170000,
        -110000,
        -170000,
        -170000,
        -110000,
        -170000,
        -110000
    ]
}
```

### Get the maximum joint limit`get_joint_max_pos`

- **Input parameter**

| Parameter                | Type | Description               |
| :------------------ | :--- | :----------------- |
| `get_joint_max_pos` |   `string`   | Get the maximum joint limit. |

- **Output parameter**

| Parameter            | Type | Description               |
| :-------------- | :--- | :----------------- |
| `joint_max_pos` |   `int`   | Return feedback on maximum joint limit. |

- **Code demo**

**Input**

Execution: Get the maximum joint limit.

```json
{"command":"get_joint_max_pos"}
```

**Output**

Return feedback on maximum joint limit:

For the 6-DoF, the minimum positions are as follows: joints 1, 3, and 5: 170°, joints 2, 4, and 6: 110° <br>
For the 7-DoF, the minimum positions are as follows: joints 1, 3, 4, and 6: 170°, joints 2, 5, and 7: 110°

Joint unit: °, resolution: 0.001°.

6-DoF robotic arm:

```json
{
    "state": "joint_max_pos",
    "max_pos": [
        170000,
        110000,
        170000,
        110000,
        170000,
        110000
    ]
}
```

7-DoF robotic arm:

```json
{
    "state": "joint_max_pos",
    "max_pos": [
        170000,
        110000,
        170000,
        170000,
        110000,
        170000,
        110000
    ]
}
```

### Get the maximum joint speed (driver)`get_joint_min_pos`

- **Input parameter**

| Parameter                | Type | Description               |
| :------------------ | :--- | :----------------- |
| `get_joint_min_pos` |   `string`   | Get the maximum joint speed. |

- **Code demo**

**Input**

Execution: Get the maximum joint speed.

```json
{"command":"get_joint_drive_max_speed"}
```

**Output**

The maximum speed of each joint is sequentially reported as 0.03 RPM, in RPM, resolution: 0.001 RPM.

6-DoF robotic arm:

```json
{
    "command": "get_joint_drive_max_speed",
    "joint_speed": [
        30,
        30,
        30,
        30,
        30,
        30
    ]
}
```

7-DoF robotic arm:

```json
{
    "command": "get_joint_drive_max_speed",
    "joint_speed": [
        30,
        30,
        30,
        30,
        30,
        30,
        30
    ]
}
```

### Get maximum joint acceleration (driver)`get_joint_drive_max_acc`

- **Input parameter**

| Parameter                      | Type | Description                 |
| :------------------------ | :--- | :------------------- |
| `get_joint_drive_max_acc` |   `string`   | Get maximum joint acceleration. |

- **Output parameter**

| Parameter  |   Type  |    Description   |
|   :-- |   :-- |   :--    |
| `get_joint_drive_max_acc` |   `int`   | Return feedback on maximum joint speed (driver). |

- **Code demo**

**Input**

Execution: Get maximum joint acceleration

```json
{"command":"get_joint_drive_max_acc"}
```

**Output**

The maximum acceleration of each joint is sequentially reported as 0.5 RPM/s, in RPM/s, resolution: 0.001 RPM/s.

6-DoF robotic arm:

```json
{
    "command": "get_joint_drive_max_acc",
    "joint_acc": [
        500,
        500,
        500,
        500,
        500,
        500
    ]
}
```

7-DoF robotic arm:

```json
{
    "command": "get_joint_drive_max_acc",
    "joint_acc": [
        500,
        500,
        500,
        500,
        500,
        500,
        500
    ]
}
```

### Get the minimum joint limit (driver) `get_joint_drive_min_pos`

- **Input parameter**

| Parameter                      | Type | Description               |
| :------------------------ | :--- | :----------------- |
| `get_joint_drive_min_pos` |   `string`   | Get the minimum joint limit. |

- **Output parameter**

|   Parameter  | Type    | Description  |
| :-- | :-- | :-- |
| `get_joint_drive_min_pos` |   `int`   | Return feedback on minimum joint limit (driver). |

- **Code demo**

**Input**

Execution: Get the minimum joint limit (driver).

```json
{"command":"get_joint_drive_min_pos"}
```

**Output**

Return feedback on minimum joint limit. For example, the RM65 and RM75 robotic arms are used. For detailed parameters, please refer to the parameter descriptions for each series of robotic arms in the [Getting Started Guide > Parameter Description](../../robotParameter/RM65OntologyParameters/index.md).

1. For the 6-DoF, the minimum positions are as follows: joints 1, and 4: -178°, joints 2: -130°, joints 3: -135°, joints 5: -128°, joints 6: -360°.
2. For the 7-DoF, the minimum positions are as follows: joints 1, 3, and 5: -178°, joints 2: -130°, joints 4: -135°, joints 6: -128°, joints 7: -360°.
3. Joint unit: °, resolution: 0.001°.

6-DoF robotic arm:

```json
{
    "command": "get_joint_drive_min_pos",
    "min_pos": [
        -178000,
        -130000,
        -135000,
        -178000,
        -128000,
        -360000
    ]
}
```

7-DoF robotic arm:

```json
{
    "command": "get_joint_drive_min_pos",
    "min_pos": [
        -178000,
        -130000,
        -178000,
        -135000,
        -178000,
        -128000,
        -360000
    ]
}
```

### Get the maximum joint limit (driver)`get_joint_drive_max_pos`

- **Input parameter**

| Parameter                      | Type | Description               |
| :------------------------ | :--- | :----------------- |
| `get_joint_drive_max_pos` |   `string`   | Get the maximum joint limit. |

- **Output parameter**

| Parameter  | Type | Description   |
| :--   | :--   | :--   |
| `get_joint_drive_max_pos` |   `int`   | Return feedback on maximum joint limit (driver). |

- **Code demo**

**Input**

Execution: Get the maximum joint limit.

```json
{"command":"get_joint_drive_max_pos"}
```

**Output**

Return feedback on maximum joint limit. For example, the following parameters are used. For detailed parameters, please refer to the parameter descriptions for each series of robotic arms in the [Getting Started Guide > Parameter Description](../../robotParameter/RM65OntologyParameters/index.md).

1. For the 6-DoF, the minimum positions are as follows: joints 1, and 4: 178°, joints 2: 130°, joints 3: 135°, joints 5: 128°, joints 6: 360°.
2. For the 7-DoF, the minimum positions are as follows: joints 1, 3, and 5: 178°, joints 2: 130°, joints 4: 135°, joints 6: 128°, joints 7: 360°.
3. Joint unit: °, resolution: 0.001°.

6-DoF robotic arm:

```json
{
    "command": "get_joint_drive_max_pos",
    "max_pos": [
        178000,
        130000,
        135000,
        178000,
        128000,
        360000
    ]
}
```

7-DoF robotic arm:

```json
{
    "command": "get_joint_drive_max_pos",
    "max_pos": [
        178000,
        130000,
        178000,
        135000,
        178000,
        128000,
        360000
    ]
}
```

### Get the joint enabling state`get_joint_en_state`

- **Input parameter**

| Parameter                 | Type | Description               |
| :------------------- | :--- | :----------------- |
| `get_joint_en_state` |   `string`   | Get the joint enabling state. |

- **Output parameter**

| Parameter             | Type | Description               |
| :--------------- | :--- | :----------------- |
| `joint_en_state` |   `int`   | Return feedback on joint enabling state. |

- **Code demo**

**Input**

Execution: Get the joint enabling state.

```json
{"command":"get_joint_en_state"}
```

**Output**

Return feedback on joint enabling state, 1: enable 0: disable.

6-DoF robotic arm:

```json
{
    "state": "joint_en_state",
    "en_state": [
        1,
        1,
        1,
        1,
        1,
        0
    ]
}
```

7-DoF robotic arm:

```json
{
    "state": "joint_en_state",
    "en_state": [
        1,
        1,
        1,
        1,
        1,
        1,
        0
    ]
}
```

### Get the joint error code`get_joint_err_flag`

- **Input parameter**

| Parameter                 | Type | Description               |
| :------------------- | :--- | :----------------- |
| `get_joint_err_flag` |      | Get the joint error code. |

- **Output parameter**

| Parameter  | Type | Description   |
| :-- | :--- | :-- |
| `joint_err_flag` |   `int`   | Return feedback on joint enabling state. |

- **Code demo**

**Input**

Execution: Get the joint error code.

```json
{"command":"get_joint_err_flag"}
```

**Output**

err_flag: return feedback on joint error code, error code: integer;<br>
brake_state: return feedback on joint brake state, 1: brake not engaged, 0: brake engaged.

6-DoF robotic arm:

```json
{
    "state": "joint_err_flag",
    "err_flag": [
        0,
        0,
        0,
        0,
        0,
        1
    ],
    "brake_state": [
        0,
        0,
        0,
        0,
        0,
        1
    ]
}
```

7-DoF robotic arm:

```json
{
    "state": "joint_err_flag",
    "err_flag": [
        0,
        0,
        0,
        0,
        0,
        0,
        1
    ],
    "brake_state": [
        0,
        0,
        0,
        0,
        0,
        0,
        1
    ]
}
```
