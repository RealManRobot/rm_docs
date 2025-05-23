# <p class="hidden">Python: </p>Modbus TCP主站列表结构体`rm_modbus_tcp_master_list_t`

## 参数说明

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
| `page_num` | `int`       |页码。 |
| `page_size` | `int`    |每页大小。      |
| `total_size`    | `int`     | Modbus TCP主站列表长度。 |
| `vague_search` | `char`       |模糊搜索。 |
| `list_len` | `int`    |返回符合的Modbus TCP主站列表长度。      |
| `master_list`    | `rm_modbus_tcp_master_info_t`     | 返回符合的Modbus TCP主站列表。 |

*可以跳转[rm_modbus_tcp_master_info_t](../../struct/modbustcpmaster/index.md)查阅结构体详细描述。*
