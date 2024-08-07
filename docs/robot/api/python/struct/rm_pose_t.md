# 表示一个坐标系的结构体`rm_pose_t`

## 属性

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
|  `position`  |  `rm_position_t`  |  位置，单位：m。 |
|  `quaternion`  |  `rm_quat_t`  |  四元数。  |
|  `euler`  |  `rm_euler_t`  |  欧拉角，单位：rad。  |

## 构造函数

```python
rm_ctypes_wrap.rm_pose_t.to_dict(self, recurse = True)
```

将类的变量返回为字典，如果recurse为True，则递归处理ctypes结构字段。
