# <p class="hidden">C、C++: </p>末端设备基础信息`rm_plus_base_info_t`

## 类成员变量说明

- ### 设备厂家`manu`

    ```C++
    char rm_plus_base_info_t::manu[10]
    ```

- ### 设备类型`type`

    1：两指夹爪，2：五指灵巧手，3：三指夹爪

    ```C++
    int rm_plus_base_info_t::type
    ```

- ### 硬件版本`hv`

    ```C++
    char rm_plus_base_info_t::hv[10]
    ```

- ### 软件版本`sv`

    ```C++
    char rm_plus_base_info_t::sv[10]
    ```

- ### boot版本`bv`

    ```C++
    char rm_plus_base_info_t::bv[10]
    ```

- ### 设备ID`id`

    ```C++
    int rm_plus_base_info_t::id
    ```

- ### 自由度`dof`

    ```C++
    int rm_plus_base_info_t::dof
    ```

- ### 自检开关`check`

    ```C++
    int rm_plus_base_info_t::check
    ```

- ### 蜂鸣器开关`bee`

    ```C++
    int rm_plus_base_info_t::bee
    ```

- ### 力控支持`force`

    ```C++
    bool rm_plus_base_info_t::force
    ```

- ### 触觉支持`touch`

    ```C++
    bool rm_plus_base_info_t::touch
    ```

- ### 触觉个数`touch_num`

    ```C++
    int rm_plus_base_info_t::touch_num
    ```

- ### 触觉开关`touch_sw`

    ```C++
    int rm_plus_base_info_t::touch_sw
    ```

- ### 手方向`hand`

    1 ：左手，2： 右手

    ```C++
    int rm_plus_base_info_t::hand
    ```

- ### 位置上限`pos_up`

    单位：无量纲

    ```C++
    int rm_plus_base_info_t::pos_up[12]
    ```

- ### 位置下限`pos_low`

    单位：无量纲

    ```C++
    int rm_plus_base_info_t::pos_low[12]
    ```

- ### 角度上限`angle_up`

    单位：0.01度

    ```C++
    int rm_plus_base_info_t::angle_up[12]
    ```

- ### 角度下限`angle_low`

    单位：0.01度

    ```C++
    int rm_plus_base_info_t::angle_low[12]
    ```

- ### 速度上限`speed_up`

    单位：无量纲

    ```C++
    int rm_plus_base_info_t::speed_up[12]
    ```

- ### 速度下限`speed_low`

    单位：无量纲

    ```C++
    int rm_plus_base_info_t::speed_low[12]
    ```

- ### 力上限`force_up`

    单位：0.001N

    ```C++
    int rm_plus_base_info_t::force_up[12]
    ```

- ### 力下限`force_low`

    单位：0.001N

    ```C++
    int rm_plus_base_info_t::force_low[12]
    ```
