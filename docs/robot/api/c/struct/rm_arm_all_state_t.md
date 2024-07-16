# 机械臂所有状态参数结构体`rm_algorithm_version_t`

## 类成员变量说明

- ### 关节电流`joint_current`

    单位mA。

    ```C
    float rm_arm_all_state_t::joint_current[ARM_DOF]
    ```

- ### 关节使能状态`joint_en_flag`

    ```C
    int rm_arm_all_state_t::joint_en_flag[ARM_DOF]
    ```

- ### 关节温度`joint_temperature`

    单位℃。

    ```C
    float rm_arm_all_state_t::joint_temperature[ARM_DOF]
    ```

- ### 关节电压`joint_voltage`

    单位V。

    ```C
    float rm_arm_all_state_t::joint_voltage[ARM_DOF]
    ```

- ### 关节错误码`joint_err_code`

    ```C
    int rm_arm_all_state_t::joint_err_code[ARM_DOF]
    ```

- ### 机械臂错误代码`sys_err`

    ```C
    int rm_arm_all_state_t::sys_err
    ```
