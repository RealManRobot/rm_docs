# <p class="hidden">Python: </p>机械臂全局路点结构体`rm_waypoint_t`

## 构造函数

```Python
rm_ctypes_wrap.rm_waypoint_t.__init__(self,
str point_name = None, list[float] joint = None, list[float] pose = None, str work_frame = None, str tool_frame = None, str time = '' )
```

**参数说明：**

| 属性           | 类型                | 说明                                       |
| :------------ | :------------------ | :--------------------------------------- |
| `point_name`   | `str, optional`     | 路点名称，默认为None。                   |
| `joint`        | `list[float], optional` | 关节角度列表，长度为7，单位：°，默认为None。 |
| `pose`         | `list[float], optional` | 位姿信息，包含位置和欧拉角，默认为None。该列表应为 [x, y, z, rx, ry, rz] 格式，其中 [x, y, z] 是位置，[rx, ry, rz] 是欧拉角。 |
| `work_frame`   | `str, optional`     | 工作坐标系名称，默认为None。            |
| `tool_frame`   | `str, optional`     | 工具坐标系名称，默认为None。          |
| `time`         | `str, optional`     | 路点新增或修改时间，默认为空字符串。     |

## 成员函数

```Python
rm_ctypes_wrap.rm_waypoint_t.to_dict (self)
```

将类的变量返回为字典
