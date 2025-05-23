# <p class="hidden">C, C++: </p>Gripper State Structure `rm_gripper_state_t`

## Class member variable description

- ### Gripper enabling state `enable_state`

    0: disable, 1: enable.

    ```C++
    int rm_gripper_state_t::enable_state
    ```

- ### Gripper online state `status`

    0: offline, 1: online.

    ```C++
    int rm_gripper_state_t::status
    ```

- ### Gripper error message `error`

    The lower 8 bits indicate the error message, bit5−7: reserved, bit4: internal communication, bit3: driver, bit2: overcurrent, bit1: over-temperature, bit0: locked rotor.

    ```C++
    int rm_gripper_state_t::error
    ```

- ### Current gripper force, in g `current_force`

    ```C++
    int rm_gripper_state_t::current_force
    ```

- ### Current temperature, in °C `temperature`

    ```C++
    int rm_gripper_state_t::temperature
    ```

- ### Gripper opening `actpos`

    ```C++
    int rm_gripper_state_t::actpos
    ```
