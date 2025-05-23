# <p class="hidden">JSON protocol: </p>Motion Command Set

## Trajectory motion

### Joint motion`movej`

- **Input parameter**

| Parameter                 | Type     | Description                                                                                                              |
| :------------------- | :------- | :---------------------------------------------------------------------------------------------------------------- |
| `movej`              | `string` | joint motion command.                                                                                                   |
| `joint`              | `int`    | Target joint angle, accuracy: 0.001°.                                                                                      |
| `v`                  | `int`    | Speed percentage coefficient, range: 0-100.                                                                                        |
| `r`                  | `int`    | Blend radius percentage coefficient, range: 0-100.                                                                                      |
| `trajectory_connect` | `int`    | Optional, indicating whether to plan the motion together with the next trajectory. 0: The motion is planned immediately, 1: It is planned together with the next trajectory. When set to 1, the trajectory will not execute immediately. |

::: warning
The blend radius is valid only when trajectory_connect is 1, and is invalid when trajectory_connect is 0
:::

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :-------------- | :----- | :------------------------------------ |
| `receive_state` | `bool` | `true`: setting succeeded, `false`: setting failed. |

You can refer to [current_trajectory_state](#5439) for the output parameters of the motion completion return result.

- **Code demo**

**Input**

Execution: Joint motion with the following parameters:

6-DoF joint angle: [10.1°, 0.2°, 20.3°, 30.4°, 0.5°, 20.6°];<br>
7-DoF joint angle: [10.1°, 0.2°, 20.3°, 30.4°, 0.5°, 20.6°, 20.6°];<br>
Speed coefficient: 50%;<br>
Blend radius: no blending.

6-DoF robotic arm:

```json
{"command":"movej","joint":[10100,200,20300,30400,500,20600],"v":50,"r":0,"trajectory_connect":0}
```

7-DoF robotic arm:

```json
{"command":"movej","joint":[10100,200,20300,30400,500,20600,20600],"v":50,"r":0,"trajectory_connect":0}
```

**Output**

Instruction reception succeeded:

```json
{
    "command": "movej",
    "receive_state": true
}
```

Instruction reception failed:

```json
{
    "command": "movej",
    "receive_state": false
}
```

Motion completed succeeded:

```json
{
    "state": "current_trajectory_state",
    "trajectory_state": true,
    "device": 0,
    "trajectory_connect": 1
}
```

Motion completed failed:

```json
{
    "state": "current_trajectory_state",
    "trajectory_state": false,
    "device": 0,
    "trajectory_connect": 1
}
```

::: warning
trajectory_connect: whether to connect to the next trajectory, 0: all trajectories in position, 1: connected to the next trajectory.
:::

### Linear motion`movel`

- **Input parameter**

| Parameter                 | Type     | Description                                                                                                              |
| :------------------- | :------- | :---------------------------------------------------------------------------------------------------------------- |
| `movel`              | `string` | Linear motion execution.                                                                                                   |
| `pose`               | `int`    | Target pose, position accuracy: 0.001 mm, orientation accuracy: 0.001 rad.                                                                |
| `v`                  | `int`    | Speed percentage coefficient, range: 0-100.                                                                                        |
| `r`                  | `int`    | Blend radius percentage coefficient, range: 0-100.                                                                                      |
| `trajectory_connect` | `int`    | Optional, indicating whether to plan the motion together with the next trajectory. 0: The motion is planned immediately, 1: It is planned together with the next trajectory. When set to 1, the trajectory will not execute immediately. |

::: warning
The MOVEL command is also applicable when the target position remains unchanged, but the orientation changes<br>
The blend radius is valid only when trajectory_connect is 1, and is invalid when trajectory_connect is 0
:::

- **Output parameter**

| Parameter  | Type | Description  |
| :-------------- | :----- | :------------------------------------ |
| `receive_state` | `bool` | `true`: setting succeeded, `false`: setting failed. |

You can refer to [current_trajectory_state](#5439) for the output parameters of the motion completion return result.

- **Code demo**

**Input**

Execution: Linear motion with the following parameters:

Target position: x: 0.1 m, y: 0.2 m, z: 0.03 m<br>
Target orientation: rx: 0.4 rad, ry: 0.5 rad, rz: 0.6 rad<br>
Speed coefficient: 50%<br>
Blend radius: no blending.

```json
{"command":"movel","pose":[100000,200000,30000,400,500,600],"v":50,"r":0,"trajectory_connect":0}
```

**Output**

Instruction reception succeeded:

```json
{
    "command": "movel",
    "receive_state": true
}
```

Instruction reception failed:

```json
{
    "command": "movel",
    "receive_state": false
}
```

Motion completed succeeded:

```json
{
    "state": "current_trajectory_state",
    "trajectory_state": true,
    "device": 0,
    "trajectory_connect": 1
}
```

Motion completed failed:

```json
{
    "state": "current_trajectory_state",
    "trajectory_state": false,
    "device": 0,
    "trajectory_connect": 1
}
```

::: warning
trajectory_connect: whether to connect to the next trajectory, 0: all trajectories in position, 1: connected to the next trajectory.
:::

### Circular motion`movec`

- **Input parameter**

| Parameter                 | Type     | Description                                                                                                              |
| :------------------- | :------- | :---------------------------------------------------------------------------------------------------------------- |
| `movec`              | `string` | Circular motion                                                                                                          |
| `pose`               | `object`    | Pose.                                                                                                           |
| `pose_via`           | `int`    | Pose of via-point: position accuracy: 0.001 mm, orientation accuracy: 0.001 rad.                                                                |
| `pose_to`            | `int`    | Target pose: position accuracy: 0.001 mm, orientation accuracy: 0.001 rad.                                                                  |
| `v`                  | `int`    | Speed percentage coefficient, range: 0-100.                                                                                        |
| `r`                  | `int`    | Blend radius percentage coefficient, range: 0-100.                                                                                      |
| `loop`               | `int`    | Loop count, 0 by default.                                                                                               |
| `trajectory_connect` | `int`    | Optional, indicating whether to plan the motion together with the next trajectory. 0: The motion is planned immediately, 1: It is planned together with the next trajectory. When set to 1, the trajectory will not execute immediately. |

::: warning
The blend radius is valid only when trajectory_connect is 1, and is invalid when trajectory_connect is 0.
:::

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :-------------- | :----- | :------------------------------------ |
| `receive_state` | `bool` | `true`: setting succeeded, `false`: setting failed. |

You can refer to [current_trajectory_state](#5439) for the output parameters of the motion completion return result.

- **Code demo**

**Input**

Execution: Circular motion with the following parameters:

Position of via-point: x: 0.1 m, y: 0.2 m, z: 0.03 m;<br>
Orientation of via-point: rx: 0.4 rad, ry: 0.5 rad, rz: 0.6 rad;<br>
Position of final point: x: 0.2 m, y: 0.3 m, z: 0.03 m;<br>
Orientation of final point: rx: 0.4 rad, ry: 0.5 rad, rz: 0.6 rad;<br>
Speed coefficient: 50%;<br>
Blend radius: no blending. <br>

```json
{"command":"movec","pose":{"pose_via":[100000,200000,30000,400,500,600],"pose_to":[200000,300000,30000,400,500,600]},"v":50,"r":0,"loop":0,"trajectory_connect":0}
```

**Output**

Instruction reception succeeded:

```json
{
    "command": "movec",
    "receive_state": true
}
```

Instruction reception failed:

```json
{
    "command": "movec",
    "receive_state": false
}
```

Motion completed succeeded:

```json
{
    "state": "current_trajectory_state",
    "trajectory_state": true,
    "device": 0,
    "trajectory_connect": 1
}
```

Motion completed failed:

```json
{
    "state": "current_trajectory_state",
    "trajectory_state": false,
    "device": 0,
    "trajectory_connect": 1
}
```

::: warning
trajectory_connect: whether to connect to the next trajectory, 0: all trajectories in position, 1: connected to the next trajectory.
:::

### Joint space planning to target orientation`movej_p`

Move to target pose through joint space planning.

- **Input parameter**

| Parameter                 | Type     | Description                                                                                                              |
| :------------------- | :------- | :---------------------------------------------------------------------------------------------------------------- |
| `movej_p`            | `string` | Joint space planning to target orientation command.                                                                                     |
| `pose`               | `int`    | Target pose, position accuracy: 0.001 mm, orientation accuracy: 0.001 rad.                                                                |
| `v`                  | `int`    | Speed percentage coefficient, range: 1-100.                                                                                          |
| `r`                  | `int`    | Blend radius percentage coefficient, range: 0-100.                                                                                      |
| `trajectory_connect` | `int`    | Optional, indicating whether to plan the motion together with the next trajectory. 0: The motion is planned immediately, 1: It is planned together with the next trajectory. When set to 1, the trajectory will not execute immediately. |

- **Output parameter**

| Parameter                 | Type   | Description                                                           |
| :------------------- | :----- | :------------------------------------------------------------- |
| `pose`    | `array`  | Current pose, position accuracy: 0.001 mm, orientation accuracy: 0.001 rad.                                           |
| `joint`   | `array`  | Current joint angle, accuracy: 0.001°.                                                            |
| `arm_err` | `number` | State code. If the value is 0, it indicates the system is functioning normally, and the command is executed successfully. If any other error occurs, the corresponding error code is returned, and the command is not executed. |

You can refer to [current_trajectory_state](#5439) for the output parameters of the motion completion return result.

- **Code demo**

**Input**

Execution: Linear motion with the following parameters:

Target position: x: 0.1 m, y: 0.2 m, z: 0.03;<br>
Target orientation: rx: 0.4 rad, ry: 0.5 rad, rz: 0.6 rad;<br>
Speed coefficient: 50%;<br>
Blend radius: no blending.

```json
{"command":"movej_p","pose":[100000,200000,30000,400,500,600],"v":50,"r":0,"trajectory_connect":0}
```

**Output**

Return command reception state:

```json
{
    "state": "pose_state",
    "pose": [
        10,
        20,
        30,
        40,
        50,
        60
    ],
    "joint": [
        10,
        20,
        30,
        40,
        50,
        60,
        70
    ],
    "arm_err": 0
}
```

Motion completed succeeded:

```json
{
    "state": "current_trajectory_state",
    "trajectory_state": true,
    "device": 0,
    "trajectory_connect": 1
}
```

Motion completed failed:

```json
{
    "state": "current_trajectory_state",
    "trajectory_state": false,
    "device": 0,
    "trajectory_connect": 1
}
```

::: warning
trajectory_connect: whether to connect to the next trajectory, 0: all trajectories in position, 1: connected to the next trajectory.
:::

### Spline curve motion`moves`

Spline curve motion is a smooth motion trajectory defined by control points, also known as nodes or key points. To achieve spline curve motion, at least three distinct data points are required to complete the reverse calculation of control points. These data points are entered sequentially via the moves command.

- **Input parameter**

| Parameter                 | Type     | Description                                                                                                              |
| :------------------- | :------- | :---------------------------------------------------------------------------------------------------------------- |
| `moves`              | `string` | Spline curve motion command.                                                                                               |
| `pose`               | `int`    | Target pose, position accuracy: 0.001 mm, orientation accuracy: 0.001 rad.                                                                |
| `v`                  | `int`    | Speed percentage coefficient, range: 0-100.                                                                                        |
| `r`                  | `int`    | Blend radius percentage coefficient, range: 0-100.                                                                                      |
| `trajectory_connect` | `int`    | Optional, indicating whether to plan the motion together with the next trajectory. 0: The motion is planned immediately, 1: It is planned together with the next trajectory. When set to 1, the trajectory will not execute immediately. |

::: warning
This motion currently does not support trajectory blending.
:::

- **Output parameter**

| Parameter  | Type | Description  |
| :-------------- | :----- | :------------------------------------ |
| `receive_state` | `bool` | `true`: setting succeeded, `false`: setting failed. |

You can refer to [current_trajectory_state](#5439) for the output parameters of the motion completion return result.

- **Code demo**

**Input**

Execution: Three-point spline curve motion with the following parameters:

Target position:<br>
x：0.1m，y：0.2m，z：0.03m；<br>
x：0.1m，y：0.3m，z：0.03m；<br>
x：0.1m，y：0.4m，z：0.03m；<br>
Target orientation: rx: 0.4 rad, ry: 0.5 rad, rz: 0.6 rad;<br>
Speed coefficient: 50%;<br>
Blend radius: no blending.

::: warning
The following commands should be run line by line.
:::

```json
{"command":"moves","pose":[100000,200000,30000,400,500,600],"v":50,"r":0,"trajectory_connect":1}
```

```json
{"command":"moves","pose":[100000,300000,30000,400,500,600],"v":50,"r":0,"trajectory_connect":1}
```

```json
{"command":"moves","pose":[100000,400000,30000,400,500,600],"v":50,"r":0,"trajectory_connect":0}
```

**Output**

Instruction reception succeeded:

```json
{
    "command": "moves",
    "receive_state": true
}
```

Instruction reception failed:

```json
{
    "command": "moves",
    "receive_state": false
}
```

Motion completed succeeded:

```json
{
    "state": "current_trajectory_state",
    "trajectory_state": true,
    "device": 0,
    "trajectory_connect": 1
}
```

Motion completed failed:

```json
{
    "state": "current_trajectory_state",
    "trajectory_state": false,
    "device": 0,
    "trajectory_connect": 1
}
```

::: warning
trajectory_connect: whether to connect to the next trajectory, 0: all trajectories in position, 1: connected to the next trajectory.
:::

### Pose pass-through `movep_canfd`

The target pose is passed-through to the robotic arm via CANFD, without the need of controller planning. The target pose is the numerical values of the current tool in the current work frame and tool frame.

- **Input parameter**

| Parameter          | Type     | Description                                                                                             |
| :------------ | :------- | :----------------------------------------------------------------------------------------------- |
| `movep_canfd` | `string` | Pose passed-through to CANFD. If the command is correct, the robotic arm will execute it immediately.                    |
| `pose`        | `int`    | Target pose. Position accuracy: 0.001 mm, orientation accuracy: 0.001 rad.                                               |
| `follow`      | `bool`   | Driver motion follow, true: high follow, false: low follow. If high follow is used, the pass-through cycle should not exceed 10 ms. |

::: warning
The pass-through effect is related to the period and the smoothness of the trajectory. The period must be stable to prevent significant fluctuations.

The high-speed Ethernet port pass-through cycle can also reach 10 ms, but the configuration must be enabled with a command before using the high-speed network port.

Additionally, Ethernet port can attain a pass-through cycle as fast as 2 ms.

When using this command, users should carefully plan the trajectory, as the smoothness of the trajectory planning determines the robotic arm's operating state. The maximum angle between frames for each joint must not exceed 10°, and the joint planning speed must not exceed 180°/s. Otherwise, the joint will not respond.
:::

- **Output parameter**

| Parameter      | Type     | Description                                                                                         |
| :-------- | :------- | :------------------------------------------------------------------------------------------- |
| `pose`    | `array`  | Current pose, position accuracy: 0.001 mm, orientation accuracy: 0.001 rad.                                           |
| `joint`   | `array`  | Current joint angle, accuracy: 0.001°.                                                            |
| `arm_err` | `number` | State code. If the value is 0, it indicates the system is functioning normally, and the command is executed successfully. If any other error occurs, the corresponding error code is returned, and the command is not executed. |

::: warning
The robotic arm no longer provides return values, and the real-time state is collected via the UDP state reporting interface.
:::

- **Code demo**

**Input**

Execution: Target pose pass-through with the following parameters:

Target position: x: 0.1 m, y: 0.2 m, z: 0.03;<br>
Target orientation (Euler angle): rx: 0.4 rad, ry: 0.5 rad, rz: 0.6 rad;<br>
Target orientation (quaternion): w: 0.4, x: 0.5, y: 0.6, z: 0.7.

- **Code demo**

**Input**

Pose pass-through via Euler angles:

```json
{"command":"movep_canfd","pose":[100000,200000,30000,400,500,600],"follow":true}
```

Pose pass-through via quaternion:

```json
{"command":"movep_canfd","pose_quat":[100000,200000,30000,400000,500000,600000,700000],"follow":true}
```

**Output**

Current 6-DoF pose: position accuracy: 0.001 mm, orientation accuracy: 0.001 rad;<br>
joint: current joint angle, accuracy: 0.001°;

```json
{
    "state": "pose_state",
    "pose": [
        10,
        20,
        30,
        40,
        50,
        60
    ],
    "joint": [
        10,
        20,
        30,
        40,
        50,
        60
    ],
    "arm_err": 0
}
```

Current 7-DoF pose: position accuracy: 0.001 mm, orientation accuracy: 0.001 rad;<br>
joint: current joint angle, accuracy: 0.001°;

```json
{
    "state": "pose_state",
    "pose": [
        10,
        20,
        30,
        40,
        50,
        60
    ],
    "joint": [
        10,
        20,
        30,
        40,
        50,
        60,
        70
    ],
    "arm_err": 0
}
```

### Angle pass-through `movej_canfd`

The angle is passed-through to the robotic arm via CANFD, without the need of controller planning.

- **Input parameter**

| Parameter          | Type     | Description                                                                                             |
| :------------ | :------- | :----------------------------------------------------------------------------------------------- |
| `movej_canfd` | `string` | Angle passed-through to CANFD. If the command is correct, the robotic arm will execute it immediately.                                                  |
| `joint`       | `int`    | Joint angle, accuracy: 0.001°.                                                                         |
| `follow`      | `bool`   | Driver motion follow, true: high follow, false: low follow. If high follow is used, the pass-through cycle should not exceed 10 ms. |
| `expand`      | `int`    | Optional field for sending. If a universal extension axis exists and pass-through is needed, this parameter can be used for pass-through.                    |

::: warning
The pass-through effect is related to the period and the smoothness of the trajectory. The period must be stable to prevent significant fluctuations.

The high-speed Ethernet port pass-through cycle can also reach 10 ms, but the configuration must be enabled with a command before using the high-speed network port.

Additionally, the Ethernet port can attain a pass-through cycle as fast as 2 ms.

When using this command, users should carefully plan the trajectory, as the smoothness of the trajectory planning determines the robotic arm's operating state. The maximum angle between frames for each joint must not exceed 10°, and the joint planning speed must not exceed 180°/s. Otherwise, the joint will not respond.
:::

- **Output parameter**

| Parameter  | Type | Description  |
| :-------- | :------- | :--------- |
| `arm_err` | `number` | State code. If the value is 0, it indicates the system is functioning normally, and the command is executed successfully. If any other error occurs, the corresponding error code is returned, and the command is not executed |

- **Code demo**

**Input**

Execution: Target angle pass-through to the robotic arm via CANFD with the following parameters:

Target joint angle of the 6-DoF robotic arm: [1°, 0°, 20°, 30°, 0°, 20°], follow indicates the motion following effect of the driver, true means high following and false means low following;<br>
Target joint angle of the 7-DoF robotic arm: [1°, 0°, 20°, 30°, 0°, 20°, 20°], follow indicates the motion following effect of the driver, true means high following and false means low following.

6-DoF robotic arm:

```json
{"command":"movej_canfd","joint":[1000,0,20000,30000,0,20000],"follow":true,"expand":1000}
```

7-DoF robotic arm:

```json
{"command":"movej_canfd","joint":[1000,0,20000,30000,0,20000,20000],"follow":true,"expand":1000}
```

**Output**

6-DoF robotic arm:

```json
{
    "state": "joint_state",
    "joint": [
        10,
        20,
        30,
        40,
        50,
        60
    ],
    "arm_err": 0
}
```

7-DoF robotic arm:

```json
{
    "state": "joint_state",
    "joint": [
        10,
        20,
        30,
        40,
        50,
        60,
        70
    ],
    "arm_err": 0
}
```

## Motion control

### Set quick stop`set_arm_stop`

Set a quick stop.

- **Input parameter**

| Parameter           | Type     | Description           |
| :------------- | :------- | :------------- |
| `set_arm_stop` | `string` | Orientation step command. |

- **Output parameter**

| Parameter  | Type | Description  |
| :--------- | :----- | :------------------------------------ |
| `arm_stop` | `bool` | `true`: setting succeeded; `false`: setting failed. |

- **Code demo**

**Input**

Execution: Set quick stop.

```json
{ "command": "set_arm_stop" }
```

**Output**

```json
{
    "command": "set_arm_stop",
    "arm_stop": true
}
```

### Set slow stop`set_arm_slow_stop`

Stop on the currently running trajectory.

- **Input parameter**

| Parameter                | Type     | Description           |
| :------------------ | :------- | :------------- |
| `set_arm_slow_stop` | `string` | Slow stop command. |

- **Output parameter**

| Parameter  | Type | Description  |
| :-------------- | :----- | :------------------------------------ |
| `arm_slow_stop` | `bool` | `true`: setting succeeded; `false`: setting failed. |

- **Code demo**

**Input**

Execution: Set slow stop.

```json
{ "command": "set_arm_slow_stop" }
```

**Output**

```json
{
    "command": "set_arm_slow_stop",
    "arm_slow_stop": true
}
```

### Set pause`set_arm_pause`

Pause on the trajectory with a recoverable trajectory.

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :-------------- | :------- | :------------- |
| `set_arm_pause` | `string` | Pause command. |

- **Output parameter**

| Parameter  | Type | Description  |
| :---------- | :----- | :------------------------------------ |
| `arm_pause` | `bool` | `true`: setting succeeded; `false`: setting failed. |

- **Code demo**

**Input**

Execution: Set pause.

```json
{ "command": "set_arm_pause" }
```

**Output**

```json
{
    "command": "set_arm_pause",
    "arm_pause": true
}
```

### Resume after pause`set_arm_continue`

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :----------------- | :------- | :------------------- |
| `set_arm_continue` | `string` | Resumption after pause command. |

- **Output parameter**

| Parameter  | Type | Description  |
| :------------- | :----- | :------------------------------------ |
| `arm_continue` | `bool` | `true`: setting succeeded; `false`: setting failed. |

- **Code demo**

**Input**

Execution: Resume after pause.

```json
{ "command": "set_arm_continue" }
```

**Output**

```json
{
    "command": "set_arm_continue",
    "arm_continue": true
}
```

### Delete current trajectory`set_delete_current_trajectory`

Delete the current trajectory. This command must be executed after pausing!

- **Input parameter**

| Parameter                            | Type     | Description               |
| :------------------------------ | :------- | :----------------- |
| `set_delete_current_trajectory` | `string` | Current trajectory deletion command. |

- **Output parameter**

| Parameter  | Type | Description  |
| :-------------------------- | :----- | :------------------------------------ |
| `delete_current_trajectory` | `bool` | `true`: setting succeeded; `false`: setting failed. |

- **Code demo**

**Input**

Execution: Delete current trajectory.

```json
{ "command": "set_delete_current_trajectory" }
```

**Output**

```json
{
    "command": "set_delete_current_trajectory",
    "delete_current_trajectory": true
}
```

### Delete all trajectories`set_arm_delete_trajectory`

Delete all trajectories. This command must be executed after pausing!

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :-------------------------- | :------- | :----------------- |
| `set_arm_delete_trajectory` | `string` | All trajectories' deletion command. |

- **Output parameter**

| Parameter  | Type | Description  |
| :---------------------- | :----- | :------------------------------------ |
| `arm_delete_trajectory` | `bool` | `true`: setting succeeded; `false`: setting failed. |

- **Code demo**

**Input**

Execution: Delete all trajectories.

```json
{ "command": "set_arm_delete_trajectory" }
```

**Output**

```json
{
    "command": "set_arm_delete_trajectory",
    "arm_delete_trajectory": true
}
```

### Get the current planning type`get_arm_current_trajectory`

- **Input parameter**

| Parameter                         | Type     | Description                   |
| :--------------------------- | :------- | :--------------------- |
| `get_arm_current_trajectory` | `string` | Current planning type getting command. |

- **Output parameter**

| Parameter                     | Type     | Description                     |
| :----------------------- | :------- | :----------------------- |
| `arm_current_trajectory` | `string` | Return the currently running trajectory. |

- **Code demo**

**Input**

Execution: Get the current planning type.

```json
{ "command": "get_arm_current_trajectory" }
```

**Output**

Currently running joint planning, with the array containing the current joint angles, accuracy: 0.001°.

6-DoF robotic arm:

```json
{
    "state": "arm_current_trajectory",
    "type": "movej",
    "data": [
        0,
        0,
        0,
        0,
        0,
        0
    ]
}
```

7-DoF robotic arm:

```json
{
    "state": "arm_current_trajectory",
    "type": "movej",
    "data": [
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ]
}
```

Currently running linear planning, with the array containing the current end effector pose, position accuracy:0.001 mm, orientation accuracy: 0.001 rad.

```json
{"state":"arm_current_trajectory","type":"movel","data":[0,0,0,0,0,0]}
```

Currently running circular planning, with the array containing the current end effector pose, position accuracy:0.001 mm, orientation accuracy: 0.001 rad.

```json
{
    "state": "arm_current_trajectory",
    "type": "movel",
    "data": [
        0,
        0,
        0,
        0,
        0,
        0
    ]
}
```

No active planning, with the array containing the current joint angles, accuracy: 0.001°.

6-DoF robotic arm:

```json
{
    "state": "arm_current_trajectory",
    "type": "none",
    "data": [
        0,
        0,
        0,
        0,
        0,
        0
    ]
}
```

7-DoF robotic arm:

```json
{
    "state": "arm_current_trajectory",
    "type": "none",
    "data": [
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ]
}
```

### <div id = '5439'>Trajectory completion return flag`current_trajectory_state`</div>

The trajectory is the current trajectory.

- **Output parameter**

| Parameter                       | Type     | Description                                                                |
| :------------------------- | :------- | :------------------------------------------------------------------ |
| `current_trajectory_state` | `string` | Current trajectory completion return flag.                                             |
|`trajectory_state`|`bool`|`true`: motion completed succeeded; `false`: motion completed failed.|
| `device`                   | `int`    | 0: joint, 1: gripper, 2: dexterous hand, 3: lift mechanism, 4: expansion joint, others: reserved. |
| `trajectory_connect` | `num`  | Whether to connect to the next trajectory, 0: all trajectories in position, 1: connected to the next trajectory. |

**Code demo**  

Execution: Current trajectory reached the target.

```json
{"state":"current_trajectory_state","trajectory_state":true,"device":0,"trajectory_connect": 1}
```

## Step motion

### Joint step`set_joint_step`

Control the step motion of a specific joint of the robotic arm.

- **Input parameter**

| Parameter             | Type     | Description                                                        |
| :--------------- | :------- | :---------------------------------------------------------- |
| `set_joint_step` | `string` | Joint step command.                                             |
| `joint_step`     | `int`    | (1) Step joint number; (2) Joint step angle, unit: °, accuracy: 0.001°. |
| `v`              | `int`    | Speed percentage coefficient, range: 0-10.                          |

- **Output parameter**

| Parameter  | Type | Description  |
| :-------------- | :----- | :------------------------------------ |
| `receive_state` | `bool` | `true`: setting succeeded, `false`: setting failed. |

You can refer to [current_trajectory_state](#5439) for the output parameters of the motion completion return result.

- **Code demo**

**Input**

Execution: Joint step, joint 1 steps backward by 10° at a speed of 30%.

```json
{ "command": "set_joint_step", "joint_step": [1, -10000], "v": 30 }
```

**Output**

Instruction reception succeeded:

```json
{
    "command": "set_joint_step",
    "receive_state": true
}
```

Instruction reception failed:

```json
{
    "command": "set_joint_step",
    "receive_state": true
}
```

Motion completed succeeded:

```json
{
    "state": "current_trajectory_state",
    "trajectory_state": true,
    "device": 0,
    "trajectory_connect": 1
}
```

Motion completed failed:

```json
{
    "state": "current_trajectory_state",
    "trajectory_state": false,
    "device": 0,
    "trajectory_connect": 1
}
```

::: warning
trajectory_connect: whether to connect to the next trajectory, 0: all trajectories in position, 1: connected to the next trajectory
:::

### Position step`set_pos_step`

Control the robotic arm to perform linear step motion along the x, y, and z axes.

- **Input parameter**

| Parameter           | Type     | Description                                                                   |
| :------------- | :------- | :--------------------------------------------------------------------- |
| `set_pos_step` | `string` | Position step command.                                                        |
| `step_type`    | `string` | Step type: x_step: X-axis direction, y_step: Y-axis direction, z_step: Z-axis direction. |
| `v`            | `int`    | Speed percentage coefficient, range: 0-100.                                             |
| `step`         | `int`    | Step distance unit: m, accuracy: 0.001 mm, equivalent to 0.000001 m.                        |

- **Output parameter**

| Parameter                 | Type   | Description                                                           |
| :------------------- | :----- | :------------------------------------------------------------- |
| `receive_state`      | `bool` | `true`: setting succeeded; `false`: setting failed.                         |

You can refer to [current_trajectory_state](#5439) for the output parameters of the motion completion return result.

- **Code demo**

**Input**

Execution: Position step, step 0.5 m backward along the x-axis at a speed of 30%.

```json
{"command":"set_pos_step","step_type":"x_step","step":-500000,"v":30}
```

**Output**

Instruction reception succeeded:

```json
{
    "command": "set_pos_step",
    "receive_state": true
}
```

Instruction reception failed:

```json
{
    "command": "set_pos_step",
    "receive_state": false
}
```

Motion completed succeeded:

```json
{
    "state": "current_trajectory_state",
    "trajectory_state": true,
    "device": 0,
    "trajectory_connect": 1
}
```

Motion completed failed:

```json
{
    "state": "current_trajectory_state",
    "trajectory_state": false,
    "device": 0,
    "trajectory_connect": 1
}
```

::: warning
trajectory_connect: whether to connect to the next trajectory, 0: all trajectories in position, 1: connected to the next trajectory
:::

### Orientation step`set_ort_step`

Control the robotic arm to perform rotation step motion along the x, y, and z axes.

- **Input parameter**

| Parameter           | Type     | Description                                                                       |
| :------------- | :------- | :------------------------------------------------------------------------- |
| `set_ort_step` | `string` | Orientation step command.                                                            |
| `step_type`    | `string` | Step direction: rx_step: rotation around the X-axis, ry_step: rotation around the Y-axis, rz_step: rotation around the Z-axis. |
| `v`            | `int`    | Speed percentage coefficient, range: 0-100.                                                 |
| `step`         | `int`    | Step angle: unit: rad, accuracy: 0.001 rad.                                      |

- **Output parameter**

| Parameter  | Type | Description  |
| :-------------- | :----- | :------------------------------------ |
| `receive_state` | `bool` | `true`: setting succeeded, `false`: setting failed. |

You can refer to [current_trajectory_state](#5439) for the output parameters of the motion completion return result.

- **Code demo**

**Input**

Execution: Orientation step, rotate 0.5 rad backward around the x-axis at a speed of 30%.

```json
{"command":"set_ort_step","step_type":"rx_step","step":-500,"v":30}
```

**Output**

Instruction reception succeeded:

```json
{
    "command": "set_ort_step",
    "receive_state": true
}
```

Instruction reception failed:

```json
{
    "command": "set_ort_step",
    "receive_state":  false
}
```

Motion completed succeeded:

```json
{
    "state": "current_trajectory_state",
    "trajectory_state": true,
    "device": 0,
    "trajectory_connect": 1
}
```

Motion completed failed:

```json
{
    "state": "current_trajectory_state",
    "trajectory_state": false,
    "device": 0,
    "trajectory_connect": 1
}
```

::: warning
trajectory_connect: whether to connect to the next trajectory, 0: all trajectories in position, 1: connected to the next trajectory
:::

## Teaching motion

### Joint teaching`set_joint_teach`

- **Input parameter**

| Parameter              | Type     | Description                                 |
| :---------------- | :------- | :----------------------------------- |
| `set_joint_teach` | `string` | Joint step command.                      |
| `teach_joint`     | `int`    | Joint number.                          |
| `direction`       | `string` | Direction, "pos": positive direction, “neg”: negative direction. |
| `v`               | `int`    | Speed coefficient                             |

- **Output parameter**

| Parameter  | Type | Description  |
| :------------ | :----- | :------------------------------------ |
| `joint_teach` | `bool` | `true`: setting succeeded; `false`: setting failed. |

- **Code demo**

**Input**

Execution: Joint 1 teaching, positive direction at a speed of 50%.

```json
{"command":"set_joint_teach","teach_joint":1,"direction":"pos","v":50}
```

**Output**

```json
{
    "command": "set_joint_teach",
    "joint_teach": true
}
```

### Position teaching`set_pos_teach`

- **Input parameter**

| Parameter            | Type     | Description                                 |
| :-------------- | :------- | :----------------------------------- |
| `set_pos_teach` | `string` | Position teaching command.                      |
| `teach_type`    | `string` | Coordinate axis, "x", "y", "z".             |
| `direction`     | `string` | Direction, "pos": positive direction, “neg”: negative direction. |
| `v`             | `int`    | Speed coefficient                             |

- **Output parameter**

| Parameter  | Type | Description  |
| :---------- | :----- | :------------------------------------ |
| `pos_teach` | `bool` | `true`: setting succeeded; `false`: setting failed. |

- **Code demo**

**Input**

Execution: Position teaching, x-axis negative direction at a speed of 50%.

```json
{"command":"set_pos_teach","teach_type":"x","direction":"neg","v":50}
```

**Output**

```json
{
    "command": "set_pos_teach",
    "pos_teach": true
}
```

### Orientation teaching`set_ort_teach`

- **Input parameter**

| Parameter            | Type     | Description                                 |
| :-------------- | :------- | :----------------------------------- |
| `set_ort_teach` | `string` | Orientation teaching command.                      |
| `teach_type`    | `string` | Rotation axis, "rx", "ry", "rz".  |
| `direction`     | `string` | Direction, "pos": positive direction, “neg”: negative direction. |
| `v`             | `int`    | Speed coefficient                             |

- **Output parameter**

| Parameter  | Type | Description  |
| :---------- | :----- | :------------------------------------ |
| `ort_teach` | `bool` | `true`: setting succeeded; `false`: setting failed. |

- **Code demo**

- **Output parameter**

| Parameter  | Type | Description  |
| :----------- | :----- | :------------------------------------ |
| `stop_teach` | `bool` | `true`: setting succeeded; `false`: setting failed. |

**Input**

Execution: Pose teaching, rx-axis negative direction at a speed of 50%.

```json
{"command":"set_ort_teach","teach_type":"rx","direction":"neg","v":50}
```

**Output**

```json
{
    "command": "set_ort_teach",
    "ort_teach": true
}
```

### Stop teaching`set_stop_teach`

- **Input parameter**

| Parameter             | Type     | Description           |
| :--------------- | :------- | :------------- |
| `set_stop_teach` | `string` | Teaching stop command. |

- **Code demo**

**Input**

Execution: Stop teaching.

```json
{ "command": "set_stop_teach" }
```

**Output**

```json
{
    "command": "set_stop_teach",
    "stop_teach": true
}
```

### Set teaching reference frame`set_teach_frame`

- **Input parameter**

| Parameter              | Type     | Description                                 |
| :---------------- | :------- | :----------------------------------- |
| `set_teach_frame` | `string` | Teaching reference frame setting command.            |
| `frame_type`      | `number` | 0: work frame, 1: tool frame. |

- **Output parameter**

| Parameter  | Type | Description  |
| :---------- | :----- | :------------------------------------ |
| `set_state` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: Set the teaching reference frame to the work frame.

```json
{"command":"set_teach_frame","frame_type":0}
```

**Output**

```json
{
    "command": "set_teach_frame",
    "set_state": true
}
```

### Get the teaching reference frame`get_teach_frame`

- **Input parameter**

| Parameter              | Type     | Description                     |
| :---------------- | :------- | :----------------------- |
| `get_teach_frame` | `string` | Teaching reference frame acquisition command. |

- **Output parameter**

| Parameter  | Type | Description  |
| :----------- | :------- | :--------------------------------- |
| `frame_type` | `number` | 0: work frame, 1: tool frame. |

- **Code demo**

**Input**

 Execution: Get the teaching reference frame.

```json
{ "command": "get_teach_frame" }
```

**Output**

```json
{
    "command": "get_teach_frame",
    "frame_type": 0
}
```
