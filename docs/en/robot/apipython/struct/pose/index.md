# <p class="hidden">Python: </p>Pose Structure `rm_pose_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `position`  |  [rm_position_t](../../struct/position/index.md)  |  Position, in m. |
|  `quaternion`  |  [rm_quat_t](../../struct/quat/index.md)  |  Quaternion.  |
|  `euler`  |  [rm_euler_t](../../struct/euler/index.md)  |  Euler angle, in rad.  |

## Member function

```python
rm_ctypes_wrap.rm_pose_t.to_dict(self, recurse = True)
```

Return the class variables as dictionaries and, if the recurse is True, process the structure fields recursively through ctypes.
