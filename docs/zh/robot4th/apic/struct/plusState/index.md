# <p class="hidden">C、C++: </p>末端设备实时信息(末端生态协议支持)`rm_plus_state_info_t`

## 类成员变量说明

- ### 系统状态`sys_state`

    0:正常 1:设备故障

    ```C++
    int rm_plus_state_info_t::sys_state
    ```

- ### 各自由度当前状态`dof_state`

    0：正在松开 1：正在闭合 2：位置到位停止 3：力控到位停止 4：触觉到位停止 5：电流保护停止 6：发生故障

    ```C++
    int rm_plus_state_info_t::dof_state[12]
    ```

- ### 各自由度错误信息`dof_err`

    0：正常 1：FOC错误 2：过压 3：欠压 4：过温 5：启动错误 6：编码器错误 7：过流 8：软件错误 9：传感器错误 10：位置超限位 11：DRV8320错误 12：位置跟踪误差 13：电流检测错误 14：自检错误 15：位置指令超限 16：多圈丢数

    ```C++
    int rm_plus_state_info_t::dof_err[12]
    ```

- ### 各自由度当前位置`pos`

    单位：无量纲

    ```C++
    int rm_plus_state_info_t::pos[12]
    ```

- ### 各自由度当前速度`speed`

    闭合正，松开负，单位：无量纲

    ```C++
    int rm_plus_state_info_t::speed[12]
    ```

- ### 各自由度当前角度`angle`

    单位：0.01度

    ```C++
    int rm_plus_state_info_t::angle[12]
    ```

- ### 各自由度当前电流`current`

    单位：mA

    ```C++
    int rm_plus_state_info_t::current[12]
    ```

- ### 自由度触觉三维力的法向力`normal_force`

    ```C++
    int rm_plus_state_info_t::normal_force[18]
    ```

- ### 自由度触觉三维力的切向力`tangential_force`

    ```C++
    int rm_plus_state_info_t::tangential_force[18]
    ```

- ### 自由度触觉三维力的切向力方向`tangential_force_dir`

    ```C++
    int rm_plus_state_info_t::tangential_force_dir[18]
    ```

- ### 自由度触觉自接近`tsa`

    ```C++
    uint32_t rm_plus_state_info_t::tsa[12]
    ```

- ### 自由度触觉互接近`tma`

    ```C++
    uint32_t rm_plus_state_info_t::tma[12]
    ```

- ### 触觉传感器原始数据`touch_data`

    ```C++
    int rm_plus_state_info_t::touch_data[18]
    ```

- ### 自由度力矩`force`

    闭合正，松开负，单位0.001N

    ```C++
    int rm_plus_state_info_t::force[12]
    ```
