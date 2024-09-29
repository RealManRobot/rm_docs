# <p class="hidden">Python: </p>矩阵结构体`rm_matrix_t`

## 属性

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
| `irow`    | `int`                 | 矩阵的行数。       |
| `iline`   | `int`                 | 矩阵的列数。       |
| `data`    | `List[float]`   | 矩阵的数据部分，大小为4x4的浮点数矩阵。 |

## 构造函数

```Python
rm_ctypes_wrap.rm_matrix_t.__init__(self, irow=4, iline=4, data=None)
```

**参数说明：**

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
|  `irow`  |  `int, optional`  |  矩阵的行数，默认为 None。  |
|  `iline`  |  `int, optional`  |  矩阵的列数，默认为 None。  |
|  `data`  |  `int, optional`  |  矩阵的数据部分，大小为4x4的浮点数矩阵，默认为 None。  |
