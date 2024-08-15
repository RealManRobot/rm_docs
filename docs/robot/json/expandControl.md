# <p class="hidden">JSON协议：</p>通用扩展关节配置指令集

## 扩展关节状态获取`expand_get_state`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`expand_get_state`|   `string`   | 扩展关节状态获取。          |

**使用示例：**

实现：扩展关节状态获取。

```json

{"command":"expand_get_state"}

```

**返回示例：**

```json
{
    "state": "expand_state",
    "pos": 0,
    "err_flag": 0,
    "en_flag": 1,
    "current": 0,
    " mode": 0,
    "joint_id": 1
}
```

**参数说明：**
| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`pos`            | `int` |扩展关节角度，单位度，精度 0.001°。 |
|`err_flag`       | `int` |升降驱动错误代码，错误代码类型参考关节错误代码。 |
|`en_flag`       | `int` |扩展关节使能状态。 |
|`current`        | `int` |当前升降驱动电流，单位：mA，精度：1mA。 |
|`mode`           | `int` |当前升降状态，0-空闲，1-正方向速度运动，2-正方向位置运动，3-负方向速度运动，4-负方向位置运动。|
|`joint_id`        | `int` |扩展关节ID。 |

## 扩展关节速度环控制`expand_set_speed`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`expand_set_speed`|   `string`   | 扩展关节速度环控制。         |
|`speed`|   `int`   | 速度百分比。          |

**使用示例：**

实现：以50%的最大速度进行运动。

```json

{"command":"expand_set_speed","speed":-50}

```

**返回示例：**

```json
{
    "command": "expand_set_speed",
    "set_speed_state": true
}
```

**参数说明：**
| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`set_speed_state`            | `bool` |`ture`：设置成功；`false`：设置失败。 |

## 关节位置环控制`expand_set_pos`

**参数说明：**

| 参数                    | 类型 | 说明                            |
|:----------------------|:---|:------------------------------|
|`expand_set_pos`|   `string`   | 扩展关节速度环控制。          |
|`pos`|   `int`   | 位置。          |
|`speed`|   `int`   | 速度百分比。          |

**使用示例：**

实现：以50%的最大速度运动到0.0100°。

```json

{"command":"expand_set_pos","pos":100,"speed":50}

```

**返回示例：**

```json
{
    "command": "expand_set_pos",
    "set_pos_state": true
}
```

**参数说明：**
| 参数                | 类型     | 说明      |
|:------------------|:-------|:----------------------------------------|
|`set_pos_state`            | `bool` |`ture`：设置成功；`false`：设置失败。 |

到位后，会范围到位指令，如下:

```json

{"state": "current_trajectory_state", "device": 4, "trajectory_state": true}

```
