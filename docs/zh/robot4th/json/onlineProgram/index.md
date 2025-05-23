# <p class="hidden">JSON协议：</p>在线编程指令集

## 在线编程文件管理

### 查询在线编程程序列表`get_program_trajectory_list`

- **输入参数**

| 参数         | 类型     | 说明                                    |
| :----------- | :------- | :-------------------------------------- |
| `page_num`     | `int`    | 页码（全部查询时不传此参数）。          |
| `page_size`    | `int`    | 每页大小（全部查询时不传此参数）。      |
| `vague_search` | `string` | 模糊搜索 （传递此参数可进行模糊查询）。 |

- **输出参数**

| 参数 | 类型 | 说明 |
|:------------------|:-------|:----------------------------------------|
|`page_num` | `int` | 页序列号。 |
|`page_size` | `int` | 每页大小。 |
|`total_size` | `int` | 总大小。 |
|`vague_search`|`string`|模糊搜索 （传递此参数可进行模糊查询）。|
| `list` | `list` | 轨迹列表信息。 |

- **代码示例**

**输入**  

查询已存储的轨迹列表，支持可分页查询和模糊查询。

```json
{"command":"get_program_trajectory_list","page_num":1,"page_size":10,"vague_search":"file"}
```

**输出**  

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

### 查询流程图编程状态`get_flowchart_program_run_state`

- **输入参数**

| 参数                  | 类型     | 说明                           |
| :-------------------- | :------- | :----------------------------- |
| `get_flowchart_program_run_state` | `string` | 查询当前在线编程文件的运行状态 |

- **输出参数**

| 参数         | 类型  | 说明                                                            |
| :----------- | :---- | :-------------------------------------------------------------- |
| `run_state`  | `int` | 0 未开始 1 运行中 2 暂停中。                                    |
| `step_mode`  | `int` | 单步模式，1 为单步模式，0 为非单步模式，未运行则不返回。                        |
| `modal_id`    | `int` | 运行到的流程图块的id，未运行则不返回。                             |
| `id`         | `int` | 当前使能的文件id，未运行则不返回。 |
| `name`   | `string` | 当前使能的文件名称。                                  |
| `plan_speed` | `int` | 全局规划速度比例 1-100。                                        |

- **代码示例**

**输入**  

```json
{ "command": "get_flowchart_program_run_state" }
```

**输出**  

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

### 开始运行指定编号在线编程文件`set_program_id_start`

- **输入参数**

| 参数                 | 类型     | 说明                                                              |
| :------------------- | :------- | :---------------------------------------------------------------- |
| `set_program_id_start` | `string` | 开始运行编号轨迹。                                                |
| `id`                   | `int`    | 运行指定的 ID，1-100，存在轨迹可运行。                            |
| `speed`                | `int`    | 1-100，需要运行轨迹的速度，可不提供速度比例，按照存储的速度运行。 |

- **输出参数**

| 参数 | 类型 | 说明 |
|:------------------|:-------|:----------------------------------------|
|`start_state`|`bool`|`true`:开始运行 `false`:运行失败。|

- **输出参数**

| 参数 | 类型 | 说明 |
|:------------------|:-------|:----------------------------------------|
|`finish_id`|`int`|运行到位的轨迹 ID|

- **代码示例**

**输入**  

开始运行轨迹 2，速度 50%。

```json
{"command":"set_program_id_start","id":2,"speed":50}
```

**输出**  

开始运行成功。

```json
{
    "command": "set_program_id_start",
    "start_state": true
}
```

在线编程程序结束后，会主动上报结束的 ID。

```json
{
    "state": "program_run_finish",
    "finish_id": 4
}
```

### 删除指定编号在线编程文件`delete_program_trajectory`

- **输入参数**

| 参数                      | 类型     | 说明                   |
| :------------------------ | :------- | :--------------------- |
| `delete_program_trajectory` | `string` | 删除指定 ID 的轨迹     |
| `id`                        | `int`    | 指定的 ID,删除的 ID 号 |

- **输出参数**

| 参数 | 类型 | 说明 |
|:------------------|:-------|:----------------------------------------|
|`delete_state`|`bool`|`true`:成功 `false`:失败|

- **代码示例**

**输入**  

开始运行轨迹 2，速度 50%

```json
{"command":"delete_program_trajectory","id":2}
```

**输出**  

```json
{
    "command": "delete_program_trajectory",
    "delete_state": true
}
```

### 修改指定编号的在线编程文件

- **输入参数**

| 参数                      | 类型     | 说明                                            |
| :------------------------ | :------- | :---------------------------------------------- |
| `update_program_trajectory` | `string` | 修改指定编号轨迹的信息                          |
| `id`                        | `int`    | 指定在线编程轨迹编号                            |
| `plan_speed`                | `int`    | 更新后的规划速度比例 1-100 （可选配置）         |
| `project_name`              | `string` | 更新后的文件名称（最大 10 个字节） （可选配置） |

- **输出参数**

| 参数 | 类型 | 说明 |
|:------------------|:-------|:----------------------------------------|
|`update_state`|`bool`|`true`:成功 `false`:失败|

- **代码示例**

**输入**  

修改指定编号轨迹的信息

```json
{"command":"update_program_trajectory","id":1,"plan_speed":66,"project_name":"file"}
```

**输出**  

```json
{
    "command": "update_program_trajectory",
    "update_state": true
}
```

### 设置IO默认运行编号

- **输入参数**

| 参数                    | 类型     | 说明                   |
| :---------------------- | :------- | :--------------------- |
| `set_default_run_program` | `string` | 设置IO默认运行的在线编程文件编号。 |

- **输出参数**

| 参数 | 类型 | 说明 |
|:------------------|:-------|:----------------------------------------|
|`set_default_run_program`|`bool`|`true`:成功 `false`:失败|

- **代码示例**

**输入**  

设置 IO 默认运行的在线编程文件编号，支持 0-100，0 代表取消设置。

```json
{"command":"set_default_run_program","id":1}
```

**输出**  

```json
{
    "command": "set_default_run_program",
    "set_state": true
}
```

### 获取 IO 默认运行编号

- **输入参数**

| 参数                    | 类型     | 说明                               |
| :---------------------- | :------- | :--------------------------------- |
| `get_default_run_program` | `string` | 获取 IO 默认运行的在线编程文件编号。 |

- **输出参数**

| 参数 | 类型 | 说明 |
|:------------------|:-------|:----------------------------------------|
|`id`|`int`|IO 默认运行的在线编程文件编号。|

- **代码示例**

**输入**  

获取 IO 默认运行编号

```json
{ "command": "get_default_run_program" }
```

**输出**  

```json
{
    "command": "get_default_run_program",
    "id": 1
}
```

## 全局路点

### 新增全局路点`add_global_waypoint`

- **输入参数**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`add_global_waypoint`|`string`|新增全局路点|
|`point_name`|`string`|全局路点的名称|
|`joint`|`int`|新增全局路点的关节角度，单位 0.001°|
|`pose`|`object`|新增全局路点的位置，位置：x：0.1m，y:0.2m，z：0.03m，姿态：rx:0.4rad，ry:0.5rad，rz:0.6rad|
|`work_frame`|`object`|工作坐标系名称|
|`tool_frame`|`string`|工具坐标系名称|
|`time`|`string`|新增全局路点时间|

- **输出参数**

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`add_state`|`bool`|`true` 成功   `false` 失败|

- **代码示例**

**输入**

新增全局路点

```json
{"command":"add_global_waypoint","point_name":"abc","joint":[10,20,30,40,50,60,40],"pose":[100000,200000,30000,400,500,600],"work_frame":"World","tool_frame":"Arm_Tip","time":"2023-2-22 15:23:00"}
```

**输出**  

```json
{
    "command": "add_global_waypoint",
    "add_state": true
}
```

### 更新全局路点`update_global_waypoint`

- **输入参数**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`update_global_waypoint`|`string`|更新全局路点指令。|
|`point_name`|`string`|全局路点的名称。|
|`joint`|`int`|更新全局路点的关节角度，单位 0.001°。|
|`pose`|`object`|更新全局路点的位置，位置：x：0.1m，y:0.2m，z：0.03m，姿态：rx:0.4rad，ry:0.5rad，rz:0.6rad。|
|`work_frame`|`object`|工作坐标系名称。|
|`tool_frame`|`string`|工具坐标系名称。|
|`time`|`string`|更新全局路点时间。|

- **输出参数**

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`update_state`|`bool`|`true` 成功   `false` 失败|

- **代码示例**

**输入**  

更新全局路点

```json
{"command":"update_global_waypoint","point_name":"abc","joint":[10,20,30,40,50,60,40],"pose":[100000,200000,30000,400,500,600],"work_frame":"World","tool_frame":"Arm_Tip","time":"2023-2-22 15:23:00"}
```

**输出**  

```json
{
    "command": "update_global_waypoint",
    "update_state": true
}
```

### 删除全局路点`delete_global_waypoint`

- **输入参数**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`delete_global_waypoint`|`string`|删除全局路点指令。|
|`point_name`|`string`|全局路点的名称。|

- **输出参数**

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`delete_state`|`bool`|`true` 成功   `false` 失败|

- **代码示例**

**输入**  

删除全局路点

```json
{"command":"delete_global_waypoint","point_name":"abc"}
```

**输出**  

```json
{
    "command": "delete_global_waypoint",
    "delete_state": true
}
```

### 查询指定全局路点`given_global_waypoint`

- **输入参数**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`given_global_waypoint`|`string`|查询指定全局路点|
|`point_name`|`string`|全局路点的名称|

- **输出参数**

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`given_state`|`bool`|`true` 成功   `false` 失败|

- **代码示例**

**输入**  

查询指定全局路点

```json
{"command":"given_global_waypoint","point_name":"abc"}
```

**输出**  

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

### 查询多个全局路点`get_global_waypoints_list`

- **输入参数**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`get_global_waypoints_list`|`string`|查询多个全局路点|
|`page_num`|`int`|页码（全部查询时不传此参数）|
|`page_size`|`int`|每页大小（全部查询时不传此参数）|
|`vague_search`|`string`|模糊搜索 （传递此参数可进行模糊查询）|

- **输出参数**

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`get_global_waypoints_list`|`string`|查询全局路点。|
|`total_size`|`int`|路点总数。|
|`list`|`object`|路点详细信息。|

- **代码示例**

**输入**  

查询多个全局路点.

```json
{"command":"get_global_waypoints_list","page_num":1,"page_size":10,"vague_search":"file"}
```

**输出**  

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
