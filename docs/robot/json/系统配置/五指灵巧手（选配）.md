
## 4.12五指灵巧手（选配）

睿尔曼机械臂末端配置因时的五指灵巧手，可通过协议对灵巧手进行设置。

### （1）设置灵巧手手势

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

### （2）设置灵巧手动作序列

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

### （3）设置灵巧手各自由度角度

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

### （4）设置灵巧手速度

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

### （5）设置灵巧手力阈值

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
