# 在线编程存储列表（I系列）

## 查询在线编程程序列表

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|page_num|int|页码（全部查询时不传此参数）|
|page_size|int|每页大小（全部查询时不传此参数）|
|vague_search|string|模糊搜索 （传递此参数可进行模糊查询）|


**使用示例：**

实现：获取刚拖动过的轨迹，在拖动示教后调用

```json
{"command":"get_program_trajectory_list","page_num":1,"page_size":10,"vague_search":"file"}
```

**返回示例：**

```json

{"command":"get_program_trajectory_list","page_num":1,"page_size":2,"total_size":2,"vague_search":"file","list":[{"id":1,"size":2580,"speed":50,"trajectory_name":"1_file1.txt"},{"id":2,"size":2580,"speed":50,"trajectory_name":"2_file2.txt"}]}
```

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`page_num`            | `int` | 页序列号 |
|`page_size`            | `int` | 每页大小 |
|`total_size`            | `int` | 总大小 |
|`vague_search`|`string`|模糊搜索 （传递此参数可进行模糊查询）|
| `list` | `list` | 轨迹列表信息 |

## 查询在线编程运行状态

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|get_program_run_state|string|查询当前在线编程文件的运行状态|

**使用示例：**

实现：获取刚拖动过的轨迹，在拖动示教后调用

```json
{"command":"get_program_run_state"}
```

**返回示例：**

```json
{"command":"get_program_run_state","run_state":1,"id":1,"plan_num":1,"loop_num":[1],"loop_cont":[3],"step_mode",0,"plan_speed",50,"edit_id":1}
```

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`run_state`|int|0 未开始 1 运行中 2 暂停中|
|id|`int`|运行轨迹编号，已存储轨迹 的 id，没有存储则为 0 ，未运行则不返回|
|`plan_num`|int|运行到的行数，未运行则不返回|
|`loop_num`|int|存在循环指令的行数，未运行则不返回|
|`loop_cont`|int|循环指令行数对应的运行次数，未运行则不返回|
|`step_mode`|int|单步模式，1 为单步模式，0 为非单步模式|
|`plan_speed`|int|全局规划速度比例 1-100|
|`edit_id`|int|上次编辑的在线编程编号 id|


## 开始运行指定编号轨迹

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|set_program_id_start|string|开始运行编号轨迹|
|id|int|运行指定的 ID，1-100，存在轨迹可运行|
|speed|int|1-100，需要运行轨迹的速度，可不提供速度比例，按照存储的速度运行|

**使用示例：**

实现：开始运行轨迹2，速度50%

```json
{"command":"set_program_id_start","id":2,"speed":50}
```

**返回示例：**

```json
{"command":"set_program_id_run","start_state",true}
```

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`start_state`|bool|`true`:开始运行  `false`:运行失败|

```json
{"state":"program_run_finish","finish_id":4}
```

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`finish_id`|int|运行到位的轨迹ID|


## 删除指定编号的轨迹

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|delete_program_trajectory|string|删除指定 ID 的轨迹|
|id|int|指定的 ID,删除的ID号|

**使用示例：**

实现：开始运行轨迹2，速度50%

```json
{"command":"delete_program_trajectory","id":2}
```

**返回示例：**

```json
{"command":"delete_program_trajectory","delete_state",true}
```

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`delete_state`|bool|`true`:成功  `false`:失败|



## 修改指定编号的轨迹信息

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|update_program_trajectory|string|修改指定编号轨迹的信息|
|id|指定在线编程轨迹编号|
|plan_speed|更新后的规划速度比例 1-100 （可选配置）|
|project_name|更新后的文件名称（最大 10 个字节） （可选配置）|

**使用示例：**

实现：修改指定编号轨迹的信息

```json
{"command":"update_program_trajectory","id":1,"plan_speed":66,"project_name":"file"}
```

**返回示例：**

```json
{"command":"update_program_trajectory","update_state":true}
```

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`update_state`|bool|`true`:成功  `false`:失败|

## 设置 IO 默认运行编号

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|set_default_run_program|string|删除指定 ID 的轨迹|
|id|int|指定的 ID,删除的ID号|

**使用示例：**

实现：设置 IO 默认运行的在线编程文件编号，支持 0-100，0 代表取消设置

```json
{"command":"set_default_run_program","id":1}
```

**返回示例：**

```json
{"command":"set_default_run_program","set_state",true}
```

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`set_default_run_program`|bool|`true`:成功  `false`:失败|


## 获取 IO 默认运行编号

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|get_default_run_program|string|获取 IO 默认运行的在线编程文件编号|

**使用示例：**

实现：获取 IO 默认运行编号

```json
{"command":"get_default_run_program"}
```

**返回示例：**

```json
{"command":"get_default_run_program","id":1}
```

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`id`|int|IO 默认运行的在线编程文件编号|
