# 电子围栏/虚拟墙使能状态参数结构体`rm_electronic_fence_enable_t`

## 类成员变量说明

- ### 电子围栏/虚拟墙使能状态`enable_state`

    true 代表使能，false 代表禁使能。

    ```C  
    bool rm_electronic_fence_enable_t::enable_state
    ```

- ### 机器人与电子围栏/虚拟墙的位置关系`in_out_side`

    0-机器人在电子围栏/虚拟墙内部，1-机器人在电子围栏外部。

    ```C  
    int rm_electronic_fence_enable_t::in_out_side
    ```

- ### 电子围栏/虚拟墙生效范围`effective_region`

    0-电子围栏针对整臂区域生效，1-虚拟墙针对末端生效。

    ```C  
    int rm_electronic_fence_enable_t::effective_region
    ```
