# <p class="hidden">Python: </p>Quaternion Structure `rm_quat_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `w`  |  `float`  |  Scalar part of a quaternion, representing the angle and direction of rotation. |
|  `x`  |  `float`  |  The first component in the vector part of a quaternion. |
|  `y`  |  `float`  |  The second component in the vector part of a quaternion.  |
|  `z`  |  `float`  |  The third component in the vector part of a quaternion.  |

## Member function

```python
rm_ctypes_wrap.rm_quat_t.to_dict(self,recurse = True)
```

Return the class variables as dictionaries and, if the recurse is True, process the structure fields recursively through ctypes.
