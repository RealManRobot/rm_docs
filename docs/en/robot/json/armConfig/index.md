# <p class="hidden">JSON protocol: </p>Motion Parameter Instruction Set

## Setting of motion parameters

This instruction set is used to set and get the linear speed, linear acceleration, angular speed, angular acceleration, and collision stage of the end effector, set the parameter initialization of the robotic arm, set, reset, and get the DH parameters of the robotic arm, and reset the zero offset of joints.<br>
After setting the parameters of the end effector, the Gen 2 controller needs to call [parameter save (Gen 2 controller)](../../json/systemConfig/index.md#parameter-saving-gen-2-controller-save_device_info_all) to save the parameters manually to the controller Flash. Otherwise, the parameters will not be saved after the power off.

### Set the maximum linear speed of the end effector `set_arm_max_line_speed`

- **Input parameter**

| Parameter        | Type    | Description                         |
| :----------------------- | :------- | :------------------------- |
| `set_arm_max_line_speed` | `string` | Set the maximum linear speed of the end effector. |
| `arm_line_speed`         | `int`    | Target linear speed, in m/s.     |

::: warning
It is recommended to use the default maximum linear speed. If any changes are required, the ratio of the maximum linear acceleration to the maximum linear speed of the end effector must be ≥3, otherwise, abnormal motion may occur
:::

- **Output parameter**

| Parameter        | Type    | Description                         |
| :--------------- | :----- | :------------------------------------ |
| `arm_line_speed` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: Set the maximum linear speed of the end effector to 0.5 m/s, with a resolution of 0.001 m/s.

```json
{"command":"set_arm_max_line_speed","arm_line_speed":500}
```

**Output**

```json
{
    "command": "set_arm_max_line_speed",
    "arm_line_speed": true
}
```

### Set the maximum linear acceleration of the end effector `set_arm_max_line_acc`

- **Input parameter**

| Parameter        | Type    | Description                             |
| :--------------------- | :------- | :--------------------------- |
| `set_arm_max_line_acc` | `string` | Set the maximum linear acceleration of the end effector. |
| `arm_line_acc`         | `int`    | Target linear acceleration, in m/s2.     |

::: warning
It is recommended to use the default maximum linear acceleration. If any changes are required, the ratio of the maximum linear acceleration to the maximum linear speed of the end effector must be ≥3, otherwise, abnormal motion may occur
:::

- **Output parameter**

| Parameter        | Type    | Description                           |
| :------------- | :----- | :------------------------------------ |
| `arm_line_acc` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: Set the maximum linear acceleration of the end effector to 2 m/s2, with a resolution of 0.001 m/s2.

```json
{"command":"set_arm_max_line_acc","arm_line_acc":2000}
```

**Output**

```json
{
    "command": "set_arm_max_line_acc",
    "arm_line_acc": true
}
```

### Set the maximum angular speed of the end effector `set_arm_max_angular_speed`

- **Input parameter**

| Parameter        | Type    | Description                              |
| :-------------------------- | :------- | :------------------------- |
| `set_arm_max_angular_speed` | `string` | Set the maximum angular speed of the end effector. |
| `arm_angular_speed`         | `int`    | Target angular speed, in rad/s.   |

::: warning
It is recommended to use the default maximum angular speed. If any changes are required, the ratio of the maximum angular acceleration to the maximum angular speed of the end effector must be ≥3, otherwise, abnormal motion may occur
:::

- **Output parameter**

| Parameter        | Type    | Description                             |
| :------------------ | :----- | :------------------------------------ |
| `arm_angular_speed` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: Set the maximum angular speed of the end effector to 0.2 rad/s, with a resolution of 0.001 rad/s.

```json
{"command":"set_arm_max_angular_speed","arm_angular_speed":200}
```

**Output**

```json
{
    "command": "set_arm_max_angular_speed",
    "arm_angular_speed": true
}
```

### Set the maximum angular acceleration of the end effector `set_arm_max_angular_acc`

- **Input parameter**

| Parameter        | Type    | Description                               |
| :------------------------ | :------- | :--------------------------- |
| `set_arm_max_angular_acc` | `string` | Set the maximum angular acceleration of the end effector. |
| `arm_angular_acc`         | `int`    | Target angular acceleration, in rad/s2.  |

::: warning
It is recommended to use the default maximum angular acceleration. If any changes are required, the ratio of the maximum angular acceleration to the maximum angular speed of the end effector must be ≥3, otherwise, abnormal motion may occur
:::

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :---------------- | :----- | :------------------------------------ |
| `arm_angular_acc` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: Set the maximum angular acceleration of the end effector to 4 rad/s, with a resolution of 0.001 rad/s2.

```json
{"command":"set_arm_max_angular_acc","arm_angular_acc":4000}
```

**Output**

```json
{
    "command": "set_arm_max_angular_acc",
    "arm_angular_acc": true
}
```

### Set the parameter initialization of the robotic arm `set_arm_init`

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :------------------------ | :------- | :----------------- |
| `set_arm_init` | `string` | Set the parameter initialization of the robotic arm. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :--------- | :----- | :------------------------------------ |
| `arm_init` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: Set the parameter initialization of the robotic arm, and the end effector parameters will be restored to defaults.

Linear speed: 0.25 m/s; linear acceleration: 1.6 m/s2<br>
Angular speed: 0.6 rad/s; angular acceleration: 4 rad/s2

```json
{ "command": "set_arm_init" }
```

**Output**

```json
{
    "command": "set_arm_init",
    "arm_init": true
}
```

### Setting Collision Detection Switch in stationary state `set_collision_detection`

This interface can enable the collision detection function of the robotic arm in its stationary state.

- **Input parameter**

| Parameter        | Type    | Description                 |
| :-------------------- | :------- | :----------------------- |
| `set_collision_detection` | `string` | Set the collision detection switch. |
| `mode`     | `int`    | 0: Disable collision detection function in stationary state; 1: Enable collision detection function in stationary state.  |

- **Output parameter**

| Parameter        | Type    | Description                              |
| :---------------- | :----- | :------------------------------------ |
| `set_state` | `bool` | `true`: Setting successful; `false`: Setting failed. |

- **Code demo**

**Input**  

```json
{"command":"set_collision_detection","mode":0}
```

**Output**  

Setting successful

```json
{
    "command":"set_collision_detection",
    "set_state":true
}
```

Setting failed

```json
{
    "command":"set_collision_detection",
    "set_state":false
}
```

### Set the collision protection level `set_collision_stage`

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :-------------------- | :------- | :----------------------- |
| `set_collision_stage` | `string` | Set the collision stage of the robotic arm. |
| `collision_stage`     | `int`    | Stage: 0−8.       |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :---------------- | :----- | :------------------------------------ |
| `collision_state` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: Set the collision stage of the robotic arm to 1, the higher the stage, the more sensitive the collision detection.

```json
{"command":"set_collision_stage","collision_stage":1}
```

**Output**  

Setting successful

```json
{
    "command": "set_collision_stage",
    "collision_state": true
}
```

Setting failed

```json
{
    "command": "set_collision_stage",
    "collision_state": false
}
```

### Setting Singularity Avoidance `set_avoid_singularity_mode`

- **Input parameter**

| Parameter        | Type    | Description          |
| :-------------------- | :------- | :----------------------- |
| `set_avoid_singularity_mode` | `string` | Set singularity avoidance. |
| `mode`     | `int`    | 0 - Indicates that singularity avoidance is turned off; <br>1 - Indicates that singularity avoidance is performed using the speed-priority mode (only supports 6-DoF). In this mode, during trajectory operation, the robotic arm will change the posture of some joints near the singularity to avoid it, maintaining the movement speed. The trajectory accuracy will be somewhat reduced near the singularity.    |

- **Output parameter**

| Parameter        | Type    | Description                 |
| :---------------- | :----- | :------------------------------------ |
| `set_state` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**  

```json
{ "command": "set_avoid_singularity_mode","mode":1}
```

**Output**  
Setting successful

```json
{
    "command":"set_avoid_singularity_mode",
    "set_state":true
}
```

Setting failed

```json
{
    "command":"set_avoid_singularity_mode",
    "set_state":false
}
```

### Reset the DH parameters (Gen 3 controller) `set_DH_data`

::: tip

- This command must be used in conjunction with a measuring device to perform absolute precision compensation calculations. Configuration can only be done based on the calculation results; otherwise, it will lead to incorrect robotic arm parameters!
- Please refer to the DH parameter table of the corresponding series of robotic arms for settings. Parameters with a value of 0 cannot be modified. For the detailed parameter table, please refer to [Parameter Description](../../robotParameter/RM65OntologyParameters/index.md).
- Please note that for this product, the Z-axis of each joint is defined as the upward direction from the bottom of the corresponding joint.

:::

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :------------ | :---- | :----------------------- |
| `set_DH_data` | `int` | Reset the DH parameters of the robotic arm. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :---------- | :----- | :------------------------------------ |
| `set_state` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: Set four sets of data for each joint, representing alpha, a, d, and offset.<br>
In the demo, they are 1°, 0.002 m, 0.003 m, and 4° respectively.

6-DoF robotic arm:

```json
{"command":"set_DH_data","joint_1":[1000,2000,3000,4000],"joint_2":[1000,2000,3000,4000],"joint_3":[1000,2000,3000,4000],"joint_4":[1000,2000,3000,4000],"joint_5":[1000,2000,3000,4000],"joint_6":[1000,2000,3000,4000]}
```

7-DoF robotic arm:

```json
{"command":"set_DH_data","joint_1":[1000,2000,3000,4000],"joint_2":[1000,2000,3000,4000],"joint_3":[1000,2000,3000,4000],"joint_4":[1000,2000,3000,4000],"joint_5":[1000,2000,3000,4000],"joint_6":[1000,2000,3000,4000],"joint_7":[1000,2000,3000,4000]}
```

**Output**

```json
{
    "command": "set_DH_data",
    "set_state": true
}
```

### Reset the DH parameters of the robotic arm to defaults (Gen 3 controller) `set_DH_data_default`

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :-------------------- | :------- | :----------------------- |
| `set_DH_data` | `string` | Reset the DH parameters of the robotic arm to defaults. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :---------- | :----- | :------------------------------------ |
| `set_state` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: Reset the DH parameters of the robotic arm to defaults.

```json
{ "command": "set_DH_data_default" }
```

**Output**

```json
{
    "command": "set_DH_data_default",
    "set_state": true
}
```

### Reset the zero offset of joints `set_joint_zero_offset`

Reset the zero offset of the joint angle to correct the absolute positioning accuracy.

- **Input parameter**

| Parameter        | Type    | Description                         |
| :---------------------- | :---- | :------------------------- |
| `set_joint_zero_offset` | `int` | Reset the zero offset of the joint angle. |

::: warning
This command cannot be used directly by the user. It is used only with the measuring equipment for absolute accuracy compensation, otherwise the parameter error of the robotic arm will occur.
:::

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :---------- | :----- | :------------------------------------ |
| `set_state` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: Set the zero offset of joints, with an accuracy of 0.001° as follows: zero offset of joints 1−6: 1°, -2°, 3°, -4°, 5°, and -6°.

```json
{"command":"set_joint_zero_offset","offset":[1000,-2000,3000,-4000,5000,-6000]}
```

**Output**

```json
{
    "command": "set_joint_zero_offset",
    "set_state": true
}
```

## Getting of motion parameters

This instruction set is used to get the maximum linear speed, linear acceleration, angular speed, and angular acceleration of the end effector.

### Get the maximum linear speed of the end effector `get_arm_max_line_speed`

- **Input parameter**

| Parameter        | Type    | Description                         |
| :----------------------- | :------- | :------------------------- |
| `get_arm_max_line_speed` | `string` | Get the maximum linear speed of the end effector. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :------------------- | :---- | :------------------------- |
| `arm_max_line_speed` | `int` | Return the maximum linear speed of the end effector. |

- **Code demo**

**Input**

Execution: Get the maximum linear speed of the end effector.

```json
{ "command": "get_arm_max_line_speed" }
```

**Output**

Return 0.5 m/s, with a resolution of 0.001 m/s as the maximum linear speed of the end effector.

```json
{
    "state": "arm_max_line_speed",
    "arm_line_speed": 500
}
```

### Get the maximum linear acceleration of the end effector `get_arm_max_line_acc`

- **Input parameter**

| Parameter        | Type    | Description                             |
| :--------------------- | :------- | :--------------------------- |
| `get_arm_max_line_acc` | `string` | Get the maximum linear acceleration of the end effector. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :----------------- | :---- | :--------------------------- |
| `arm_max_line_acc` | `int` | Return the maximum linear acceleration of the end effector. |

- **Code demo**

**Input**

Execution: Get the maximum linear acceleration of the end effector.

```json
{ "command": "get_arm_max_line_acc" }
```

**Output**

Return 0.2 m/s2, with a resolution of 0.001 m/s2 as the maximum linear acceleration of the end effector.

```json
{
    "state": "arm_max_line_acc",
    "arm_line_acc": 200
}
```

### Get the maximum angular speed of the end effector `get_arm_max_angular_speed`

- **Input parameter**

| Parameter        | Type    | Description                              |
| :-------------------------- | :------- | :------------------------- |
| `get_arm_max_angular_speed` | `string` | Get the maximum angular speed of the end effector. |

- **Output parameter**

| Parameter        | Type    | Description                         |
| :---------------------- | :---- | :------------------------- |
| `arm_max_angular_speed` | `int` | Return the maximum angular speed of the end effector. |

- **Code demo**

**Input**

Execution: Get the maximum angular speed of the end effector.

```json
{ "command": "get_arm_max_angular_speed" }
```

**Output**

Return 1 rad/s, with a resolution of 0.001 rad/s as the maximum angular speed of the end effector.

```json
{
    "state": "arm_max_angular_speed",
    "arm_angular_speed": 1000
}
```

### Get the maximum angular acceleration of the end effector `get_arm_max_angular_acc`

- **Input parameter**

| Parameter        | Type    | Description                               |
| :------------------------ | :------- | :--------------------------- |
| `get_arm_max_angular_acc` | `string` | Get the maximum angular acceleration of the end effector. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :-------------------- | :---- | :--------------------------- |
| `arm_max_angular_acc` | `int` | Return the maximum angular acceleration of the end effector. |

- **Code demo**

**Input**

Execution: Get the maximum angular acceleration of the end effector.

```json
{ "command": "get_arm_max_angular_acc" }
```

**Output**

Return 10 rad/s2, with a resolution of 0.001 rad/s2 as the maximum angular acceleration of the end effector.

```json
{
    "state": "arm_max_angular_acc",
    "arm_angular_acc": 10000
}
```

### Get the collision protection level `get_collision_stage`

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :-------------------- | :------- | :----------------- |
| `get_collision_stage` | `string` | Get the collision stage of the robotic arm. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :---------------- | :---- | :---------------- |
| `collision_stage`     | `int`    | Stage: 0−8. |

- **Code demo**

**Input**

Execution: Get the collision stage of the robotic arm.

```json
{ "command": "get_collision_stage" }
```

**Output**

```json
{
    "state": "get_collision_stage",
    "collision_stage": 5
}
```

### Querying Collision Detection Switch in stationary state `get_collision_detection`

- **Input parameter**

| Parameter        | Type    | Description           |
| :-------------------- | :------- | :----------------- |
| `get_collision_detection` | `string` | Query the collision detection switch. |

- **Output parameter**

| Parameter        | Type    | Description           |
| :---------------- | :---- | :---------------- |
| `collision_stage` | `int` | 0: Disable collision detection in stationary state; 1: Enable collision detection in stationary state. |

- **Code demo**

**Input**  

```json
{ "command": "get_collision_detection" }
```

**Output**  

```json
{
    "command":"get_collision_detection",
    "mode":0
}
```

### Getting Singularity Avoidance Mode `get_avoid_singularity_mode`

- **Input parameter**

| Parameter        | Type    | Description            |
| :-------------------- | :------- | :----------------- |
| `get_avoid_singularity_mode` | `string` | Get singularity avoidance mode. |

- **Output parameter**

| Parameter        | Type    | Description        |
| :---------------- | :---- | :---------------- |
| `mode` | `int` |0 - Indicates that singularity avoidance is turned off; <br>1 - Indicates that singularity avoidance is performed using the speed-priority mode (only supports 6-DoF). In this mode, during trajectory operation, the robotic arm will change the posture of some joints near the singularity to avoid it, maintaining the movement speed. The trajectory accuracy will be somewhat reduced near the singularity. |

- **Code demo**

**Input**  

```json
{ "command": "get_avoid_singularity_mode"}
```

**Output**  

```json
{
    "command":"get_avoid_singularity_mode",
    "mode":1
}
```

### Get the DH parameters (Gen 3 controller) `get_DH_data`

- **Input parameter**

| Parameter        | Type    | Description                         |
| :------------ | :------- | :------------------- |
| `get_DH_data` | `string` | Get the DH parameters of the robotic arm. |

- **Output parameter**

| Parameter        | Type    | Description                         |
| :-------- | :------ | :-------------------------------------------------------------------------------------- |
| `joint_1` | `array` | Each joint has four sets of data, representing alpha, a, d, and offset. In the demo, they are 1°, 0.002 m, 0.003 m, and 4° respectively. |

- **Code demo**

**Input**

Execution: Get the DH parameters of the robotic arm.

```json
{ "command": "get_DH_data" }
```

**Output**

6-DoF robotic arm:

```json
{
  "command": "get_DH_data",
  "joint_1": [1000, 2000, 3000, 4000],
  "joint_2": [1000, 2000, 3000, 4000],
  "joint_3": [1000, 2000, 3000, 4000],
  "joint_4": [1000, 2000, 3000, 4000],
  "joint_5": [1000, 2000, 3000, 4000],
  "joint_6": [1000, 2000, 3000, 4000]
}
```

7-DoF robotic arm:

```json
{
  "command":"get_DH_data",
  "joint_1":[1000,2000,3000,4000],
  "joint_2":[1000,2000,3000,4000],
  "joint_3":[1000,2000,3000,4000],
  "joint_4":[1000,2000,3000,4000],
  "joint_5":[1000,2000,3000,4000],
  "joint_6":[1000,2000,3000,4000],
  "joint_7":[1000,2000,3000,4000]
}
```
