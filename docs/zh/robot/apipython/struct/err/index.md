# <p class="hidden">Python: </p>错误代码结构体`rm_err_t`

## 属性

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
|  `err_len`  |  `uint8_t`  |  错误代码个数。 |
|  `err`  |  `int`  | 错误代码数组,不超过 10 个字节，支持字母、数字、下划线。  |

## 成员函数

```python
rm_ctypes_wrap.rm_err_t.to_dict(self,recurse = True)
```

将类的变量返回为字典，如果recurse为True，则递归处理ctypes结构字段。
