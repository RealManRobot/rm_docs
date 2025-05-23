# <p class="hidden">Python: </p>Modbus RTU Write Data Structure `rm_modbus_rtu_write_params_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
| `address` | `int`       |Starting address of the data. |
| `device` | `int`    |Address of the peripheral device.      |
| `type`    | `int`     |0 - Modbus master on the controller side; 1 - Modbus master on the tool side. |
| `num` | `int`    |Number of data points to write, with the data length not exceeding 100.     |
| `data` | `int`    |Data to be written, with the data length not exceeding 100.      |
