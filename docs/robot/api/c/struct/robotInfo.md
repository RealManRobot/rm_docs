# <p class="hidden">C、C++: </p>机械臂基本信息结构体`rm_envelope_balls_lirm_robot_info_tst_t`

## 类成员变量说明

- ### 机械臂自由度`arm_dof`

    每个工具最多支持 5 个包络球，可以没有包络。

    ```C++
    int rm_robot_info_t::arm_dof
    ```

- ### 机械臂型号`arm_model`

    ```C++
    rm_robot_arm_model_e rm_robot_info_t::arm_model
    ```

    *可以跳转[rm_robot_arm_model_e](../type/typeList#rm-robot-arm-model-e机械臂型号)查阅枚举类型详细描述*

- ### 末端力传感器版本`force_type`

    ```C++
    rm_force_type_e rm_robot_info_t::force_type
    ```

    *可以跳转[rm_force_type_e](../type/typeList#rm-force-type-e机械臂末端力传感器版本)查阅枚举类型详细描述*
