# <p class="hidden">C、C++: </p>机械臂软件信息结构体`rm_arm_software_version_t`

## 类成员变量说明

- ### 机械臂型号`product_version`

    ```C++
    char rm_arm_software_version_t::product_version[10]
    ```

- ### 机械臂控制器版本`robot_controller_version`

    该字段为"4.0"，表明为四代控制器。

    ```C++
    char rm_arm_software_version_t::robot_controller_version[10]
    ```

- ### 算法库信息`algorithm_info`

    ```C++
    rm_algorithm_version_t rm_arm_software_version_t::algorithm_info
    ```

    *可以跳转[rm_algorithm_version_t](../../struct/algorithmVersion/index.md)查阅结构体详细描述。*

- ### ctrl 层软件信息`ctrl_info`

    ```C++
    rm_software_build_info_t rm_arm_software_version_t::ctrl_info
    ```

    *可以跳转[rm_software_build_info_t](../../struct/softwarinfo/index.md)查阅结构体详细描述。*

- ### Communication模块软件信息`com_info`

    ```C++
    rm_software_build_info_t rm_arm_software_version_t::com_info
    ```

    *可以跳转[rm_software_build_info_t](../../struct/softwarinfo/index.md)查阅结构体详细描述。*

- ### 流程图编程模块软件信息`program_info`

    ```C++
    rm_software_build_info_t rm_arm_software_version_t::program_info
    ```

    *可以跳转[rm_software_build_info_t](../../struct/softwarinfo/index.md)查阅结构体详细描述。*
