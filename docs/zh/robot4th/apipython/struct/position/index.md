# <p class="hidden">Python: </p>位置结构体`rm_position_t`

这个结构体通常用于表示机器人、物体或其他任何可以在三维空间中定位的点的位置。

## 属性

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
|  `x`  |  `float`  |  X轴坐标值，单位：m。 |
|  `y`  |  `float`  |  Y轴坐标值，单位：m。  |
|  `z`  |  `float`  |  Z轴坐标值，单位：m。  |

## 成员函数

```python
rm_ctypes_wrap.rm_position_t.to_dict(self,recurse = True)
```

将类的变量返回为字典，如果recurse为True，则递归处理ctypes结构字段。
