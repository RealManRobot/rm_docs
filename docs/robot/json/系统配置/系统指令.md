# 系统指令

## 控制机械臂上电、断电

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

## 读取机械臂电源状态

| 功能描述 | 读取机械臂电源状态                       |
| :--- | :------------------------------ |
| 参数说明 | `get_arm_power_state`：读取机械臂电源状态 |
| 命令格式 | {s\:s}                          |

**使用示例：**
说明：读取机械臂电源状态

```json
{"command":"get_arm_power_state"}
```

**返回示例：**

```json
格式：{s:s,s:i},1-上电状态，0断电状态
{"state":"arm_power_state","power_state":1}
```

## 读取软件版本号

| 功能描述 | 读取机械臂软件版本                            |
| :--- | :----------------------------------- |
| 参数说明 | `get_arm_software_version`：读取机械臂软件版本 |
| 命令格式 | {s\:s}                               |

**使用示例：**
说明：读取机械臂软件版本

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

## 读取控制器的累计运行时间

| 功能描述 | 读取控制器自出厂以来，累计的运行时间                |
| :--- | :-------------------------------- |
| 参数说明 | `get_system_runtime`：读取控制器累计的运行时间 |
| 命令格式 | {s\:s}                            |

**使用示例：**
说明：读取系统运行时间

```json
{"command":"get_system_runtime"}
```

**返回示例：**

```json
{"command":"get_system_runtime","day":0,"hour":0,"min":0,"sec":0}若系统正常，则返回运行时间
```

## 清零控制器的累计运行时间

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

## 读取关节的累计转动角度

| 功能描述 | 读取各关节自出厂以来，累计的转动角度            |
| :--- | :---------------------------- |
| 参数说明 | `get_joint_odom`：读取各关节的累计转动角度 |
| 命令格式 | {s\:s}                        |

**使用示例：**
说明：读取关节的累计转动角度

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

## 清零关节的累计转动角度

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

## 高速网口的配置（基础系列）

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

## 参数保存（基础系列）

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

## 配置有线网IP地址（I系列）

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

## 清除系统错误

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

## 读取软件信息

| 功能描述 | 读取机械臂软件信息                         |
| :--- | :-------------------------------- |
| 参数说明 | `get_arm_software_info`：读取机械臂软件信息 |
| 命令格式 | {s\:s}                            |

**使用示例：**
说明：读取机械臂软件信息

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
