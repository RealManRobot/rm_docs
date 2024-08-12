# 坐标系结构体`rm_frame_t`

## 类成员变量说明

- ### 坐标系名称`frame_name`

    ```C++
    char rm_frame_t::frame_name[12]
    ```

- ### 坐标系位姿`pose`

    ```C++
    rm_pose_t rm_frame_t::pose
    ```

- ### 坐标系末端负载重量，单位：kg`payload`

    ```C++
    float rm_frame_t::payload
    ```

- ### 坐标系末端负载质心位置，单位：m`x`

    ```C++
    float rm_frame_t::x
    ```

- ### 坐标系末端负载质心位置，单位：m`y`

    ```C++
    float rm_frame_t::y
    ```

- ### 坐标系末端负载质心位置，单位：m`z`

    ```C++
    float rm_frame_t::z
    ```
