# <p class="hidden">C、C++: </p>机械臂主动上报接口配置结构体`rm_realtime_push_config_t`

## 类成员变量说明

- ### 广播周期，5ms的倍数`cycle`

    ```C++
    int rm_realtime_push_config_t::cycle
    ```

- ### 使能，是否主动上报`enable`

    ```C++
    bool rm_realtime_push_config_t::enable
    ```

- ### 广播的端口号`port`

    ```C++
    int rm_realtime_push_config_t::port
    ```

- ### 系统外受力数据的坐标系`force_coordinate`

    0为传感器坐标系 1为当前工作坐标系 2为当前工具坐标系（力传感器版本支持）

    ```C++
    int rm_realtime_push_config_t::port
    ```

- ### 自定义的上报目标IP地址`ip`

    ```C++
    char rm_realtime_push_config_t::ip[28]
    ```

- ### 自定义上报项`custom_config`

    ```C++
    rm_udp_custom_config_t rm_realtime_push_config_t::custom_config
    ```
    *可以跳转[rm_udp_custom_config_t](../struct/udpCustomConfig)查阅结构体详细描述*