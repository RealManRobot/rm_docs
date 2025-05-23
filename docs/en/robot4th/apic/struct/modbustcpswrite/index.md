# <p class="hidden">C, C++: </p>Modbus TCP Write Data Structure `rm_modbus_tcp_write_params_t`

## Explanation of Class Member Variables

### Data Starting Address `address`

```C++
int rm_modbus_tcp_write_params_t::address
```

### Modbus TCP Master Name `master_name`

```C++
char rm_modbus_tcp_write_params_t::master_name[20]
```

### Host IP Address `ip`

```C++
char rm_modbus_tcp_write_params_t::ip[16]
```

### Host Port Number `port`

```C++
int rm_modbus_tcp_write_params_t::port
```

### Number of Data Items `num`

The number of data items to be written. The data length should not exceed 100.

```C++
int rm_modbus_tcp_write_params_t::num
```

### Data to be Written `data`

The data to be written. The data length should not exceed 100.

```C++
int rm_modbus_tcp_write_params_t::data[120]
```
