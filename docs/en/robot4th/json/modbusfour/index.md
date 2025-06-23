# <p class="hidden">JSON protocol: </p>Modbus Command Set

## Modbus Mode Configuration

There is an RS485 communication interface respectively at the aerial plug of the controller and the aerial plug of the end interface board of the RealMan robotic arm. The two RS485 ports can be configured to standard ModbusRTU mode through the JSON protocol. Then the peripherals connected to the interface can be read or written through the JSON protocol.

- Modbus supports switching between RTU and TCP modes. Please configure according to your needs.
- Supports adding multiple ModbusTCP master configurations.

### Add Modbus TCP Master `add_modbus_tcp_master`

- **Input Parameter**

| Parameter | Type |Description|
| :--- | :------------------------- |:---|
| `add_modbus_tcp_master` | `string` |Add a new Modbus TCP master configuration.|
| `master_name` | `string` |Name of the TCP master.|
| `ip` | `int` |IP address of the TCP master.|
| `port` | `int` |Port number of the TCP master.|

- **Output Parameter**

| Parameter | Type |Description|
| :--- | :------------------------- |:---|
| `add_state` | `bool` |`true`: Added successfully, `false`: Failed to add.|

- **Code demo**

**Input**  

Add a new master with IP: 127.0.0.1, port: 502, and name: 123.

```json
{"command":"add_modbus_tcp_master","master_name":"123","ip":"127.0.0.1","port":502}
```

**Output**  

Added successfully:

```json
{
    "command":"add_modbus_tcp_master",
    "add_state":true
}
```

Failed to add:

```json
{
    "command":"add_modbus_tcp_master",
    "add_state":false
}
```

### Update Modbus TCP Master `update_modbus_tcp_master`

- **Input Parameter**

| Parameter | Type |Description|
| :--- | :------------------------- |:---|
| `add_modbus_tcp_master` | `string` |Add a new Modbus TCP master configuration.|
| `master_name` | `string` |Name of the TCP master.|
| `new_name` | `string` |New name to be modified.|
| `ip` | `int` |IP address to be modified.|
| `port` | `int` |Port number to be modified.|

- **Output Parameter**

| Parameter | Type |Description|
| :--- | :------------------------- |:---|
| `update_state` | `bool` |`true`: Updated successfully, `false`: Failed to update.|

- **Code demo**

**Input**  

Update the master name to: 321.

```json
{"command":"update_modbus_tcp_master","master_name":"123","new_name":"321","ip":"127.0.0.1","port":502}
```

**Output**  

Updated successfully:

```json
{
    "command":"update_modbus_tcp_master",
    "update_state":true
}
```

Failed to update:

```json
{
    "command":"update_modbus_tcp_master",
    "update_state":false
}
```

### Delete Modbus TCP Master `delete_modbus_tcp_master`

- **Input Parameter**

| Parameter | Type |Description|
| :--- | :------------------------- |:---|
| `delete_modbus_tcp_master` | `string` |Delete the specified TCP master.|
| `master_name` | `string` |Name of the TCP master to be deleted.|

- **Output Parameter**

| Parameter | Type |Description|
| :--- | :------------------------- |:---|
| `delete_state` | `bool` |`true`: Deleted successfully, `false`: Failed to delete.|

- **Code demo**

**Input**  

Delete the TCP master with the name 123.

```json
{"command":"delete_modbus_tcp_master","master_name":"123"}
```

**Output**  

Deleted successfully:

```json
{
    "command": "delete_modbus_tcp_master",
    "delete_state": true
}
```

Failed to delete:

```json
{
    "command": "delete_modbus_tcp_master",
    "delete_state": false
}
```

### Query Modbus Master List `get_modbus_tcp_master_list`

- **Input Parameter**

| Parameter | Type |Description|
| :--- | :--- |:---|
| `get_modbus_tcp_master_list` | `string` |Query the list of TCP masters.|
| `page_num` | `int` |Page number (omit this parameter when querying all).|
| `page_size` | `int` |Page size (omit this parameter when querying all).|
| `vague_search` | `string` |Fuzzy search (pass this parameter for fuzzy query).|

- **Output Parameter**

| Parameter | Type |Description|
| :--- | :------------------------- |:---|
| `get_modbus_tcp_master_list` | `string` |Query the list of TCP masters.|
| `total_size` | `int` |Total number of items in the list.|
| `list` | `object` |Detailed information of TCP masters.|

- **Code demo**

**Input**  

Query the current saved Modbus master list, page number: 1, page size: 10, and perform a fuzzy search for all master stations containing the character "1".

```json
{"command":"get_modbus_tcp_master_list","page_num":1,"page_size":10,"vague_search":"1"}
```

**Output**  

Successful query result:

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

Failed query:

```json
 {
    "command":"get_modbus_tcp_master_list",
    "get_state":false
}
```

### Query Specified Modbus Master `given_modbus_tcp_master`

- **Input Parameter**

| Parameter | Type |Description|
| :--- | :--- |:---|
| `given_modbus_tcp_master` | `string` |Query the specified TCP master.|
| `master_name` | `string` |Name of the TCP master.|

- **Output Parameter**

| Parameter | Type |Description|
| :--- | :------------------------- |:---|
| `master_name` | `string` |Name of the TCP master.|
| `ip` | `string` |IP address of the TCP master.|
| `port` | `int` |Port number of the TCP master.
|

- **Code demo**

**Input**  

Query the TCP master with the name 123.

```json
{"command":"given_modbus_tcp_master","master_name":"123"}
```

**Output**  

Query successful:

```json
{
    "command":"given_modbus_tcp_master",
    "master_name":"123",
    "ip":"192.168.1.18",
    "port":502
}
```

Query failed:

```json
{
    "command":"given_modbus_tcp_master",
    "given_state":false
} 
```

## Modbus Status

### Query Controller RS485 Mode `get_controller_rs485_mode`

- **Input Parameter**

| Parameter | Type |Description|
| :--- | :--- |:---|
| `get_controller_rs485_mode` | `string` |Query the controller RS485 mode.|

- **Output Parameter**

| Parameter | Type |Description|
| :--- | :------------------------- |:---|
| `get_controller_rs485_mode` | `string` |Query the controller RS485 mode.|
| `controller_rs485_mode` | `int` |0 represents default RS485 serial communication, 1 represents Modbus RTU master mode, and 2 represents Modbus RTU slave mode.|
| `baudrate` | `int` |Baud rate. (Currently supports 9600, 19200, 38400, 57600, 115200, 230400, 460800)|

- **Code demo**

Query the controller RS485 mode.

**Input**  

```json
{ "command": "get_controller_rs485_mode" }
```

**Output**  <br>

Feedback on the controller RS485 mode, as follows:

- Current controller RS485 mode: 1;
- Current controller RS485 baud rate: 460800.

```json
{
    "command": "get_controller_rs485_mode",
    "controller_rs485_mode": 1,
    "baudrate": 460800
}
```

### Query end of Tool RS485 Mode`get_tool_rs485_mode`

- **Input Parameter**

| Parameter | Type |Description|
| :--- | :--- |:---|
| `get_tool_rs485_mode` | `string` |Query the end of tool RS485 mode.|

- **Output Parameter**

| Parameter | Type |Description|
| :--- | :------------------------- |:---|
| `get_tool_rs485_mode` | `string` |Feedback on the end of tool RS485 mode.|
| `tool_rs485_mode` | `int` |0 - represents Modbus RTU master mode, 1 - represents dexterous hand mode, 2 - represents gripper mode.|
| `baudrate` | `int` |Baud rate. (Currently supports 9600, 115200, 460800)|

- **Code demo**

**Input**  

Query the end of tool RS485 mode.

```json
{ "command": "get_tool_rs485_mode" }
```

**Output**  <br>

Feedback on the end of tool RS485 mode, as follows:

- Current tool - end RS485 mode: 1;
- Current tool - end RS485 baud rate: 460800.

```json
{
  "command": "get_tool_rs485_mode",
  "tool_rs485_mode": 1,
  "baudrate": 460800
}
```

### Configure Controller Communication Port RS485 Mode `set_controller_rs485_mode`

- **Input Parameter**

| Parameter | Type |Description|
| :--- | :--- |:---|
| `set_controller_rs485_mode` | `string` |Configure the controller communication port RS485 mode.|
| `mode` | `int` |0 represents default RS485 serial communication, 1 represents Modbus RTU master mode, and 2 represents Modbus - RTU slave mode.|
| `baudrate` | `int` |Baud rate. (Currently supports 9600, 19200, 38400, 57600, 115200, 230400, 460800)|

- **Code demo**

**Input**  <br>

Configure the port to ModbusRTU mode, as follows:

- Configure the controller RS485 mode: 1;
- Configure the controller RS485 baud rate: 115200.

```json
{"command":"set_controller_rs485_mode","mode":1,"baudrate":115200}
```

**Output**  

Configuration successful:

```json
{
    "command": "set_controller_rs485_mode",
    "set_state": true
}
```

Configuration failed:

```json
{
    "command": "set_controller_rs485_mode",
    "set_state": false
}
```

### Configure end of Tool RS485 Mode `set_tool_rs485_mode`

- **Input Parameter**

| Parameter | Type |Description|
| :--- | :--- |:---|
| `set_tool_rs485_mode` | `string` |Configure the end of tool RS485 mode.|
| `mode` | `int` |Communication port, 0 - set the end of tool RS485 port to RTU master, 1 - set the end of tool RS485 port to dexterous hand mode, 2 - set the end of tool RS485 port to gripper mode.|
| `baudrate` | `int` |Baud rate. (Currently supports 9600, 115200, 460800)|

- **Code demo**

**Input**  

Configure the tool - end RS485 mode, as follows:

- Configure the tool - end RS485 mode: 1;
- Configure the tool - end RS485 baud rate: 115200.

```json
{"command":"set_tool_rs485_mode","mode":0,"baudrate":115200}
```

**Output**  

Configuration successful:

```json
{
    "command": "set_tool_rs485_mode",
    "set_state": true
}
```

Configuration failed:

```json
{
    "command": "set_tool_rs485_mode",
    "set_state": false
}
```

## End of Tool and end of Controller RTU Modbus Protocol Commands

### Read Coils `read_modbus_rtu_coils`

- **Input Parameter**

| Parameter | Type |Description|
| :--- | :--- |:---|
| `read_modbus_rtu_coils` | `string` |Read coils.|
| `address` | `int` |Starting address of the coils.|
| `device` | `int` |Peripheral device address.|
| `num` | `int` |Number of coils.|
| `type` | `int` |0 - controller - end Modbus master; 1 - tool - end Modbus master.|

- **Output Parameter**

| Parameter | Type |Description|
| :--- | :------------------------- |:---|
| `read_modbus_rtu_coils` | `string` |Read coils.|
| `data` | `int` |Data read (not displayed if read fails).|
| `read_state` | `bool` |Read result (not displayed if read is successful).|

- **Code demo**

**Input**  <br>

Read the coil status, as follows:

- Read coil address: 10;
- Read slave device number: 1;
- Read coil quantity: 1;
- Read port: 0.

```json
{
    "command":"read_modbus_rtu_coils",
    "address":10,
    "device":1,
    "num":1,
    "type":1
}
```

**Output**  <br>

Read successful, as follows:

- Read command: read_modbus_rtu_coils;
- Read content: 1.

```json
{
    "command": "read_modbus_rtu_coils",
    "data": [1]
}
```

Read failed:

```json
{
    "command": "set_controller_rs485_mode",
    "read_state": false
}
```

### Write Coils `write_modbus_rtu_coils`

- **Input Parameter**

| Parameter | Type |Description|
| :--- | :--- |:---|
| `write_modbus_rtu_coils` | `string` |Write coil command.|
| `address` | `int` |Starting address of the coil.|
| `device` | `int` |Peripheral device address.|
| `data` | `int` |Content to be written.|
| `port` | `int` |0 - end of controller Modbus master; 1 - end of tool Modbus master.|

- **Code demo**

**Input**  <br>

Write the coil status, as follows:

- Write coil address: 10;
- Write slave device number: 1;
- Write coil content: 1, 0;
- Write port: 0.

```json
{
    "command":"write_modbus_rtu_coils",
    "address":10,
    "data":[1,0],
    "type":1,
    "device":1
}
```

**Output**  <br>

Write successful:

```json
{
    "command": "write_modbus_rtu_coils",
    "write_state": true
}
```

Write failed:

```json
{
    "command": "write_modbus_rtu_coils",
    "write_state": false
}
```

### Read Discrete Inputs `read_modbus_rtu_input_status`

- **Input Parameter**

| Parameter | Type |Description|
| :--- | :--- |:---|
| `read_modbus_rtu_input_status` | `string` |Read discrete input.|
| `address` | `int` |Starting address.|
| `device` | `int` |Peripheral device address.|
| `num` | `int` |Number of coils.|
| `type` | `int` |0 - end of controller Modbus master; 1 - end of tool Modbus master.|

- **Output Parameter**

| Parameter | Type |Description|
| :--- | :--- |:---|
| `read_modbus_rtu_input_status` | `string` |Read discrete input.|
| `data` | `int` |Data read (not displayed if read fails).|
| `read_state` | `bool` |Read result (not displayed if read is successful).|

- **Code demo**

**Input**  <br>

Read the discrete input status, as follows:

- Read discrete input address: 10;
- Read slave device number: 1;
- Read discrete input quantity: 1;
- Read port: 0.

```json
{
    "command":"read_modbus_rtu_input_status",
    "address":10,
    "device":1,
    "num":1,
    "type":1
}
```

**Output**  <br>

Read successful:

```json
{
    "command": "read_modbus_rtu_input_status",
    "data": [1]
}
```

Read failed:

```json
{
    "command": "read_modbus_rtu_input_status",
    "read_state": false
}
```

### Write Holding Registers `write_modbus_rtu_registers`

- **Input Parameter**

| Parameter | Type |Description|
| :--- | :--- |:---|
| `write_modbus_rtu_registers` | `string` |Write holding registers.|
| `address` | `int` |Starting address of the holding register.|
| `device` | `int` |Peripheral device address.|
| `data` | `int` |Content to be written.|
| `type` | `int` |0 - end of controller Modbus master; 1 - end of tool Modbus master.|

- **Code demo**

**Input**  <br>

Write data to the holding register, as follows:

- Write holding register address: 10;
- Write slave device number: 1;
- Write holding register content: 15, 20;
- Write port: 0.

```json
{
    "command":"write_modbus_rtu_registers",
    "address":10,
    "data":[15,20],
    "type":1,
    "device":1
}
```

**Output**  <br>

Write successful:

```json
{
    "command": "write_modbus_rtu_registers",
    "write_state": true
}
```

Write failed:

```json
{
    "command": "write_modbus_rtu_registers",
    "write_state": false
}
```

### Read Holding Registers `read_modbus_rtu_holding_registers`

- **Input Parameter**

| Parameter | Type |Description|
| :--- | :--- |:---|
| `read_modbus_rtu_holding_registers` | `string` |Read holding registers.|
| `address` | `int` |Starting address.|
| `device` | `int` |Peripheral device address.|
| `num` | `int` |Number of holding registers.|
| `type` | `int` |0 - end of controller Modbus master; 1 - end of tool Modbus master.|

- **Output Parameter**

| Parameter | Type |Description|
| :--- | :--- |:---|
| `read_modbus_rtu_holding_registers` | `string` |Read holding registers.|
| `data` | `int` |Data read (not displayed if read fails).|
| `read_state` | `bool` |Read result (not displayed if read is successful).|

- **Code demo**

**Input**  <br>

Read data from the holding register, as follows:

- Read holding register address: 10;
- Read slave device number: 1;
- Read holding register quantity: 5;
- Read port: 0.

```json
{
    "command":"read_modbus_rtu_holding_registers",
    "address":10,
    "device":1,
    "num":5,
    "type":1
}
```

**Output**  <br>

Read successful, read content: 1,2,3,4,5.

```json
{
    "command": "read_modbus_rtu_holding_registers",
    "data": [1,2,3,4,5]
}
```

Read failed:

```json
{
    "command": "read_modbus_rtu_holding_registers",
    "read_state": false
}
```

### Read Input Registers `read_modbus_rtu_input_registers`

- **Input Parameter**

| Parameter | Type |Description|
| :--- | :--- |:---|
| `read_modbus_rtu_input_registers` | `string` |Read input registers.|
| `address` | `int` |Starting address.|
| `device` | `int` |Peripheral device address.|
| `num` | `int` |Number of input registers.|
| `type` | `int` |0 - end of controller Modbus master; 1 - end of tool Modbus master.|

- **Output Parameter**

| Parameter | Type |Description|
| :--- | :--- |:---|
| `read_modbus_rtu_input_registers` | `string` |Read input registers.|
| `data` | `int` |Data read (not displayed if read fails).|
| `read_state` | `bool` |Read result (not displayed if read is successful).|

- **Code demo**

**Input**  <br>

Read data from the input register, as follows:

- Read input register address: 10;
- Read slave device number: 1;
- Read input register quantity: 5;
- Read port: 0.

```json
{
    "command":"read_modbus_rtu_input_registers",
    "address":10,
    "device":1,
    "num":5,
    "type":1
}
```

**Output**  <br>

Read successful:

```json
{
    "command": "read_modbus_rtu_input_registers",
    "data": [1,2,3,4,5]
}
```

Read failed:

```json
{
    "command": "read_modbus_rtu_input_registers",
    "read_state": false
}
```

## Controller TCP Modbus Protocol Commands

### Read Coils `read_modbus_tcp_coils`

- **Input Parameter**

| Parameter | Type |Description|
| :--- | :--- |:---|
| `read_modbus_tcp_coils` | `string` |Read coils.|
| `address` | `int` |Starting address of the coils.|
| `num` | `int` |Number of coils.|
| `master_name` | `string` |Use the Modbus master name in the list (either master_name or IP, if IP and port are available, they will be used preferentially).|
| `ip` | `string` |IP address of the host connection (either master_name or IP, if IP and port are available, they will be used preferentially).|
| `port` | `int` |Port number of the host connection.|

- **Output Parameter**

| Parameter | Type |Description|
| :--- | :------------------------- |:---|
| `read_modbus_tcp_coils` | `string` |Read coils.|
| `data` | `int` |Data read (not displayed if read fails).|
| `read_state` | `bool` |Read result (not displayed if read is successful).|
| `master_name` | `string` |Use the Modbus master name in the list (either master_name or IP, if IP and port are available, they will be used preferentially).|
| `ip` | `string` |IP address of the host connection (either master_name or IP, if IP and port are available, they will be used preferentially).|
| `port` | `int` |Port number of the host connection.|

- **Code demo**

**Input**  <br>

Use master_name to read the coil status, as follows:

- Read coil address: 10;
- Read slave device number: 1;
- Read coil quantity: 1;
- Host name: "123".

```json
{
    "command":"read_modbus_tcp_coils",
    "address":10,
    "num":1,
    "master_name":"123"
}
```

Use ip + port to read the coil status, as follows:

- Read coil address: 10;
- Read slave device number: 1;
- Read coil quantity: 1;
- Read IP: "192.168.1.18";
- Read port: 502.

```json
{
    "command":"read_modbus_tcp_coils",
    "address":10,
    "num":1,
    "ip":"192.168.1.18",
    "port":502
}
```

**Output**  <br>

Use master_name to read successfully, as follows:

```json
{
    "command": "read_modbus_tcp_coils",
    "data": [1],
    "master_name": "123"
}
```

Read failed, as follows:

```json
{
    "command": "read_modbus_tcp_coils",
    "read_state": false,
    "master_name": "123"
}
```

Use ip + port to read successfully, as follows:

```json
{
    "command": "read_modbus_tcp_coils",
    "data": [1],
    "ip":"192.168.1.18",
    "port":502
}
```

Read failed, as follows:

```json
{
    "command": "read_modbus_tcp_coils",
    "read_state": false,
    "ip":"192.168.1.18",
    "port":502
}
```

### Write Coils `write_modbus_tcp_coils`

- **Input Parameter**

| Parameter | Type |Description|
| :--- | :--- |:---|
| `write_modbus_tcp_coils` | `string` |Write coil command.|
| `address` | `int` |Starting address of the coil.|
| `data` | `int` |Content to be written.|
| `master_name` | `string` |Use the Modbus master name in the list (either master_name or IP, if IP and port are available, they will be used preferentially).|
| `ip` | `string` |IP address of the host connection (either master_name or IP, if IP and port are available, they will be used preferentially).|
| `port` | `int` |Port number of the host connection.|

- **Output Parameter**

| Parameter | Type |Description|
| :--- | :--- |:---|
| `write_modbus_tcp_coils` | `string` |Write coil.|
| `write_state` | `bool` |Write result.|
| `master_name` | `string` |Use the Modbus master name in the list (either master_name or IP, if IP and port are available, they will be used preferentially).|
| `ip` | `string` |IP address of the host connection (either master_name or IP, if IP and port are available, they will be used preferentially).|
| `port` | `int` |Port number of the host connection.|

- **Code demo**

**Input**  <br>

Use master_name to write the coil status, as follows:

- Write coil address: 10;
- Write coil content: 1, 0;
- Write host: "123".

```json
{
    "command":"write_modbus_tcp_coils",
    "address":10,
    "data":[1,0],
    "master_name": "123"
}
```

Use ip + port to write the coil status, as follows:

- Write coil address: 10;
- Write coil content: 1, 0;
- Write IP: "192.168.1.18";
- Write port: 502.

```json
{
    "command":"write_modbus_tcp_coils",
    "address":10,
    "data":[1,0],
    "ip":"192.168.1.18",
    "port":502
}
```

**Output**  <br>

Use master_name to write successfully:

```json
{
    "command": "write_modbus_tcp_coils",
    "write_state": true,
    "master_name": "123"
}
```

Use master_name to write failed:

```json
{
    "command": "write_modbus_tcp_coils",
    "write_state": false,
    "master_name": "123"
}
```

Use ip + port to write successfully:

```json
{
    "command": "write_modbus_tcp_coils",
    "write_state": true,
    "ip":"192.168.1.18",
    "port":502
}
```

Use ip + port to write failed:

```json
{
    "command": "write_modbus_tcp_coils",
    "write_state": false,
    "ip":"192.168.1.18",
    "port":502
}
```

### Read Discrete Inputs `read_modbus_tcp_input_status`

- **Input Parameter**

| Parameter | Type |Description|
| :--- | :--- |:---|
| `read_modbus_tcp_input_status` | `string` |Read discrete input.|
| `address` | `int` |Starting address of the discrete input.|
| `num` | `int` |Number of discrete inputs.|
| `master_name` | `string` |Use the Modbus master name in the list (either master_name or IP, if IP and port are available, they will be used preferentially).|
| `ip` | `string` |IP address of the host connection (either master_name or IP, if IP and port are available, they will be used preferentially).|
| `port` | `int` |Port number of the host connection.|

- **Output Parameter**

| Parameter | Type |Description|
| :--- | :--- |:---|
| `read_modbus_tcp_input_status` | `string` |Read discrete input.|
| `data` | `int` |Data read (not displayed if read fails).|
| `read_state` | `bool` |Read result (not displayed if read is successful).|
| `master_name` | `string` |Use the Modbus master name in the list (either master_name or IP, if IP and port are available, they will be used preferentially).|
| `ip` | `string` |IP address of the host connection (either master_name or IP, if IP and port are available, they will be used preferentially).|
| `port` | `int` |Port number of the host connection.|

- **Code demo**

**Input**  <br>

Use master_name to read the discrete input status, as follows:

- Read discrete input address: 10;
- Read discrete input quantity: 1;
- Read host: "123".

```json
{
    "command":"read_modbus_tcp_input_status",
    "address":10,
    "num":1,
    "master_name": "123"
}
```

Use ip + port to read the discrete input status, as follows:

- Read discrete input address: 10;
- Read discrete input quantity: 1;
- Write IP: "192.168.1.18";
- Write port: 502.

```json
{
    "command":"read_modbus_tcp_input_status",
    "address":10,
    "num":1,
    "ip":"192.168.1.18",
    "port":502
}
```

**Output**  <br>

Use master_name to read successfully:

```json
{
    "command": "read_modbus_tcp_input_status",
    "data": [1],
    "master_name": "123"
}
```

Use master_name to read failed:

```json
{
    "command": "read_modbus_tcp_input_status",
    "read_state": false,
    "master_name": "123"
}
```

Use ip + port to read successfully:

```json
{
    "command": "read_modbus_tcp_input_status",
    "data": [1],
    "ip":"192.168.1.18",
    "port":502
}
```

Use ip + port to read failed:

```json
{
    "command": "read_modbus_tcp_input_status",
    "read_state": false,
    "ip":"192.168.1.18",
    "port":502
}
```

### Write Holding Registers `write_modbus_tcp_registers`

- **Input Parameter**

| Parameter | Type |Description|
| :--- | :--- |:---|
| `write_modbus_tcp_registers` | `string` |Write holding register command.|
| `address` | `int` |Starting address of the holding register.|
| `data` | `int` |Content to be written.|
| `master_name` | `string` |Use the Modbus master name in the list (either master_name or IP, if IP and port are available, they will be used preferentially).|
| `ip` | `string` |IP address of the host connection (either master_name or IP, if IP and port are available, they will be used preferentially).|
| `port` | `int` |Port number of the host connection.|

- **Output Parameter**

| Parameter | Type |Description|
| :--- | :--- |:---|
| `write_modbus_tcp_registers` | `string` |Write holding register.|
| `write_state` | `bool` |Write result.|
| `master_name` | `string` |Use the Modbus master name in the list (either master_name or IP, if IP and port are available, they will be used preferentially).|
| `ip` | `string` |IP address of the host connection (either master_name or IP, if IP and port are available, they will be used preferentially).|
| `port` | `int` |Port number of the host connection.|

- **Code demo**

**Input**  <br>

Use master_name to write data to the holding register, as follows:

- Write holding register address: 10;
- Write holding register content: 15, 20;
- Write host: "123".

```json
{
    "command":"write_modbus_tcp_registers",
    "address":10,
    "data":[15,20],
    "master_name": "123"
}
```

Use ip + port to write the holding register status, as follows:

- Write holding register address: 10;
- Write holding register content: 15, 20;
- Write IP: "192.168.1.18";
- Write port: 502.

```json
{
    "command":"write_modbus_tcp_registers",
    "address":10,
    "data":[15,20],
    "ip":"192.168.1.18",
    "port":502
}
```

**Output**  <br>

Use master_name to write successfully:

```json
{
    "command": "write_modbus_tcp_registers",
    "write_state": true,
    "master_name": "123"
}
```

Use master_name to write failed:

```json
{
    "command": "write_modbus_tcp_registers",
    "write_state": false,
    "master_name": "123"
}
```

Use ip + port to write successfully:

```json
{
    "command": "write_modbus_tcp_registers",
    "write_state": true,
    "ip":"192.168.1.18",
    "port":502
}
```

Use ip + port to write failed:

```json
{
    "command": "write_modbus_tcp_registers",
    "write_state": false,
    "ip":"192.168.1.18",
    "port":502
}
```

### Read Holding Registers `read_modbus_tcp_holding_registers`

- **Input Parameter**

| Parameter | Type |Description|
| :--- | :--- |:---|
| `read_modbus_tcp_holding_registers` | `string` |Read holding register.|
| `address` | `int` |Starting address of the holding register.|
| `num` | `int` |Number of holding registers.|
| `master_name` | `string` |Use the Modbus master name in the list (either master_name or IP, if IP and port are available, they will be used preferentially).|
| `ip` | `string` |IP address of the host connection (either master_name or IP, if IP and port are available, they will be used preferentially).|
| `port` | `int` |Port number of the host connection.|

- **Output Parameter**

| Parameter | Type |Description|
| :--- | :--- |:---|
| `read_modbus_tcp_holding_registers` | `string` |Read holding register.|
| `data` | `int` |Data read (not displayed if read fails).|
| `read_state` | `bool` |Read result (not displayed if read is successful).|
| `master_name` | `string` |Use the Modbus master name in the list (either master_name or IP, if IP and port are available, they will be used preferentially).|
| `ip` | `string` |IP address of the host connection (either master_name or IP, if IP and port are available, they will be used preferentially).|
| `port` | `int` |Port number of the host connection.|

- **Code demo**

**Input**  <br>

Use master_name to read the holding register status, as follows:

- Read holding register address: 10;
- Read holding register quantity: 1;
- Read host: "123".

```json
{
    "command":"read_modbus_tcp_holding_registers",
    "address":10,
    "num":1,
    "master_name": "123"
}
```

Use ip + port to read the holding register status, as follows:

- Read holding register address: 10;
- Read holding register quantity: 1;
- Write IP: "192.168.1.18";
- Write port: 502.

```json
{
    "command":"read_modbus_tcp_holding_registers",
    "address":10,
    "num":1,
    "ip":"192.168.1.18",
    "port":502
}
```

**Output**  <br>

Use master_name to read successfully:

```json
{
    "command": "read_modbus_tcp_holding_registers",
    "data": [1],
    "master_name": "123"
}
```

Use master_name to read failed:

```json
{
    "command": "read_modbus_tcp_holding_registers",
    "read_state": false,
    "master_name": "123"
}
```

Use ip + port to read successfully:

```json
{
    "command": "read_modbus_tcp_holding_registers",
    "data": [1],
    "ip":"192.168.1.18",
    "port":502
}
```

Use ip + port to read failed:

```json
{
    "command": "read_modbus_tcp_holding_registers",
    "read_state": false,
    "ip":"192.168.1.18",
    "port":502
}
```

### Read Input Registers `read_modbus_tcp_input_registers`

- **Input Parameter**

| Parameter | Type |Description|
| :--- | :--- |:---|
| `read_modbus_tcp_input_registers` | `string` |Read input register.|
| `address` | `int` |Starting address of the input register.|
| `num` | `int` |Number of input registers.|
| `master_name` | `string` |Use the Modbus master name in the list (either master_name or IP, if IP and port are available, they will be used preferentially).|
| `ip` | `string` |IP address of the host connection (either master_name or IP, if IP and port are available, they will be used preferentially).|
| `port` | `int` |Port number of the host connection.|

- **Output Parameter**

| Parameter | Type |Description|
| :--- | :--- |:---|
| `read_modbus_tcp_input_registers` | `string` |Read input register.|
| `data` | `int` |Data read (not displayed if read fails).|
| `read_state` | `bool` |Read result (not displayed if read is successful).|
| `master_name` | `string` |Use the Modbus master name in the list (either master_name or IP, if IP and port are available, they will be used preferentially).|
| `ip` | `string` |IP address of the host connection (either master_name or IP, if IP and port are available, they will be used preferentially).|
| `port` | `int` |Port number of the host connection.|

- **Code demo**

**Input**  <br>

Use master_name to read the input register status, as follows:

- Read input register address: 10;
- Read input register quantity: 1;
- Read host: "123".

```json
{
    "command":"read_modbus_tcp_input_registers",
    "address":10,
    "num":1,
    "master_name": "123"
}
```

Use ip + port to read the input register status, as follows:

- Read input register address: 10;
- Read input register quantity: 1;
- Write IP: "192.168.1.18";
- Write port: 502.

```json
{
    "command":"read_modbus_tcp_input_registers",
    "address":10,
    "num":1,
    "ip":"192.168.1.18",
    "port":502
}
```

**Output**  <br>

Use master_name to read successfully:

```json
{
    "command": "read_modbus_tcp_input_registers",
    "data": [1],
    "master_name": "123"
}
```

Use master_name to read failed:

```json
{
    "command": "read_modbus_tcp_input_registers",
    "read_state": false,
    "master_name": "123"
}
```

Use ip + port to read successfully:

```json
{
    "command": "read_modbus_tcp_input_registers",
    "data": [1],
    "ip":"192.168.1.18",
    "port":502
}
```

Use ip + port to read failed:

```json
{
    "command": "read_modbus_tcp_input_registers",
    "read_state": false,
    "ip":"192.168.1.18",
    "port":502
}
```
