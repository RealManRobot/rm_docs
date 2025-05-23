# <p class="hidden">C, C++: </p>UDP Robotic Arm Real-time Pushing Interface Configuration Structure `rm_realtime_push_config_t`

## Class member variable description

- ### Broadcast cycle, in multiples of 5 ms `cycle`

    ```C++
    int rm_realtime_push_config_t::cycle
    ```

- ### Enable, real-time push `enable`

    ```C++
    bool rm_realtime_push_config_t::enable
    ```

- ### Broadcast port number `port`

    ```C++
    int rm_realtime_push_config_t::port
    ```

- ### Frame for external force data `force_coordinate`

    0: sensor frame, 1: current work frame, 2: current tool frame (available for force sensor)

    ```C++
    int rm_realtime_push_config_t::port
    ```

- ### Custom pushing target IP address `ip`

    ```C++
    char rm_realtime_push_config_t::ip[28]
    ```

- ### Custom pushing item `custom_config`

    ```C++
    rm_udp_custom_config_t rm_realtime_push_config_t::custom_config
    ```

    *Jump to [rm_udp_custom_config_t](../../struct/udpCustomConfig/index.md) for details of the structure.*
