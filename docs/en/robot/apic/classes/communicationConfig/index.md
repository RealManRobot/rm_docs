# <p class="hidden">C, C++: </p>Communication Configuration `communicationConfig`

The robotic arm controller communicates with the user through the network port, WiFi, RS232-USB port, and RS485 port. This interface is intended to set the communication mode.

## Set the WiFi AP mode `rm_set_wifi_ap()`

- **Method prototype:**

```C
int rm_set_wifi_ap(rm_robot_handle * handle,const char * wifi_name,const char * password)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   handle  |    Input    |    Robotic arm handle.   |
|  wifi_name  |    Input    |    Network name.   |
|  password  |    Input    |    Network password.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

::: warning
After the setting is successful, the buzzer rings. The WiFi AP mode is enabled after the manual restart of the controller.
:::

- **Usage demo**
  
```C
//Set the WiFi AP as follows: WiFi name: robot; access password: 12345678
char *wifi_name = (char*)"robot";
char* password = (char*)"12345678";
ret = rm_set_wifi_ap(robot_handle,wifi_name,password);
```

## Set the WiFi STA mode `rm_set_wifi_sta()`

- **Method prototype:**

```C
int rm_set_wifi_sta(rm_robot_handle * handle,const char * router_name,const char * password)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `router_name`  |    Input    |    Network name.   |
|  `password`  |    Input    |    Network password.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

::: warning
After the setting is successful, the buzzer rings. The WiFi STA mode is enabled after the manual restart of the controller.
:::

- **Usage demo**
  
```C
//Set the WiFi STA as follows: target router name: robot; router password: 12345678
char *router_name = (char*)"robot";
char* password = (char*)"12345678";
ret = rm_set_wifi_sta(robot_handle,router_name,password);
```

## Set the baud rate of the controller RS485 `rm_set_RS485()`

- **Method prototype:**

```C
int rm_set_RS485(rm_robot_handle * handle,int baudrate)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `baudrate`  |    Input    |    Baud rate: 9600, 19200, 38400, 115200, and 460800. <br> If the user sets other values, the controller uses 460800 by default.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

::: warning
After this command is sent, the controller will record the current baud rate, and the baud rate will still be used for external communication after power failure and restart.
:::

- **Usage demo**
  
```C
//Set the baud rate of the RS485 to 460800
int baudrate = 460800;
ret = rm_set_RS485(robot_handle,baudrate);
```

## Get the wired network information`rm_get_wired_net()`

Get the wired network information. However, if the wired network is not connected, invalid data will be returned.

- **Method prototype:**

```C
int rm_get_wired_net(rm_robot_handle * handle,char * ip,char * mask,char * mac)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `ip`  |    Input    |     IP address.   |
|  `mask`  |    Input    |    Subnet mask.   |
|  `mac`  |    Input    |    MAC address.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Query the wired network information
char ip[128];
char mask[128];
char mac[128];
ret = rm_get_wired_net(robot_handle,ip,mask,mac);
```

## Get the WiFi network information `rm_get_wifi_net()`

Get the WiFi network information. However, if the WiFi network is not connected, invalid data will be returned.

- **Method prototype:**

```C
int rm_get_wifi_net(rm_robot_handle * handle,rm_wifi_net_t * wifi_net)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_wifi_net_t](../../struct/wifiNet/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `wifi_net`  |    Input    |    Structure for WiFi network information.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

::: warning
The channel value in the structure is only available in AP mode, which is the physical channel number that identifies a WiFi hotspot.
:::

- **Usage demo**
  
```C
//Query the WiFi network information
rm_wifi_net_t wifi;
ret = rm_get_wifi_net(handle, &wifi);
```

## Restore the network factory default `rm_set_net_default()`

- **Method prototype:**

```C
int rm_set_net_default(rm_robot_handle * handle)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Restore the network factory default
ret = rm_set_net_default(robot_handle);
```

## Set the WiFi OFF `rm_set_wifi_close()`

Set the WiFi OFF, and it will be enabled after the restart.

- **Method prototype:**

```C
int rm_set_wifi_close(rm_robot_handle * handle)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Restore the network factory default
ret = rm_set_net_default(robot_handle);
```
