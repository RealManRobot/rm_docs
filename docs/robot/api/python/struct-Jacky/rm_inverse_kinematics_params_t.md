# 逆运动学参数结构体`rm_inverse_kinematics_params_t`

## 属性

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
| `q_in`      | `List[float]` | 上一时刻关节角度，单位°。                         |
| `q_pose`    | `List[float]` | 目标位姿，根据`flag`的值，可以是位置+四元数或位置+欧拉角。 |
| `flag`      | `int`     | 标志位，0表示使用四元数，1表示使用欧拉角，默认为None。       |

## 构造函数

```Python
rm_ctypes_wrap.rm_inverse_kinematics_params_t.__init__(self, list[float] q_in = None, list[float] q_pose = None, int flag = None)
```

**参数初始化：**

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
| `q_in`      | `List[float], optional` | 上一时刻关节角度，单位°，默认为None。                         |
| `q_pose`    | `List[float], optional` | 目标位姿，根据`flag`的值，可以是位置+四元数或位置+欧拉角，默认为None。 |
| `flag`      | `int, optional`     | 标志位，0表示使用四元数，1表示使用欧拉角，默认为None。       |
