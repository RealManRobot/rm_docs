# <p class="hidden">C, C++: </p>Modbus RTU Read Data Parameter Structure `rm_modbus_rtu_read_params_t`

## Explanation of Class Member Variables

### Data Starting Address `address`

```C++
int rm_modbus_rtu_read_params_t::address
```

### Peripheral Device Address `device`

```C++
int rm_modbus_rtu_read_params_t::device
```

### Modbus Master Type `type`

0 - Modbus master on the controller side; 1 - Modbus master on the tool side.

```C++
int rm_modbus_rtu_read_params_t::type
```

### Number of Data Items `num`

The number of data items to be read. The data length should not exceed 100.

```C++
int rm_modbus_rtu_read_params_t::num
```
