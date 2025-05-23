# <p class="hidden">C, C++: </p>Robotic Arm Joint State Parameter `rm_joint_status_t`

## Class member variable description

- ### Joint current `joint_current`

    Unit: mA, accuracy: 0.001 mA.

    ```C++
    float rm_joint_status_t::joint_current[ARM_DOF]
    ```

- ### Current joint enabling state `joint_en_flag`

    1: enable, 0: disable.

    ```C++
    bool rm_joint_status_t::joint_en_flag[ARM_DOF]
    ```

- ### Current joint error code `joint_err_code`

    ```C++
    uint16_t rm_joint_status_t::joint_err_code[ARM_DOF]
    ```

- ### Joint angle `joint_position`

    Unit: °, accuracy: 0.001°.

    ```C++
    float rm_joint_status_t::joint_position[ARM_DOF]
    ```

- ### Current joint temperature `joint_temperature`

    Accuracy: 0.001°C.

    ```C++
    float rm_joint_status_t::joint_temperature[ARM_DOF]
    ```

- ### Current joint voltage `joint_voltage`

    Accuracy: 0.001 V.

    ```C++
    float rm_joint_status_t::joint_voltage[ARM_DOF]
    ```

- ### Current joint speed `joint_speed`

    Accuracy: 0.01 RPM.

    ```C++
    float rm_joint_status_t::joint_speed[ARM_DOF]
    ```
