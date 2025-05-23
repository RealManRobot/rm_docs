# <p class="hidden">C、C++: </p>Modbus RTU读数据参数结构体`rm_modbus_rtu_read_params_t`

## 类成员变量说明

### 数据起始地址`address`

```C++
int rm_modbus_rtu_read_params_t::address
```

### 外设设备地址`device`

```C++
int rm_modbus_rtu_read_params_t::device
```

### Modbus主机类型`type`

0-控制器端modbus主机；1-工具端modbus主机。

```C++
int rm_modbus_rtu_read_params_t::type
```

### 数据的数量`num`

读取数据的数量，数据长度不超过100。

```C++
int rm_modbus_rtu_read_params_t::num
```
