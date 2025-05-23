# <p class="hidden">Python: </p>Modbus RTU写数据结构体`rm_modbus_rtu_write_params_t`

## 参数说明

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
| `address` | `int`       |数据起始地址。 |
| `device` | `int`    |外设设备地址。      |
| `type`    | `int`     | 0-控制器端modbus主机；1-工具端modbus主机。 |
| `num` | `int`    |写入的数据的数量，数据长度不超过100。      |
| `data` | `int`    |写入的数据，数据长度不超过100。      |
