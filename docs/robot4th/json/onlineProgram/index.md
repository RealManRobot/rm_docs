# <p class="hidden">JSON protocol: </p>Online Programming Command Set

## On-line programming file management

### Query online program list `get_program_trajectory_list`

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :----------- | :------- | :-------------------------------------- |
| `page_num`     | `int`    | Page number (This parameter is not passed when querying all programs).         |
| `page_size`    | `int`    | Page size (This parameter is not passed when querying all programs).     |
| `vague_search` | `string` | Vague search (passing this parameter can initiate vague search). |

- **Output parameter**

| Parameter  | Type | Description  |
|:------------------|:-------|:----------------------------------------|
| `page_num`    | `int`  | Page serial number. |
|  `page_size`  |  `int`  |  Page size. |
|`total_size` | `int` | Total size. |
| `vague_search` | `string` | Vague search (passing this parameter can initiate vague search). |
| `list` | `list` | Trajectory list. |

- **Code demo**

**Input**

Query the stored trajectory list. Page query and vague search are supported.

```json
{"command":"get_program_trajectory_list","page_num":1,"page_size":10,"vague_search":"file"}
```

**Output**

```json
{
    "command": "get_program_trajectory_list",
    "page_num": 1,
    "page_size": 2,
    "total_size": 2,
    "vague_search": "file",
    "list": [
        {
            "id": 1,
            "size": 2580,
            "speed": 50,
            "trajectory_name": "1_file1.txt"
        },
        {
            "id": 2,
            "size": 2580,
            "speed": 50,
            "trajectory_name": "2_file2.txt"
        }
    ]
}
```

### Query Flowchart Program Run State `get_flowchart_program_run_state`

- **Input parameter**

| Parameter                  | Type     | Description                           |
| :-------------------- | :------- | :----------------------------- |
| `get_flowchart_program_run_state` | `string` | Query the run state of the current online programming file |

- **Output parameter**

| Parameter         | Type  | Description                                                            |
| :----------- | :---- | :-------------------------------------------------------------- |
| `run_state`  | `int` | 0: Not Started, 1: Running, 2: Paused.                                  |
| `step_mode`  | `int` | Step-by-step mode, 1 for step-by-step mode, 0 for non-step-by-step mode. Not returned if not running.   |
| `modal_id`    | `int` | ID of the flowchart block currently being executed. Not returned if not running.                             |
| `id`         | `int` | ID of the currently enabled file. Not returned if not running. |
| `name`   | `string` | Name of the currently enabled file.                                  |
| `plan_speed` | `int` | Global planning speed ratio (1 - 100).                   |

- **Code demo**

**Input**  

```json
{ "command": "get_flowchart_program_run_state" }
```

**Output**  

```json
{
    "command":"get_flowchart_program_run_state",
    "id":15,
    "modal_id":"fdc30031-0b0a-448b-936a-e6c8d73c199f",
    "name":"readIO",
    "plan_speed":50,
    "run_state":1,
    "step_mode":1
}
```

### Start to run the online programming file with the specified ID `set_program_id_start`

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :------------------- | :------- | :---------------------------------------------------------------- |
| `set_program_id_start` | `string` | Start to run the trajectory with the specified ID.                                               |
| `id`                   | `int`    | Run the specified ID, 1-100. Trajectories are available for running.                           |
| `speed`                | `int`    | 1-100. Trajectory running speed. The speed ratio may not be provided, and the trajectory will run according to the stored speed. |

- **Output parameter**

| Parameter  | Type | Description  |
|:------------------|:-------|:----------------------------------------|
|`start_state`|`bool`|`true`: start to run `false`: running failed. |

- **Output parameter**

| Parameter  | Type | Description  |
|:------------------|:-------|:----------------------------------------|
|`finish_id`|`int`|ID of finishing trajectory|

- **Code demo**

**Input**

Start to run trajectory 2 at a speed of 50%.

```json
{"command":"set_program_id_start","id":2,"speed":50}
```

**Output**

Start running successfully.

```json
{
    "command": "set_program_id_run",
    "start_state": true
}
```

After the online program ends, the ID of the finishing trajectory will be reported automatically.

```json
{
    "state": "program_run_finish",
    "finish_id": 4
}
```

### Delete the specified online programming file `delete_program_trajectory`

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :------------------------ | :------- | :--------------------- |
| `delete_program_trajectory` | `string` | Delete the trajectory with the specified ID     |
| `id`                        | `int`    | Specified ID, ID of deleted trajectory |

- **Output parameter**

| Parameter  | Type | Description  |
|:------------------|:-------|:----------------------------------------|
|`delete_state`|`bool`|`true`: success, `false`: failure|

- **Code demo**

**Input**

Start to run trajectory 2 at a speed of 50%

```json
{"command":"delete_program_trajectory","id":2}
```

**Output**

```json
{
    "command": "delete_program_trajectory",
    "delete_state": true
}
```

### Update the online programming file with the specified ID

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :------------------------ | :------- | :---------------------------------------------- |
| `update_program_trajectory` | `string` | Update the information of the trajectory with the specified ID                          |
| `id`                        | `int`    | ID of the specified online programming trajectory                            |
| `plan_speed`                | `int`    | Updated planned speed ratio, 1-100 (optional configuration)         |
| `project_name`              | `string` | Updated file name (10 bytes at most) (optional configuration) |

- **Output parameter**

| Parameter  | Type | Description  |
|:------------------|:-------|:----------------------------------------|
|`update_state`|`bool`|`true`: success, `false`: failure|

- **Code demo**

**Input**

Update the information of trajectory with the specified ID

```json
{"command":"update_program_trajectory","id":1,"plan_speed":66,"project_name":"file"}
```

**Output**

```json
{
    "command": "update_program_trajectory",
    "update_state": true
}
```

### Set the default running ID of IO

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :---------------------- | :------- | :--------------------- |
| `set_default_run_program` | `string` | Set the ID of online programming file that the IO runs by default. |

- **Output parameter**

| Parameter  | Type | Description  |
|:------------------|:-------|:----------------------------------------|
|`set_default_run_program`|`bool`|`true`: success, `false`: failure|

- **Code demo**

**Input**

Set the ID of online programming file that the IO runs by default. It is configurable from 0 to 100. 0 means canceling the setting.

```json
{"command":"set_default_run_program","id":1}
```

**Output**

```json
{
    "command": "set_default_run_program",
    "set_state": true
}
```

### Get the default running ID of IO

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :---------------------- | :------- | :--------------------------------- |
| `get_default_run_program` | `string` | Get the ID of online programming file that the IO runs by default. |

- **Output parameter**

| Parameter  | Type | Description  |
|:------------------|:-------|:----------------------------------------|
|`id`|`int`|ID of online programming file that the IO runs by default. |

- **Code demo**

**Input**

Get the default running ID of IO

```json
{ "command": "get_default_run_program" }
```

**Output**

```json
{
    "command": "get_default_run_program",
    "id": 1
}
```

## Global waypoints

### Add global waypoints `add_global_waypoint`

- **Input parameter**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`add_global_waypoint`|`string`|Newly added global waypoint|
|`point_name`|`string`|Name of global waypoint|
|`joint`|`int`|Joint angle of newly added global waypoint, unit: 0.001°|
|`pose`|`object`|Position  of newly added global waypoint, position: x: 0.1 m, y: 0.2 m, z: 0.03 m, orientation: rx: 0.4 rad, ry: 0.5 rad, rz: 0.6 rad|
|`work_frame`|`object`|Name of work frame|
|`tool_frame`|`string`|Name of tool frame|
|`time`|`string`|Time of newly added global waypoint|

- **Output parameter**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`add_state`|`bool`|`true`: success, `false`: failure|

- **Code demo**

**Input**

Add global waypoints

```json
{"command":"add_global_waypoint","point_name":"abc","joint":[10,20,30,40,50,60,40],"pose":[100000,200000,30000,400,500,600],"work_frame":"World","tool_frame":"Arm_Tip","time":"2023-2-22 15:23:00"}
```

**Output**

```json
{
    "command": "add_global_waypoint",
    "add_state": true
}
```

### Update global waypoints `update_global_waypoint`

- **Input parameter**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`update_global_waypoint`|`string`|Update global waypoint commands. |
|`point_name`|`string`|Name of global waypoint. |
|`joint`|`int`|Update the joint angle of global waypoint, unit: 0.001°|
|`pose`|`object`|Update the position of global waypoint, position: x: 0.1 m, y: 0.2 m, z: 0.03 m, orientation: rx: 0.4 rad, ry: 0.5 rad, rz: 0.6 rad. |
|`work_frame`|`object`|Name of work frame. |
|`tool_frame`|`string`|Name of tool frame. |
|`time`|`string`|Update the time of global waypoint. |

- **Output parameter**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`update_state`|`bool`|`true`: success, `false`: failure|

- **Code demo**

**Input**

Update global waypoints

```json
{"command":"update_global_waypoint","point_name":"abc","joint":[10,20,30,40,50,60,40],"pose":[100000,200000,30000,400,500,600],"work_frame":"World","tool_frame":"Arm_Tip","time":"2023-2-22 15:23:00"}
```

**Output**

```json
{
    "command": "update_global_waypoint",
    "update_state": true
}
```

### Delete global waypoints `delete_global_waypoint`

- **Input parameter**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`delete_global_waypoint`|`string`|Delete global waypoint commands. |
|`point_name`|`string`|Name of global waypoint. |

- **Output parameter**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`delete_state`|`bool`|`true`: success, `false`: failure|

- **Code demo**

**Input**

Delete global waypoints.

```json
{"command":"delete_global_waypoint","point_name":"abc"}
```

**Output**

```json
{
    "command": "delete_global_waypoint",
    "delete_state": true
}
```

### Query given global waypoints `given_global_waypoint`

- **Input parameter**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`given_global_waypoint`|`string`|Query given global waypoint |
|`point_name`|`string`|Name of global waypoint|

- **Output parameter**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`given_state`|`bool`|`true`: success, `false`: failure|

- **Code demo**

**Input**

Query the specified global waypoint

```json
{"command":"given_global_waypoint","point_name":"abc"}
```

**Output**

```json
{
    "command": "given_global_waypoint",
    "point_name": "abc",
    "joint": [
        10,
        20,
        30,
        40,
        50,
        60,
        40
    ],
    "pose": [
        100000,
        200000,
        30000,
        400,
        500,
        600
    ],
    "work_frame": "World",
    "tool_frame": "Arm_Tip",
    "time": "2022-12-22 15:23:00"
}
```

### Query multiple global waypoints `get_global_waypoints_list`

- **Input parameter**

| Parameter                    | Type | Description                            |
|:----------------------|:---|:------------------------------|
|`get_global_waypoints_list`|`string`|Query multiple global waypoints|
|`page_num`|`int`|Page number (This parameter is not passed when querying all global waypoints)|
|`page_size`|`int`|Page size (This parameter is not passed when querying all global waypoints)|
| `vague_search` | `string` | Vague search (passing this parameter can initiate vague search)|

- **Output parameter**

| Parameter        | Type    | Description                             |
|:------------------|:-------|:----------------------------------------|
|`get_global_waypoints_list`|`string`|Query global waypoints. |
|`total_size`|`int`|Total size. |
|`list`|`object`|Details of waypoints. |

- **Code demo**

**Input**

Query multiple global waypoints.

```json
{"command":"get_global_waypoints_list","page_num":1,"page_size":10,"vague_search":"file"}
```

**Output**

```json
{
    "command": "get_global_waypoints_list",
    "total_size": 50,
    "list": [
        {
            "point_name": "abcd",
            "joint": [
                10,
                20,
                30,
                40,
                50,
                60,
                40
            ],
            "pose": [
                100000,
                200000,
                30000,
                400,
                500,
                600
            ],
            "work_frame": "World",
            "tool_frame": "Arm_Tip",
            "time": "2022-12-22 15:23:00"
        },
        {
            "point_name": "1abc",
            "joint": [
                10,
                20,
                30,
                40,
                50,
                60,
                40
            ],
            "pose": [
                100000,
                200000,
                30000,
                400,
                500,
                600
            ],
            "work_frame": "World",
            "tool_frame": "Arm_Tip",
            "time": "2022-12-22 15:23:00"
        }
    ]
}
```
