# <p class="hidden">Python: </p>机械臂关节状态的结构体`rm_joint_status_t`

## 属性

|属性名|类型|说明|
|:--|:--|:--|
|`joint_current`|`float[7]`|关节电流，单位mA，精度：0.001mA。|
|`joint_en_flag`|`bool[7]`|当前关节使能状态 ，1为上使能，0为掉使能。|
|`joint_err_code`|`uint16_t[7]`|当前关节错误码。|
|`joint_position`|`float[7]`|关节角度，单位°，精度：0.001°。|
|`joint_temperature`|`float[7]`|当前关节温度，精度0.001℃。|
|`joint_voltage`|`float[7]`|当前关节电压，精度0.001V。|
|`joint_speed`|`float[7]`|当前关节速度，精度0.01RPM。|
