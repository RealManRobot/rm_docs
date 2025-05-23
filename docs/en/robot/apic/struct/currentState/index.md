# <p class="hidden">C, C++: </p>Current Robotic Arm State `rm_current_arm_state_t`

## Class member variable description

- ### Current robotic arm pose `pose`

    ```C++
    rm_pose_t rm_current_arm_state_t::pose
    ```

    *Jump to [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

- ### Current joint angle `joint`

    ```C++
    float rm_current_arm_state_t::joint[ARM_DOF]
    ```

- ### Robotic arm error code `arm_err`

    ```C++
    uint8_t rm_current_arm_state_t::arm_err
    ```

- ### System error code `err`

    ```C++
    rm_err_t rm_current_arm_state_t::err
    ```

    *Jump to [rm_err_t](../../struct/err/index.md) for details of the structure.*
