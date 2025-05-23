# <p class="hidden">Python: </p>Controller Ctrl Layer Software Information Structure `rm_ctrl_version_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `build_time`  |  `bytes`  |  Build time. |
|  `version`  |  `bytes`  |  Version number.  |

## Member function

```Python
rm_ctypes_wrap.rm_ctrl_version_t.to_dict(self,recurse = True)
```

Return the class variables as dictionaries and, if the recurse is True, process the structure fields recursively through ctypes.
