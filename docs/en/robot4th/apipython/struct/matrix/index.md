# <p class="hidden">Python: </p>Matrix Structure `rm_matrix_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
| `irow`    | `int`                 | Number of rows of the matrix.     |
| `iline`   | `int`                 | Number of lines of the matrix.     |
| `data`    | `List[float]`   | Data of the matrix, size: 4×4 floats. |

## Constructor function

```Python
rm_ctypes_wrap.rm_matrix_t.__init__(self, irow=4, iline=4, data=None)
```

**Parameter description:**

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `irow`  |  `int, optional`  |  Number of rows of the matrix, default: None.  |
|  `iline`  |  `int, optional`  |  Number of lines of the matrix, default: None.  |
|  `data`  |  `int, optional`  |  Data of the matrix, size: 4×4 floats, default: None.  |
