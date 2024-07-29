# 机械臂配置-坐标系查询集

## 查询当前工具

**参数说明：**

| 参数                     | 类型 | 说明           |
| :----------------------- | :--- | :------------- |
| `get_current_tool_frame` |   `string`   | 查询当前工具。 |

**使用示例：**
实现：查询当前工具。

```json
{"command":"get_current_tool_frame"}
```

**返回示例：**

返回当前工具信息,如下：

    工具名称：tool2_frame；
    工具位置：x：0.1m，y:0.2m，z：0.03m；
    位置精度：0.001mm；
    工具姿态：rx：0.4rad，ry：0.5rad，rz：0.6rad；
    姿态精度：0.001rad；
    重量：payload：5kg精度0.001kg；
    质心：position：1mm精度0.001mm。

```json
    "state":"current_tool_frame",
    "tool_name":"tool2_frame",
    "pose":[100000,200000,30000,400,500,600],
    "payload":5000,
    "position":[1000,2000,3000]
```

**参数说明：**

| 参数                 | 类型 | 说明               |
| :------------------- | :--- | :----------------- |
| `current_tool_frame` |   `string`   | 返回当前工具信息。 |

## 查询已有所有工具名称

**参数说明：**

| 参数                   | 类型 | 说明                   |
| :--------------------- | :--- | :--------------------- |
| `get_total_tool_frame` |   `string`   | 查询已有所有工具名称。 |

**使用示例：**
实现：查询已有所有工具名称。

```json
{"command":"get_total_tool_frame"}
```

**返回示例：**

返回所有工具名称，共10个。工具名称：base_tool1，base_tool2，其中“NULL”为空坐标系，未建立。

```json
{
    "state":"total_tool_frame",
    "tool_names":["base_tool1","base_tool2"….,"NULL"]
}
```

**参数说明：**

| 参数               | 类型 | 说明               |
| :----------------- | :--- | :----------------- |
| `total_tool_frame` |   `string`   | 返回所有工具名称。 |

## 查询指定工具信息

**参数说明：**

| 参数             | 类型 | 说明               |
| :--------------- | :--- | :----------------- |
| `get_tool_frame` |   `string`   | 查询指定工具信息。 |
| `tool_name`      |   `string`   | 工具名称。           |

**使用示例：**
实现：查询指定工具信息。

```json
{"command":"get_tool_frame","tool_name":"tool"}
```

**返回示例：**

返回指定工具信息，如下：

    工具名称：tool2_frame,
    工具位置：x：0.1m，y:0.2m，z：0.03m，位置精度：0.001mm
    工具姿态：rx：0.4rad，ry：0.5rad，rz：0.6rad，姿态精度：0.001rad
    重量：payload：5kg精度0.001kg
    质心：position：1mm精度0.001mm。

```json
//成功：
{
    "state":"given_tool_frame",
    "tool_name":"tool2_frame",
    "pose":[100000,200000,30000,400,500,600],
    "payload":5000,
    "position":[1000,2000,3000]
}
//失败：
{"command":"get_tool_frame","get_state":false}
```

**参数说明：**

| 参数               | 类型 | 说明               |
| :----------------- | :--- | :----------------- |
| `given_tool_frame` |   `sting`   | 返回指定工具信息。 |

## 查询当前工作坐标系

**参数说明：**

| 参数                     | 类型 | 说明                 |
| :----------------------- | :--- | :------------------- |
| `get_current_work_frame` |   `string`   | 查询当前工作坐标系。 |

**使用示例：**
实现：查询当前工作坐标系。

```json
{"command":"get_current_work_frame"}
```

**返回示例：**

返回当前工作坐标系信息，如下：

    坐标系名称：work2_frame，
    坐标系位置：x：0.1m，y:0.2m，z：0.03m，位置精度：0.001mm；
    坐标系姿态：rx：0.4rad，ry：0.5rad，rz：0.6rad，姿态精度：0.001rad。

```json
{
    "state":"current_work_frame",
    "frame_name":"work2_frame",
    "pose":[100000,200000,30000,400,500,600]
}
```

**参数说明：**

| 参数                 | 类型 | 说明                     |
| :------------------- | :--- | :----------------------- |
| `current_work_frame` |   `string`   | 返回当前工作坐标系信息。 |

## 查询已有所有工作坐标系名称

**参数说明：**

| 参数                   | 类型 | 说明                         |
| :--------------------- | :--- | :--------------------------- |
| `get_total_work_frame` |   `string`   | 查询已有所有工作坐标系名称。 |

**使用示例：**
实现：查询已有所有工作坐标系名称。

```json
{"command":"get_total_work_frame"}
```

**返回示例：**

返回所有工作坐标系名称，坐标系名称：work1,work2,…。

```json
{
    "state":"total_work_frame",
    "frame_names":["work1","work2"….,"NULL"]
}
```

**参数说明：**

| 参数               | 类型 | 说明                     |
| :----------------- | :--- | :----------------------- |
| `total_work_frame` |   `string`   | 返回所有工作坐标系名称。 |

## 查询指定工作坐标系

**参数说明：**

| 参数             | 类型 | 说明                 |
| :--------------- | :--- | :------------------- |
| `get_work_frame` |   `string`   | 查询指定工作坐标系。 |
| `frame_name`     |   `string`   | 坐标系名称           |

**使用示例：**
实现：查询指定工作坐标系。

```json
{"command":"get_work_frame","frame_name":"work1"}
```

**返回示例：**

返回指定坐标系信息，如下：

    坐标系名称：work2_frame，
    坐标系位置：x：0.1m，y:0.2m，z：0.03m，位置精度：0.001mm
    坐标系姿态：rx：0.4rad，ry：0.5rad，rz：0.6rad，姿态精度：0.001rad。

```json
//成功：
{
    "state":"given_work_frame",
    "frame_name":"work2_frame",
    "pose":[100000,200000,30000,400,500,600]
}
//失败：
{"command":"get_work_frame","get_state":false}
```

**参数说明：**

| 参数               | 类型 | 说明                 |
| :----------------- | :--- | :------------------- |
| `given_work_frame` |   `string`   | 返回指定坐标系信息。 |