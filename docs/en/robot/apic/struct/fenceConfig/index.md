# <p class="hidden">C, C++: </p>Geometric Model Parameter Structure `rm_fence_config_t`

## Class member variable description

- ### Form `form`

    1: cube, 2: plane, 3: sphere.

    ```C++
    int rm_fence_config_t::form
    ```

- ### Electronic fence name `name`

    Up to 10 bytes, supporting letters, numbers, and underscores.

    ```C++
    char rm_fence_config_t::name[12]
    ```

- ### Cube parameters `cube`

    ```C++
    rm_fence_config_cube_t rm_fence_config_t::cube
    ```

    *Jump to [rm_fence_config_cube_t](../../struct/fenceConfigCube/index.md) for details of the structure.*

- ### Plane parameters `plan`

    ```C++
    rm_fence_config_plane_t rm_fence_config_t::plan
    ```

    *Jump to [rm_fence_config_plane_t](../../struct/fenceConfigPlane/index.md) for details of the structure.*

- ### Sphere parameters `sphere`

    ```C++
    rm_fence_config_sphere_t rm_fence_config_t::sphere
    ```

    *Jump to [rm_fence_config_sphere_t](../../struct/fenceConfigSphere/index.md) for details of the structure.*
