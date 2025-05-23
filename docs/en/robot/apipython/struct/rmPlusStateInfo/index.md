# <p class="hidden">Python: </p>End-Effector Real-Time Information `rm_plus_state_info_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `sys_state`  |  `int`  |  System status. |
|  `dof_state`  |  `list[int]`  |  Current state of each degree of freedom. |
|  `dof_err`  |  `list[int]`  |  Error information of each degree of freedom. |
|  `pos`  |  `list[int]`  |  Current position of each degree of freedom. |
|  `speed`  |  `list[int]`  |Current speed of each degree of freedom, positive for closing, negative for releasing, unit: dimensionless. |
|  `angle`  |  `list[int]`  |  Current angle of each degree of freedom. |
|  `current`  |  `list[int]`  |  Current current of each degree of freedom. |
|  `normal_force`  |  `list[int]`  |  Normal force of the three-dimensional tactile force of each degree of freedom. |
|  `tangential_force`  |  `list[int]`  |  Tangential force of the three-dimensional tactile force of each degree of freedom. |
|  `tangential_force_dir`  |  `list[int]`  |  Direction of the tangential force of the three-dimensional tactile force of each degree of freedom. |
|  `tsa`  |  `list[int]`  |  Tactile self-approach of each degree of freedom. |
|  `tma`  |  `list[int]`  |  Tactile mutual approach of each degree of freedom. |
|  `touch_data`  |  `list[int]`  |  Raw data of the tactile sensors. |
|  `force`  |  `list[int]`  | Torque of each degree of freedom, positive for closing, negative for releasing, unit: 0.001N. |

## Member function

```python
rm_plus_state_info_t.to_dict(self,recurse = True)   
```

Returns the class variables as a dictionary. If `recurse` is `True`, it recursively processes the fields of the ctypes structure.
