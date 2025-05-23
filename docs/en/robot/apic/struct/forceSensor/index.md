# <p class="hidden">C, C++: </p>Force Sensor Data Structure `rm_force_sensor_t`

The information about the robotic arm is pushed through UDP.

## Class member variable description

- ### Original data of the current force sensor `force`

    0.001 N or 0.001 N.m.

    ```C++
    float rm_force_sensor_t::force[6]
    ```

- ### External force data of the current force sensor `zero_force`

    0.001 N or 0.001 N.m.

    ```C++
    float rm_force_sensor_t::zero_force[6]
    ```

- ### External force data of the current force sensor `coordinate`

    0.001 N or 0.001 N.m.

    ```C++
    int rm_force_sensor_t::coordinate
    ```
