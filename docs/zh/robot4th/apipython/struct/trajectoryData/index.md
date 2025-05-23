# <p class="hidden">Python: </p>在线编程存储信息`rm_trajectory_data_t`

## 属性

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
|  `id`  |  `int`  |  在线编程文件id。 |
|  `size`  |  `int`  |  文件大小。  |
|  `speed`  |  `int`  |  默认运行速度。  |
|  `trajectory_name`  |  `int`  |  文件名称。  |

## 成员函数

```Python
rm_ctypes_wrap.rm_trajectory_data_t.to_dict(self, recurse = True)
```

将类的变量返回为字典，如果recurse为True，则递归处理ctypes结构字段
