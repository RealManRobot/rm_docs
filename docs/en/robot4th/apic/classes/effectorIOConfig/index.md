# <p class="hidden">C、C++: </p>End-Effector Tool IO configuration `effectorIOConfig`

The robotic arm provides multiple IO ports — which share both input and output functionalities — at the end effector for interaction with external devices. This interface is used to configure the mode of the end effector IO, as well as to set and read power output settings.
**End-Effector Tool IO**
The quantity and classification of the end effector IO ports are as follows: <br>

|Type|Quantity|Description|
|:--|:--|:--|
|Power output|One channel|0 V/12 V/24 V available. |
|Digital IO|Two channels|Input or output available Input: reference voltage: 12 V-24 V; output: 12 V-24 V, matching the input voltage. |
|Communication port|One channel|RS485 available. |

## Set tool-end digital IO output`rm_set_tool_DO_state()`

- **Method prototype:**

```C
int rm_set_tool_DO_state(rm_robot_handle * handle,int io_num,int state)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `io_num`  |    Input    |    IO port number, range: 1-2.   |
|  `state`  |    Input    |    IO state, 1: high output, 0: low output.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Set tool-end channel 1 output to high level
int num = 1;
int state = 1;
ret = rm_set_tool_DO_state(robot_handle,num,state);
```

## Set tool-end digital IO mode`rm_set_tool_IO_mode()`

- **Method prototype:**

```C
int rm_set_tool_IO_mode(rm_robot_handle * handle,int io_num,int io_mode)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `io_num`  |    Input    |    IO port number, range: 1-2.   |
|  `io_mode`  |    Input    |    Mode, 0: input state, 1: output state.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Set the tool-end digital channel IO2 to output mode
int num = 2;
int state = 1;
ret = rm_set_tool_IO_mode(robot_handle,num,state);
```

## Get the digital IO state`rm_get_tool_IO_state()`

- **Method prototype:**

```C
int rm_get_tool_IO_state(rm_robot_handle * handle,int * mode,int * state)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `mode`  |    Output    |    0: input mode, 1: output mode.   |
|  `state`  |    Output    |    0: low, 1: high.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Query the tool-end digital IO state        
float IO_Mode[2];                               
float IO_state[2];                              
ret = rm_get_tool_IO_state(robot_handle, IO_Mode, IO_state)     
```

## Set the tool-end power output`rm_set_tool_voltage()`

- **Method prototype:**

```C
iint rm_set_tool_voltage(rm_robot_handle * handle,int voltage_type)
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
// Set the tool-end power output type to 12 V
int type = 2;
ret = rm_set_tool_voltage(robot_handle, type);
```

## Get the tool-end power output`rm_get_tool_voltage()`

- **Method prototype:**

```C
iint rm_get_tool_voltage(rm_robot_handle * handle,int voltage_type)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `voltage_type`  |    Output    |    Store the power output type, 0: 0 V, 2: 12 V, 3: 24 V.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Get the tool-end power output
int voltage;
ret = rm_get_tool_voltage(robot_handle,&voltage);  
```
