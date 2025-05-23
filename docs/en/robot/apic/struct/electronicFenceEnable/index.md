# <p class="hidden">C, C++: </p>Electronic Fence/Virtual Wall Enabling State Parameter Structure `rm_electronic_fence_enable_t`

## Class member variable description

- ### Electronic fence/virtual wall enabling state `enable_state`

    true: enable, false: disable.

    ```C++
    bool rm_electronic_fence_enable_t::enable_state
    ```

- ### Position relationship between robot and electronic fence/virtual wall `in_out_side`

    0: robot inside the electronic fence/virtual wall, 1: robot outside the electronic fence.

    ```C++
    int rm_electronic_fence_enable_t::in_out_side
    ```

- ### Effective region of electronic fence/virtual wall `effective_region`

    0: electronic fence effective for the entire robotic arm, 1: virtual wall effective for the end effector.

    ```C++
    int rm_electronic_fence_enable_t::effective_region
    ```
