# <p class="hidden">Python: </p>机械臂实时状态推送信息结构体`rm_realtime_arm_joint_state_t`

## 属性

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
| `errCode`     | `int`     | 数据解析错误码，-3为数据解析错误，代表推送的数据不完整或格式不正确 |
| `arm_ip`      | `bytes`   | 推送数据的机械臂的IP地址                   |
| `joint_status`| [rm_joint_status_t](../../struct/jointStatus/index.md)    | 机械臂关节状态结构体 |
| `force_sensor`| [rm_force_sensor_t](../../struct/forceSensor/index.md)    | 力传感器数据结构体  |
| `err`     | [rm_err_t](../../struct/err/index.md)        | 错误码                                |
| `waypoint`    | [rm_pose_t](../../struct/pose/index.md)       | 当前位置姿态结构体     |
| `liftState`    | [rm_udp_lift_state_t](../../struct/udpLiftState/index.md)       | 升降关节数据     |
| `expandState`    | [rm_udp_expand_state_t](../../struct/udpExpandState/index.md)       | 扩展关节数据     |
| `handState`    | [rm_udp_hand_state_t](../../struct/udpHandState/index.md)       | 灵巧手数据     |
| `arm_current_status`    | [rm_udp_arm_current_status_e](../../type/index.md)       | 机械臂当前状态     |
| `aloha_state`    | [rm_udp_aloha_state_t](../../struct/udpAlohaState/index.md)       | aloha主臂状态     |
| `rm_plus_state`    |   `int`     | 末端设备状态，0-设备在线，1-表示协议未开启，2-表示协议开启但是设备不在线    |
| `plus_base_info`    | [rm_plus_base_info_t](../../struct/rmPlusBaseInfo/index.md)       | 末端设备基础信息     |
| `plus_state_info`    | [rm_plus_state_info_t](../../struct/rmPlusStateInfo/index.md)       | 末端设备实时信息     |

## 成员函数

```python
rm_realtime_arm_joint_state_t.to_dict(self,recurse = True)

```

将结构体转换为字典。
