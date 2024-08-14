# <p class="hidden">C、C++: </p>机械臂当前状态`rm_current_arm_state_t`

## 类成员变量说明

- ### 机械臂当前位姿`pose`

    ```C++
    rm_pose_t rm_current_arm_state_t::pose
    ```

- ### 机械臂当前关节角度`joint`

    ```C++
    float rm_current_arm_state_t::joint[ARM_DOF]
    ```

- ### 机械臂错误代码`arm_err`

    ```C++
    uint8_t rm_current_arm_state_t::arm_err
    ```

- ### 控制器错误代码`sys_err`

    ```C++
    uint8_t rm_current_arm_state_t::sys_err
    ```
