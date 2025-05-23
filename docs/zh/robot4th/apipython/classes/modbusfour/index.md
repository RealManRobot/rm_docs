# <p class="hidden">Python: </p>Modbus 配置`ModbusConfig`

可用于Modbus 配置，睿尔曼机械臂在控制器和末端接口板上各提供一个RS485通讯接口，这些接口可通过接口配置为标准的Modbus RTU模式。在Modbus RTU模式下，用户可通过提供的接口对连接在端口上的外设进行读写操作。下面是Modbus配置`ModbusConfig`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。<br>

::: warning 注意

- Modbus支持切换RTU或TCP模式，请根据需要进行配置。
- 此外，还支持添加多个modbus-TCP主站配置。
:::

## 新增Modbus TCP主站 `rm_add_modbus_tcp_master()`

- **方法原型：**

```python
rm_add_modbus_tcp_master(self, modbus_tcp_master: rm_modbus_tcp_master_info_t) -> int:
```

*可以跳转[rm_modbus_tcp_master_info_t](../../struct/modbustcpmaster/index.md)查阅结构体详细描述。*<br>

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `modbus_tcp_master`      | `rm_modbus_tcp_master_info_t` | Modbus TCP主站配置结构体。     |

- **返回值:** <br>
函数执行的状态码：

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
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 添加Modbus TCP主站配置
master = rm_modbus_tcp_master_info_t("test", "127.0.0.1", 502)
print(arm.rm_add_modbus_tcp_master(master))

arm.rm_delete_robot_arm()
```

## 更新Modbus TCP主站 `rm_update_modbus_tcp_master()`

- **方法原型：**

```python
rm_update_modbus_tcp_master(self, master_name:str, modbus_tcp_master: rm_modbus_tcp_master_info_t) -> int:
```

*可以跳转[rm_modbus_tcp_master_info_t](../../struct/modbustcpmaster/index.md)查阅结构体详细描述。*<br>

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `master_name`      | `str` | Modbus TCP主站名称。     |
|`modbus_tcp_master`|`rm_modbus_tcp_master_info_t`|要修改的Modbus TCP主站信息。|

- **返回值:** <br>
函数执行的状态码：

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
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 修改指定Modbus TCP主站配置
master = rm_modbus_tcp_master_info_t("test_1", "127.0.0.1", 502)
print(arm.rm_update_modbus_tcp_master("test", master))

arm.rm_delete_robot_arm()
```

## 删除Modbus TCP主站 `rm_delete_modbus_tcp_master()`

- **方法原型：**

```python
rm_delete_modbus_tcp_master(self, master_name:str) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `master_name`      | `str` | Modbus TCP主站名称。                   |

- **返回值:** <br>
函数执行的状态码：

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
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 删除指定Modbus TCP主站配置
print(arm.rm_delete_modbus_tcp_master("test"))

arm.rm_delete_robot_arm()
```

## 查询指定Modbus TCP主站 `rm_get_modbus_tcp_master()`

- **方法原型：**

```python
rm_get_modbus_tcp_master(self, master_name:str) -> tuple[int, dict[str, any]]:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `master_name`      | `str` | Modbus TCP主站名称。                   |

- **返回值:** <br>

tuple[int,dict[str,any]]: 包含两个元素的元组。

1. int：函数执行的状态码：

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

2. dict[str,any]：指定Modbus TCP主站信息：

    |   参数    |  类型   |   说明    |
    | :--- | :--- | :---|
    |   -  |    `dict[str,any]`   |   返回指定Modbus TCP主站信息字典，键为rm_modbus_tcp_master_info_t结构体的字段名称。   |

    *可以跳转[rm_modbus_tcp_master_info_t](../../struct/modbustcpmaster/index.md)查阅结构体详细描述。*<br>

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 查询指定Modbus TCP主站配置
print(arm.rm_get_modbus_tcp_master("test"))

arm.rm_delete_robot_arm()
```

## 查询Modbus TCP主站列表 `rm_get_modbus_tcp_master_list()`

- **方法原型：**

```python
rm_get_modbus_tcp_master_list(self, page_num: int, page_size: int, vague_search: str) -> tuple[int, dict[str, any]]:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `page_num`      | `int` | 页码。     |
| `page_size`      | `int` | 每页大小。     |
| `vague_search`      | `str` | 模糊搜索。     |

- **返回值:** <br>
tuple[int,dict[str,any]]: 包含两个元素的元组。

1. int：函数执行的状态码：

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

2. dict[str,any]：符合条件的Modbus TCP主站列表：

    |   参数    |  类型   |   说明    |
    | :--- | :--- | :---|
    |   -  |    `dict[str,any]`   |   返回符合条件的Modbus TCP主站列表字典，键为rm_modbus_tcp_master_list_t结构体的字段名称。   |

    *可以跳转[rm_modbus_tcp_master_list_t](../../struct/modbustcpmasterlist/index.md)查阅结构体详细描述。*<br>

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 查询多个Modbus TCP主站配置
print(arm.rm_get_modbus_tcp_master_list(1,10,''))

arm.rm_delete_robot_arm()
```

## 配置控制器RS485模式 `rm_set_controller_rs485_mode()`

- **方法原型：**

```python
rm_set_controller_rs485_mode(self, mode:int, baudrate:int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `mode`      | `int` | 0代表默认RS485串行通讯，1代表modbus-RTU主站模式，2-代表modbus-RTU从站模式。  |
| `baudrate`      | `int` | 波特率。（当前支持9600、19200、38400、57600、115200、230400、460800） |

- **返回值:** <br>
函数执行的状态码：

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
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 设置控制器RS485为modbus-RTU主站模式，波特率为115200
print(arm.rm_set_controller_rs485_mode(1,115200))

arm.rm_delete_robot_arm()
```

## 查询控制器RS485模式 `rm_get_controller_rs485_mode_v4()`

- **方法原型：**

```python
rm_get_controller_rs485_mode_v4(self) -> tuple[int, dict[str, any]]:
```

- **返回值:** <br>

tuple[int,dict[str,any]]: 包含两个元素的元组。

1. int：函数执行的状态码：

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

2. dict[str,any]：包含以下键值的字典:

    |   参数    |  类型   |   说明    |
    | :--- | :--- | :---|
    |  `mode` |    `int`   |   0代表默认RS485串行通讯，1代表modbus-RTU主站模式，2-代表modbus-RTU从站模式。   |
    |  `baudrate` |    `int`   | 波特率。（当前支持9600、19200、38400、57600、115200、230400、460800）   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 查询控制器RS485模式
print(arm.rm_get_controller_rs485_mode_v4())

arm.rm_delete_robot_arm()
```

## 配置工具端RS485模式 `rm_set_tool_rs485_mode()`

- **方法原型：**

```python
rm_set_tool_rs485_mode(self, mode:int, baudrate:int) -> int:
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `mode`      | `int` |  通讯端口，0-设置工具端RS485端口为RTU主站，1-设置工具端RS485端口为灵巧手模式，2-设置工具端RS485端口为夹爪模式。 |
| `baudrate`      | `int` | 波特率。（当前支持9600、115200、460800） |

- **返回值:** <br>
函数执行的状态码：

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
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 设置工具端RS485端口为RTU主站，波特率为115200
print(arm.rm_set_tool_rs485_mode(0,115200))

arm.rm_delete_robot_arm()
```

## 查询工具端RS485模式 `rm_get_tool_rs485_mode_v4()`

- **方法原型：**

```python
rm_get_tool_rs485_mode_v4(self) -> tuple[int, dict[str, any]]:
```

- **返回值:** <br>

tuple[int,dict[str,any]]: 包含两个元素的元组。

1. int：函数执行的状态码：

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

2. dict[str,any]：包含以下键值的字典:

    |   参数    |  类型   |   说明    |
    | :--- | :--- | :---|
    |  `mode` |    `int`   |  通讯端口，0-设置工具端RS485端口为RTU主站，1-设置工具端RS485端口为灵巧手模式，2-设置工具端RS485端口为夹爪模式。   |
    |  `baudrate` |    `int`   | 波特率。（当前支持9600、115200、460800）   |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# 查询工具端RS485模式
print(arm.rm_get_tool_rs485_mode_v4())

arm.rm_delete_robot_arm()
```

## Modbus RTU协议读线圈 `rm_read_modbus_rtu_coils()`

- **方法原型：**

```python
rm_read_modbus_rtu_coils(self, param:rm_modbus_rtu_read_params_t) -> tuple[int, list[int]]:
```

*可以跳转[rm_modbus_rtu_read_params_t](../../struct/modbusread/index.md)查阅结构体详细描述。*

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_modbus_rtu_read_params_t` |  Modbus RTU读取参数结构体。  |

- **返回值:** <br>

tuple[int,list[int]]: 包含两个元素的元组。

1. int：函数执行的状态码：

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

2. list[int]：读线圈数据：

    |   参数    |  类型   |   说明    |
    | :--- | :--- | :---|
    |  - |    `int`   |  返回读线圈数据，数组大小为param.num。  |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Modbus RTU读线圈
param = rm_modbus_rtu_read_params_t(10, 1, 0, 10)
print(arm.rm_read_modbus_rtu_coils(param))

arm.rm_delete_robot_arm()
```

## Modbus RTU协议写线圈 `rm_write_modbus_rtu_coils()`

- **方法原型：**

```python
rm_write_modbus_rtu_coils(self, param:rm_modbus_rtu_write_params_t) -> int:
```

*可以跳转[rm_modbus_rtu_write_params_t](../../struct/modbuswrite/index.md)查阅结构体详细描述。*

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_modbus_rtu_write_params_t` |  Modbus RTU写入参数结构体。   |

- **返回值:** <br>
函数执行的状态码：

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
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Modbus RTU协议写线圈
param_w = rm_modbus_rtu_write_params_t(10,1,0,10,[1,1,0,0,0,0,0,0,0,0])
print(arm.rm_write_modbus_rtu_coils(param_w))

arm.rm_delete_robot_arm()
```

## Modbus RTU协议读离散量输入 `rm_read_modbus_rtu_input_status()`

- **方法原型：**

```python
rm_read_modbus_rtu_input_status(self, param:rm_modbus_rtu_read_params_t) -> tuple[int, list[int]]:
```

*可以跳转[rm_modbus_rtu_read_params_t](../../struct/modbusread/index.md)查阅结构体详细描述。*

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_modbus_rtu_read_params_t` |  Modbus RTU读取参数结构体。   |

- **返回值:** <br>
tuple[int,list[int]]: 包含两个元素的元组。

1. int：函数执行的状态码：

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

2. list[int]：读离散量输入数据：

    |   参数    |  类型   |   说明    |
    | :--- | :--- | :---|
    |  - |    `int`   | 返回读离散量输入数据，数组大小为param.num。  |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Modbus RTU读离散量输入
param = rm_modbus_rtu_read_params_t(10, 1, 0, 10)
print(arm.rm_read_modbus_rtu_input_status(param))

arm.rm_delete_robot_arm()
```

## Modbus RTU协议读保持寄存器 `rm_read_modbus_rtu_holding_registers()`

- **方法原型：**

```python
rm_read_modbus_rtu_holding_registers(self, param:rm_modbus_rtu_read_params_t) -> tuple[int, list[int]]:
```

*可以跳转[rm_modbus_rtu_read_params_t](../../struct/modbusread/index.md)查阅结构体详细描述。*

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_modbus_rtu_read_params_t` |Modbus RTU读取参数结构体。   |

- **返回值:** <br>

tuple[int,list[int]]: 包含两个元素的元组。

1. int：函数执行的状态码：

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

2. list[int]：读保持寄存器数据：

    |   参数    |  类型   |   说明    |
    | :--- | :--- | :---|
    |  - |    `int`   | 返回读保持寄存器数据，数组大小为param.num。  |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Modbus RTU读保持寄存器
param = rm_modbus_rtu_read_params_t(10, 1, 0, 10)
print(arm.rm_read_modbus_rtu_holding_registers(param))

arm.rm_delete_robot_arm()
```

## Modbus RTU协议写保持寄存器 `rm_write_modbus_rtu_registers()`

- **方法原型：**

```python
rm_write_modbus_rtu_registers(self, param:rm_modbus_rtu_write_params_t) -> int:
```

*可以跳转[rm_modbus_rtu_write_params_t](../../struct/modbuswrite/index.md)查阅结构体详细描述。*

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_modbus_rtu_write_params_t` | Modbus RTU写入参数结构体。   |

- **返回值:** <br>
函数执行的状态码：

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
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Modbus RTU协议写保持寄存器
param_w = rm_modbus_rtu_write_params_t(10,1,0,10,[1,1,0,0,0,0,0,0,0,0])
print(arm.rm_write_modbus_rtu_registers(param_w))

arm.rm_delete_robot_arm()
```

## Modbus RTU协议读输入寄存器 `rm_read_modbus_rtu_input_registers()`

- **方法原型：**

```python
rm_read_modbus_rtu_input_registers(self, param:rm_modbus_rtu_read_params_t) -> tuple[int, list[int]]:
```

*可以跳转[rm_modbus_rtu_read_params_t](../../struct/modbusread/index.md)查阅结构体详细描述。*

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_modbus_rtu_read_params_t` | Modbus RTU读取参数结构体。   |

- **返回值:** <br>

tuple[int,list[int]]: 包含两个元素的元组。

1. int：函数执行的状态码：

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

2. list[int]：读输入寄存器数据：

    |   参数    |  类型   |   说明    |
    | :--- | :--- | :---|
    |  - |    `int`   | 返回读输入寄存器数据，数组大小为param.num。  |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Modbus RTU读输入寄存器
param = rm_modbus_rtu_read_params_t(10, 1, 0, 10)
print(arm.rm_read_modbus_rtu_input_registers(param))

arm.rm_delete_robot_arm()
```

## Modbus TCP协议读线圈 `rm_read_modbus_tcp_coils()`

- **方法原型：**

```python
rm_read_modbus_tcp_coils(self, param:rm_modbus_tcp_read_params_t) -> tuple[int, list[int]]:
```

*可以跳转[rm_modbus_tcp_read_params_t](../../struct/modbustcpread/index.md)查阅结构体详细描述。*

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_modbus_tcp_read_params_t` |Modbus TCP读取参数结构体。   |

- **返回值:** <br>

tuple[int,list[int]]: 包含两个元素的元组。

1. int：函数执行的状态码：

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

2. list[int]：读线圈数据：

    |   参数    |  类型   |   说明    |
    | :--- | :--- | :---|
    |  - |    `int`   | 返回读线圈数据，数组大小为param.num。  |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Modbus TCP读线圈
param = rm_modbus_tcp_read_params_t(10,master_name=None,ip='127.0.0.1',port=502,num=10)
print(arm.rm_read_modbus_tcp_coils(param))

arm.rm_delete_robot_arm()
```

## Modbus TCP协议写线圈 `rm_write_modbus_tcp_coils()`

- **方法原型：**

```python
rm_write_modbus_tcp_coils(self, param:rm_modbus_tcp_write_params_t) -> int:
```

*可以跳转[rm_modbus_tcp_write_params_t](../../struct/modbustcpswrite/index.md)查阅结构体详细描述。*

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_modbus_tcp_write_params_t` | Modbus TCP写入参数结构体。   |

- **返回值:** <br>

函数执行的状态码：

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
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Modbus TCP写线圈
param_w = rm_modbus_tcp_write_params_t(10,master_name='test',num=10,data=[1,1,0,0,0,0,0,0,0,0])
print(arm.rm_write_modbus_tcp_coils(param_w))

arm.rm_delete_robot_arm()
```

## Modbus TCP协议读离散量输入 `rm_read_modbus_tcp_input_status()`

- **方法原型：**

```python
rm_read_modbus_tcp_input_status(self, param:rm_modbus_tcp_read_params_t) -> tuple[int, list[int]]:
```

*可以跳转[rm_modbus_tcp_read_params_t](../../struct/modbustcpread/index.md)查阅结构体详细描述。*

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_modbus_tcp_read_params_t` | Modbus TCP读取参数结构体。   |

- **返回值:** <br>

tuple[int,list[int]]: 包含两个元素的元组。

1. int：函数执行的状态码：

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

2. list[int]：读离散量输入数据：

    |   参数    |  类型   |   说明    |
    | :--- | :--- | :---|
    |  - |    `int`   | 返回读离散量输入数据，数组大小为param.num。  |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Modbus TCP读离散量输入
param = rm_modbus_tcp_read_params_t(10,master_name='test',num=10)
print(arm.rm_read_modbus_tcp_input_status(param))

arm.rm_delete_robot_arm()
```

## Modbus TCP协议读保持寄存器 `rm_read_modbus_tcp_holding_registers()`

- **方法原型：**

```python
rm_read_modbus_tcp_holding_registers(self, param:rm_modbus_tcp_read_params_t) -> tuple[int, list[int]]:
```

*可以跳转[rm_modbus_tcp_read_params_t](../../struct/modbustcpread/index.md)查阅结构体详细描述。*

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_modbus_tcp_read_params_t` |Modbus TCP读取参数结构体。   |

- **返回值:** <br>

tuple[int,list[int]]: 包含两个元素的元组。

1. int：函数执行的状态码：

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

2. list[int]：读保持寄存器数据：

    |   参数    |  类型   |   说明    |
    | :--- | :--- | :---|
    |  - |    `int`   | 返回读保持寄存器数据，数组大小为param.num。  |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Modbus TCP读保持寄存器
param = rm_modbus_tcp_read_params_t(10,master_name='test',num=10)
print(arm.rm_read_modbus_tcp_holding_registers(param))

arm.rm_delete_robot_arm()
```

## Modbus TCP协议写保持寄存器 `rm_write_modbus_tcp_registers()`

- **方法原型：**

```python
rm_write_modbus_tcp_registers(self, param:rm_modbus_tcp_write_params_t) -> int:
```

*可以跳转[rm_modbus_tcp_write_params_t](../../struct/modbustcpswrite/index.md)查阅结构体详细描述。*

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_modbus_tcp_write_params_t` | Modbus TCP写入参数结构体。   |

- **返回值:** <br>
函数执行的状态码：

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
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Modbus TCP写保持寄存器
param_w = rm_modbus_tcp_write_params_t(10,master_name='test',num=10,data=[1,1,0,0,0,0,0,0,0,0])
print(arm.rm_write_modbus_tcp_registers(param_w))

arm.rm_delete_robot_arm()
```

## Modbus TCP协议读输入寄存器 `rm_read_modbus_tcp_input_registers()`

- **方法原型：**

```python
rm_read_modbus_tcp_input_registers(self, param:rm_modbus_tcp_read_params_t) -> tuple[int, list[int]]:
```

*可以跳转[rm_modbus_tcp_read_params_t](../../struct/modbustcpread/index.md)查阅结构体详细描述。*

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_modbus_tcp_read_params_t` | Modbus TCP读取参数结构体。   |

- **返回值:** <br>

tuple[int,list[int]]: 包含两个元素的元组。

1. int：函数执行的状态码：

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

2. list[int]：读输入寄存器数据：

    |   参数    |  类型   |   说明    |
    | :--- | :--- | :---|
    |  - |    `int`   | 返回读输入寄存器数据，数组大小为param.num。  |

- **使用示例**
  
```python
from Robotic_Arm.rm_robot_interface import *

# 实例化RoboticArm类
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# 创建机械臂连接，打印连接id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Modbus TCP读输入寄存器
param = rm_modbus_tcp_read_params_t(10,master_name='test',num=10)
print(arm.rm_read_modbus_tcp_input_registers(param))

arm.rm_delete_robot_arm()
```
