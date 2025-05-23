# <p class="hidden">JSON protocol: </p>Drag-and-Teach Command Set

## Drag teaching

During the drag teaching, the RealMan robotic arm records the drag trajectory and replays the trajectory according to the user's commands.

### Set 6-DoF Drag Teaching Mode `set_force_drag_mode`

Only effective in the 6-DoF drag teaching mode.

- **Input parameter**

| Description | Type |Explanation|
| :--- | :--- |:---|
| `set_force_drag_mode` | `string` |Set the 6-DoF drag teaching mode.|
| `mode` | `int` |6-DoF drag teaching mode, 0 - Fast Drag Mode, 1 - Precision Drag Mode.|

- **Code demo**

**Input**  

```json
{"command":"set_force_drag_mode","mode":1}
```

**Output**  

Setting succeeded (true: setting succeeded, false: setting failed).

```json
{
    "command": "set_force_drag_mode",
    "set_state": true
}
```

### Query 6-DoF Drag Teaching Mode `get_force_drag_mode`

Only effective in the 6-DoF drag teaching mode.

- **Input parameter**

| Description | Type |Explanation|
| :--- | :--- |:---|
| `get_force_drag_mode` | `string` |Query the 6-DoF drag teaching mode.|

- **Output parameter**

| Parameter            | Type     | Explanation             |
| :------------------ | :------- | :--------------- |
| `mode` | `int` |6-DoF drag teaching mode, 0 - Fast Drag Mode, 1 - Precision Drag Mode.|

- **Code demo**

**Input**  

```json
{"command":"get_force_drag_mode"}
```

**Output**  

```json
{
    "command": "get_force_drag_mode",
    "mode": 1
}
```

### Start the drag teaching `start_drag_teach`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `start_drag_teach` | `string` |Start the drag teaching. |
| `trajectory_record`      | `int` | Trajectory record during the drag teaching, 0: no record, 1: trajectory record. |

- **Code demo**

**Input**

```json
{"command":"start_drag_teach","trajectory_record":1}
```

**Output**

Setting succeeded (true: setting succeeded, false: setting failed).

```json
{
    "command": "start_drag_teach",
    "drag_teach": true
}
```

### Stop the drag teaching `stop_drag_teach`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `stop_drag_teach` | `string` |Stop the drag teaching. |

```json
{"command":"stop_drag_teach"}
```

**Output**
Setting succeeded (true: setting succeeded, false: setting failed).

```json
{
    "command": "stop_drag_teach",
    "drag_teach": true
}
```

### Start the multiple drag teaching `start_multi_drag_teach`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `start_multi_drag_teach` | `string` |Start the multiple drag teaching. |
| `frame`   | `int`  | Reference frame, 0: work frame, 1: tool frame. |
| `free_axes` | `int` |Free driving directions, the first three elements indicate that the TCP will translate and drag in the x, y, and z axes of the reference frame, while the last three elements indicate that the TCP will rotate and drag in the rx, ry, and rz axes of the reference frame. |
| `singular_wall`    | `int`   | Optional, available only for the drag teaching in the 6-DoF force mode to enable or disable the drag singular wall, 0: disable drag singular wall, 1: enable drag singular wall, default: enable drag singular wall if no settings. |

- **Code demo**

**Input**

```json
{"command":"start_multi_drag_teach","free_axes":[0,1,1,0,1,0],"frame":0,"singular_wall":0}
```

**Output**

Setting succeeded:

```json
{
    "command": "start_multi_drag_teach",
    "set_state": true
}
```

Setting failed:

```json
{
    "command": "start_multi_drag_teach",
    "set_state": false
}
```

::: warning
Possible reasons for failure:

- The current robotic arm is not the 6-DoF force version (drag teaching in the 6-DoF force mode)
- The robotic arm is currently in an IO emergency stop state
- The robotic arm is currently in the simulation mode
- The input parameters are incorrect
- During the drag teaching in the 6-DoF force mode, the robotic arm is currently in the singular zone
:::

### Start the trajectory replay `run_drag_trajectory`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `run_drag_trajectory` | `string` |Start the trajectory replay. |

- **Code demo**

**Input**

```json
{"command":"run_drag_trajectory"}
```

**Output**
Replay succeeded:

```json
{
    "command": "run_drag_trajectory",
    "run_state": true
}
```

Replay failed:

```json
{
    "command": "run_drag_trajectory",
    "run_state": false
}
```

### Pause the trajectory replay `pause_drag_trajectory`

Pause the trajectory replay.

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `pause_drag_trajectory` | `string` |Pause the trajectory replay. |

- **Code demo**

**Input**

```json
{"command":"pause_drag_trajectory"}
```

**Output**
Pause succeeded:

```json
{
    "command": "pause_drag_trajectory",
    "pause_state": true
}
```

Pause failed:

```json
{
    "command": "pause_drag_trajectory",
    "pause_state": false
}
```

### Continue the trajectory replay `continue_drag_trajectory`

Continue the trajectory replay after a pause.

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `continue_drag_trajectory` | `string` |Continue the trajectory replay. |

- **Code demo**

**Input**

```json
{"command":"continue_drag_trajectory"}
```

**Output**
Continuation succeeded:

```json
{
    "command": "continue_drag_trajectory",
    "continue_state": true
}
```

Continuation failed:

```json
{
    "command": "continue_drag_trajectory",
    "continue_state": false
}
```

### Stop the trajectory replay `stop_drag_trajectory`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `stop_drag_trajectory` | `string` |Stop the trajectory replay. |

- **Code demo**

**Input**

```json
{"command":"stop_drag_trajectory"}
```

**Output**
Stop succeeded:

```json
{
    "command": "stop_drag_trajectory",
    "stop_state": true
}
```

Stop failed:

```json
{
    "command": "stop_drag_trajectory",
    "stop_state": false
}
```

### Move to the trajectory origin `drag_trajectory_origin`

Before the trajectory replay, it is required to move the robotic arm to the trajectory origin. If the setting is correct, the robotic arm will move to the trajectory origin at a speed of 20%.

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `drag_trajectory_origin` | `string` |Trajectory origin. |

- **Output parameter**

| Parameter                       | Type     | Description                                                                |
| :------------------------- | :------- | :------------------------------------------------------------------ |
| `current_trajectory_state` | `string` | Current trajectory completion return flag.                                             |
|`trajectory_state`|`bool`|`true`: motion completed succeeded; `false`: motion completed failed.|
| `device`                   | `int`    | 0: joint, 1: gripper, 2: dexterous hand, 3: lift mechanism, 4: expansion joint, others: reserved. |
| `trajectory_connect` | `num`  | Whether to connect to the next trajectory, 0: all trajectories in position, 1: connected to the next trajectory. |

- **Code demo**

**Input**

```json
{"command":"drag_trajectory_origin"}
```

**Output**

```json
{
    "device": 0,
    "state": "current_trajectory_state",
    "trajectory_connect": 0,
    "trajectory_state": true
}
```

### Save the drag teaching trajectory `save_trajectory`

- **Input parameter**

| Parameter        | Type    | Description                         |
| :---------------- | :------- | :----------------- |
| `save_trajectory` | `string` | Save the trajectory.        |
|  `trajectory_name`  |  `int`  |  Name of the trajectory. |

- **Output parameter**

| Parameter  | Type | Description  |
|:------------------|:-------|:----------------------------------------|
|`point` | `list` | Drag teaching point. |

- **Code demo**

**Input**

Execution: Save the trajectory that has just been dragged, and call it after drag teaching.

```json
{"command":"save_trajectory","trajectory_name":"XXX"}
```

**Output**

```json
{
    "point": [
        30971,
        56885,
        -3416,
        76201,
        47121,
        -4845
    ]
}
```

### Set the drag teaching sensitivity of the current loop `set_drag_teach_sensitivity`

- **Input parameter**

| Parameter        | Type    | Description                         |
| :---------------- | :------- | :----------------- |
| `set_drag_teach_sensitivity` | `string` | Set the drag teaching sensitivity of the current loop         |

- **Code demo**

**Input**

Execution: Grade from 0% to 100%

```json
{"command":"set_drag_teach_sensitivity","grade":0}
```

**Output**

Setting succeeded:

```json
{
    "command": "set_drag_teach_sensitivity",
    "set_state": true
}
```

Setting failed:

```json
{
    "command": "set_drag_teach_sensitivity",
    "set_state": false
}
```

::: warning
The sensitivity grade ranges from 0 to 100, the smaller the number, the lower the sensitivity. The initial sensitivity is kept when it is 100.
:::

### Get the drag teaching sensitivity of the current loop `get_drag_teach_sensitivity`

- **Input parameter**

| Parameter        | Type    | Description                         |
| :---------------- | :------- | :----------------- |
| `get_drag_teach_sensitivity` | `string` | Get the drag teaching sensitivity of the current loop         |

- **Code demo**

**Input**

Execution: Grade from 0% to 100%

```json
{"command":"get_drag_teach_sensitivity"}
```

**Output**

Success:

```json
{
    "command": "get_drag_teach_sensitivity",
    "grade": 0
}
```

::: warning
The sensitivity grade ranges from 0 to 100, the smaller the number, the lower the sensitivity. The initial sensitivity is kept when it is 100.
:::
