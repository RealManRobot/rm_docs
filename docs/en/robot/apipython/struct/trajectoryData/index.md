# <p class="hidden">Python: </p>Online Programming Storage Information `rm_trajectory_data_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `id`  |  `int`  |  ID of online programming file. |
|  `size`  |  `int`  |  File size.  |
|  `speed`  |  `int`  |  Default running speed.  |
|  `trajectory_name`  |  `int`  |  File name.  |

## Member function

```Python
rm_ctypes_wrap.rm_trajectory_data_t.to_dict(self, recurse = True)
```

Return the class variables as dictionaries and, if the recurse is True, process the structure fields recursively through ctypes.
