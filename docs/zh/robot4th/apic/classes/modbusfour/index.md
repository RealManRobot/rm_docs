# <p class="hidden">C、C++: </p>Modbus 配置`modbusConfig`

睿尔曼机械臂在控制器和末端接口板上各提供一个RS485通讯接口，可通过本接口配置为标准的Modbus RTU或ModbusTCP模式。在Modbus RTU模式下，用户可通过提供的接口对连接在端口上的外设进行读写操作。

::: warning 注意

- Modbus支持切换RTU或TCP模式，请根据需要进行配置。
- 此外，还支持添加多个modbus-TCP主站配置。
:::

## 新增Modbus TCP主站`rm_add_modbus_tcp_master()`

- **方法原型：**

```C
int rm_add_modbus_tcp_master(rm_robot_handle *handle, rm_modbus_tcp_master_info_t master)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_modbus_tcp_master_info_t](../../struct/modbustcpmaster/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `master`  |    输入参数    |    Modbus TCP主站信息。    |

- **返回值:**

<div class='tableWrap'>

|  参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**：<br> ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |  三代控制器不支持该接口   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **使用示例**
  
新增主站IP：127.0.0.1，端口：502，名称：master1。

```C
rm_modbus_tcp_master_info_t master = {0};
master.port = 502;
strcpy(master.ip, "127.0.0.1");
strcpy(master.master_name, "master1");
ret = rm_add_modbus_tcp_master(handle, master);
printf("add modbus tcp master result : %d\n", ret);
```

## 更新Modbus TCP主站`rm_update_modbus_tcp_master()`

- **方法原型：**

```C
int rm_update_modbus_tcp_master(rm_robot_handle *handle, const char *master_name, rm_modbus_tcp_master_info_t master)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_modbus_tcp_master_info_t](../../struct/modbustcpmaster/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|`master_name`|    输入参数    |   Modbus TCP主站名称。    |
|   `master`  |    输入参数    |    Modbus TCP主站信息。    |

- **返回值:**

<div class='tableWrap'>

|  参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**：<br> ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |  三代控制器不支持该接口   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **使用示例**

修改master1主站IP为127.0.0.1。

```C
rm_modbus_tcp_master_info_t master = {0};
master.port = 502;
strcpy(master.ip, "127.0.0.1");
strcpy(master.master_name, "master1");
rm_update_modbus_tcp_master(handle, master.master_name, master);
printf("update modbus tcp master result : %d\n", ret);
```

## 删除Modbus TCP主站`rm_delete_modbus_tcp_master()`

- **方法原型：**

```C
int rm_delete_modbus_tcp_master(rm_robot_handle *handle, const char *master_name)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|`master_name`|    输入参数    |   Modbus TCP主站名称。    |

- **返回值:**

<div class='tableWrap'>

|  参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**：<br> ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |  三代控制器不支持该接口   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **使用示例**

删除master2主站信息。

```C
rm_delete_modbus_tcp_master(handle, "master2");
```

## 查询Modbus TCP主站列表`rm_get_modbus_tcp_master_list()`

- **方法原型：**

```C
int rm_get_modbus_tcp_master_list(rm_robot_handle *handle, int page_num, int page_size, const char *vague_search,rm_modbus_tcp_master_list_t *list)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_modbus_tcp_master_list_t](../../struct/modbustcpmasterlist/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |   机械臂句柄。    |
|   `page_num`|    输入参数    |   当前查询结果页码。    |
| `page_size` |    输入参数    |   查询结果每页显示数量。    |
|`vague_search`|   输入参数    |   进行模糊搜索。           |
|    `list`   |    输入参数    |   Modbus TCP主站列表。     |

- **返回值:**

<div class='tableWrap'>

|  参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**：<br> ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |  三代控制器不支持该接口   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **使用示例**

查询当前保存的modbus主站列表，页码：1，每页大小：10，不模糊搜索。

```C
rm_modbus_tcp_master_list_t list = {0};
ret = rm_get_modbus_tcp_master_list(handle, 1, 10, "", &list);
printf("get modbus tcp master list result : %d\n", ret);
for (int i = 0; i < list.list_len; i++)
{
    printf("modbus tcp master list[%d] ip : %s\n", i, list.master_list[i].ip); 
    printf("modbus tcp master list[%d] port : %d\n", i, list.master_list[i].port);
    printf("modbus tcp master list[%d] name : %s\n", i, list.master_list[i].master_name);
}
```

## 查询指定Modbus TCP主站`rm_get_modbus_tcp_master()`

- **方法原型：**

```C
int rm_get_modbus_tcp_master(rm_robot_handle *handle, const char *master_name, rm_modbus_tcp_master_info_t *master)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_modbus_tcp_master_info_t](../../struct/modbustcpmaster/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |   机械臂句柄。    |
|`master_name`|    输入参数    |   Modbus TCP主站名称。    |
|   `master`  |    输入参数    |    Modbus TCP主站信息。    |

- **返回值:**

<div class='tableWrap'>

|  参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**：<br> ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |  三代控制器不支持该接口   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **使用示例**

查询名称为master1的Modbus TCP主站信息。

```C
rm_get_modbus_tcp_master(handle, "master1", &master);
printf("get modbus tcp master result : %d\n", ret);
printf("modbus tcp master ip : %s\n", master.ip);
printf("modbus tcp master port : %d\n", master.port);
```

## 查询控制器RS485模式`rm_get_controller_rs485_mode_v4()`

- **方法原型：**

```C
int rm_get_controller_rs485_mode_v4(rm_robot_handle *handle, int *controller_rs485_mode, int *baudrate)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |   机械臂句柄。    |
|`controller_rs485_mode`|    输入参数    |   0-代表默认RS485串行通讯；<br>1-代表modbus-RTU主站模式；<br>2-代表modbus-RTU从站模式。    |
|   `baudrate`  |    输入参数    |    波特率。（当前支持9600、19200、38400、57600、115200、230400和460800）   |

- **返回值:**

<div class='tableWrap'>

|  参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**：<br> ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |  三代控制器不支持该接口   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **使用示例**

```C
ret = rm_get_controller_rs485_mode_v4(handle,&mode,&baudrate);
printf("get controller RS485 mode result : %d %d %d\n", ret,mode,baudrate);
```

## 查询工具端RS485模式`rm_get_tool_rs485_mode_v4()`

- **方法原型：**

```C
int rm_get_tool_rs485_mode_v4(rm_robot_handle *handle, int *tool_rs485_mode, int *baudrate)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |   机械臂句柄。    |
|`tool_rs485_mode`|    输入参数    |   0-代表modbus-RTU主站模式；<br>1-代表灵巧手模式；<br>2-代表夹爪模式。   |
|   `baudrate`  |    输入参数    |    波特率。（当前支持9600、115200和460800）   |

- **返回值:**

<div class='tableWrap'>

|  参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**：<br> ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |  三代控制器不支持该接口   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **使用示例**

```C
ret = rm_get_tool_rs485_mode_v4(handle,&mode,&baudrate);
printf("rm_get_tool_rs485_mode_v4 result : %d %d %d\n", ret,mode,baudrate);
```

## 配置控制器RS485模式`rm_set_controller_rs485_mode()`

- **方法原型：**

```C
int rm_set_controller_rs485_mode(rm_robot_handle *handle, int mode, int baudrate)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |   机械臂句柄。    |
|`mode`|    输入参数    |  0-代表默认RS485串行通讯；<br>1-代表modbus-RTU主站模式；<br>2-代表modbus-RTU从站模式。  |
|   `baudrate`  |    输入参数    |    波特率。（当前支持9600、19200、38400、57600、115200、230400和460800）  |

- **返回值:**

<div class='tableWrap'>

|  参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**：<br> ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |  三代控制器不支持该接口   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **使用示例**

配置控制器通讯端口RS485模式为Modbus-RTU主站模式，波特率115200。

```C
ret = rm_set_controller_rs485_mode(handle, 1, 115200);
printf("set controller RS485 mode result : %d\n", ret);
```

## 配置工具端RS485模式`rm_set_tool_rs485_mode()`

- **方法原型：**

```C
int rm_set_tool_rs485_mode(rm_robot_handle *handle, int mode, int baudrate)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |   机械臂句柄。    |
|`mode`|    输入参数    |  通讯端口：<br>0-设置工具端RS485端口为RTU主站；<br>1-设置工具端RS485端口为灵巧手模式；<br>2-设置工具端RS485端口为夹爪模式。  |
|   `baudrate`  |    输入参数    |    波特率。（当前支持9600、115200和460800）  |

- **返回值:**

<div class='tableWrap'>

|  参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**：<br> ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |  三代控制器不支持该接口   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **使用示例**

设置工具端RS485端口为RTU主站，波特率115200。

```C
ret = rm_set_tool_rs485_mode(handle, 0, 115200);
printf("set tool rs485 mode result : %d\n", ret);
```

## Modbus RTU协议读线圈`rm_read_modbus_rtu_coils()`

- **方法原型：**

```C
int rm_read_modbus_rtu_coils(rm_robot_handle *handle, rm_modbus_rtu_read_params_t param, int *data)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_modbus_rtu_read_params_t](../../struct/modbusread/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |   机械臂句柄。    |
|   `param`  |    输入参数    |  读线圈参数。 |
|   `data`  |    输入参数    |   读线圈数据，数组大小为param.num。  |

- **返回值:**

<div class='tableWrap'>

|  参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**：<br> ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |  三代控制器不支持该接口   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **使用示例**

读取线圈，控制器端modbus主机，地址10，数量10的数据。

```C
int coils_read_data[10] = {0};
rm_modbus_rtu_read_params_t coils_read = {0};
coils_read.address = 10;
coils_read.num = 10;
coils_read.type = 0;
coils_read.device = 1;
ret = rm_read_modbus_rtu_coils(handle, coils_read, coils_read_data);
printf("read modbus rtu coils result : %d\n", ret);
for (int i = 0; i < 10; i++)
{
    printf("coils_read_data[%d] : %d\n", i, coils_read_data[i]); 
}
```

## Modbus RTU协议写线圈`rm_write_modbus_rtu_coils()`

- **方法原型：**

```C
int rm_write_modbus_rtu_coils(rm_robot_handle *handle, rm_modbus_rtu_write_params_t param)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_modbus_rtu_write_params_t](../../struct/modbuswrite/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |   机械臂句柄。    |
|   `param`  |    输入参数    |  写线圈参数。 |

- **返回值:**

<div class='tableWrap'>

|  参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**：<br> ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |  三代控制器不支持该接口   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **使用示例**

写线圈

```C
rm_modbus_rtu_write_params_t coils_write = {0};
coils_write.address = 10;
coils_write.num = 10;
coils_write.type = 0;
coils_write.device = 1;
for (int i = 0; i < 10; i++)
{
    coils_write.data[i] = 1; 
}
ret = rm_write_modbus_rtu_coils(handle, coils_write);
printf("write modbus rtu coils result : %d\n", ret);
```

## Modbus RTU协议读离散量输入`rm_read_modbus_rtu_input_status()`

- **方法原型：**

```C
int rm_read_modbus_rtu_input_status(rm_robot_handle *handle, rm_modbus_rtu_read_params_t param, int *data)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_modbus_rtu_read_params_t](../../struct/modbusread/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |   机械臂句柄。    |
|   `param`  |    输入参数    |  读离散输入参数。 |
|   `data`  |    输入参数    |  读离散输入数据，数组大小为param.num。 |

- **返回值:**

<div class='tableWrap'>

|  参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**：<br> ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |  三代控制器不支持该接口   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **使用示例**

读取离散量输入。

```C
int param_read_data[10] = {0};
rm_modbus_rtu_read_params_t param_read = {0};
param_read.address = 10;
param_read.num = 10;
param_read.type = 0;
param_read.device = 1;
ret = rm_read_modbus_rtu_input_status(handle, param_read, param_read_data);
printf("read modbus rtu input status result : %d\n", ret);
for (int i = 0; i < 10; i++)
{
    printf("param_read_data[%d] : %d\n", i, param_read_data[i]); 
}
```

## Modbus RTU协议读保持寄存器`rm_read_modbus_rtu_holding_registers()`

- **方法原型：**

```C
int rm_read_modbus_rtu_holding_registers(rm_robot_handle *handle, rm_modbus_rtu_read_params_t param, int *data)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_modbus_rtu_read_params_t](../../struct/modbusread/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |   机械臂句柄。    |
|   `param`  |    输入参数    |  读保持寄存器参数。 |
|   `data`  |    输入参数    |  读保持寄存器参数，数组大小为param.num。 |

- **返回值:**

<div class='tableWrap'>

|  参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**：<br> ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |  三代控制器不支持该接口   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **使用示例**

```C
// 读保持寄存器
int param_read_data[10] = {0};
rm_modbus_rtu_read_params_t param_read = {0};
param_read.address = 10;
param_read.num = 10;
param_read.type = 0;
param_read.device = 1;
ret = rm_read_modbus_rtu_holding_registers(handle, param_read, param_read_data);
printf("read modbus rtu holding_registers result : %d\n", ret);
for (int i = 0; i < 10; i++)
{
    printf("param_read_data[%d] : %d\n", i, param_read_data[i]); 
}
```

## Modbus RTU协议写保持寄存器`rm_write_modbus_rtu_registers()`

- **方法原型：**

```C
int rm_write_modbus_rtu_registers(rm_robot_handle *handle, rm_modbus_rtu_write_params_t param)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_modbus_rtu_write_params_t](../../struct/modbuswrite/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |   机械臂句柄。    |
|   `param`  |    输入参数    |  写保持寄存器参数。 |

- **返回值:**

<div class='tableWrap'>

|  参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**：<br> ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |  三代控制器不支持该接口   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **使用示例**

```C
// 写保持寄存器
rm_modbus_rtu_write_params_t param_write = {0};
param_write.address = 10;
param_write.num = 10;
param_write.type = 0;
param_write.device = 1;
for (int i = 0; i < 10; i++)
{
    param_write.data[i] = i; 
}
ret = rm_write_modbus_rtu_registers(handle, param_write);
printf("write modbus rtu registers result : %d\n", ret);
```

## Modbus RTU协议读输入寄存器`rm_read_modbus_rtu_input_registers()`

- **方法原型：**

```C
int rm_read_modbus_rtu_input_registers(rm_robot_handle *handle, rm_modbus_rtu_read_params_t param, int *data)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_modbus_rtu_read_params_t](../../struct/modbusread/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |   机械臂句柄。    |
|   `param`  |    输入参数    |  读输入寄存器数据。 |
|   `data`  |    输入参数    |  读输入寄存器数据，数组大小为param.num。 |

- **返回值:**

<div class='tableWrap'>

|  参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**：<br> ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |  三代控制器不支持该接口   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **使用示例**

读输入寄存器

```C
int input_read_data[10] = {0};
rm_modbus_rtu_read_params_t input_read = {0};
input_read.address = 10;
input_read.num = 10;
input_read.type = 0;
input_read.device = 1;
ret = rm_read_modbus_rtu_input_registers(handle, input_read, input_read_data);
printf("read modbus rtu input registers result : %d\n", ret);
for (int i = 0; i < 10; i++)
{
    printf("input_read_data[%d] : %d\n", i, input_read_data[i]);
}
```

## Modbus TCP协议读线圈`rm_read_modbus_tcp_coils()`

- **方法原型：**

```C
int rm_read_modbus_tcp_coils(rm_robot_handle *handle, rm_modbus_tcp_read_params_t param, int *data)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_modbus_tcp_read_params_t](../../struct/modbustcpread/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |   机械臂句柄。    |
|   `param`  |    输入参数    |  读线圈参数。 |
|   `data`  |    输入参数    |  读线圈参数，数组大小为param.num。 |

- **返回值:**

<div class='tableWrap'>

|  参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**：<br> ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |  三代控制器不支持该接口   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **使用示例**

Modbus Tcp 读线圈

```C
rm_modbus_tcp_read_params_t param = {0};
param.address = 10;
param.num = 10;
strcpy(param.master_name, "test");
int data[10] = {0};
ret = rm_read_modbus_tcp_coils(handle,  param, data);
printf("read modbus tcp coils result : %d\n", ret);
for (int i = 0; i < 10; i++)
{
    printf("data[%d] : %d\n", i, data[i]);
}
```

## Modbus TCP协议写线圈`rm_write_modbus_tcp_coils()`

- **方法原型：**

```C
int rm_write_modbus_tcp_coils(rm_robot_handle *handle, rm_modbus_tcp_write_params_t param)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_modbus_tcp_write_params_t](../../struct/modbustcpwrite/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |   机械臂句柄。    |
|   `param`  |    输入参数    |  写线圈参数。 |

- **返回值:**

<div class='tableWrap'>

|  参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**：<br> ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |  三代控制器不支持该接口   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **使用示例**

Modbus Tcp 写线圈

```C
rm_modbus_tcp_write_params_t param_w = {0};
param_w.address = 10;
param_w.num = 10;
strcpy(param_w.master_name, "test");
memset(param_w.ip, 0, 16);
for (int i = 0; i < 10; i++)
{
    param_w.data[i] = i;
}
ret = rm_write_modbus_tcp_coils(handle, param_w);
printf("write modbus tcp coils result : %d\n", ret);
```

## Modbus TCP协议读离散量输入`rm_read_modbus_tcp_input_status()`

- **方法原型：**

```C
int rm_read_modbus_tcp_input_status(rm_robot_handle *handle, rm_modbus_tcp_read_params_t param, int *data)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_modbus_tcp_read_params_t](../../struct/modbustcpread/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |   机械臂句柄。    |
|   `param`  |    输入参数    |  读离散输入参数。 |
|   `data`  |    输入参数    |  读离散输入参数，数组大小为param.num。 |

- **返回值:**

<div class='tableWrap'>

|  参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**：<br> ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |  三代控制器不支持该接口   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **使用示例**

Modbus Tcp 读离散量输入

```C
rm_modbus_tcp_read_params_t param = {0};
param.address = 10;
param.num = 10;
strcpy(param.master_name, "test");
int data[10] = {0};
ret = rm_read_modbus_tcp_input_status(handle,  param, data);
printf("read modbus tcp input status result : %d\n", ret);
for (int i = 0; i < 10; i++)
{
    printf("data[%d] : %d\n", i, data[i]);
}
```

## Modbus TCP协议读保持寄存器`rm_read_modbus_tcp_holding_registers()`

- **方法原型：**

```C
int rm_read_modbus_tcp_holding_registers(rm_robot_handle *handle, rm_modbus_tcp_read_params_t param, int *data)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_modbus_tcp_read_params_t](../../struct/modbustcpread/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |   机械臂句柄。    |
|   `param`  |    输入参数    |  读保持寄存器参数。 |
|   `data`  |    输入参数    |  读保持寄存器参数，数组大小为param.num。 |

- **返回值:**

<div class='tableWrap'>

|  参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**：<br> ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |  三代控制器不支持该接口   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **使用示例**

```C
// 通过保存的modbus Tcp主站 “test” 读寄存器
rm_modbus_tcp_read_params_t param = {0};
param.address = 10;
param.num = 10;
strcpy(param.master_name, "test");
int data[10] = {0};
ret = rm_read_modbus_tcp_holding_registers(handle,  param, data);
printf("read modbus tcp holding registers result : %d\n", ret);
for (int i = 0; i < 10; i++)
{
    printf("data[%d] : %d\n", i, data[i]);
}
```

## Modbus TCP协议写保持寄存器`rm_write_modbus_tcp_registers()`

- **方法原型：**

```C
int rm_write_modbus_tcp_registers(rm_robot_handle *handle, rm_modbus_tcp_write_params_t param)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_modbus_tcp_write_params_t](../../struct/modbustcpwrite/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |   机械臂句柄。    |
|   `param`  |    输入参数    |  写保持寄存器参数。 |

- **返回值:**

<div class='tableWrap'>

|  参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**：<br> ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |  三代控制器不支持该接口   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **使用示例**

```C
// 通过保存的modbus Tcp主站 "test" 写寄存器，数据起始地址：10，写入数据数量：10
// 写入数据：0~9
rm_modbus_tcp_write_params_t param_w = {0};
param_w.address = 10;
param_w.num = 10;
strcpy(param_w.master_name, "test");
for (int i = 0; i < 10; i++)
{
    param_w.data[i] = i;
}
ret = rm_write_modbus_tcp_registers(handle, param_w);
printf("write modbus tcp coils result : %d\n", ret);
```

## Modbus TCP协议读输入寄存器`rm_read_modbus_tcp_input_registers()`

- **方法原型：**

```C
int rm_read_modbus_tcp_input_registers(rm_robot_handle *handle, rm_modbus_tcp_read_params_t param, int *data)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_modbus_tcp_read_params_t](../../struct/modbustcpread/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |   机械臂句柄。    |
|   `param`  |    输入参数    |  读输入寄存器数据。 |
|   `data`  |    输入参数    |  读输入寄存器数据，数组大小为param.num。 |

- **返回值:**

<div class='tableWrap'>

|  参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**：<br> ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |  三代控制器不支持该接口   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **使用示例**

```C
// 通过保存的modbus Tcp主站 "test" 读输入寄存器，数据起始地址：10，读取数据数量：10
rm_modbus_tcp_read_params_t param = {0};
param.address = 10;
param.num = 10;
strcpy(param.master_name, "test");
int data[10] = {0};
ret = rm_read_modbus_tcp_input_registers(handle,  param, data);
printf("read modbus tcp input registers result : %d\n", ret);
for (int i = 0; i < 10; i++)
{
    printf("data[%d] : %d\n", i, data[i]);
}
```
