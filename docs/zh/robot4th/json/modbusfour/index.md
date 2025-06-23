# <p class="hidden">JSON 协议：</p>Modbus 指令集

## Modbus 模式配置

睿尔曼机械臂在控制器的航插和末端接口板航插处，各有1路RS485通讯接口，这两个RS485端口可通过JSON协议配置为标准的ModbusRTU或ModbusTCP模式。然后通过JSON协议对端口连接的外设进行读写操作。

- Modbus支持切换RTU或TCP模式，请根据需要进行配置。
- 支持添加多个ModbusTCP主站配置。

### 新增Modbus TCP主站`add_modbus_tcp_master`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `add_modbus_tcp_master` | `string` |新增modbus TCP主站配置。|
| `master_name` | `string` |tcp主站的名称。|
| `ip` | `int` |tcp主站IP。|
| `port` | `int` |tcp主站端口。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `add_state` | `bool` |`true`：添加成功，`false`：添加失败。|

- **代码示例**

**输入**  

新增主站IP：127.0.0.1，端口：502，名称：123。

```json
{"command":"add_modbus_tcp_master","master_name":"123","ip":"127.0.0.1","port":502}
```

**输出**  

添加成功：

```json
{
    "command":"add_modbus_tcp_master",
    "add_state":true
}
```

添加失败：

```json
{
    "command":"add_modbus_tcp_master",
    "add_state":false
}
```

### 更新Modbus TCP主站`update_modbus_tcp_master`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `add_modbus_tcp_master` | `string` |新增modbus TCP主站配置。|
| `master_name` | `string` |tcp主站的名称。|
| `new_name` | `string` |要修改的名称。|
| `ip` | `int` |要修改的IP。|
| `port` | `int` |要修改的端口。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `update_state` | `bool` |`true`：更新成功，`false`：更新失败。|

- **代码示例**

**输入**  

更新主站名称为：321。

```json
{"command":"update_modbus_tcp_master","master_name":"123","new_name":"321","ip":"127.0.0.1","port":502}
```

**输出**  

更新成功：

```json
{
    "command":"update_modbus_tcp_master",
    "update_state":true
}
```

更新失败：

```json
{
    "command":"update_modbus_tcp_master",
    "update_state":false
}
```

### 删除Modbus TCP主站`delete_modbus_tcp_master`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `delete_modbus_tcp_master` | `string` |删除指定TCP主站。|
| `master_name` | `string` |删除TCP主站的名称。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `delete_state` | `bool` |`true`：删除成功，`false`：删除失败。|

- **代码示例**

**输入**  

删除主站名称为123的TCP主站。

```json
{"command":"delete_modbus_tcp_master","master_name":"123"}
```

**输出**  

删除成功：

```json
{
    "command": "delete_modbus_tcp_master",
    "delete_state": true
}
```

删除失败：

```json
{
    "command": "delete_modbus_tcp_master",
    "delete_state": false
}
```

### 查询modbus主站列表`get_modbus_tcp_master_list`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `get_modbus_tcp_master_list` | `string` |查询TCP主站列表。|
| `page_num` | `int` |页码（全部查询时不传此参数）。|
| `page_size` | `int` |每页大小（全部查询时不传此参数）。|
| `vague_search` | `string` |模糊搜索（传递此参数可进行模糊查询）。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `get_modbus_tcp_master_list` | `string` |查询TCP主站列表。|
| `total_size` | `int` |列表总数。|
| `list` | `object` |TCP主站详细信息。|

- **代码示例**

**输入**  

查询当前保存的modbus主站列表，页码：1，每页大小：10，模糊搜索包含字符“1”的所有主站列表。

```json
{"command":"get_modbus_tcp_master_list","page_num":1,"page_size":10,"vague_search":"1"}
```

**输出**  

查询成功输出结果：

```json
{
    "command":"get_modbus_tcp_master_list",
    "total_size":2,
    "list":[
        {
            "master_name":"123",
            "ip":"192.168.1.18",
            "port":502
        },
        {
            "master_name":"321",
            "ip":"192.168.1.19",
            "port":502
        }
    ]
} 
```

查询失败：

```json
 {
    "command":"get_modbus_tcp_master_list",
    "get_state":false
}
```

### 查询指定modbus主站`given_modbus_tcp_master`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `given_modbus_tcp_master` | `string` |查询指定TCP主站。|
| `master_name` | `string` |TCP主站名称。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `master_name` | `string` |TCP主站的名称。|
| `ip` | `string` |TCP主站IP。|
| `port` | `int` |TCP主站端口。|

- **代码示例**

**输入**  

查询名称为123的TCP主站。

```json
{"command":"given_modbus_tcp_master","master_name":"123"}
```

**输出**  

查询成功：

```json
{
    "command":"given_modbus_tcp_master",
    "master_name":"123",
    "ip":"192.168.1.18",
    "port":502
}
```

查询失败：

```json
{
    "command":"given_modbus_tcp_master",
    "given_state":false
} 
```

## Modbus状态

### 查询控制器RS485模式`get_controller_rs485_mode`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `get_controller_rs485_mode` | `string` |查询控制器RS485模式。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `get_controller_rs485_mode` | `string` |查询控制器RS485模式。|
| `controller_rs485_mode` | `int` |0代表默认RS485串行通讯，1代表modbus-RTU主站模式，2-代表modbus-RTU从站模式。|
| `baudrate` | `int` |波特率。(当前支持9600、19200、38400、57600、115200、230400、460800)|

- **代码示例**

查询控制器RS485模式。

**输入**  

```json
{ "command": "get_controller_rs485_mode" }
```

**输出**  <br>

反馈控制器RS485模式，信息如下：

- 当前控制器RS485模式：1；
- 当前控制器RS485波特率为：460800。

```json
{
    "command": "get_controller_rs485_mode",
    "controller_rs485_mode": 1,
    "baudrate": 460800
}
```

### 查询工具端RS485模式`get_tool_rs485_mode`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `get_tool_rs485_mode` | `string` |查询工具端RS485模式。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `get_tool_rs485_mode` | `string` |反馈工具端RS485模式。|
| `tool_rs485_mode` | `int` |0-代表modbus-RTU主站模式，1-代表灵巧手模式，2-代表夹爪模式。|
| `baudrate` | `int` |波特率。(当前支持9600、115200、460800)|

- **代码示例**

**输入**  

查询工具端RS485模式。

```json
{ "command": "get_tool_rs485_mode" }
```

**输出**  <br>

反馈工具端RS485模式，信息如下：

- 当前工具端RS485模式：1；
- 当前工具端RS485波特率为：460800

```json
{
  "command": "get_tool_rs485_mode",
  "tool_rs485_mode": 1,
  "baudrate": 460800
}
```

### 配置控制器RS485模式`set_controller_rs485_mode`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `set_controller_rs485_mode` | `string` |配置控制器通讯端口RS485模式。|
| `mode` | `int` |0代表默认RS485串行通讯，1代表modbus-RTU主站模式，2-代表modbus-RTU从站模式。|
| `baudrate` | `int` |波特率。(当前支持9600、19200、38400、57600、115200、230400、460800)|

- **代码示例**

**输入**  <br>

配置端口ModbusRTU模式，信息如下：

- 配置控制器RS485模式：1；
- 配置控制器RS485波特率为：115200。

```json
{"command":"set_controller_rs485_mode","mode":1,"baudrate":115200}
```

**输出**  

设置成功：

```json
{
    "command": "set_controller_rs485_mode",
    "set_state": true
}
```

设置失败：

```json
{
    "command": "set_controller_rs485_mode",
    "set_state": false
}
```

### 配置工具端RS485模式`set_tool_rs485_mode`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `set_tool_rs485_mode` | `string` |配置工具端RS485模式。|
| `mode` | `int` |通讯端口，0-设置工具端RS485端口为RTU主站，1-设置工具端RS485端口为灵巧手模式，2-设置工具端RS485端口为夹爪模式。|
| `baudrate` | `int` |波特率。（当前支持9600、115200、460800）|

- **代码示例**

**输入**  

配置工具端RS485模式，信息如下：

- 配置工具端RS485模式：1；
- 配置工具端RS485波特率为：115200。

```json
{"command":"set_tool_rs485_mode","mode":0,"baudrate":115200}
```

**输出**  

设置成功：

```json
{
    "command": "set_tool_rs485_mode",
    "set_state": true
}
```

设置失败：

```json
{
    "command": "set_tool_rs485_mode",
    "set_state": false
}
```

## 工具端控制器端RTU Modbus协议指令

### 读线圈`read_modbus_rtu_coils`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `read_modbus_rtu_coils` | `string` |读线圈。|
| `address` | `int` |线圈起始地址。|
| `device` | `int` |外设设备地址。|
| `num` | `int` |线圈数量。|
| `type` | `int` |0-控制器端modbus主机；1-工具端modbus主机。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `read_modbus_rtu_coils` | `string` |读线圈。|
| `data` | `int` |读取到的数据（读取失败时不显示）。|
| `read_state` | `bool` |读取结果（读取成功时不显示）。|

- **代码示例**

**输入**  <br>

读取线圈状态，信息如下：

- 读取线圈地址：10；
- 读取从机设备号：1；
- 读取线圈数量：1；
- 读取端口：0。

```json
{
    "command":"read_modbus_rtu_coils",
    "address":10,
    "device":1,
    "num":1,
    "type":1
}
```

**输出**  <br>

读取成功，信息如下：

- 读取指令：read_modbus_rtu_coils；
- 读取内容：1。

```json
{
    "command": "read_modbus_rtu_coils",
    "data": [1]
}
```

读取失败：

```json
{
    "command": "set_controller_rs485_mode",
    "read_state": false
}
```

### 写线圈`write_modbus_rtu_coils`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `write_modbus_rtu_coils` | `string` |写线圈指令。|
| `address` | `int` |线圈起始地址。|
| `device` | `int` |外设设备地址。|
| `data` | `int` |写入内容。|
| `port` | `int` |0-控制器端modbus主机；1-工具端modbus主机。|

- **代码示例**

**输入**  <br>

写入线圈状态，信息如下：

- 写入线圈地址：10；
- 写入从机设备号：1；
- 写入线圈内容：1，0；
- 写入端口：0。

```json
{
    "command":"write_modbus_rtu_coils",
    "address":10,
    "data":[1,0],
    "type":1,
    "device":1
}
```

**输出**  <br>

写入成功：

```json
{
    "command": "write_modbus_rtu_coils",
    "write_state": true
}
```

写入失败：

```json
{
    "command": "write_modbus_rtu_coils",
    "write_state": false
}
```

### 读离散量输入`read_modbus_rtu_input_status`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `read_modbus_rtu_input_status` | `string` |读离散量输入。|
| `address` | `int` |起始地址。|
| `device` | `int` |外设设备地址。|
| `num` | `int` |线圈数量。|
| `type` | `int` |0-控制器端modbus主机；1-工具端modbus主机。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `read_modbus_rtu_input_status` | `string` |读离散量输入。|
| `data` | `int` |读取到的数据（读取失败时不显示）。|
| `read_state` | `bool` |读取结果（读取成功时不显示）。|

- **代码示例**

**输入**  <br>

读取离散量输入状态，信息如下：

- 读离散量输入地址：10；
- 读取从机设备号：1；
- 读取离散量输入数量：1；
- 读取端口：0。

```json
{
    "command":"read_modbus_rtu_input_status",
    "address":10,
    "device":1,
    "num":1,
    "type":1
}
```

**输出**  <br>

读取成功：

```json
{
    "command": "read_modbus_rtu_input_status",
    "data": [1]
}
```

读取失败：

```json
{
    "command": "read_modbus_rtu_input_status",
    "read_state": false
}
```

### 写保持寄存器`write_modbus_rtu_registers`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `write_modbus_rtu_registers` | `string` |写保持寄存器。|
| `address` | `int` |保持寄存器起始地址。|
| `device` | `int` |外设设备地址。|
| `data` | `int` |写入内容。|
| `type` | `int` |0-控制器端modbus主机；1-工具端modbus主机。|

- **代码示例**

**输入**  <br>

写入保持寄存器数据，信息如下：

- 写入保持寄存器地址：10；
- 写入从机设备号：1；
- 写入保持寄存器内容：15，20；
- 写入端口：0。

```json
{
    "command":"write_modbus_rtu_registers",
    "address":10,
    "data":[15,20],
    "type":1,
    "device":1
}
```

**输出**  <br>

写入成功：

```json
{
    "command": "write_modbus_rtu_registers",
    "write_state": true
}
```

写入失败：

```json
{
    "command": "write_modbus_rtu_registers",
    "write_state": false
}
```

### 读保持寄存器`read_modbus_rtu_holding_registers`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `read_modbus_rtu_holding_registers` | `string` |读保持寄存器。|
| `address` | `int` |起始地址。|
| `device` | `int` |外设设备地址。|
| `num` | `int` |保持寄存器数量。|
| `type` | `int` |0-控制器端modbus主机；1-工具端modbus主机。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `read_modbus_rtu_holding_registers` | `string` |读保持寄存器。|
| `data` | `int` |读取到的数据（读取失败时不显示）。|
| `read_state` | `bool` |读取结果（读取成功时不显示）。|

- **代码示例**

**输入**  <br>

读取保持寄存器数据，信息如下：

- 读保持寄存器地址：10；
- 读取从机设备号：1；
- 读取保持寄存器数量：5；
- 读取端口：0。

```json
{
    "command":"read_modbus_rtu_holding_registers",
    "address":10,
    "device":1,
    "num":5,
    "type":1
}
```

**输出**  <br>

读取成功，读取内容：1,2,3,4,5。

```json
{
    "command": "read_modbus_rtu_holding_registers",
    "data": [1,2,3,4,5]
}
```

读取失败：

```json
{
    "command": "read_modbus_rtu_holding_registers",
    "read_state": false
}
```

### 读输入寄存器`read_modbus_rtu_input_registers`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `read_modbus_rtu_input_registers` | `string` |读输入寄存器。|
| `address` | `int` |起始地址。|
| `device` | `int` |外设设备地址。|
| `num` | `int` |输入寄存器数量。|
| `type` | `int` |0-控制器端modbus主机；1-工具端modbus主机。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `read_modbus_rtu_input_registers` | `string` |读输入寄存器。|
| `data` | `int` |读取到的数据（读取失败时不显示）。|
| `read_state` | `bool` |读取结果（读取成功时不显示）。|

- **代码示例**

**输入**  <br>

读取输入寄存器数据，信息如下：

- 读输入寄存器地址：10；
- 读取从机设备号：1；
- 读取输入寄存器数量：5；
- 读取端口：0。

```json
{
    "command":"read_modbus_rtu_input_registers",
    "address":10,
    "device":1,
    "num":5,
    "type":1
}
```

**输出**  <br>

读取成功：

```json
{
    "command": "read_modbus_rtu_input_registers",
    "data": [1,2,3,4,5]
}
```

读取失败：

```json
{
    "command": "read_modbus_rtu_input_registers",
    "read_state": false
}
```

## 控制器TCP Modbus协议指令

### 读线圈`read_modbus_tcp_coils`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `read_modbus_tcp_coils` | `string` |读线圈。|
| `address` | `int` |线圈起始地址。|
| `num` | `int` |线圈数量。|
| `master_name` | `string` |使用列表中的modbus主站名称(master_name与IP二选一，若有IP和port优先使用IP和port)。|
| `ip` | `string` |主机连接的ip地址（master_name与IP二选一若有IP和port优先使用IP和port）。|
| `port` | `int` |主机连接的端口号。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| `read_modbus_tcp_coils` | `string` |读线圈。|
| `data` | `int` |读取到的数据（读取失败时不显示）。|
| `read_state` | `bool` |读取结果（读取成功时不显示）。|
| `master_name` | `string` |使用列表中的modbus主站名称(master_name与IP二选一，若有IP和port优先使用IP和port)。|
| `ip` | `string` |主机连接的ip地址（master_name与IP二选一若有IP和port优先使用IP和port）。|
| `port` | `int` |主机连接的端口号。|

- **代码示例**

**输入**  <br>

使用master_name读取线圈状态，信息如下：

- 读取线圈地址：10；
- 读取从机设备号：1；
- 读取线圈数量：1；
- 主机名称："123"。

```json
{
    "command":"read_modbus_tcp_coils",
    "address":10,
    "num":1,
    "master_name":"123"
}
```

使用ip+port读取线圈状态，信息如下：

- 读取线圈地址：10；
- 读取从机设备号：1；
- 读取线圈数量：1；
- 读取ip："192.168.1.18"；
- 读取端口：502。

```json
{
    "command":"read_modbus_tcp_coils",
    "address":10,
    "num":1,
    "ip":"192.168.1.18",
    "port":502
}
```

**输出**  <br>

使用master_name读取成功，信息如下：

```json
{
    "command": "read_modbus_tcp_coils",
    "data": [1],
    "master_name": "123"
}
```

读取失败，信息如下：

```json
{
    "command": "read_modbus_tcp_coils",
    "read_state": false,
    "master_name": "123"
}
```

使用ip+port读取成功，信息如下：

```json
{
    "command": "read_modbus_tcp_coils",
    "data": [1],
    "ip":"192.168.1.18",
    "port":502
}
```

读取失败，信息如下：

```json
{
    "command": "read_modbus_tcp_coils",
    "read_state": false,
    "ip":"192.168.1.18",
    "port":502
}
```

### 写线圈`write_modbus_tcp_coils`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `write_modbus_tcp_coils` | `string` |写线圈指令。|
| `address` | `int` |线圈起始地址。|
| `data` | `int` |写入内容。|
| `master_name` | `string` |使用列表中的modbus主站名称(master_name与IP二选一，若有IP和port优先使用IP和port)。|
| `ip` | `string` |主机连接的ip地址（master_name与IP二选一若有IP和port优先使用IP和port）。|
| `port` | `int` |主机连接的端口号。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `write_modbus_tcp_coils` | `string` |写线圈。|
| `write_state` | `bool` |写入结果。|
| `master_name` | `string` |使用列表中的modbus主站名称(master_name与IP二选一，若有IP和port优先使用IP和port)。|
| `ip` | `string` |主机连接的ip地址（master_name与IP二选一若有IP和port优先使用IP和port）。|
| `port` | `int` |主机连接的端口号。|

- **代码示例**

**输入**  <br>

master_name写入线圈状态，信息如下：

- 写入线圈地址：10；
- 写入线圈内容：1，0；
- 写入主机："123"。

```json
{
    "command":"write_modbus_tcp_coils",
    "address":10,
    "data":[1,0],
    "master_name": "123"
}
```

ip+port写入线圈状态，信息如下：

- 写入线圈地址：10；
- 写入线圈内容：1，0；
- 写入IP："192.168.1.18"；
- 写入端口：502。

```json
{
    "command":"write_modbus_tcp_coils",
    "address":10,
    "data":[1,0],
    "ip":"192.168.1.18",
    "port":502
}
```

**输出**  <br>

master_name写入成功：

```json
{
    "command": "write_modbus_tcp_coils",
    "write_state": true,
    "master_name": "123"
}
```

master_name写入失败：

```json
{
    "command": "write_modbus_tcp_coils",
    "write_state": false,
    "master_name": "123"
}
```

ip+port写入成功：

```json
{
    "command": "write_modbus_tcp_coils",
    "write_state": true,
    "ip":"192.168.1.18",
    "port":502
}
```

ip+port写入失败：

```json
{
    "command": "write_modbus_tcp_coils",
    "write_state": false,
    "ip":"192.168.1.18",
    "port":502
}
```

### 读离散量输入`read_modbus_tcp_input_status`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `read_modbus_tcp_input_status` | `string` |读离散量输入。|
| `address` | `int` |离散量输入起始地址。|
| `num` | `int` |离散量输入数量。|
| `master_name` | `string` |使用列表中的modbus主站名称(master_name与IP二选一，若有IP和port优先使用IP和port)。|
| `ip` | `string` |主机连接的ip地址（master_name与IP二选一若有IP和port优先使用IP和port）。|
| `port` | `int` |主机连接的端口号。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `read_modbus_tcp_input_status` | `string` |读离散量输入。|
| `data` | `int` |读取到的数据（读取失败时不显示）。|
| `read_state` | `bool` |读取结果（读取成功时不显示）。|
| `master_name` | `string` |使用列表中的modbus主站名称(master_name与IP二选一，若有IP和port优先使用IP和port)。|
| `ip` | `string` |主机连接的ip地址（master_name与IP二选一若有IP和port优先使用IP和port）。|
| `port` | `int` |主机连接的端口号。|

- **代码示例**

**输入**  <br>

master_name读取离散量输入状态，信息如下：

- 读离散量输入地址：10；
- 读取离散量输入数量：1；
- 读取主机："123"。

```json
{
    "command":"read_modbus_tcp_input_status",
    "address":10,
    "num":1,
    "master_name": "123"
}
```

ip+port读取离散量输入状态，信息如下：

- 读离散量输入地址：10；
- 读取离散量输入数量：1；
- 写入IP："192.168.1.18"；
- 写入端口：502。

```json
{
    "command":"read_modbus_tcp_input_status",
    "address":10,
    "num":1,
    "ip":"192.168.1.18",
    "port":502
}
```

**输出**  <br>

master_name读取成功：

```json
{
    "command": "read_modbus_tcp_input_status",
    "data": [1],
    "master_name": "123"
}
```

master_name读取失败：

```json
{
    "command": "read_modbus_tcp_input_status",
    "read_state": false,
    "master_name": "123"
}
```

ip+port读取成功：

```json
{
    "command": "read_modbus_tcp_input_status",
    "data": [1],
    "ip":"192.168.1.18",
    "port":502
}
```

ip+port读取失败：

```json
{
    "command": "read_modbus_tcp_input_status",
    "read_state": false,
    "ip":"192.168.1.18",
    "port":502
}
```

### 写保持寄存器`write_modbus_tcp_registers`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `write_modbus_tcp_registers` | `string` |写保持寄存器指令。|
| `address` | `int` |保持寄存器起始地址。|
| `data` | `int` |写入内容。|
| `master_name` | `string` |使用列表中的modbus主站名称(master_name与IP二选一，若有IP和port优先使用IP和port)。|
| `ip` | `string` |主机连接的ip地址（master_name与IP二选一若有IP和port优先使用IP和port）。|
| `port` | `int` |主机连接的端口号。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `write_modbus_tcp_registers` | `string` |写保持寄存器。|
| `write_state` | `bool` |写入结果。|
| `master_name` | `string` |使用列表中的modbus主站名称(master_name与IP二选一，若有IP和port优先使用IP和port)。|
| `ip` | `string` |主机连接的ip地址（master_name与IP二选一若有IP和port优先使用IP和port）。|
| `port` | `int` |主机连接的端口号。|

- **代码示例**

**输入**  <br>

master_name写入保持寄存器数据，信息如下：

- 写入保持寄存器地址：10；
- 写入保持寄存器内容：15，20；
- 写入主机："123"。

```json
{
    "command":"write_modbus_tcp_registers",
    "address":10,
    "data":[15,20],
    "master_name": "123"
}
```

ip+port写入保持寄存器状态，信息如下：

- 写入保持寄存器地址：10；
- 写入保持寄存器内容：15，20；
- 写入IP："192.168.1.18"；
- 写入端口：502。

```json
{
    "command":"write_modbus_tcp_registers",
    "address":10,
    "data":[15,20],
    "ip":"192.168.1.18",
    "port":502
}
```

**输出**  <br>

master_name写入成功：

```json
{
    "command": "write_modbus_tcp_registers",
    "write_state": true,
    "master_name": "123"
}
```

master_name写入失败：

```json
{
    "command": "write_modbus_tcp_registers",
    "write_state": false,
    "master_name": "123"
}
```

ip+port写入成功：

```json
{
    "command": "write_modbus_tcp_registers",
    "write_state": true,
    "ip":"192.168.1.18",
    "port":502
}
```

ip+port写入失败：

```json
{
    "command": "write_modbus_tcp_registers",
    "write_state": false,
    "ip":"192.168.1.18",
    "port":502
}
```

### 读保持寄存器`read_modbus_tcp_holding_registers`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `read_modbus_tcp_holding_registers` | `string` |读保持寄存器。|
| `address` | `int` |保持寄存器起始地址。|
| `num` | `int` |保持寄存器数量。|
| `master_name` | `string` |使用列表中的modbus主站名称(master_name与IP二选一，若有IP和port优先使用IP和port)。|
| `ip` | `string` |主机连接的ip地址（master_name与IP二选一若有IP和port优先使用IP和port）。|
| `port` | `int` |主机连接的端口号。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `read_modbus_tcp_holding_registers` | `string` |读保持寄存器。|
| `data` | `int` |读取到的数据（读取失败时不显示）。|
| `read_state` | `bool` |读取结果（读取成功时不显示）。|
| `master_name` | `string` |使用列表中的modbus主站名称(master_name与IP二选一，若有IP和port优先使用IP和port)。|
| `ip` | `string` |主机连接的ip地址（master_name与IP二选一若有IP和port优先使用IP和port）。|
| `port` | `int` |主机连接的端口号。|

- **代码示例**

**输入**  <br>

master_name读取保持寄存器状态，信息如下：

- 读保持寄存器地址：10；
- 读取保持寄存器数量：1；
- 读取主机："123"。

```json
{
    "command":"read_modbus_tcp_holding_registers",
    "address":10,
    "num":1,
    "master_name": "123"
}
```

ip+port读取保持寄存器状态，信息如下：

- 读保持寄存器地址：10；
- 读取保持寄存器数量：1；
- 写入IP："192.168.1.18"；
- 写入端口：502。

```json
{
    "command":"read_modbus_tcp_holding_registers",
    "address":10,
    "num":1,
    "ip":"192.168.1.18",
    "port":502
}
```

**输出**  <br>

master_name读取成功：

```json
{
    "command": "read_modbus_tcp_holding_registers",
    "data": [1],
    "master_name": "123"
}
```

master_name读取失败：

```json
{
    "command": "read_modbus_tcp_holding_registers",
    "read_state": false,
    "master_name": "123"
}
```

ip+port读取成功：

```json
{
    "command": "read_modbus_tcp_holding_registers",
    "data": [1],
    "ip":"192.168.1.18",
    "port":502
}
```

ip+port读取失败：

```json
{
    "command": "read_modbus_tcp_holding_registers",
    "read_state": false,
    "ip":"192.168.1.18",
    "port":502
}
```

### 读输入寄存器`read_modbus_tcp_input_registers`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `read_modbus_tcp_input_registers` | `string` |读输入寄存器。|
| `address` | `int` |输入寄存器起始地址。|
| `num` | `int` |输入寄存器数量。|
| `master_name` | `string` |使用列表中的modbus主站名称(master_name与IP二选一，若有IP和port优先使用IP和port)。|
| `ip` | `string` |主机连接的ip地址（master_name与IP二选一若有IP和port优先使用IP和port）。|
| `port` | `int` |主机连接的端口号。|

- **输出参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `read_modbus_tcp_input_registers` | `string` |读输入寄存器。|
| `data` | `int` |读取到的数据（读取失败时不显示）。|
| `read_state` | `bool` |读取结果（读取成功时不显示）。|
| `master_name` | `string` |使用列表中的modbus主站名称(master_name与IP二选一，若有IP和port优先使用IP和port)。|
| `ip` | `string` |主机连接的ip地址（master_name与IP二选一若有IP和port优先使用IP和port）。|
| `port` | `int` |主机连接的端口号。|

- **代码示例**

**输入**  <br>

master_name读取输入寄存器状态，信息如下：

- 读输入寄存器地址：10；
- 读取输入寄存器数量：1；
- 读取主机："123"。

```json
{
    "command":"read_modbus_tcp_input_registers",
    "address":10,
    "num":1,
    "master_name": "123"
}
```

ip+port读取输入寄存器状态，信息如下：

- 读输入寄存器地址：10；
- 读取输入寄存器数量：1；
- 写入IP："192.168.1.18"；
- 写入端口：502。

```json
{
    "command":"read_modbus_tcp_input_registers",
    "address":10,
    "num":1,
    "ip":"192.168.1.18",
    "port":502
}
```

**输出**  <br>

master_name读取成功：

```json
{
    "command": "read_modbus_tcp_input_registers",
    "data": [1],
    "master_name": "123"
}
```

master_name读取失败：

```json
{
    "command": "read_modbus_tcp_input_registers",
    "read_state": false,
    "master_name": "123"
}
```

ip+port读取成功：

```json
{
    "command": "read_modbus_tcp_input_registers",
    "data": [1],
    "ip":"192.168.1.18",
    "port":502
}
```

ip+port读取失败：

```json
{
    "command": "read_modbus_tcp_input_registers",
    "read_state": false,
    "ip":"192.168.1.18",
    "port":502
}
```
