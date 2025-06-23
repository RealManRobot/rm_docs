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
    "command":"get_arm_power_state",
    "power_state": 1
}
```

## Emergency Stop

### Set Robotic Arm Emergency Stop State `set_arm_emergency_stop`

- **Input Parameters**

| Parameter | Type |Description|
| :--- | :------------------------- |:---|
| `set_arm_emergency_stop` | `string` |Set the robotic arm model.               |
| `state` | `bool` |`true`: Enter emergency stop state, `false`: Disable emergency stop state.             |

- **Output Parameters**

| Parameter | Type |Description|
| :--- | :------------------------- |:---|
| `emergency_stop` | `bool` |`true`: Success, `false`: Failure     |

- **Code demo**

**Input**  

Set the robotic arm to enter emergency stop state.

```json
{ "command": "set_arm_emergency_stop","state":true}
```

**Output**  

Success:

```json
{
    "command":"set_arm_emergency_stop",
    "emergency_stop":true
}
```

Failure:

```json
{
    "command":"set_arm_emergency_stop",
    "emergency_stop":false
}
```

## Version information

### Get the software version `get_arm_software_info`

- **Input parameter**

| Parameter | Type |Description|
| :--- | :------------------------- |:---|
| `get_arm_software_info` | `string` |Get the software information of robotic arm.|

- **Output Parameter**

| Parameter | Type |Description|
| :--- | :------------------------- |:---|
| Product_version | `string` |Robotic arm model.|
| algorithm_info | `string` |Algorithm library information. Here, `version` represents the version number.|
| communication_info | `string` |Communication layer software information. Here, `build_time` represents the compilation time, and `version` represents the version number.|
| ctrl_info | `string` |Control layer software information. Here, `build_time` represents the compilation time, and `version` represents the version number.|
| program_info | `string` |Program layer software information. Here, `build_time` represents the compilation time, and `version` represents the version number.|
| robot_controller_version | `string` |Robotic arm controller version information.|

- **Code demo**

**Input**  

Get the software information of robotic arm.

```json
{"command":"get_arm_software_info"} 
```

**Output**  

```json
{
    "Product_version":"ECO65-B",
    "algorithm_info":{
        "version":"1.4.11"
    },
    "command":"arm_software_info",
    "communication_info":{
        "build_time":"2024/11/5 21:00:00",
        "version":"1.0.1"
    },
    "ctrl_info":{
        "build_time":"2024/11/5 21:00:00",
        "version":"V1.0.3"
    },
    "program_info":{
        "build_time":"2025-04-09 10:46:48",
        "version":"V1.0.3"
    },
    "robot_controller_version":"4.0"
}
```

### Get the joint software version `get_joint_software_version`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `get_joint_software_version` | `string` |Get the joint software version. |

- **Code demo**

**Input**:

```json
{"command":"get_joint_software_version"}
```

**Output**:

The version numbers of the current joints are: Vd5.1.0, Vd5.1.0, Vd5.1.0, Vd5.1.0, Vd5.1.0, Ve5.1.0.

```json
{
    "command":"get_joint_software_version",
    "version": [
        "Vd5.1.0",
        "Vd5.1.0",
        "Vd5.1.0",
        "Vd5.1.0",
        "Vd5.1.0",
        "Ve5.1.0"
    ]
}
```

### Get the software version of end interface board `get_tool_software_version`

- **Input parameter**

| Parameter             | Type     | Description             |
| :--- | :--- |:---|
| `get_joint_software_version` | `string` |Get the software version of end interface board. |

- **Code demo**

**Input**:

```json
{"command":"get_tool_software_version"}
```

**Output**:

The version number of the current end - effector interface board is V1.9.3.

```json
{
    "command":"get_tool_software_version",
    "version": "V1.9.3"
}
```
