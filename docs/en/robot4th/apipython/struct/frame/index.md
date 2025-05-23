# <p class="hidden">Python: </p>Robotic Arm Position and Orientation Structure `rm_frame_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `frame_name`  |  `bytes`  |  Frame name, up to 10 bytes (including the null byte at the end). |
|  `pose`  |  [`rm_pose_t`](../pose/index.md)  |  Frame pose, containing position and orientation.  |
|  `payload`  |  `float`  |  End effector payload weight, in kg.  |
|  `x`  |  `float`  |  X-coordinate of the center of mass of end effector payload.  |
|  `y`  |  `float`  |  Y-coordinate of the center of mass of end effector payload.  |
|  `z`  |  `float`  |  Z-coordinate of the center of mass of end effector payload.  |

## Constructor function

```Python
rm_frame_t.__init__(self,str  frame_name = None,tuple[float, float, float, float, float, float]  pose = None,float  payload = None,float  x = None,float  y = None,float  z = None)
```

**Parameter description:**

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `frame_name`  |  `str, optional`  |  Frame name, up to 10 bytes. Default: None. |
|  `pose`  |  `tuple[float, float, float, float, float, float], optional`  |   Tuple of the frame pose, containing three position coordinates (x, y, z) and three Euler angles (rx, ry, rz).  |
|  `payload`  |  `float, optional`  |  End effector payload weight, in kg. Default: None.  |
|  `x`  |  `float, optional`  |  X-coordinate of the center of mass of end effector payload, in m. Default: None.  |
|  `y`  |  `float, optional`  |  Y-coordinate of the center of mass of end effector payload, in m. Default: None.  |
|  `z`  |  `float, optional`  |  Z-coordinate of the center of mass of end effector payload, in m. Default: None.  |

**Return value:**

|  Parameter  |  Type  |
| :--- | :--- |
|  `ValueError`  |  Return if the frame_name is longer than 10 bytes. |
|  `ValueError`  | Return if the pose is not a tuple containing 6 floats (x, y, z, rx, ry, rz).  |

## Member function

```Python
dict[str, any] Robotic_Arm.rm_ctypes_wrap.rm_frame_t.to_dictionary(self)
```

Convert the rm_frame_t to a dictionary.
**Parameter description:**

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `name`  |  `str`  |  Frame name. |
|  `pose`  |  `List[float]`  |  List of positions and Euler angles, represented by [x, y, z, rx, ry, rz].  |
|  `payload`  |  `float`  |  End effector payload weight, in kg.  |
|  `x`  |  `float`  |  Position of end effector payload, in m.  |
|  `y`  |  `float`  |  Position of end effector payload, in m.  |
|  `z`  |  `float`  |  Position of end effector payload, in m.  |
