# 机械臂所有状态参数结构体`rm_arm_all_state_t`

## 属性

|属性名|类型|说明|
|:--|:--|:--|
|`joint_current`|`float[7]`|关节电流，单位mA。|
|`joint_en_flag`|`int[7]`|关节使能状态。|
|`joint_temperature`|`float[7]`|关节温度,单位℃。|
|`joint_voltage`|`float[7]`|关节电压，单位V。|
|`joint_err_code`|`int[7]`|关节错误码。|
|`sys_err`|`int`|机械臂错误代码。|

## 成员函数

```Python
rm_ctypes_wrap.rm_arm_all_state_t.to_dictionary(self)
```
