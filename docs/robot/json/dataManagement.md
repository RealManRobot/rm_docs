# 数据管理

I系列机械臂具备电子围栏与虚拟墙功能，并提供了针对控制器所保存的电子围栏或虚拟墙几何模型参数的操作接口。用户可以通过这些接口，实现对电子围栏或虚拟墙的新增、查询、更新和删除操作，在使用中，可以灵活地使用保存在控制器中的参数配置，需要注意的是，目前控制器支持保存的参数要求不超过10个。

## 新增几何模型参数

**参数说明：**

|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|form|`int`|形状，1 表示长方体，2 表示点面矢量平面，3 表示球体。|
|form_name|`int`|电子围栏名称，不超过 10 个字节，支持字母、数字、下划线。|
|x_min_limit|`int`|长方体基于世界坐标系 X 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|x_max_limit|`int`|长方体基于世界坐标系 X 方向最大位置，单位 0.001m，示例中表示 1m。|
|y_min_limit|`int`|长方体基于世界坐标系 y 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|y_max_limit|`int`|长方体基于世界坐标系 y 方向最大位置，单位 0.001m，示例中表示 1m。|
|z_min_limit|`int`|长方体基于世界坐标系 z 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|z_max_limit|`int`|长方体基于世界坐标系 z 方向最大位置，单位 0.001m，示例中表示 1m。|
|x1，y1，z1|`int`|点面矢量平面三点法中的第一个点坐标，单位 0.001m，示例中表示 x-0.5m，y-1m，z-0.5m。|
|x2，y2，z2|`int`|点面矢量平面三点法中的第二个点坐标，单位 0.001m，示例中表示 x-0.9m，y-0.2m，z-0.8m。|
|x3，y3，z3|`int`|点面矢量平面三点法中的第三个点坐标，单位 0.001m，示例中表示 x-0.7m，y-1.2m，z-0.3m。|
|radius|`int`|表示半径，单位 0.001m，示例中为 0.5m。|
|x|`int`|表示球心在世界坐标系 X 轴的坐标，单位 0.001m，示例中表示 0.1m。|
|y|`int`|表示球心在世界坐标系 Y 轴的坐标，单位 0.001m，示例中表示 0.5m。|
|z|`int`|表示球心在世界坐标系 Z 轴的坐标，单位 0.001m，示例中表示 0.9m。|

**使用示例：**
实现：新增集合模型：长方体。

```json
{"command":"add_electronic_fence_config","form":1,"form_name":"my_form","x_min_limit":500,"x_max_limit":1000,"y_min_limit":500,"y_max_limit":1000,"z_min_limit":500,"z_max_limit":1000}
```

实现：新增集合模型：矢量平面。

```json
{"command":"add_electronic_fence_config","form":2,"form_name":"my_form","x1":500,"y1":1000,"z1":500,"x2":900,"y2":200,"z2":800,"x3":700,"y3":1200,"z3":300}
```

实现：新增集合模型：球形。

```json
{"command":"add_electronic_fence_config","form":3,"form_name":"my_form","radius":500,"x":1000,"y":500,"z":900}
```

**返回示例：**

```json
{"command":"add_electronic_fence_config","add_config":true}
```

|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|   `add_config`     |   `bool`     |   `ture`：设置成功；`false`：设置失败。    |

## 更新集合模型参数

**参数说明：**

|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|form|`int`|形状，1 表示长方体，2 表示点面矢量平面，3 表示球体。|
|form_name|`int`|电子围栏名称，不超过 10 个字节，支持字母、数字、下划线。|
|x_min_limit|`int`|长方体基于世界坐标系 X 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|x_max_limit|`int`|长方体基于世界坐标系 X 方向最大位置，单位 0.001m，示例中表示 1m。|
|y_min_limit|`int`|长方体基于世界坐标系 y 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|y_max_limit|`int`|长方体基于世界坐标系 y 方向最大位置，单位 0.001m，示例中表示 1m。|
|z_min_limit|`int`|长方体基于世界坐标系 z 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|z_max_limit|`int`|长方体基于世界坐标系 z 方向最大位置，单位 0.001m，示例中表示 1m。|
|x1，y1，z1|`int`|点面矢量平面三点法中的第一个点坐标，单位 0.001m，示例中表示 x-0.5m，y-1m，z-0.5m。|
|x2，y2，z2|`int`|点面矢量平面三点法中的第二个点坐标，单位 0.001m，示例中表示 x-0.9m，y-0.2m，z-0.8m。|
|x3，y3，z3|`int`|点面矢量平面三点法中的第三个点坐标，单位 0.001m，示例中表示 x-0.7m，y-1.2m，z-0.3m。|
|radius|`int`|表示半径，单位 0.001m，示例中为 0.5m。|
|x|`int`|表示球心在世界坐标系 X 轴的坐标，单位 0.001m，示例中表示 0.1m。|
|y|`int`|表示球心在世界坐标系 Y 轴的坐标，单位 0.001m，示例中表示 0.5m。|
|z|`int`|表示球心在世界坐标系 Z 轴的坐标，单位 0.001m，示例中表示 0.9m。|

**使用示例：**
实现：新增集合模型：长方体。

```json
{"command":"update_electronic_fence_config","form":1,"form_name":"my_form","x_min_limit":500,"x_max_limit":1000,"y_min_limit":500,"y_max_limit":1000,"z_min_limit":500,"z_max_limit":1000}
```

实现：新增集合模型：矢量平面。

```json
{"command":"update_electronic_fence_config","form":2,"form_name":"my_form","x1":500,"y1":1000,"z1":500,"x2":900,"y2":200,"z2":800,"x3":700,"y3":1200,"z3":300}
```

实现：新增集合模型：球形。

```json
{"command":"update_electronic_fence_config","form":3,"form_name":"my_form","radius":500,"x":1000,"y":500,"z":900}
```

**返回示例：**

```json
{"command":"update_electronic_fence_config","update_config":true}
```

|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|   `update_config`     |   `bool`     |   `ture`：设置成功；`false`：设置失败。 |

## 更删除指定几何模型

删除指定几何模型

**参数说明：**
|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|form_name|`string` |几何模型名称，不超过 10 个字节，支持字母、数字、下划线。|

**使用示例：**
实现：删除指定几何模型。

```json
{"command":"delete_electronic_fence_config","form_name":"my_form"}
```

**返回示例：**

```json
{"command":"delete_electronic_fence_config","delete_config":true}
```

|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|   `delete_electronic_fence_config`     |   `bool`     |   `ture`：删除成功；`false`：删除失败。 |

## 查询所有几何模型

**参数说明：**
|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|get_electronic_fence_list_names|`string` |查询所有几何模型名称。|

**使用示例：**
实现：查询所有几何模型。

```json
{"command":"get_electronic_fence_list_names"}
```

**返回示例：**

```json
{"command":"get_electronic_fence_list_names","name_list":["a_form","b_form"]}
```

|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|   `name_list`     |   `bool`     |   几何模型名称列表，长度为实际存在几何模型数量。 |

## 查询指定几何模型

**参数说明：**
|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|given_electronic_fence_config|`string` |查询指定几何模型。|

**使用示例：**
实现：查询指定几何模型。

```json
{"command":"given_electronic_fence_config","form_name":"my_form"}
```

**返回示例-长方体：**

```json
{"command":"given_electronic_fence_config","form":1,"form_name":"my_form","x_min_limit":500,"x_max_limit":1000,"y_min_limit":500,"y_max_limit":1000,"z_min_limit":500,"z_max_limit":1000}
```

**返回示例-矢量平面：**

```json
{"command":"given_electronic_fence_config","form":2,"form_name":"my_form","x1":500,"y1":1000,"z1":500,"x2":900,"y2":200,"z2":800,"x3":700,"y3":1200,"z3":300}
```

**返回示例-球体：**

```json
{"command":"given_electronic_fence_config","form":3,"form_name":"my_form","radius":500,"x":1000,"y":500,"z":900}
```

|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|form_name|`string`|电子围栏名称，不超过 10 个字节，支持字母、数字、下划线。|
|form|`int`|形状，1 表示长方体，2 表示点面矢量平面，3 表示球体。|
|x_min_limit|`int`|长方体基于世界坐标系 X 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|x_max_limit|`int`|长方体基于世界坐标系 X 方向最大位置，单位 0.001m，示例中表示 1m。|
|y_min_limit|`int`|长方体基于世界坐标系 y 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|y_max_limit|`int`|长方体基于世界坐标系 y 方向最大位置，单位 0.001m，示例中表示 1m。|
|z_min_limit|`int`|长方体基于世界坐标系 z 方向最小位置，单位 0.001m，示例中表示 0.5m。|
|z_max_limit|`int`|长方体基于世界坐标系 z 方向最大位置，单位 0.001m，示例中表示 1m。|
|x1，y1，z1|`int`|点面矢量平面三点法中的第一个点坐标，单位 0.001m，示例中表示 x-0.5m，y-1m，z-0.5m。|
|x2，y2，z2|`int`|点面矢量平面三点法中的第二个点坐标，单位 0.001m，示例中表示 x-0.9m，y-0.2m，z-0.8m。|
|x3，y3，z3|`int`|点面矢量平面三点法中的第三个点坐标，单位 0.001m，示例中表示 x-0.7m，y-1.2m，z-0.3m。|
|radius|`int`|表示半径，单位 0.001m，示例中为 0.5m。|
|x|`int`|表示球心在世界坐标系 X 轴的坐标，单位 0.001m，示例中表示 0.1m。|
|y|`int`|表示球心在世界坐标系 Y 轴的坐标，单位 0.001m，示例中表示 0.5m。|
|z|`int`|表示球心在世界坐标系 Z 轴的坐标，单位 0.001m，示例中表示 0.9m。|

## 查询所有几何模型参数

**参数说明：**
|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|get_electronic_fence_list_names|`string` |查询所有几何模型参数。|

**使用示例：**
实现：查询所有几何模型参数

```json
{"command":"get_electronic_fence_list_infos"}
```

**返回示例：**

```json
{"command":"get_electronic_fence_list_infos","info_list":[{"form":1, "form_name":"my_form"，"x_min_limit":500,"x_max_limit":1000,"y_ min_limit":500,"y_max_limit":1000"z_min_limit":500"z_max_limit":1000},{"form":2,"form_name":"my_form","x1":500,"y1":1000,"z1":500,"x2":900,"y2":200,"z2":800,"x3":700,"y3":1200,"z3":300}]}
```

|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|info_list|object|几何模型信息列表，长度为实际存在几何模型数量
