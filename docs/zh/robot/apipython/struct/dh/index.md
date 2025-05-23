# <p class="hidden">Python: </p>机械臂DH参数的结构体`rm_dh_t`

## 构造函数

```Python
__init__(self, d: list[float] = None, a: list[float] = None, alpha: list[float] = None, offset: list[float] = None)
```

## 参数说明

|  参数  |  类型  |  说明  |
| :--- | :--- | :--- |
|  `d`  |  `List[float]`  |  unit: m |
|  `a`  |  `List[float]`  |  unit: m |
|  `alpha`  |  `List[float]`  |  unit: ° |
|  `offset`  |  `List[float]`  |  unit: ° |

## 成员函数

```Python
dict[str, list[Any]] Robotic_Arm.rm_ctypes_wrap.rm_dh_t.to_dict(self)
```

将rm_dh_t对象转换为字典表现形式。
