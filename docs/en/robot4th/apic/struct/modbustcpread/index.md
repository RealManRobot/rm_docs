# <p class="hidden">C、C++: </p>Modbus TCP Read Data Parameter Structure `rm_modbus_tcp_read_params_t`

## Explanation of Class Member Variables

### Data Starting Address `address`

```C++
int rm_modbus_tcp_read_params_t::address
```

### Modbus TCP Master Name `master_name`

```C++
char rm_modbus_tcp_read_params_t::master_name[20]
```

### Host IP Address `ip`

```C++
char rm_modbus_tcp_read_params_t::ip[16]
```

### Host Port Number `port`

```C++
int rm_modbus_tcp_read_params_t::port
```

### Number of Data Items `num`

The number of data items to be read. The data length should not exceed 100.

```C++
int rm_modbus_tcp_read_params_t::num
```
