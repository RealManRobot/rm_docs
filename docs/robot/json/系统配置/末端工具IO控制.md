
## 4.7末端工具IO控制

机械臂末端工具端具有IO端口，数量和分类如下所示：

| 电源输出 | 1路，可配置为0V/5V/12V/24V |
| :--- | :------------------- |
| 数字IO | 2路，输入输出可配置           |
| 通讯接口 | 1路，可配置为RS485         |

### （1）设置工具端数字IO输出状态

| 功能描述 | 设置工具端数字IO输出                  |
| :--- | :--------------------------- |
| 参数说明 | `set_tool_DO_state`：设置数字IO输出 |
| 命令格式 | {s\:s,s\:i,s\:i}             |

**使用示例：**
说明：设置工具端数字IO输出

```json
{"command":"set_tool_DO_state","IO_Num":1,"state":1}
```

**返回示例：**

```json
{"command":"set_tool_DO_state","set_state":true}配置成功
{"command":"set_tool_DO_state","set_state":false}配置失败
```

### （2）设置工具端数字IO模式

| 功能描述 | 设置数字IO模式                    |
| :--- | :-------------------------- |
| 参数说明 | `set_tool_IO_mode`：设置数字IO模式 |
| 命令格式 | {s\:s,s\:i,s\:i}            |

**使用示例：**
说明：设置数字IO模式

```json
{"command":"set_tool_IO_mode","IO_Num":1,"state":0} 
```

**返回示例：**

```json
{"command":"set_tool_IO_mode","set_state":true}配置成功
{"command":"set_tool_IO_mode","set_state":false}配置失败
```

### （3）获取工具端数字IO状态

| 功能描述 | 获取数字IO状态                     |
| :--- | :--------------------------- |
| 参数说明 | `get_tool_IO_state`：获取数字IO状态 |
| 命令格式 | {s\:s}                       |

**使用示例：**
说明：获取数字IO状态

```json
{"command":"get_tool_IO_state"} 
```

**返回示例：**

```json
{"state":"tool_IO_state","IO_Mode":[0,1],"IO_State":[0,1]}
说明：“IO_Mode”：0-输入模式，1-输出模式
“IO_State”：0-低，1-高
```

### （4）设置工具端电源输出

| 功能描述 | 设置电源输出                    |
| :--- | :------------------------ |
| 参数说明 | `set_tool_voltage`：设置电源输出 |
| 命令格式 | {s\:s,s\:i}               |

**使用示例：**
说明：设置电源输出

```json
{"command":"set_tool_voltage","voltage_type":1}
```

**返回示例：**

```json
{"command":"set_tool_voltage","state":true} 配置成功
{"command":"set_tool_voltage","state":false} 配置失败
```

### （5）获取工具端电源输出

| 功能描述 | 获取电源输出类型                  |
| :--- | :------------------------ |
| 参数说明 | `get_tool_voltage`：获取电源输出 |

**使用示例：**
说明：获取电源输出类型

```json
{"command":"get_tool_voltage"} 
```

**返回示例：**

```json
{"state":"tool_voltage_state",“voltage_type”：1}
“voltage_type”：电源输出类型，范围：0~3
0-0V，1-5V，2-12V，3-24V
```
