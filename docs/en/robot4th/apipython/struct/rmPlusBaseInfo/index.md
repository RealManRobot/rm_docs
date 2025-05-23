# <p class="hidden">Python: </p>End-Effector Basic Information `rm_plus_base_info_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `manu`  |  c_char * 10  |  Device manufacturer  |
|  `type`  |  c_int  |  Device type  |
|  `hv`  |  c_char * int(10)  |  Hardware version  |
|  `sv`  |  c_char * int(10)  |  Software version  |
|  `bv`  |  c_char * int(10)  |  Boot version  |
|  `id`  |  c_int  |  Device ID  |
|  `dof`  |  c_int  |  Degrees of freedom  |
|  `check`  |  c_int  |  Self-check switch  |
|  `bee`  |  c_int  |  Beeper switch  |
|  `force`  |  c_bool  |  Force control support  |
|  `touch`  |  c_bool  |  Tactile support  |
|  `touch_num`  |  c_int  |  Number of tactile sensors  |
|  `touch_sw`  |  c_int  |  Tactile switch  |
|  `hand`  |  c_int  |  Hand orientation  |
|  `pos_up`  |  c_int * 12  |  Position upper limit  |
|  `pos_low`  |  c_int * 12  |  Position lower limit  |
|  `angle_up`  |  c_int * 12  |  Angle upper limit  |
|  `angle_low`  |  c_int * 12  |  Angle lower limit  |
|  `speed_up`  |  c_int * 12  |  Speed upper limit  |
|  `speed_low`  |  c_int * 12  |  Speed lower limit  |
|  `force_up`  |  c_int * 12  |  Force upper limit  |
|  `force_low`  |  c_int * 12  |  Force lower limit  |

## Member function

```python
rm_plus_base_info_t.to_dict(self,recurse = True)
```

Returns the class variables as a dictionary. If `recurse` is `True`, it recursively processes the fields of the ctypes structure.
