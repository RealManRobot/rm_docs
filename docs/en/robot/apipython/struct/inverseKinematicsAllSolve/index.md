# <p class="hidden">Python: </p>Inverse Kinematics Full Solution Parameter Structure `rm_inverse_kinematics_all_solve_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
| `result`      | `int` | Inverse kinematics solution result: 0 for success, 1 for failure, -1 for empty or out-of-limit joint angles from the previous moment, -2 for invalid target pose quaternion. |
| `num`         | `int` | The target pose, which can be position + quaternion or position + Euler angles depending on the value of `flag`, defaults to `None`. |
| `q_ref`       | `List[float]` | Reference joint angles, typically the current joint angles, unit: °. |
| `q_solve`     | `List[List[float]]` | Full joint angle solutions, an 8x8 array, unit: °. |
