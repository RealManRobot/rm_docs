# <p class="hidden">Python: </p>电子围栏/虚拟墙使能状态结构体`rm_electronic_fence_enable_t`

## 构造函数

```Python
rm_ctypes_wrap.rm_electronic_fence_enable_t.__init__(self, bool enable_state = None, int in_out_side = None, int effective_region = None)
```

**参数说明：**

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
| `enable_state`   | `bool, optional`      | 电子围栏/虚拟墙使能状态，true 代表使能，false 代表禁用。 |
| `in_out_side`    | `int, optional`       | 0-机器人在电子围栏/虚拟墙内部，1-机器人在电子围栏外部。     |
| `effective_region`| `int, optional`      | 0-电子围栏针对整臂区域生效，1-虚拟墙针对末端生效。       |

## 成员函数

```Python
rm_ctypes_wrap.rm_electronic_fence_enable_t.to_dict(self, recurse = True)
```

输出结果为字典
