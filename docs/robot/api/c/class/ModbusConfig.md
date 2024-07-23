# Modbus 配置

睿尔曼机械臂在控制器和末端接口板上各提供一个RS485通讯接口，可通过本接口配置为标准的Modbus RTU模式。在Modbus RTU模式下，用户可通过提供的接口对连接在端口上的外设进行读写操作。

>注意：
> - 控制器的RS485接口在未配置为Modbus RTU模式时，可用于直接控制机械臂。
> - Modbus RTU模式与机械臂控制模式不兼容。若需恢复机械臂控制模式，必须关闭该端口的Modbus RTU模式。
> - 关闭Modbus RTU模式后，系统将自动切换回机械臂控制模式，使用波特率460800BPS，停止位1，数据位8，无校验。
> - 此外，I系列控制器还支持modbus-TCP主站配置，允许用户配置使用modbus-TCP主站，以连接外部设备的modbus-TCP从站。

## 配置通讯端口ModbusRTU模式`rm_set_modbus_mode()`

>配置通讯端口ModbusRTU模式，机械臂启动后，要对通讯端口进行任何操作，必须先启动该指令，否则会返回报错信息。 另外，机械臂会对用户的配置方式进行保存，机械臂重启后会自动恢复到用户断电之前配置的模式。

- **方法原型：**

```C
int rm_set_modbus_mode(rm_robot_handle * handle,int port,int baudrate,int timeout)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  port  |    输入参数    |    通讯端口，0-控制器RS485端口为RTU主站，1-末端接口板RS485接口为RTU主站，2-控制器RS485端口为RTU从站。    |
|  baudrate  |    输入参数    |    波特率，支持 9600,115200,460800 三种常见波特率。    |
|   timeout  |    输入参数    |    超时时间，单位百毫秒。对Modbus设备所有的读写指令，在规定的超时时间内未返回响应数据，则返回超时报错提醒。超时时间不能为0，若设置为0，则机械臂按1进行配置。    |

>注解：其他配置默认为：数据位-8，停止位-1，奇偶校验-无。

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
```C
//配置通讯端口为末端接口板RS485端口，波特率配置115200，超时时间2百毫秒
int port = 1;
int baudrate = 115200;
int timeout = 2;
ret=rm_set_modbus_mode(robot_handle,port,baudrate,timeout);
```

## 关闭通讯端口Modbus RTU模式`rm_close_modbus_mode()`

- **方法原型：**

```C
int rm_close_modbus_mode(rm_robot_handle * handle,int port)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  port  |    输入参数    |    通讯端口，0-控制器RS485端口为RTU主站，1-末端接口板RS485接口为RTU主站，2-控制器RS485端口为RTU从站。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
```C
//关闭末端接口板RS485端口
int port = 1;
ret = Close_Modbus_Mode (robot_handle,port);
```

## 配置连接ModbusTCP从站`rm_set_modbustcp_mode()`

- **方法原型：**

```C
int rm_set_modbustcp_mode(rm_robot_handle * handle,const char * ip,int port,int timeout)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   ip  |    输入参数    |    机械臂句柄。    |
|  port  |    输入参数    |    端口号。    |
|  timeout  |    输入参数    |    超时时间，单位秒。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
```C
ret = rm_set_modbustcp_mode(robot_handle, (char*)"192.168.1.120", 502, 2000);
```

## 关闭通讯端口ModbusRTU模式`rm_close_modbustcp_mode()`

- **方法原型：**

```C
int rm_close_modbustcp_mode(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
```C
//关闭ModbusTCP 从站
ret = rm_close_modbustcp_mode(robot_handle);
```

## 读线圈`rm_read_coils()`

- **方法原型：**

```C
int rm_read_coils(rm_robot_handle * handle,rm_peripheral_read_write_params_t params,int * data)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_peripheral_read_write_params_t](../struct/rm_peripheral_read_write_params_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   params  |    输入参数    |    线圈读取参数结构体，该指令最多一次性支持读 8 个线圈数据，即返回的数据不会超过一个字节。    |
|   data  |    输出参数    |    返回线圈状态，数据类型：int8。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
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

## 读离散量输入`rm_read_input_status()`

- **方法原型：**

```C
int rm_read_input_status(rm_robot_handle * handle,rm_peripheral_read_write_params_t params,int * data)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_peripheral_read_write_params_t](../struct/peripheralReadWriteParams)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   params  |    输入参数    |    离散量输入读取参数结构体，该指令最多一次性支持读 8 个离散量数据，即返回的数据不会超过一个字节。    |
|   data  |    输出参数    |    返回离散量，数据类型：int8。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
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

## 读保持寄存器`rm_read_holding_registers()`

- **方法原型：**

```C
int rm_read_holding_registers(rm_robot_handle * handle,rm_peripheral_read_write_params_t params,int * data)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_peripheral_read_write_params_t](../struct/peripheralReadWriteParams)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   params  |    输入参数    |    保持寄存器数据读取参数结构体，该指令每次只能读 1 个寄存器，即 2 个字节的数据，不可一次性读取多个寄存器数据，该结构体成员num无需设置。    |
|   data  |    输出参数    |    返回寄存器数据，数据类型：int16。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
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

## 读输入寄存器`rm_read_input_registers()`

- **方法原型：**

```C
int rm_read_input_registers(rm_robot_handle * handle,rm_peripheral_read_write_params_t params,int * data)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_peripheral_read_write_params_t](../struct/peripheralReadWriteParams)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   params  |    输入参数    |    输入寄存器数据读取参数结构体，该指令每次只能读 1 个寄存器，即 2 个字节的数据，不可一次性读取多个寄存器数据，该结构体成员num无需设置。    |
|   data  |    输出参数    |    返回寄存器数据，数据类型：int16。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
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

## 写单圈数据`rm_write_single_coil()`

- **方法原型：**

```C
int rm_write_single_coil(rm_robot_handle * handle,rm_peripheral_read_write_params_t params,int data)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_peripheral_read_write_params_t](../struct/rm_peripheral_read_write_params_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   params  |    输入参数    |    单圈数据写入参数结构体，该结构体成员num无需设置。    |
|   data  |    输入参数    |    要写入线圈的数据，数据类型：int16。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
```C
rm_peripheral_read_write_params_t params_coils;
int data = 1000;
params_coils.port = 0;
params_coils.address = 0;
params_coils.device = 2;
ret = rm_write_single_coil(robot_handle,params_coils, data);
printf("write single coil result : %d\n", ret);
```

## 写单个寄存器`rm_write_single_register()`

- **方法原型：**

```C
int rm_write_single_register(rm_robot_handle * handle,rm_peripheral_read_write_params_t params,int data)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_peripheral_read_write_params_t](../struct/rm_peripheral_read_write_params_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   params  |    输入参数    |    单圈数据写入参数结构体，该结构体成员num无需设置。    |
|   data  |    输入参数    |    要写入寄存器的数据，类型：int16。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
```C
rm_peripheral_read_write_params_t params_coils;
int data = 1000;
params_coils.port = 0;
params_coils.address = 0;
params_coils.device = 2;
ret = rm_write_single_register(robot_handle,params_coils, data);
printf("write single register result : %d\n", ret);
```

## 写多个寄存器`rm_write_registers()`

- **方法原型：**

```C
int rm_write_registers(rm_robot_handle * handle,rm_peripheral_read_write_params_t params,int * data)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_peripheral_read_write_params_t](../struct/rm_peripheral_read_write_params_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   params  |    输入参数    |    多个寄存器数据写入参数结构体。其中寄存器每次写的数量不超过10个，即该结构体成员num<=10。    |
|   data  |    输入参数    |    要写入寄存器的数据数组，类型：byte。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
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

## 写多圈数据`rm_write_coils()`

- **方法原型：**

```C
int rm_write_coils(rm_robot_handle * handle,rm_peripheral_read_write_params_t params,int * data)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_peripheral_read_write_params_t](../struct/rm_peripheral_read_write_params_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   params  |    输入参数    |    多圈数据写入参数结构体。每次写的数量不超过 160 个，即该结构体成员num<=160。    |
|   data  |    输入参数    |    要写入线圈的数据数组，类型：byte。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
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

## 读多圈数据`rm_read_multiple_coils()`

- **方法原型：**

```C
int rm_read_multiple_coils(rm_robot_handle * handle,rm_peripheral_read_write_params_t params,int * data)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_peripheral_read_write_params_t](../struct/rm_peripheral_read_write_params_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   params  |    输入参数    |    多圈数据读取参数结构体，要读的线圈的数量 8< num <= 120，该指令最多一次性支持读 120 个线圈数据， 即 15 个 byte。    |
|   data  |    输出参数    |    返回线圈状态，数据类型：int8。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
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

## 读多个保存寄存器`rm_read_multiple_holding_registers()`

- **方法原型：**

```C
int rm_read_multiple_holding_registers(rm_robot_handle * handle,rm_peripheral_read_write_params_t params,int * data)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_peripheral_read_write_params_t](../struct/rm_peripheral_read_write_params_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   params  |    输入参数    |    多个保存寄存器读取参数结构体，要读的寄存器的数量 2 < num < 13，该指令最多一次性支持读 12 个寄存器数据，即 24 个byte。    |
|   data  |    输出参数    |    返回寄存器数据，数据类型：int8。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
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

## 读多个输入寄存器`rm_read_multiple_input_registers()`

- **方法原型：**

```C
int rm_read_multiple_input_registers(rm_robot_handle * handle,rm_peripheral_read_write_params_t params,int * data)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_peripheral_read_write_params_t](../struct/rm_peripheral_read_write_params_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   params  |    输入参数    |    多个输入寄存器读取参数结构体，要读的寄存器的数量 2 < num < 13，该指令最多一次性支持读 12 个寄存器数据， 即 24 个 byte。    |
|   data  |    输出参数    |    返回寄存器数据，数据类型：int8。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
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
