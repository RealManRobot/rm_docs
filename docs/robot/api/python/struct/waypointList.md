# <p class="hidden">Python: </p>机械臂全局路点列表获取结构体`rm_waypoint_list_t`

## 属性

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
| `page_num`    | `int`  | 页码。       |
| `page_size`   | `int`  | 每页大小（即每页包含的路径点数量）。 |
| `total_size`  | `int`  | 路点列表的总大小（即总路点数量）。 |
| `vague_search`| `bytes`  | 模糊搜索字符串（用于搜索路径点时的关键字）。 |
| `list_len`    | `int`    | 返回符合的全局路点列表长度。 |
| `points_list` | [rm_waypoint_t](../struct/waypoint) array[100] | 返回符合的全局路点列表。 |

## 成员函数

```Python
rm_ctypes_wrap.rm_waypoint_list_t.to_dict(self)
```
