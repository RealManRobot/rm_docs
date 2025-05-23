# <p class="hidden">Python: </p>6-DoF Force Sensor Data Structure `rm_force_data_t`

## Parameter description

|Parameter|Type|Description|
|:--|:--|:--|
|`force_data`|`List[float]`|Original data of the current force sensor, force: N; torque: N.m. |
|`zero_force_data`|`List[float]`|External force data of the current force sensor, force: N; torque: N.m. |
|`work_zero_force_data`|`List[float]`|External force data in the current work frame, force: N; torque: N.m. |
|`tool_zero_force_data`|`List[float]`|External force data in the current tool frame, force: N; torque: N.m. |

## Member function

```Python
rm_ctypes_wrap.rm_force_data_t.to_dict(self,recurse = True)
```

Return the class variables as dictionaries and, if the recurse is True, process the structure fields recursively through ctypes.
