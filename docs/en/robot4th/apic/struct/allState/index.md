# <p class="hidden">C, C++: </p>All Robotic Arm State Parameter Structure `rm_arm_all_state_t`

## Class member variable description

- ### Joint current `joint_current`

    Unit: mA.

    ```C++
    float rm_arm_all_state_t::joint_current[ARM_DOF]
    ```

- ### Joint enabling state `joint_en_flag`

    ```C++
    int rm_arm_all_state_t::joint_en_flag[ARM_DOF]
    ```

- ### Joint temperature `joint_temperature`

    Unit: °C.

    ```C++
    float rm_arm_all_state_t::joint_temperature[ARM_DOF]
    ```

- ### Joint voltage `joint_voltage`

    Unit: V.

    ```C++
    float rm_arm_all_state_t::joint_voltage[ARM_DOF]
    ```

- ### Joint error code `joint_err_code`

    ```C++
    int rm_arm_all_state_t::joint_err_code[ARM_DOF]
    ```

- ### Robotic arm error code `err`

    ```C++
    rm_err_t rm_arm_all_state_t::err
    ```

    *Jump to [rm_err_t](../../struct/err/index.md) for details of the structure.*
