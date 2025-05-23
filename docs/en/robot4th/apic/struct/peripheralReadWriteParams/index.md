# <p class="hidden">C, C++: </p>Peripheral Data Read and Write Parameter Structure `rm_peripheral_read_write_params_t`

## Class member variable description

- ### Communication port `port`

    0: controller RS485 port, 1: end interface board RS485 port, 3: controller ModbusTCP device

    ```C++
    int rm_peripheral_read_write_params_t::port
    ```

- ### Data starting address `address`

    ```C++
    int rm_peripheral_read_write_params_t::address
    ```

- ### Peripheral device address `device`

    ```C++
    int rm_peripheral_read_write_params_t::device
    ```

- ### Volume of data to be read `num`

    ```C++
    int rm_peripheral_read_write_params_t::num
    ```
