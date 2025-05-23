# <p class="hidden">Python: </p>末端设备基础信息`rm_plus_base_info_t`

## 属性

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
|  `manu`  |  c_char * 10  |  设备厂家  |
|  `type`  |  c_int  |  设备类型  |
|  `hv`  |  c_char * int(10)  |  硬件版本  |
|  `sv`  |  c_char * int(10)  |  软件版本  |
|  `bv`  |  c_char * int(10)  |  boot版本  |
|  `id`  |  c_int  |  设备ID  |
|  `dof`  |  c_int  |  自由度  |
|  `check`  |  c_int  |  自检开关  |
|  `bee`  |  c_int  |  蜂鸣器开关  |
|  `force`  |  c_bool  |  力控支持  |
|  `touch`  |  c_bool  |  触觉支持  |
|  `touch_num`  |  c_int  |  触觉个数  |
|  `touch_sw`  |  c_int  |  触觉开关  |
|  `hand`  |  c_int  |  手方向  |
|  `pos_up`  |  c_int * 12  |  位置上限  |
|  `pos_low`  |  c_int * 12  |  位置下限  |
|  `angle_up`  |  c_int * 12  |  角度上限  |
|  `angle_low`  |  c_int * 12  |  角度下限  |
|  `speed_up`  |  c_int * 12  |  速度上限  |
|  `speed_low`  |  c_int * 12  |  速度下限  |
|  `force_up`  |  c_int * 12  |  力上限  |
|  `force_low`  |  c_int * 12  |  力下限  |

## 成员函数

```python
rm_plus_base_info_t.to_dict(self,recurse = True)
```

将类的变量返回为字典，如果recurse为True，则递归处理ctypes结构字段。
