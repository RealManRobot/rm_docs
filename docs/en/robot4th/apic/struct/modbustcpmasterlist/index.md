# <p class="hidden">C, C++: </p>Modbus TCP Master List Structure `rm_modbus_tcp_master_list_t`

## Explanation of Class Member Variables

### Page Number `page_num`

```C++
int rm_modbus_tcp_master_list_t::page_num
```

### Page Size `page_size`

```C++
int rm_modbus_tcp_master_list_t::page_size
```

### Total List Size `total_size`

```C++
int rm_modbus_tcp_master_list_t::total_size
```

### Vague Search `vague_search`

```C++
char rm_modbus_tcp_master_list_t::vague_search[32]
```

### Return the length of the list of matching Modbus TCP masters `list_len`

```C++
int rm_modbus_tcp_master_list_t::list_len
```

### Return the list of matching Modbus TCP masters `master_list`

```C++
rm_modbus_tcp_master_info_t rm_modbus_tcp_master_list_t::master_list[100]
```

*Jump to [rm_modbus_tcp_master_info_t](../../struct/modbustcpmaster/index.md) for details of the structure.*
