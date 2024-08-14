# <p class="hidden">Python: </p>六维力传感器数据结构体`rm_force_data_t`

## 属性

|属性名|类型|说明|
|:--|:--|:--|
|`force_data`|`float[6]`|当前力传感器原始数据，力的单位为N；力矩单位为Nm。|
|`zero_force_data`|`float[6]`|当前力传感器系统外受力数据，力的单位为N；力矩单位为Nm。|
|`work_zero_force_data`|`float[6]`|当前工作坐标系下系统外受力数据，力的单位为N；力矩单位为Nm。|
|`tool_zero_force_data`|`float[6]`|当前工具坐标系下系统外受力数据，力的单位为N；力矩单位为Nm。|

## 成员函数

```Python
rm_ctypes_wrap.rm_force_data_t.to_dict(self,recurse = True)
```

将类的变量返回为字典，如果recurse为True，则递归处理ctypes结构字段。
