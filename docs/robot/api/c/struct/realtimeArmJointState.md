# <p class="hidden">C、C++: </p>udp主动上报机械臂信息结构体`rm_realtime_arm_joint_state_t`

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

- ### 机械臂错误码`arm_err`

    ```C++
    uint16_t rm_realtime_arm_joint_state_t::arm_err
    ```

- ### 关节状态`joint_status`

    ```C++
    rm_joint_status_t rm_realtime_arm_joint_state_t::joint_status
    ```

    *可以跳转[rm_joint_status_t](../struct/jointStatus)查阅结构体详细描述*

- ### 力数据（六维力版本支持）`force_sensor`

    ```C++
    rm_force_sensor_t rm_realtime_arm_joint_state_t::force_sensor
    ```

    *可以跳转[rm_force_sensor_t](../struct/forceSensor)查阅结构体详细描述*

- ### 系统错误码`sys_err`

    ```C++
    uint16_t rm_realtime_arm_joint_state_t::sys_err
    ```

- ### 当前路点信息`waypoint`

    ```C++
    rm_pose_t rm_realtime_arm_joint_state_t::waypoint
    ```

    *可以跳转[rm_pose_t](../struct/pose)查阅结构体详细描述*
