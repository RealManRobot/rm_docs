# 表示四元数的结构体`rm_quat_t`

## 属性

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
|  `w`  |  `float`  |  四元数的实部（scalar part），通常用于表示旋转的角度和方向。 |
|  `x`  |  `float`  |  四元数的虚部中的第一个分量（vector part）。 |
|  `y`  |  `float`  |  四元数的虚部中的第二个分量。  |
|  `z`  |  `float`  |  四元数的虚部中的第三个分量。  |

## 成员函数

```python
rm_ctypes_wrap.rm_quat_t.to_dict(self,recurse = True)
```

将类的变量返回为字典，如果recurse为True，则递归处理ctypes结构字段。
