# <p class="hidden">C、C++: </p>UDP推送的灵巧手数据`rm_udp_hand_state_t`

## 类成员变量说明

- ### 当前升降机构高度 `hand_pos`

    表示灵巧手自由度大小，0-1000，无量纲

    ```C++
    int rm_udp_lift_state_t::hand_pos
    ```

- ### 当前角度 `hand_force`

    表示灵巧手自由度电流，单位mN

    ```C++
    float rm_udp_lift_state_t::hand_force
    ```

- ### 当前驱动电流 `hand_state`

    表示灵巧手自由度状态

    ```C++
    int rm_udp_lift_state_t::hand_state
    ```

- ### 驱动错误代码 `hand_err`

    表示灵巧手系统错误

    ```C++
    int rm_udp_lift_state_t::hand_err
    ```

