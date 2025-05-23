# <p class="hidden">Python: </p>Query Online Programming List `rm_program_trajectorys_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
| `page_num`    | `int`  | Page number. |
|  `page_size`  |  `int`  |  Page size.  |
|  `list_size`  |  `int`  |  Total size.  |
|  `vague_search`  |  `bytes`  |  Vague search string  |
|  `trajectory_list`  |  `list`  |  Conforming online programming list (array containing [rm_trajectory_data_t](../../struct/trajectoryData/index.md)).  |

## Member function

```Python
rm_ctypes_wrap.rm_program_trajectorys_t.to_dict(self, recurse = True)
```

Return the class variables as dictionaries and, if the recurse is True, process the structure fields recursively through ctypes.
