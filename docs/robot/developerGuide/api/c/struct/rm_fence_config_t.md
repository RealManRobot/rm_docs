# 几何模型参数结构体`rm_fence_config_t`

## 类成员变量说明

- ### 形状`form`

    1 表示长方体，2 表示点面矢量平面，3 表示球体。

    ```C  
    int rm_fence_config_t::form
    ```

- ### 电子围栏名称`name`

    不超过 10 个字节，支持字母、数字、下划线。

    ```C  
    char rm_fence_config_t::name[12]
    ```

- ### 长方体参数`cube`

    ```C  
    rm_fence_config_cube_t rm_fence_config_t::cube
    ```

    *可以跳转[rm_fence_config_cube_t](../struct/rm_fence_config_cube_t.md)查阅结构体详细描述*

- ### 点面矢量平面参数`plan`

    ```C  
    rm_fence_config_plane_t rm_fence_config_t::plan
    ```

    *可以跳转[rm_fence_config_plane_t](../struct/rm_fence_config_plane_t.md)查阅结构体详细描述*

- ### 球体参数`sphere`

    ```C  
    rm_fence_config_sphere_t rm_fence_config_t::sphere
    ```

    *可以跳转[rm_fence_config_sphere_t](../struct/rm_fence_config_sphere_t.md)查阅结构体详细描述*
