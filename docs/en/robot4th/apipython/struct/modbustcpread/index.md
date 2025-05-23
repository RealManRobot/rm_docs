# <p class="hidden">Python: </p>Modbus TCP Read Data Parameter Structure `rm_modbus_tcp_read_params_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
| `address` | `int`       |The starting address of the data. |
| `master_name` | `char`    |The name of the Modbus TCP master station.     |
| `ip`    | `char`     | The IP address of the host. |
| `port` | `int`       |The port number of the host. |
| `num` | `int`    |The number of data points to read, with the data length not exceeding 100.      |
