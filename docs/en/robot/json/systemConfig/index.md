# <p class="hidden">JSON protocol: </p> System Command Set

## Power control

### Control power-on and power-off `set_arm_power`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `set_arm_power` | `string` |Control the power-on and power-off of the robotic arm. |
| `arm_power` | `int` |Power state: 1: power-on; 0: power-off. |

- **Code demo**

**Input**

Description: Control the power-on of the robotic arm.

```json
{"command":"set_arm_power","arm_power":1}
```

**Output**

```json
{
    "command": "set_arm_power",
    "arm_power": true
}
```

### Get the power state `get_arm_power_state`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `get_arm_power_state` | `string` |Get the power state of robotic arm.             |

- **Code demo**

**Input**

Description: Get the power state of robotic arm.

```json
{"command":"get_arm_power_state"}
```

**Output**

Power state (1: power-on; 0: power-off).

```json
{
    "state": "arm_power_state",
    "power_state": 1
}
```

## Version information

### Get the software version (Gen 2 controller) `get_arm_software_version`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `get_arm_software_version` | `string` |Get the software version of robotic arm. |

- **Code demo**

**Input**

Description: Get the software version of robotic arm.

```json
{"command":"get_arm_software_version"}
```

**Output**

7013129: converted to hexadecimal data of uint32_t type, 0x6B0309. <br>
6B: represents the model RM65-B; 6D: represents the model RM65-ZF; 6F: represents the model RM65-SF. <br>
0309: represents the software version of V3.0.9. <br>
Product_version: robotic arm model, supported only by the Gen 3 robotic arms.

```json
{
    "Real-time_Kernal2": 515,
    "state": "arm_software_version",
    "Ctrl_version": 7014147,
    "Plan_version": 7013891,
    "ctrlM4_build_info": "202212282001",
    "Real-time_Kernal1": 515,
    "ctrlM7_build_info": "202212282001",
    "Plan_build_info": "202212282001",
    "Product_version": "RM65-BI"
}
```

### Get the software version (Gen 3 controller) `get_arm_software_info`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `get_arm_software_info` | `string` |Get the software information of robotic arm. |

- **Output parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| Product_version | `string` |Model of robotic arm. |
| algorithm_info | `string` |Algorithm library information. Here, `version` represents the version number. |
| ctrl_info | `string` |Software information at ctrl level. Here, `build_time` represents the compilation time, and `version` represents the version number. |
| dynamic_info | `string` |Version of dynamic model. Here, `model_version` represents the version number.|
| plan_info | `string` |Software information at plan level. Here, `build_time` represents the compilation time, and `version` represents the version number. |

- **Code demo**

**Input**

Get the software information of robotic arm.

```json
{"command":"get_arm_software_info"} 
```

**Output**

```json
{
    "Product_version": "RM65-BI",
    "algorithm_info": {
        "version": "1.2.3"
    },
    "command": "arm_software_info",
    "ctrl_info": {
        "build_time": "2023/12/13 20:58:10",
        "version": "V1.4.6"
    },
    "dynamic_info": {
        "model_version": "1"
    },
    "plan_info": {
        "build_time": "2023/12/13 20:58:24",
        "version": "V1.4.6"
    }
}
```

### Get the joint software version `get_joint_software_version`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `get_joint_software_version` | `string` |Get the joint software version. |

- **Code demo**

**Input**

```json
{"command":"get_joint_software_version"}
```

**Output**
531 is of uint16 type, which is 0x0213 if converted to hexadecimal data, representing that the software version of the current joint is 2.13.

```json
{
    "state": "joint_software_version",
    "version": [
        531,
        531,
        531,
        531,
        531,
        531
    ]
}
```

### Get the software version of end interface board `get_tool_software_version`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `get_joint_software_version` | `string` |Get the software version of end interface board. |

- **Code demo**

**Input**

```json
{"command":"get_tool_software_version"}
```

**Output**
531 is of uint16 type, which is 0x0213 if converted to hexadecimal data, representing that the software version of the current end interface board is 2.13.

```json
{
    "state": "tool_software_version",
    "version": 531
}
```

## Cumulative data

### Get the cumulative runtime of controller `get_system_runtime`

Get the cumulative runtime of the controller since it left the factory.

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `get_system_runtime` | `string` |Get the cumulative runtime of the controller. |

- **Code demo**

**Input**

Description: Get the system runtime.

```json
{"command":"get_system_runtime"}
```

**Output**

If the system is normal, it will return the runtime.

```json
{
    "command": "get_system_runtime",
    "day": 0,
    "hour": 0,
    "min": 0,
    "sec": 0
}
```

### Clear the cumulative runtime of controller `clear_system_runtime`

Clear the cumulative runtime of the controller since it left the factory.

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `get_system_runtime` | `string` |Clear the cumulative runtime of the controller. |

- **Code demo**

**Input**

Description: Clear the system runtime.

```json
{"command":"clear_system_runtime"}
```

**Output**
Successfully cleared (true: succeeded, false: failed).

```json
{
    "command": "clear_system_runtime",
    "clear_state": true
}
```

### Get the cumulative rotation angle of the joint `get_joint_odom`

Get the cumulative rotation angle of the joint since it left the factory.

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `get_joint_odom` | `string` |Get the cumulative rotation angle of each joint. |

- **Code demo**

**Input**

Description: Get the cumulative rotation angle of joint.

```json
{"command":"get_joint_odom"}  
```

**Output**

If the command is correct, return the cumulative rotation angle of each 6-DoF joint.

```json
{
    "command": "get_joint_odom",
    "odom": [
        1000,
        2000,
        3000,
        4000,
        5000,
        6000
    ]
}
```

If the command is correct, return the cumulative rotation angle of each 7-DoF joint.

```json
{
    "command": "get_joint_odom",
    "odom": [
        1000,
        2000,
        3000,
        4000,
        5000,
        6000,
        7000
    ]
}
```

### Clear the cumulative rotation angle of joint `clear_joint_odom`

Clear the cumulative rotation angle of each joint since it left the factory.

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `clear_joint_odom` | `string` |Clear the cumulative rotation angle of joint. |

- **Code demo**

**Input**

Description: Clear the cumulative rotation angle of joint.

```json
{"command":"clear_joint_odom"}
```

**Output**
Successfully cleared (true: succeeded, false: failed).

```json
{
    "command": "clear_joint_odom",
    "clear_state": true
}
```

## Parameter saving

### Parameter saving (Gen 2 controller) `save_device_info_all`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :------------------------- |:---|
| `save_device_info_all` | `string` |Save all parameters. |

- **Code demo**

**Input**

Description: Save all parameters.

```json
{"command":"save_device_info_all"}
```

**Output**

Setting succeeded (true: setting succeeded, false: setting failed).

```json
{
    "command": "save_device_info_all",
    "model": true
}
```
