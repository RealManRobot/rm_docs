# 机械臂软件版本信息的结构体`rm_arm_software_version_t`

## 属性

|属性名|类型|说明|
|:--|:--|:--|
|`product_version`|`bytes`|机械臂型号。|
|`algorithm_info`|`rm_algorithm_version_t`|算法库信息。|
|`ctrl_info`|`rm_ctrl_version_t`|ctrl 层软件信息。|
|`dynamic_info`|`rm_dynamic_version_t`|动力学版本。|
|`plan_info`|`rm_planinfo_t`|plan 层软件信息。|

## 成员函数

```Python
rm_arm_software_version_t.to_dict(self,recurse = True)
```

将类的变量返回为字典，如果recurse为True，则递归处理ctypes结构字段。
