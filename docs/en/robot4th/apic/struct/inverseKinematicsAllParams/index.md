# <p class="hidden">C、C++: </p>Inverse Kinematics Full Solution Parameter Structure `rm_inverse_kinematics_all_solve_t`

## Class member variable description

- ### Solution Result `result`

    0: Success, 1: Inverse kinematics failed, -1: Previous joint angles are empty or exceed joint limits, -2: Target pose quaternion is invalid, -3: The current robot is not a six degrees of freedom robot. Currently, only six degrees of freedom robots are supported.

    ```C++
    int rm_inverse_kinematics_all_solve_t::result
    ```

- ### Number of Solutions `num`

    ```C++
    int rm_inverse_kinematics_all_solve_t::num
    ```

- ### Reference Joint Angles `q_ref`

    Typically the current joint angles, unit: °.

    ```C++
    float rm_inverse_kinematics_all_solve_t::q_ref[8]
    ```

- ### Full Joint Angle Solutions `q_solve`

    Unit: °.

    ```C++
    float rm_inverse_kinematics_all_solve_t::q_solve[8][8]
    ```
