# <p class="hidden">C、C++: </p>逆解求全解参数结构体`rm_inverse_kinematics_all_solve_t`

## 类成员变量说明

- ### 求解结果`result`

    0：成功，1：逆解失败，-1：上一时刻关节角度输入为空或超关节限位，-2：目标位姿四元数不合法， -3：当前机器人非六自由度，当前仅支持六自由度机器人

    ```C++
    int rm_inverse_kinematics_all_solve_t::result
    ```

- ### 解的个数`num`

    ```C++
    int rm_inverse_kinematics_all_solve_t::num
    ```

- ### 参考关节角度`q_ref`

    通常是当前关节角度, 单位 °

    ```C++
    float rm_inverse_kinematics_all_solve_t::q_ref[8]
    ```

- ### 关节角全解`q_solve`

    单位: °

    ```C++
    float rm_inverse_kinematics_all_solve_t::q_solve[8][8]
    ```
