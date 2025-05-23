# <p class="hidden">C, C++: </p>Communication Configuration `communicationConfig`

The robotic arm controller communicates with the user through the network port, RS232-USB port, and RS485 port. This interface is intended to set the communication mode.

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
