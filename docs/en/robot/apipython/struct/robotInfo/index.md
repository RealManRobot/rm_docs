# <p class="hidden">Python: </p>Robotic Arm Information Structure `rm_robot_info_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
| `arm_dof`     | `int`       | Degrees of freedom of the robotic arm. |
| `arm_model`   | `int`       | Robotic arm model.        |
| `force_type`  | `int`       | Force control type of the end effector. |

## Member function

```Python
rm_ctypes_wrap.rm_robot_info_t.to_dictionary(self)
```

Convert the int data to a string and output a dictionary as the result

**Return value:**
dict: a dictionary containing the values of `arm_dof`, `arm_model`, and `force_type`.
