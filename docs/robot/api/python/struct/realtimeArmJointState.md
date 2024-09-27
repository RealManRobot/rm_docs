# <p class="hidden">Python: </p>机械臂实时状态推送信息结构体`rm_realtime_arm_joint_state_t`

## 属性

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
| `errCode`     | `int`     | 数据解析错误码，-3为数据解析错误，代表推送的数据不完整或格式不正确 |
| `arm_ip`      | `bytes`   | 推送数据的机械臂的IP地址                   |
| `arm_err`     | `uint16_t`        | 机械臂错误码                                |
| `joint_status`| [rm_joint_status_t](../struct/rm_joint_status_t)    | 机械臂关节状态结构体 |
| `force_sensor`| [rm_force_sensor_t](../struct/rm_force_sensor_t)    | 力传感器数据结构体  |
| `sys_err`     | `uint16_t`         | 系统错误码                                 |
| `waypoint`    | [rm_pose_t](../struct/pose)       | 当前位置姿态结构体     |
| `liftState`    | [rm_udp_lift_state_t](../struct/udpLiftState)       | 升降关节数据     |
| `expandState`    | [rm_udp_expand_state_t](../struct/udpExpandState)       | 扩展关节数据     |
<!-- | `handState`    | [rm_udp_hand_state_t](../struct/udpHandState)       | 灵巧手数据     | -->
| `arm_current_status`    | [rm_udp_arm_current_status_e](../type/typeList)       | 机械臂当前状态     |
