# <p class="hidden">Python: </p>Robotic Arm Joint State Structure `rm_joint_status_t`

## Parameter description

|Parameter|Type|Description|
|:--|:--|:--|
|`joint_current`|`List[float]`|Joint current, unit: mA, accuracy: 0.001 mA. |
|`joint_en_flag`|`List[bool]`|Current joint enabling state, 1: enable, 0: disable. |
|`joint_err_code`|`List[uint16_t]`|Current joint error code. |
|`joint_position`|`List[float]`|Joint angle, unit: °, accuracy: 0.001°. |
|`joint_temperature`|`List[float]`|Current joint temperature, accuracy: 0.001°C. |
|`joint_voltage`|`List[float]`|Current joint voltage, accuracy: 0.001 V. |
|`joint_speed`|`List[float]`|Current joint speed, accuracy: 0.01 RPM. |
