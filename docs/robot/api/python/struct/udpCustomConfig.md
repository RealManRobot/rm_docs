# <p class="hidden">Python: </p>UDP主动上报自定义项`rm_udp_custom_config_t`

## 属性

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
|  `joint_speed`  |  `int`  |  关节速度。1：上报；0：关闭上报；-1：不设置，保持之前的状态 |
|  `lift_state`  |  `int`  |  升降关节信息。1：上报；0：关闭上报；-1：不设置，保持之前的状态  |
|  `expand_state`  |  `int`  |  扩展关节信息（升降关节和扩展关节为二选一，优先显示升降关节）1：上报；0：关闭上报；-1：不设置，保持之前的状态  |
|  `arm_current_status`  |  `int`  |  机械臂当前状态。1：上报；0：关闭上报；-1：不设置，保持之前的状态  |

## 成员函数

```Python
rm_ctypes_wrap.rm_udp_custom_config_t.to_dict(self, recurse = True)
```

将类的变量返回为字典，如果recurse为True，则递归处理ctypes结构字段
