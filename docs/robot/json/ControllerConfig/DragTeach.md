
## 4.11拖动示教

睿尔曼机械臂在拖动示教过程中，可记录拖动的轨迹点，并根据用户的指令对轨迹进行复现。

### （1）拖动示教开始

| 功能描述 | 拖动示教开始                     |
| :--- | :------------------------- |
| 参数说明 | `start_drag_teach`：拖动示教开始， |
| 命令格式 | {s\:s,s\:i}                |

**使用示例：**
说明：

```json
{"command":"start_drag_teach","trajectory_record":1}
```

**返回示例：**

```json
{"command":"start_drag_teach","drag_teach":true}
```

### （2）拖动示教结束

| 功能描述 | 拖动示教结束                   |
| :--- | :----------------------- |
| 参数说明 | `stop_drag_teach`：拖动示教结束 |
| 命令格式 | {s\:s}                   |

```json
{"command":"stop_drag_teach"}
```

**返回示例：**

```json
{"command":"stop_drag_teach","drag_teach":true}
```

### （3）开始复合模式拖动示教

| 功能描述 | 开始复合模式拖动示教                          |
| :--- | :---------------------------------- |
| 参数说明 | `start_multi_drag_teach`：开始复合模式拖动示教 |
| 命令格式 | {s\:s,s\:i,s\:i}                    |

**使用示例：**
说明：

```json
{"command":"start_multi_drag_teach","mode":0,"singular_wall":0}
```

**返回示例：**

```json
{"command":"start_multi_drag_teach","set_state":true}设置成功
{"command":"start_multi_drag_teach","set_state":false}设置失败
```

### （4）轨迹复现开始

| 功能描述 | 复现拖动示教中的轨迹：                  |
| :--- | :--------------------------- |
| 参数说明 | `run_drag_trajectory`：轨迹复现开始 |
| 命令格式 | {s\:s}                       |

**使用示例：**
说明：

```json
{"command":"run_drag_trajectory"}
```

**返回示例：**

```json
{"command":"run_drag_trajectory","run_state":true}复现成功
{"command":"run_drag_trajectory","run_state":false}复现失败
```

### （5）轨迹复现暂停

| 功能描述 | 轨迹复现过程中暂停                      |
| :--- | :----------------------------- |
| 参数说明 | `pause_drag_trajectory`：轨迹复现暂停 |
| 命令格式 | {s\:s}                         |

**使用示例：**
说明：

```json
{"command":"pause_drag_trajectory"}
```

**返回示例：**

```json
{"command":"pause_drag_trajectory","pause_state":true}暂停成功
{"command":"pasuse_drag_trajectory","pause_state":false}暂停失败
```

### （6）轨迹复现继续

| 功能描述 | 轨迹复现过程中暂停后继续                      |
| :--- | :-------------------------------- |
| 参数说明 | `continue_drag_trajectory`：轨迹复现继续 |
| 命令格式 | {s\:s}                            |

**使用示例：**
说明：

```json
{"command":"continue_drag_trajectory"}
```

**返回示例：**

```json
{"command":"continue_drag_trajectory","continue_state":true}继续成功
{"command":"continue_drag_trajectory","continue_state":false}继续失败
```

### （7）轨迹复现停止

| 功能描述 | 轨迹复现停止                        |
| :--- | :---------------------------- |
| 参数说明 | `stop_drag_trajectory`：轨迹复现继续 |
| 命令格式 | {s\:s}                        |

**使用示例：**
说明：

```json
{"command":"stop_drag_trajectory"}
```

**返回示例：**

```json
{"command":"stop_drag_trajectory","stop_state":true}停止成功
{"command":"stop_drag_trajectory","stop_state":false}停止失败
```

### （8）运动到轨迹起点

| 功能描述 | 轨迹复现前，必须控制机械臂运动到轨迹起点，如果设置正确，机械臂将以20%的速度运动到轨迹起点 |
| :--- | :--------------------------------------------- |
| 参数说明 | `drag_trajectory_origin`：轨迹复现起点                |
| 命令格式 | {s\:s}                                         |

**使用示例：**
说明：

```json
{"command":"drag_trajectory_origin"}
```

**返回示例：**

```json
```

### （9）力位混合控制

| 功能描述 | 在笛卡尔空间轨迹规划时，使用该功能可保证机械臂末端接触力恒定，使用时力的方向与机械臂运动方向不能在同一方向。开启力位混合控制，执行笛卡尔空间运动，接收到运动完成反馈后，需要等待2S后继续下发下一条运动指令。 |
| :--- | :------------------------------------------------------------------------------------------------------ |
| 参数说明 | `set_force_position`：设置力位混合控制模式                                                                         |
| 命令格式 | {s\:s,s\:i,s\:i,s\:i,s\:i}                                                                              |

**使用示例：**
说明：

```json
{"command":"set_force_position","sensor":1,"mode":0,"direction":2,"N":10}
```

**返回示例：**

```json
{"command":"set_force_position","set_state":true}设置成功
{"command":"set_force_position","set_state":false}设置失败
```

### （10）结束力位混合控制

| 功能描述 | 退出力位混合控制模式                       |
| :--- | :------------------------------- |
| 参数说明 | `stop_force_position`：结束力位混合控制模式 |
| 命令格式 | {s\:s}                           |

**使用示例：**
说明：

```json
{"command":"stop_force_position"}
```

**返回示例：**

```json
{"command":"stop_force_position","stop_state":true}结束成功
{"command":"stop_force_position","stop_state":false}结束失败
```
