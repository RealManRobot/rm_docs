
# 末端工具—手爪控制（选配）

睿尔曼机械臂末端配备了因时机器人公司的EG2-4C2手爪，为了便于用户操作手爪，机械臂控制器对用户开放了手爪的控制协议（手爪控制协议与末端modbus功能互斥），如下所示：

## （1）设置手爪行程

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

## （2）松开手爪

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

## （3）手爪力控夹取

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

## （4）手爪持续力控夹取

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

## （5）手爪到达指定位置

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

## （6）查询夹爪状态

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
