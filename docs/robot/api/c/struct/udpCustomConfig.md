# <p class="hidden">C、C++: </p>UDP数据自定义上报项配置`rm_udp_custom_config_t`

## 类成员变量说明

- ### 关节速度 `joint_speed`

    关节速度。1：上报；0：关闭上报；-1：不设置，保持之前的状态

    ```C++
    int rm_udp_custom_config_t::joint_speed
    ```

- ### 升降关节信息 `lift_state`

    升降关节信息。1：上报；0：关闭上报；-1：不设置，保持之前的状态

    ```C++
    int rm_udp_custom_config_t::lift_state
    ```

- ### 扩展关节信息 `expand_state`

    扩展关节信息（升降关节和扩展关节为二选一，优先显示升降关节）1：上报；0：关闭上报；-1：不设置，保持之前的状态

    ```C++
    int rm_udp_custom_config_t::expand_state
    ```

- ### 机械臂状态 `arm_current_status`

    机械臂当前状态。1：上报；0：关闭上报；-1：不设置，保持之前的状态

    ```C++
    int rm_udp_custom_config_t::arm_current_status
    ```
