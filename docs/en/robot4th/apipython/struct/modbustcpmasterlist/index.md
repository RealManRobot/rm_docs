# <p class="hidden">Python: </p>Modbus TCP Master List Structure `rm_modbus_tcp_master_list_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
| `page_num` | `int`       |Page number. |
| `page_size` | `int`    |Number of items per page.      |
| `total_size`    | `int`     | Length of items. |
| `vague_search` | `char`       |Vague search. |
| `list_len` | `int`    |Return the length of the list of matching Modbus TCP masters.      |
| `master_list`    | `rm_modbus_tcp_master_info_t`     | Return the list of matching Modbus TCP masters. |

*Jump to [rm_modbus_tcp_master_info_t](../../struct/modbustcpmaster/index.md) for details of the structure.*
