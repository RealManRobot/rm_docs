# 运动配置-步进指令类



## 关节步进

控制机械臂某个关节的步进运动。
**参数说明：**

| 参数             | 类型 | 说明                                                        |
| :--------------- | :--- | :---------------------------------------------------------- |
| `set_joint_step` |   `string`   | 关节步进指令。                                                  |
| `joint_step`     |   `int`   | （1）步进关节号；（2）关节步进角度，单位：°，精度：0.001°。 |
| `v`              |   `int`   | 速度百分比例系数，0~10。                                     |

**使用示例：**
实现：关节步进，关节1反方向步进10度，速度系数30%。

```json
{"command":"set_joint_step","joint_step":[1,-10000],"v":30}
```

**返回示例：**
指令接收成功，运动到位后连接吓一条轨迹。

```json
{"command":"set_joint_step","receive_state":true}
{"state":"current_trajectory_state","trajectory_state":true,"device":0,"trajectory_connect":1}
```

**参数说明：**
| 参数            | 类型   | 说明                                  |
| :-------------- | :----- | :------------------------------------ |
| `receive_state` | `bool` | `ture`：设置成功；`false`：设置失败。 |
| `trajectory_connect` | `num` | 代表是否连接下一条轨迹，0代表全部到位，1代表连接下一条轨迹。 |

## 位置步进

控制机械臂沿x、y、z轴方向直线步进运动。
**参数说明：**

| 参数           | 类型 | 说明                                                         |
| :------------- | :--- | :----------------------------------------------------------- |
| `set_pos_step` |   `string`   | 位置步进指令。                                                   |
| `step_type`    |   `string`   | 步进类型，x_step为X轴方向，y_step为Y轴方向，z_step为Z轴方向。 |
| `v`            |   `int`   | 速度百分比例系数，0~100。                                    |
| `step`         |   `int`   | 步进距离单位：m，精度：0.001mm，即0.000001m。                |

**使用示例：**
实现：位置步进，x轴负方向步进0.5m，速度30%。

```json
{"command":"set_pos_step","step_type":"x_step","step":-500000,"v":30}
```

**返回示例：**
指令接收成功，运动到位后连接吓一条轨迹。

```json
{"command":"set_pos_step","receive_state":true}
{"state":"current_trajectory_state","trajectory_state":true,"device":0,"trajectory_connect":1}
```

| 参数            | 类型   | 说明                                  |
| :-------------- | :----- | :------------------------------------ |
| `receive_state` | `bool` | `ture`：设置成功；`false`：设置失败。 |
| `trajectory_connect` | `num` | 代表是否连接下一条轨迹，0代表全部到位，1代表连接下一条轨迹。 |

## 姿态步进

控制机械臂沿x、y、z轴方向旋转步进运动。
**参数说明：**

| 参数           | 类型 | 说明                                                         |
| :------------- | :--- | :----------------------------------------------------------- |
| `set_ort_step` |   `string`   | 姿态步进指令。                                                   |
| `step_type`    |   `string`   | 步进方向，rx_step：绕X轴旋转，ry_step：绕Y旋转，rz_step：绕Z轴旋转。 |
| `v`            |   `int`   | 速度百分比例系数，0~100。                                    |
| `step`         |   `int`   | 步进弧度，单位：rad，精度0.001rad。                          |

**使用示例：**
实现：姿态步进，x轴负方向旋转0.5rad，速度30%。

```json
{"command":"set_ort_step","step_type":"rx_step","step":-500,"v":30}
```

**返回示例：**
指令接收成功，运动到位后连接吓一条轨迹。

```json
{"command":"set_ort_step","receive_state":true}
{"state":"current_trajectory_state","trajectory_state":true,"device":0,"trajectory_connect":1}
```

**参数说明：**
| 参数            | 类型   | 说明                                  |
| :-------------- | :----- | :------------------------------------ |
| `receive_state` | `bool` | `ture`：设置成功；`false`：设置失败。 |
| `trajectory_connect` | `num` | 代表是否连接下一条轨迹，0代表全部到位，1代表连接下一条轨迹。 |
