# <p class="hidden">C, C++: </p>UDP-Based Pushed Lifting Joint Data `rm_udp_lift_state_t`

## Class member variable description

- ### Height of the current lifting mechanism `height`

    Unit: mm, accuracy: 1 mm

    ```C++
    int rm_udp_lift_state_t::height
    ```

- ### Current angle `pos`

    Accuracy: 0.001°, unit: °

    ```C++
    float rm_udp_lift_state_t::pos
    ```

- ### Current drive current `current`

    Unit: mA, accuracy: 1 mA

    ```C++
    int rm_udp_lift_state_t::current
    ```

- ### Drive error code `err_flag`

    Refer to joint error codes for details

    ```C++
    int rm_udp_lift_state_t::err_flag
    ```

- ### Current joint enabling state `en_flag`

    1: enable, 0: disable

    ```C++
    int rm_udp_lift_state_t::en_flag
    ```
