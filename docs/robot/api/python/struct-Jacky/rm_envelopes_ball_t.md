# 工具坐标系包络参数`rm_envelopes_ball_t`

## 构造函数

```Python
rm_ctypes_wrap.rm_envelopes_ball_t.__init__(self, str name = None, float radius = None, float x = None, float y = None, float z = None)
```

**参数初始化：**

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
| `name` | `str, optional`       | 工具包络球体的名称，1-10 个字节，支持字母数字下划线。默认为 None。 |
| `radius` | `float, optional`    | 工具包络球体的半径，单位 0.001m。默认为 None。       |
| `x`    | `float, optional`     | 工具包络球体球心基于末端法兰坐标系的 X 轴坐标，单位 m。默认为 None。 |
| `y`    | `float, optional`     | 工具包络球体球心基于末端法兰坐标系的 Y 轴坐标，单位 m。默认为 None。 |
| `z`    | `float, optional`     | 工具包络球体球心基于末端法兰坐标系的 Z 轴坐标，单位 m。默认为 None。 |

## 成员函数

```Python
rm_ctypes_wrap.rm_fence_config_t.to_dict(self)
```

输出结果为字典
