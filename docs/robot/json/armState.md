
# 机械臂状态信息查询指令集

## 查询机械臂关节角度`get_joint_degree`

**参数说明：**
| 参数            | 类型 | 说明                     |
| :-------------- | :--- | :----------------------- |
| `get_joint_degree` |   `string`   | 获取机械臂角度信息。           |

**使用示例：**
说明：查询机械臂关节角度

```json
 {"command":"get_joint_degree"}
```

**返回示例：**
说明：反馈机械臂关节角度。
六自由度

```json
{"state":"joint_degree","joint":[10,20,30,40,50,60]}  
```

七自由度

```json
{"state":"joint_degree","joint":[10,20,30,40,50,60,70]}
```

**参数说明：**
| 参数            | 类型 | 说明                     |
| :-------------- | :--- | :----------------------- |
| `joint_degree` |   `int`   | 机械臂关节角度。           |

## 一次性查询机械臂所有状态信息`get_arm_all_state`

**参数说明：**
| 参数            | 类型 | 说明                     |
| :-------------- | :--- | :----------------------- |
| `get_arm_all_state` |   `string`   | 获取机械臂所有信息。           |

**使用示例：**
说明：一次性查询机械臂所有信息。

```json
{"command":"get_arm_all_state"}
```

**返回示例：**
说明：反馈机械臂所有信息。

```json
{"command":"get_arm_all_state"}
```

**参数说明：**
| 参数            | 类型 | 说明                     |
| :-------------- | :--- | :----------------------- |
| `all_state` |   `string`   | 机械臂所有信息。           |

## （5）查询规划计数`get_arm_plan_num`

**参数说明：**
| 参数            | 类型 | 说明                     |
| :-------------- | :--- | :----------------------- |
| `get_arm_plan_num` |   `string`   | 获取机械臂轨迹规划计数。           |

**使用示例：**
说明：反馈机械臂所有信息。

```json
{"command":"get_arm_plan_num"}
```

**返回示例：**
说明：反馈机械臂轨迹规划计数。

```json
{"loop_cont":[],"loop_num":[],"plan_num":3,"state":"arm_plan_num"}
```

**参数说明：**
| 参数            | 类型 | 说明                     |
| :-------------- | :--- | :----------------------- |
| `plan_num` |   `int`   | 机械臂轨迹规计数。           |

## 查询控制器RS485模式（第三代）`get_controller_RS485_mode`

**参数说明：**
| 参数            | 类型 | 说明                     |
| :-------------- | :--- | :----------------------- |
| `get_controller_RS485_mode` |   `string`   | 查询控制器RS485模式。           |

**使用示例：**
说明：查询控制器RS485模式。

```json
{"command":"get_controller_RS485_mode"}
```

**返回示例：**

```json
{"command":"get_controller_RS485_mode","controller_RS485_mode":1,"baudrate":460800,"modbus_timeout":1}
```

## 查询工具端RS485模式（第三代）`get_tool_RS485_mode`

**参数说明：**
| 参数            | 类型 | 说明                     |
| :-------------- | :--- | :----------------------- |
| `get_tool_RS485_mode` |   `string`   | 查询工具端RS485模式。           |

**使用示例：**
说明：查询工具端RS485模式。

```json
{"command":"get_tool_RS485_mode"}
```

**返回示例：**

```json
{"command":"get_tool_RS485_mode","tool_RS485_mode":0,"baudrate":460800,"modbus_timeout":1}
```
