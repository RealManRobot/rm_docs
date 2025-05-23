# <p class="hidden">Python: </p>Inverse Kinematics Parameter Structure `rm_inverse_kinematics_params_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
| `q_in`      | `List[float], optional` | Previous joint angle, in °, default: None.                          |
| `q_pose`    | `List[float], optional` | Target pose, represented by either position + quaternion or position + Euler angle based on the `flag`, default: None. |
| `flag`      | `int, optional`     | Flag, 0: quaternion, 1: Euler angle, default: None.     |

## Constructor function

```Python
rm_ctypes_wrap.rm_inverse_kinematics_params_t.__init__(self, list[float] q_in = None, list[float] q_pose = None, int flag = None)
```
