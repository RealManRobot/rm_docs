# <p class="hidden">C、C++: </p>无线网络信息结构体`rm_wifi_net_t`

## 类成员变量说明

- ### 信道 `channel`

    如果是 AP 模式，则存在此字段，标识 wifi 热点的物理信道号。

    ```C++
    int rm_wifi_net_t::channel
    ```

- ### ip 地址`ip`

    ```C++
    char rm_wifi_net_t::ip[16]
    ```

- ### MAC 地址`mac`

    ```C++
    char rm_wifi_net_t::mac[18]
    ```

- ### 子网掩码`mask`

    ```++
    char rm_wifi_net_t::mode[5]
    ```

- ### 密码`password`

    ```C++
    char rm_wifi_net_t::password[16]
    ```

- ### SSID 参数`ssid`

    ```C++
    char rm_wifi_net_t::ssid[32]
    ```
