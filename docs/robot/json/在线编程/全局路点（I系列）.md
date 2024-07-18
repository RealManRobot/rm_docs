# 全局路点（I系列）

## 新增全局路点

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|add_global_waypoint|string|新增全局路点|
|point_name|string|全局路点的名称|
|joint|int|新增全局路点的关节角度，单位 0.001°|
|pose|object|新增全局路点的位置，位置：x：0.1m，y:0.2m，z：0.03m，姿态：rx:0.4rad，ry:0.5rad，rz:0.6rad|
|work_frame|object|工作坐标系名称|
|tool_frame|string|工具坐标系名称|
|time|string|新增全局路点时间|

**使用示例：**

实现：新增全局路点

```json
{"command":"add_global_waypoint","point_name":"abc","joint":[10,20,30,40,50,60,40],"pose":[100000,200000,30000,400,500,600],"work_frame":"World","tool_frame":"Arm_Tip","time":"2023-2-22 15:23:00"}
```

**返回示例：**

```json
{"command":"add_global_waypoint","add_state",true}
```

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`add_state`|bool|`true` 成功   `false` 失败|


## 更新全局路点

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|update_global_waypoint|string|更新全局路点|
|point_name|string|全局路点的名称|
|joint|int|更新全局路点的关节角度，单位 0.001°|
|pose|object|更新全局路点的位置，位置：x：0.1m，y:0.2m，z：0.03m，姿态：rx:0.4rad，ry:0.5rad，rz:0.6rad|
|work_frame|object|工作坐标系名称|
|tool_frame|string|工具坐标系名称|
|time|string|更新全局路点时间|

**使用示例：**

实现：更新全局路点

```json
{"command":"update_global_waypoint","point_name":"abc","joint ":[10,20,30,40,50,60,40],"pose":[100000,200000,30000,400,500,600],"work_frame":"World","tool_frame":"Arm_Tip","time":"2023-2-22 15:23:00"}
```
**返回示例：**

```json
{"command":"update_global_waypoint","update_state",true}
```

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`update_state`|bool|`true` 成功   `false` 失败|


## 删除全局路点

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|delete_global_waypoint|string|删除全局路点|
|point_name|string|全局路点的名称|

**使用示例：**

实现：删除全局路点
```json
{"command":"delete_global_waypoint","point_name":"abc"}
```
**返回示例：**

```json
{"command":"delete_global_waypoint","delete_state",true}
```

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`delete_state`|bool|`true` 成功   `false` 失败|


## 查询指定全局路点

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|given_global_waypoint|string|查询指定全局路点|
|point_name|string|全局路点的名称|

**使用示例：**

实现：查询指定全局路点
```json
{"command":"given_global_waypoint","point_name":"abc"}
```
**返回示例：**

```json
{"command":"given_global_waypoint","point_name":"abc","joint":[10,20,30,40,50,60,40],"pose":[100000,200000,30000,400,500,600],"work_frame":"World","tool_frame":"Arm_Tip","time":"2022-12-22 15:23:00"}
```

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`delete_state`|bool|`true` 成功   `false` 失败|


## 查询多个全局路点

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|given_global_waypoint|string|查询多个全局路点|
|page_num|int|页码（全部查询时不传此参数）|
|page_size|int|每页大小（全部查询时不传此参数）|
|vague_search|string|模糊搜索 （传递此参数可进行模糊查询）|

**使用示例：**

实现：查询多个全局路点
```json
{"command":"get_global_waypoints_list","page_num":1,"page_size":10,"vague_search":"file"}
```
**返回示例：**

```json
{"command":"get_global_waypoints_list","total_size":50,"list":[{"point_name":"abcd","joint":[10,20,30,40,50,60,40],"pose":[100000,200000,30000,400,500,600],"work_frame":"World","tool_frame":"Arm_Tip","time":"2022-12-22 15:23:00"},{"point_name":"1abc","joint":[10,20,30,40, 50,60,40],"pose":[100000,200000,30000,400,500,600],"work_frame":"World","tool_frame":"Arm_Tip","time":"2022-12-22 15:23:00"}]}
```

| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|get_global_waypoints_list|string|查询全局路点|
|total_size|int|路点总数|
|list|object|路点详细信息|
