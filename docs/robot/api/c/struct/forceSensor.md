# 力传感器数据结构体`rm_force_sensor_t`

>UDP主动上报机械臂信息。

## 类成员变量说明

- ### 当前力传感器原始数据`force`

    0.001N或0.001Nm。

    ```C++
    float rm_force_sensor_t::force[6]
    ```

- ### 当前力传感器系统外受力数据`zero_force`

    0.001N或0.001Nm。

    ```C++
    float rm_force_sensor_t::zero_force[6]
    ```

- ### 当前力传感器系统外受力数据`coordinate`

    0.001N或0.001Nm。

    ```C++
    int rm_force_sensor_t::coordinate
    ```
