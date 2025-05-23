# <p class="hidden">Python: </p>Modbus RTU Read Data Parameter Structure `rm_modbus_rtu_read_params_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
| `address` | `int`       |Starting address of the data. |
| `device` | `int`    |Address of the peripheral device.      |
| `type`    | `int`     | 0 - Modbus master at the controller end; 1 - Modbus master at the tool end. |
| `num`    | `int`     | Number of data points to read, with a maximum data length of 100. |
