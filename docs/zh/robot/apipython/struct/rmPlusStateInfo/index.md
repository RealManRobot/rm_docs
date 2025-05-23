# <p class="hidden">Python: </p>末端设备实时信息`rm_plus_state_info_t`

## 属性

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
|  `sys_state`  |  `int`  |  系统状态。 |
|  `dof_state`  |  `list[int]`  |  各自由度当前状态。 |
|  `dof_err`  |  `list[int]`  |  各自由度错误信息。 |
|  `pos`  |  `list[int]`  |  各自由度当前位置。 |
|  `speed`  |  `list[int]`  |  各自由度当前速度,闭合正，松开负，单位：无量纲。 |
|  `angle`  |  `list[int]`  |  各自由度当前角度。 |
|  `current`  |  `list[int]`  |  各自由度当前电流。 |
|  `normal_force`  |  `list[int]`  |  自由度触觉三维力的法向力。 |
|  `tangential_force`  |  `list[int]`  |  自由度触觉三维力的切向力。 |
|  `tangential_force_dir`  |  `list[int]`  |  自由度触觉三维力的切向力方向。 |
|  `tsa`  |  `list[int]`  |  自由度触觉自接近。 |
|  `tma`  |  `list[int]`  |  自由度触觉互接近。 |
|  `touch_data`  |  `list[int]`  |  触觉传感器原始数据。 |
|  `force`  |  `list[int]`  |  自由度力矩,闭合正，松开负，单位0.001N。 |

## 成员函数

```python
rm_plus_state_info_t.to_dict(self,recurse = True)   
```

将类的变量返回为字典，如果recurse为True，则递归处理ctypes结构字段。
