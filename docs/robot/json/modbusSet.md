# Modbus配置

睿尔曼机械臂在控制器的航插和末端接口板航插处，各有1路RS485通讯接口，这两个RS485端口可通过JSON协议配置为标准的ModbusRTU模式。然后通过JOSN协议对端口连接的外设进行读写操作。

注意：控制器的RS485接口在未配置为ModbusRTU模式的情况下，可用于用户对机械臂进行控制，这两种模式不可兼容。若要恢复机械臂控制模式，必须将该端口的ModbusRTU模式关闭。ModbusRTU模式关闭后，系统会自动切换回机械臂控制模式，波特率460800BPS，停止位1，数据位8，无检验。

同时，I系列控制器支持ModbusTCP主站配置，可配置使用ModbusTCP主站，用于连接外部设备的ModbusTCP从站。

## （1）配置通讯端口ModbusRTU模式

| 功能描述 | 配置通讯端口ModbusRTU模式，机械臂启动后，要对通讯端口进行任何操作，必须先启动该指令，否则会返回报错信息。 |
| :--- | :-------------------------------------------------------- |
| 参数说明 | `set_modbus_mode`：配置端口ModbusRTU模式                         |
| 命令格式 | {s\:s,s\:i,s\:i,s\:i}                                     |

**使用示例：**
说明：

```json
{"command":"set_modbus_mode","port":0,"baudrate":115200,"timeout":1}
```

**返回示例：**

```json
{"command":"set_modbus_mode","set_state":true}设置成功
{"command":"set_modbus_mode","set_state":false}设置失败
```

## （2）关闭通讯端口ModbusRTU模式

| 功能描述 | 关闭通讯端口ModbusRTU模式                   |
| :--- | :---------------------------------- |
| 参数说明 | `close_modbus_mode`：关闭端口ModbusRTU模式 |
| 命令格式 | {s\:s}                              |

**使用示例：**
说明：

```json
{"command":"close_modbus_mode","port":0}
```

**返回示例：**

```json
{"command":"close_modbus_mode","set_state":true}设置成功
{"command":"close_modbus_mode","set_state":false}设置失败
```

## （3）配置连接ModbusTCP从站（I系列）

| 功能描述 | 控制器作为ModbusTCP主站连接外部ModbusTCP从站设备  |
| :--- | :--------------------------------- |
| 参数说明 | `set_modbustcp_mode`：连接ModbusTCP从站 |
| 命令格式 | {s\:s,s\:s,s\:i,s\:i}              |

**使用示例：**
说明：

```json
{"command":"set_modbustcp_mode","ip":"192.168.1.120","port":502,"timeout":2000}
```

**返回示例：**

```json
{"command":"set_modbustcp_mode","set_state":true} //连接成功
{"command":"set_modbustcp_mode","set_state":false} //连接失败
```

## （4）配置关闭ModbusTCP从站（I系列）

| 功能描述 | 断开控制器连接的ModbusTCP从站设备                |
| :--- | :----------------------------------- |
| 参数说明 | close\_modbustcp\_mode：断开ModbusTCP从站 |
| 命令格式 | {s\:s}                               |

**使用示例：**
说明：

```json
{"command":"close_modbustcp_mode"}
```

**返回示例：**

```json
{"command":"close_modbustcp_mode","set_state":true} //成功
{"command":"close_modbustcp_mode","set_state":false} //失败
```

## （5）读线圈

| 功能描述 | 读线圈                        |
| :--- | :------------------------- |
| 参数说明 | `read_coils`：读线圈           |
| 命令格式 | {s\:s,s\:i,s\:i,s\:i,s\:i} |

**使用示例：**
说明：

```json
{"command":"read_coils","port":0,"address":10,"num":2,"device":2}
```

**返回示例：**

```json
{"command":"read_coils","data":8}读取成功，返回线圈状态，数据类型：int8
{"command":"read_coils","read_state":false}读取失败，超时时间内未获取到数据
```

## （6）读离散量输入

| 功能描述 | 读离散量输入                     |
| :--- | :------------------------- |
| 参数说明 | `read_input_status`：读离散量输入 |
| 命令格式 | {s\:s,s\:i,s\:i,s\:i,s\:i} |

**使用示例：**
说明：

```json
{"command":"read_input_status","port":0,"address":10,"num":2,"device":2}
```

**返回示例：**

```json
{"command":"read_input_status","data":8}读取成功，返回离散量，数据类型：int8
{"command":"read_input_status","read_state":false}读取失败，超时时间内未获取到数据
```

## （7）读保持寄存器

| 功能描述 | 读保持寄存器                                                                  |
| :--- | :---------------------------------------------------------------------- |
| 参数说明 | `read_holding_registers`：读保存寄存器                                         |
| 命令格式 | {s\:s,s\:i,s\:i,s\:i}                                                   |
| 示例   | {"command":"read\_holding\_registers","port":0,"address":10,"device":2} |

**使用示例：**
说明：

```json
{"command":"read_holding_registers","port":0,"address":10,"device":2}
```

**返回示例：**

```json
{"command":"read_holding_registers","data":8}读取成功，返回寄存器数据，数据类型：int16
{"command":"read_holding_registers","read_state":false}读取失败，超时时间内未获取到数据
```

## （8）读输入寄存器

| 功能描述 | 读输入寄存器                        |
| :--- | :---------------------------- |
| 参数说明 | `read_input_registers`：读输入寄存器 |
| 命令格式 | {s\:s,s\:i,s\:i,s\:i}         |

**使用示例：**
说明：

```json
{"command":"read_input_registers","port":0,"address":10,"device":2}
```

**返回示例：**

```json
{"command":"read_input_registers","data":8}读取成功，返回寄存器数据，数据类型：int16
{"command":"read_input_registers","read_state":false}读取失败，超时时间内未获取到数据
```

## （9）写单圈数据

| 功能描述 | 写单圈数据                      |
| :--- | :------------------------- |
| 参数说明 | `write_single_coil`：写单圈数据  |
| 命令格式 | {s\:s,s\:i,s\:i,s\:i,s\:i} |

**使用示例：**
说明：

```json
{"command":"write_single_coil","port":0,"address":10,"data":1,"device":2}
```

**返回示例：**

```json
{"command":"write_single_coil","write_state":true}写操作成功
{"command":"write_single_coil","write_state":false}写操作失败，超时时间内未获取到数据，或者指令内容错误
```

## （10）写单个寄存器

| 功能描述 | 写单个寄存器数据                       |
| :--- | :----------------------------- |
| 参数说明 | `write_single_register`：写单个寄存器 |
| 命令格式 | {s\:s,s\:i,s\:i,s\:i,s\:i}     |

**使用示例：**
说明：

```json
{"command":"write_single_register","port":0,"address":10,"data":1000,"device":2}
```

**返回示例：**

```json
{"command":"write_single_register","write_state":true}写操作成功
{"command":"write_single_register","write_state":false}写操作失败，超时时间内未获取到数据，或者指令内容错误
```

## （11）写多个寄存器

| 功能描述 | 写多个寄存器数据                              |
| :--- | :------------------------------------ |
| 参数说明 | `write_registers`：写多个寄存器              |
| 命令格式 | {s\:s,s\:i,s\:i,s\:i,s:\[i,i…],s\:i } |

**使用示例：**
说明：

```json
{"command":"write_registers","port":0,"address":10,"num":2,"data":[15, 20, 25, 30],"device":2}
```

**返回示例：**

```json
{"command":"write_registers","write_state":true}写操作成功
{"command":"write_registers","write_state":false}写操作失败，超时时间内未获取到数据，或者指令内容错误
```

## （12）写多圈数据

| 功能描述 | 写多圈数据                                  |
| :--- | :------------------------------------- |
| 参数说明 | `write_coils`：写多圈数据                    |
| 命令格式 | {s\:s,s\:i,s\:i,s\:i,s:\[i,i…] ,s\:i } |

**使用示例：**
说明：

```json
{"command":"write_coils","port":0,"address":10,"num":16,"data":[15, 20],"device":2}
```

**返回示例：**

```json
{"command":"write_coils","write_state":true}写操作成功
{"command":"write_coils","write_state":false}写操作失败，超时时间内未获取到数据，或者指令内容错误
```

## （13）读多圈数据

| 功能描述 | 读多圈数据                       |
| :--- | :-------------------------- |
| 参数说明 | `read_multiple_coils`：读多圈数据 |
| 命令格式 | {s\:s,s\:i,s\:i,s\:i,s\:i}  |

**使用示例：**
说明：

```json
{"command":"read_multiple_coils","port":0,"address":0,"num":24,"device":2}
```

**返回示例：**

```json
{"command":"read_multiple_coils","data":[1,2,3]}读取成功，返回线圈状态，数据类型： int8 
{"command":"read_multiple_coils","read_state":false}读取失败，超时时间内未获取到数据
```

## （14）读多个保存寄存器

| 功能描述 | 读多个保持寄存器                                   |
| :--- | :----------------------------------------- |
| 参数说明 | `read_multiple_holding_registers`：读多个保持寄存器 |
| 命令格式 | {s\:s,s\:i,s\:i,s\:i,s\:i}                 |

**使用示例：**
说明：

```json
{"command":"read_multiple_holding_registers","port":0,"address":0,"num":5,"device":2}
```

**返回示例：**

```json
{"command":"read_multiple_holding_registers","data":[1,2,3,4,5,6,7,8,9,10]}读取成功，返回寄存器数据，数据类型：int8 
{"command":"read_multiple_holding_registers","read_state":false}读取失败，超时时间内未获取到数据
```

## （15）读多个输入寄存器

| 功能描述 | 读多个输入寄存器                                 |
| :--- | :--------------------------------------- |
| 参数说明 | `read_multiple_input_registers`：读多个输入寄存器 |
| 命令格式 | {s\:s,s\:i,s\:i,s\:i,s\:i}               |

**使用示例：**
说明：

```json
{"command":"read_multiple_input_registers","port":0,"address":0,"num":5,"device":2}
```

**返回示例：**

```json
{"command":"read_multiple_input_registers","data":[1,2,3,4,5,6,7,8,9,10]}读取成功，返回寄存器数据，数据类型：int8 
{"command":"read_multiple_input_registers","read_state":false}读取失败，超时时间内未获取到数据
```
