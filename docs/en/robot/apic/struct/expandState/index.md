# <p class="hidden">C, C++: </p>Lifting Mechanism And Expansion Joint State Structure `rm_expand_state_t`

## Class member variable description

- ### Expansion joint angle `pos`

    Unit: °, accuracy: 0.001° (for the height of the lifting mechanism, unit: mm, accuracy: 1 mm, range: 0−2,300).

    ```C++
    int rm_expand_state_t::pos
    ```

- ### Drive current `current`

    Unit: mA, accuracy: 1 mA.

    ```C++
    int rm_expand_state_t::current
    ```

- ### Drive error code `err_flag`

    Refer to joint error codes for details.

    ```C++
    int rm_expand_state_t::err_flag
    ```

- ### Current state `mode`

    0: idle, 1: forward speed motion, 2: forward position motion, 3: backward speed motion, 4: backward position motion.

    ```C++
    int rm_expand_state_t::mode
    ```
