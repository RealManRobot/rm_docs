# 逆解参数结构体`rm_inverse_kinematics_params_t`

## 类成员变量说明

- ### 上一时刻关节角度，单位°`q_in`

    ```C  
    float rm_inverse_kinematics_params_t::q_in[ARM_DOF]
    ```

- ### 目标位姿`q_pose`

    ```C  
    rm_pose_t rm_inverse_kinematics_params_t::q_pose
    ```

- ### 姿态参数类别`flag`

0-四元数；1-欧拉角

    ```C
    uint8_t rm_inverse_kinematics_params_t::flag
    ```
