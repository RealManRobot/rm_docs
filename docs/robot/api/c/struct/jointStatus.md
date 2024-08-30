# <p class="hidden">C、C++: </p>机械臂关节状态参数`rm_joint_status_t`

## 类成员变量说明

- ### 关节电流`joint_current`

    单位mA，精度：0.001mA。

    ```C++
    float rm_joint_status_t::joint_current[ARM_DOF]
    ```

- ### 当前关节使能状态`joint_en_flag`

    1为上使能，0为掉使能。

    ```C++
    bool rm_joint_status_t::joint_en_flag[ARM_DOF]
    ```

- ### 当前关节错误码`joint_err_code`

    ```C++
    uint16_t rm_joint_status_t::joint_err_code[ARM_DOF]
    ```

- ### 关节角度`joint_position`

    单位°，精度：0.001°。

    ```C++
    float rm_joint_status_t::joint_position[ARM_DOF]
    ```

- ### 当前关节温度`joint_temperature`

    精度0.001℃。

    ```C++
    float rm_joint_status_t::joint_temperature[ARM_DOF]
    ```

- ### 当前关节电压`joint_voltage`

    精度0.001V。

    ```C++
    float rm_joint_status_t::joint_voltage[ARM_DOF]
    ```

- ### 当前关节速度`joint_speed`

    精度0.01RPM。

    ```C++
    float rm_joint_status_t::joint_speed[ARM_DOF]
    ```
