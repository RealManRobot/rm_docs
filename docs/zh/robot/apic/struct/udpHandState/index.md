# <p class="hidden">C、C++: </p>UDP推送的灵巧手数据`rm_udp_hand_state_t`

## 类成员变量说明

- ### 灵巧手位置 `hand_pos`

    表示灵巧手位置

    ```C++
    int rm_udp_hand_state_t::hand_pos[6]
    ```

- ### 灵巧手角度 `hand_angle`

    表示灵巧手角度

    ```C++
    int rm_udp_hand_state_t::hand_angle[6]
    ```

- ### 灵巧手自由度力 `hand_force`

    表示灵巧手自由度力，单位mN

    ```C++
    int rm_udp_hand_state_t::hand_force[6]
    ```

- ### 灵巧手自由度状态 `hand_state`

    表示灵巧手自由度状态，由灵巧手厂商定义状态含义

    ```C++
    int rm_udp_hand_state_t::hand_state[6]
    ```

- ### 灵巧手系统错误 `hand_err`

    表示灵巧手系统错误，由灵巧手厂商定义错误含义，例如因时状态码如下：1表示有错误，0表示无错误

    ```C++
    int rm_udp_hand_state_t::hand_err
    ```
