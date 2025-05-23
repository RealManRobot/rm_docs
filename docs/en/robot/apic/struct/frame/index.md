# <p class="hidden">C, C++: </p>Frame Structure `rm_frame_t`

## Class member variable description

- ### Frame name `frame_name`

    ```C++
    char rm_frame_t::frame_name[12]
    ```

- ### Frame pose `pose`

    ```C++
    rm_pose_t rm_frame_t::pose
    ```

    *Jump to [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

- ### End effector payload weight, in kg `payload`

    ```C++
    float rm_frame_t::payload
    ```

- ### Position of the center of mass of end effector payload, in m `x`

    ```C++
    float rm_frame_t::x
    ```

- ### Position of the center of mass of end effector payload, in m `y`

    ```C++
    float rm_frame_t::y
    ```

- ### Position of the center of mass of end effector payload, in m `z`

    ```C++
    float rm_frame_t::z
    ```
