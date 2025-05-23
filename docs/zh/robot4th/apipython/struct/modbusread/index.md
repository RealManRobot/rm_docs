# <p class="hidden">Python: </p>Modbus RTU读数据参数结构体`rm_modbus_rtu_read_params_t`

## 参数说明

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
| `address` | `int`       |数据起始地址。 |
| `device` | `int`    |外设设备地址。      |
| `type`    | `int`     | 0-控制器端modbus主机；1-工具端modbus主机。 |
| `num`    | `int`     | 要读的数据的数量，数据长度不超过100。 |
