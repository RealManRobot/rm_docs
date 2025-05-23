# <p class="hidden">JSON protocol: </p>Online Programming Command Set

## File transfer

### Preparation before sending (Gen 2 controller) `run_project`

- **Input parameter**

| Parameter           | Type     | Description           |
| :------------- | :------- | :------------- |
| `project_name` | `string` | File name.     |
| `file_size`    | `int`    | File size.     |
| `plan_speed`   | `int`    | Trajectory running speed. |

- **Output parameter**

| Parameter  | Type | Description  |
|:------------------|:-------|:----------------------------------------|
|`run_project` | `bool` |`true`: setting succeeded; `false`: setting failed. |

- **Code demo**

**Input**

Implement: file xxx, size 2048, speed 50%.

```json
{"command":"run_project","project_name":"XXX","file_size":2048,"plan_speed":50}
```

**Output**

```json
{
    "command": "run_project",
    "project_state": true
}
```

### Preparation before sending (Gen 3 controller) `run_project`

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :------------- | :------- | :------------------------------------------------------- |
| `project_name` | `string` | File name.                                              |
| `file_size`    | `int`    | File size.                                              |
| `plan_speed`   | `int`    | Trajectory running speed.                                           |
|  `only_save`  |  `int`  |  0: Save the file only, not running it.                                    |
| `save_id`      | `int`    | The number saved to the controller, configurable from 1 to 100.                      |
|  `step_flag`  |  `int`  |  Set single step mode, 1: single step mode, 0: normal motion mode. |

- **Output parameter**

| Parameter  | Type | Description  |
|:------------------|:-------|:----------------------------------------|
|`run_project` | `bool` |`true`: setting succeeded, `false`: setting failed|

- **Code demo**

**Input**

Implement: file xxx, size 2048, speed 50%.

```json
{"command":"run_project","project_name":"XXX","file_size":2048,"plan_speed":50,"step_flag":0,"only_save":0,"save_id":0}
```

**Output**

```json
{
    "command": "run_project",
    "project_state": true
}
```

### During sending `conduct_project`

::: warning
Start from the second time
:::

- **Input parameter**

The robotic arm returns a frame of this command every time it receives 2K data. Upon receiving the command, the teach pendant continues to send the remaining data.

- **Output parameter**

| Parameter  | Type | Description  |
|:------------------|:-------|:----------------------------------------|
|`project_conduct` | `bool` |`true`: reception succeeded; `false`: reception failed. |

- **Code demo**

**Output**

```json
{"command":"conduct_project","project_conduct":true}
```

### Send check return `download_project`

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :----------------- | :------- | :------------- |
| `download_project` | `string` | Send check return. |
| `project_state`    | `string` | Check results.     |
| `err_line`         | `bool`   | Number of error lines.     |

- **Output parameter**

| Parameter  | Type | Description  |
|:------------------|:-------|:----------------------------------------|
|`project_state` | `bool` |`true`: setting succeeded; `false`: setting failed. |

- **Output parameter**

| Parameter  | Type | Description  |
|:------------------|:-------|:----------------------------------------|
|`project_state` | `bool` |`true`: setting succeeded; `false`: setting failed |
|`err_line`| `int` | Check failed. err_line is the number of error lines. The teach pendant pops up a prompt message and marks this line in red. If err_line is 0, it means that the length of check data is incorrect. |

- **Code demo**

**Output**

Check succeeded. The teach pendant pops up a prompt message.

```json
{
    "command": "download_project",
    "project_state": true
}
```

**Output**

Check failed. err_line is the number of error lines. The teach pendant pops up a prompt message and marks this line in red. <br>
If err_line is 0, it means that the length of check data is incorrect.

```json
{
    "command": "download_project",
    "project_state": false,
    "err_line": 60
}
```

### Change the speed coefficient in the planning process `plan_speed`

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :----------- | :------- | :----------------------- |
| `plan_speed` | `string` | Change the speed coefficient in the planning process. |
| `speed`      | `int`    | Speed.                    |

- **Output parameter**

| Parameter  | Type | Description  |
|:------------------|:-------|:----------------------------------------|
|`plan_state` | `bool` |`true`: setting succeeded; `false`: setting failed |

- **Code demo**

**Input**

Implement: Set the speed ratio to 50%.

```json
{"command":"plan_speed","speed":50}
```

**Output**

```json
{
    "command": "plan_speed",
    "plan_state": true
}
```

## Prompt box

### Prompt window `content`

Prompt window in file-tree form. This command is sent from the controller to the teach pendant and the returned value is sent from the teach pendant to the controller

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :-------- | :------- | :----------------------------- |
| `content` | `int`    | A window pops up to indicate the location of the command in the file tree. |

- **Output parameter**

| Parameter        | Type    | Description                                             |
| :------------- | :----- | :------------------------ |
| `popup_result` | `bool` | `true`: continue to execute; `false`: stop to execute |

- **Code demo**

**Input**

Implement: Execute the first pop-up window of the file tree.

```json
{"state":"popup","content":1}
```

**Output**

Continue to execute.

```json
{
    "command": "popup",
    "popup_result": true
}
```

## On-line programming file management (Gen 3 controller)

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

### Query the online program running state (Gen 3 controller) `get_program_run_state`

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :-------------------- | :------- | :----------------------------- |
| `get_program_run_state` | `string` | Query the running state of the current online programming file |

- **Output parameter**

| Parameter        | Type    | Description                             |
| :----------- | :---- | :-------------------------------------------------------------- |
| `run_state`  | `int` | 0: Not started; 1: In running; 2 Paused.                          |
| `id`         | `int` | ID of running trajectory, ID of stored trajectory, which is 0 if the trajectory is not stored, and no value is returned if the trajectory is not running. |
| `plan_num`   | `int` | Number of lines having started to run, not returned if the trajectory has not started to run.                                 |
| `loop_num`   | `int` | Number of lines with loop commands, not returned if the trajectory has not started to run.                           |
| `loop_cont` | `int` | Running count of loop command lines, not returned if the trajectory has not started to run.                    |
| `step_mode`  | `int` | Single step mode, 1: single step mode; 0: non-single step mode                          |
| `plan_speed` | `int` | Global planned speed ratio, 1−100.                                       |
|  `edit_id`  |  `int`  |  Previously edited online program ID.                                    |

- **Code demo**

**Input**

Query the stored trajectory list. Page query and vague search are supported.

```json
{ "command": "get_program_run_state" }
```

**Output**

```json
{
    "command": "get_program_run_state",
    "run_state": 1,
    "id": 1,
    "plan_num": 1,
    "loop_num": [
        1
    ],
    "loop_cont": [
        3
    ],
    "step_mode": 0,
    "plan_speed": 50,
    "edit_id": 1
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

## Global waypoints (Gen 3 controller)

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
