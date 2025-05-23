# <p class="hidden">JSON protocol: </p>Motion Parameter Instruction Set

## Setting of motion parameters

This instruction set is used to set and get the linear speed, linear acceleration, angular speed, angular acceleration, and collision stage of the end effector, set the parameter initialization of the robotic arm, set, reset, and get the DH parameters of the robotic arm, and reset the zero offset of joints.

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

### Set the collision stage `set_collision_stage`

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :-------------------- | :------- | :----------------------- |
| `set_collision_stage` | `string` | Set the collision stage of the robotic arm. |
| `collision_stage`     | `int`    | Stage: 0−8.       |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :---------------- | :----- | :------------------------------------ |
| `collision_state` | `bool` | `true`: setting succeeded, `false`: setting failed. |

**Input**

Execution: Set the collision stage of the robotic arm to 1, the higher the stage, the more sensitive the collision detection.

```json
{"command":"set_collision_stage","collision_stage":1}
```

**Output**

```json
{
    "command": "set_collision_state",
    "collision_state": true
}
```

### Get the collision stage `get_collision_stage`

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

### Reset the DH parameters `set_DH_data`

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

### Get the DH parameters `get_DH_data`

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

### Reset the DH parameters of the robotic arm to defaults `set_DH_data_default`

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
