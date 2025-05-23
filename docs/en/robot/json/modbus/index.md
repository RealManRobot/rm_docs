# <p class="hidden">JSON protocol: </p>Modbus Command Set

## Modbus mode configuration

There is an RS485 communication interface respectively at the aerial plug of the controller and the aerial plug of the end interface board of the RealMan robotic arm. The two RS485 ports can be configured to standard ModbusRTU mode through the JSON protocol. Then the peripherals connected to the interface can be read or written through the JSON protocol.

Note: The RS485 port of the controller can be used to control the robotic arm when it is not configured to ModbusRTU mode. These two modes are not compatible with each other. To restore the robotic arm control mode, the ModbusRTU mode of the interface must be closed. After the ModbusRTU mode is closed, the system will automatically switch back to the robotic arm control mode, using the baud rate of 460800BPS, stop bit 1, data bit 8, no parity check.

In addition, the Gen 3 controller also supports ModbusTCP master configuration, allowing users to configure the ModbusTCP master to connect the ModbusTCP slaves of external devices.

### Set RS485`set_RS485`

Set the RS485 port baud rate, but there is no return response. Baud rate options: 9600, 19200, 38400, 115200, and 460800. If the user sets a different value, the controller will default to 460800. After issuing this command, if the Modbus mode is enabled, it will automatically be disabled. The controller will then record the current baud rate and continue to use this baud rate for external communication even after a power cycle.

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `set_RS485` | `string` |Set the RS485 port baud rate, with a maximum of 460800. |

- **Code demo**

**Input**

Set the baud rate of the RS485 to 460800.

```json
{"command":"set_RS485","baudrate":460800}
```

### Get the controller RS485 mode (Gen 3 Controller)`get_controller_RS485_mode`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `get_controller_RS485_mode` | `string` |Get the controller RS485 mode. |

- **Output parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `controller_RS485_mode` | `int` |0: RS485 serial communication by default, 1: modbus-RTU master mode, 2: modbus-RTU slave mode. |
| `baudrate` | `int` |Baud rate. |
| `modbus_timeout` | `int` |modbus protocol timeout period in 100 ms, available only in modbus-RTU mode. |

- **Code demo**

**Input**

Get the controller RS485 mode.

```json
{"command":"get_controller_RS485_mode"}
```

**Output**

```json
{
    "command": "get_controller_RS485_mode",
    "controller_RS485_mode": 1,
    "baudrate": 460800,
    "modbus_timeout": 1
}
```

### Get the tool RS485 mode (Gen 3 Controller)`get_tool_RS485_mode`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `get_tool_RS485_mode` | `string` |Get the tool RS485 mode. |

- **Output parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `tool_RS485_mode` | `int` |0: RS485 serial communication by default, 1: modbus-RTU master mode, 2: modbus-RTU slave mode. |
| `baudrate` | `int` |Baud rate. |
| `modbus_timeout` | `int` |modbus protocol timeout period in 100 ms, available only in modbus-RTU mode. |

- **Code demo**

**Input**

Get the tool RS485 mode.

```json
{"command":"get_tool_RS485_mode"}
```

**Output**

```json
{
    "command": "get_tool_RS485_mode",
    "tool_RS485_mode": 0,
    "baudrate": 460800,
    "modbus_timeout": 1
}
```

### Set ModbusRTU mode of communication port`set_modbus_mode`

Set the ModbusRTU mode of communication port. After the robotic arm is started, this command must be initiated first for any operation on the communication port; otherwise, error information will be returned.

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `set_modbus_mode` | `string` |Set ModbusRTU mode of communication port. |
| `port` | `int` |Communication port, 0: controller RS485 port as RTU master, 1: end interface board RS485 port as RTU master, 2: controller RS485 port as RTU slave. |
| `baudrate` | `int` |Baud rate, supporting three common baud rates, namely 9600, 115200, and 460800. |
| `timeout` | `int` |Timeout period, in 100 ms. For all read and write commands to the Modbus device, if no response data is returned within the specified timeout period, a timeout error will be returned. The timeout period cannot be set to 0; if set to 0, the robotic arm will take it as 1 for configuration. |

- **Code demo**

**Input**

```json
{"command":"set_modbus_mode","port":0,"baudrate":115200,"timeout":1}
```

**Output**
Setting succeeded

```json
{
    "command": "set_modbus_mode",
    "set_state": true
}
```

Setting failed

```json
{
    "command": "set_modbus_mode",
    "set_state": false
}
```

### Close ModbusRTU mode of communication port`close_modbus_mode`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `close_modbus_mode` | `string` |Close ModbusRTU mode of communication port. |
| `port` | `int` |Communication port, 0: controller RS485 port as RTU master, 1: end interface board RS485 port as RTU master, 2: controller RS485 port as RTU slave. |

- **Code demo**

**Input**

```json
{"command":"close_modbus_mode","port":0}
```

**Output**
Setting succeeded:

```json
{
    "command": "close_modbus_mode",
    "set_state": true
}
```

Setting failed:

```json
{
    "command": "close_modbus_mode",
    "set_state": false
}
```

### Set to connect to ModbusTCP slave (Gen 3 controller)`rm_set_modbustcp_mode()`

The controller acts as a ModbusTCP master to connect to external ModbusTCP slave devices.

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `set_modbustcp_mode` | `string` |Connect to ModbusTCP slave. |
| `ip` | `string` |Slave IP address. |
| `port` | `int` |Communication port number. |
| `timeout` | `int` |Timeout period, in ms. |

- **Code demo**

**Input**

```json
{"command":"set_modbustcp_mode","ip":"192.168.1.120","port":502,"timeout":2000}
```

**Output**
Connection succeeded:

```json
{
    "command": "set_modbustcp_mode",
    "set_state": true
}
```

Connection failed:

```json
{
    "command": "set_modbustcp_mode",
    "set_state": false
}
```

### Close ModbusTCP slave (Gen 3 controller)`close_modbustcp_mode`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `close_modbustcp_mode` | `string` |Disconnect to ModbusTCP slave. |

- **Code demo**

**Input**

```json
{"command":"close_modbustcp_mode"}
```

**Output**
Success:

```json
{
    "command": "close_modbustcp_mode",
    "set_state": true
}
```

Fail:

```json
{
    "command": "close_modbustcp_mode",
    "set_state": false
}
```

## Modbus protocol command

### Read coils`read_coils`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `read_coils` | `string` |Read coils. |
| `port` | `int` |Communication port, 0: controller RS485 port, 1: end interface board RS485 port, 3: controller ModbusTCP port for connecting to external slave devices. |
| `address` | `int` |Coil starting address. |
| `num` | `int` |Number of coils to read. This command can read up to 8 coils once, that is, the returned data will not be longer than one byte. |
| `device` | `int` |Peripheral device address. |

- **Code demo**

**Input**

```json
{"command":"read_coils","port":0,"address":10,"num":2,"device":2}
```

**Output**
Reading succeeded, returning coil state, data type: int8.

```json
{
    "command": "read_coils",
    "data": 8
}
```

Reading failed, no data received within the timeout period.

```json
{
    "command": "read_coils",
    "read_state": false
}
```

### Read multiple coils`read_multiple_coils`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `read_multiple_coils` | `string` |Read multiple coils. |
| `port` | `int` |Communication port, 0: controller RS485 port, 1: end interface board RS485 port, 3: controller ModbusTCP port for connecting to external slave devices. |
| `address` | `int` |Coil starting address. |
| `num` | `int` |8 ≤ num ≤ 120 represents the number of wire coils to be read. This command supports reading up to 120 coils at a time, which is equivalent to 15 bytes. |
| `device` | `int` |Peripheral Device Address. |

- **Code demo**

**Input**

```json
{"command":"read_multiple_coils","port":0,"address":0,"num":24,"device":2}
```

**Output**
Reading succeeded, returning coil state, data type: int8.

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

Reading failed, no data received within the timeout period.

```json
{
    "command": "read_multiple_coils",
    "read_state": false
}
```

### Write single coil data`write_single_coil`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `write_single_coil` | `string` |Write single coil data. |
| `port` | `int` |Communication port, 0: controller RS485 port, 1: end interface board RS485 port, 3: controller ModbusTCP port for connecting to external slave devices. |
| `address` | `int` |Coil starting address. |
| `data` | `int` |Data to be written to the coil, data type: int16. |
| `device` | `int` |Peripheral device address. |

- **Code demo**

**Input**

```json
{"command":"write_single_coil","port":0,"address":10,"data":1,"device":2}
```

**Output**

Writing succeeded.

```json
{
    "command": "write_single_coil",
    "write_state": true
}
```

Writing failed, no data received within the timeout period or an error occurred in the command content.

```json
{
    "command": "write_single_coil",
    "write_state": false
}
```

### Write multi-coil data`write_coils`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `write_coils` | `string` |Write multi-coil data. |
| `port` | `int` |Communication port, 0: controller RS485 port, 1: end interface board RS485 port, 3: controller ModbusTCP port for connecting to external slave devices. |
| `address` | `int` |Coil starting address. |
| `num` | `int` |Number of coils to write, with the quantity written each time not exceeding 160. |
| `data` | `int` |The data group to be written to the coils, type: byte. If the number of coils is not greater than 8, the data to be written is one byte; otherwise, it is an array of multiple data.|
| `device` | `int` |Peripheral device address. |

- **Code demo**

**Input**

```json
{"command":"write_coils","port":0,"address":10,"num":16,"data":[15,20],"device":2}
```

**Output**
Writing succeeded.

```json
{
    "command": "write_coils",
    "write_state": true
}
```

Writing failed, no data received within the timeout period or an error occurred in the command content.

```json
{
    "command": "write_coils",
    "write_state": false
}
```

### Read discrete inputs`read_input_status`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `read_input_status` | `string` |Read discrete inputs. |
| `port` | `int` |Communication port, 0: controller RS485 port, 1: end interface board RS485 port, 3: controller ModbusTCP port for connecting to external slave devices. |
| `address` | `int` |Coil starting address. |
| `num` | `int` |Number of data to read. This command can read up to 8 discrete datas once, that is, the returned data will not be longer than one byte. |
| `device` | `int` |Peripheral device address. |

- **Code demo**

**Input**

```json
{
    "command": "read_input_status",
    "port": 0,
    "address": 10,
    "num": 2,
    "device": 2
}
```

**Output**
Reading succeeded, returning discrete magnitude, data type: int8.

```json
{
    "command": "read_input_status",
    "data": 8
}
```

Reading failed, no data received within the timeout period.

```json
{
    "command": "read_input_status",
    "read_state": false
}
```

### Read holding register`read_holding_registers`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `read_holding_registers` | `string` |Read holding register. |
| `port` | `int` |Communication port, 0: controller RS485 port, 1: end interface board RS485 port, 3: controller ModbusTCP port for connecting to external slave devices. |
| `address` | `int` |Data starting address, this command can only read one register at a time, which is 2 bytes of data, and cannot read data from multiple registers at once.|
| `device` | `int` |Peripheral device address. |

- **Code demo**

**Input**

```json
{"command":"read_holding_registers","port":0,"address":10,"device":2}
```

**Output**
Reading succeeded, returning register data, data type: int16.

```json
{
    "command": "read_holding_registers",
    "data": 16
}
```

Reading failed, no data received within the timeout period.

```json
{
    "command": "read_holding_registers",
    "read_state": false
}
```

### Write single register`write_single_register`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `write_single_register` | `string` |Write single register. |
| `port` | `int` |Communication port, 0: controller RS485 port, 1: end interface board RS485 port, 3: controller ModbusTCP port for connecting to external slave devices. |
| `address` | `int` |Register starting address. |
| `data` | `int` |Data to be written to the Register, data type: int16. |
| `device` | `int` |Peripheral device address. |

- **Code demo**

**Input**

```json
{"command":"write_single_register","port":0,"address":10,"data":1000,"device":2}
```

**Output**
Writing succeeded.

```json
{
    "command": "write_single_register",
    "write_state": true
}
```

Writing failed, no data received within the timeout period or an error occurred in the command content.

```json
{
    "command": "write_single_register",
    "write_state": false
}
```

### Write multiple registers`write_registers`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `write_registers` | `string` |Write multiple registers. |
| `port` | `int` |Communication port, 0: controller RS485 port, 1: end interface board RS485 port, 3: controller ModbusTCP port for connecting to external slave devices. |
| `address` | `int` |Coil starting address. |
| `num` | `int` |Number of registers to write. This command can write up to 10 registers once. |
| `data` | `int` |Data to be written to the coil, data type: int16. |
| `device` | `int` |Peripheral device address. |

- **Code demo**

**Input**

```json
{"command":"write_registers","port":0,"address":10,"num":2,"data":[15,20,25,30],"device":2}
```

**Output**
Writing succeeded.

```json
{
    "command": "write_registers",
    "write_state": true
}
```

Writing failed, no data received within the timeout period or an error occurred in the command content.

```json
{
    "command": "write_registers",
    "write_state": false
}
```

### Read multiple holding registers`read_multiple_holding_registers`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `read_multiple_holding_registers` | `string` |Read multiple holding registers. |
| `port` | `int` |Communication port, 0: controller RS485 port, 1: end interface board RS485 port, 3: controller ModbusTCP port for connecting to external slave devices. |
| `address` | `int` |Registers starting address. |
| `num` | `int` |The number of registers to read is 2 < num ≤ 13. This command can read up to 12 registers once, that is, 24 bytes. |
| `device` | `int` |Peripheral device address. |

- **Code demo**

**Input**

```json
{"command":"read_multiple_holding_registers","port":0,"address":0,"num":5,"device":2}
```

**Output**
Reading succeeded, returning register data, data type: int8.

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

Reading failed, no data received within the timeout period.

```json
{
    "command": "read_multiple_holding_registers",
    "read_state": false
}
```

### Read input register`read_input_registers`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `read_input_registers` | `string` |Read input register. |
| `port` | `int` |Communication port, 0: controller RS485 port, 1: end interface board RS485 port, 3: controller ModbusTCP port for connecting to external slave devices. |
| `address` | `int` |Coil starting address. |
| `device` | `int` |Peripheral device address. |

- **Code demo**

**Input**

```json
{"command":"read_input_registers","port":0,"address":10,"device":2}
```

**Output**
Reading succeeded, returning register data, data type: int16.

```json
{
    "command": "read_input_registers",
    "data": 8
}
```

Reading failed, no data received within the timeout period.

```json
{
    "command": "read_input_registers",
    "read_state": false
}
```

### Read multiple input registers`read_multiple_input_registers`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `read_multiple_input_registers` | `string` |Read multiple input registers. |
| `port` | `int` |Communication port, 0: controller RS485 port, 1: end interface board RS485 port, 3: controller ModbusTCP port for connecting to external slave devices. |
| `address` | `int` |Coil starting address. |
| `num` | `int` |The number of registers to read is 2 < num < 13. This command can read up to 12 registers once, that is, 24 bytes. |
| `device` | `int` |Peripheral device address. |

- **Code demo**

**Input**

```json
{"command":"read_multiple_input_registers","port":0,"address":0,"num":5,"device":2}
```

**Output**
Reading succeeded, returning register data, data type: int8.

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

Reading failed, no data received within the timeout period.

```json
{
    "command": "read_multiple_input_registers",
    "read_state": false
}
```
