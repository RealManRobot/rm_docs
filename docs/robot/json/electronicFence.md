# <p class="hidden">JSON协议：</p>电子围栏和虚拟墙配置指令集

## 数据管理

第三代机械臂具备电子围栏与虚拟墙功能，并提供了针对控制器所保存的电子围栏或虚拟墙几何模型参数的操作接口。用户可以通过这些接口，实现对电子围栏或虚拟墙的新增、查询、更新和删除操作，在使用中，可以灵活地使用保存在控制器中的参数配置，需要注意的是，目前控制器支持保存的参数要求不超过 10 个。

### 新增几何模型参数`add_electronic_fence_config`

- **输入参数**

| 参数        | 类型  | 说明                                                                                 |
| :---------- | :---- | :----------------------------------------------------------------------------------- |
| `form`        | `int` | 形状，1 表示长方体，2 表示点面矢量平面，3 表示球体。                                 |
| `form_name`   | `int` | 电子围栏名称，不超过 10 个字节，支持字母、数字、下划线。                             |
| `x_min_limit` | `int` | 长方体基于世界坐标系 X 方向最小位置，单位 0.001m，示例中表示 0.5m。                  |
| `x_max_limit` | `int` | 长方体基于世界坐标系 X 方向最大位置，单位 0.001m，示例中表示 1m。                    |
| `y_min_limit` | `int` | 长方体基于世界坐标系 y 方向最小位置，单位 0.001m，示例中表示 0.5m。                  |
| `y_max_limit` | `int` | 长方体基于世界坐标系 y 方向最大位置，单位 0.001m，示例中表示 1m。                    |
| `z_min_limit` | `int` | 长方体基于世界坐标系 z 方向最小位置，单位 0.001m，示例中表示 0.5m。                  |
| `z_max_limit` | `int` | 长方体基于世界坐标系 z 方向最大位置，单位 0.001m，示例中表示 1m。                    |
| `x1，y1，z1`  | `int` | 点面矢量平面三点法中的第一个点坐标，单位 0.001m，示例中表示 x-0.5m，y-1m，z-0.5m。   |
| `x2，y2，z2`  | `int` | 点面矢量平面三点法中的第二个点坐标，单位 0.001m，示例中表示 x-0.9m，y-0.2m，z-0.8m。 |
| `x3，y3，z3`  | `int` | 点面矢量平面三点法中的第三个点坐标，单位 0.001m，示例中表示 x-0.7m，y-1.2m，z-0.3m。 |
| `radius`      | `int` | 表示半径，单位 0.001m，示例中为 0.5m。                                               |
| `x`           | `int` | 表示球心在世界坐标系 X 轴的坐标，单位 0.001m，示例中表示 0.1m。                      |
| `y`           | `int` | 表示球心在世界坐标系 Y 轴的坐标，单位 0.001m，示例中表示 0.5m。                      |
| `z`           | `int` | 表示球心在世界坐标系 Z 轴的坐标，单位 0.001m，示例中表示 0.9m。                      |

- **输出参数**

| 参数         | 类型   | 说明                                  |
| :----------- | :----- | :------------------------------------ |
| `add_config` | `bool` | `ture`：设置成功；`false`：设置失败。 |

- **代码示例**  

**输入**  

新增集合模型：长方体。

```json
{"command":"add_electronic_fence_config","form":1,"form_name":"my_form","x_min_limit":500,"x_max_limit":1000,"y_min_limit":500,"y_max_limit":1000,"z_min_limit":500,"z_max_limit":1000}
```

新增集合模型：矢量平面。

```json
{"command":"add_electronic_fence_config","form":2,"form_name":"my_form","x1":500,"y1":1000,"z1":500,"x2":900,"y2":200,"z2":800,"x3":700,"y3":1200,"z3":300}
```

新增集合模型：球形。

```json
{"command":"add_electronic_fence_config","form":3,"form_name":"my_form","radius":500,"x":1000,"y":500,"z":900}
```

**输出**  

```json
{
    "command": "add_electronic_fence_config",
    "add_config": true
}
```

### 更新集合模型参数`update_electronic_fence_config`

- **输入参数**

| 参数        | 类型  | 说明                                                                                 |
| :---------- | :---- | :----------------------------------------------------------------------------------- |
| `form`        | `int` | 形状，1 表示长方体，2 表示点面矢量平面，3 表示球体。                                 |
| `form_name`   | `int` | 电子围栏名称，不超过 10 个字节，支持字母、数字、下划线。                             |
| `x_min_limit` | `int` | 长方体基于世界坐标系 X 方向最小位置，单位 0.001m，示例中表示 0.5m。                  |
| `x_max_limit` | `int` | 长方体基于世界坐标系 X 方向最大位置，单位 0.001m，示例中表示 1m。                    |
| `y_min_limit` | `int` | 长方体基于世界坐标系 y 方向最小位置，单位 0.001m，示例中表示 0.5m。                  |
| `y_max_limit` | `int` | 长方体基于世界坐标系 y 方向最大位置，单位 0.001m，示例中表示 1m。                    |
| `z_min_limit` | `int` | 长方体基于世界坐标系 z 方向最小位置，单位 0.001m，示例中表示 0.5m。                  |
| `z_max_limit` | `int` | 长方体基于世界坐标系 z 方向最大位置，单位 0.001m，示例中表示 1m。                    |
| `x1，y1，z1`  | `int` | 点面矢量平面三点法中的第一个点坐标，单位 0.001m，示例中表示 x-0.5m，y-1m，z-0.5m。   |
| `x2，y2，z2`  | `int` | 点面矢量平面三点法中的第二个点坐标，单位 0.001m，示例中表示 x-0.9m，y-0.2m，z-0.8m。 |
| `x3，y3，z3`  | `int` | 点面矢量平面三点法中的第三个点坐标，单位 0.001m，示例中表示 x-0.7m，y-1.2m，z-0.3m。 |
| `radius`      | `int` | 表示半径，单位 0.001m，示例中为 0.5m。                                               |
| `x`           | `int` | 表示球心在世界坐标系 X 轴的坐标，单位 0.001m，示例中表示 0.1m。                      |
| `y`           | `int` | 表示球心在世界坐标系 Y 轴的坐标，单位 0.001m，示例中表示 0.5m。                      |
| `z`           | `int` | 表示球心在世界坐标系 Z 轴的坐标，单位 0.001m，示例中表示 0.9m。                      |

- **输出参数**

| 参数            | 类型   | 说明                                  |
| :-------------- | :----- | :------------------------------------ |
| `update_config` | `bool` | `ture`：设置成功；`false`：设置失败。 |

- **代码示例**

**输入**  

新增集合模型：长方体。

```json
{"command":"update_electronic_fence_config","form":1,"form_name":"my_form","x_min_limit":500,"x_max_limit":1000,"y_min_limit":500,"y_max_limit":1000,"z_min_limit":500,"z_max_limit":1000}
```

新增集合模型：矢量平面。

```json
{"command":"update_electronic_fence_config","form":2,"form_name":"my_form","x1":500,"y1":1000,"z1":500,"x2":900,"y2":200,"z2":800,"x3":700,"y3":1200,"z3":300}
```

新增集合模型：球形。

```json
{"command":"update_electronic_fence_config","form":3,"form_name":"my_form","radius":500,"x":1000,"y":500,"z":900}
```

**输出**  

```json
{
    "command": "update_electronic_fence_config",
    "update_config": true
}
```

### 更删除指定几何模型`delete_electronic_fence_config`

删除指定几何模型

- **输入参数**

| 参数 | 类型 | 说明 |
| :-- | :-- | :-- |
|form_name|`string` |几何模型名称，不超过 10 个字节，支持字母、数字、下划线。|

- **输出参数**

| 参数                             | 类型   | 说明                                  |
| :------------------------------- | :----- | :------------------------------------ |
| `delete_electronic_fence_config` | `bool` | `ture`：删除成功；`false`：删除失败。 |

- **代码示例**

**输入**  

删除指定几何模型。

```json
{"command":"delete_electronic_fence_config","form_name":"my_form"}
```

**输出**  

```json
{
    "command": "delete_electronic_fence_config",
    "delete_config": true
}
```

### 查询所有几何模型`delete_electronic_fence_config`

- **输入参数**

| 参数 | 类型 | 说明 |
| :-- | :-- | :-- |
|`get_electronic_fence_list_names`|`string` |查询所有几何模型名称。|

- **输出参数**

| 参数        | 类型   | 说明                                           |
| :---------- | :----- | :--------------------------------------------- |
| `name_list` | `bool` | 几何模型名称列表，长度为实际存在几何模型数量。 |

- **代码示例**

**输入**  

查询所有几何模型。

```json
{ "command": "get_electronic_fence_list_names" }
```

**输出**  

```json
{
    "command": "get_electronic_fence_list_names",
    "name_list": [
        "a_form",
        "b_form"
    ]
}
```

### 查询指定几何模型`given_electronic_fence_config`

- **输入参数**

| 参数 | 类型 | 说明 |
| :-- | :-- | :-- |
|`given_electronic_fence_config`|`string` |查询指定几何模型。|

- **输出参数**

| 参数        | 类型     | 说明                                                                                 |
| :---------- | :------- | :----------------------------------------------------------------------------------- |
| `form_name`   | `string` | 电子围栏名称，不超过 10 个字节，支持字母、数字、下划线。                             |
| `form`        | `int`    | 形状，1 表示长方体，2 表示点面矢量平面，3 表示球体。                                 |
| `x_min_limit` | `int`    | 长方体基于世界坐标系 X 方向最小位置，单位 0.001m，示例中表示 0.5m。                  |
| `x_max_limit` | `int`    | 长方体基于世界坐标系 X 方向最大位置，单位 0.001m，示例中表示 1m。                    |
| `y_min_limit` | `int`    | 长方体基于世界坐标系 y 方向最小位置，单位 0.001m，示例中表示 0.5m。                  |
| `y_max_limit` | `int`    | 长方体基于世界坐标系 y 方向最大位置，单位 0.001m，示例中表示 1m。                    |
| `z_min_limit` | `int`    | 长方体基于世界坐标系 z 方向最小位置，单位 0.001m，示例中表示 0.5m。                  |
| `z_max_limit` | `int`    | 长方体基于世界坐标系 z 方向最大位置，单位 0.001m，示例中表示 1m。                    |
| `x1，y1，z1`  | `int`    | 点面矢量平面三点法中的第一个点坐标，单位 0.001m，示例中表示 x-0.5m，y-1m，z-0.5m。   |
| `x2，y2，z2`  | `int`    | 点面矢量平面三点法中的第二个点坐标，单位 0.001m，示例中表示 x-0.9m，y-0.2m，z-0.8m。 |
| `x3，y3，z3`  | `int`    | 点面矢量平面三点法中的第三个点坐标，单位 0.001m，示例中表示 x-0.7m，y-1.2m，z-0.3m。 |
| `radius`      | `int`    | 表示半径，单位 0.001m，示例中为 0.5m。                                               |
| `x`           | `int`    | 表示球心在世界坐标系 X 轴的坐标，单位 0.001m，示例中表示 0.1m。                      |
| `y`           | `int`    | 表示球心在世界坐标系 Y 轴的坐标，单位 0.001m，示例中表示 0.5m。                      |
| `z`           | `int`    | 表示球心在世界坐标系 Z 轴的坐标，单位 0.001m，示例中表示 0.9m。|

- **代码示例**

**输入**  

查询指定几何模型。

```json
{"command":"given_electronic_fence_config","form_name":"my_form"}
```

**输出**  

返回示例-长方体

```json
{
    "command": "given_electronic_fence_config",
    "form": 1,
    "form_name": "my_form",
    "x_min_limit": 500,
    "x_max_limit": 1000,
    "y_min_limit": 500,
    "y_max_limit": 1000,
    "z_min_limit": 500,
    "z_max_limit": 1000
}
```

返回示例-几何平面

```json
{
    "command": "given_electronic_fence_config",
    "form": 2,
    "form_name": "my_form",
    "x1": 500,
    "y1": 1000,
    "z1": 500,
    "x2": 900,
    "y2": 200,
    "z2": 800,
    "x3": 700,
    "y3": 1200,
    "z3": 300
}
```

返回示例-球体

```json
{
    "command": "given_electronic_fence_config",
    "form": 3,
    "form_name": "my_form",
    "radius": 500,
    "x": 1000,
    "y": 500,
    "z": 900
}
```

返回示例-查询失败

```json
{
    "command": "given_electronic_fence_config",
    "given_state": false
}
```

### 查询所有几何模型参数`get_electronic_fence_list_infos`

- **输入参数**

| 参数 | 类型 | 说明 |
| :-- | :-- | :-- |
|`get_electronic_fence_list_names`|`string` |查询所有几何模型参数。|

- **输出参数**

| 参数      | 类型   | 说明                                         |
| :-------- | :----- | :------------------------------------------- |
| `info_list` | `object` | 几何模型信息列表，长度为实际存在几何模型数量 |

- **代码示例**

**输入**  

查询所有几何模型参数

```json
{ "command": "get_electronic_fence_list_infos" }
```

**输出**  

```json
{
    "command": "get_electronic_fence_list_infos",
    "info_list": [
        {
            "form": 1,
            "form_name": "my_form",
            "x_min_limit": 500,
            "x_max_limit": 1000,
            "y_min_limit": 500,
            "y_max_limit": 1000,
            "z_min_limit": 500,
            "z_max_limit": 1000
        },
        {
            "form": 2,
            "form_name": "my_form",
            "x1": 500,
            "y1": 1000,
            "z1": 500,
            "x2": 900,
            "y2": 200,
            "z2": 800,
            "x3": 700,
            "y3": 1200,
            "z3": 300
        }
    ]
}
```

## 电子围栏

电子围栏功能通过精确设置参数，确保机械臂的轨迹规划、示教等运动均在设定的电子围栏范围内进行。当机械臂的运动轨迹可能超出电子围栏的界限时，系统会立即返回相应的错误码，并自动中止运动，从而有效保障机械臂的安全运行。

::: warning 注意
电子围栏目前仅支持长方体和点面矢量平面这两种形状，并且其仅在仿真模式下生效，为用户提供一个预演轨迹与进行轨迹优化的安全环境
:::

### 设置电子围栏使能状态`set_electronic_fence_enable`

- **输入参数**

| 参数 | 类型 | 说明 |
| :-- | :-- | :-- |
|`set_electronic_fence_enable`|`string` |设置电子围栏使能状态。|
|`set_enable：`|`bool`|true 代表使能，false 代表禁使能。|
|`in_out_side`|`int`|0-机器人在电子围栏内部，1-机器人在电子围栏外部。|
|`effective_region`|`int`|0-针对整臂区域生效。|

- **输出参数**

| 参数      | 类型   | 说明                   |
| :-------- | :----- | :--------------------- |
| `set_state` | `bool` | `true`:成功 `false`:失败。 |

- **代码示例**

**输入**  

设置电子围栏使能状态。

```json
{"command":"set_electronic_fence_enable","set_enable":false,"in_out_side":0,"effective_region":0}
```

**输出**  

```json
{"command":"set_electronic_fence_enable","set_state":true}
```

### 获取电子围栏使能状态`get_electronic_fence_enable`

- **输入参数**

| 参数 | 类型 | 说明 |
| :-- | :-- | :-- |
|`get_electronic_fence_enable`|`string` |获取电子围栏使能状态。|

- **输出参数**

| 参数             | 类型   | 说明                                             |
| :--------------- | :----- | :----------------------------------------------- |
| `enable_state`     | `bool` | `true` 代表使能，`false`代表禁使能。                |
| `in_out_side`      | `int`  | 0-机器人在电子围栏内部，1-机器人在电子围栏外部。 |
| `effective_region` | `int`  | 0-针对整臂区域生效。                             |

- **代码示例**

**输入**  

获取电子围栏使能状态。

```json
{ "command": "get_electronic_fence_enable" }
```

**输出**  

```json
{
    "command": "get_electronic_fence_enable",
    "enable_state": false,
    "in_out_side": 0,
    "effective_region": 0
}
```

### 设置当前电子围栏参数`set_electronic_fence_config`

- **输入参数**

| 参数 | 类型 | 说明 |
| :-- | :-- | :-- |
|set_electronic_fence_config|`string` |设置当前电子围栏参数。|
|`form`|`int`|形状，1 表示长方体，2 表示点面矢量平面，3 表示球体|
|`form_name`|`int`|电子围栏名称，不超过 10 个字节，支持字母、数字、下划线。|
|`x_min_limit`|`int`|长方体基于世界坐标系 X 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|`x_max_limit`|`int`|长方体基于世界坐标系 X 方向最大位置，单位 0.001m，示例中表示 1m。|
|`y_min_limit`|`int`|长方体基于世界坐标系 y 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|`y_max_limit`|`int`|长方体基于世界坐标系 y 方向最大位置，单位 0.001m，示例中表示 1m。|
|`z_min_limit`|`int`|长方体基于世界坐标系 z 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|`z_max_limit`|`int`|长方体基于世界坐标系 z 方向最大位置，单位 0.001m，示例中表示 1m。|
|`x1，y1，z1`|`int`|点面矢量平面三点法中的第一个点坐标，单位 0.001m，示例中表示 x-0.5m，y-1m，z-0.5m。|
|`x2，y2，z2`|`int`|点面矢量平面三点法中的第二个点坐标，单位 0.001m，示例中表示 x-0.9m，y-0.2m，z-0.8m。|
|`x3，y3，z3`|`int`|点面矢量平面三点法中的第三个点坐标，单位 0.001m，示例中表示 x-0.7m，y-1.2m，z-0.3m。|

- **输出参数**

| 参数       | 类型   | 说明                    |
| :--------- | :----- | :---------------------- |
| `set_config` | `bool` | `true` 成功，`false` 失败。 |

- **代码示例**

**输入**  

设置当前电子围栏参数-长方体。

```json
{"command":"set_electronic_fence_config","form":1,"x_min_limit":500,"x_max_limit":1000,"y_min_limit":500,"y_max_limit":1000,"z_ min_limit":500,"z_max_limit":1000}
```

设置当前电子围栏参数-点面矢量平面。

```json
{"command":"set_electronic_fence_config","form":2,"form_name":"my_form","x1":500,"y1":1000,"z1":500,"x2":900,"y2":200,"z2":800,"x3":700,"y3":1200,"z3":300}
```

**输出**  

```json
{
    "command": "set_electronic_fence_config",
    "set_config": false
}
```

### 获取当前电子围栏参数`get_electronic_fence_config`

- **输入参数**

| 参数 | 类型 | 说明 |
| :-- | :-- | :-- |
|`get_electronic_fence_enable`|`string`|获取当前电子围栏参数。|

- **输出参数**

| 参数 | 类型 | 说明 |
| :-- | :-- | :-- |
|`form`|`int`|形状，1 表示长方体，2 表示点面矢量平面，3 表示球体。|
|`form_name`|`int`|电子围栏名称，不超过 10 个字节，支持字母、数字、下划线。|
|`x_min_limit`|`int`|长方体基于世界坐标系 X 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|`x_max_limit`|`int`|长方体基于世界坐标系 X 方向最大位置，单位 0.001m，示例中表示 1m。|
|`y_min_limit`|`int`|长方体基于世界坐标系 y 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|`y_max_limit`|`int`|长方体基于世界坐标系 y 方向最大位置，单位 0.001m，示例中表示 1m。|
|`z_min_limit`|`int`|长方体基于世界坐标系 z 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|`z_max_limit`|`int`|长方体基于世界坐标系 z 方向最大位置，单位 0.001m，示例中表示 1m。|
|`x1，y1，z1`|`int`|点面矢量平面三点法中的第一个点坐标，单位 0.001m，示例中表示 x-0.5m，y-1m，z-0.5m。|
|`x2，y2，z2`|`int`|点面矢量平面三点法中的第二个点坐标，单位 0.001m，示例中表示 x-0.9m，y-0.2m，z-0.8m。|
|`x3，y3，z3`|`int`|点面矢量平面三点法中的第三个点坐标，单位 0.001m，示例中表示 x-0.7m，y-1.2m，z-0.3m。|

- **代码示例**

**输入**  

获取当前电子围栏参数。

```json
{ "command": "get_electronic_fence_config" }
```

**输出**  

返回示例-长方体

```json
{
    "command": "get_electronic_fence_config",
    "form": 1,
    "x_min_limit": 500,
    "x_max_limit": 1000,
    "y_min_limit": 500,
    "y_max_limit": 1000,
    "z_ min_limit": 500,
    "z_max_limit": 1000
}
```

返回示例-点面矢量平面

```json
{
    "command": "get_electronic_fence_config",
    "form": 2,
    "form_name": "my_form",
    "x1": 500,
    "y1": 1000,
    "z1": 500,
    "x2": 900,
    "y2": 200,
    "z2": 800,
    "x3": 700,
    "y3": 1200,
    "z3": 300
}
```

## 虚拟墙

虚拟墙功能支持在电流环拖动示教与力控拖动示教两种模式下，对拖动范围进行精确限制。在这两种特定的示教模式下，用户可以借助虚拟墙功能，确保机械臂的拖动操作不会超出预设的范围。

::: warning 注意
虚拟墙功能目前支持长方体和球体两种形状，并仅在上述两种示教模式下有效。在其他操作模式下，此功能将自动失效。因此，请确保在正确的操作模式下使用虚拟墙功能，以充分发挥其限制拖动范围的作用
:::

### 设置虚拟墙使能状态`set_virtual_wall_enable`

- **输入参数**

| 参数 | 类型 | 说明 |
| :-- | :-- | :-- |
|`set_virtual_wall_enable`|`string` |设置虚拟墙使能状态。|
|`set_enable`|`bool`|`true` 代表使能，`false` 代表禁使能。|
|`in_out_side`|`int`|0-机器人在虚拟墙内部。|
|`effective_region`|`int`|1-针对末端生效。|

- **输出参数**

| 参数 | 类型 | 说明 |
| :-- | :-- | :-- |
|`set_virtual_wall_enable`|`bool`|`true` 成功 `false` 失败|

- **代码示例**

**输入**  

设置虚拟墙使能状态。

```json
{"command":"set_virtual_wall_enable","set_enable":false,"in_out_side":0,"effective_region":1}
```

**输出**  

```json
{
    "command": "set_virtual_wall_enable",
    "set_state": true
}
```

### 获取虚拟墙使能状态`get_virtual_wall_enable`

- **输入参数**

| 参数 | 类型 | 说明 |
| :-- | :-- | :-- |
|`get_virtual_wall_enable`|`string` |获取虚拟墙使能状态。|

- **输出参数**

| 参数 | 类型 | 说明 |
| :-- | :-- | :-- |
|`form`|`int`|形状，1 表示长方体，3 表示球体|
|`x_min_limit`|`int`|长方体基于世界坐标系 X 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|`x_max_limit`|`int`|长方体基于世界坐标系 X 方向最大位置，单位 0.001m，示例中表示 1m。|
|`y_min_limit`|`int`|长方体基于世界坐标系 y 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|`y_max_limit`|`int`|长方体基于世界坐标系 y 方向最大位置，单位 0.001m，示例中表示 1m。|
|`z_min_limit`|`int`|长方体基于世界坐标系 z 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|`z_max_limit`|`int`|长方体基于世界坐标系 z 方向最大位置，单位 0.001m，示例中表示 1m。|
|`x，y，z`|`int`|表示球体基于世界坐标系的球心坐标，单位 0.001m，示例中表示 x-0.5m，y-1m，z-0.5m。|
|`radius`|`int`|表示球体的半径，单位 0.001m，示例中表示 0.9m。|

- **代码示例**

**输入**  

获取虚拟墙使能状态。

```json
{ "command": "get_virtual_wall_enable" }
```

**输出**  

```json
{
    "command": "get_virtual_wall_enable",
    "enable_state": false,
    "in_out _side": 0,
    "effective_region": 1
}
```

### 设置当前虚拟墙参数`set_virtual_wall_config`

- **输入参数**

| 参数 | 类型 | 说明 |
| :-- | :-- | :-- |
|`set_virtual_wall_config`|`string`|设置当前虚拟墙参数。|
|`form`|`int`|形状，1 表示长方体，3 表示球体。|
|`x_min_limit`|`int`|长方体基于世界坐标系 X 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|`x_max_limit`|`int`|长方体基于世界坐标系 X 方向最大位置，单位 0.001m，示例中表示 1m。|
|`y_min_limit`|`int`|长方体基于世界坐标系 y 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|`y_max_limit`|`int`|长方体基于世界坐标系 y 方向最大位置，单位 0.001m，示例中表示 1m。|
|`z_min_limit`|`int`|长方体基于世界坐标系 z 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|`z_max_limit`|`int`|长方体基于世界坐标系 z 方向最大位置，单位 0.001m，示例中表示 1m。|
|`x,y,z`|`int`|表示球体基于世界坐标系的球心坐标，单位 0.001m，示例中表示 x-0.5m，y-1m，z-0.5m。|
|`radius`|`int`|表示球体的半径，单位 0.001m，示例中表示 0.9m。|

- **输出参数**

| 参数 | 类型 | 说明 |
| :-- | :-- | :-- |
|`set_config`|`bool`|`true` 成功，`false` 失败。|

- **代码示例**

**输入**  

设置当前虚拟墙参数-长方体。

```json
{"command":"set_virtual_wall_config","form":1,"x_min_limit":500,"x_max_limit":1000,"y_min_limit":500,"y_max_limit":1000,"z_min_limit":500,"z_max_limit":1000}
```

设置当前虚拟墙参数-球体。

```json
{"command":"set_virtual_wall_config","form":3,"x":500,"y":1000,"z":500,"radius":900}
```

**输出**  

设置成功。

```json
{
    "command": "set_virtual_wall_config",
    "set_config": true
}
```

设置失败。

```json
{
    "command": "set_virtual_wall_config",
    "set_config": false
}
```

### 获取当前虚拟墙参数`get_virtual_wall_config`

- **输入参数**

| 参数 | 类型 | 说明 |
| :-- | :-- | :-- |
|`get_virtual_wall_config`|`string` |获取当前虚拟墙参数|

- **输出参数**

| 参数        | 类型  | 说明                                                                             |
| :---------- | :---- | :------------------------------------------------------------------------------- |
| `form`        | `int` | 形状，1 表示长方体，3 表示球体                                                   |
| `x_min_limit` | `int` | 长方体基于世界坐标系 X 方向最小位置，单位 0.001m，示例中表示 0.5m。              |
| `x_max_limit` | `int` | 长方体基于世界坐标系 X 方向最大位置，单位 0.001m，示例中表示 1m。                |
| `y_min_limit` | `int` | 长方体基于世界坐标系 y 方向最小位置，单位 0.001m，示例中表示 0.5m。              |
| `y_max_limit` | `int` | 长方体基于世界坐标系 y 方向最大位置，单位 0.001m，示例中表示 1m。                |
| `z_min_limit` | `int` | 长方体基于世界坐标系 z 方向最小位置，单位 0.001m，示例中表示 0.5m。              |
| `z_max_limit` | `int` | 长方体基于世界坐标系 z 方向最大位置，单位 0.001m，示例中表示 1m。                |
| `x,y,z`     | `int` | 表示球体基于世界坐标系的球心坐标，单位 0.001m，示例中表示 x-0.5m，y-1m，z-0.5m。 |
| `radius`      | `int` | 表示球体的半径，单位 0.001m，示例中表示 0.9m。                                   |

- **输出参数**

| 参数 | 类型 | 说明 |
| :-- | :-- | :-- |
|`set_state`|`bool`|`true` 成功 `false` 失败。|

- **代码示例**

**输入**  

设置当前虚拟墙参数。

```json
{ "command": "get_virtual_wall_config" }
```

**输出**  

返回示例-长方体

```json
{
    "command": "get_virtual_wall_config",
    "form": 1,
    "x_min_limit": 500,
    "x_max_limit": 1000,
    "y_min_limit": 500,
    "y_max_limit": 1000,
    "z_min_limit": 500,
    "z_max_limit": 1000
}
```

返回示例-球体

```json
{
    "command": "get_virtual_wall_config",
    "form": 3,
    "x": 500,
    "y": 1000,
    "z": 500,
    "radius": 900
}
```

### 自碰撞检测 设置自碰撞安全检测使能状态`set_self_collision_enable`

- **输入参数**

| 参数 | 类型 | 说明 |
| :-- | :-- | :-- |
|`set_self_collision_enable`|`string` |设置自碰撞安全检测使能状态。|

- **代码示例**

**输入**  

设置当前虚拟墙参数。

```json
{"command":"set_self_collision_enable","set_enable":false}
```

**输出**  

```json
{
    "command": "set_self_collision_enable",
    "set_state": true
}
```

### 自碰撞检测 获取自碰撞安全检测使能状态`get_self_collision_enable`

- **输入参数**

| 参数 | 类型 | 说明 |
| :-- | :-- | :-- |
|`get_self_collision_enable`|`string`|获取自碰撞安全检测使能状态|

- **输出参数**

| 参数 | 类型 | 说明 |
| :-- | :-- | :-- |
|`enable_state`|`bool`|`true` 使能 `false` 禁使能。|

- **代码示例**

**输入**  

设置当前虚拟墙参数。

```json
{ "command": "get_self_collision_enable" }
```

**输出**  

```json
{
    "command": "get_self_collision_enable",
    "enable_state": false
}
```
