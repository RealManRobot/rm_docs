# <p class="hidden">C、C++: </p>UDP推送的扩展关节数据`rm_udp_expand_state_t`

## 类成员变量说明

- ### 当前角度 `pos`

    精度 0.001°，单位：°

    ```C++
    float rm_udp_expand_state_t::pos
    ```

- ### 当前驱动电流 `current`

    单位：mA，精度：1mA

    ```C++
    int rm_udp_expand_state_t::current
    ```

- ### 驱动错误代码 `err_flag`

    错误代码类型参考关节错误代码

    ```C++
    int rm_udp_expand_state_t::err_flag
    ```

- ### 当前关节使能状态 `en_flag`

    1 为上使能，0 为掉使能

    ```C++
    int rm_udp_expand_state_t::en_flag
    ```

- ### 关节id号 `joint_id`

    ```C++
    int rm_udp_expand_state_t::joint_id
    ```

- ### 当前升降状态 `mode`

    0-空闲，1-正方向速度运动，2-正方向位置运动，3-负方向速度运动，4-负方向位置运动

    ```C++
    int rm_udp_expand_state_t::mode
    ```
