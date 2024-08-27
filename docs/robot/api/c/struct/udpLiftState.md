# <p class="hidden">C、C++: </p>UDP推送的升降关节数据`rm_udp_lift_state_t`

## 类成员变量说明

- ### 当前升降机构高度 `height`
    单位：mm，精度：1mm
    ```C++
    int rm_udp_lift_state_t::height
    ```

- ### 当前角度 `pos`
    精度 0.001°，单位：°
    ```C++
    float rm_udp_lift_state_t::pos
    ```

- ### 当前驱动电流 `current`
    单位：mA，精度：1mA
    ```C++
    int rm_udp_lift_state_t::current
    ```

- ### 驱动错误代码 `err_flag`
    错误代码类型参考关节错误代码
    ```C++
    int rm_udp_lift_state_t::err_flag
    ```

- ### 当前关节使能状态 `en_flag`
    1 为上使能，0 为掉使能
    ```C++
    int rm_udp_lift_state_t::en_flag
    ```
