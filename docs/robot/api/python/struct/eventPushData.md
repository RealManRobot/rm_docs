# <p class="hidden">Python: </p>表示机械臂到位等事件信息的结构体`rm_event_push_data_t`

此结构体用于接收关于机械臂的各类事件信息，如规划轨迹到位、在线编程到位等。通过rm_get_arm_event_call_back接口注册回调函数处理本结构体数据。

## 属性

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
|  `handle_id`  |  `int`  |  机械臂连接id，用于标识特定的机械臂连接。 |
|  `event_type`  |  [rm_event_type_e](../type/typeList)  |  事件类型枚举，表示具体的事件类型：0：无事件；1：当前规划轨迹到位；2：当前在线编程到位。 |
|  `trajectory_state`  |  `bool`  |  表示已到位规划轨迹的状态，true-成功，false-失败。  |
|  `device`  |  `int`  |  表示当前已到位规划的设备标识符，用于进一步区分不同类型的设备。0：关节；1：夹爪；2：灵巧手；3：升降机构；4：扩展关节；其他：保留。 |
|  `trajectory_connect`  |  `int`  |  表示当前已到位规划的轨迹是否连接下一条：0：代表全部到位；1：代表连接下一条轨迹。  |
|  `program_id`  |  `int`  |  当前到位的在线编程。  |
