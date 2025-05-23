# <p class="hidden">C, C++: </p>Modbus RTU Write Data Structure `rm_modbus_rtu_write_params_t`

## Explanation of Class Member Variables

### Data Starting Address `address`

```C++
int rm_modbus_rtu_write_params_t::address
```

### Peripheral Device Address `device`

```C++
int rm_modbus_rtu_write_params_t::device
```

### Modbus Master Type `type`

0 - Modbus master on the controller side; 1 - Modbus master on the tool side.

```C++
int rm_modbus_rtu_write_params_t::type
```

### Number of Data Items `num`

The number of data items to be written. The data length should not exceed 100.

```C++
int rm_modbus_rtu_write_params_t::num
```

### Data to be Written `data`

The data to be written. The data length should not exceed 100.

```C++
int rm_modbus_rtu_write_params_t::data[120]
```
