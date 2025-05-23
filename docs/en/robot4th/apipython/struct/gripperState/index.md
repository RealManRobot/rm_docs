# <p class="hidden">Python: </p>Gripper State Structure `rm_gripper_state_t`

## Parameter description

|Parameter|Type|Description|
|:--|:--|:--|
|`enable_state`|`int`|Gripper enabling state, 0: disable, 1: enable. |
|`status`|`int`|Gripper online state, 0: offline, 1: online. |
|`error`|`int`|Gripper error message, indicated by the lower 8 bits, bit5−7: reserved, bit4: internal communication, bit3: driver, bit2: overcurrent, bit1: over-temperature, bit0: locked rotor. |
|`mode`|`int`|Current mode, 1: gripper fully open and idle, 2: gripper fully closed and idle, 3: gripper stopped and idle, 4: gripper in closing, 5: gripper in opening, 6: gripper stopped during closing due to force control. |
|`current_force`|`int`|Current gripper force, in g. |
|`temperature`|`int`|Current temperature, in °C. |
|`actpos`|`int`|Gripper opening. |

## Member function

```Python
rm_ctypes_wrap.rm_gripper_state_t.to_dict(self,recurse = True)
```

Return the class variables as dictionaries and, if the recurse is True, process the structure fields recursively through ctypes.
