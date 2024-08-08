# 查询在线编程列表`rm_program_trajectorys_t`

## 属性

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
|  `page_num`  |  `int`  |  页码。 |
|  `page_size`  |  `int`  |  每页大小。  |
|  `list_size`  |  `int`  |  返回总数量。  |
|  `vague_search`  |  `bytes`  |  模糊搜索字符串。  |
|  `trajectory_list`  |  `list`  |  符合的在线编程列表（包含[rm_trajectory_data_t](../struct/rm_trajectory_data_t)结构体的数组）。  |

## 成员函数

```Python
rm_ctypes_wrap.rm_program_trajectorys_t.to_dict(self, recurse = True)
```

将类的变量返回为字典，如果recurse为True，则递归处理ctypes结构字段
