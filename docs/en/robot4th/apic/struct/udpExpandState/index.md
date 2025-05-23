# <p class="hidden">C, C++: </p>UDP-Based Pushed Expansion Joint Data `rm_udp_expand_state_t`

## Class member variable description

- ### Current angle `pos`

    Accuracy: 0.001°, unit: °

    ```C++
    float rm_udp_expand_state_t::pos
    ```

- ### Current drive current `current`

    Unit: mA, accuracy: 1 mA

    ```C++
    int rm_udp_expand_state_t::current
    ```

- ### Drive error code `err_flag`

    Refer to joint error codes for details

    ```C++
    int rm_udp_expand_state_t::err_flag
    ```

- ### Current joint enabling state `en_flag`

    1: enable, 0: disable

    ```C++
    int rm_udp_expand_state_t::en_flag
    ```

- ### Joint ID `joint_id`

    ```C++
    int rm_udp_expand_state_t::joint_id
    ```

- ### Current lifting state `mode`

    0: idle, 1: forward speed motion, 2: forward position motion, 3: backward speed motion, 4: backward position motion

    ```C++
    int rm_udp_expand_state_t::mode
    ```
