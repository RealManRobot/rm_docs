# <p class="hidden">Python: </p>Modbus TCP Write Data Structure `rm_modbus_tcp_write_params_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
| `address` | `int`       |Starting address of the data. |
| `master_name` | `char`    |Name of the Modbus TCP master station. |
| `ip`    | `char`     | IP address of the host. |
| `port` | `int`       |Port number of the host. |
| `num` | `int`    |Number of data points to write, with the data length not exceeding 100.      |
| `data` | `int`    |Data to be written, with the data length not exceeding 100.      |
