# <p class="hidden">C and C++: </p>Modbus Configuration `modbusConfig`

The RealMan robotic arm provides an RS485 communication interface respectively on the controller and the end interface board. These interfaces can be configured to the standard Modbus RTU mode. In Modbus RTU mode, users can read and write peripherals connected to the port through the interfaces provided.

::: warning

- The RS485 interface of the controller can be used to directly control the robotic arm when it is not configured to Modbus RTU mode.
- The Modbus RTU mode is incompatible with the robotic arm control mode. To restore the robotic arm control mode, the Modbus RTU mode of the port must be closed.
- After the Modbus RTU mode is closed, the system will automatically switch back to the robotic arm control mode, using the baud rate of 460800BPS, stop bit 1, data bit 8, no parity check.
- In addition, the Gen 3 controller also supports modbus-TCP master configuration, allowing users to configure the modbus-TCP master to connect the modbus-TCP slaves of external devices.
:::

## Configure Modbus RTU mode of communication port `rm_set_modbus_mode()`

Configure the ModbusRTU mode of communication port. After the robotic arm is started, this command must be initiated first for any operation on the communication port; otherwise, error information will be returned. In addition, the robotic arm will save users' configuration mode. After the robotic arm is restarted, it will automatically restore the mode configured by users before power-off.

- **Method prototype:**

```C
int rm_set_modbus_mode(rm_robot_handle * handle,int port,int baudrate,int timeout)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `port`  |    Input    |    Communication port, <br>0-Controller RS485 port as RTU master<br>1-End interface board RS485 port as RTU master<br>2-Controller RS485 port as RTU slave.   |
|  `baudrate`  |    Input    |    Baud rate, supporting three common baud rates, namely 9600, 115200, and 460800.   |
|   `timeout`  |    Input    |    Timeout period, in 100 ms. <br>For all read and write commands to the Modbus device, if no response data is returned within the specified timeout period, a timeout error will be returned. <br>The timeout period cannot be set to 0; if set to 0, the robotic arm will take it as 1 for configuration.   |

::: tip
Other configurations are as follows by default: data bit - 8, stop bit - 1, parity check - no.
:::

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Configure the communication port as RS485 port of end interface board, the baud rate as 115200, and the timeout period as 200 ms
int port = 1;
int baudrate = 115200;
int timeout = 2;
ret=rm_set_modbus_mode(robot_handle,port,baudrate,timeout);
```

## Close Modbus RTU mode of communication port `rm_close_modbus_mode()`

- **Method prototype:**

```C
int rm_close_modbus_mode(rm_robot_handle * handle,int port)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `port`  |    Input    |    Communication port, 0-Controller RS485 port as RTU master, 1-End interface board RS485 port as RTU master, 2-Controller RS485 port as RTU slave.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Close RS485 port of end interface board
int port = 1;
ret = Close_Modbus_Mode (robot_handle,port);
```

## Configure to connect ModbusTCP slave `rm_set_modbustcp_mode()`

- **Method prototype:**

```C
int rm_set_modbustcp_mode(rm_robot_handle * handle,const char * ip,int port,int timeout)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `ip`  |    Input    |    Robotic arm handle.   |
|  `port`  |    Input    |    Port No.   |
|   `timeout`  |    Input    |    Timeout period, in ms.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
ret = rm_set_modbustcp_mode(robot_handle, (char*)"192.168.1.120", 502, 2000);
```

## Close Modbus RTU mode of communication port `rm_close_modbustcp_mode()`

- **Method prototype:**

```C
int rm_close_modbustcp_mode(rm_robot_handle * handle)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Close ModbusTCP slave
ret = rm_close_modbustcp_mode(robot_handle);
```

## Read coils `rm_read_coils()`

- **Method prototype:**

```C
int rm_read_coils(rm_robot_handle * handle,rm_peripheral_read_write_params_t params,int * data)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_peripheral_read_write_params_t](../../struct/peripheralReadWriteParams/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `params`  |    Input    |    Parameter structure reading coils. This command can read up to 8 coils once, that is, the returned data will not be longer than one byte.   |
|   `data`  |    Output    |    Return coil state, data type: int8.   |

- **Return value:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   0  |    `int`    |    Success.   |
|   1  |    `int`    |    The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.   |
|  -1  |    `int`    |    The data transmission fails, indicating that a problem occurs during the communication.   |
|  -2  |    `int`    |    The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.   |
|  -3  |    `int`    |    The return value parse fails, indicating that the received data format is incorrect or incomplete.   |

- **Usage demo**
  
```C
rm_peripheral_read_write_params_t params_coils;
int data;
params_coils.port = 0;
params_coils.address = 0;
params_coils.num = 2;
params_coils.device = 2;
ret = rm_read_coils(robot_handle, params_coils,&data);
printf("read coils result : %d\n", ret);
printf("read coils data : %d\n", data);
```

## Read discrete inputs `rm_read_input_status()`

- **Method prototype:**

```C
int rm_read_input_status(rm_robot_handle * handle,rm_peripheral_read_write_params_t params,int * data)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_peripheral_read_write_params_t](../../struct/peripheralReadWriteParams/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `params`  |    Input    |    Parameter structure reading discrete inputs. This command can read up to 8 discrete magnitudes once, <br>that is, the returned data will not be longer than one byte.   |
|   `data`  |    Output    |    Return discrete magnitudes, data type: int8.   |

- **Return value:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   0  |    `int`    |    Success.   |
|   1  |    `int`    |    The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.   |
|  -1  |    `int`    |    The data transmission fails, indicating that a problem occurs during the communication.   |
|  -2  |    `int`    |    The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.   |
|  -3  |    `int`    |    The return value parse fails, indicating that the received data format is incorrect or incomplete.   |

- **Usage demo**
  
```C
rm_peripheral_read_write_params_t params_coils;
int data;
params_coils.port = 0;
params_coils.address = 0;
params_coils.num = 2;
params_coils.device = 2;
ret = rm_read_input_status(robot_handle, params_coils, &data);
printf("read input status result : %d\n", ret);
printf("read input status data : %d\n", data);
```

## Read holding register `rm_read_holding_registers()`

- **Method prototype:**

```C
int rm_read_holding_registers(rm_robot_handle * handle,rm_peripheral_read_write_params_t params,int * data)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_peripheral_read_write_params_t](../../struct/peripheralReadWriteParams/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `params`  |    Input    |    Parameter structure reading holding register. This command can read only one register once, <br>that is, 2-byte data, instead of multiple registers.<br>The member num of this structure does not need to be set.   |
|   `data`  |    Output    |    Return register data, data type: int16.   |

- **Return value:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   0  |    `int`    |    Success.   |
|   1  |    `int`    |    The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.   |
|  -1  |    `int`    |    The data transmission fails, indicating that a problem occurs during the communication.   |
|  -2  |    `int`    |    The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.   |
|  -3  |    `int`    |    The return value parse fails, indicating that the received data format is incorrect or incomplete.   |

- **Usage demo**
  
```C
rm_peripheral_read_write_params_t params_coils;
int data;
params_coils.port = 0;
params_coils.address = 0;
params_coils.device = 2;
ret = rm_read_holding_registers(robot_handle,params_coils, &data);
printf("read coils result : %d\n", ret);
printf("read coils data : %d\n", data);
```

## Read input register `rm_read_input_registers()`

- **Method prototype:**

```C
int rm_read_input_registers(rm_robot_handle * handle,rm_peripheral_read_write_params_t params,int * data)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_peripheral_read_write_params_t](../../struct/peripheralReadWriteParams/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `params`  |    Input    |    Parameter structure reading input register. This command can read only one register once, <br>that is, 2-byte data, instead of multiple registers.<br>The member num of this structure does not need to be set.   |
|   `data`  |    Output    |    Return register data, data type: int16.   |

- **Return value:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   0  |    `int`    |    Success.   |
|   1  |    `int`    |    The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.   |
|  -1  |    `int`    |    The data transmission fails, indicating that a problem occurs during the communication.   |
|  -2  |    `int`    |    The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.   |
|  -3  |    `int`    |    The return value parse fails, indicating that the received data format is incorrect or incomplete.   |

- **Usage demo**
  
```C
rm_peripheral_read_write_params_t params_coils;
int data;
params_coils.port = 0;
params_coils.address = 0;
params_coils.device = 2;
ret = rm_read_input_registers(robot_handle,params_coils, &data);
printf("read input registers result : %d\n", ret);
printf("read input registers data : %d\n", data);
```

## Write single coil data `rm_write_single_coil()`

- **Method prototype:**

```C
int rm_write_single_coil(rm_robot_handle * handle,rm_peripheral_read_write_params_t params,int data)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_peripheral_read_write_params_t](../../struct/peripheralReadWriteParams/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `params`  |    Input    |    Parameter structure writing single coil data. The member num of this structure does not need to be set.   |
|   `data`  |    Input    |    Data to write to coil, data type: int16.   |

- **Return value:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   0  |    `int`    |    Success.   |
|   1  |    `int`    |    The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.   |
|  -1  |    `int`    |    The data transmission fails, indicating that a problem occurs during the communication.   |
|  -2  |    `int`    |    The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.   |
|  -3  |    `int`    |    The return value parse fails, indicating that the received data format is incorrect or incomplete.   |

- **Usage demo**
  
```C
rm_peripheral_read_write_params_t params_coils;
int data = 1000;
params_coils.port = 0;
params_coils.address = 0;
params_coils.device = 2;
ret = rm_write_single_coil(robot_handle,params_coils, data);
printf("write single coil result : %d\n", ret);
```

## Write single register `rm_write_single_register()`

- **Method prototype:**

```C
int rm_write_single_register(rm_robot_handle * handle,rm_peripheral_read_write_params_t params,int data)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_peripheral_read_write_params_t](../../struct/peripheralReadWriteParams/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `params`  |    Input    |    Parameter structure writing single coil data. The member num of this structure does not need to be set.   |
|   `data`  |    Input    |    Data to write to register, data type: int16.   |

- **Return value:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   0  |    `int`    |    Success.   |
|   1  |    `int`    |    The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.   |
|  -1  |    `int`    |    The data transmission fails, indicating that a problem occurs during the communication.   |
|  -2  |    `int`    |    The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.   |
|  -3  |    `int`    |    The return value parse fails, indicating that the received data format is incorrect or incomplete.   |

- **Usage demo**
  
```C
rm_peripheral_read_write_params_t params_coils;
int data = 1000;
params_coils.port = 0;
params_coils.address = 0;
params_coils.device = 2;
ret = rm_write_single_register(robot_handle,params_coils, data);
printf("write single register result : %d\n", ret);
```

## Write multiple registers `rm_write_registers()`

- **Method prototype:**

```C
int rm_write_registers(rm_robot_handle * handle,rm_peripheral_read_write_params_t params,int * data)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_peripheral_read_write_params_t](../../struct/peripheralReadWriteParams/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `params`  |    Input    |    Parameter structure writing multiple registers. This command can write up to 10 registers once, that is, the member num of this structure ≤ 10.   |
|   `data`  |    Input    |    Data array to write to register, data type: byte.   |

- **Return value:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   0  |    `int`    |    Success.   |
|   1  |    `int`    |    The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.   |
|  -1  |    `int`    |    The data transmission fails, indicating that a problem occurs during the communication.   |
|  -2  |    `int`    |    The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.   |
|  -3  |    `int`    |    The return value parse fails, indicating that the received data format is incorrect or incomplete.   |

- **Usage demo**
  
```C
rm_peripheral_read_write_params_t params_coils;
int data[] =  {15, 20, 25, 30};
params_coils.port = 0;
params_coils.address = 0;
params_coils.device = 2;
params_coils.num = 2;
ret = rm_write_registers(robot_handle,params_coils, data);
printf("write registers result : %d\n", ret);
```

## Write multi-coil data `rm_write_coils()`

- **Method prototype:**

```C
int rm_write_coils(rm_robot_handle * handle,rm_peripheral_read_write_params_t params,int * data)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_peripheral_read_write_params_t](../../struct/peripheralReadWriteParams/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `params`  |    Input    |    Parameter structure writing multiple coils. This command can write up to 160 coils once, that is, the member num of this structure ≤ 160.   |
|   `data`  |    Input    |    Data array to write to coil, data type: byte.   |

- **Return value:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   0  |    `int`    |    Success.   |
|   1  |    `int`    |    The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.   |
|  -1  |    `int`    |    The data transmission fails, indicating that a problem occurs during the communication.   |
|  -2  |    `int`    |    The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.   |
|  -3  |    `int`    |    The return value parse fails, indicating that the received data format is incorrect or incomplete.   |

- **Usage demo**
  
```C
rm_peripheral_read_write_params_t params_coils;
int data[] =  {15, 20};
params_coils.port = 0;
params_coils.address = 0;
params_coils.device = 2;
params_coils.num = 16;
ret = rm_write_coils(robot_handle,params_coils, data);
printf("write coils result : %d\n", ret);
```

## Read multiple coils `rm_read_multiple_coils()`

- **Method prototype:**

```C
int rm_read_multiple_coils(rm_robot_handle * handle,rm_peripheral_read_write_params_t params,int * data)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_peripheral_read_write_params_t](../../struct/peripheralReadWriteParams/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `params`  |    Input    |    Parameter structure reading multiple coils. The number of coils to read is 8 < num ≤ 120. <br>This command can read up to 120 coils once, that is, 15 bytes.   |
|   `data`  |    Output    |    Return coil state, data type: int8.   |

- **Return value:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   0  |    `int`    |    Success.   |
|   1  |    `int`    |    The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.   |
|  -1  |    `int`    |    The data transmission fails, indicating that a problem occurs during the communication.   |
|  -2  |    `int`    |    The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.   |
|  -3  |    `int`    |    The return value parse fails, indicating that the received data format is incorrect or incomplete.   |

- **Usage demo**
  
```C
rm_peripheral_read_write_params_t params_coils;
params_coils.num = 24;
params_coils.port = 0;
params_coils.address = 0;
params_coils.device = 2;
int data_m[3];
ret = rm_read_multiple_coils(robot_handle, params_coils, data_m);
printf("read rm_read_multiple_coils result : %d\n", ret);
for(int i = 0; i < params_coils.num/8; i++)
{
    printf("read multiple coils data : %d\n", data_m[i]);
}
```

## Read multiple holding registers `rm_read_multiple_holding_registers()`

- **Method prototype:**

```C
int rm_read_multiple_holding_registers(rm_robot_handle * handle,rm_peripheral_read_write_params_t params,int * data)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_peripheral_read_write_params_t](../../struct/peripheralReadWriteParams/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `params`  |    Input    |    Parameter structure reading multiple holding registers. The number of registers to read is 2 < num < 13.<br>This command can read up to 12 registers once, that is, 24 bytes.   |
|   `data`  |    Output    |    Return register data, data type: int8.   |

- **Return value:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   0  |    `int`    |    Success.   |
|   1  |    `int`    |    The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.   |
|  -1  |    `int`    |    The data transmission fails, indicating that a problem occurs during the communication.   |
|  -2  |    `int`    |    The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.   |
|  -3  |    `int`    |    The return value parse fails, indicating that the received data format is incorrect or incomplete.   |

- **Usage demo**
  
```C
rm_peripheral_read_write_params_t params_coils;
params_coils.port = 0;
params_coils.address = 0;
params_coils.device = 2;
params_coils.num = 3;
int data_mul[6];
ret = rm_read_multiple_holding_registers(robot_handle, params_coils, data_mul);
printf("read rm_read_multiple_holding_registers result : %d\n", ret);
for(int i = 0; i < params_coils.num*2; i++)
{
    printf("read rm_read_multiple_holding_registers data : %d\n", data_mul[i]);
}
```

## Read multiple input registers `rm_read_multiple_input_registers()`

- **Method prototype:**

```C
int rm_read_multiple_input_registers(rm_robot_handle * handle,rm_peripheral_read_write_params_t params,int * data)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_peripheral_read_write_params_t](../../struct/peripheralReadWriteParams/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `params`  |    Input    |    Parameter structure reading multiple input registers. The number of registers to read is 2 < num < 13.<br>This command can read up to 12 registers once, that is, 24 bytes.   |
|   `data`  |    Output    |    Return register data, data type: int8.   |

- **Return value:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   0  |    `int`    |    Success.   |
|   1  |    `int`    |    The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.   |
|  -1  |    `int`    |    The data transmission fails, indicating that a problem occurs during the communication.   |
|  -2  |    `int`    |    The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.   |
|  -3  |    `int`    |    The return value parse fails, indicating that the received data format is incorrect or incomplete.   |

- **Usage demo**
  
```C
rm_peripheral_read_write_params_t params_coils;
params_coils.port = 0;
params_coils.address = 0;
params_coils.device = 2;
params_coils.num = 3;
int data_mul[6];
ret = rm_read_multiple_input_registers(robot_handle, params_coils, data_mul);
printf("rm_read_multiple_input_registers result : %d\n", ret);
for(int i = 0; i < params_coils.num*2; i++)
{
    printf("rm_read_multiple_input_registers data : %d\n", data_mul[i]);
}
```
