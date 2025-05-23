# <p class="hidden">Python: </p>UDP-Based Custom Real-Time Pushing Item `rm_udp_custom_config_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `joint_speed`  |  `int`  |  Joint speed. 1: enable push, 0: disable push, -1: no setting, previous state kept  |
|  `lift_state`  |  `int`  |  Lifting joint state. 1: enable push, 0: disable push, -1: no setting, previous state kept  |
|  `expand_state`  |  `int`  |  Expansion joint state (the lifting joint and expansion joint are optional, and the lifting joint is preferred). 1: enable push, 0: disable push, -1: no setting, previous state kept  |
|  `arm_current_status`  |  `int`  |  Current robotic arm state. 1: enable push, 0: disable push, -1: no setting, previous state kept  |
|  `hand_state`  |  `int`  |  Dexterous hand state. 1: enable push, 0: disable push, -1: no setting, previous state kept  |
|  `aloha_state`  |  `int`  |  aloha state. 1: enable push, 0: disable push, -1: no setting, previous state kept  |
|  `plus_base`  |  `int`  |   Basic information of the end-effector device. 1: Report; 0: Disable reporting; -1: Do not set, maintain the previous state  |
|  `plus_state`  |  `int`  |  Real-time information of the end-effector device. 1: Report; 0: Disable reporting; -1: Do not set, maintain the previous state  |

## Member function

```Python
rm_ctypes_wrap.rm_udp_custom_config_t.to_dict(self, recurse = True)
```

Return the class variables as dictionaries and, if the recurse is True, process the structure fields recursively through ctypes.
