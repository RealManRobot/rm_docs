# <p class="hidden">C、C++: </p>End-Effector Real-Time Information (Supported by End-Effector Ecosystem Protocol) `rm_plus_state_info_t`

## Class member variable description

- ### System State `sys_state`

    0: Normal, 1: Device Fault.

    ```C++
    int rm_plus_state_info_t::sys_state
    ```

- ### Current State of Each Degree of Freedom `dof_state`

    0: Releasing, 1: Closing, 2: Position Reached and Stopped, 3: Force Control Reached and Stopped, 4: Tactile Reached and Stopped, 5: Current Protection Stop, 6: Fault Occurred.

    ```C++
    int rm_plus_state_info_t::dof_state[12]
    ```

- ### Error Information of Each Degree of Freedom `dof_err`

    0: Normal, 1: FOC Error, 2: Overvoltage, 3: Undervoltage, 4: Overtemperature, 5: Startup Error, 6: Encoder Error, 7: Overcurrent, 8: Software Error, 9: Sensor Error, 10: Position Exceeds Limit, 11: DRV8320 Error, 12: Position Tracking Error, 13: Current Detection Error, 14: Self-Check Error, 15: Position Command Exceeds Limit, 16: Multi-turn Data Loss.

    ```C++
    int rm_plus_state_info_t::dof_err[12]
    ```

- ### Current Position of Each Degree of Freedom `pos`

    Unit: Dimensionless.

    ```C++
    int rm_plus_state_info_t::pos[12]
    ```

- ### Current Speed of Each Degree of Freedom `speed`

    Positive for closing, negative for releasing. Unit: Dimensionless.

    ```C++
    int rm_plus_state_info_t::speed[12]
    ```

- ### Current Angle of Each Degree of Freedom `angle`

    Unit: 0.01 degrees.

    ```C++
    int rm_plus_state_info_t::angle[12]
    ```

- ### Current Current of Each Degree of Freedom `current`

    Unit: mA.

    ```C++
    int rm_plus_state_info_t::current[12]
    ```

- ### Normal Force of Tactile Three-Dimensional Force of Each Degree of Freedom `normal_force`

    ```C++
    int rm_plus_state_info_t::normal_force[18]
    ```

- ### Tangential Force of Tactile Three-Dimensional Force of Each Degree of Freedom `tangential_force`

    ```C++
    int rm_plus_state_info_t::tangential_force[18]
    ```

- ### Direction of Tangential Force of Tactile Three-Dimensional Force of Each Degree of Freedom `tangential_force_dir`

    ```C++
    int rm_plus_state_info_t::tangential_force_dir[18]
    ```

- ### Tactile Self-Approach of Each Degree of Freedom `tsa`

    ```C++
    uint32_t rm_plus_state_info_t::tsa[12]
    ```

- ### Tactile Mutual Approach of Each Degree of Freedom `tma`

    ```C++
    uint32_t rm_plus_state_info_t::tma[12]
    ```

- ### Raw Data of Tactile Sensors `touch_data`

    ```C++
    int rm_plus_state_info_t::touch_data[18]
    ```

- ### Torque of Each Degree of Freedom `force`

    Positive for closing, negative for releasing. Unit: 0.001N.

    ```C++
    int rm_plus_state_info_t::force[12]
    ```
