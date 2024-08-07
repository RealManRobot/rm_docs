# 电子围栏参数结构体`rm_fence_config_t`

## 构造函数

```Python
rm_ctypes_wrap.rm_fence_config_t.__init__(self, form = 0, name = '', cube = None, plane = None, sphere = None)
```

**参数初始化：**

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
| `form`    | `int, optional`               | 形状，1 表示长方体，2 表示点面矢量平面，3 表示球体。默认为 None。 |
| `name`    | `str, optional`               | 电子围栏名称，不超过 10 个字节，支持字母、数字、下划线。默认为 None。 |
| `cube`    | `rm_fence_config_cube_t, optional` | 长方体参数. Defaults to None.                             |
| `plane`   | `rm_fence_config_plane_t, optional`  | 点面矢量平面参数。默认为 None。                   |
| `sphere`  | `rm_fence_config_sphere_t, optional`  | 球体参数。默认为 None                               |

## 成员函数

```Python
rm_ctypes_wrap.rm_fence_config_t.to_dict(self)
```
