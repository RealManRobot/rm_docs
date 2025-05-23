# <p class="hidden">C、C++: </p>Modbus TCP主站列表结构体`rm_modbus_tcp_master_list_t`

## 类成员变量说明

### 页码`page_num`

```C++
int rm_modbus_tcp_master_list_t::page_num
```

### 每页大小`page_size`

```C++
int rm_modbus_tcp_master_list_t::page_size
```

### 列表长度`total_size`

```C++
int rm_modbus_tcp_master_list_t::total_size
```

### 模糊搜索`vague_search`

```C++
char rm_modbus_tcp_master_list_t::vague_search[32]
```

### 返回符合的Modbus TCP主站列表长度`list_len`

```C++
int rm_modbus_tcp_master_list_t::list_len
```

### 返回符合的Modbus TCP主站列表`master_list`

```C++
rm_modbus_tcp_master_info_t rm_modbus_tcp_master_list_t::master_list[100]
```

*可以跳转[rm_modbus_tcp_master_info_t](../../struct/modbustcpmaster/index.md)查阅结构体详细描述。*
