# 运动配置-示教指令类

## 关节示教

**参数说明：**

| 参数                            | 类型 | 说明                                 |
| :------------------------------ | :--- | :----------------------------------- |
| `set_delete_current_trajectory` |   `string`   | 关节示教指令。                           |
| `teach_joint`                   |   `int`   | 关节序号。                           |
| `direction`                     |   `string`   | 方向，“pos”：正方向，“neg”：反方向。 |
| `v`                             |   `int`   | 速度系数                             |

**使用示例：**
实现：关节1示教，正方向，速度50%。

```json
{"command":"set_joint_teach","teach_joint":1,"direction":"pos","v":50}
```

**返回示例：**

```json
{"command":"set_joint_teach","joint_teach":true}
```

**参数说明：**
| 参数          | 类型   | 说明                                  |
| :------------ | :----- | :------------------------------------ |
| `joint_teach` | `bool` | `ture`：设置成功；`false`：设置失败。 |

## 位置示教

**参数说明：**

| 参数            | 类型 | 说明                                 |
| :-------------- | :--- | :----------------------------------- |
| `set_pos_teach` |   `string`   | 位置示教指令。                           |
| `teach_type`    |   `string`   | 坐标轴，“x”，“y”，“z”。              |
| `direction`     |   `string`   | 方向，“pos”：正方向，“neg”：反方向。 |
| `v`             |   `int`   | 速度系数                             |

**使用示例：**
实现：位置示教，x轴负方向，速度50%。

```json
{"command":"set_pos_teach","teach_type":"x","direction":"neg","v":50}
```

**返回示例：**

```json
{"command":"set_pos_teach","pos_teach":true}
```

**参数说明：**
| 参数        | 类型   | 说明                                  |
| :---------- | :----- | :------------------------------------ |
| `pos_teach` | `bool` | `ture`：设置成功；`false`：设置失败。 |

## 姿态示教

**参数说明：**

| 参数            | 类型 | 说明                                 |
| :-------------- | :--- | :----------------------------------- |
| `set_ort_teach` |  `string`    | 姿态示教指令。                           |
| `teach_type`    |   `string`   | 旋转所绕坐标轴，”rx”，“ry”，“rz”。   |
| `direction`     |   `string`   | 方向，“pos”：正方向，“neg”：反方向。 |
| `v`             |  `int`    | 速度系数                             |

**使用示例：**
实现：姿态示教，rx轴负方向，速度50%。

```json
{"command":"set_ort_teach","teach_type":"rx","direction":"neg","v":50}
```

**返回示例：**

```json
{"command":"set_ort_teach","ort_teach":true}
```

**参数说明：**
| 参数        | 类型   | 说明                                  |
| :---------- | :----- | :------------------------------------ |
| `ort_teach` | `bool` | `ture`：设置成功；`false`：设置失败。 |

## 示教停止

**参数说明：**

| 参数             | 类型 | 说明       |
| :--------------- | :--- | :--------- |
| `set_stop_teach` |   `string`   | 示教停止指令。 |

**使用示例：**
实现：示教停止。

```json
{"command":"set_stop_teach"}
```

**返回示例：**

```json
{"command":"set_stop_teach","stop_teach":true}
```

**参数说明：**
| 参数         | 类型   | 说明                                  |
| :----------- | :----- | :------------------------------------ |
| `stop_teach` | `bool` | `ture`：设置成功；`false`：设置失败。 |

## 设置示教参考坐标系

**参数说明：**

| 参数         | 类型 | 说明                               |
| :----------- | :--- | :--------------------------------- |
| `set_teach_frame` |   `string`   | 设置示教参考坐标系指令。 |
| `frame_type` |   `number`   | 0代表工作坐标系，1代表工具坐标系。 |

**使用示例：**
实现：设置示教参考坐标系为工作坐标系。

```json
{"command":"set_teach_frame","frame_type":0}
```

**返回示例：**

```json
{"command":"set_teach_frame","set_state":true}
```

**参数说明：**
| 参数        | 类型   | 说明                                  |
| :---------- | :----- | :------------------------------------ |
| `set_state` | `bool` | `ture`：设置成功；`false`：设置失败。 |

## 获取示教参考坐标系

**参数说明：**

| 参数              | 类型 | 说明                 |
| :---------------- | :--- | :------------------- |
| `get_teach_frame` |   `string`   | 获取示教参考坐标系指令。 |

**使用示例：**
实现：获取示教参考坐标系。

```json
{"command":"get_teach_frame"}
```

**返回示例：**

```json
{"command":"get_teach_frame","frame_type":0}
```

**参数说明：**
| 参数         | 类型     | 说明                               |
| :----------- | :------- | :--------------------------------- |
| `frame_type` | `number` | 0代表工作坐标系，1代表工具坐标系。 |
