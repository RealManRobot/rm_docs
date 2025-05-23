# <p class="hidden">C、C++: </p>Modbus RTU写数据结构体`rm_modbus_rtu_write_params_t`

## 类成员变量说明

### 数据起始地址`address`

```C++
int rm_modbus_rtu_write_params_t::address
```

### 外设设备地址`device`

```C++
int rm_modbus_rtu_write_params_t::device
```

### Modbus主机类型`type`

0-控制器端Modbus主机；1-工具端Modbus主机。

```C++
int rm_modbus_rtu_write_params_t::type
```

### 数据的数量`num`

写入数据的数量，数据长度不超过100。

```C++
int rm_modbus_rtu_write_params_t::num
```

### 写入的数据`data`

写入的数据，数据长度不超过100。

```C++
int rm_modbus_rtu_write_params_t::data[120]
```
