# <p class="hidden">Python: </p>Modbus TCP读数据参数结构体`rm_modbus_tcp_read_params_t`

## 参数说明

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
| `address` | `int`       |数据起始地址。 |
| `master_name` | `char`    |Modbus TCP主站名称。      |
| `ip`    | `char`     | 主机IP地址。 |
| `port` | `int`       |主机端口号。 |
| `num` | `int`    |读取数据的数量，数据长度不超过100。      |
