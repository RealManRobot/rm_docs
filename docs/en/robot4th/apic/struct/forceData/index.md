# <p class="hidden">C, C++: </p>6-DoF Force Sensor Data Structure `rm_fence_config_t`

## Class member variable description

- ### Original data of the current force sensor `force_data`

    Force: N, torque: N.m.

    ```C++
    float rm_force_data_t::force_data[6]
    ```

- ### External force data of the current force sensor `zero_force_data`

    Force: N, torque: N.m.

    ```C++
    float rm_force_data_t::zero_force_data[6]
    ```

- ### Original external force data in the current work frame `work_zero_force_data`

    Force: N, torque: N.m.

    ```C++
    float rm_force_data_t::work_zero_force_data[6]
    ```

- ### Original external force data in the current tool frame `tool_zero_force_data`

    Force: N, torque: N.m.

    ```C++
    float rm_force_data_t::tool_zero_force_data[6]
    ```
