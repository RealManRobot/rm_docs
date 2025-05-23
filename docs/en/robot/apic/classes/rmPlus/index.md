# <p class="hidden">C and C++: </p>End-Effector Ecosystem Protocol Configuration `RmPlusConfig`

Reading of basic and real-time information of end-effector devices supported by the end-effector ecosystem protocol.

## Set End-Effector Ecosystem Protocol Mode `rm_set_rm_plus_mode()`

- **Method prototype**

```C
int rm_set_rm_plus_mode(rm_robot_handle *handle, int mode)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |   Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input     |    The robot arm handle.   |
|  `mode`  |    Input     |    The end-effector ecosystem protocol mode. 0: Disable protocol, 9600: Enable protocol (baud rate 9600), 115200: Enable protocol (baud rate 115200), 256000: Enable protocol (baud rate 256000), 460800: Enable protocol (baud rate 460800).    |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
int mode = 460800;
int ret = rm_set_rm_plus_mode(handle, mode);
```

## Query End-Effector Ecosystem Protocol Mode `rm_get_rm_plus_mode()`

- **Method prototype**

```C
int rm_get_rm_plus_mode(rm_robot_handle *handle, int *mode)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter   |   Type    |  Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input     |   The robot arm handle.   |
|  `mode`  |    Output     |    The end-effector ecosystem protocol mode. 0: Disable protocol, 9600: Enable protocol (baud rate 9600), 115200: Enable protocol (baud rate 115200), 256000: Enable protocol (baud rate 256000), 460800: Enable protocol (baud rate 460800).    |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
int mode = 0;
int ret = rm_get_rm_plus_mode(handle, &mode);
```

## Set Tactile Sensor Mode (Supported by End-Effector Ecosystem Protocol) `rm_set_rm_plus_touch()`

- **Method prototype**

```C
int rm_set_rm_plus_touch(rm_robot_handle *handle, int mode)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |   Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input     |   The robot arm handle. |
|  `mode`  |    Input     |    The tactile sensor switch status. 0: Disable tactile sensor, 1: Enable tactile sensor (return processed data), 2: Enable tactile sensor (return raw data).   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
int mode = 1;
int ret = rm_set_rm_plus_touch(handle, mode);
```

## Get Tactile Sensor Mode (Supported by End-Effector Ecosystem Protocol) `rm_get_rm_plus_touch()`

- **Method prototype**

```C
int rm_get_rm_plus_touch(rm_robot_handle *handle, int *mode)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |   Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input     |   The robot arm handle.   |
|   `mode`  |    Output     |    The tactile sensor switch status. 0: Disable tactile sensor, 1: Enable tactile sensor (return processed data), 2: Enable tactile sensor (return raw data).    |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
int mode = 0;
int ret = rm_get_rm_plus_touch(handle, &mode);
```

## Read End-Effector Basic Information (Supported by End-Effector Ecosystem Protocol) `rm_get_rm_plus_base_info()`

- **Method prototype**

```C
int rm_get_rm_plus_base_info(rm_robot_handle *handle, rm_plus_base_info_t *info)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_plus_base_info_t](../../struct/plusBase/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |   Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input     |    The robot arm handle.  |
|  `info`  |    Output      |   The basic information of the end-effector device.  |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
rm_robot_handle *handle = NULL;
handle = rm_create_robot_arm("192.168.1.18",8080);
rm_plus_base_info_t baseinfo;
int ret = rm_get_rm_plus_base_info(handle, &baseinfo);
```

## Read End-Effector Real-Time Information (Supported by End-Effector Ecosystem Protocol) `rm_get_rm_plus_state_info()`

- **Method prototype**

```C
int rm_get_rm_plus_state_info(rm_robot_handle *handle, rm_plus_state_info_t *info)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_plus_state_info_t](../../struct/plusState/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |   Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input     |    The robot arm handle.    |
|  `info`  |    Output      |    The real-time information of the end-effector device.    |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
rm_robot_handle *handle = NULL;
handle = rm_create_robot_arm("192.168.1.18",8080);
rm_plus_state_info_t stateinfo;
int ret = rm_get_rm_plus_state_info(handle, &stateinfo);
```
