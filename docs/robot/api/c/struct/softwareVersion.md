# 机械臂软件信息结构体`rm_arm_software_version_t`

## 类成员变量说明

- ### 机械臂型号`product_version`

    ```C++
    char rm_arm_software_version_t::product_version[10]
    ```

- ### 算法库信息`algorithm_info`

    ```C++
    rm_algorithm_version_t rm_arm_software_version_t::algorithm_info
    ```

    *可以跳转[rm_algorithm_version_t](../struct/algorithmVersion)查阅结构体详细描述*

- ### ctrl 层软件信息`ctrl_info`

    ```C++
    rm_ctrl_version_t rm_arm_software_version_t::ctrl_info
    ```

- ### 动力学版本`dynamic_info`

    ```C++
    rm_dynamic_version_t rm_arm_software_version_t::dynamic_info
    ```

    *可以跳转[rm_dynamic_version_t](../struct/dynamicVersion)查阅结构体详细描述*

- ### plan 层软件信息`plan_info`

    ```C++
    rm_planinfo_t rm_arm_software_version_t::plan_info
    ```

    *可以跳转[rm_planinfo_t](../struct/planinfo)查阅结构体详细描述*