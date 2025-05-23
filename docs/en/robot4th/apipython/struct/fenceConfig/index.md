# <p class="hidden">Python: </p>Electronic Fence Parameter Structure `rm_fence_config_t`

## Constructor function

```Python
rm_ctypes_wrap.rm_fence_config_t.__init__(self, form = 0, name = '', cube = None, plane = None, sphere = None)
```

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
| `form`    | `int, optional`               | Form, 1: cube, 2: plane, 3: sphere. Default: None. |
| `name`    | `str, optional`               |  Electronic fence name, up to 10 bytes, supporting letters, numbers, and underscores. Default: None. |
| `cube`    | [rm_fence_config_cube_t](../../struct/fenceConfigCube/index.md), optional | Cube parameters. Default: None.     |
| `plane`   | [rm_fence_config_plane_t](../../struct/fenceConfigPlane/index.md), optional  | Plane parameters. Default: None.     |
| `sphere`  | [rm_fence_config_sphere_t](../../struct/fenceConfigSphere/index.md), optional  | Sphere parameters. Default: None.|

## Member function

```Python
rm_ctypes_wrap.rm_fence_config_t.to_dict(self)
```
