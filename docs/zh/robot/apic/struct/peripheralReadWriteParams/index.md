# <p class="hidden">C、C++: </p>外设数据读写参数结构体`rm_peripheral_read_write_params_t`

## 类成员变量说明

- ### 通讯端口`port`

    0-控制器RS485端口，1-末端接口板RS485接口，3-控制器ModbusTCP设备

    ```C++
    int rm_peripheral_read_write_params_t::port
    ```

- ### 数据起始地址`address`

    ```C++
    int rm_peripheral_read_write_params_t::address
    ```

- ### 外设设备地址`device`

    ```C++
    int rm_peripheral_read_write_params_t::device
    ```

- ### 要读的数据的数量`num`

    ```C++
    int rm_peripheral_read_write_params_t::num
    ```
