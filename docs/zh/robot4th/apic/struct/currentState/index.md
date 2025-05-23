# <p class="hidden">C、C++: </p>机械臂当前状态`rm_current_arm_state_t`

## 类成员变量说明

- ### 机械臂当前位姿`pose`

    ```C++
    rm_pose_t rm_current_arm_state_t::pose
    ```

    *可以跳转[rm_pose_t](../../struct/pose/index.md)查阅结构体详细描述。*

- ### 机械臂当前关节角度`joint`

    ```C++
    float rm_current_arm_state_t::joint[ARM_DOF]
    ```

- ### 错误代码数组`err`

    ```C++
    rm_err_t rm_current_arm_state_t::err
    ```

    *可以跳转[rm_err_t](../../struct/err/index.md)查阅结构体详细描述。*
