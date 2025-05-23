# <p class="hidden">Python: </p>Robotic Arm's Global Waypoint List Structure `rm_waypoint_list_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
| `page_num`    | `int`  | Page number.     |
|   `page_size`   |    `int`    |    Page size (number of waypoints per page). |
| `total_size`  | `int`  | Total size of the waypoint list (total number of waypoints). |
| `vague_search`| `bytes`  | Vague search string (keyword used for searching for waypoints). |
| `list_len`    | `int`    | Return the conforming global waypoint list length. |
| `points_list` | [rm_waypoint_t](../../struct/waypoint/index.md) array[100] | Return the conforming global waypoint list. |

## Member function

```Python
rm_ctypes_wrap.rm_waypoint_list_t.to_dict(self)
```
