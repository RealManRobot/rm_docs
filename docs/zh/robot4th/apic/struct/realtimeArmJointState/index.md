# <p class="hidden">C、C++: </p>UDP主动上报机械臂信息结构体`rm_realtime_arm_joint_state_t`

## 类成员变量说明

- ### 数据解析错误码`errCode`

    -3为数据解析错误，代表推送的数据不完整或格式不正确。

    ```C++
    int rm_realtime_arm_joint_state_t::errCode
    ```

- ### 推送数据的机械臂的IP地址`arm_ip`

    ```C++
    char rm_realtime_arm_joint_state_t::arm_ip[16]
    ```

- ### 关节状态`joint_status`

    ```C++
    rm_joint_status_t rm_realtime_arm_joint_state_t::joint_status
    ```

    *可以跳转[rm_joint_status_t](../../struct/jointStatus/index.md)查阅结构体详细描述。*

- ### 力数据（六维力版本支持）`force_sensor`

    ```C++
    rm_force_sensor_t rm_realtime_arm_joint_state_t::force_sensor
    ```

    *可以跳转[rm_force_sensor_t](../../struct/forceSensor/index.md)查阅结构体详细描述。*

- ### 错误码`err`

    ```C++
    rm_err_t rm_realtime_arm_joint_state_t::err
    ```

    *可以跳转[rm_err_t](../../struct/err/index.md)查阅结构体详细描述。*

- ### 当前路点信息`waypoint`

    ```C++
    rm_pose_t rm_realtime_arm_joint_state_t::waypoint
    ```

    *可以跳转[rm_pose_t](../../struct/pose/index.md)查阅结构体详细描述。*

- ### 升降关节数据`liftState`

    ```C++
    rm_udp_lift_state_t rm_realtime_arm_joint_state_t::liftState
    ```

    *可以跳转[rm_udp_lift_state_t](../../struct/udpLiftState/index.md)查阅结构体详细描述。*

- ### 扩展关节数据`expandState`

    ```C++
    rm_udp_expand_state_t rm_realtime_arm_joint_state_t::expandState
    ```

    *可以跳转[rm_udp_expand_state_t](../../struct/udpExpandState/index.md)查阅结构体详细描述。*

- ### 灵巧手数据`handState`

    ```C++
    rm_udp_hand_state_t rm_realtime_arm_joint_state_t::handState
    ```

    *可以跳转[rm_udp_hand_state_t](../../struct/udpHandState/index.md)查阅结构体详细描述。*

- ### 机械臂状态`arm_current_status`

    ```C++
    rm_udp_arm_current_status_e rm_realtime_arm_joint_state_t::arm_current_status
    ```

    *可以跳转[枚举类型说明](../../type/index.md)查阅`rm_udp_arm_current_status_e`枚举详细描述。*

- ### aloha主臂状态`aloha_state`

    ```C++
    rm_udp_aloha_state_t rm_realtime_arm_joint_state_t::aloha_state
    ```

    *可以跳转[rm_udp_aloha_state_t](../../struct/udpAlohaState/index.md)查阅结构体详细描述。*

- ### 末端设备状态`rm_plus_state`

    0-设备在线，1-表示协议未开启，2-表示协议开启但是设备不在线

    ```C++
    int rm_realtime_arm_joint_state_t::rm_plus_state
    ```

- ### 末端设备基础信息`plus_base_info`

    ```C++
    rm_plus_base_info_t rm_realtime_arm_joint_state_t::plus_base_info
    ```

    *可以跳转[rm_plus_base_info_t](../../struct/plusBase/index.md)查阅结构体详细描述。*

- ### 末端设备实时信息`plus_state_info`

    ```C++
    rm_plus_state_info_t rm_realtime_arm_joint_state_t::plus_state_info
    ```

    *可以跳转[rm_plus_state_info_t](../../struct/plusState/index.md)查阅结构体详细描述。*
