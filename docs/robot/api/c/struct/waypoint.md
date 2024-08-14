# <p class="hidden">C、C++: </p>全局路点存储信息`rm_waypoint_t`

## 类成员变量说明

- ### 路点名称 `point_name`

    ```C++
    char rm_waypoint_t::point_name[20]
    ```

- ### 关节角度 `joint`

    ```C++
    float rm_waypoint_t::joint[ARM_DOF]
    ```

- ### 位姿信息 `pose`

    ```C++
    rm_pose_t rm_waypoint_t::pose
    ```

    *可以跳转[rm_pose_t](../struct/pose)查阅结构体类型详细描述*

- ### 工作坐标系名称 `work_frame`

    ```C++
    char rm_waypoint_t::work_frame[12]
    ```

- ### 工具坐标系名称 `tool_frame`

    ```C++
    char rm_waypoint_t::tool_frame[12]
    ```

- ### 路点新增或修改时间 `time`

    ```C++
    char rm_waypoint_t::time[50]
    ```
