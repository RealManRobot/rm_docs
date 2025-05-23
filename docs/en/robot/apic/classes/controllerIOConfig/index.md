# <p class="hidden">C, C++: </p>Controller IO Configuration and Query `controllerIOConfig`

The controller of the RealMan robotic arm shares the input and output mode (IO mode). This interface is intended to set the IO mode and IO power voltage of the controller.

## Set the digital IO mode `rm_set_IO_mode()`

### C Language Version

- **Method prototype:**

```C
int rm_set_IO_mode(rm_robot_handle * handle,int io_num,rm_io_config_t config)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md), [rm_io_config_t](../../struct/ioConfig/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `io_num`  |    Input    |    IO port numbers 1−4.   |
|  `config`  |    Input    |    Digital IO Configuration Structure.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Set the real-time speed adjustment multiplexing mode of the digital IO channel 1.
int io_num = 1;
rm_io_config_t config = (rm_io_config_t){0};
config.io_mode = 14;
config.io_real_time_config_t.speed = 50;
config.io_real_time_config_t.mode = 1;
ret = rm_set_IO_mode (robot_handle, io_num, config);

//Set the input start function multiplexing mode of the digital IO channel 1
int io_num = 1; 
rm_io_config_t config = (rm_io_config_t){0};                             
config.io_mode = 2;                       
ret = rm_set_IO_mode (robot_handle,io_num, config);
```

### C++ Version

- **Method prototype:**

```C
int rm_set_IO_mode(rm_robot_handle *handle, int io_num, int io_mode, int io_speed_mode=0, int io_speed=0)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `io_num`  |    Input    |    IO port numbers 1−4.   |
|  `io_mode`  |    Input    |   Mode, <br>0 - General Purpose Input Mode; <br>1 - General Purpose Output Mode; <br>2 - Input Start Function Multiplexing Mode; <br>3 - Input Pause Function Multiplexing Mode; <br>4 - Input Resume Function Multiplexing Mode; <br>5 - Input Emergency Stop Function Multiplexing Mode; <br>6 - Input Current Loop Drag Multiplexing Mode; <br>7 - Input Force-Only Position Drag Mode (Configurable with Six-Axis Force Version); <br>8 - Input Force-Only Posture Drag Mode (Configurable with Six-Axis Force Version); <br>9 - Input Force-Position Hybrid Drag Multiplexing Mode (Configurable with Six-Axis Force Version); <br>10 - Input External Axis Maximum Soft Limit Multiplexing Mode (Configurable in External Axis Mode); <br>11 - Input External Axis Minimum Soft Limit Multiplexing Mode (Configurable in External Axis Mode); <br>12 - Input Initial Pose Function Multiplexing Mode; <br>13 - Output Collision Function Multiplexing Mode; <br>14 - Real-Time Speed Adjustment Function Multiplexing Mode.  |
|`io_speed_mode`|Input（Optional）| 1. Single Trigger Mode, when the IO is pulled low, the speed is set to the value of the speed parameter, and when the IO returns to a high level, the speed is set to the initial value. <br>2. Continuous Trigger Mode, when the IO is pulled low, the speed is set to the value of the speed parameter, and when the IO returns to a high level, the speed maintains the current value (active when io_mode is 14)|
|`io_speed`|Input（Optional）|Speed value range 0-100 (active when io_mode is 14).|

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C++
RM_Service robot_service;
//Set the input start function multiplexing mode of the digital IO channel 1
int io_num = 1;                              
int io_mode = 2;                       
ret = robot_service.rm_set_IO_mode (robot_handle,io_num,io_mode);

//Set the real-time speed adjustment multiplexing mode of the digital IO channel 1.
int io_num = 1;
int io_mode = 14;
int io_speed = 50;
int io_speed_mode = 1;
ret = robot_service.rm_set_IO_mode (robot_handle, io_num, io_mode, io_speed_mode, io_speed);
```

## Set the digital output state `rm_set_DO_state()`

- **Method prototype:**

```C
int rm_set_DO_state(rm_robot_handle * handle,int io_num,int state)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `io_num`  |    Input    |    IO port numbers 1−4.   |
|  `state`  |    Input    |    IO state, 1: high output, 0: low output.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Set the high output of digital IO channel 1
int io_num = 1;                              
int state = 1;                       
ret = rm_set_DO_state(robot_handle,io_num,state);
```

## Get the digital IO state `rm_get_IO_state()`

### C Language Version

- **Method prototype:**

```C
int rm_get_IO_state(rm_robot_handle * handle,int io_num, rm_io_get_t* config)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md), [rm_io_get_t](../../struct/ioGetConfig/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `io_num`  |    Input    |    IO port numbers 1−4.   |
|  `config`  |    Output    |   Digital IO Status Acquisition Structure.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Query the state of digital IO output channel 1
int num = 1;
rm_io_get_t config = (rm_io_get_t){0};
ret = rm_get_IO_state(robot_handle,num,&config); 
```

### C++ Version

- **Method prototype:**

```C
int rm_get_IO_state(rm_robot_handle *handle, int io_num, int* state, int* mode, int* io_speed_mode=nullptr, int* io_speed=nullptr)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `io_num`  |    Input    |    IO port numbers 1−4.   |
| `state`         | Output          | IO status，1-High output，0-Low output。 |
|  `io_mode`  |    Output   |   Mode, <br>0 - General Purpose Input Mode; <br>1 - General Purpose Output Mode; <br>2 - Input Start Function Multiplexing Mode; <br>3 - Input Pause Function Multiplexing Mode; <br>4 - Input Resume Function Multiplexing Mode; <br>5 - Input Emergency Stop Function Multiplexing Mode; <br>6 - Input Current Loop Drag Multiplexing Mode; <br>7 - Input Force-Only Position Drag Mode (Configurable with Six-Axis Force Version); <br>8 - Input Force-Only Posture Drag Mode (Configurable with Six-Axis Force Version); <br>9 - Input Force-Position Hybrid Drag Multiplexing Mode (Configurable with Six-Axis Force Version); <br>10 - Input External Axis Maximum Soft Limit Multiplexing Mode (Configurable in External Axis Mode); <br>11 - Input External Axis Minimum Soft Limit Multiplexing Mode (Configurable in External Axis Mode); <br>12 - Input Initial Pose Function Multiplexing Mode; <br>13 - Output Collision Function Multiplexing Mode; <br>14 - Real-Time Speed Adjustment Function Multiplexing Mode.  |
|`io_speed_mode`|Output（Optional）| 1. Single Trigger Mode, when the IO is pulled low, the speed is set to the value of the speed parameter, and when the IO returns to a high level, the speed is set to the initial value. <br>2. Continuous Trigger Mode, when the IO is pulled low, the speed is set to the value of the speed parameter, and when the IO returns to a high level, the speed maintains the current value (active when io_mode is 14)|
|`io_speed`|Output（Optional）|Speed value range 0-100 (active when io_mode is 14).|

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
RM_Service robot_service;
//Query the status of Digital IO Output Channel 1
int num = 1;
int state;
int mode;
ret = robot_service.rm_get_IO_state(robot_handle,num,&state,&mode); 

//Query the real-time speed adjustment function multiplexing mode of Digital IO Channel 1
int io_num = 1;
int io_mode;
int io_speed;
int io_speed_mode;
ret = robot_service.rm_set_IO_mode (robot_handle, io_num, io_mode, io_speed_mode, io_speed);
```

## Get all IO input state `rm_get_IO_input()`

- **Method prototype:**

```C
int rm_get_IO_input(rm_robot_handle * handle,int * DI_state)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `DI_state`  |    Output    |    Digital input state array of ports 1−4, 1: high, 0: low, -1: the port is not in input mode.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Query all IO input state
int DI_state[4] = {0};
ret = rm_get_IO_input(robot_handle,DI_state);
```

## Get all IO output state `rm_get_IO_output()`

- **Method prototype:**

```C
int rm_get_IO_output(rm_robot_handle * handle,int * DO_state)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `DO_state`  |    Output    |    Digital output state array of ports 1−4, 1: high, 0: low, -1: the port is not in output mode.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Query all IO output state
int DO_state[4] = {0};
ret = rm_get_IO_output(robot_handle,DO_state);
```

## Set the controller power output `rm_set_voltage()`

- **Method prototype:**

```C
int rm_set_voltage(rm_robot_handle * handle,int voltage_type)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `voltage_type`  |    Input    |    Power output type, 0: 0 V, 2: 12 V, 3: 24 V.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Set the controller power output to 24 V
int type = 3;
ret = rm_set_voltage(robot_handle, type); 
```

## Get the controller power output `rm_get_voltage()`

- **Method prototype:**

```C
int rm_get_voltage(rm_robot_handle * handle,int * voltage_type)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `voltage_type`  |    Output    |    Power output type, 0: 0 V, 2: 12 V, 3: 24 V.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Query the power output state
int voltage_type;
ret = rm_get_voltage(robot_handle,&voltage_type);    
```
