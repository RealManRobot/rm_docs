# <p class="hidden">Python: </p>All Robotic Arm State Structure `rm_arm_all_state_t`

## Parameter description

|Parameter|Type|Description|
|:--|:--|:--|
|`joint_current`|`List[float]`|Joint current, in mA. |
|`joint_en_flag`|`List[int]`|Joint enabling state. |
|`joint_temperature`|`List[float]`|Joint temperature, in °C. |
|`joint_voltage`|`List[float]`|Joint voltage, in V. |
|`joint_err_code`|`List[int]`|Joint error code. |
|`err`|[`rm_err_t`](../err/index.md)|Error code. |

## Member function

```Python
rm_ctypes_wrap.rm_arm_all_state_t.to_dictionary(self)
```
