# 系统配置

## 控制器状态

### 查询控制器状态

**参数说明：**

| 功能描述             | 类型     | 说明             |
| :------------------- | :------- | :--------------- |
| get_controller_state | `string` | 查询控制器状态。 |

**使用示例：**
实现：查询控制器状态

```json
{ "command": "get_controller_state" }
```

**返回示例：**
反馈控制器状态，电压：24v，电流：1.5A，温度：42℃，控制器错误标志 0，电压、电流和温度的精度均为 0.001。

```json
{
  "state": "controller_state",
  "voltage": 24000,
  "current": 1500,
  "temperature": 42000,
  "err_flag": 0
}
```

**参数说明:**
| 功能描述 | 类型 |说明|
| :--- | :------------------------- |:---|
| controller_state | `string` |反馈控制器状态。 |

## 系统指令

### 控制机械臂上电、断电

| 功能描述 | 控制机械臂上电、断电                 |
| :--- | :------------------------- |
| 参数说明 | `set_arm_power`：控制机械臂上电、断电 |
| 命令格式 | {s\:s,s\:i}                |

**使用示例：**
说明：控制机械臂上电

```json
{"command":"set_arm_power","arm_power":1}
```

**返回示例：**

```json

{"command":"set_arm_power","arm_power":true}
```

### 查询机械臂电源状态

| 功能描述 | 查询机械臂电源状态                       |
| :--- | :------------------------------ |
| 参数说明 | `get_arm_power_state`：查询机械臂电源状态 |
| 命令格式 | {s\:s}                          |

**使用示例：**
说明：查询机械臂电源状态

```json
{"command":"get_arm_power_state"}
```

**返回示例：**

```json
格式：{s:s,s:i},1-上电状态，0断电状态
{"state":"arm_power_state","power_state":1}
```

### 查询软件版本号

| 功能描述 | 查询机械臂软件版本                            |
| :--- | :----------------------------------- |
| 参数说明 | `get_arm_software_version`：查询机械臂软件版本 |
| 命令格式 | {s\:s}                               |

**使用示例：**
说明：查询机械臂软件版本

```json
{"command":"get_arm_software_version"}
```

**返回示例：**

```json
{"Real-time_Kernal2":515,"state":"arm_software_version","Ctrl_version": 7014147,"Plan_version":7013891,"ctrlM4_build_info":"202212282001","Real-time_Kernal1":515,"ctrlM7_build_info":"202212282001", "Plan_build_info": "202212282001", "Product_version": "RM65-BI"}
7013129：转换成uint32_t类型的16进制数据，0x6B0309
6B-代表RM65-B型号6D-代表RM65-ZF型号6F-代表RM65-SF型号
0309-代表软件版本号为V3.0.9
Product_version：机械臂型号，仅I系列机械臂支持
```

### 查询控制器的累计运行时间

| 功能描述 | 查询控制器自出厂以来，累计的运行时间                |
| :--- | :-------------------------------- |
| 参数说明 | `get_system_runtime`：查询控制器累计的运行时间 |
| 命令格式 | {s\:s}                            |

**使用示例：**
说明：查询系统运行时间

```json
{"command":"get_system_runtime"}
```

**返回示例：**

```json
{"command":"get_system_runtime","day":0,"hour":0,"min":0,"sec":0}若系统正常，则返回运行时间
```

### 清零控制器的累计运行时间

| 功能描述 | 清零控制器自出厂以来，累计的运行时间                  |
| :--- | :---------------------------------- |
| 参数说明 | `clear_system_runtime`：清零控制器累计的运行时间 |
| 命令格式 | {s\:s}                              |

**使用示例：**
说明：清零系统运行时间

```json
{"command":"clear_system_runtime"}
```

**返回示例：**

```json
{"command":"clear_system_runtime","clear_state":true}
true-清除成功，false-清除失败
```

### 查询关节的累计转动角度

| 功能描述 | 查询各关节自出厂以来，累计的转动角度            |
| :--- | :---------------------------- |
| 参数说明 | `get_joint_odom`：查询各关节的累计转动角度 |
| 命令格式 | {s\:s}                        |

**使用示例：**
说明：查询关节的累计转动角度

```json
{"command":"get_joint_odom"}  
```

**返回示例：**

```json
六自由度
{"command":"get_joint_odom","odom":[1000,2000,3000,4000,5000,6000]}
七自由度
{"command":"get_joint_odom","odom":[1000,2000,3000,4000,5000,6000,7000]}
若指令正确，返回各关节累计的转动角度
```

若指令正确，返回各关节累计的转动角度

### 清零关节的累计转动角度

| 功能描述 | 清零各关节自出厂以来，累计的转动角度             |
| :--- | :----------------------------- |
| 参数说明 | `clear_joint_odom`：清零关节累计转动的角度 |
| 命令格式 | {s\:s}                         |

**使用示例：**
说明：清零关节累计转动的角度

```json
{"command":"clear_joint_odom"}
```

**返回示例：**

```json
{"command":"clear_joint_odom","clear_state":true}
true-清除成功，false-清除失败
```

### 设置高速网口（基础系列）

| 功能描述 | 控制器面板有2个网口，左侧为高速网口，默认为关闭状态，需要通过指令打开；右侧靠近面板边缘的为普通网口，用户无需配置，可直接使用。 |
| :--- | :--------------------------------------------------------------- |
| 参数说明 | `set_high_speed_eth`：配置高速网口                                      |
| 命令格式 | {s\:s,s\:i}                                                      |

**使用示例：**
说明：mode

```json
{"command":"set_high_speed_eth", "mode":0}  
```

**返回示例：**

```json
{"command":"set_high_speed_eth","set_state":true}
true-设置成功，false-设置失败
```

### 参数保存（基础系列）

| 功能描述 | 保存所有参数                        |
| :--- | :---------------------------- |
| 参数说明 | `save_device_info_all`：保存所有参数 |
| 命令格式 | {s\:s}                        |

**使用示例：**
说明：保存所有参数

```json
{"command":"save_device_info_all"}
```

**返回示例：**

```json
{"command":"save_device_info_all","model":true}
true-设置成功，false-设置失败
```

### 设置有线网IP地址（I系列）

| 功能描述 | 配置有线网卡IP地址             |
| :--- | :--------------------- |
| 参数说明 | `set_NetIP`：配置有线网口IP地址 |
| 命令格式 | {s\:s, s\:s}           |

**使用示例：**
说明：配置有线网口IP地址为192.168.1.20

```json
{"command":"set_NetIP","ip":"192.168.1.20"}
```

**返回示例：**

```json
{"command":"set_NetIP","status":true} //IP地址设置成功
{"command":"set_NetIP","status":false} //IP地址设置失败
```

### 清除系统错误

| 功能描述 | 清除系统错误                   |
| :--- | :----------------------- |
| 参数说明 | `clear_system_err`清除系统错误 |
| 命令格式 | {s\:s}                   |

**使用示例：**
说明：用于手动清除系统错误，如果不手动清除，错误将一直保留，直到新的运动指令下发则会自动清除。

```json
 {"command":"clear_system_err"} 
```

**返回示例：**

```json
{"command":"clear_system_err","clear_state":true} //清除系统错误成功
{"command":"clear_system_err","clear_state":false}  //清除系统错误失败
```

### 查询软件信息

| 功能描述 | 查询机械臂软件信息                         |
| :--- | :-------------------------------- |
| 参数说明 | `get_arm_software_info`：查询机械臂软件信息 |
| 命令格式 | {s\:s}                            |

**使用示例：**
说明：查询机械臂软件信息

```json
{"command":"get_arm_software_info"} 
```

**返回示例：**

```json
{"Product_version":"RM65-BI","algorithm_info":{"version":"1.2.3"},"command":"arm_software_info","ctrl_info":{"build_time":"2023/12/13 20:58:10","version":"V1.4.6"},"dynamic_info":{"model_version":"1"},"plan_info":{"build_time":"2023/12/13 20:58:24","version":"V1.4.6"}}
参数说明：
plan_info：plan层软件信息，version代表版本号、build_time代表编译时间
ctrl_info：ctrl层软件信息，version代表版本号、build_time代表编译时间
algorithm_info：算法库信息，version代表版本号
Product_version：机械臂型号，仅I系列机械臂支持
dynamic_info：动力学版本，model_version 动力学模型版本号
```


## 通讯配置

机械臂控制器可通过网口、WIFI、RS232-USB接口和RS485接口与用户通信，用户使用时无需切换，可使用上述任一接口，控制器收到指令后，若指令格式正确，则会通过相同的接口反馈数据。

### 设置wifiAP

| 功能描述 | 配置wifiAP内容，无返回，设置成功后蜂鸣器响，手动重启控制器进入WIFIAP模式。 |
| :--- | :------------------------------------------ |
| 参数说明 | `set_wifi_ap`：配置wifiAP内容                    |
| 命令格式 | {s\:s,s\:s,s\:s}                            |

**使用示例：**
说明：配置wifiAP内容，wifi名称：robot，连接密码：12345678

```json
{"command":"set_wifi_ap","wifi_name":"robot","password":"12345678"}
说明：配置wifiSTA内容，目标路由器名称：robot，路由器密码：12345678
```

### 设置wifiSTA

| 功能描述 | 配置wifiSTA内容，无返回，设置成功后蜂鸣器响，手动重启控制器进入WIFISTA模式。 |
| :--- | :-------------------------------------------- |
| 参数说明 | `set_wifi_sta`：配置wifiSTA内容                    |
| 命令格式 | {s\:s,s\:s,s\:s}                              |

**使用示例：**
说明：配置wifiSTA内容，目标路由器名称：robot，路由器密码：12345678

```json
{"command":"set_wifi_sta","router_name":"robot","password":"12345678"}
```

**返回示例：**

```json
{"Product_version":"RM65-BI","algorithm_info":{"version":"1.2.3"},"command":"arm_software_info","ctrl_info":{"build_time":"2023/12/13 20:58:10","version":"V1.4.6"},"dynamic_info":{"model_version":"1"},"plan_info":{"build_time":"2023/12/13 20:58:24","version":"V1.4.6"}} 
```

### 设置USB（基础系列）

| 功能描述 | 配置UART-USB波特率，无返回           |
| :--- | :-------------------------- |
| 参数说明 | `set_usb`：配置USB波特率，最高460800 |
| 命令格式 | {s\:s,s\:i}                 |

**使用示例：**
说明：配置USB波特率为460800

```json
{"command":"set_usb","baudrate":460800}
```

### 设置RS485

| 功能描述 | 配置RS485接口波特率，无返回                  |
| :--- | :-------------------------------- |
| 参数说明 | `set_RS485`：配置RS485接口波特率，最高460800 |
| 命令格式 | {s\:s, s\:i}                      |

**使用示例：**
说明：配置RS485波特率为460800

```json
{"command":"set_RS485","baudrate":460800}
波特率可选范围：9600，19200，38400，115200和460800，若用户设置其他数据，控制器会默认按照460800处理。
该指令下发后，若Modbus模式为打开状态，则会自动关闭，同时控制器会记录当前波特率，断电重启后仍会使用该波特率对外通信。
```

### 设置高速网口IP（基础系列）

| 功能描述 | 设置高速网口网络配置                     |
| :--- | ------------------------------ |
| 参数说明 | `set_high_ethernet` 配置高速网口网络IP |
| 命令格式 | {s\:s,s\:s,s\:s,s\:ss}         |

**使用示例：**
说明：配置高速网口网络IP

```json
{"command":"set_high_ethernet","ip":"192.168.1.18","mask":"255.255.255.0","gateway":"192.168.1.1"} 
说明：
ip：网络地址
mask：子网掩码
gateway：网关
```

**返回示例：**

```json
{"command": "set_high_ethernet", "state": true}
true-设置成功，false-设置失败
```

### 查询高速网口IP（基础系列）

| 功能描述 | 获取高速网口网络配置                     |
| :--- | :----------------------------- |
| 参数说明 | `get_high_ethernet` 获取高速网口网络配置 |
| 命令格式 | {s\:s}                         |

**使用示例：**
说明：获取高速网口网络配置

```json
{"command":"get_high_ethernet"}
```

**返回示例：**

```json
{"command": "get_high_ethernet","mask": "255.255.255.0","ip": "192.168.1.20", "gateway": "192.168.1.1","mac": "11:22:33:44:55:66"}
ip：网络地址
mask：子网掩码
gateway：网关
mac:mac地址
```

### 查询有线网卡网络信息（I系列）

| 功能描述 | 查询有线网卡网络信息                               |
| :--- | :--------------------------------------- |
| 参数说明 | `get_wired_net`：获取有线网卡信息，未连接有线网卡则会返回无效数据 |
| 命令格式 | {s\:s}                                   |

**使用示例：**
说明：查询有线网卡网络信息

```json
{"command":"get_wired_net"}   
```

**返回示例：**

```json
{"command":"get_wired_net","mask": "255.255.255.0","ip": "192.168.1.18","mac": "11:22:33:44:55:66"}
ip：网络地址
mask：子网掩码
mac：mac地址 
```

### 查询无线网卡网络信息（I系列）

| 功能描述 | 查询无线网卡网络信息                |
| :--- | :------------------------ |
| 参数说明 | `get_wifi_net`：查询无线网卡网络信息 |
| 命令格式 | {s\:s}                    |

**使用示例：**
说明：查询无线网卡网络信息

```json
{"command":"get_wifi_net"}   
```

**返回示例：**

```json
{"command":"get_wifi_net","mode":"ap","mask": "255.255.255.0","ip": "192.168.1.18","mac": "11:22:33:44:55:66","ssid":"realman_ap","password":"12345678","channel":6}
ip：网络地址
mask：子网掩码
mac：mac地址 
mode：ap代表热点模式，sta代表联网模式
ssid：设置或默认的wifi名称
password：设置或默认的wifi密码
channel：如果是AP模式，则存在此字段，标识wifi热点的物理信道号
```

### 恢复网络设置（I系列）

| 功能描述 | 恢复网络出厂设置                    |
| :--- | :-------------------------- |
| 参数说明 | `set_net_default`：设置网络为出厂设置 |
| 命令格式 | {s\:s}                      |

**使用示例：**
说明：网络恢复默认设置

```json
{"command":"set_net_default"} 
```

**返回示例：**&#x20;

```json
配置成功：
{"command":"set_net_default","net_default_state":true}
配置失败：
{"command":"set_net_default","net_default_state":false}
```

### 关闭wifi功能（I系列）

| 功能描述 | 配置关闭wifi功能，需要重启后生效          |
| :--- | :-------------------------- |
| 参数说明 | `set_wifi_close`：配置关闭wifi功能 |
| 命令格式 | {s\:s}                      |

**使用示例：**
说明：配置关闭wifi功能

```json
{"command":"set_wifi_close"} 
```

**返回示例：**

```json
配置成功：
{"command":"set_wifi_close","wifi_close_state":true}
配置失败：
{"command":"set_wifi_close","wifi_close_state":false}
```


## 查询机械臂状态信息

### 查询机械臂关节角度

| 功能描述 | 查询机械臂关节角度                    |
| :--- | :--------------------------- |
| 参数说明 | `get_joint_degree`：获取机械臂角度信息 |
| 命令格式 | {s\:s}                       |

**使用示例：**
说明：查询机械臂关节角度

```json
 {"command":"get_joint_degree"}
```

**返回示例：**
说明：反馈机械臂关节角度
六自由度

```json
{"state":"joint_degree","joint":[10,20,30,40,50,60]}  
```

七自由度

```json
{"state":"joint_degree","joint":[10,20,30,40,50,60,70]}
```

**参数说明：**

| 功能描述 | 反馈机械臂关节角度                    |
| :--- | :--------------------------- |
| 参数说明 | `joint_degree`：机械臂关节角度       |
| 命令格式 | 六自由度：{s\:s,s:\[i,i,i,i,i,i]} |

### 一次性查询机械臂所有状态信息

| 功能描述 | 一次性查询机械臂所有信息                  |
| :--- | :---------------------------- |
| 参数说明 | `get_arm_all_state`：获取机械臂所有信息 |
| 命令格式 | {s\:s}                        |

**使用示例：**
说明：一次性查询机械臂所有信息

```json
{"command":"get_arm_all_state"}
```

**返回示例：**
说明：反馈机械臂所有信息

```json
{"command":"get_arm_all_state"}
```

**参数说明：**

| 功能描述 | 反馈机械臂所有信息           |
| :--- | :------------------ |
| 参数说明 | `all_state`：机械臂所有信息 |

### 查询规划计数

| 功能描述 | 查询轨迹规划计数                       |
| :--- | :----------------------------- |
| 参数说明 | `get_arm_plan_num`：获取机械臂轨迹规划计数 |
| 命令格式 | {s\:s}                         |

**使用示例：**
说明：反馈机械臂所有信息

```json
{"command":"get_arm_plan_num"}
```

**返回示例：**
说明：反馈机械臂轨迹规划计数。

```json
{"loop_cont":[],"loop_num":[],"plan_num":3,"state":"arm_plan_num"}
```

**参数说明：**

| 功能描述 | 反馈机械臂轨迹规划计数                     |
| :--- | :------------------------------ |
| 参数说明 | `plan_num`：机械臂轨迹规计数             |
| 命令格式 | {s\:s,s\:i,s:\[i,i…],s:\[i,i…]} |

### 查询控制器RS485模式（I系列）

| 功能描述 | 查询控制器RS485模式                             |
| :--- | :--------------------------------------- |
| 参数说明 | `get_controller_RS485_mode`：查询控制器RS485模式 |
| 命令格式 | {s\:s}                                   |

**使用示例：**
说明：查询控制器RS485模式

```json
{"command":"get_controller_RS485_mode"}
```

**返回示例：**

```json
{"command":"get_controller_RS485_mode","controller_RS485_mode":1,"baudrate":460800,"modbus_timeout":1}
```

### 查询工具端RS485模式（I系列）

| 功能描述 | 查询工具端RS485模式                       |
| :--- | :--------------------------------- |
| 参数说明 | `get_tool_RS485_mode`：查询工具端RS485模式 |
| 命令格式 | {s\:s}                             |

**使用示例：**
说明：查询工具端RS485模式

```json
{"command":"get_tool_RS485_mode"}
```

**返回示例：**

```json
{"command":"get_tool_RS485_mode","tool_RS485_mode":0,"baudrate":460800,"modbus_timeout":1}
```


## 控制器IO配置

机械臂具有IO端口，基础系列数量和分类如下所示：

| 数字输出：DO | 4路，可配置为0\~12V |
| :------ | :------------ |
| 数字输入：DI | 3路，可配置为0\~12V |
| 模拟输出：AO | 4路，输出电压0\~10V |
| 模拟输入：AI | 4路，输入电压0\~10V |

I系列数量和分类如下所示：

| 数字IO：DO/DI复用 | 4路，可配置为0\~24V |
| :----------- | :------------ |

### 设置数字IO模式（I系列）

| 功能描述 | 设置数字IO模式               |
| :--- | :--------------------- |
| 参数说明 | `set_IO_mode`：设置数字IO模式 |
| 命令格式 | {s\:s,s\:i,s\:i}       |

**使用示例：**
说明：设置数字IO模式

```json
{"command":"set_IO_mode","IO_Num":1,"IO_mode":0}
说明：”IO_Num”：IO端口号，范围：1~4
"IO_mode"：模式，0-通用输入模式，1-通用输出模式、2-输入开始功能复用模式、3-输入暂停功能复用模式、4-输入继续功能复用模式、5-输入急停功能复用模式、6-输入进入电流环拖动复用模式、7-输入进入力只动位置拖动模式（六维力版本可配置）、8-输入进入力只动姿态拖动模式（六维力版本可配置）、9-输入进入力位姿结合拖动复用模式（六维力版本可配置）、10-输入外部轴最大软限位复用模式（外部轴模式可配置）、11-输入外部轴最小软限位复用模式（外部轴模式可配置）。
```

**返回示例：**

```json
{"command":"set_IO_mode","set_state":true}配置成功
{"command":"set_IO_mode","set_state":false}配置失败
```

### 设置数字IO输出状态

| 功能描述 | 设置数字IO输出                |
| :--- | :---------------------- |
| 参数说明 | `set_DO_state`：设置数字IO输出 |
| 命令格式 | {s\:s,s\:i,s\:i}        |

**使用示例：**
说明：设置数字IO模式

```json
{"command":"set_DO_state","IO_Num":1,"state":1}
```

**返回示例：**

```json
{"command":"set_DO_state","set_state":true}配置成功
{"command":"set_DO_state","set_state":false}配置失败
```

### 查询数字IO状态（I系列）

| 功能描述 | 获取数字IO输出状态              |
| :--- | :---------------------- |
| 参数说明 | `get_IO_state`：获取数字IO输出 |
| 命令格式 | {s\:s,s\:i}             |

**使用示例：**
说明：获取数字IO输出状态

```json
{"command":"get_IO_state","IO_Num":1}  
```

**返回示例：**

```json
{"state":"IO_state","IO_Num":1,"IO_Mode":1,"IO_state":1}
“state”：IO状态
“IO_Mode”：0-通用输入模式，1-通用输出模式、2-输入开始功能复用模式、3-输入暂停功能复用模式、4-输入继续功能复用模式、5-输入急停功能复用模式、6-输入进入电流环拖动复用模式、7-输入进入力只动位置拖动模式、8-输入进入力只动姿态拖动模式、9-输入进入力位姿结合拖动复用模式、10-输入外部轴最大软限位复用模式、11-输入外部轴最小软限位复用模式
```

### 查询数字IO输出状态（基础系列）

| 功能描述 | 获取数字IO输出状态              |
| :--- | :---------------------- |
| 参数说明 | `get_DO_state`：获取数字IO输出 |
| 命令格式 | {s\:s,s\:i}             |

**使用示例：**
说明：获取数字IO输出状态

```json
 {"command":"get_DO_state","IO_Num":1}   
```

**返回示例：**

```json
{"state":"DO_state","IO_Num":1,"IO_state":1}
“state”：IO状态，1-输出高，0-输出低
```

### 查询数字IO输入状态（基础系列）

| 功能描述 | 获取数字IO输入                  |
| :--- | :------------------------ |
| 参数说明 | `get_DI_state`：获取数字IO输入状态 |
| 命令格式 | {s\:s,s\:i}               |

**使用示例：**
说明：获取数字IO输出状态

```json
{"command":"get_DI_state","IO_Num":1}   
```

**返回示例：**

```json
{"state":"DI_state","IO_Num":1,“IO_state”：1}
“state”：IO状态，1-输入高，0-输入低
```

### 设置模拟IO输出状态（基础系列）

| 功能描述 | 设置模拟IO输出                |
| :--- | :---------------------- |
| 参数说明 | `set_AO_state`：设置模拟IO输出 |
| 命令格式 | {s\:s,s\:i,s\:i}        |

**使用示例：**
说明：设置模拟IO输出

```json
{"command":"set_AO_state","IO_Num":1,"voltage":1000}
```

**返回示例：**

```json
{"command":"set_AO_state","state":true}配置成功
{"command":"set_AO_state","state":false}配置失败
```

### 查询模拟IO输出状态（基础系列）

| 功能描述 | 获取模拟IO输出                |
| :--- | :---------------------- |
| 参数说明 | `get_AO_state`：获取模拟IO输出 |
| 命令格式 | {s\:s,s\:i}             |
|      |                         |

**使用示例：**
说明：获取模拟IO输出

```json
{"command":"get_AO_state","IO_Num":1} 
```

**返回示例：**

```json
{"state":"AO_state","IO_Num":1,"voltage":1000}
“voltage”：IO输出电压，分辨率0.001V，范围：0~10000，代表输出电压0v~10v
```

### 查询模拟IO输入状态（基础系列）

| 功能描述 | 获取模拟IO输入                  |
| :--- | :------------------------ |
| 参数说明 | `get_AI_state`：获取模拟IO输入状态 |
| 命令格式 | {s\:s,s\:i,s\:i}          |

**使用示例：**
说明：获取模拟IO输出

```json
{"command":"get_AI_state","IO_Num":1} 
```

**返回示例：**

```json
{"state":"AI_state","IO_Num":1,"voltage":1000}
“voltage”：IO输入电压，分辨率0.001V，范围：0~10000，代表输入电压0v~10v
```

### 查询所有IO输入状态

| 功能描述 | 获取所有IO输入                  |
| :--- | :------------------------ |
| 参数说明 | `get_IO_input`：获取所有IO输入状态 |
| 命令格式 | {s\:s}                    |

**使用示例：**
说明：获取所有IO输入状态

```json
 {"command":"get_IO_input"}   
```

**返回示例：**

```json
{"state":"IO_input_state","DI":[1,1,1],"AI":[1000,2000,3000,4000]}
“DI”：数字输入状态，1-高，0-低
“AI”：模拟输入电压，精度0.001V，如：1000，代表1V
```

### 查询所有IO输出状态

| 功能描述 | 获取所有IO输出                   |
| :--- | :------------------------- |
| 参数说明 | `get_IO_output`：获取所有IO输出状态 |

**使用示例：**
说明：获取所有IO输出

```json
{"command":"get_IO_output"}    
```

**返回示例：**

```json
{"state":"IO_output_state","DO":[1,1,1,1],"AO":[1000,2000,3000,3000]}
“DO”：数字输出状态，1-高，0-低
“AO”：模拟输出电压，精度0.001V，如：1000，代表1V
```

### 设置电源输出（I系列）

| 功能描述 | 设置电源输出               |
| :--- | :------------------- |
| 参数说明 | `set_voltage`：设置电源输出 |
| 命令格式 | {s\:s,s\:i}          |

**使用示例：**
说明：设置电源输出

```json
 {"command":"set_voltage","voltage_type":2}   
```

**返回示例：**

```json
{"command":"set_voltage","state":true}配置成功
{"command":"set_voltage","state":false}配置失败
```

### 查询电源输出（I系列）

| 功能描述 | 获取控制器电源输出类型          |
| :--- | :------------------- |
| 参数说明 | `get_voltage`：获取电源输出 |
| 命令格式 | {s\:s}               |

**使用示例：**
说明：获取控制器电源输出类型

```json
{"command":"get_voltage"}   
```

**返回示例：**

```json
{"command":"voltage_state",“voltage_type”：2}
“voltage_type”：电源输出类型，范围：0~3
0-0V，2-12V，3-24V
```


## 末端工具IO配置

机械臂末端工具端具有IO端口，数量和分类如下所示：

| 电源输出 | 1路，可配置为0V/5V/12V/24V |
| :--- | :------------------- |
| 数字IO | 2路，输入输出可配置           |
| 通讯接口 | 1路，可配置为RS485         |

### 设置工具端数字IO输出状态

| 功能描述 | 设置工具端数字IO输出                  |
| :--- | :--------------------------- |
| 参数说明 | `set_tool_DO_state`：设置数字IO输出 |
| 命令格式 | {s\:s,s\:i,s\:i}             |

**使用示例：**
说明：设置工具端数字IO输出

```json
{"command":"set_tool_DO_state","IO_Num":1,"state":1}
```

**返回示例：**

```json
{"command":"set_tool_DO_state","set_state":true}配置成功
{"command":"set_tool_DO_state","set_state":false}配置失败
```

### 设置工具端数字IO模式

| 功能描述 | 设置数字IO模式                    |
| :--- | :-------------------------- |
| 参数说明 | `set_tool_IO_mode`：设置数字IO模式 |
| 命令格式 | {s\:s,s\:i,s\:i}            |

**使用示例：**
说明：设置数字IO模式

```json
{"command":"set_tool_IO_mode","IO_Num":1,"state":0} 
```

**返回示例：**

```json
{"command":"set_tool_IO_mode","set_state":true}配置成功
{"command":"set_tool_IO_mode","set_state":false}配置失败
```

### 查询工具端数字IO状态

| 功能描述 | 获取数字IO状态                     |
| :--- | :--------------------------- |
| 参数说明 | `get_tool_IO_state`：获取数字IO状态 |
| 命令格式 | {s\:s}                       |

**使用示例：**
说明：获取数字IO状态

```json
{"command":"get_tool_IO_state"} 
```

**返回示例：**

```json
{"state":"tool_IO_state","IO_Mode":[0,1],"IO_State":[0,1]}
说明：“IO_Mode”：0-输入模式，1-输出模式
“IO_State”：0-低，1-高
```

### 设置工具端电源输出

| 功能描述 | 设置电源输出                    |
| :--- | :------------------------ |
| 参数说明 | `set_tool_voltage`：设置电源输出 |
| 命令格式 | {s\:s,s\:i}               |

**使用示例：**
说明：设置电源输出

```json
{"command":"set_tool_voltage","voltage_type":1}
```

**返回示例：**

```json
{"command":"set_tool_voltage","state":true} 配置成功
{"command":"set_tool_voltage","state":false} 配置失败
```

### 查询工具端电源输出

| 功能描述 | 获取电源输出类型                  |
| :--- | :------------------------ |
| 参数说明 | `get_tool_voltage`：获取电源输出 |

**使用示例：**
说明：获取电源输出类型

```json
{"command":"get_tool_voltage"} 
```

**返回示例：**

```json
{"state":"tool_voltage_state",“voltage_type”：1}
“voltage_type”：电源输出类型，范围：0~3
0-0V，1-5V，2-12V，3-24V
```


## 末端工具：手爪控制（选配）

睿尔曼机械臂末端配备了因时机器人公司的EG2-4C2手爪，为了便于用户操作手爪，机械臂控制器对用户开放了手爪的控制协议（手爪控制协议与末端modbus功能互斥），如下所示：

### 设置手爪行程

| 功能描述 | 设置手爪行程，即手爪开口的最大值和最小值，设置成功后会自动保存，手爪断电不丢失 |
| :--- | :-------------------------------------- |
| 参数说明 | `set_gripper_route`：设置手爪行程              |
| 命令格式 | {s\:s,s\:i,s\:i}                        |

**使用示例：**
说明：设置手爪行程，即手爪开口的最大值和最小值，设置成功后会自动保存，手爪断电不丢失

```json
{"command":"set_gripper_route","min":70,"max":500}
```

**返回示例：**

```json
{"command":"set_gripper_route","state":true}配置成功
{"command":"set_gripper_route","state":false}配置失败
```

### 松开手爪

| 功能描述 | 松开手爪，即手爪以指定的速度运动到开口最大处       |
| :--- | :--------------------------- |
| 参数说明 | `set_gripper_release`：设置手爪松开 |
| 命令格式 | {s\:s,s\:i,s\:b}             |

**使用示例：**
说明：设置手爪行程，即手爪开口的最大值和最小值，设置成功后会自动保存，手爪断电不丢失

```json
{"command":"set_gripper_release","speed":500,"block":true}
```

**返回示例：**

```json
该指令不论是否为阻塞模式均会返回
{"command":"set_gripper","state":true}手爪松开成功
{"command":"set_gripper","state":false}手爪松开失败
该指令为阻塞模式下，运动到指定位置的上报信息
{"state":"current_trajectory_state","trajectory_state":true,"device":1}
```

### 手爪力控夹取

| 功能描述 | 手爪力控夹取，手爪以设定的速度和力夹取，当夹持力超过设定的力阈值后，停止夹取 |
| :--- | :------------------------------------- |
| 参数说明 | `set_gripper_pick`：设置手爪力矩夹取            |
| 命令格式 | {s\:s,s\:i,s\:i,s\:b}                  |

**使用示例：**
说明：设置手爪力矩夹取

```json
{"command":"set_gripper_pick","speed":500,"force":200,"block":true} 
```

**返回示例：**

```json
该指令不论是否为阻塞模式均会返回
{"command":"set_gripper","state":true}手爪松开成功
{"command":"set_gripper","state":false}手爪松开失败
该指令为阻塞模式下，运动到指定位置的上报信息
{"state":"current_trajectory_state","trajectory_state":true,"device":1}
```

### 手爪持续力控夹取

| 功能描述 | 手爪力控夹取，手爪以设定的速度和力夹取，当夹持力超过设定的力阈值后，停止夹取；当夹持力再次小于力矩阈值时，手爪再次夹取，直至夹持力超过力控阈值。 |
| :--- | :----------------------------------------------------------------------- |
| 参数说明 | `set_gripper_pick_on`：设置手爪力控夹取                                           |
| 命令格式 | {s\:s,s\:i,s\:i,s\:b}                                                    |

```json
{"command":"set_gripper_pick_on","speed":500,"force":200,"block":true}
```

**返回示例：**

```json
该指令不论是否为阻塞模式均会返回
{"command":"set_gripper","state":true}手爪松开成功
{"command":"set_gripper","state":false}手爪松开失败
该指令为阻塞模式下，运动到指定位置的上报信息
{"state":"current_trajectory_state","trajectory_state":true,"device":1}
```

### 手爪到达指定位置

| 功能描述 | 手爪到达指定位置，当当前开口小于指定开口时，手爪以指定速度松开到指定开口位置；当当前开口大于指定开口时，手爪以指定速度和力矩闭合往指定开口处闭合，当夹持力超过力矩阈值或者达到指定位置后，手爪停止。 |
| :--- | :------------------------------------------------------------------------------------------------- |
| 参数说明 | `set_gripper_position`：设置手爪达到指定位置                                                                  |
| 命令格式 | {s\:s,s\:i,s\:b}                                                                                   |

```json
{"command":"set_gripper_position","position":500,"block":true}
```

**返回示例：**

```json
该指令不论是否为阻塞模式均会返回
{"command":"set_gripper","state":true}手爪松开成功
{"command":"set_gripper","state":false}手爪松开失败
该指令为阻塞模式下，运动到指定位置的上报信息
{"state":"current_trajectory_state","trajectory_state":true,"device":1}
```

### 查询夹爪状态

| 功能描述 | 查询夹爪状态                     |
| :--- | :------------------------- |
| 参数说明 | `get_gripper_state`：查询夹爪状态 |
| 命令格式 | {s\:s}                     |

**使用示例：**
说明：

```json
{"command":"get_gripper_state"}
```

**返回示例：**

```json
{"command":"get_gripper_state","enable":1,"status":1,"error":0,"mode":1,"current_force":100,"temperature":40,"actpos":150}
说明：
enable：夹爪使能标志，0 表示未使能，1 表示使能
status：夹爪在线状态，0 表示离线， 1表示在线
error：夹爪错误信息，低8位表示夹爪内部的错误信息bit5-7 保留bit4 内部通bit3 驱动器bit2 过流 bit1 过温bit0 堵转
mode：当前工作状态：1 夹爪张开到最大且空闲，2 夹爪闭合到最小且空闲，3 夹爪停止且空闲，4 夹爪正在闭合，5 夹爪正在张开，6 夹爪闭合过程中遇到力控停止
current_force：夹爪当前的压力，单位g
temperature：当前温度单位℃
actpos：夹爪开口度
```



## 末端工具：六维力（选配）

睿尔曼机械臂六维力版末端配备集成式六维力传感器，无需外部走线，用户可直接通过协议对六维力进行操作，获取六维力数据。

如下图所示，正上方为六维力的Z轴，航插反方向为六维力的Y轴，坐标系符合右手定则。机械臂位于零位姿态时，工具坐标系与六维力的坐标系方向一致。

另外，六维力额定力200N，额定力矩8Nm，过载水平300%FS，工作温度5\~80℃，准度0.5%FS。使用过程中注意使用要求，防止损坏六维力传感器。

![](../api/python/doc/sixForce.png) 

### 查询六维力数据

| 功能描述      | 查询当前六维力传感器得到的力和力矩信息：Fx,Fy,Fz,Mx,My,Mz                   |
| :-------- | :------------------------------------------------------ |
| 参数说明      | `get_force_data`：获取力传感器信息，若要周期获取力数据，基础系列机械臂查询周期不能小于50ms |
| 命令格式      | {s\:s}                                                  |
| 示例        | {"command":"get\_force\_data"}                          |
| **使用示例：** |                                                         |

```json
{"command":"get_force_data"}
```

**返回示例：**

```json
{"command":"get_force_data","force_data":[1000,2000,3000,400,500,600],"zero_force_data":[500,1000,1500,200,250,300],"work_zero_force_data":[500,1000,1500,200,250,300],"tool_zero_force_data":[500,1000,1500,200,250,300]}
数据精度：0.001
原始力数据force_data依次为Fx=1N，Fy=2N，Fz=3N，Mx=0.4Nm，My=0.5Nm，Mz=0.6Nm；传感器坐标系下系统受到的外力数据zero_force_data依次为Fx=0.5N，Fy=1N，Fz=1.5N，Mx=0.2Nm，My=0.25Nm，Mz=0.3Nm；当前工作坐标系下系统受到的外力数据work_zero_force_data依次为Fx=0.5N，Fy=1N，Fz=1.5N，Mx=0.2Nm，My=0.25Nm，Mz=0.3Nm；当前工具坐标系下系统受到的外力数据tool_zero_force_data依次为Fx=0.5N，Fy=1N，Fz=1.5N，Mx=0.2Nm，My=0.25Nm，Mz=0.3Nm；
```

### 六维力数据清零

| 功能描述 | 将六维力数据清零，标定当前状态下的零位           |
| :--- | :---------------------------- |
| 参数说明 | `clear_force_data`：标定当前状态下的零位 |
| 命令格式 | {s\:s}                        |

**使用示例：**
说明：

```json
{"command":"clear_force_data"}
```

**返回示例：**

```json
{"command":"clear_force_data","clear_state":true}清空成功
{"command":"clear_force_data","clear_state":false}清空失败
```

### 自动设置六维力重心参数

| 功能描述 | 设置六维力重心参数，六维力重新安装后，必须重新计算六维力所受到的初始力和重心。分别在不同姿态下，获取六维力的数据，用于计算重心位置。该指令下发后，机械臂以固定的速度运动到各标定点，该过程不可中断，中断后必须重新标定。 |
| :--- | :----------------------------------------------------------------------------------------------------------- |
| 参数说明 | `set_force_sensor`：设置力传感器指定位置时的数值                                                                            |
| 命令格式 | {s\:s}                                                                                                       |

**使用示例：**
说明：

```json
{"command":"set_force_sensor"}
```

**返回示例：**

```json
{"command":"set_force_sensor","set_state":true}配置成功
{"command":"set_force_sensor","set_state":false}配置失败
```

### 手动标定六维力数据

| 功能描述 | 设置六维力重心参数，六维力重新安装后，必须重新计算六维力所受到的初始力和重心。该手动标定流程，适用于空间狭窄工作区域，以防自动标定过程中机械臂发生碰撞，用户可以手动选取四个位姿下发，当下发完四个点后，机械臂开始自动沿用户设置的目标运动，并在此过程中计算六维力重心。 |
| :--- | :----------------------------------------------------------------------------------------------------------------------------------- |
| 参数说明 | `manual_set_force`：标定感器重心数据                                                                                                          |
| 命令格式 | 六自由度：{s\:s,s:\[i,i,i,i,i,i]}                                                                                                         |

**使用示例：**
说明：

```json
六自由度：
{"command":"manual_set_force_pose1", "joint":[0, 0, 0, 0, 90000, 0]}
七自由度：
{"command":"manual_set_force_pose1", "joint":[0, 0, 0, 0, 0, 90000, 0]}                                                
```

**返回示例：**

```json
{"command":"set_force_sensor","set_state":true} 标定成功
{"command":"set_force_sensor","set_state":false} 标定失败
```

### 停止标定力传感器重心

| 功能描述 | 在标定力传感器过程中，如果发生意外，发送该指令，停止机械臂运动，退出标定流程 |
| :--- | :------------------------------------- |
| 参数说明 | `stop_set_force_sensor`：停止计算力传感器重心位置   |
| 命令格式 | {s\:s}                                 |

**使用示例：**

说明：

```json
{"command":"stop_set_force_sensor"}
```

**返回示例：**

```json
{"command":"stop_set_force_sensor","stop_state":true}计算成功
{"command":"stop_set_force_sensor","stop_state":false}计算失败
```


## 拖动示教

睿尔曼机械臂在拖动示教过程中，可记录拖动的轨迹点，并根据用户的指令对轨迹进行复现。

### 拖动示教开始

| 功能描述 | 拖动示教开始                     |
| :--- | :------------------------- |
| 参数说明 | `start_drag_teach`：拖动示教开始， |
| 命令格式 | {s\:s,s\:i}                |

**使用示例：**
说明：

```json
{"command":"start_drag_teach","trajectory_record":1}
```

**返回示例：**

```json
{"command":"start_drag_teach","drag_teach":true}
```

### 拖动示教结束

| 功能描述 | 拖动示教结束                   |
| :--- | :----------------------- |
| 参数说明 | `stop_drag_teach`：拖动示教结束 |
| 命令格式 | {s\:s}                   |

```json
{"command":"stop_drag_teach"}
```

**返回示例：**

```json
{"command":"stop_drag_teach","drag_teach":true}
```

### 开始复合模式拖动示教

| 功能描述 | 开始复合模式拖动示教                          |
| :--- | :---------------------------------- |
| 参数说明 | `start_multi_drag_teach`：开始复合模式拖动示教 |
| 命令格式 | {s\:s,s\:i,s\:i}                    |

**使用示例：**
说明：

```json
{"command":"start_multi_drag_teach","mode":0,"singular_wall":0}
```

**返回示例：**

```json
{"command":"start_multi_drag_teach","set_state":true}设置成功
{"command":"start_multi_drag_teach","set_state":false}设置失败
```

### 轨迹复现开始

| 功能描述 | 复现拖动示教中的轨迹：                  |
| :--- | :--------------------------- |
| 参数说明 | `run_drag_trajectory`：轨迹复现开始 |
| 命令格式 | {s\:s}                       |

**使用示例：**
说明：

```json
{"command":"run_drag_trajectory"}
```

**返回示例：**

```json
{"command":"run_drag_trajectory","run_state":true}复现成功
{"command":"run_drag_trajectory","run_state":false}复现失败
```

### 轨迹复现暂停

| 功能描述 | 轨迹复现过程中暂停                      |
| :--- | :----------------------------- |
| 参数说明 | `pause_drag_trajectory`：轨迹复现暂停 |
| 命令格式 | {s\:s}                         |

**使用示例：**
说明：

```json
{"command":"pause_drag_trajectory"}
```

**返回示例：**

```json
{"command":"pause_drag_trajectory","pause_state":true}暂停成功
{"command":"pasuse_drag_trajectory","pause_state":false}暂停失败
```

### 轨迹复现继续

| 功能描述 | 轨迹复现过程中暂停后继续                      |
| :--- | :-------------------------------- |
| 参数说明 | `continue_drag_trajectory`：轨迹复现继续 |
| 命令格式 | {s\:s}                            |

**使用示例：**
说明：

```json
{"command":"continue_drag_trajectory"}
```

**返回示例：**

```json
{"command":"continue_drag_trajectory","continue_state":true}继续成功
{"command":"continue_drag_trajectory","continue_state":false}继续失败
```

### 轨迹复现停止

| 功能描述 | 轨迹复现停止                        |
| :--- | :---------------------------- |
| 参数说明 | `stop_drag_trajectory`：轨迹复现继续 |
| 命令格式 | {s\:s}                        |

**使用示例：**
说明：

```json
{"command":"stop_drag_trajectory"}
```

**返回示例：**

```json
{"command":"stop_drag_trajectory","stop_state":true}停止成功
{"command":"stop_drag_trajectory","stop_state":false}停止失败
```

### 运动到轨迹起点

| 功能描述 | 轨迹复现前，必须控制机械臂运动到轨迹起点，如果设置正确，机械臂将以20%的速度运动到轨迹起点 |
| :--- | :--------------------------------------------- |
| 参数说明 | `drag_trajectory_origin`：轨迹复现起点                |
| 命令格式 | {s\:s}                                         |

**使用示例：**
说明：

```json
{"command":"drag_trajectory_origin"}
```

**返回示例：**

```json
```

### 力位混合控制

| 功能描述 | 在笛卡尔空间轨迹规划时，使用该功能可保证机械臂末端接触力恒定，使用时力的方向与机械臂运动方向不能在同一方向。开启力位混合控制，执行笛卡尔空间运动，接收到运动完成反馈后，需要等待2S后继续下发下一条运动指令。 |
| :--- | :------------------------------------------------------------------------------------------------------ |
| 参数说明 | `set_force_position`：设置力位混合控制模式                                                                         |
| 命令格式 | {s\:s,s\:i,s\:i,s\:i,s\:i}                                                                              |

**使用示例：**
说明：

```json
{"command":"set_force_position","sensor":1,"mode":0,"direction":2,"N":10}
```

**返回示例：**

```json
{"command":"set_force_position","set_state":true}设置成功
{"command":"set_force_position","set_state":false}设置失败
```

### 结束力位混合控制

| 功能描述 | 退出力位混合控制模式                       |
| :--- | :------------------------------- |
| 参数说明 | `stop_force_position`：结束力位混合控制模式 |
| 命令格式 | {s\:s}                           |

**使用示例：**
说明：

```json
{"command":"stop_force_position"}
```

**返回示例：**

```json
{"command":"stop_force_position","stop_state":true}结束成功
{"command":"stop_force_position","stop_state":false}结束失败
```


## 五指灵巧手（选配）

睿尔曼机械臂末端配置因时的五指灵巧手，可通过协议对灵巧手进行设置。

### 设置灵巧手手势

| 功能描述 | 设置灵巧手手势                 |
| :--- | :---------------------- |
| 参数说明 | `set_hand_posture`：设置手势 |
| 命令格式 | {s\:s,s\:i}             |

**使用示例：**
说明：

```json
{"command":"set_hand_posture","posture_num":1,"block":true}
```

**返回示例：**

```json
{"command":"set_hand_posture","set_state":true} 设置成功
{"command":"set_hand_posture","set_state":false} 设置失败
```

### 设置灵巧手动作序列

| 功能描述 | 设置灵巧手动作序列           |
| :--- | :------------------ |
| 参数说明 | `set_hand_seq`：设置手势 |
| 命令格式 | {s\:s,s\:i}         |

**使用示例：**
说明：

```json
{"command":"set_hand_seq","seq_num":1,"block":true}
```

**返回示例：**

```json
{"command":"set_hand_seq","set_state":true} 设置成功
{"command":"set_hand_seq","set_state":false} 设置失败
该指令为阻塞模式下，运动到指定位置的上报信息
{"state":"current_trajectory_state","trajectory_state":true,"device":2}
```

### 设置灵巧手各自由度角度

| 功能描述 | 设置灵巧手角度，灵巧手有6个自由度，从1\~6分别为小拇指，无名指，中指，食指，大拇指弯曲，大拇指旋转 |
| :--- | :-------------------------------------------------- |
| 参数说明 | `set_hand_angle`：设置手指角度                             |
| 命令格式 | {s\:s,s:\[i,i,i,i,i,i]}                             |

**使用示例：**
说明：

```json
{"command":"set_hand_angle","hand_angle":[-1,100,200,300,400,500],"block":true}
```

**返回示例：**

```json
{"command":"set_hand_angle","set_state":true} 设置成功
{"command":"set_hand_angle","set_state":false} 设置失败
该指令为阻塞模式下，运动到指定位置的上报信息
{"state":"current_trajectory_state","trajectory_state":true,"device":2}
```

### 设置灵巧手速度

| 功能描述 | 设置灵巧手关节速度               |
| :--- | :---------------------- |
| 参数说明 | `set_hand_speed`：设置手指角度 |
| 命令格式 | {s\:s,s\:i}             |

**使用示例：**
说明：

```json
{"command":"set_hand_speed","hand_speed":500}
hand_speed：手指速度，范围：1~1000
```

**返回示例：**

```json
{"command":"set_hand_speed","set_state":true}设置成功
{"command":"set_hand_speed","set_state":false}设置失败
```

### 设置灵巧手力阈值

| 功能描述 | 设置灵巧手关节力阈值               |
| :--- | :----------------------- |
| 参数说明 | `set_hand_force`：设置手指力阈值 |
| 命令格式 | {s\:s,s\:i}              |

**使用示例：**
说明：

```json
{"command":"set_hand_force","hand_force":500}
hand_force：手指力，范围：1~1000
```

**返回示例：**

```json
{"command":"set_hand_force","set_state":true}设置成功
{"command":"set_hand_force","set_state":false}设置失败
```

## Modbus配置

睿尔曼机械臂在控制器的航插和末端接口板航插处，各有1路RS485通讯接口，这两个RS485端口可通过JSON协议配置为标准的ModbusRTU模式。然后通过JOSN协议对端口连接的外设进行读写操作。

注意：控制器的RS485接口在未配置为ModbusRTU模式的情况下，可用于用户对机械臂进行控制，这两种模式不可兼容。若要恢复机械臂控制模式，必须将该端口的ModbusRTU模式关闭。ModbusRTU模式关闭后，系统会自动切换回机械臂控制模式，波特率460800BPS，停止位1，数据位8，无检验。

同时，I系列控制器支持ModbusTCP主站配置，可配置使用ModbusTCP主站，用于连接外部设备的ModbusTCP从站。

### 配置通讯端口ModbusRTU模式

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

### 关闭通讯端口ModbusRTU模式

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

### 配置连接ModbusTCP从站（I系列）

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

### 配置关闭ModbusTCP从站（I系列）

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

### 读线圈

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

### 读离散量输入

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

### 读保持寄存器

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

### 读输入寄存器

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

### 写单圈数据

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

### 写单个寄存器

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

### 写多个寄存器

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

### 写多圈数据

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

### 读多圈数据

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

### 读多个保存寄存器

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

### 读多个输入寄存器

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

## 系统安装方式及关节版本信息

睿尔曼机械臂可支持不同形式的安装方式，但是安装方式不同，机器人的动力学模型参数和坐标系的方向也有所差别。

### 设置安装方式参数

| 功能描述 | 设置安装方向参数                       |
| :--- | :----------------------------- |
| 参数说明 | `set_install_pose`：设置机械臂基座安装方式 |
| 命令格式 | {s\:s,s:\[i,i,i]}              |

**使用示例：**
说明：

```json
{"command":"set_install_pose","pose":[0,90,45]}
```

**返回示例：**

```json
{"command":"set_install_pose","set_state":true}设置成功
{"command":"set_install_pose","set_state":false}设置失败
```

### 查询关节软件版本号

| 功能描述 | 查询关节软件版本号                              |
| :--- | :------------------------------------- |
| 参数说明 | `get_joint_software_version`：获取关节软件版本号 |
| 命令格式 | {s\:s}                                 |

**使用示例：**
说明：

```json
{"command":"get_joint_software_version"}
```

**返回示例：**

```json
{"state":"joint_software_version","version":[531,531,531,531,531,531]}
531为uint16类型，转化为16进制为：0x0213，则当前关节的版本号为2.13

```

### 查询末端接口板软件版本号

| 功能描述 | 查询末端接口板软件版本号                             |
| :--- | :--------------------------------------- |
| 参数说明 | `get_tool_software_version`：获取末端接口板软件版本号 |
| 命令格式 | {s\:s}                                   |

**使用示例：**
说明：

```json
{"command":"get_tool_software_version"}
```

**返回示例：**

```json
{"state":"tool_software_version","version":531}
531为uint16类型，转化为16进制为：0x0213，则当前末端接口板的版本号为2.13
```


## 透传力位混合控制补偿（选配）

针对睿尔曼带一维力和六维力版本的机械臂，用户除了可直接使用示教器调用底层的力位混合控制模块外，还可以将自定义的轨迹以周期性透传的形式结合底层的力位混合控制算法进行补偿。

### 开启透传力位混合控制补偿模式

| 功能描述 | 开启底层力位混合控制模块补偿模式。在下发透传轨迹前必须下发该指令开启功能 |
| :--- | :----------------------------------- |
| 参数说明 | `Start_Force_Position_Move`          |
| 命令格式 | {s\:s}                               |

**使用示例：**
说明：

```json
{"command":"Start_Force_Position_Move"}
```

**返回示例：**

```json
{"command":"Start_Force_Position_Move","set_state":true}
True：设置成功，可进行后续透传。False：设置失败，机械臂有错误，不可进行后续透传
```

### Force_Position_Move：透传力位混合补偿

| 功能描述 | `Force_Position_Move`：用户周期性下发目标角度或者目标位姿，使用机械臂底层力位混合控制模块通过一维力传感器或者六维力传感器实现力位补偿。 |
| :--- | :----------------------------------------------------------------------------- |
| 参数说明 | `Force_Position_Move`：透传力位混合补偿                                                 |
| 命令格式 | 六自由度机械臂关节角度方式或位姿（姿态欧拉角）方式{s\:s,s:\[i,i,i,i,i,i],s\:i,s\:i,s\:i,s\:i,s\:b}      |

**使用示例：**
说明：

```json
位姿（姿态欧拉角）方式
{"command":"Force_Position_Move","pose":[100000,200000,30000,400,500,600],"sensor":0,"mode":0,"dir":0, "force":15,"follow":true}
位姿（姿态四元数）方式
{"command":"Force_Position_Move","pose_quat":[100000,200000,30000,400000,500000,600000,700000],"sensor":0,"mode":0,"dir":0, "force":15,"follow":true}
说明：透传目标位姿进行力位混合控制补偿
目标位置（欧拉角方式）：x：0.1m，y:0.2m，z：0.03m，Rx：0.4rad， Ry：0.5rad，Rz：0.6rad
目标位置（四元数方式）：x：0.1m，y:0.2m，z：0.03m，w：0.4， x：0.5，y：0.6，z：0.7
使用一维力沿工作坐标系进行Z方向补偿，力控为Fz：1.5N
{"command":"Force_Position_Move","joint":[1000,2000,3000,4000,5000,6000],"sensor":0,"mode":0, "dir":0, "force":15}
说明：透传目标角度进行力位混合控制补偿
关节1~6目标角度：1°，2°，3°，4°，5°，6°
使用一维力沿工作坐标系进行Z方向补偿，力控为Fz：1.5N
```

**返回示例：**

```json
规划成功——返回当前各关节角度和所使用力控方式的力或力矩，如果使用的是六维力，则也会返回全部方向上的力和力矩 
{s:s,s:[i,i,i,i,i,i],s:i, s:i}或{s:s, s:[i,i,i,i,i,i], s:i, s:[i,i,i,i,i,i], s:i}
一维力：
{"state":"Force_Position_State","joint":[10,20,30,40,50,60],"force":-15, "arm_err":0}当前关节1~6角度为0.01°~0.06°，所受到的力或力矩为-1.5
六维力：
{"state":"Force_Position_State","joint":[10,20,30,40,50,60],"force":-15, "all_direction_force":[11,21,-15,41,51,61],"arm_err":0}当前关节1~6角度为0.01°~0.06°，力控方向所受到的力或力矩为-1.5N，所有方向的力或力矩为X：1.1N，Y：2.1N，Z：-1.5N，Rx：4.1Nm，Ry：5.1Nm，Rz：6.1Nm
需要注意的是I系列机械臂不再提供返回值，可通过UDP状态主动上报接口采集机械臂实时状态。
{"command":"Force_Position_Move", "set_state":false}
```

### 关闭透传力位混合控制补偿模式

| 功能描述 | 关闭底层力位混合控制模块补偿模式。在完成透传轨迹后必须下发该指令关闭功能 |
| :--- | :----------------------------------- |
| 参数说明 | `Stop_Force_Position_Move`           |
| 命令格式 | {s\:s}                               |

**使用示例：**
说明：

```json
{"command":"Stop_Force_Position_Move"}
```

**返回示例：**

```json
{"command":"Stop_Force_Position_Move","set_state":true}
```
