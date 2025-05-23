# <p class="hidden">JSON 协议：</p>轨迹文件指令集

## 查询轨迹列表`get_trajectory_file_list`

- **输入参数**

| 参数                 | 类型     | 说明                     |
| :------------------- | :------- | :---------------------- |
| `get_trajectory_file_list` | `string` | 查询轨迹列表。              |
| `page_num`           | `int`    | 页码（全部查询时不传此参数）。             |
| `page_size`          | `int`    | 每页大小（全部查询时不传此参数）。              |
| `vague_search`       | `string`    | 模糊搜索（传递此参数可进行模糊查询）。               |

- **输出参数**

| 参数            | 类型   | 说明                                  |
| :-------------- | :----- | :------------------------------------ |
| `get_trajectory_file_list` | `string` | 查询轨迹列表。 |
| `total_size` | `int` | 轨迹总数。 |
| `list` | `object` | 轨迹详细信息。 |

- **代码示例**

**输入**  

查询多个拖动示教轨迹，页码：1，每页大小：10，模糊搜索名称中带“file”的轨迹文件。

```json
{"command":"get_trajectory_file_list","page_num":1,"page_size":10,"vague_search":"file"}
```

**输出**  

```json
{"command":"get_trajectory_file_list","list":[{"create_time":1737457680183,"name":"test2","point_num":501},{"create_time":1737458013270,"name":"test1","point_num":501}],"total_size":2}
```

## 开始运行指定编号轨迹`set_run_trajectory_file`

- **输入参数**

| 参数                 | 类型     | 说明               |
| :------------------- | :------- | :----------------------- |
| `set_run_trajectory_file`| `string` | 开始运行编号轨迹。                                                                                                    |
| `name`               | `string`    | 运行指定name的轨迹，存在轨迹可运行。                                                               |

- **输出参数**

| 参数 | 类型 | 说明 |
| :-------------- | :----- | :------------------------------------ |
| `start_state` | `bool` | 轨迹命令执行参数，`true`：开始运行，`false`：运行失败。 |
| `trajectory_file_state` | `string` | 轨迹文件运行到位参数，轨迹文件运行到位。 |

- **代码示例**

**输入**  

开始运行轨迹“123”。

```json
{"command":"set_run_trajectory_file","name":"123"}
```

**输出**  

开始运行成功。

```json
{
    "command": "set_run_trajectory_file",
    "run_state": true
}
```

开始运行失败。

```json
{
    "command": "set_run_trajectory_file",
    "run_state": false
}
```

轨迹复现结束后，返回轨迹运行到位。

```json
{
    "trajectory_file_state": "file_run_finish",
}
```

## 删除指定编号轨迹文件`delete_trajectory_file`

- **输入参数**

| 参数                 | 类型     | 说明                                                                                                              |
| :------------------- | :------- | :---------------------------------------------------------------------------------------------------------------- |
| `delete_trajectory_file`              | `string` | 删除指定 ID 的轨迹。                                            |
| `name`               | `string`    | 删除的轨迹名称。           |

- **输出参数**

| 参数            | 类型   | 说明                                  |
| :-------------- | :----- | :------------------------------------ |
| `delete_state` | `bool` | `true`：删除成功；`false`：删除失败。 |

- **代码示例**

**输入**  

删除轨迹ID为2的轨迹文件。

```json
{"command":"delete_trajectory_file","id":2}
```

**输出**  

删除轨迹文件成功：

```json
{
    "command": "delete_trajectory_file",
    "delete_state": true
}
```

删除轨迹文件失败：

```json
{
    "command": "delete_trajectory_file",
    "delete_state": false
}
```

## 保存轨迹文件`save_trajectory_file`

- **输入参数**

| 参数                 | 类型     | 说明                                                                                                              |
| :------------------- | :------- | :---------------------------------------------------------------------------------------------------------------- |
| `save_trajectory_file`    | `string` | 有可保存轨迹时下发该命令可保存成功。                                                                |
| `trajectory_name`               | `string`    | 保存的文件名称。                                                                 |

- **输出参数**

| 参数                 | 类型   | 说明                                                           |
| :------------------- | :----- | :------------------------------------------------------------- |
| `save_state`      | `bool` | `true`：保存成功；`false`：保存失败。                          |

- **代码示例**

**输入**  

保存新轨迹文件，并命名为123。

```json
{"command":"save_trajectory_file","trajectory_name":"123"}
```

**输出**  

保存轨迹文件成功：

```json
{
    "command": "save_trajectory_file",
    "save_state": true,
}
```

保存轨迹文件失败：

```json
{
    "command": "save_trajectory_file",
    "save_state": false,
}
```
