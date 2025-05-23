# <p class="hidden">Python: </p>Euler Angle Structure `rm_euler_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `rx`  |  `float`  |  Angle of rotation around the X-axis, in rad. |
|  `ry`  |  `float`  |  Angle of rotation around the Y-axis, in rad.  |
|  `rz`  |  `float`  |  Angle of rotation around the Z-axis, in rad.  |

## Member function

```python
rm_ctypes_wrap.rm_euler_t.to_dict(self,recurse = True)
```

Return the class variables as dictionaries and, if the recurse is True, process the structure fields recursively through ctypes.
