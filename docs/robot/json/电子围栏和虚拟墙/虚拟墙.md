# 虚拟墙

虚拟墙功能支持在电流环拖动示教与力控拖动示教两种模式下，对拖动范围进行精确限制。在这两种特定的示教模式下，用户可以借助虚拟墙功能，确保机械臂的拖动操作不会超出预设的范围。
>注意，虚拟墙功能目前支持长方体和球体两种形状，并仅在上述两种示教模式下有效。在其他操作模式下，此功能将自动失效。因此，请确保在正确的操作模式下使用虚拟墙功能，以充分发挥其限制拖动范围的作用。

<div style="height: 2px; background-image: linear-gradient(to right, #ccc, #ccc); margin: 1em 0;"></div>

## 设置虚拟墙使能状态

**参数说明：**
|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|set_virtual_wall_enable|`string` |设置虚拟墙使能状态。|
|set_enable|`bool`|true 代表使能，false 代表禁使能。|
|in_out_side|`int`|0-机器人在虚拟墙内部。|
|effective_region|`int`|1-针对末端生效。|

**使用示例：**
实现：设置虚拟墙使能状态。

```json
{"command":"set_virtual_wall_enable","set_enable":false,"in_out_side":0,"effective_region":1}
```

**返回示例：**

```json
{"command":"set_virtual_wall_enable","set_state":true}
```

**参数说明**
|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|set_virtual_wall_enable|bool|true 成功   false  失败|

## 获取虚拟墙使能状态

**参数说明：**
|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|get_virtual_wall_enable|`string` |获取虚拟墙使能状态。|

**使用示例：**
实现：获取虚拟墙使能状态。

```json
{"command":"get_virtual_wall_enable"}
```

**返回示例：**

```json
{"command":"get_virtual_wall_enable","enable_state":false,"in_out _side":0,"effective_region":1}
```

**参数说明：**
|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|form|`int`|形状，1 表示长方体，3 表示球体|
|x_min_limit|`int`|长方体基于世界坐标系 X 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|x_max_limit|`int`|长方体基于世界坐标系 X 方向最大位置，单位 0.001m，示例中表示 1m。|
|y_min_limit|`int`|长方体基于世界坐标系 y 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|y_max_limit|`int`|长方体基于世界坐标系 y 方向最大位置，单位 0.001m，示例中表示 1m。|
|z_min_limit|`int`|长方体基于世界坐标系 z 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|z_max_limit|`int`|长方体基于世界坐标系 z 方向最大位置，单位 0.001m，示例中表示 1m。|
|x，y，z|`int`|表示球体基于世界坐标系的球心坐标，单位 0.001m，示例中表示 x-0.5m，y-1m，z-0.5m。|
|radius|`int`|表示球体的半径，单位 0.001m，示例中表示 0.9m。|

## 设置当前虚拟墙参数

**参数说明：**
|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|set_virtual_wall_config|`string`|设置当前虚拟墙参数。|
|form|`int`|形状，1 表示长方体，3 表示球体。|
|x_min_limit|`int`|长方体基于世界坐标系 X 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|x_max_limit|`int`|长方体基于世界坐标系 X 方向最大位置，单位 0.001m，示例中表示 1m。|
|y_min_limit|`int`|长方体基于世界坐标系 y 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|y_max_limit|`int`|长方体基于世界坐标系 y 方向最大位置，单位 0.001m，示例中表示 1m。|
|z_min_limit|`int`|长方体基于世界坐标系 z 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|z_max_limit|`int`|长方体基于世界坐标系 z 方向最大位置，单位 0.001m，示例中表示 1m。|
|x，y，z|`int`|表示球体基于世界坐标系的球心坐标，单位 0.001m，示例中表示 x-0.5m，y-1m，z-0.5m。|
|radius|`int`|表示球体的半径，单位 0.001m，示例中表示 0.9m。|

**使用示例：**
实现：设置当前虚拟墙参数-长方体。

```json
{"command":"set_virtual_wall_config","form":1,"x_min_limit":500," x_max_limit":1000,"y_min_limit":500,"y_max_limit":1000,"z_min_limit":500,"z_max_limit":1000}
```

实现：设置当前虚拟墙参数-球体。

```json
{"command":"set_virtual_wall_config","form":3,"x":500,"y":1000,"z":500,"radius":900}
```

**返回示例：**

```json
{"command":"set_virtual_wall_config","set_config":true}
```

**参数说明:**
|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|set_config|`bool`|true 成功，false 失败。|

## 获取当前虚拟墙参数

**参数说明：**
|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|get_virtual_wall_config|`string` |获取当前虚拟墙参数|

**使用示例：**
实现：设置当前虚拟墙参数。

```json
{"command":"get_virtual_wall_config"}
```

**返回示例-长方体：**

```json
{"command":"get_virtual_wall_config","form":1,"x_min_limit":500," x_max_limit":1000,"y_min_limit":500,"y_max_limit":1000,"z_min_limit":500,"z_max_limit":1000}
```

**返回示例-球体：**  

```json
{"command":"get_virtual_wall_config","form":3,"x":500,"y":1000,"z":500,"radius":900}
```

**参数说明：**

|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|form|`int`|形状，1 表示长方体，3 表示球体|
|x_min_limit|`int`|长方体基于世界坐标系 X 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|x_max_limit|`int`|长方体基于世界坐标系 X 方向最大位置，单位 0.001m，示例中表示 1m。|
|y_min_limit|`int`|长方体基于世界坐标系 y 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|y_max_limit|`int`|长方体基于世界坐标系 y 方向最大位置，单位 0.001m，示例中表示 1m。|
|z_min_limit|`int`|长方体基于世界坐标系 z 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|z_max_limit|`int`|长方体基于世界坐标系 z 方向最大位置，单位 0.001m，示例中表示 1m。|
|x，y，z|`int`|表示球体基于世界坐标系的球心坐标，单位 0.001m，示例中表示 x-0.5m，y-1m，z-0.5m。|
|radius|`int`|表示球体的半径，单位 0.001m，示例中表示 0.9m。|

## 自碰撞检测   设置自碰撞安全检测使能状态

**参数说明：**
|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|set_self_collision_enable|`string` |设置自碰撞安全检测使能状态。|

**使用示例：**
实现：设置当前虚拟墙参数。

```json
{"command":"set_self_collision_enable","set_enable":false}
```

**返回示例 ：**

```json
{"command":"set_self_collision_enable","set_state":true}
```

**参数说明：**
|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|set_state|`bool`|true 成功  false  失败。|

## 自碰撞检测   获取自碰撞安全检测使能状态

**参数说明：**
|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|get_self_collision_enable|`string`|获取自碰撞安全检测使能状态|

实现：设置当前虚拟墙参数。

```json
{"command":"get_self_collision_enable"}
```

**返回示例 ：**

```json
{"command":"get_self_collision_enable","enable_state":false}
```

**参数说明：**
|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|enable_state|`bool`|true 使能  false  禁使能。|
