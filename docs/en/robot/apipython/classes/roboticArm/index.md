# <p class="hidden">Python: </p>Robotic Arm Connection Control `ArmRobotic`

Operations for connecting and disconnecting of, and setting up logs for the robotic arm.

## <div id = '6266'>Initialize thread mode`__init__()`</div>

This is the constructor function.

- **Method prototype:**

```python
__init__(self, mode: rm_thread_mode_e = None):
```

*Jump to [Type description](../../type/index.md) for details of`rm_thread_mode_e`*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `mode`  |    `rm_thread_mode_e`    |    RM_SINGLE_MODE_E: single-thread mode, waiting for data return in a non-blocking manner; RM_DUAL_MODE_E: dual-thread mode, adding a receiving thread to monitor data in the queue; RM_TRIPLE_MODE_E: triple-thread mode, adding a thread to monitor UDP interface data based on the dual-thread mode.   |

- **Return value:**

|   Parameter    |  Type    |   Description    |Handling Suggestions|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    Success.   |-|
|  -1  |    `int`    |    Creation of thread fails. Check the log for specific errors    |Obtain detailed error information when thread creation fails through logs:<br> On Windows, when a thread creation error occurs, the specific error code can be obtained by calling the `GetLastError` function, and its definition can be viewed in the Windows header file `<windows.h>`.<br> On Linux, when a thread creation error occurs, the return value of `pthread_create` is returned, and its return value definition can be viewed in `<pthread.h>`.|

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *

# Initialize in triple-thread mode
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# End the control of the robotic arm and delete the specified robotic arm object
arm.rm_delete_robot_arm()
```

## Create robotic arm connection control handle`rm_create_robot_arm()`

- **Method prototype:**

```python
rm_create_robot_arm(self, ip: str, port: int, level: int = 3, log_func: CFUNCTYPE = None) -> rm_robot_handle:
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|`ip`|`str`|IP address of the robotic arm. |
|`port`|`int`|Port number of the robotic arm. |
|`level`|`int`|Log printing level (3 by default): - 0: debug mode; - 1: info mode; - 2: warning mode; - 3: error mode. |
|`log_func`|`CFUNCTYPE`|Custom log printing function, currently not supported in the Python API version (None by default). |

- **Return value:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   /  |    `rm_robot_handle`   |    Robotic arm handle, which includes the arm's ID identifier.   |

- **Usage demo**
Connect two robotic arms via the RoboticArm class and query their states:

```python
from Robotic_Arm.rm_robot_interface import *

# Initialize in triple-thread mode
arm1 = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
arm2 = RoboticArm()

# Create the robotic arm connection and print the connection ID
handle1 = arm1.rm_create_robot_arm("192.168.1.18", 8080)
print(handle1.id)
handle2 = arm2.rm_create_robot_arm("192.168.1.19", 8080)
print(handle2.id)

# Get the current robotic arm state
print(arm1.rm_get_current_arm_state())
print(arm2.rm_get_current_arm_state())

# Disconnect all connections and destroy threads
RoboticArm.rm_destory()
```

## <div id = '6268'>Delete the specified robotic arm object`rm_delete_robot_arm()`</div>

- **Method prototype:**

```python
rm_delete_robot_arm(self) -> int:
```

- **Return value:**

|   Parameter    |  Type    |   Description    |Handling Suggestions|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    Success.   |-|
|  -1  |    `int`   |   No corresponding handle found, the handle is either void or has been deleted.   |Check if the handle parameter passed in is valid.|

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Initialize in triple-thread mode
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Delete the specified robotic arm object
arm.rm_delete_robot_arm()
```

## Close all robotic arm connections`rm_destory()`

Destroy all threads.

- **Method prototype:**

```python
rm_destory(self) -> int:
```

- **Return value:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   0  |    `int`    |    Success    |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Initialize in triple-thread mode
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Disconnect all connections
RoboticArm.rm_destory()
```

## Save logs to file`rm_set_log_save()`

- **Method prototype:**

```python
rm_set_log_save(self, path) -> None:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|`path`|`string`|Path to save the log file. |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Initialize in triple-thread mode
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

arm.rm_set_log_save("/home/aisha/work/rm_log.txt")

# Delete the specified robotic arm object
arm.rm_delete_robot_arm()
```

## Set real/simulation mode`rm_set_arm_run_mode()`

- **Method prototype:**

```python
rm_set_arm_run_mode(self, mode: int) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|`mode`|int|Mode, 0: simulation, 1: real. |

- **Return value:**
State codes executed by functions:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Initialize in triple-thread mode
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Set the robotic arm to simulation mode
arm.rm_set_arm_run_mode(0)

# Delete the specified robotic arm object
arm.rm_delete_robot_arm()
```

## Get real/simulation mode`rm_get_arm_run_mode()`

- **Method prototype:**

```python
rm_get_arm_run_mode(self) -> tuple[int, int]:
```

- **Return value:**
`tuple[int, int]`: a tuple containing two elements. <br>

1. State codes executed by functions:
0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. Mode:
|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   /  |    `int`   |    0: simulation, 1: real.   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Initialize in triple-thread mode
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Get the current running mode of the robotic arm
print(arm.rm_set_arm_run_mode(0))

# Delete the specified robotic arm object
arm.rm_delete_robot_arm()
```

## <div id = '6270'>Get basic information of robotic arm `rm_get_robot_info()`</div>

- **Method prototype:**

```python
rm_get_robot_info(self) -> tuple[int, dict[str, any]]:
```

- **Return value:**
`tuple[int, dict[str, any]]`: a tuple containing two elements. <br>

1. State codes executed by functions:

    |   Parameter    |  Type    |   Description    |Handling Suggestions|
    | :--- | :--- | :--- |:---|
    |   0  |    `int`    |    Success.   |-|
    |  -1  |    `int`   |   No corresponding handle found, the handle is either void or has been deleted.   |Check if the passed-in handle is valid.|
    |  -2  |    `int`   |   The obtained basic information of robotic arm is invalid. Check if the handle has been deleted.   |Check if the passed-in handle is valid.|

2. Return the current tool frame dictionary:

    |   Parameter    |  Type    |   Description    |
    | :--- | :--- | :---|
    |   `dict[str, any]`  |    `str`   |    Return the dictionary of the current tool frame, key: field names of rm_robot_info_t.   |

    *Jump to [rm_robot_info_t](../../struct/robotInfo/index.md) for details of the structure.*

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Initialize in triple-thread mode
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Get the robotic arm model, end effector force sensor version, and degrees of freedom information
print(arm.rm_get_robot_info())

# Delete the specified robotic arm object
arm.rm_delete_robot_arm()
```

## Register the robotic arm event callback function`rm_get_arm_event_call_back()`

Data is returned when the robotic arm completes a move-to-position command or finishes executing a file run command.

- **Method prototype:**

```python
rm_get_arm_event_call_back(self, event_callback: rm_event_callback_ptr):
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|`event_callback`|`rm_event_callback_ptr`|Robotic arm event callback function. This callback function receives data of rm_event_push_data_t type as its parameter and does not return any value. |

::: warning
The callback function cannot be used in single-thread mode.
:::

- **Usage demo**

```python
# The following is an example of how to register a robotic arm event callback function:
# In this example, we define a function named `event_callback` to handle the robotic arm events and register it as a callback function.
When a robotic arm event occurs, the `event_callback` function will be called and receive an object containing event data as its parameter
from Robotic_Arm.rm_robot_interface import *

def event_func(data:rm_event_push_data_t) -> None:
    print("The motion is complete, the arm is in place.")
    # Determine the interface type
    if data.event_type == 1:  # Trajectory planning completed
        print("Motion result:", data.trajectory_state)
        print("Current device:", data.device)
        print("Whether to connect to the next trajectory:", data.trajectory_connect)
    elif data.codeKey == 2:  # Online programming file execution completed
        print("Online programming file ended id:", data.program_id)

# Initialize in triple-thread mode
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

event_callback = rm_event_callback_ptr(event_func)
arm.rm_get_arm_event_call_back(event_callback)

# Non-blocking joint motion
ret = arm.rm_movej([0, 30, 60, 0, 90, 0], 50, 0, 0, 0)
print("movej: ", ret)

# Wait for printing data
time.sleep(10)

# Delete the specified robotic arm object
arm.rm_delete_robot_arm()
```

## Set Global Timeout `rm_set_timeout()`

Set the global timeout, Unit: ms. When there is significant network latency, you may appropriately increase the timeout duration.

- **Method prototype**:

```python
rm_set_timeout(self,timeout: int) -> None:
```

- **Parameter description:**

|   Parameter    |   Type    |   Description    |
| :--- | :--- | :--- |
|`timeout`|`int`|The timeout duration for receiving instructions from the controller. The default timeout for most interfaces is 500ms. Unit: ms.|

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *
# Initialize to triple-thread mode
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E) 
# Create a robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)
# Set the global timeout to 1000ms
arm.rm_set_timeout(1000)
# Non-blocking joint movement
ret = arm.rm_movej([0, 30, 60, 0, 90, 0], 50, 0, 0, 0)
print("movej: ", ret)
# Delete the specified robotic arm object
arm.rm_delete_robot_arm()
```
