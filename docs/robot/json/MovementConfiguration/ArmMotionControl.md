# 运动配置-运动指令类

<div style="height: 2px; background-image: linear-gradient(to right, #ccc, #ccc); margin: 1em 0;"></div>

## 轨迹急停

轨迹急停。

**参数说明：**

| 参数           | 类型 | 说明       |
| :------------- | :--- | :--------- |
| `set_arm_stop` |   `string`   | 姿态步进指令。 |

**使用示例：**
实现：轨迹急停。

```json
{"command":"set_arm_stop"}
```

**返回示例：**

```json
{"command":"set_arm_stop","arm_stop":true}
```

**参数说明：**
| 参数       | 类型   | 说明                                  |
| :--------- | :----- | :------------------------------------ |
| `arm_stop` | `bool` | `ture`：设置成功；`false`：设置失败。 |

## 轨迹缓停

在当前正在运行的轨迹上停止。

**参数说明：**

| 参数                | 类型 | 说明                                   |
| :------------------ | :--- | :------------------------------------- |
| `set_arm_slow_stop` |   `string`   | 轨迹缓停指令。 |

**使用示例：**
实现：轨迹缓停。

```json
{"command":"set_arm_slow_stop"}
```

**返回示例：**

```json
{"command":"set_arm_slow_stop","arm_slow_stop":true}
```

**参数说明：**
| 参数            | 类型   | 说明                                  |
| :-------------- | :----- | :------------------------------------ |
| `arm_slow_stop` | `bool` | `ture`：设置成功；`false`：设置失败。 |

## 轨迹暂停

停在轨迹上，轨迹可恢复。

**参数说明：**

| 参数            | 类型 | 说明                               |
| :-------------- | :--- | :--------------------------------- |
| `set_arm_pause` |   `string`   | 轨迹暂停指令。 |

**使用示例：**
实现：轨迹暂停。

```json
{"command":"set_arm_pause"}
```

**返回示例：**

```json
{"command":"set_arm_pause","arm_pause":true}
```

**参数说明：**
| 参数        | 类型   | 说明                                  |
| :---------- | :----- | :------------------------------------ |
| `arm_pause` | `bool` | `ture`：设置成功；`false`：设置失败。 |

## 轨迹暂停后恢复

**参数说明：**

| 参数               | 类型 | 说明             |
| :----------------- | :--- | :--------------- |
| `set_arm_continue` |   `string`   | 轨迹暂停后恢复指令。 |

**使用示例：**
实现：轨迹暂停后恢复。

```json
{"command":"set_arm_continue"}
```

**返回示例：**

```json
{"command":"set_arm_continue","arm_continue":true}
```

**参数说明：**
| 参数           | 类型   | 说明                                  |
| :------------- | :----- | :------------------------------------ |
| `arm_continue` | `bool` | `ture`：设置成功；`false`：设置失败。 |

## 清除当前轨迹

清除当前轨迹，必须在暂停后使用！

**参数说明：**

| 参数                            | 类型 | 说明           |
| :------------------------------ | :--- | :------------- |
| `set_delete_current_trajectory` |   `string`   | 清除当前轨迹指令。 |

**使用示例：**
实现：清除当前轨迹。

```json
{"command":"set_delete_current_trajectory"}
```

**返回示例：**

```json
{"command":"set_arm_delete_current_trajectory","delete_current_trajectory":true}
```

**参数说明：**
| 参数                        | 类型   | 说明                                  |
| :-------------------------- | :----- | :------------------------------------ |
| `delete_current_trajectory` | `bool` | `ture`：设置成功；`false`：设置失败。 |

## 清除所有轨迹

清除所有轨迹，必须在暂停后使用！

**参数说明：**

| 参数                            | 类型 | 说明           |
| :------------------------------ | :--- | :------------- |
| `set_delete_current_trajectory` |   `string`   | 清除所有轨迹指令。 |

**使用示例：**
实现：清除所有轨迹。

```json
{"command":"set_arm_delete_trajectory"}
```

**返回示例：**

```json
{"command":"set_arm_delete_trajectory","arm_delete_trajectory":true}
```

**参数说明：**
| 参数                    | 类型   | 说明                                  |
| :---------------------- | :----- | :------------------------------------ |
| `arm_delete_trajectory` | `bool` | `ture`：设置成功；`false`：设置失败。 |

## 查询当前规划类型

**参数说明：**

| 参数                         | 类型 | 说明               |
| :--------------------------- | :--- | :----------------- |
| `get_arm_current_trajectory` |   `string`   | 查询当前规划类型指令。 |

**使用示例：**
实现：查询当前规划类型。

```json
{"command":"get_arm_current_trajectory"}
```

**返回示例：**

当前正在运行关节规划，数组内为当前关节角度，精度0.001°

```json
//六自由度：
{"state":"arm_current_trajectory","type":"movj","data":
[0,0,0,0,0,0]}
//七自由度：
{"state":"arm_current_trajectory","type":"movj","data":
[0,0,0,0,0,0,0]}
```

当前正在运行直线规划，数组内为当前末端位姿，位置精度：0.001mm，姿态精度：0.001rad。

```json
{"state":"arm_current_trajectory","type":"movl","data":[0,0,0,0,0,0]}
```

当前正在运行圆弧规划，数组内为当前末端位姿，位置精度：0.001mm，姿态精度：0.001rad。

```json
{"state":"arm_current_trajectory","type":"movc","data":[0,0,0,0,0,0]}
```

当前无规划，数组内为当前关节角度，精度0.001°。

```json
//六自由度：
{"state":"arm_current_trajectory","type":"movj","data":[0,0,0,0,0,0]}
//七自由度：
{"state":"arm_current_trajectory","type":"movj","data":[0,0,0,0,0,0,0]}
```

**参数说明：**

| 参数                     | 类型 | 说明                     |
| :----------------------- | :--- | :----------------------- |
| `arm_current_trajectory` |   `string`   | 返回当前正在运行的轨迹。 |
