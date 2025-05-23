# <p class="hidden">C, C++: </p>Robotic Arm Software Version Structure `rm_arm_software_version_t`

## Class member variable description

- ### Robotic arm model `product_version`

    ```C++
    char rm_arm_software_version_t::product_version[10]
    ```

- ### Algorithm library information `algorithm_info`

    ```C++
    rm_algorithm_version_t rm_arm_software_version_t::algorithm_info
    ```

    *Jump to [rm_algorithm_version_t](../../struct/algorithmVersion/index.md) for details of the structure.*

- ### ctrl layer software information `ctrl_info`

    ```C++
    rm_software_build_info_t rm_arm_software_version_t::ctrl_info
    ```

    *Jump to [rm_software_build_info_t](../../struct/softwarinfo/index.md) for details of the structure.*

- ### Dynamic model version `dynamic_info`

    ```C++
    rm_dynamic_version_t rm_arm_software_version_t::dynamic_info
    ```

    *Jump to [rm_dynamic_version_t](../../struct/dynamicVersion/index.md) for details of the structure.*

- ### plan layer software information `plan_info`

    ```C++
    rm_software_build_info_t rm_arm_software_version_t::plan_info
    ```

    *Jump to [rm_software_build_info_t](../../struct/softwarinfo/index.md) for details of the structure.*
