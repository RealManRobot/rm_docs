# <p class="hidden">Python: </p>Modbus Configuration `ModbusConfig`

This can be used for Modbus configuration. The RealMan robot arm provides one RS485 communication interface on both the controller and the end-effector interface board. These interfaces can be configured as standard Modbus RTU mode through interface settings. In Modbus RTU mode, users can perform read and write operations on peripherals connected to the port through the provided interfaces. Below is a detailed description of the Modbus configuration `ModbusConfig`, including method prototypes, parameter descriptions, return value descriptions, and usage examples.

::: warning

- Modbus supports switching between RTU and TCP modes. Please configure according to your needs.
- Additionally, supports adding multiple Modbus-TCP master configurations.
:::

## Add Modbus TCP Master `rm_add_modbus_tcp_master()`

- **Method prototype:**

```python
rm_add_modbus_tcp_master(self, modbus_tcp_master: rm_modbus_tcp_master_info_t) -> int:
```

*Jump to [rm_modbus_tcp_master_info_t](../../struct/modbustcpmaster/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description                                 |
| :-------- | :---- | :----------------------------------- |
| `modbus_tcp_master`      | `rm_modbus_tcp_master_info_t` | Modbus TCP master configuration structure.     |

- **Return value:** <br>

State codes executed by functions:

<div class='tableWrap'>

|Parameter|Type|Description|Handling Suggestions|
|-|-|-|-|
|0|`int`|Success.|-|
|1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
|-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
|-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|  -4  |    `int`    |  This interface is not supported by the Gen 3 Controller.   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create robot arm connection, print connection id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Add Modbus TCP Master
master = rm_modbus_tcp_master_info_t("test", "127.0.0.1", 502)
print(arm.rm_add_modbus_tcp_master(master))

arm.rm_delete_robot_arm()
```

## Update Modbus TCP Master `rm_update_modbus_tcp_master()`

- **Method prototype:**

```python
rm_update_modbus_tcp_master(self, master_name:str, modbus_tcp_master: rm_modbus_tcp_master_info_t) -> int:
```

*Jump to [rm_modbus_tcp_master_info_t](../../struct/modbustcpmaster/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description                                 |
| :-------- | :---- | :----------------------------------- |
| `master_name`      | `str` | Name of the Modbus TCP master.   |
|`modbus_tcp_master`|`rm_modbus_tcp_master_info_t`|Modbus TCP master information to be modified.|

- **Return value:** <br>

State codes executed by functions:

<div class='tableWrap'>

|Parameter|Type|Description|Handling Suggestions|
|-|-|-|-|
|0|`int`|Success.|-|
|1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
|-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
|-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|  -4  |    `int`    |  This interface is not supported by the Gen 3 Controller.   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create robot arm connection, print connection id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Update Modbus TCP Master
master = rm_modbus_tcp_master_info_t("test_1", "127.0.0.1", 502)
print(arm.rm_update_modbus_tcp_master("test", master))

arm.rm_delete_robot_arm()
```

## Delete Modbus TCP Master `rm_delete_modbus_tcp_master()`

- **Method prototype:**

```python
rm_delete_modbus_tcp_master(self, master_name:str) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description                                 |
| :-------- | :---- | :----------------------------------- |
| `master_name`      | `str` | Name of the Modbus TCP master.           |

- **Return value:** <br>
State codes executed by functions:

<div class='tableWrap'>

|Parameter|Type|Description|Handling Suggestions|
|-|-|-|-|
|0|`int`|Success.|-|
|1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
|-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
|-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|  -4  |    `int`    |  This interface is not supported by the Gen 3 Controller.   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create robot arm connection, print connection id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Delete Modbus TCP Master
print(arm.rm_delete_modbus_tcp_master("test"))

arm.rm_delete_robot_arm()
```

## Get Specified Modbus TCP Master `rm_get_modbus_tcp_master()`

- **Method prototype:**

```python
rm_get_modbus_tcp_master(self, master_name:str) -> tuple[int, dict[str, any]]:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description                                 |
| :-------- | :---- | :----------------------------------- |
| `master_name`      | `str` | Name of the Modbus TCP master.              |

- **Return value:** <br>

tuple[int,dict[str,any]]: A tuple containing two elements.

1. int: State codes executed by functions:

    <div class='tableWrap'>

    |Parameter|Type|Description|Handling Suggestions|
    |-|-|-|-|
    |0|`int`|Success.|-|
    |1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
    |-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
    |-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
    |-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
    |  -4  |    `int`    |  This interface is not supported by the Gen 3 Controller.   |-|

    </div>

    <style scoped>
        .tableWrap {
            display: table;
            width: 100%;
            table-layout: fixed;
        }
        .tableWrap tr th, .tableWrap td {
            width: auto;
        }
    </style>

2. dict[str,any]: Modbus TCP master information:

    |   Parameter    |  Type   |   Description    |
    | :--- | :--- | :---|
    |   -  |    `dict[str,any]`   |   Returns a dictionary containing the specified Modbus TCP master information, with keys being the field names of the `rm_modbus_tcp_master_info_t` structure.  |

    *Jump to [rm_modbus_tcp_master_info_t](../../struct/modbustcpmaster/index.md) for details of the structure.*

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create robot arm connection, print connection id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Get Modbus TCP Master
print(arm.rm_get_modbus_tcp_master("test"))

arm.rm_delete_robot_arm()
```

## Get Modbus TCP Master List `rm_get_modbus_tcp_master_list()`

- **Method prototype:**

```python
rm_get_modbus_tcp_master_list(self, page_num: int, page_size: int, vague_search: str) -> tuple[int, dict[str, any]]:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description                                 |
| :-------- | :---- | :----------------------------------- |
| `page_num`      | `int` | Page number.     |
| `page_size`      | `int` | Number of items per page.     |
| `vague_search`      | `str` | Vague search.     |

- **Return value:** <br>

tuple[int,dict[str,any]]: A tuple containing two elements.

1. int: State codes executed by functions:

    <div class='tableWrap'>

    |Parameter|Type|Description|Handling Suggestions|
    |-|-|-|-|
    |0|`int`|Success.|-|
    |1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
    |-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
    |-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
    |-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
    |  -4  |    `int`    |  This interface is not supported by the Gen 3 Controller.   |-|

    </div>

    <style scoped>
        .tableWrap {
            display: table;
            width: 100%;
            table-layout: fixed;
        }
        .tableWrap tr th, .tableWrap td {
            width: auto;
        }
    </style>

2. dict[str,any]: List of Modbus TCP masters that meet the criteria:

    |   Parameter    |  Type   |   Description    |
    | :--- | :--- | :---|
    |   -  |    `dict[str,any]`   |   Returns a dictionary containing the list of Modbus TCP masters that meet the criteria, with keys being the field names of the `rm_modbus_tcp_master_list_t` structure.   |

    *Jump to [rm_modbus_tcp_master_list_t](../../struct/modbustcpmasterlist/index.md) for details of the structure.*

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create robot arm connection, print connection id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Get Multiple Modbus TCP Masters
print(arm.rm_get_modbus_tcp_master_list(1,10,''))

arm.rm_delete_robot_arm()
```

## Set Controller RS485 Mode `rm_set_controller_rs485_mode()`

- **Method prototype:**

```python
rm_set_controller_rs485_mode(self, mode:int, baudrate:int) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description                                 |
| :-------- | :---- | :----------------------------------- |
| `mode`      | `int` | 0 for default RS485 serial communication, 1 for Modbus-RTU master mode, 2 for Modbus-RTU slave mode.  |
| `baudrate`      | `int` | Baud rate. (Currently supported: 9600, 19200, 38400, 57600, 115200, 230400, 460800) |

- **Return value:** <br>
State codes executed by functions:

<div class='tableWrap'>

|Parameter|Type|Description|Handling Suggestions|
|-|-|-|-|
|0|`int`|Success.|-|
|1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
|-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
|-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|  -4  |    `int`    |  This interface is not supported by the Gen 3 Controller.   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create robot arm connection, print connection id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Set Controller RS485 Mode to Modbus-RTU Master Mode, Baudrate 115200
print(arm.rm_set_controller_rs485_mode(1,115200))

arm.rm_delete_robot_arm()
```

## Get Controller RS485 Mode `rm_get_controller_rs485_mode_v4()`

- **Method prototype:**

```python
rm_get_controller_rs485_mode_v4(self) -> tuple[int, dict[str, any]]:
```

- **Return value:** <br>

tuple[int,dict[str,any]]: A tuple containing two elements.

1. int: State codes executed by functions:

    <div class='tableWrap'>

    |Parameter|Type|Description|Handling Suggestions|
    |-|-|-|-|
    |0|`int`|Success.|-|
    |1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
    |-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
    |-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
    |-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
    |  -4  |    `int`    |  This interface is not supported by the Gen 3 Controller.   |-|

    </div>

    <style scoped>
        .tableWrap {
            display: table;
            width: 100%;
            table-layout: fixed;
        }
        .tableWrap tr th, .tableWrap td {
            width: auto;
        }
    </style>

2. dict[str,any]: Dictionary containing the following keys:

    |   Parameter    |  Type   |   Description    |
    | :--- | :--- | :---|
    |  `mode` |    `int`   |   0 for default RS485 serial communication, 1 for Modbus-RTU master mode, 2 for Modbus-RTU slave mode.  |
    |  `baudrate` |    `int`   | Baud rate. (Currently supported: 9600, 19200, 38400, 57600, 115200, 230400, 460800)  |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create robot arm connection, print connection id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Get Controller RS485 Mode
print(arm.rm_get_controller_rs485_mode_v4())

arm.rm_delete_robot_arm()
```

## Set Tool End RS485 Mode `rm_set_tool_rs485_mode()`

- **Method prototype:**

```python
rm_set_tool_rs485_mode(self, mode:int, baudrate:int) -> int:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description                                 |
| :-------- | :---- | :----------------------------------- |
| `mode`      | `int` | Communication port: <br> 0 - Set the tool end RS485 port to RTU master mode, <br> 1 - Set the tool end RS485 port to dexterous hand mode, <br> 2 - Set the tool end RS485 port to gripper mode. |
| `baudrate`      | `int` | Baud rate. (Currently supported: 9600, 115200, 460800) |

- **Return value:** <br>
State codes executed by functions:

<div class='tableWrap'>

|Parameter|Type|Description|Handling Suggestions|
|-|-|-|-|
|0|`int`|Success.|-|
|1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
|-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
|-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|  -4  |    `int`    |  This interface is not supported by the Gen 3 Controller.   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create robot arm connection, print connection id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Set the tool end RS485 port to RTU master mode, baudrate 115200
print(arm.rm_set_tool_rs485_mode(0,115200))

arm.rm_delete_robot_arm()
```

## Get Tool End RS485 Mode `rm_get_tool_rs485_mode_v4()`

- **Method prototype:**

```python
rm_get_tool_rs485_mode_v4(self) -> tuple[int, dict[str, any]]:
```

- **Return value:** <br>

tuple[int,dict[str,any]]: A tuple containing two elements.

1. int: State codes executed by functions:

    <div class='tableWrap'>

    |Parameter|Type|Description|Handling Suggestions|
    |-|-|-|-|
    |0|`int`|Success.|-|
    |1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
    |-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
    |-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
    |-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
    |  -4  |    `int`    |  This interface is not supported by the Gen 3 Controller.   |-|

    </div>

    <style scoped>
        .tableWrap {
            display: table;
            width: 100%;
            table-layout: fixed;
        }
        .tableWrap tr th, .tableWrap td {
            width: auto;
        }
    </style>

2. dict[str,any]: Dictionary containing the following keys::

    |   Parameter    |  Type   |   Description    |
    | :--- | :--- | :---|
    |  `mode` |    `int`   |  Communication port: <br> 0 - Set the tool end RS485 port to RTU master mode, <br> 1 - Set the tool end RS485 port to dexterous hand mode, <br> 2 - Set the tool end RS485 port to gripper mode.   |
    |  `baudrate` |    `int`   | Baud rate. (Currently supported: 9600, 115200, 460800)  |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create robot arm connection, print connection id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Get Tool End RS485 Mode
print(arm.rm_get_tool_rs485_mode_v4())

arm.rm_delete_robot_arm()
```

## Modbus RTU Protocol Read Coils `rm_read_modbus_rtu_coils()`

- **Method prototype:**

```python
rm_read_modbus_rtu_coils(self, param:rm_modbus_rtu_read_params_t) -> tuple[int, list[int]]:
```

*Jump to [rm_modbus_rtu_read_params_t](../../struct/modbusread/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description                                 |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_modbus_rtu_read_params_t` | Modbus RTU read parameters structure.  |

- **Return value:** <br>

tuple[int,list[int]]: A tuple containing two elements.

1. int: State codes executed by functions:

    <div class='tableWrap'>

    |Parameter|Type|Description|Handling Suggestions|
    |-|-|-|-|
    |0|`int`|Success.|-|
    |1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
    |-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
    |-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
    |-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
    |  -4  |    `int`    |  This interface is not supported by the Gen 3 Controller.   |-|

    </div>

    <style scoped>
        .tableWrap {
            display: table;
            width: 100%;
            table-layout: fixed;
        }
        .tableWrap tr th, .tableWrap td {
            width: auto;
        }
    </style>

2. list[int]: Read coil data:

    |   Parameter    |  Type   |   Description    |
    | :--- | :--- | :---|
    |  - |    `int`   |  Returns the read coil data, with the array size being param.num.  |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create robot arm connection, print connection id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Modbus RTU read coils
param = rm_modbus_rtu_read_params_t(10, 1, 0, 10)
print(arm.rm_read_modbus_rtu_coils(param))

arm.rm_delete_robot_arm()
```

## Modbus RTU Protocol Write Coils `rm_write_modbus_rtu_coils()`

- **Method prototype:**

```python
rm_write_modbus_rtu_coils(self, param:rm_modbus_rtu_write_params_t) -> int:
```

*Jump to [rm_modbus_rtu_write_params_t](../../struct/modbuswrite/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description                                 |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_modbus_rtu_write_params_t` |  Modbus RTU write parameters structure.   |

- **Return value:** <br>

State codes executed by functions:

<div class='tableWrap'>

|Parameter|Type|Description|Handling Suggestions|
|-|-|-|-|
|0|`int`|Success.|-|
|1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
|-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
|-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|  -4  |    `int`    |  This interface is not supported by the Gen 3 Controller.   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create robot arm connection, print connection id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Modbus RTU write coils
param_w = rm_modbus_rtu_write_params_t(10,1,0,10,[1,1,0,0,0,0,0,0,0,0])
print(arm.rm_write_modbus_rtu_coils(param_w))

arm.rm_delete_robot_arm()
```

## Modbus RTU Protocol Read Discrete Inputs `rm_read_modbus_rtu_input_status()`

- **Method prototype:**

```python
rm_read_modbus_rtu_input_status(self, param:rm_modbus_rtu_read_params_t) -> tuple[int, list[int]]:
```

*Jump to [rm_modbus_rtu_read_params_t](../../struct/modbusread/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description                                 |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_modbus_rtu_read_params_t` |  Modbus RTU read parameters structure.   |

- **Return value:** <br>

tuple[int,list[int]]: A tuple containing two elements.

1. int: State codes executed by functions:

    <div class='tableWrap'>

    |Parameter|Type|Description|Handling Suggestions|
    |-|-|-|-|
    |0|`int`|Success.|-|
    |1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
    |-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
    |-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
    |-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
    |  -4  |    `int`    |  This interface is not supported by the Gen 3 Controller.   |-|

    </div>

    <style scoped>
        .tableWrap {
            display: table;
            width: 100%;
            table-layout: fixed;
        }
        .tableWrap tr th, .tableWrap td {
            width: auto;
        }
    </style>

2. list[int]: Read discrete input data:

    |   Parameter    |  Type   |   Description    |
    | :--- | :--- | :---|
    |  - |    `int`   | Returns the read discrete input data, with the array size being param.num.  |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create robot arm connection, print connection id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Modbus RTU read discrete inputs
param = rm_modbus_rtu_read_params_t(10, 1, 0, 10)
print(arm.rm_read_modbus_rtu_input_status(param))

arm.rm_delete_robot_arm()
```

## Modbus RTU Protocol Read Holding Registers `rm_read_modbus_rtu_holding_registers()`

- **Method prototype:**

```python
rm_read_modbus_rtu_holding_registers(self, param:rm_modbus_rtu_read_params_t) -> tuple[int, list[int]]:
```

*Jump to [rm_modbus_rtu_read_params_t](../../struct/modbusread/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description                                 |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_modbus_rtu_read_params_t` |Modbus RTU read parameters structure.   |

- **Return value:** <br>

tuple[int,list[int]]: A tuple containing two elements.

1. int: State codes executed by functions:

    <div class='tableWrap'>

    |Parameter|Type|Description|Handling Suggestions|
    |-|-|-|-|
    |0|`int`|Success.|-|
    |1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
    |-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
    |-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
    |-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
    |  -4  |    `int`    |  This interface is not supported by the Gen 3 Controller.   |-|

    </div>

    <style scoped>
        .tableWrap {
            display: table;
            width: 100%;
            table-layout: fixed;
        }
        .tableWrap tr th, .tableWrap td {
            width: auto;
        }
    </style>

2. list[int]: Read holding register data:

    |   Parameter    |  Type   |   Description    |
    | :--- | :--- | :---|
    |  - |    `int`   | Returns the read holding register data, with the array size being param.num. |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create robot arm connection, print connection id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Modbus RTU read holding registers
param = rm_modbus_rtu_read_params_t(10, 1, 0, 10)
print(arm.rm_read_modbus_rtu_holding_registers(param))

arm.rm_delete_robot_arm()
```

## Modbus RTU Protocol Write Holding Registers `rm_write_modbus_rtu_registers()`

- **Method prototype:**

```python
rm_write_modbus_rtu_registers(self, param:rm_modbus_rtu_write_params_t) -> int:
```

*Jump to [rm_modbus_rtu_write_params_t](../../struct/modbuswrite/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description                                 |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_modbus_rtu_write_params_t` | Modbus RTU write parameters structure.   |

- **Return value:** <br>
State codes executed by functions:

<div class='tableWrap'>

|Parameter|Type|Description|Handling Suggestions|
|-|-|-|-|
|0|`int`|Success.|-|
|1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
|-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
|-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|  -4  |    `int`    |  This interface is not supported by the Gen 3 Controller.   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create robot arm connection, print connection id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Modbus RTU write registers
param_w = rm_modbus_rtu_write_params_t(10,1,0,10,[1,1,0,0,0,0,0,0,0,0])
print(arm.rm_write_modbus_rtu_registers(param_w))

arm.rm_delete_robot_arm()
```

## Modbus RTU Protocol Read Input Registers `rm_read_modbus_rtu_input_registers()`

- **Method prototype:**

```python
rm_read_modbus_rtu_input_registers(self, param:rm_modbus_rtu_read_params_t) -> tuple[int, list[int]]:
```

*Jump to [rm_modbus_rtu_read_params_t](../../struct/modbusread/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description                                 |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_modbus_rtu_read_params_t` |Modbus RTU read parameters structure. |

- **Return value:** <br>

tuple[int,list[int]]: A tuple containing two elements.

1. int: State codes executed by functions:

    <div class='tableWrap'>

    |Parameter|Type|Description|Handling Suggestions|
    |-|-|-|-|
    |0|`int`|Success.|-|
    |1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
    |-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
    |-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
    |-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
    |  -4  |    `int`    |  This interface is not supported by the Gen 3 Controller.   |-|

    </div>

    <style scoped>
        .tableWrap {
            display: table;
            width: 100%;
            table-layout: fixed;
        }
        .tableWrap tr th, .tableWrap td {
            width: auto;
        }
    </style>

2. list[int]: Read input register data:

    |   Parameter    |  Type   |   Description    |
    | :--- | :--- | :---|
    |  - |    `int`   | Returns the read input register data, with the array size being param.num.  |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create robot arm connection, print connection id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Modbus RTU read input registers
param = rm_modbus_rtu_read_params_t(10, 1, 0, 10)
print(arm.rm_read_modbus_rtu_input_registers(param))

arm.rm_delete_robot_arm()
```

## Modbus TCP Protocol Read Coils `rm_read_modbus_tcp_coils()`

- **Method prototype:**

```python
rm_read_modbus_tcp_coils(self, param:rm_modbus_tcp_read_params_t) -> tuple[int, list[int]]:
```

*Jump to [rm_modbus_tcp_read_params_t](../../struct/modbustcpread/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description                                 |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_modbus_tcp_read_params_t` |Modbus TCP read parameters structure.   |

- **Return value:** <br>

tuple[int,list[int]]: A tuple containing two elements.

1. int: State codes executed by functions:

    <div class='tableWrap'>

    |Parameter|Type|Description|Handling Suggestions|
    |-|-|-|-|
    |0|`int`|Success.|-|
    |1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
    |-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
    |-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
    |-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
    |  -4  |    `int`    |  This interface is not supported by the Gen 3 Controller.   |-|

    </div>

    <style scoped>
        .tableWrap {
            display: table;
            width: 100%;
            table-layout: fixed;
        }
        .tableWrap tr th, .tableWrap td {
            width: auto;
        }
    </style>

2. list[int]: Read coil data:

    |   Parameter    |  Type   |   Description    |
    | :--- | :--- | :---|
    |  - |    `int`   | Returns the read coil data, with the array size being param.num.  |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create robot arm connection, print connection id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Modbus TCP read coils
param = rm_modbus_tcp_read_params_t(10,master_name=None,ip='127.0.0.1',port=502,num=10)
print(arm.rm_read_modbus_tcp_coils(param))

arm.rm_delete_robot_arm()
```

## Modbus TCP Protocol Write Coils `rm_write_modbus_tcp_coils()`

- **Method prototype:**

```python
rm_write_modbus_tcp_coils(self, param:rm_modbus_tcp_write_params_t) -> int:
```

*Jump to [rm_modbus_tcp_write_params_t](../../struct/modbustcpswrite/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description                                 |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_modbus_tcp_write_params_t` |Modbus TCP write parameters structure.  |

- **Return value:** <br>

State codes executed by functions:

<div class='tableWrap'>

|Parameter|Type|Description|Handling Suggestions|
|-|-|-|-|
|0|`int`|Success.|-|
|1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
|-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
|-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|  -4  |    `int`    |  This interface is not supported by the Gen 3 Controller.   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create robot arm connection, print connection id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Modbus TCP write parameters structure.
param_w = rm_modbus_tcp_write_params_t(10,master_name='test',num=10,data=[1,1,0,0,0,0,0,0,0,0])
print(arm.rm_write_modbus_tcp_coils(param_w))

arm.rm_delete_robot_arm()
```

## Modbus TCP Protocol Read Discrete Inputs `rm_read_modbus_tcp_input_status()`

- **Method prototype:**

```python
rm_read_modbus_tcp_input_status(self, param:rm_modbus_tcp_read_params_t) -> tuple[int, list[int]]:
```

*Jump to [rm_modbus_tcp_read_params_t](../../struct/modbustcpread/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description                                 |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_modbus_tcp_read_params_t` | Modbus TCP read parameters structure.   |

- **Return value:** <br>

tuple[int,list[int]]: A tuple containing two elements.

1. int: State codes executed by functions:

    <div class='tableWrap'>

    |Parameter|Type|Description|Handling Suggestions|
    |-|-|-|-|
    |0|`int`|Success.|-|
    |1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
    |-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
    |-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
    |-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
    |  -4  |    `int`    |  This interface is not supported by the Gen 3 Controller.   |-|

    </div>

    <style scoped>
        .tableWrap {
            display: table;
            width: 100%;
            table-layout: fixed;
        }
        .tableWrap tr th, .tableWrap td {
            width: auto;
        }
    </style>

2. list[int]: Read discrete input data:

    |   Parameter    |  Type   |   Description    |
    | :--- | :--- | :---|
    |  - |    `int`   | Returns the read discrete input data, with the array size being param.num. |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create robot arm connection, print connection id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Modbus TCP read parameters structure.
param = rm_modbus_tcp_read_params_t(10,master_name='test',num=10)
print(arm.rm_read_modbus_tcp_input_status(param))

arm.rm_delete_robot_arm()
```

## Modbus TCP Protocol Read Holding Registers `rm_read_modbus_tcp_holding_registers()`

- **Method prototype:**

```python
rm_read_modbus_tcp_holding_registers(self, param:rm_modbus_tcp_read_params_t) -> tuple[int, list[int]]:
```

*Jump to [rm_modbus_tcp_read_params_t](../../struct/modbustcpread/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description                                 |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_modbus_tcp_read_params_t` |Modbus TCP read parameters structure.   |

- **Return value:** <br>

tuple[int,list[int]]: A tuple containing two elements.

1. int: State codes executed by functions:

    <div class='tableWrap'>

    |Parameter|Type|Description|Handling Suggestions|
    |-|-|-|-|
    |0|`int`|Success.|-|
    |1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
    |-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
    |-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
    |-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
    |  -4  |    `int`    |  This interface is not supported by the Gen 3 Controller.   |-|

    </div>

    <style scoped>
        .tableWrap {
            display: table;
            width: 100%;
            table-layout: fixed;
        }
        .tableWrap tr th, .tableWrap td {
            width: auto;
        }
    </style>

2. list[int]: Read holding register data:

    |   Parameter    |  Type   |   Description    |
    | :--- | :--- | :---|
    |  - |    `int`   | Returns the read holding register data, with the array size being param.num. |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create robot arm connection, print connection id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Modbus TCP read parameters structure.
param = rm_modbus_tcp_read_params_t(10,master_name='test',num=10)
print(arm.rm_read_modbus_tcp_holding_registers(param))

arm.rm_delete_robot_arm()
```

## Modbus TCP Protocol Write Holding Registers `rm_write_modbus_tcp_registers()`

- **Method prototype:**

```python
rm_write_modbus_tcp_registers(self, param:rm_modbus_tcp_write_params_t) -> int:
```

*Jump to [rm_modbus_tcp_write_params_t](../../struct/modbustcpswrite/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description                                 |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_modbus_tcp_write_params_t` | Modbus TCP write parameters structure.   |

- **Return value:** <br>
State codes executed by functions:

<div class='tableWrap'>

|Parameter|Type|Description|Handling Suggestions|
|-|-|-|-|
|0|`int`|Success.|-|
|1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
|-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
|-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|  -4  |    `int`    |  This interface is not supported by the Gen 3 Controller.   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create robot arm connection, print connection id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Modbus TCP write parameters structure.
param_w = rm_modbus_tcp_write_params_t(10,master_name='test',num=10,data=[1,1,0,0,0,0,0,0,0,0])
print(arm.rm_write_modbus_tcp_registers(param_w))

arm.rm_delete_robot_arm()
```

## Modbus TCP Protocol Read Input Registers `rm_read_modbus_tcp_input_registers()`

- **Method prototype:**

```python
rm_read_modbus_tcp_input_registers(self, param:rm_modbus_tcp_read_params_t) -> tuple[int, list[int]]:
```

*Jump to [rm_modbus_tcp_read_params_t](../../struct/modbustcpread/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description                                 |
| :-------- | :---- | :----------------------------------- |
| `param`      | `rm_modbus_tcp_read_params_t` | Modbus TCP read parameters structure.   |

- **Return value:** <br>

tuple[int,list[int]]: A tuple containing two elements.

1. int: State codes executed by functions:

    <div class='tableWrap'>

    |Parameter|Type|Description|Handling Suggestions|
    |-|-|-|-|
    |0|`int`|Success.|-|
    |1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
    |-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
    |-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
    |-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../../../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
    |  -4  |    `int`    |  This interface is not supported by the Gen 3 Controller.   |-|

    </div>

    <style scoped>
        .tableWrap {
            display: table;
            width: 100%;
            table-layout: fixed;
        }
        .tableWrap tr th, .tableWrap td {
            width: auto;
        }
    </style>

2. list[int]: Read input register data:

    |   Parameter    |  Type   |   Description    |
    | :--- | :--- | :---|
    |  - |    `int`   | Returns the read input register data, with the array size being param.num.  |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create robot arm connection, print connection id
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

# Modbus TCP read parameters structure.
param = rm_modbus_tcp_read_params_t(10,master_name='test',num=10)
print(arm.rm_read_modbus_tcp_input_registers(param))

arm.rm_delete_robot_arm()
```
