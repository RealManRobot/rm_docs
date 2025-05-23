# <p class="hidden">C, C++: </p>Inverse Kinematics Parameter Structure `rm_inverse_kinematics_params_t`

## Class member variable description

- ### Previous joint angle `q_in`

  Unit: °.

  ```C++
  float rm_inverse_kinematics_params_t::q_in[ARM_DOF]
  ```

- ### Target pose `q_pose`

  ```C++
  rm_pose_t rm_inverse_kinematics_params_t::q_pose
  ```

  *Jump to [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

- ### Orientation parameter type `flag`

  0: quaternion, 1: Euler angle.

  ```C++
  uint8_t rm_inverse_kinematics_params_t::flag
  ```
