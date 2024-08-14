# <p class="hidden">Python: </p>表示机械臂位置姿态的结构体`rm_frame_t`

## 属性

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
|  `frame_name`  |  `bytes`  |  坐标系名称，不超过10个字符（包括结尾的null字节）。 |
|  `pose`  |  `rm_pose_t`  |  坐标系位姿，包含位置和姿态信息。  |
|  `payload`  |  `float`  |  坐标系末端负载重量，单位：kg。  |
|  `x`  |  `float`  |  坐标系末端负载质心位置x轴坐标。  |
|  `y`  |  `float`  |  坐标系末端负载质心位置y轴坐标。  |
|  `z`  |  `float`  |  坐标系末端负载质心位置z轴坐标。  |

## 构造函数

```Python
rm_frame_t.__init__(self,str  frame_name = None,tuple[float, float, float, float, float, float]  pose = None,float  payload = None,float  x = None,float  y = None,float  z = None)
```

**参数说明：**
|  参数  |  类型  |  说明  |
| :--- | :--- | :--- |
|  `frame_name`  |  `str, optional`  |  坐标系名称，不超过10个字符。默认为 None。 |
|  `pose`  |  `tuple[float, float, float, float, float, float], optional`  |  表示坐标系位姿的元组，包含三个位置坐标（x, y, z）和三个欧拉角（rx, ry, rz）。  |
|  `payload`  |  `float, optional`  |  坐标系末端负载重量，单位：kg。默认为 None。  |
|  `x`  |  `float, optional`  |  坐标系末端负载质心位置的 x 坐标，单位：m。默认为 None。  |
|  `y`  |  `float, optional`  |  坐标系末端负载质心位置的 y 坐标，单位：m。默认为 None。  |
|  `z`  |  `float, optional`  |  坐标系末端负载质心位置的 z 坐标，单位：m。默认为 None。  |

**返回值：**
|  参数  |  类型  |
| :--- | :--- |
|  `ValueError`  |  如果frame_name的长度超过10个字符。 |
|  `ValueError`  |  如果 pose 不是包含6个浮点数的元组，表示(x, y, z, rx, ry, rz)。  |

## 成员函数

```Python
dict[str, any] Robotic_Arm.rm_ctypes_wrap.rm_frame_t.to_dictionary(self)
```

将rm_frame_t对象转换为字典表现形式。
**参数说明：**
|  参数  |  类型  |  说明  |
| :--- | :--- | :--- |
|  `name`  |  `str`  |  坐标系名称。 |
|  `pose`  |  `List[float]`  |  包含位置和欧拉角的列表，按顺序为 [x, y, z, rx, ry, rz]。  |
|  `payload`  |  `float`  | 坐标系末端负载重量，单位：kg。  |
|  `x`  |  `float`  |  坐标系末端负载位置，单位：m。  |
|  `y`  |  `float`  |  坐标系末端负载位置，单位：m。  |
|  `z`  |  `float`  |  坐标系末端负载位置，单位：m。  |
