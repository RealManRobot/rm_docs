# <p class="hidden">C, C++: </p>Robotic Arm Basic Information Structure `rm_robot_info_t`

## Class member variable description

- ### Robotic arm degree of freedom `arm_dof`

     Each tool supports 0−5 envelope balls.

    ```C++
    int rm_robot_info_t::arm_dof
    ```

- ### Robotic arm model `arm_model`

    ```C++
    rm_robot_arm_model_e rm_robot_info_t::arm_model
    ```

    *Jump to [rm_robot_arm_model_e](../../type/index.md#rm_robot_arm_model_e-robotic-arm-model) for details of types*

- ### End force sensor type `force_type`

    ```C++
    rm_force_type_e rm_robot_info_t::force_type
    ```

    *Jump to [rm_force_type_e](../../type/index.md#rm_force_type_e-end-force-sensor-type) for details of types*
