# 表示扩展关节状态的结构体`rm_expand_state_t`

## 属性

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
|  `pos`  |  `int`  |  扩展关节角度，单位度，精度 0.001°(若为升降机构高度，则s单位：mm，精度：1mm，范围：0 ~2300)。 |
|  `current`  |  `int`  |  驱动电流，单位：mA，精度：1mA。  |
|  `err_flag`  |  `int`  |  驱动错误代码，错误代码类型参考关节错误代码。  |
|  `mode`  |  `int`  |  当前工作状态：</br>0：空闲；</br>1：正方向速度运动；</br>2：正方向位置运动；</br>3：负方向速度运动；</br>4：负方向位置运动。  |

## 成员函数

```Python
rm_ctypes_wrap.rm_expand_state_t.to_dict (self, recurse = True)
```

将类的变量返回为字典，如果recurse为True，则递归处理ctypes结构字段
