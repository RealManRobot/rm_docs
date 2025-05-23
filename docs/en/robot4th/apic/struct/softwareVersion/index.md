# <p class="hidden">C, C++: </p>Robotic Arm Software Version Structure `rm_arm_software_version_t`

## Class member variable description

- ### Robotic arm model `product_version`

    ```C++
    char rm_arm_software_version_t::product_version[10]
    ```

- ### Robotic Arm Controller Version `robot_controller_version`

    The field is "4.0", indicating that it is a Gen 4 controller.

    ```C++
    char rm_arm_software_version_t::robot_controller_version[10]
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

- ### Communication Module Software Information `com_info`

    ```C++
    rm_software_build_info_t rm_arm_software_version_t::com_info
    ```

    *Jump to [rm_software_build_info_t](../../struct/softwarinfo/index.md) for details of the structure.*

- ### Flowchart Programming Module Software Information `program_info`

    ```C++
    rm_software_build_info_t rm_arm_software_version_t::program_info
    ```

    *Jump to [rm_software_build_info_t](../../struct/softwarinfo/index.md) for details of the structure.*
