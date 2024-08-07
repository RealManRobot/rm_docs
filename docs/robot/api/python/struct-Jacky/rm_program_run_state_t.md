# 机械臂程序运行状态结构体`rm_program_run_state_t`

## 属性

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
|  `run_state`  |  `int`  |  运行状态：</br>0: 未开始</br>1: 运行中</br>2: 暂停中。 |
|  `id`  |  `int`  |  运行轨迹编号。  |
|  `edit_id`  |  `int`  |  上次编辑的在线编程编号 id。  |
|  `plan_num`  |  `int`  |  运行行数。  |
|  `total_loop`  |  `int`  |  循环指令数量。  |
|  `step_mode`  |  `int`  |  单步模式：</br>1: 单步模式</br>0: 非单步模式。  |
|  `plan_speed`  |  `int array[100]`  |  全局规划速度比例 1-100。  |
|  `loop_num`  |  `int array[100]`  |  循环行数。  |
|  `loop_cont`  |  `int array[100]`  |  对应循环次数  |

## 成员函数

```Python
def Robotic_Arm.rm_ctypes_wrap.rm_program_run_state_t.to_dict(self, recurse = True)
```

将类的变量返回为字典，如果recurse为True，则递归处理ctypes结构字段
