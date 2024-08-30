# <p class="hidden">JSON 协议：</p>Modbus 指令集

## Modbus 模式配置

睿尔曼机械臂在控制器的航插和末端接口板航插处，各有1路RS485通讯接口，这两个RS485端口可通过JSON协议配置为标准的ModbusRTU模式。然后通过JSON协议对端口连接的外设进行读写操作。

注意：控制器的RS485接口在未配置为ModbusRTU模式的情况下，可用于用户对机械臂进行控制，这两种模式不可兼容。若要恢复机械臂控制模式，必须将该端口的ModbusRTU模式关闭。ModbusRTU模式关闭后，系统会自动切换回机械臂控制模式，波特率460800BPS，停止位1，数据位8，无检验。

同时，第三代控制器支持ModbusTCP主站配置，可配置使用ModbusTCP主站，用于连接外部设备的ModbusTCP从站。

### 设置RS485`set_RS485`

配置RS485接口波特率，无返回。波特率可选范围：9600，19200，38400，115200和460800，若用户设置其他数据，控制器会默认按照460800处理。该指令下发后，若Modbus模式为打开状态，则会自动关闭，同时控制器会记录当前波特率，断电重启后仍会使用该波特率对外通信。

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `set_RS485` | `string` |配置RS485接口波特率，最高460800。|

- **代码示例**

**输入**  

配置RS485波特率为460800。

```json
{"command":"set_RS485","baudrate":460800}
```

### 查询控制器RS485模式（第三代）`get_controller_RS485_mode`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `get_controller_RS485_mode` | `string` |查询控制器RS485模式。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `controller_RS485_mode` | `int` |0代表默认RS485串行通讯，1代表modbus-RTU主站模式，2-代表modbus-RTU从站模式。|
| `baudrate` | `int` |波特率。|
| `modbus_timeout` | `int` |modbus协议超时时间，单位100ms，仅在modbus-RTU模式下提供此字段。|

- **代码示例**

**输入**  

查询控制器RS485模式。

```json
{"command":"get_controller_RS485_mode"}
```

**输出**  

```json
{
    "command": "get_controller_RS485_mode",
    "controller_RS485_mode": 1,
    "baudrate": 460800,
    "modbus_timeout": 1
}
```

### 查询工具端RS485模式（第三代）`get_tool_RS485_mode`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `get_tool_RS485_mode` | `string` |查询工具端RS485模式。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `tool_RS485_mode` | `int` |0代表默认RS485串行通讯，1代表modbus-RTU主站模式，2-代表modbus-RTU从站模式。|
| `baudrate` | `int` |波特率。|
| `modbus_timeout` | `int` |modbus协议超时时间，单位100ms，仅在modbus-RTU模式下提供此字段。|

- **代码示例**

**输入**  

查询工具端RS485模式。

```json
{"command":"get_tool_RS485_mode"}
```

**输出**  

```json
{
    "command": "get_tool_RS485_mode",
    "tool_RS485_mode": 0,
    "baudrate": 460800,
    "modbus_timeout": 1
}
```

### 配置通讯端口ModbusRTU模式`set_modbus_mode`

配置通讯端口ModbusRTU模式，机械臂启动后，要对通讯端口进行任何操作，必须先启动该指令，否则会返回报错信息。

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `set_modbus_mode` | `string` |配置端口ModbusRTU模式。|
| `port` | `int` |通讯端口，0-控制器RS485端口为RTU主站，1-末端接口板RS485接口为RTU主站，2-控制器RS485端口为RTU从站。|
| `baudrate` | `int` |波特率，支持9600,115200,460800三种常见波特率。|
| `timeout` | `int` |超时时间，单位百毫秒。对Modbus设备所有的读写指令，在规定的超时时间内未返回响应数据，则返回超时报错提醒。超时时间不能为0，若设置为0，则机械臂按1进行配置。|

- **代码示例**

**输入**  

```json
{"command":"set_modbus_mode","port":0,"baudrate":115200,"timeout":1}
```

**输出**
设置成功

```json
{
    "command": "set_modbus_mode",
    "set_state": true
}
```

设置失败

```json
{
    "command": "set_modbus_mode",
    "set_state": false
}
```

### 关闭通讯端口ModbusRTU模式`close_modbus_mode`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `close_modbus_mode` | `string` |关闭端口ModbusRTU模式。|
| `port` | `int` |通讯端口，0-控制器RS485端口为RTU主站，1-末端接口板RS485接口为RTU主站，2-控制器RS485端口为RTU从站。|

- **代码示例**

**输入**  

```json
{"command":"close_modbus_mode","port":0}
```

**输出**
设置成功：

```json
{
    "command": "close_modbus_mode",
    "set_state": true
}
```

设置失败：

```json
{
    "command": "close_modbus_mode",
    "set_state": false
}
```

### 配置连接ModbusTCP从站（第三代控制器）`set_modbustcp_mode`

控制器作为ModbusTCP主站连接外部ModbusTCP从站设备。

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `set_modbustcp_mode` | `string` |连接ModbusTCP从站。|
| `ip` | `string` |从机IP地址。|
| `port` | `int` |通讯端口号。|
| `timeout` | `int` |超时时间，单位：毫秒。|

- **代码示例**

**输入**  

```json
{"command":"set_modbustcp_mode","ip":"192.168.1.120","port":502,"timeout":2000}
```

**输出**
连接成功：

```json
{
    "command": "set_modbustcp_mode",
    "set_state": true
}
```

连接失败：

```json
{
    "command": "set_modbustcp_mode",
    "set_state": false
}
```

### 配置关闭ModbusTCP从站（第三代控制器）`close_modbustcp_mode`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `close_modbustcp_mode` | `string` |断开ModbusTCP从站。|

- **代码示例**

**输入**  

```json
{"command":"close_modbustcp_mode"}
```

**输出**
成功

```json
{
    "command": "close_modbustcp_mode",
    "set_state": true
}
```

失败

```json
{
    "command": "close_modbustcp_mode",
    "set_state": false
}
```

## Modbus 协议指令

### 读线圈`read_coils`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `read_coils` | `string` |读线圈。|
| `port` | `int` |通讯端口，0-控制器RS485端口，1-末端接口板RS485接口，3-控制器ModbusTCP连接外部从站端口。|
| `address` | `int` |线圈起始地址。|
| `num` | `int` |要读的线圈的数量，该指令最多一次性支持读8个线圈数据，即返回的数据不会超过一个字节。|
| `device` | `int` |外设设备地址。|

- **代码示例**

**输入**  

```json
{"command":"read_coils","port":0,"address":10,"num":2,"device":2}
```

**输出**
读取成功，返回线圈状态，数据类型：int8。

```json
{
    "command": "read_coils",
    "data": 8
}
```

读取失败，超时时间内未获取到数据。

```json
{
    "command": "read_coils",
    "read_state": false
}
```

### 读多圈数据`read_multiple_coils`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `read_multiple_coils` | `string` |读多圈数据。|
| `port` | `string` |通讯端口，0-控制器RS485端口，1-末端接口板RS485接口，3-控制器ModbusTCP连接外部从站端口。|
| `address` | `string` |线圈起始地址。|
| `num` | `int` |写线圈个数，每次写的数量不超过160个。|
| `data` | `int` |要写入线圈的数据，数据类型：int16。|

- **代码示例**

**输入**  

```json
{"command":"read_multiple_coils","port":0,"address":0,"num":24,"device":2}
```

**输出**
读取成功，返回线圈状态，数据类型：int8。

```json
{
    "command": "read_multiple_coils",
    "data": [
        1,
        2,
        3
    ]
}
```

读取失败，超时时间内未获取到数据。

```json
{
    "command": "read_multiple_coils",
    "read_state": false
}
```

### 写单圈数据`write_single_coil`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `write_single_coil` | `string` |写单圈数据。|
| `port` | `int` |通讯端口，0-控制器RS485端口，1-末端接口板RS485接口，3-控制器ModbusTCP连接外部从站端口。|
| `address` | `int` |线圈起始地址。|
| `data` | `int` |要写入线圈的数据，数据类型：int16。|
| `device` | `int` |外设设备地址。|

- **代码示例**

**输入**  

```json
{"command":"write_single_coil","port":0,"address":10,"data":1,"device":2}
```

**输出**  

写操作成功。

```json
{
    "command": "write_single_coil",
    "write_state": true
}
```

写操作失败，超时时间内未获取到数据，或者指令内容错误。

```json
{
    "command": "write_single_coil",
    "write_state": false
}
```

### 写多圈数据`write_coils`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `write_coils` | `string` |写多圈数据。|
| `port` | `string` |通讯端口，0-控制器RS485端口，1-末端接口板RS485接口，3-控制器ModbusTCP连接外部从站端口。|
| `address` | `string` |线圈起始地址。|
| `num` | `int` |写寄存器个数，寄存器每次写的数量不超过10个。|
| `data` | `int` |要写入线圈的数据，数据类型：int16。|
| `device` | `int` |外设设备地址。|

- **代码示例**

**输入**  

```json
{"command":"write_coils","port":0,"address":10,"num":16,"data":[15,20],"device":2}
```

**输出**
写操作成功。

```json
{
    "command": "write_coils",
    "write_state": true
}
```

写操作失败，超时时间内未获取到数据，或者指令内容错误。

```json
{
    "command": "write_coils",
    "write_state": false
}
```

### 读离散量输入`read_input_status`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `read_input_status` | `string` |读离散量输入。|
| `port` | `int` |通讯端口，0-控制器RS485端口，1-末端接口板RS485接口，3-控制器ModbusTCP连接外部从站端口。|
| `address` | `int` |线圈起始地址。|
| `num` | `int` |要读的线圈的数量，该指令最多一次性支持读8个线圈数据，即返回的数据不会超过一个字节。|
| `device` | `int` |外设设备地址。|

- **代码示例**

**输入**  

```json
{
    "command": "read_input_status",
    "port": 0,
    "address": 10,
    "num": 2,
    "device": 2
}
```

**输出**
读取成功，返回离散量，数据类型：int8。

```json
{
    "command": "read_input_status",
    "data": 8
}
```

读取失败，超时时间内未获取到数据。

```json
{
    "command": "read_input_status",
    "read_state": false
}
```

### 读保持寄存器`read_holding_registers`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `read_holding_registers` | `string` |读保存寄存器。|
| `port` | `int` |通讯端口，0-控制器RS485端口，1-末端接口板RS485接口，3-控制器ModbusTCP连接外部从站端口。|
| `address` | `int` |线圈起始地址。|
| `device` | `int` |外设设备地址。|

- **代码示例**

**输入**  

```json
{"command":"read_holding_registers","port":0,"address":10,"device":2}
```

**输出**
读取成功，返回寄存器数据，数据类型：int16。

```json
{
    "command": "read_holding_registers",
    "data": 16
}
```

读取失败，超时时间内未获取到数据。

```json
{
    "command": "read_holding_registers",
    "read_state": false
}
```

### 写单个寄存器`write_single_register`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `write_single_register` | `string` |写单个寄存器。|
| `port` | `int` |通讯端口，0-控制器RS485端口，1-末端接口板RS485接口，3-控制器ModbusTCP连接外部从站端口。|
| `address` | `int` |线圈起始地址。|
| `data` | `int` |要写入线圈的数据，数据类型：int16。|
| `device` | `int` |外设设备地址。|

- **代码示例**

**输入**  

```json
{"command":"write_single_register","port":0,"address":10,"data":1000,"device":2}
```

**输出**
写操作成功。

```json
{
    "command": "write_single_register",
    "write_state": true
}
```

写操作失败，超时时间内未获取到数据，或者指令内容错误。

```json
{
    "command": "write_single_register",
    "write_state": false
}
```

### 写多个寄存器`write_registers`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `write_registers` | `string` |写多个寄存器。|
| `port` | `string` |通讯端口，0-控制器RS485端口，1-末端接口板RS485接口，3-控制器ModbusTCP连接外部从站端口。|
| `address` | `string` |线圈起始地址。|
| `num` | `int` |写寄存器个数，寄存器每次写的数量不超过10个。|
| `data` | `int` |要写入线圈的数据，数据类型：int16。|
| `device` | `int` |外设设备地址。|

- **代码示例**

**输入**

```json
{"command":"write_registers","port":0,"address":10,"num":2,"data":[15,20,25,30],"device":2}
```

**输出**
写操作成功。

```json
{
    "command": "write_registers",
    "write_state": true
}
```

写操作失败，超时时间内未获取到数据，或者指令内容错误。

```json
{
    "command": "write_registers",
    "write_state": false
}
```

### 读多个保存寄存器`read_multiple_holding_registers`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `read_multiple_holding_registers` | `string` |读多个保持寄存器。|
| `port` | `string` |通讯端口，0-控制器RS485端口，1-末端接口板RS485接口，3-控制器ModbusTCP连接外部从站端口。|
| `address` | `string` |线圈起始地址。|
| `num` | `int` |8< num <= 120 要读的线圈的数量，该指令最多一次性支持读 120 个线圈数据， 即15个byte。|
| `device` | `int` |外设设备地址。|

- **代码示例**

**输入**  

```json
{"command":"read_multiple_holding_registers","port":0,"address":0,"num":5,"device":2}
```

**输出**
读取成功，返回寄存器数据，数据类型：int8。

```json
{
    "command": "read_multiple_holding_registers",
    "data": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
    ]
}
```

读取失败，超时时间内未获取到数据。

```json
{
    "command": "read_multiple_holding_registers",
    "read_state": false
}
```

### 读输入寄存器`read_input_registers`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `read_input_registers` | `string` |读输入寄存器。|
| `port` | `int` |通讯端口，0-控制器RS485端口，1-末端接口板RS485接口，3-控制器ModbusTCP连接外部从站端口。|
| `address` | `int` |线圈起始地址。|
| `device` | `int` |外设设备地址。|

- **代码示例**

**输入**  

```json
{"command":"read_input_registers","port":0,"address":10,"device":2}
```

**输出**
读取成功，返回寄存器数据，数据类型：int16。

```json
{
    "command": "read_input_registers",
    "data": 8
}
```

读取失败，超时时间内未获取到数据。

```json
{
    "command": "read_input_registers",
    "read_state": false
}
```

### 读多个输入寄存器`read_multiple_input_registers`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `read_multiple_input_registers` | `string` |读多个输入寄存器。|
| `port` | `string` |通讯端口，0-控制器RS485端口，1-末端接口板RS485接口，3-控制器ModbusTCP连接外部从站端口。|
| `address` | `string` |线圈起始地址。|
| `num` | `int` |2 < num < 13 要读的寄存器的数量，该指令最多一次性支持读12个寄存器数据， 即24个byte。|
| `device` | `int` |外设设备地址。|

- **代码示例**

**输入**  

```json
{"command":"read_multiple_input_registers","port":0,"address":0,"num":5,"device":2}
```

**输出**
读取成功，返回寄存器数据，数据类型：int8。

```json
{
    "command": "read_multiple_input_registers",
    "data": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
    ]
}
```

读取失败，超时时间内未获取到数据。

```json
{
    "command": "read_multiple_input_registers",
    "read_state": false
}
```
