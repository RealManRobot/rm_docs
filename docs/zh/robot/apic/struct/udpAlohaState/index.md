# <p class="hidden">C、C++: </p>UDP推送的aloha主臂状态`rm_udp_aloha_state_t`

## 类成员变量说明

- ### IO1状态 `io1_state`

    IO1状态（手柄光电检测），0为按键未触发，1为按键触发。

    ```C++
    int rm_udp_aloha_state_t::io1_state
    ```

- ### IO2状态 `hand_angle`

    IO2状态（手柄光电检测），0为按键未触发，1为按键触发。

    ```C++
    int rm_udp_aloha_state_t::io2_state
    ```
