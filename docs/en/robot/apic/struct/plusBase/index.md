# <p class="hidden">C、C++: </p>End-Effector Basic Information `rm_plus_base_info_t`

## Class member variable description

- ### Manufacturer `manu`

    ```C++
    char rm_plus_base_info_t::manu[10]
    ```

- ### Device Type `type`

    1: Two-finger gripper, 2: Five-finger dexterous hand, 3: Three-finger gripper.

    ```C++
    int rm_plus_base_info_t::type
    ```

- ### Hardware Version `hv`

    ```C++
    char rm_plus_base_info_t::hv[10]
    ```

- ### Software Version `sv`

    ```C++
    char rm_plus_base_info_t::sv[10]
    ```

- ### Boot Version `bv`

    ```C++
    char rm_plus_base_info_t::bv[10]
    ```

- ### Device ID `id`

    ```C++
    int rm_plus_base_info_t::id
    ```

- ### Degrees of Freedom `dof`

    ```C++
    int rm_plus_base_info_t::dof
    ```

- ### Self-Check Switch `check`

    ```C++
    int rm_plus_base_info_t::check
    ```

- ### Beeper Switch `bee`

    ```C++
    int rm_plus_base_info_t::bee
    ```

- ### Force Control Support `force`

    ```C++
    bool rm_plus_base_info_t::force
    ```

- ### Tactile Support `touch`

    ```C++
    bool rm_plus_base_info_t::touch
    ```

- ### Number of Tactile Sensors `touch_num`

    ```C++
    int rm_plus_base_info_t::touch_num
    ```

- ### Tactile Sensor Switch `touch_sw`

    ```C++
    int rm_plus_base_info_t::touch_sw
    ```

- ### Hand Orientation `hand`

    1: Left hand, 2: Right hand.

    ```C++
    int rm_plus_base_info_t::hand
    ```

- ### Position Upper Limit `pos_up`

    Unit: Dimensionless.

    ```C++
    int rm_plus_base_info_t::pos_up[12]
    ```

- ### Position Lower Limit `pos_low`

    Unit: Dimensionless.

    ```C++
    int rm_plus_base_info_t::pos_low[12]
    ```

- ### Angle Upper Limit `angle_up`

    Unit: 0.01 degrees.

    ```C++
    int rm_plus_base_info_t::angle_up[12]
    ```

- ### Angle Lower Limit `angle_low`

    Unit: 0.01 degrees.

    ```C++
    int rm_plus_base_info_t::angle_low[12]
    ```

- ### Speed Upper Limit `speed_up`

    Unit: Dimensionless.

    ```C++
    int rm_plus_base_info_t::speed_up[12]
    ```

- ### Speed Lower Limit `speed_low`

    Unit: Dimensionless.

    ```C++
    int rm_plus_base_info_t::speed_low[12]
    ```

- ### Force Upper Limit `force_up`

    Unit: 0.001 N.

    ```C++
    int rm_plus_base_info_t::force_up[12]
    ```

- ### Force Lower Limit `force_low`

    Unit: 0.001 N.

    ```C++
    int rm_plus_base_info_t::force_low[12]
    ```
