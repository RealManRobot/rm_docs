# <p class="hidden">C, C++: </p>UDP-Based Custom Pushing Item Configuration `rm_udp_custom_config_t`

## Class member variable description

- ### Joint speed `joint_speed`

    Joint speed. 1: enable push, 0: disable push, -1: no setting, previous state kept

    ```C++
    int rm_udp_custom_config_t::joint_speed
    ```

- ### Lifting joint state `lift_state`

    Lifting joint state. 1: enable push, 0: disable push, -1: no setting, previous state kept

    ```C++
    int rm_udp_custom_config_t::lift_state
    ```

- ### Expansion joint state `expand_state`

    Expansion joint state (the lifting joint and expansion joint are optional, and the lifting joint is preferred). 1: enable push, 0: disable push, -1: no setting, previous state kept

    ```C++
    int rm_udp_custom_config_t::expand_state
    ```

- ### Robotic arm state `arm_current_status`

    Current robotic arm state. 1: enable push, 0: disable push, -1: no setting, previous state kept

    ```C++
    int rm_udp_custom_config_t::arm_current_status
    ```

- ### Dexterous hand state `hand_state`

    Dexterous hand state. 1: enable push, 0: disable push, -1: no setting, previous state kept

    ```C++
    int rm_udp_custom_config_t::hand_state
    ```

- ### aloha state `aloha_state`

    aloha state. 1: enable push, 0: disable push, -1: no setting, previous state kept

    ```C++
    int rm_udp_custom_config_t::aloha_state
    ```

- ### End-Effector Basic Information `plus_base`

    Basic information of the end-effector. 1: Report; 0: Disable reporting; -1: Do not set, maintain the previous state.

    ```C++
    int rm_udp_custom_config_t::plus_base
    ```

- ### End-Effector Real-Time Information `plus_state`

    Real-time information of the end-effector. 1: Report; 0: Disable reporting; -1: Do not set, maintain the previous state.

    ```C++
    int rm_udp_custom_config_t::plus_state
    ```
