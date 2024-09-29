# <p class="hidden">Python: </p>机械臂基本信息结构体`rm_robot_info_t`

## 属性

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
| `arm_dof`     | `int`       | 机械臂的自由度数量。 |
| `arm_model`   | `int`       | 机械臂型号。         |
| `force_type`  | `int`       | 机械臂末端力控类型。 |

## 成员函数

```Python
rm_ctypes_wrap.rm_robot_info_t.to_dictionary(self)
```

将int类型数据转化为字符串，并输出结果为字典

**返回值：**
dict: 包含机械臂自由度'arm_dof'、型号'arm_model'、末端力控版本'force_type'值的字典
