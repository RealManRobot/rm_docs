# <p class="hidden">JSON protocol: </p>State Query Command Set

## Robotic arm state

### Get the current robotic arm state `get_current_arm_state`

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :---------------------- | :------- | :--------------- |
| `get_current_arm_state` | `string` | Get the current robotic arm state. |

- **Output parameter**

| Parameter        | Type    | Description                         |
| :------------------ | :------- | :--------------- |
| `current_arm_state` | `string` | Return the current robotic arm state. |
| `joint`             | `int`    | Joint angle        |
| `pose`              | `int`    | End effector pose         |
| `err`               | `int`    | System error code   |

- **Code demo**

**Input**

Execution: Get the current robotic arm state.

```json
{ "command": "get_current_arm_state" }
```

**Output**

Return the current robotic arm state as follows:

Angle of joints 1−6 of the 6-DoF robotic arm: 0.1°, 0.2°, 0.3°, 0.4°, 0.5°, and 0.6°, accuracy: 0.001°;<br>
Angle of joints 1−7 of the 7-DoF robotic arm: 0.1°, 0.2°, 0.3°, 0.4°, 0.5°, 0.6°, and 0.7°, accuracy: 0.001°;<br>
Position: x: 0.1 m, y: 0.2 m, z: 0.03 m, accuracy: 0.001 mm;<br>
Orientation: rx: 0.4 rad, ry: 0.5 rad, rz: 0.6 rad, accuracy: 0.001 rad;<br>
err: system error code, indicating the hardware error during the system running: 0. <br>

6-DoF robotic arm:

```json
{
    "state": "current_arm_state",
    "arm_state": {
        "joint": [
            100,
            200,
            300,
            400,
            500,
            600
        ],
        "pose": [
            100000,
            200000,
            30000,
            400,
            500,
            600
        ],
        "err": 0
    }
}
```

7-DoF robotic arm:

```json
{
    "state": "current_arm_state",
    "arm_state": {
        "joint": [
            100,
            200,
            300,
            400,
            500,
            600,
            700
        ],
        "pose": [
            100000,
            200000,
            30000,
            400,
            500,
            600
        ],
        "err": 0
    }
}
```

### Get the controller state `get_controller_state`

- **Input parameter**

| Parameter             | Type     | Description             |
| :------------------- | :------- | :--------------- |
| `get_controller_state` | `string` | Get the controller state. |

- **Output parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `controller_state` | `string` | Return the controller state. |

- **Code demo**

**Input**

Execution: Get the controller state.

```json
{ "command": "get_controller_state" }
```

**Output**

The accuracy of voltage, current, and temperature is 0.001.

```json
{
  "state": "controller_state",    //Return the controller state
  "voltage": 24000,               //Voltage: 24 V
  "current": 1500,                //Current: 1.5 A
  "temperature": 42000,           //Temperature: 42°C
  "err_flag": 0                  //Error flag: 0
}
```

### Clear the system error `clear_system_err`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `clear_system_err` | `string` |Clear the system error. |

- **Code demo**

**Input**

Manually clear the system error. If not cleared manually, the error will remain until a new motion command is issued.

```json
 {"command":"clear_system_err"} 
```

**Output**

The clearing of the system error is successful.

```json
{
    "command": "clear_system_err",
    "clear_state": true
}
```

The clearing of the system error has failed.

```json
{
    "command": "clear_system_err",
    "clear_state": false
}
```

### Get the current joint temperature `get_current_joint_temperature`

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :------------------------------ | :------- | :------------- |
| `get_current_joint_temperature` | `string` | Get the current joint temperature. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :-------------------------- | :---- | :-------------------------------- |
| `current_joint_temperature` | `int` | Return the current joint temperature, unit: °C, accuracy: 0.001℃ |

- **Code demo**

**Input**

Execution: Get the current joint temperature.

```json
{ "command": "get_current_joint_temperature" }
```

**Output**

Return the current joint temperature as follows:

Temperature of joints 1−6 of the 6-DoF robotic arm [27.5, 28.0, 26.8, 26.8, 28.9, 30.1];<br>
Temperature of joints 1−7 of the 7-DoF robotic arm [27.5, 28.0, 26.8, 26.8, 28.9, 30.1, 31.1]; unit: °C, accuracy: 0.001°C.

6-DoF robotic arm:

```json
{
    "state": "current_joint_temperature",
    "joint_temperature": [
        27500,
        28000,
        26800,
        26800,
        28900,
        30100
    ]
}
```

7-DoF robotic arm:

```json
{
    "state": "current_joint_temperature",
    "joint_temperature": [
        27500,
        28000,
        26800,
        26800,
        28900,
        30100,
        31100
    ]
}
```

### Get the current joint current `get_current_joint_current`

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :-------------------------- | :------- | :----------------- |
| `get_current_joint_current` | `string` | Get the current joint current. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :---------------------- | :---- | :---------------------------------------- |
| `current_joint_current` | `int` | Return the current joint current, unit: mA, accuracy: 0.001 mA. |

- **Code demo**

**Input**

Execution: Get the current joint current.

```json
{ "command": "get_current_joint_current" }
```

**Output**

Return the current joint current as follows:

Current of joints 1−6 of the 6-DoF robotic arm:
0.065 mA, -0.2 mA, 0.17 mA, 0.2 mA, -0.3 mA, 0.168 mA.

Current of joints 1−7 of the 7-DoF robotic arm:
0.065 mA, -0.2 mA, 0.17 mA, 0.2 mA, -0.3 mA, 0.168 mA, 0.178 mA.

6-DoF robotic arm:

```json
{
    "state": "current_joint_current",
    "joint_current": [
        65,
        -200,
        170,
        200,
        -300,
        168
    ]
}
```

7-DoF robotic arm:

```json
{
    "state": "current_joint_current",
    "joint_current": [
        65,
        -200,
        170,
        200,
        -300,
        168,
        178
    ]
}
```

### Get the current joint voltage `get_current_joint_voltage`

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :-------------------------- | :------- | :----------------- |
| `get_current_joint_voltage` | `string` | Get the current joint voltage. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :---------------------- | :---- | :-------------------------------------- |
| `current_joint_voltage` | `int` | Return the current joint voltage, unit: V, accuracy: 0.001 V. |

- **Code demo**

**Input**

Execution: Get the current joint voltage.

```json
{ "command": "get_current_joint_voltage" }
```

**Output**

Return the current joint voltage as follows:

Voltage of joints 1−6 of the 6-DoF robotic arm: 27.5 V, 28.0 V, 26.8 V, 26.8 V, 28.9 V, 30.1 V. <br>
Voltage of joints 1−7 of the 7-DoF robotic arm: 27.5 V, 28.0 V, 26.8 V, 26.8 V, 28.9 V, 30.1 V, 31.1 V.

6-DoF robotic arm:

```json
{
    "state": "current_joint_voltage",
    "joint_voltage": [
        27500,
        28000,
        26800,
        26800,
        28900,
        30100
    ]
}
```

7-DoF robotic arm:

```json
{
    "state": "current_joint_voltage",
    "joint_voltage": [
        27500,
        28000,
        26800,
        26800,
        28900,
        30100,
        31100
    ]
}
```

### Get the joint angle of the robotic arm `get_joint_degree`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `get_joint_degree` | `string` |Get the joint angle of the robotic arm. |

- **Code demo**

**Input**

Execution: Get the joint angle of the robotic arm.

```json
{"command":"get_joint_degree"}
```

**Output**

Return the joint angle of the 6-DoF robotic arm, accuracy: 0.001°.

```json
{
    "state": "joint_degree",
    "joint": [
        10,
        20,
        30,
        40,
        50,
        60
    ]
}
```

Return the joint angle of the 7-DoF robotic arm, accuracy: 0.001°.

```json
{
    "state": "joint_degree",
    "joint": [
        10,
        20,
        30,
        40,
        50,
        60,
        70
    ]
}
```

### Get all robotic arm states `get_arm_all_state`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `get_arm_all_state` | `string` |Get all robotic arm states. |

- **Output parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `Temperature accuracy` | `int` |0.001°C. |
| `Current accuracy` | `int` |0.001 mA. |
| `Voltage accuracy` | `int` |0.001 V. |
| `err_flag` | `string` |Joint error code. |
| `err` | `string` |System error codes, there may be multiple, for detailed inquiry please refer to the system error code table. |

- **Code demo**

**Input**

Execution: Get all states of the robotic arm at one time.

```json
{"command":"get_arm_all_state"}
```

**Output**

Return all states of the 6-DoF robotic arm.

```json
{
    "state": "arm_all_state",
    "all_state": {
        "temperature": [
            21,
            22,
            23,
            24,
            25,
            26
        ],
        "current": [
            11,
            12,
            13,
            14,
            15,
            16
        ],
        "voltage": [
            31,
            32,
            33,
            34,
            35,
            36
        ],
        "err_flag": [
            1,
            2,
            3,
            4,
            5,
            6
        ],
        "en_flag": [
            1,
            1,
            1,
            1,
            1,
            1
        ],
        "err": 0
    }
}
```

Return all states of the 7-DoF robotic arm.

```json
{
    "state": "arm_all_state",
    "all_state": {
        "temperature": [
            21,
            22,
            23,
            24,
            25,
            26,
            27
        ],
        "current": [
            11,
            12,
            13,
            14,
            15,
            16,
            17
        ],
        "voltage": [
            31,
            32,
            33,
            34,
            35,
            36,
            37
        ],
        "err_flag": [
            1,
            2,
            3,
            4,
            5,
            6,
            7
        ],
        "en_flag": [
            1,
            1,
            1,
            1,
            1,
            1
        ],
        "err": 0
    }
}
```

## Initial pose

### Set the initial pose `set_init_pose`

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :-------------- | :------- | :------------------------ |
| `set_init_pose` | `string` | Set the initial pose.            |
| `init_pose`     | `int`    | Initial pose, accuracy: 0.001° |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :---------- | :----- | :------------------------------------ |
| `init_pose` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: Set the initial pose as follows:

Initial pose of the 6-DoF robotic arm [10°, 0°, 20°, 30°, 0°, 20°]. <br>
Initial pose of the 7-DoF robotic arm [10°, 0°, 20°, 30°, 0°, 20°, 20°].

6-DoF robotic arm:

```json
{ "command": "set_init_pose", "init_pose": [10000, 0, 20000, 30000, 0, 20000] }
```

7-DoF robotic arm:

```json
{"command":"set_init_pose","init_pose":[10000,0,20000,30000,0,20000,20000]}
```

**Output**

```json
{
    "command": "set_init_pose",
    "init_pose": true
}
```

### Get the initial pose `get_init_pose`

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :-------------- | :------- | :------------- |
| `get_init_pose` | `string` | Get the initial pose. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :-------------- | :------- | :------------- |
| `arm_init_pose` | `string` | Return the initial pose. |
| `init_pose`     | `int`    | Accuracy: 0.001°    |

- **Code demo**

**Input**

Execution: Get the initial pose.

```json
{ "command": "get_init_pose" }
```

**Output**

6-DoF robotic arm:

```json
{
    "state": "arm_init_pose",
    "init_pose": [
        10000,
        0,
        20000,
        30000,
        0,
        20000
    ]
}
```

7-DoF robotic arm:

```json
{
    "state": "arm_init_pose",
    "init_pose": [
        10000,
        0,
        20000,
        30000,
        0,
        20000,
        20000
    ]
}
```

## Installation mode

The RealMan robotic arm supports different installation modes. However, the robot's dynamic model parameters and frame directions may vary depending on the installation mode.

### Set installation mode parameters `set_install_pose`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `set_install_pose` | `string` |Set the installation mode of the base. |
| `pose` | `int` |Rotation angle, pitch angle, and azimuth angle of the base against the horizontal plane, accuracy: 1°. As shown above, the rotation angle is 0°, the pitch angle is 90°, and the azimuth angle is 45°. |

- **Code demo**

**Input**

```json
{"command":"set_install_pose","pose":[0,90,45]}
```

**Output**
Setting succeeded.

```json
{
    "command": "set_install_pose",
    "set_state": true
}
```

Setting failed.

```json
{
    "command": "set_install_pose",
    "set_state": false
}
```

### Get installation mode parameters `get_install_pose`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `get_install_pose` | `string` |Get the installation mode of the base. |

- **Code demo**

**Input**

```json
{"command":"get_install_pose"}
```

**Output**
Rotation angle, pitch angle, and azimuth angle of the base against the horizontal plane, accuracy: 1°. As shown above, the rotation angle is 0°, the pitch angle is 90°, and the azimuth angle is 45°.

```json
{
    "state": "install_pose",
    "pose": [
        0,
        90,
        45
    ]
}
```
