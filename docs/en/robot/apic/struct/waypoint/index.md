# <p class="hidden">C, C++: </p>Global Waypoint Storage Information `rm_waypoint_t`

## Class member variable description

- ### Waypoint name `point_name`

    ```C++
    char rm_waypoint_t::point_name[20]
    ```

- ### Joint angle `joint`

    ```C++
    float rm_waypoint_t::joint[ARM_DOF]
    ```

- ### Pose information `pose`

    ```C++
    rm_pose_t rm_waypoint_t::pose
    ```

    *Jump to [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

- ### Work frame name `work_frame`

    ```C++
    char rm_waypoint_t::work_frame[12]
    ```

- ### Tool frame name `tool_frame`

    ```C++
    char rm_waypoint_t::tool_frame[12]
    ```

- ### Waypoint addition or modification time `time`

    ```C++
    char rm_waypoint_t::time[50]
    ```
