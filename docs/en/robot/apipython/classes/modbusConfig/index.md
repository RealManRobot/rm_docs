# <p class="hidden">Python: </p>Modbus Configuration `ModbusConfig`

It is used for Modbus configuration. The RealMan robotic arm provides an RS485 communication interface on both the controller and the end interface board. These interfaces can be configured to the standard Modbus RTU mode. In Modbus RTU mode, users can read and write peripherals connected to the port through the interfaces provided. The following is a detailed description of the member functions of Modbus configuration`ModbusConfig`, including the method prototype, parameter description, return value, and usage demo. <br>

::: warning

- The RS485 interface of the controller can be used to directly control the robotic arm when it is not configured to Modbus RTU mode.
- The Modbus RTU mode is incompatible with the robotic arm control mode. To restore the robotic arm control mode, the Modbus RTU mode of the port must be closed.
- After the Modbus RTU mode is closed, the system will automatically switch back to the robotic arm control mode, using the baud rate of 460800BPS, stop bit 1, data bit 8, no parity check.
:::

In addition, the G3 controller also supports modbus-TCP master configuration, allowing users to configure the modbus-TCP master to connect the modbus-TCP slaves of external devices.

## Configure Modbus RTU mode of communication port `rm_set_modbus_mode()`

- **Method prototype:**

```python
rm_set_modbus_mode(self, port: int, baudrate: int, timeout: int) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `port`      | `int` | Communication port<br>0: Controller RS485 port as RTU master<br>1: End interface board RS485 port as RTU master<br>2: Controller RS485 port as RTU slave.                    |
| `baudrate` | `int` | Supporting three common baud rates, namely 9600, 115200, and 460800. |
| `timeout` | `int` | Timeout period, in 100 ms. For all read and write commands to the Modbus device, if no response data is returned within the specified timeout period, a timeout error will be returned. The timeout period cannot be set to 0; if set to 0, the robotic arm will take it as 1 for configuration. |

- **Return value:** <br>
State codes executed by functions:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_modbus_mode(0,115200,2))

arm.rm_delete_robot_arm()
```

## Close Modbus RTU mode of communication port`rm_close_modbus_mode()`

- **Method prototype:**

```python
rm_close_modbus_mode(self, port: int) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `port`      | `int` | Communication port<br>0: Controller RS485 port as RTU master<br>1: End interface board RS485 port as RTU master<br>2: Controller RS485 port as RTU slave                    |

- **Return value:** <br>
State codes executed by functions:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_close_modbus_mode(2))

arm.rm_delete_robot_arm()
```

## Configure connection`rm_set_modbustcp_mode()`

- **Method prototype:**

```python
rm_set_modbustcp_mode(self, ip: str, port: int, timeout: int) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `ip`      | `str` | Slave IP address                   |
| `port`      | `int` | Port number                   |
| `timeout`      | `int` | Timeout period, in ms                    |

- **Return value:** <br>
State codes executed by functions:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_modbustcp_mode("192.168.1.120", 502, 2000))

arm.rm_delete_robot_arm()
```

## Close Modbus RTU mode of communication port `rm_close_modbustcp_mode()`

- **Method prototype:**

```python
rm_close_modbustcp_mode(self) -> int:
```

- **Return value:** <br>
State codes executed by functions

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_close_modbustcp_mode())

arm.rm_delete_robot_arm()
```

## Read coils `rm_read_coils()`

- **Method prototype:**

```python
rm_read_coils(self, read_params: rm_peripheral_read_write_params_t) -> tuple[int, int]:
```

*Jump to [rm_peripheral_read_write_params_t](../../struct/peripheralReadWriteParams/index.md) for details of the structure.*<br>

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `read_params`      | `rm_peripheral_read_write_params_t` | Parameter structure reading coils. This command can read up to 8 coils once, that is, the returned data will not be longer than one byte     |

- **Return value:** <br>
tuple[int,int]: a tuple containing two elements. <br>

1. int: state codes executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. int: Coil state

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   -  |    `int`   |    Return the coil state, data type: int8    |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Configure controller RS485 port as RTU master
print(arm.rm_set_modbus_mode(0,115200,2))

# Read 2 data through controller RS485 port (starting address: 10, peripheral device address: 2)
read_params = rm_peripheral_read_write_params_t(0, 10, 2, 2)
print(arm.rm_read_coils(read_params))

arm.rm_delete_robot_arm()
```

## Read discrete inputs `rm_read_input_status()`

- **Method prototype:**

```python
rm_read_input_status(self, read_params: rm_peripheral_read_write_params_t) -> tuple[int, int]:
```

*Jump to [rm_peripheral_read_write_params_t](../../struct/peripheralReadWriteParams/index.md) for details of the structure.*

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `read_params`      | `rm_peripheral_read_write_params_t` | Parameter structure reading discrete inputs. This command can read up to 8 discrete magnitudes once, that is, the returned data will not be longer than one byte   |

- **Return value:** <br>
tuple[int,int]: a tuple containing two elements. <br>

1. int: state codes executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. int: Register data

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   -  |    `int`   |    Return the discrete magnitude, data type: int8    |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Configure controller RS485 port as RTU master
print(arm.rm_set_modbus_mode(0,115200,2))

# Read 3 data through controller RS485 port (starting address: 10, peripheral device address: 2)
read_params = rm_peripheral_read_write_params_t(0, 10, 2, 3)
print(arm.rm_read_input_status(read_params))

arm.rm_delete_robot_arm()
```

## Read holding register `rm_read_holding_registers()`

- **Method prototype:**

```python
rm_read_holding_registers(self, read_params: rm_peripheral_read_write_params_t) -> tuple[int, int]:
```

*Jump to [rm_peripheral_read_write_params_t](../../struct/peripheralReadWriteParams/index.md) for details of the structure.*

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
|`read_params`|`rm_peripheral_read_write_params_t`| Parameter structure reading holding register. This command can read only one register once, that is, 2-byte data, instead of multiple registers. The member num of this structure does not need to be set   |

- **Return value:** <br>
tuple[int,int]: a tuple containing two elements. <br>

1. int: state codes executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. int: Register data

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   -  |    `int`   |    Return the register data, data type: int8    |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Configure controller RS485 port as RTU master
print(arm.rm_set_modbus_mode(0,115200,2))

# Read data through controller RS485 port (starting address: 10, peripheral device address: 2)
param = rm_peripheral_read_write_params_t(0, 10, 2)
print("读保持寄存器: ", arm.rm_read_holding_registers(param))

arm.rm_delete_robot_arm()
```

## Read input register `rm_read_input_registers()`

- **Method prototype:**

```python
rm_read_input_registers(self, read_params: rm_peripheral_read_write_params_t) -> tuple[int, int]:
```

*Jump to [rm_peripheral_read_write_params_t](../../struct/peripheralReadWriteParams/index.md) for details of the structure.*

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
|`read_params`|`rm_peripheral_read_write_params_t`|Parameter structure reading input register. This command can read only one register once, that is, 2-byte data, instead of multiple registers. The member num of this structure does not need to be set   |

- **Return value:** <br>
`tuple[int,int]`: a tuple containing two elements. <br>

1. int: state codes executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

1. int: Register data

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   -  |    `int`   |    Return the register data, data type: int16    |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Configure controller RS485 port as RTU master
print(arm.rm_set_modbus_mode(0,115200,2))

# Read data through controller RS485 port (starting address: 10, peripheral device address: 2)
param = rm_peripheral_read_write_params_t(0, 10, 2)
print("Read holding registers: ", arm.rm_read_input_registers(param))

arm.rm_delete_robot_arm()
```

## Write single coil data `rm_write_single_coil()`

- **Method prototype:**

```python
rm_write_single_coil(self, write_params: rm_peripheral_read_write_params_t, data: int) -> int:
```

*Jump to [rm_peripheral_read_write_params_t](../../struct/peripheralReadWriteParams/index.md) for details of the structure.*

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
|`write_params`|`/` |Parameter structure writing single coil data. The member num of this structure does not need to be set. |
|   `data`    | `int16` |  Data to be written to the coil.  |

- **Return value:** <br>
State codes executed by functions:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Configure controller RS485 port as RTU master
print(arm.rm_set_modbus_mode(0,115200,2))

# Write single coil data through controller RS485 port (starting address: 20, peripheral device address: 2)
write_params = rm_peripheral_read_write_params_t(0, 20, 2)
print("Write single coil data: ", arm.rm_write_single_coil(write_params, 1))

arm.rm_delete_robot_arm()
```

## Write single register `rm_write_single_register()`

- **Method prototype:**

```python
rm_write_single_register(self, write_params: rm_peripheral_read_write_params_t, data: int) -> int:
```

*Jump to [rm_peripheral_read_write_params_t](../../struct/peripheralReadWriteParams/index.md) for details of the structure.*

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
|`read_params`|`rm_peripheral_read_write_params_t`|Parameter structure writing single register data. The member num of this structure does not need to be set|
| `data`      | `int` |  Data to be written to the register, data type: int16   |

- **Return value:** <br>
State codes executed by functions:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Configure controller RS485 port as RTU master
print(arm.rm_set_modbus_mode(0,115200,2))

# Write 100 data through controller RS485 port (starting address: 10, peripheral device address: 2)
write_params = rm_peripheral_read_write_params_t(0, 10, 2)
print(arm.rm_write_single_register(write_params, 100))

arm.rm_delete_robot_arm()
```

## Write multiple registers `rm_write_registers()`

- **Method prototype:**

```python
rm_write_registers(self, write_params: rm_peripheral_read_write_params_t, data: list[int]) -> int:
```

*Jump to [rm_peripheral_read_write_params_t](../../struct/peripheralReadWriteParams/index.md) for details of the structure.*

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `read_params`      | `rm_peripheral_read_write_params_t` |  Parameter structure writing multiple registers. This command can write up to 10 registers once, that is, the member num of this structure ≤ 10.  |
| `data`      | `list[int]` |  Array of data to be written to the register, type: byte.  |

- **Return value:** <br>
State codes executed by functions:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Configure controller RS485 port as RTU master
print(arm.rm_set_modbus_mode(0,115200,2))

# Write data through controller RS485 port (starting address: 10, peripheral device address: 2, number of registers: 2)
write_params = rm_peripheral_read_write_params_t(0, 10, 2, 2)
print(arm.rm_write_registers(write_params), [15, 20, 25, 30])

arm.rm_delete_robot_arm()
```

## Write multi-coil data `rm_write_coils()`

- **Method prototype:**

```python
rm_write_coils(self, write_params: rm_peripheral_read_write_params_t, data: list[int]) -> int:
```

*Jump to [rm_peripheral_read_write_params_t](../../struct/peripheralReadWriteParams/index.md) for details of the structure.*

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `write_params`      | `rm_peripheral_read_write_params_t` |  Parameter structure writing multiple coils. This command can write up to 160 coils once, that is, the member num of this structure ≤ 160.  |
| `data`      | `list[int]` |  Data array to write to coil, data type: byte.  |

- **Return value:** <br>
State codes executed by functions:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Configure controller RS485 port as RTU master
print(arm.rm_set_modbus_mode(0,115200,2))

# Write data through controller RS485 port (starting address: 10, peripheral device address: 2, number of coils: 16)
write_params = rm_peripheral_read_write_params_t(0, 10, 2, 16)
print(arm.rm_write_coils(write_params, [15, 20]))

arm.rm_delete_robot_arm()
```

## Read multiple coils `rm_read_multiple_coils()`

- **Method prototype:**

```python
rm_read_multiple_coils(self, read_params: rm_peripheral_read_write_params_t) -> tuple[int, list[int]]:
```

*Jump to [rm_peripheral_read_write_params_t](../../struct/peripheralReadWriteParams/index.md) for details of the structure.*

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `read_params`      | `rm_peripheral_read_write_params_t` | Parameter structure reading multiple coils. The number of coils to read is 8 < num ≤ 120. This command can read up to 120 coils once, that is, 15 bytes   |

- **Return value:** <br>
tuple[int,list[int]]: a tuple containing two elements. <br>

1. int: state codes executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. int: List of coil states

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   -  |    `int`   |    Return the list of coil states, data type: int8    |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Configure controller RS485 port as RTU master
print(arm.rm_set_modbus_mode(0,115200,2))

# Read data through controller RS485 port (starting address: 10, peripheral device address: 2, number of coils: 24)
param = rm_peripheral_read_write_params_t(0, 10, 2, 24)
print(arm.rm_read_multiple_coils(param))

arm.rm_delete_robot_arm()
```

## Read multiple holding registers `rm_read_multiple_holding_registers()`

- **Method prototype:**

```python
rm_read_multiple_holding_registers(self, read_params: rm_peripheral_read_write_params_t) -> tuple[int, list[int]]:
```

*Jump to [rm_peripheral_read_write_params_t](../../struct/peripheralReadWriteParams/index.md) for details of the structure.*

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `read_params`      | `rm_peripheral_read_write_params_t` | Parameter structure reading multiple holding registers. The number of registers to read is 2 < num < 13. This command can read up to 12 registers once, that is, 24 bytes   |

- **Return value:** <br>
tuple[int,list[int]]: a tuple containing two elements. <br>

1. int: state codes executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. int: List of register data

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   -  |    `int`   |    Return the list of register data, data type: int8    |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Configure controller RS485 port as RTU master
print(arm.rm_set_modbus_mode(0,115200,2))

# Read data through controller RS485 port (starting address: 10, peripheral device address: 2, number of registers: 5)
param = rm_peripheral_read_write_params_t(0, 10, 2, 5)
print(arm.rm_read_multiple_holding_registers(param))

arm.rm_delete_robot_arm()
```

## Read multiple input registers `rm_read_multiple_input_registers()`

- **Method prototype:**

```python
rm_read_multiple_input_registers(self, read_params: rm_peripheral_read_write_params_t) -> tuple[int, list[int]]:
```

*Jump to [rm_peripheral_read_write_params_t](../../struct/peripheralReadWriteParams/index.md) for details of the structure.*

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `read_params`      | `rm_peripheral_read_write_params_t` | Parameter structure reading multiple input registers. The number of registers to read is 2 < num < 13. This command can read up to 12 registers once, that is, 24 bytes   |

- **Return value:** <br>
tuple[int,list[int]]: a tuple containing two elements. <br>

1. int: state codes executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. int: List of register data

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   -  |    `int`   |    Return the list of register data, data type: int8    |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Configure controller RS485 port as RTU master
print(arm.rm_set_modbus_mode(0,115200,2))

# Read data through controller RS485 port (starting address: 10, peripheral device address: 2, number of registers: 5)
param = rm_peripheral_read_write_params_t(0, 10, 2, 5)
print(arm.rm_read_multiple_input_registers(param))

arm.rm_delete_robot_arm()
```
