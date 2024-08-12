# 机械臂位置姿态结构体`rm_pose_t`

## 类成员变量说明

- ### 位置，单位：m`position`

    ```C++
    rm_position_t rm_pose_t::position
    ```

- ### 四元数`quaternion`

    ```C++
    rm_quat_t rm_pose_t::quaternion
    ```

- ### 欧拉角，单位：rad`euler`

    ```C++
    rm_euler_t rm_pose_t::euler
    ```
