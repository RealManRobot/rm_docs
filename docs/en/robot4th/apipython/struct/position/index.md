# <p class="hidden">Python: </p>Position Structure `rm_position_t`

It is commonly used to represent the position of the robot, object, or other point located in three-dimensional space.

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `x`  |  `float`  |  X-coordinate, in m. |
|  `y`  |  `float`  |  Y-coordinate, in m.  |
|  `z`  |  `float`  |  Z-coordinate, in m.  |

## Member function

```python
rm_ctypes_wrap.rm_position_t.to_dict(self,recurse = True)
```

Return the class variables as dictionaries and, if the recurse is True, process the structure fields recursively through ctypes.
