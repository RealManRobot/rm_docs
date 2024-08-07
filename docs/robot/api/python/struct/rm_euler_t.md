# 表示欧拉角的结构体`rm_euler_t`

## 属性

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
|  `rx`  |  `float`  |  绕X轴旋转的角度，单位：rad。 |
|  `ry`  |  `float`  |  绕Y轴旋转的角度，单位：rad。  |
|  `rz`  |  `float`  |  绕Z轴旋转的角度，单位：rad。  |

## 成员函数

```python
rm_ctypes_wrap.rm_euler_t.to_dict(self,recurse = True)
```

将类的变量返回为字典，如果recurse为True，则递归处理ctypes结构字段。
