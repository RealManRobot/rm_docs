# 升降机构、扩展关节状态结构体`rm_expand_state_t`

## 类成员变量说明

- ### 扩展关节角度`pos`

    单位度，精度 0.001°(若为升降机构高度，则单位：mm，精度：1mm，范围：0 ~2300)。

    ```C++
    int rm_expand_state_t::pos
    ```

- ### 驱动电流`current`

    单位：mA，精度：1mA。

    ```C++
    int rm_expand_state_t::current
    ```

- ### 驱动错误代码`err_flag`

    错误代码类型参考关节错误代码。

    ```C++
    int rm_expand_state_t::err_flag
    ```

- ### 当前状态`mode`

    0-空闲，1-正方向速度运动，2-正方向位置运动，3-负方向速度运动，4-负方向位置运动。

    ```C++
    int rm_expand_state_t::mode
    ```
