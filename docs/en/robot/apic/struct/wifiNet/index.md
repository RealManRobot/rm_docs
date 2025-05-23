# <p class="hidden">C, C++: </p>WiFi Network Information Structure `rm_wifi_net_t`

## Class member variable description

- ### Channel `channel`

    It is only available in AP mode, which is the physical channel number that identifies a WiFi hotspot.

    ```C++
    int rm_wifi_net_t::channel
    ```

- ### IP address `ip`

    ```C++
    char rm_wifi_net_t::ip[16]
    ```

- ### MAC address `mac`

    ```C++
    char rm_wifi_net_t::mac[18]
    ```

- ### Subnet mask `mask`

    ```++
    char rm_wifi_net_t::mode[5]
    ```

- ### Password `password`

    ```C++
    char rm_wifi_net_t::password[16]
    ```

- ### SSID `ssid`

    ```C++
    char rm_wifi_net_t::ssid[32]
    ```
