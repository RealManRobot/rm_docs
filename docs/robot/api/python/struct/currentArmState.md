# <p class="hidden">Python: </p>机械臂当前状态的结构体`rm_current_arm_state_t`

## 属性

|属性名|类型|说明|
|:--|:--|:--|
|`pose`|`rm_pose_t`|机械臂的当前位姿信息。|
|`joint`|`List[float]`|机械臂当前关节角度，单位：°。|
|`arm_err`|`uint8_t`|机械臂错误代码。|
|`sys_err`|`uint8_t`|控制器错误代码。|

>注意：
>- 这些字段通常由外部系统或硬件提供，并通过适当的接口填充。
>- 在处理错误代码时，请参考相关的错误代码文档或枚举。

## 成员函数

```Python
rm_ctypes_wrap.rm_current_arm_state_t.to_dictionary(self,arm_dof)
```
