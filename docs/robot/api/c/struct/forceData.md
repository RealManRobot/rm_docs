# <p class="hidden">C、C++: </p>六维力传感器数据结构体`rm_fence_config_t`

## 类成员变量说明

- ### 当前力传感器原始数据`force_data`

    力的单位为N；力矩单位为Nm。

    ```C++
    float rm_force_data_t::force_data[6]
    ```

- ### 当前力传感器系统外受力数据`zero_force_data`

    力的单位为N；力矩单位为Nm。

    ```C++
    float rm_force_data_t::zero_force_data[6]
    ```

- ### 当前工作坐标系下系统外受力原始数据`work_zero_force_data`

    力的单位为N；力矩单位为Nm。

    ```C++
    float rm_force_data_t::work_zero_force_data[6]
    ```

- ### 当前工具坐标系下系统外受力原始数据`tool_zero_force_data`

    力的单位为N；力矩单位为Nm。

    ```C++
    float rm_force_data_t::tool_zero_force_data[6]
    ```
