# <p class="hidden">Python: </p>Error Code Structure `rm_err_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `err_len`  |  `uint8_t`  |  Number of error codes. |
|  `err`  |  `int`  | Error code array, not exceeding 10 bytes, supporting letters, numbers, and underscores.  |

## Member function

```python
rm_ctypes_wrap.rm_err_t.to_dict(self,recurse = True)
```

Returns the class variables as a dictionary. If `recurse` is `True`, it recursively processes the fields of the ctypes structure.
