# <p class="hidden">C、C++: </p>Modbus TCP读数据参数结构体`rm_modbus_tcp_read_params_t`

## 类成员变量说明

### 数据起始地址`address`

```C++
int rm_modbus_tcp_read_params_t::address
```

### Modbus TCP主站名称`master_name`

```C++
char rm_modbus_tcp_read_params_t::master_name[20]
```

### 主机IP地址`ip`

```C++
char rm_modbus_tcp_read_params_t::ip[16]
```

### 主机端口号`port`

```C++
int rm_modbus_tcp_read_params_t::port
```

### 数据的数量`num`

读取数据的数量，数据长度不超过100。

```C++
int rm_modbus_tcp_read_params_t::num
```
