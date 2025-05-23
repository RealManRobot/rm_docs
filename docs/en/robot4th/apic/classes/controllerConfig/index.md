# <p class="hidden">C, C++: </p>System Configuration `controllerConfig`

This document is prepared to get the controller state, control the power, clear the error, set the wired network IP address, and get the software information.

## Get the controller state `rm_get_controller_state()`

- **Method prototype:**

```C
int rm_get_controller_state(rm_robot_handle * handle,float * voltage,float * current,float * temperature,int * err_flag )
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `voltage`  |    Output    |    Returned voltage.   |
|  `current`  |    Output    |    Returned current.   |
|  `temperature`  |    Output    |    Returned temperature.   |
|  `err_flag`  |    Output    |    Controller runtime error code.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Get the controller state
float voltage = 0;                                                            
float current = 0;                                                            
float temperature = 0;                                                        
int sys_err = 0;                                                         
ret = rm_get_controller_state(robot_handle, &voltage, &current, &temperature, &sys_err);    
```

## Set the robotic arm power `rm_set_arm_power()`

- **Method prototype:**

```C
int rm_set_arm_power(rm_robot_handle * handle,int arm_power)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `arm_power`  |    Input    |    1: power on, 0: power off.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Control the robotic arm power
ret = rm_set_arm_power(robot_handle, 1);
```

## Get the power state of the robotic arm `rm_get_arm_power_state()`

- **Method prototype:**

```C
int rm_get_arm_power_state(rm_robot_handle * handle,int * power_state)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `power_state`  |    Output    |    Obtained power state of the robotic arm, 1: power on, 0: power off.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Get the power state of the robotic arm
int power;
ret = rm_get_arm_power_state(robot_handle,&power);   
```

## Get the cumulative runtime of the controller `rm_get_system_runtime()`

- **Method prototype:**

```C
int rm_get_system_runtime(rm_robot_handle * handle,int * day,int * hour,int * min,int * sec
)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `day`  |    Output    |    Read time.   |
|  `hour`  |    Output    |    Read time.   |
|  `min`  |    Output   |    Read time.   |
|  `sec`  |    Output    |    Read time.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Get the cumulative runtime of the controller
char state = 0;
int day;
int hour;
int min;
int sec;
ret = rm_get_system_runtime(robot_handle, &day, &hour, &min, &sec);    
```

## Clear the cumulative runtime of the controller `rm_clear_system_runtime()`

- **Method prototype:**

```C
int rm_clear_system_runtime(rm_robot_handle * handle)
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
//Clear the cumulative runtime of the controller
ret = rm_clear_system_runtime(robot_handle);
```

## Get the cumulative rotation angle of the joint `rm_get_joint_odom()`

- **Method prototype:**

```C
int rm_get_joint_odom(rm_robot_handle * handle,float * joint_odom)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `joint_odom`  |    Output    |    Save the cumulative rotation angle array of each joint.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Get the cumulative rotation angle of the joint
float odom[7];
ret = rm_get_joint_odom(robot_handle,odom);   
```

## Clear the cumulative rotation angle of the joint `rm_clear_joint_odom()`

- **Method prototype:**

```C
int rm_clear_joint_odom(rm_robot_handle * handle)
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
//Clear the cumulative rotation angle of the joint
ret = rm_clear_joint_odom(robot_handle);
```

## Set the wired network IP address `rm_set_NetIP()`

- **Method prototype:**

```C
int rm_set_NetIP(rm_robot_handle * handle,const char * ip)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `ip`  |    Output    |    Wired network IP address.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Set the wired network IP address
ret = rm_set_NetIP(robot_handle,(char*)"192.168.1.19");
```

## Clear the system error `rm_clear_system_err()`

- **Method prototype:**

```C
int rm_clear_system_err(rm_robot_handle * handle)
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
//Clear the system error
ret = rm_clear_system_err(robot_handle);
```

## Get the software information of the robotic arm `rm_get_arm_software_info()`

- **Method prototype:**

```C
int rm_get_arm_software_info(rm_robot_handle * handle,rm_arm_software_version_t * software_info)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_arm_software_version_t](../../struct/softwareVersion/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `software_info`  |    Input    |    Structure for the robotic arm software information.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Get the software information of the robotic arm
rm_arm_software_version_t info;
ret = rm_get_arm_software_info(handle, &arm_software_version);
```

## Get the controller RS485 mode `rm_get_controller_RS485_mode()`

- **Method prototype:**

```C
int rm_get_controller_RS485_mode(rm_robot_handle * handle,int * mode,int * baudrate,int * timeout)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `mode`  |    Output    |    Save the mode. 0: RS485 serial communication by default, 1: modbus-RTU master mode, 2: modbus-RTU slave mode.   |
|   `baudrate`  |    Output    |    Save the baud rate.   |
|   `timeout`  |    Input    |    modbus protocol timeout period in 100 ms, available only in modbus-RTU mode.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
int mode;
int baudrate;
int timeout;
ret = rm_get_controller_RS485_mode(robot_handle, &mode, &baudrate, &timeout);
```

## Get the tool RS485 mode `rm_get_tool_RS485_mode()`

- **Method prototype:**

```C
int rm_get_tool_RS485_mode(rm_robot_handle * handle,int * mode,int * baudrate,int * timeout)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `mode`  |    Output    |    Save the mode. 0: RS485 serial communication by default, 1: modbus-RTU master mode, 2: modbus-RTU slave mode.   |
|   `baudrate`  |    Output    |    Save the baud rate.   |
|   `timeout`  |    Input    |    modbus protocol timeout period in 100 ms, available only in modbus-RTU mode.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
int mode;
int baudrate;
int timeout;
ret = rm_get_tool_RS485_mode(robot_handle, &mode, &baudrate, &timeout);
```

## Get the joint software version `rm_get_joint_software_version()`

The joint software version number obtained is in string format, and the current joint software version number can be directly obtained.

- **Method prototype:**

```C
int rm_get_joint_software_version(rm_robot_handle *handle,int *version, rm_version_t *joint_v);
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_version_t](../../struct/version/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `version`  |    Output    |    Reserved parameter, not applicable to the Gen 4 controller.   |
|   `joint_v`  |    Output    |   The array of strings representing the software version numbers of each joint.  |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Get the joint software version
int joint_v[7] = {0};
rm_version_t joint_version[7];
ret = rm_get_joint_software_version(handle, joint_v, joint_version);
```

## Get the software version of the end interface board `rm_get_tool_software_version()`

The software version number of the end interface board obtained is in string format, and the current end interface board software version number can be directly obtained.

- **Method prototype:**

```C
int rm_get_tool_software_version(rm_robot_handle *handle, int *version, rm_version_t *end_v);
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_version_t](../../struct/version/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `version`  |    Output    |    Reserved parameter, not applicable to the Gen 4 controller. |
|   `end_v`  |    Output    |   The string representing the software version number of the end - effector interface board obtained.  |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Get the software version of the end interface board
rm_version_t tool_version;
int tool_v = 0;
ret = rm_get_tool_software_version(handle,&tool_v, &tool_version);
```
