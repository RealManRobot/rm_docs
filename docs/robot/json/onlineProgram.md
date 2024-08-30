# <p class="hidden">JSON协议：</p>在线编程配置指令集

## 文件传输

### 下发前准备（第二代控制器）`run_project`

- **输入参数**

| 参数           | 类型     | 说明           |
| :------------- | :------- | :------------- |
| `project_name` | `string` | 文件名称。     |
| `file_size`    | `int`    | 文件大小。     |
| `plan_speed`   | `int`    | 轨迹运行速度。 |

- **输出参数**

| 参数 | 类型 | 说明 |
|:------------------|:-------|:----------------------------------------|
|`run_project` | `bool` |`ture`：设置成功；`false`：设置失败。 |

- **代码示例**

**输入**  

实现：文件 xxx，大小是 2048，速度是 50%。

```json
{"command":"run_project","project_name":"XXX","file_size":2048,"plan_speed":50}
```

**输出**  

```json
{
    "command": "run_project",
    "project_state": true
}
```

### 下发前准备（第三代控制器）`run_project`

- **输入参数**

| 参数           | 类型     | 说明                                                     |
| :------------- | :------- | :------------------------------------------------------- |
| `project_name` | `string` | 文件名称。                                               |
| `file_size`    | `int`    | 文件大小。                                               |
| `plan_speed`   | `int`    | 轨迹运行速度。                                           |
| `only_save`    | `int`    | 仅保存文件，不运行。                                     |
| `save_id`      | `int`    | 保存到控制器中的编号，支持 1-100。                       |
| `step_flag`    | `int`    | 设置单步运行方式模式 1-设置单步模式 0-设置正常运动模式。 |

- **输出参数**

| 参数 | 类型 | 说明 |
|:------------------|:-------|:----------------------------------------|
|`run_project` | `bool` |`ture`：设置成功；`false`：设置失败 |

- **代码示例**

**输入**  

实现：文件 xxx，大小是 2048，速度是 50%。

```json
{"command":"run_project","project_name":"XXX","file_size":2048,"plan_speed":50,"step_flag":0,"only_save":0,"save_id":0}
```

**输出**  

```json
{
    "command": "run_project",
    "project_state": true
}
```

### 发送过程中`conduct_project`

::: warning 注意
从第二次开始
:::

- **输入参数**

机械臂每收到 2K 的数据，返回一帧该指令，示教器收到后，继续发送剩余数据。

- **输出参数**

| 参数 | 类型 | 说明 |
|:------------------|:-------|:----------------------------------------|
|`project_conduct` | `bool` |`ture`：接收成功；`false`：接收失败。 |

- **代码示例**

**输出**  

```json
{"command":"conduct_project","project_conduct":true}
```

### 发送校验返回`download_project`

- **输入参数**

| 参数               | 类型     | 说明           |
| :----------------- | :------- | :------------- |
| `download_project` | `string` | 发送校验返回。 |
| `project_state`    | `string` | 校验结果。     |
| `err_line`         | `bool`   | 错误行数。     |

- **输出参数**

| 参数 | 类型 | 说明 |
|:------------------|:-------|:----------------------------------------|
|`project_state` | `bool` |`ture`：设置成功；`false`：设置失败。 |

- **输出参数**

| 参数 | 类型 | 说明 |
|:------------------|:-------|:----------------------------------------|
|`project_state` | `bool` |`ture`：设置成功；`false`：设置失败 |
|`err_line`| `int` | 校验失败，err_line 为有问题的工程行数，示教器弹框提示，并将该行轨迹标红。若 err_line 为 0，则代表校验数据长度不对。 |

- **代码示例**

**输出**  

校验成功，示教器弹框提示。

```json
{
    "command": "download_project",
    "project_state": true
}
```

**输出**  

校验失败，err_line 为有问题的工程行数，示教器弹框提示，并将该行轨迹标红。<br>
若 err_line 为 0，则代表校验数据长度不对。

```json
{
    "command": "download_project",
    "project_state": false,
    "err_line": 60
}
```

### 规划过程中改变速度系数`plan_speed`

- **输入参数**

| 参数         | 类型     | 说明                     |
| :----------- | :------- | :----------------------- |
| `plan_speed` | `string` | 规划过程中改变速度系数。 |
| `speed`      | `int`    | 速度。                   |

- **输出参数**

| 参数 | 类型 | 说明 |
|:------------------|:-------|:----------------------------------------|
|`plan_state` | `bool` |`ture`：设置成功；`false`：设置失败 |

- **代码示例**

**输入**  

实现：设置速度比例系数为 50%。

```json
{"command":"plan_speed","speed":50}
```

**输出**  

```json
{
    "command": "plan_speed",
    "plan_state": true
}
```

## 提示框

### 弹窗提示`content`

文件树弹窗提醒。本指令是控制器发送给示教器，返回值是示教器发送给控制器

- **输入参数**

| 参数      | 类型     | 说明                           |
| :-------- | :------- | :----------------------------- |
| `content` | `int`    | 弹窗提示指令所在文件树的位置。 |

- **输出参数**

| 参数           | 类型   | 说明                      |
| :------------- | :----- | :------------------------ |
| `popup_result` | `bool` | `ture`：继续执行；`flase`：停止执行； |

- **代码示例**

**输入**  

实现：执行文件树第一条弹窗。

```json
{"state":"popup","content":1}
```

**输出**  

继续执行。

```json
{
    "command": "popup",
    "popup_result": true
}
```

## 在线编程文件管理（第三代控制器）

::: warning 注意
适用第三代控制器。
:::

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

获取刚拖动过的轨迹，在拖动示教后调用。

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

### 查询在线编程状态`get_program_run_state`

- **输入参数**

| 参数                  | 类型     | 说明                           |
| :-------------------- | :------- | :----------------------------- |
| `get_program_run_state` | `string` | 查询当前在线编程文件的运行状态 |

- **输出参数**

| 参数         | 类型  | 说明                                                            |
| :----------- | :---- | :-------------------------------------------------------------- |
| `run_state`  | `int` | 0 未开始 1 运行中 2 暂停中。                                    |
| `id`         | `int` | 运行轨迹编号，已存储轨迹的 id，没有存储则为 0，未运行则不返回。 |
| `plan_num`   | `int` | 运行到的行数，未运行则不返回。                                  |
| `loop_num`   | `int` | 存在循环指令的行数，未运行则不返回。                            |
| `loop_cont`  | `int` | 循环指令行数对应的运行次数，未运行则不返回。                    |
| `step_mode`  | `int` | 单步模式，1 为单步模式，0 为非单步模式。                        |
| `plan_speed` | `int` | 全局规划速度比例 1-100。                                        |
| `edit_id`    | `int` | 上次编辑的在线编程编号 id。                                     |

- **代码示例**

**输入**  

获取刚拖动过的轨迹，在拖动示教后调用。

```json
{ "command": "get_program_run_state" }
```

**输出**  

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

### 开始运行指定编号轨迹`set_program_id_start`

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
    "command": "set_program_id_run",
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

### 删除指定编号轨迹`delete_program_trajectory`

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

### 修改指定编号的轨迹信息

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
{"command":"set_init_pose","init_pose":[10000,0,20000,30000,0,20000,20000]}
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

::: warning 注意
适用第三代控制器
:::

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
{"command":"update_global_waypoint","point_name":"abc","joint ":[10,20,30,40,50,60,40],"pose":[100000,200000,30000,400,500,600],"work_frame":"World","tool_frame":"Arm_Tip","time":"2023-2-22 15:23:00"}
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
|`delete_state`|`bool`|`true` 成功   `false` 失败|

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
|vague_search|`string`|模糊搜索 （传递此参数可进行模糊查询）|

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
