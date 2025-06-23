# <p class="hidden">JSON protocol: </p>Frame Command set

## Tool frame

This instruction set is used to configure the tool frame of the robotic arm, including computing the tool frame, inputting the tool frame, changing the current tool frame, deleting the tool frame, updating the tool frame, and setting and getting the envelope parameters of the tool frame.

### <div id = '235512'>Automatically compute the tool frame (calibrate reference points) `set_auto_tool_frame`</div>

Set the end point of the current robotic arm as the reference point for computing the tool frame according to the requirements of the six-point method.

::: warning
The robotic arm can only store up to 10 tool frames, and if the quantity exceeds 10, the setting of the new frame will fail
:::

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :-------------------- | :------- | :----------------- |
| `set_auto_tool_frame` | `string` | Automatically compute the tool frame. |
| `point_num`           | `int`    | Reference points 1−6. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :---------------- | :----- | :------------------------------------ |
| `auto_tool_frame` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

::: info
After the robotic arm is powered on and initialized, there is no payload by default. The following commands should be run line by line.
:::

Execution: Automatically compute the tool frame and calibrate the current position as reference point 6.

```json
{"command":"set_auto_tool_frame","point_num":1}
```

```json
{"command":"set_auto_tool_frame","point_num":2}
```

```json
{"command":"set_auto_tool_frame","point_num":3}
```

```json
{"command":"set_auto_tool_frame","point_num":4}
```

```json
{"command":"set_auto_tool_frame","point_num":5}
```

```json
{"command":"set_auto_tool_frame","point_num":6}
```

**Output**

```json
{
    "command": "set_auto_tool_frame",
    "auto_tool_frame": true
}
```

### Automatically compute the tool frame (automatically compute and generate the tool) `generate_auto_tool_frame`

After calibrating 6 reference points successfully by [Automatically compute the tool frame (calibrate reference points)](#235512), run this command to configure the tool frame.

::: tip
Automatically compute the tool frame (six-point method): The robotic arm can only store up to 10 tool frames, and if the quantity exceeds 10, the setting of the new frame will fail.
:::

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :-------------------- | :------- | :----------------------------------- |
| `generate_auto_tool_frame` | `string` | Automatically compute the tool frame.             |
| `tool_name`           | `string` | Name of the tool frame, up to 10 bytes. |
| `payload`             | `int`    | Unit: g, maximum: 5,000 g            |
| `position`            | `int`    | Position of the center of mass, unit: mm, accuracy: 0.001 mm     |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :---------------- | :----- | :------------------------------------ |
| `auto_tool_frame` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**
  **Input**

::: info

After the robotic arm is powered on and initialized, there is no payload by default.

:::

Execution: Automatically compute the tool frame, featured name: tool_frame, end effector payload: 5,000 g, and position of the center of mass: x-1 mm, y-2 mm, z-3 mm.

```json
{"command":"generate_auto_tool_frame","tool_name":"tool_frame","payload":5000,"position":[1000,2000,3000]}
```

**Output**

```json
{
    "command": "generate_auto_tool_frame",
    "auto_tool_frame": true
}
```

### Manually input the tool frame `set_manual_tool_frame`

::: tip
Manually input the tool frame: The robotic arm can only store up to 10 tool frames, and if the quantity exceeds 10, the setting of the new frame will fail
:::

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :-------------------- | :---- | :----------------------------------- |
| `set_manual_tool_frame` | `int` | Manually compute the tool frame.             |
| `tool_name`           | `int` | Name of the tool frame, up to 10 bytes. |
| `tool_pose`            | `int`    | Tool coordinate system pose, position accuracy: 0.001mm, orientation accuracy: 0.001rad.       |
| `payload`             | `int`    | Unit: g, maximum: 5,000 g.            |
| `position`            | `int`    | Position of the center of mass, unit: mm, accuracy: 0.001 mm.     |

- **Output parameter**

| Parameter        | Type    | Description                             |
| :------------------ | :----- | :------------------------------------ |
| `manual_tool_frame` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

::: info
After the robotic arm is powered on and initialized, there is no payload by default.
:::

Execution: Manually input the tool frame, with parameters set as follows:

Name: tool_frame;<br>
tool position: x: 0.1 m, y: 0.2 m, z: 0.03 m;<br>
tool orientation: rx: 0.4 rad, ry: 0.5 rad, rz: 0.6 rad;<br>
end effector payload: 5,000 g;<br>
position of the center of mass: x-1 mm, y-2 mm, z-3 mm;<br>

```json
{"command":"set_manual_tool_frame","tool_name":"tool_frame","tool_pose":[100000,200000,30000,400,500,600],"payload":5000,"position":[1000,2000,3000]}
```

**Output**

```json
{
    "command": "set_manual_tool_frame",
    "manual_tool_frame": true
}
```

### Change the current tool frame `set_change_tool_frame`

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :---------------------- | :------- | :----------------------------------- |
| `set_change_tool_frame` | `string` | Change the current tool frame.             |
| `tool_name`           | `string` | Name of the tool frame, up to 10 bytes. |

- **Output parameter**

| Parameter        | Type    | Description                             |
| :------------------ | :----- | :------------------------------------ |
| `change_tool_frame` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: Change the current tool frame, named tool2_frame.

```json
{ "command": "set_change_tool_frame", "tool_name": "tool2_frame" }
```

**Output**

```json
{
    "command": "set_change_tool_frame",
    "change_tool_frame": true
}
```

### Delete the tool frame `set_delete_tool_frame`

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :---------------------- | :------- | :----------------------------------- |
| `set_delete_tool_frame` | `string` | Delete the tool frame.                    |
| `tool_name`           | `string` | Name of the tool frame, up to 10 bytes. |

- **Output parameter**

| Parameter        | Type    | Description                             |
| :------------------ | :----- | :------------------------------------ |
| `delete_tool_frame` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: Delete the tool frame, named tool2_frame.

```json
{ "command": "set_delete_tool_frame", "tool_name": "tool2_frame" }
```

**Output**

```json
{
    "command": "set_delete_tool_frame",
    "delete_tool_frame": true
}
```

### Update the tool frame `update_tool_frame`

Update the tool frame.

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :------------------ | :------- | :----------------------------------- |
| `update_tool_frame` | `string` | Update the tool frame.             |
| `tool_name`           | `string` | Name of the tool frame, up to 10 bytes. |
| `tool_pose`         | `int`    | Tool pose against the center of the end flange       |

- **Output parameter**

| Parameter        | Type    | Description                           |
| :------------- | :----- | :------------------------------------ |
| `update_state` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: Update the tool frame, with parameters set as follows:

Name: tool_frame;<br>
tool position: x: 0.1 m, y: 0.2 m, z: 0.03 m;<br>
position accuracy: 0.001 mm;<br>
tool orientation: rx: 0.4 rad, ry: 0.5 rad, rz: 0.6 rad;<br>
orientation accuracy: 0.001 rad;<br>
end effector payload: 5,000 g;<br>
position of the center of mass: x-1 mm, y-2 mm, z-3 mm;<br>
payload: unit: g, maximum: 5,000 g;<br>
position of the center of mass, unit: mm, accuracy: 0.001 mm. <br>

```json
{"command":"update_tool_frame","tool_name":"tool_frame","tool_pose":[100000,200000,30000,400,500,600],"payload":5000,"position":[1000,2000,3000]}
```

**Output**

```json
{
    "command": "update_tool_frame",
    "update_state": true
}
```

### Set envelope parameters of the tool frame `set_tool_envelope`

- **Input parameter**

|   Parameter                      |  Type    |   Description                |
| :------------------ | :------- | :--------------------------------------------------------------------------- |
| `set_tool_envelope` | `string` | Set envelope parameters of the tool frame.                                                    |
| `tool_name`         | `string` | Name of the tool frame that already exists in the controller. If it is NULL, set the current envelope parameters temporarily. |
| `list`              | `int`    | Envelope parameter list. Each tool supports 0−5 envelope balls.                    |
| `name`              | `string` | Name of the tool envelope ball, 1 to 10 bytes, supporting letters, numbers, and underscores.                          |
| `radius` | `int`    | Radius of the tool envelope ball, in 0.001 m.                                           |
| `x`                 | `int`    | X-coordinate of the tool envelope ball center based on the end flange frame, in 0.001 m.             |
| `y`                 | `int`    |  Y-coordinate of the tool envelope ball center based on the end flange frame, in 0.001 m.             |
| `z`                 | `int`    | Z-coordinate of the tool envelope ball center based on the end flange frame, in 0.001 m.             |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :---------- | :----- | :------------------------------------ |
| `set_state` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: For the tool envelope ball named left, radius: 0.02 m, X-coordinate: 0.01 m, Y-coordinate: 0.02 m, and Z-coordinate 0.03 m;<br>
For the tool envelope ball named right, radius: 0.03 m, X-coordinate: 0.03 m, Y-coordinate: 0.04 m, and Z-coordinate 0.05 m;<br>
For the tool envelope ball named center, radius: 0.04 m, X-coordinate: 0.05 m, Y-coordinate: 0.06 m, and Z-coordinate 0.07 m.<br>

```json
{"command":"set_tool_envelope","tool_name":"test","list":[{"name":"left","radius":20,"x":10,"y":20,"z":30},{"name":"right","radius":30,"x":30,"y":40,"z":50},{"name":"center","radius":40,"x":50,"y":60,"z":70}]}
```

**Output**

```json
{
    "command": "set_tool_envelope",
    "set_state": true
}
```

### Get envelope parameters of the tool frame `get_tool_envelope`

- **Input parameter**

|   Parameter         |  Type    |   Description                       |
| :------------------ | :------- | :------------------------------------------------------------------- |
| `get_tool_envelope` | `string` | Get envelope parameters of the tool frame.                                               |
| `tool_name`         | `string` | Give the name of the tool frame to be got. If it is NULL, get the current envelope parameters. |

- **Output parameter**

|   Parameter         |  Type    |   Description                       |
| :---------- | :------- | :------------------------------------------------------------------------------------------ |
|  `tool_name`  |    `string`    |  Name of the tool frame that already exists in the controller.                                                           |
| `list`              | `array`    | Envelope parameter list. Each tool supports 0−5 envelope balls.|
| `name`      | `string` | Name of the tool envelope ball, 1 to 10 bytes, supporting letters, numbers, and underscores.|
| `radius`    | `number` | Radius of the tool envelope ball, in 0.001 m. In the demo, the radius of the left is 0.02 m.                 |
| `x`         | `number` | X-coordinate of the tool envelope ball center based on the end flange frame, in 0.001 m. In the demo, the X-coordinate of the left is 0.01 m.   |
| `y`         | `number` | Y-coordinate of the tool envelope ball center based on the end flange frame, in 0.001 m. In the demo, the Y-coordinate of the left is 0.02 m.   |
| `z`         | `number` | Z-coordinate of the tool envelope ball center based on the end flange frame, in 0.001 m. In the demo, the Z-coordinate of the left is 0.03 m.   |

- **Code demo**

**Input**

Execution: Get the envelope parameters of the tool frame named tool1.

```json
{"command":"get_tool_envelope","tool_name":"tool1"}
```

**Output**

Result:

```json
{
    "command": "get_tool_envelope",
    "tool_name": "tool1",
    "list": [
        {
            "name": "left",
            "radius": 20,
            "x": 10,
            "y": 20,
            "z": 30
        },
        {
            "name": "right",
            "radius": 30,
            "x": 30,
            "y": 40,
            "z": 50
        },
        {
            "name": "center",
            "radius": 40,
            "x": 50,
            "y": 60,
            "z": 70
        }
    ]
}
```

Failure:

```json
{
    "command": "get_tool_envelope",
    "get_state": false
}
```

### Get the current tool frame `get_current_tool_frame`

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :----------------------- | :------- | :------------- |
| `get_current_tool_frame` | `string` | Get the current tool frame. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :------------------- | :------- | :----------------- |
| `current_tool_frame` | `string` | Return the information of the current tool frame. |

- **Code demo**

**Input**

Execution: Get the current tool frame.

```json
{ "command": "get_current_tool_frame" }
```

**Output**

Return the information of the current tool frame as follows:

Name: tool2_frame;<br>
tool position: x: 0.1 m, y: 0.2 m, z: 0.03 m;<br>
position accuracy: 0.001 mm;<br>
tool orientation: rx: 0.4 rad, ry: 0.5 rad, rz: 0.6 rad;<br>
orientation accuracy: 0.001 rad;<br>
payload: 5 kg, accuracy: 0.001 kg;<br>
position of the center of mass : 1 mm, accuracy: 0.001 mm.

```json
{
    "state": "current_tool_frame",
    "tool_name": "tool2_frame",
    "pose": [
        100000,
        200000,
        30000,
        400,
        500,
        600
    ],
    "payload": 5000,
    "position": [
        1000,
        2000,
        3000
    ]
}
```

### Get names of total tool frames `get_total_tool_frame`

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :--------------------- | :------- | :--------------------- |
| `get_total_tool_frame` | `string` | Get names of total tool frames. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :----------------- | :------- | :----------------- |
| `total_tool_frame` | `string` | Return names of total tool frames. |

- **Code demo**

**Input**

Execution: Get names of total tool frames. <br>

```json
{ "command": "get_total_tool_frame" }
```

**Output**

Return names of total tool frames, 10 in total. Tool name: base_tool1, base_tool2..., where NULL indicates a void frame.

```json
{
  "state":"total_tool_frame",
  "tool_names":["base_tool1","base_tool2"….,"NULL"]
}
```

### Get the given tool frame `get_tool_frame`

- **Input parameter**

| Parameter        | Type    | Description                         |
| :--------------- | :------- | :----------------- |
| `get_tool_frame` | `string` | Get the given tool frame. |
| `tool_name`      | `string` | Name of the tool frame |

- **Output parameter**

| Parameter        | Type    | Description                         |
| :----------------- | :------ | :----------------- |
| `given_tool_frame` | `string` | Return the information of the given tool frame. |

- **Code demo**

**Input**<br>

**Execution**: Get the information of the given tool frame.

```json
{ "command": "get_tool_frame", "tool_name": "tool2_frame" }
```

**Output**<br>

Return the information of the given tool frame as follows:

- **Tool name**: tool2_frame;<br>
- **tool position**: x: 0.1 m, y: 0.2 m, z: 0.03 m, accuracy: 0.001 mm;<br>
- **tool orientation**: rx: 0.4 rad, ry: 0.5 rad, rz: 0.6 rad, accuracy: 0.001 rad;<br>
- **payload**: 5 kg, accuracy: 0.001 kg;<br>
- **position of the center of mass**: 1 mm, accuracy: 0.001 mm.

Success:

```json
{
    "state": "given_tool_frame",
    "tool_name": "tool2_frame",
    "pose": [
        100000,
        200000,
        30000,
        400,
        500,
        600
    ],
    "payload": 5000,
    "position": [
        1000,
        2000,
        3000
    ]
}
```

Failure:

```json
{
    "command": "get_tool_frame",
    "get_state": false
}
```

## Work frame

This instruction set is used to configure the work frame of the robotic arm, including setting the work frame, inputting the work frame, changing the current work frame, deleting the work frame, and updating the work frame.

### Automatically set the work frame `set_auto_work_frame`

::: tip
The robotic arm can only store up to 10 work frames, and if the quantity exceeds 10, the setting of the new frame will fail
:::

- **Input parameter**

|   Parameter              |  Type    |   Description                  |
| :-------------------- | :------- | :----------------------------------------------------------------------------------------- |
| `set_auto_work_frame` | `string` | Automatically set the work frame.                                                                      |
| `frame_name`          | `string` | Name of the work frame, up to 10 bytes                                                         |
| `point_num`           | `int`    | Reference points, 1−3: an origin, a point on the X-axis, and a point on the Y-axis of the work frame, 4: work frame computed based on the first three reference points. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :---------------- | :----- | :------------------------------------ |
| `auto_work_frame` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**
  
**Input**

Execution: Set the work frame, named work_frame, and calibrate the current position as reference point 3 (a point on the Y-axis).

```json
{"command":"set_auto_work_frame","frame_name":"work_frame","point_num":3}
```

**Output**

```json
{
    "command": "set_auto_work_frame",
    "auto_work_frame": true
}
```

### Manually input the work frame `set_manual_work_frame`

::: tip
The robotic arm can only store up to 10 work frames, and if the quantity exceeds 10, the setting of the new frame will fail
:::

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :---------------------- | :------- | :--------------------------------- |
| `set_manual_work_frame` | `string` | Manually input the work frame.             |
|  `frame_name`          | `string` | Name of the work frame, up to 10 bytes.|
| `frame_pose`            | `int`    | Pose of the work frame, position accuracy: 0.001 mm, orientation accuracy: 0.001 rad.            |

- **Output parameter**

| Parameter        | Type    | Description                             |
| :------------------ | :----- | :------------------------------------ |
| `manual_work_frame` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: Manually input the work frame, with parameters set as follows:

Name: work_frame;<br>
frame position: x: 0.1 m, y: 0.2 m, z: 0.03 m;<br>
frame orientation: rx: 0.4 rad, ry: 0.5 rad, rz: 0.6 rad;<br>

```json
{"command":"set_manual_work_frame","frame_name":"work_frame","frame_pose":[100000,200000,30000,400,500,600]}
```

**Output**

```json
{
    "command": "set_manual_work_frame",
    "manual_work_frame": true
}
```

### Change the current work frame `set_change_work_frame`

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :---------------------- | :------- | :--------------------------------- |
| `set_change_work_frame` | `string` | Change the current work frame.             |
|  `frame_name`          | `string` | Name of the work frame, up to 10 bytes.|

- **Output parameter**

| Parameter        | Type    | Description                             |
| :------------------ | :----- | :------------------------------------ |
| `change_work_frame` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Change the current work frame, named work2_frame.

```json
{"command":"set_change_work_frame","frame_name":"work2_frame"}
```

**Output**

```json
{
    "command": "set_change_work_frame",
    "change_work_frame": true
}
```

### Delete the work frame `set_delete_work_frame`

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :---------------------- | :------- | :--------------------------------- |
| `set_delete_work_frame` | `string` | Delete the work frame.                    |
|  `frame_name`          | `string` | Name of the work frame, up to 10 bytes.|

- **Output parameter**

| Parameter        | Type    | Description                             |
| :------------------ | :----- | :------------------------------------ |
| `delete_work_frame` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Delete the work frame, named work2_frame.

```json
{"command":"set_delete_work_frame","frame_name":"work2_frame"}
```

**Output**

```json
{
    "command": "set_delete_work_frame",
    "delete_work_frame": true
}
```

### Update the work frame `update_work_frame`

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :------------------ | :------- | :--------------------------------- |
| `update_work_frame` | `string` | Update the work frame.                    |
|  `frame_name`          | `string` | Name of the work frame, up to 10 bytes.  |
| `frame_pose`            | `string`    | Pose of the work frame                           |

- **Output parameter**

| Parameter        | Type    | Description                           |
| :------------- | :----- | :------------------------------------ |
| `update_state` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Execution: Update the given work frame, with parameters set as follows:

Name: work_frame;<br>
frame position: x: 0.1 m, y: 0.2 m, z: 0.03 m;<br>
position accuracy: 0.001 mm;<br>
frame orientation: rx: 0.4 rad, ry: 0.5 rad, rz: 0.6 rad;<br>
orientation accuracy: 0.001 rad. <br>

```json
{"command":"update_work_frame","frame_name":"work_frame","frame_pose":[100000,200000,30000,400,500,600]}
```

**Output**

```json
{
    "command": "update_work_frame",
    "update_state": true
}
```

### Get the current work frame `get_current_work_frame`

- **Input parameter**

| Parameter        | Type    | Description                    |
| :----------------------- | :------- | :------------------- |
| `get_current_work_frame` | `string` | Get the current work frame. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :------------------- | :------- | :----------------------- |
| `current_work_frame` | `string` | Return the information of the current work frame. |

- **Code demo**

**Input**

Execution: Get the current work frame.

```json
{ "command": "get_current_work_frame" }
```

**Output**

Return the information of the current work frame as follows:

Frame name: work2_frame;<br>
frame position: x: 0.1 m, y: 0.2 m, z: 0.03 m, accuracy: 0.001 mm;<br>
frame orientation: rx: 0.4 rad, ry: 0.5 rad, rz: 0.6 rad, accuracy: 0.001 rad.

```json
{
    "state": "current_work_frame",
    "frame_name": "work2_frame",
    "pose": [
        100000,
        200000,
        30000,
        400,
        500,
        600
    ]
}
```

### Get names of total work frames `get_total_work_frame`

- **Input parameter**

| Parameter        | Type    | Description                             |
| :--------------------- | :------- | :--------------------------- |
| `get_total_work_frame` | `string` | Get names of total work frames. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :----------------- | :------- | :----------------------- |
| `total_work_frame` | `string` | Return names of total work frames. |

- **Code demo**

**Input**

Execution: Get names of total work frames.

```json
{ "command": "get_total_work_frame" }
```

**Output**

Return names of total work frames, including work1, work2...

```json
{
  "state":"total_work_frame",
  "frame_names":["work1","work2","NULL"]
}
```

### Get the given work frame `get_work_frame`

- **Input parameter**

| Parameter        | Type    | Description                                   |
| :--------------- | :------- | :------------------- |
| `get_work_frame` | `string` | Get the given work frame. |
|  `frame_name`          | `string` | Name of the work frame.  |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :----------------- | :------- | :------------------- |
| `given_work_frame` | `string` | Return the information of the given work frame. |

- **Code demo**

**Input**

Execution: Get the given work frame.

```json
{ "command": "get_work_frame", "frame_name": "work2_frame" }
```

**Output**

Return the information of the given work frame as follows:

Frame name: work2_frame;<br>
frame position: x: 0.1 m, y: 0.2 m, z: 0.03 m, accuracy: 0.001 mm;<br>
frame orientation: rx: 0.4 rad, ry: 0.5 rad, rz: 0.6 rad, accuracy: 0.001 rad.

Success:

```json
{
    "state": "given_work_frame",
    "frame_name": "work2_frame",
    "pose": [
        100000,
        200000,
        30000,
        400,
        500,
        600
    ]
}
```

Failure:

```json
{
    "command": "get_work_frame",
    "get_state": false
}
```
