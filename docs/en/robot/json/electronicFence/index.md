# <p class="hidden">JSON protocol: </p>Electronic Fence and Virtual Wall Command Set

## Data management

The Gen 3 robotic arm has electronic fences and virtual walls, as well as interfaces for configuring the geometric model parameters of the electronic fence or virtual wall stored in the controller. Users can utilize these interfaces to add, get, update, or delete electronic fences or virtual walls. During use, they can flexibly apply the parameters stored in the controller. It is important to note that the controller currently saves up to 10 parameters.

### Add the geometric model parameters `add_electronic_fence_config`

- **Input parameter**

|   Parameter       |  Type    |   Description                             |
| :---------- | :---- | :----------------------------------------------------------------------------------- |
| `form`        | `int` | Form, 1: cube, 2: plane, 3: sphere.                          |
|   `form_name`  |   `int`  |   Name of the electronic fence, up to 10 bytes, supporting letters, numbers, and underscores.                          |
| `x_min_limit` | `int` | Minimum limit of the cube based on the X-axis of the world frame, in 0.001 m. In the demo, it is 0.5 m.                    |
| `x_max_limit` | `int` | Maximum limit of the cube based on the X-axis of the world frame, in 0.001 m. In the demo, it is 1 m.                    |
| `y_min_limit` | `int` | Minimum limit of the cube based on the Y-axis of the world frame, in 0.001 m. In the demo, it is 0.5 m.                    |
| `y_max_limit` | `int` | Maximum limit of the cube based on the Y-axis of the world frame, in 0.001 m. In the demo, it is 1 m.                    |
| `z_min_limit` | `int` | Minimum limit of the cube based on the Z-axis of the world frame, in 0.001 m. In the demo, it is 0.5 m.                    |
| `z_max_limit` | `int` | Maximum limit of the cube based on the Z-axis of the world frame, in 0.001 m. In the demo, it is 1 m.                    |
| `x1, y1, z1`  | `int` | Coordinates of the first point in the plane three-point method, in 0.001 m. In the demo, x: 0.5 m, y: 1 m, z: 0.5 m.  |
| `x2, y2, z2`  | `int` |  Coordinates of the second point in the plane three-point method, in 0.001 m. In the demo, x: 0.9 m, y: 0.2 m, z: 0.8 m. |
| `x3, y3, z3`  | `int` | Coordinates of the third point in the plane three-point method, in 0.001 m. In the demo, x: 0.7 m, y: 1.2 m, z: 0.3 m. |
| `radius`      | `int` | Radius, in 0.001 m. In the demo, it is 0.5 m.                                              |
| `x`           | `int` | X-coordinate of the sphere center in the world frame, in 0.001 m. In the demo, it is 0.1 m.                    |
| `y`           | `int` | Y-coordinate of the sphere center in the world frame, in 0.001 m. In the demo, it is 0.5 m.                    |
| `z`           | `int` | Z-coordinate of the sphere center in the world frame, in 0.001 m. In the demo, it is 0.9 m.                    |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :----------- | :----- | :------------------------------------ |
| `add_config` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Add the geometric model: cube.

```json
{"command":"add_electronic_fence_config","form":1,"form_name":"my_form","x_min_limit":500,"x_max_limit":1000,"y_min_limit":500,"y_max_limit":1000,"z_min_limit":500,"z_max_limit":1000}
```

Add the geometric model: plane.

```json
{"command":"add_electronic_fence_config","form":2,"form_name":"my_form","x1":500,"y1":1000,"z1":500,"x2":900,"y2":200,"z2":800,"x3":700,"y3":1200,"z3":300}
```

Add the geometric model: sphere.

```json
{"command":"add_electronic_fence_config","form":3,"form_name":"my_form","radius":500,"x":1000,"y":500,"z":900}
```

**Output**

```json
{
    "command": "add_electronic_fence_config",
    "add_config": true
}
```

### Update the geometric model parameters `update_electronic_fence_config`

- **Input parameter**

|   Parameter       |  Type    |   Description                             |
| :---------- | :---- | :----------------------------------------------------------------------------------- |
| `form`        | `int` | Form, 1: cube, 2: plane, 3: sphere.                          |
|   `form_name`  |   `int`  |   Name of the electronic fence, up to 10 bytes, supporting letters, numbers, and underscores.                          |
| `x_min_limit` | `int` | Minimum limit of the cube based on the X-axis of the world frame, in 0.001 m. In the demo, it is 0.5 m.                    |
| `x_max_limit` | `int` | Maximum limit of the cube based on the X-axis of the world frame, in 0.001 m. In the demo, it is 1 m.                    |
| `y_min_limit` | `int` | Minimum limit of the cube based on the Y-axis of the world frame, in 0.001 m. In the demo, it is 0.5 m.                    |
| `y_max_limit` | `int` | Maximum limit of the cube based on the Y-axis of the world frame, in 0.001 m. In the demo, it is 1 m.                    |
| `z_min_limit` | `int` | Minimum limit of the cube based on the Z-axis of the world frame, in 0.001 m. In the demo, it is 0.5 m.                    |
| `z_max_limit` | `int` | Maximum limit of the cube based on the Z-axis of the world frame, in 0.001 m. In the demo, it is 1 m.                    |
| `x1, y1, z1`  | `int` | Coordinates of the first point in the plane three-point method, in 0.001 m. In the demo, x: 0.5 m, y: 1 m, z: 0.5 m.  |
| `x2, y2, z2`  | `int` |  Coordinates of the second point in the plane three-point method, in 0.001 m. In the demo, x: 0.9 m, y: 0.2 m, z: 0.8 m. |
| `x3, y3, z3`  | `int` | Coordinates of the third point in the plane three-point method, in 0.001 m. In the demo, x: 0.7 m, y: 1.2 m, z: 0.3 m. |
| `radius`      | `int` | Radius, in 0.001 m. In the demo, it is 0.5 m.                                              |
| `x`           | `int` | X-coordinate of the sphere center in the world frame, in 0.001 m. In the demo, it is 0.1 m.                    |
| `y`           | `int` | Y-coordinate of the sphere center in the world frame, in 0.001 m. In the demo, it is 0.5 m.                    |
| `z`           | `int` | Z-coordinate of the sphere center in the world frame, in 0.001 m. In the demo, it is 0.9 m.                    |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :-------------- | :----- | :------------------------------------ |
| `update_config` | `bool` | `true`: setting succeeded, `false`: setting failed. |

- **Code demo**

**Input**

Add the geometric model: cube.

```json
{"command":"update_electronic_fence_config","form":1,"form_name":"my_form","x_min_limit":500,"x_max_limit":1000,"y_min_limit":500,"y_max_limit":1000,"z_min_limit":500,"z_max_limit":1000}
```

Add the geometric model: plane.

```json
{"command":"update_electronic_fence_config","form":2,"form_name":"my_form","x1":500,"y1":1000,"z1":500,"x2":900,"y2":200,"z2":800,"x3":700,"y3":1200,"z3":300}
```

Add the geometric model: sphere.

```json
{"command":"update_electronic_fence_config","form":3,"form_name":"my_form","radius":500,"x":1000,"y":500,"z":900}
```

**Output**

```json
{
    "command": "update_electronic_fence_config",
    "update_config": true
}
```

### Delete the given geometric model `delete_electronic_fence_config`

Delete the given geometric model

- **Input parameter**

| Parameter  | Type | Description  |
| :-- | :-- | :-- |
|   `form_name`  |  `string`   |   Name of the electronic fence, up to 10 bytes, supporting letters, numbers, and underscores. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :------------------------------- | :----- | :------------------------------------ |
| `delete_electronic_fence_config` | `bool` | `true`: deletion succeeded, `false`: deletion failed. |

- **Code demo**

**Input**

Delete the given geometric model.

```json
{"command":"delete_electronic_fence_config","form_name":"my_form"}
```

**Output**

```json
{
    "command": "delete_electronic_fence_config",
    "delete_config": true
}
```

### Get all geometric models `get_electronic_fence_config`

- **Input parameter**

| Parameter  | Type | Description  |
| :-- | :-- | :-- |
|`get_electronic_fence_list_names`|`string` | Get names of all geometric models. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :---------- | :----- | :--------------------------------------------- |
| `name_list` | `bool` | List of geometric model names, with a length corresponding to the actual number of existing geometric models. |

- **Code demo**

**Input**

Get all geometric models.

```json
{ "command": "get_electronic_fence_list_names" }
```

**Output**

```json
{
    "command": "get_electronic_fence_list_names",
    "name_list": [
        "a_form",
        "b_form"
    ]
}
```

### Get the given geometric model `given_electronic_fence_config`

- **Input parameter**

| Parameter  | Type | Description  |
| :-- | :-- | :-- |
|`given_electronic_fence_config`|`string` | Get the given geometric model. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :---------- | :------- | :----------------------------------------------------------------------------------- |
|   `form_name`  |   `string`  |   Name of the electronic fence, up to 10 bytes, supporting letters, numbers, and underscores.                          |
| `form`        | `int` | Form, 1: cube, 2: plane, 3: sphere.                          |
| `x_min_limit` | `int`   | Minimum limit of the cube based on the X-axis of the world frame, in 0.001 m. In the demo, it is 0.5 m.                    |
| `x_max_limit` | `int`   | Maximum limit of the cube based on the X-axis of the world frame, in 0.001 m. In the demo, it is 1 m.                    |
| `y_min_limit` | `int`    | Minimum limit of the cube based on the Y-axis of the world frame, in 0.001 m. In the demo, it is 0.5 m.                    |
| `y_max_limit` | `int`     | Maximum limit of the cube based on the Y-axis of the world frame, in 0.001 m. In the demo, it is 1 m.                    |
| `z_min_limit` | `int`    | Minimum limit of the cube based on the Z-axis of the world frame, in 0.001 m. In the demo, it is 0.5 m.                    |
| `z_max_limit` | `int`    | Maximum limit of the cube based on the Z-axis of the world frame, in 0.001 m. In the demo, it is 1 m.                    |
| `x1, y1, z1`  | `int`    | Coordinates of the first point in the plane three-point method, in 0.001 m. In the demo, x: 0.5 m, y: 1 m, z: 0.5 m.  |
| `x2, y2, z2`  | `int`    |  Coordinates of the second point in the plane three-point method, in 0.001 m. In the demo, x: 0.9 m, y: 0.2 m, z: 0.8 m. |
| `x3, y3, z3`  | `int`    | Coordinates of the third point in the plane three-point method, in 0.001 m. In the demo, x: 0.7 m, y: 1.2 m, z: 0.3 m. |
| `radius`      | `int`      | Radius, in 0.001 m. In the demo, it is 0.5 m.                                              |
| `x`           | `int`      | X-coordinate of the sphere center in the world frame, in 0.001 m. In the demo, it is 0.1 m.                    |
| `y`           | `int`      | Y-coordinate of the sphere center in the world frame, in 0.001 m. In the demo, it is 0.5 m.                    |
| `z`           | `int`      | Z-coordinate of the sphere center in the world frame, in 0.001 m. In the demo, it is 0.9 m. |

- **Code demo**

**Input**

Get the given geometric model.

```json
{"command":"given_electronic_fence_config","form_name":"my_form"}
```

**Output**

Return demo: cube

```json
{
    "command": "given_electronic_fence_config",
    "form": 1,
    "form_name": "my_form",
    "x_min_limit": 500,
    "x_max_limit": 1000,
    "y_min_limit": 500,
    "y_max_limit": 1000,
    "z_min_limit": 500,
    "z_max_limit": 1000
}
```

Return demo: plane

```json
{
    "command": "given_electronic_fence_config",
    "form": 2,
    "form_name": "my_form",
    "x1": 500,
    "y1": 1000,
    "z1": 500,
    "x2": 900,
    "y2": 200,
    "z2": 800,
    "x3": 700,
    "y3": 1200,
    "z3": 300
}
```

Return demo: sphere

```json
{
    "command": "given_electronic_fence_config",
    "form": 3,
    "form_name": "my_form",
    "radius": 500,
    "x": 1000,
    "y": 500,
    "z": 900
}
```

Return demo: failure

```json
{
    "command": "given_electronic_fence_config",
    "given_state": false
}
```

### Get the information of all geometric models `get_electronic_fence_list_infos`

- **Input parameter**

| Parameter  | Type | Description  |
| :-- | :-- | :-- |
|`get_electronic_fence_list_infos`|`string` | Get the information of all geometric models. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :-------- | :----- | :------------------------------------------- |
| `info_list` | `object` | List of geometric model information, with a length corresponding to the actual number of existing geometric models. |

- **Code demo**

**Input**

Get the information of all geometric models.

```json
{ "command": "get_electronic_fence_list_infos" }
```

**Output**

```json
{
    "command": "get_electronic_fence_list_infos",
    "info_list": [
        {
            "form": 1,
            "form_name": "my_form",
            "x_min_limit": 500,
            "x_max_limit": 1000,
            "y_min_limit": 500,
            "y_max_limit": 1000,
            "z_min_limit": 500,
            "z_max_limit": 1000
        },
        {
            "form": 2,
            "form_name": "my_form",
            "x1": 500,
            "y1": 1000,
            "z1": 500,
            "x2": 900,
            "y2": 200,
            "z2": 800,
            "x3": 700,
            "y3": 1200,
            "z3": 300
        }
    ]
}
```

## Electronic fence

The electronic fence function ensures that the robotic arm's trajectory planning, teaching, and other movements are carried out within the set boundaries of the electronic fence through precise parameter configuration. If the robotic arm's trajectory is at risk of exceeding the boundaries of the electronic fence, the system will immediately return the corresponding error code and automatically stop the motion, thereby effectively ensuring the safe operation of the robotic arm.

::: warning
The electronic fence currently supports only two shapes, i.e., cubes and planes.
:::

### Set the enabling state of the electronic fence `set_electronic_fence_enable`

- **Input parameter**

| Parameter  | Type | Description  |
| :-- | :-- | :-- |
|`set_electronic_fence_enable`|`string` |Set the enabling state of the electronic fence. |
|`set_enable` |`bool`|true: enable, false: disable. |
|`in_out_side`|`int`|0: robot inside the electronic fence, 1: robot outside the electronic fence. |
|`effective_region`|`int`|0: effective for the entire robotic arm. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :-------- | :----- | :--------------------- |
| `set_state` | `bool` | `true`: success, `false`: failure. |

- **Code demo**

**Input**

Set the enabling state of the electronic fence.

```json
{"command":"set_electronic_fence_enable","set_enable":false,"in_out_side":0,"effective_region":0}
```

**Output**

```json
{"command":"set_electronic_fence_enable","set_state":true}
```

### Get the enabling state of the electronic fence `get_electronic_fence_enable`

- **Input parameter**

| Parameter  | Type | Description  |
| :-- | :-- | :-- |
|`get_electronic_fence_enable`|`string` |Get the enabling state of the electronic fence. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :--------------- | :----- | :----------------------------------------------- |
|`enable_state`    | `bool` |`true`: enable, `false`: disable.             |
| `in_out_side`    | `int`    | 0: robot inside the electronic fence, 1: robot outside the electronic fence. |
| `effective_region` | `int` | 0: effective for the entire robotic arm.                          |

- **Code demo**

**Input**

Get the enabling state of the electronic fence.

```json
{ "command": "get_electronic_fence_enable" }
```

**Output**

```json
{
    "command": "get_electronic_fence_enable",
    "enable_state": false,
    "in_out_side": 0,
    "effective_region": 0
}
```

### Set the parameters of the current electronic fence `set_electronic_fence_config`

- **Input parameter**

| Parameter  | Type | Description  |
| :-- | :-- | :-- |
|`set_electronic_fence_config`|`string` |Set the parameters of the current electronic fence. |
| `form` | `int` | Form, 1: cube, 2: plane, 3: sphere.|
|   `form_name`  | `int` |   Name of the electronic fence, up to 10 bytes, supporting letters, numbers, and underscores. |
| `x_min_limit` | `int` | Minimum limit of the cube based on the X-axis of the world frame, in 0.001 m. In the demo, it is 0.5 m. |
| `x_max_limit` | `int` | Maximum limit of the cube based on the X-axis of the world frame, in 0.001 m. In the demo, it is 1 m. |
| `y_min_limit` | `int` | Minimum limit of the cube based on the Y-axis of the world frame, in 0.001 m. In the demo, it is 0.5 m. |
| `y_max_limit` | `int` | Maximum limit of the cube based on the Y-axis of the world frame, in 0.001 m. In the demo, it is 1 m. |
| `z_min_limit` | `int` | Minimum limit of the cube based on the Z-axis of the world frame, in 0.001 m. In the demo, it is 0.5 m. |
| `z_max_limit` | `int` | Maximum limit of the cube based on the Z-axis of the world frame, in 0.001 m. In the demo, it is 1 m. |
| `x1, y1, z1`  | `int` | Coordinates of the first point in the plane three-point method, in 0.001 m. In the demo, x: 0.5 m, y: 1 m, z: 0.5 m. |
| `x2, y2, z2`  | `int` |  Coordinates of the second point in the plane three-point method, in 0.001 m. In the demo, x: 0.9 m, y: 0.2 m, z: 0.8 m. |
| `x3, y3, z3`  | `int` | Coordinates of the third point in the plane three-point method, in 0.001 m. In the demo, x: 0.7 m, y: 1.2 m, z: 0.3 m. |

- **Output parameter**

| Parameter        | Type    | Description                                   |
| :--------- | :----- | :---------------------- |
| `set_config` | `bool` | `true`: success, `false`: failure. |

- **Code demo**

**Input**

Set the parameters of the current electronic fence: cube.

```json
{"command":"set_electronic_fence_config","form":1,"x_min_limit":500,"x_max_limit":1000,"y_min_limit":500,"y_max_limit":1000,"z_ min_limit":500,"z_max_limit":1000}
```

Set the parameters of the current electronic fence: plane.

```json
{"command":"set_electronic_fence_config","form":2,"form_name":"my_form","x1":500,"y1":1000,"z1":500,"x2":900,"y2":200,"z2":800,"x3":700,"y3":1200,"z3":300}
```

**Output**

```json
{
    "command": "set_electronic_fence_config",
    "set_config": false
}
```

### Get the parameters of the current electronic fence `get_electronic_fence_config`

- **Input parameter**

| Parameter  | Type | Description  |
| :-- | :-- | :-- |
| `get_electronic_fence_config` | `string` |Get the parameters of the current electronic fence. |

- **Output parameter**

| Parameter  | Type | Description  |
| :-- | :-- | :-- |
| `form` | `int` | Form, 1: cube, 2: plane, 3: sphere. |
|   `form_name`  | `int` |   Name of the electronic fence, up to 10 bytes, supporting letters, numbers, and underscores. |
| `x_min_limit` | `int` | Minimum limit of the cube based on the X-axis of the world frame, in 0.001 m. In the demo, it is 0.5 m. |
| `x_max_limit` | `int` | Maximum limit of the cube based on the X-axis of the world frame, in 0.001 m. In the demo, it is 1 m. |
| `y_min_limit` | `int` | Minimum limit of the cube based on the Y-axis of the world frame, in 0.001 m. In the demo, it is 0.5 m. |
| `y_max_limit` | `int` | Maximum limit of the cube based on the Y-axis of the world frame, in 0.001 m. In the demo, it is 1 m. |
| `z_min_limit` | `int` | Minimum limit of the cube based on the Z-axis of the world frame, in 0.001 m. In the demo, it is 0.5 m. |
| `z_max_limit` | `int` | Maximum limit of the cube based on the Z-axis of the world frame, in 0.001 m. In the demo, it is 1 m. |
| `x1, y1, z1`  | `int` | Coordinates of the first point in the plane three-point method, in 0.001 m. In the demo, x: 0.5 m, y: 1 m, z: 0.5 m. |
| `x2, y2, z2`  | `int` |  Coordinates of the second point in the plane three-point method, in 0.001 m. In the demo, x: 0.9 m, y: 0.2 m, z: 0.8 m. |
| `x3, y3, z3`  | `int` | Coordinates of the third point in the plane three-point method, in 0.001 m. In the demo, x: 0.7 m, y: 1.2 m, z: 0.3 m. |

- **Code demo**

**Input**

Get the parameters of the current electronic fence.

```json
{ "command": "get_electronic_fence_config" }
```

**Output**

Return demo: cube

```json
{
    "command": "get_electronic_fence_config",
    "form": 1,
    "x_min_limit": 500,
    "x_max_limit": 1000,
    "y_min_limit": 500,
    "y_max_limit": 1000,
    "z_ min_limit": 500,
    "z_max_limit": 1000
}
```

Return demo: plane

```json
{
    "command": "get_electronic_fence_config",
    "form": 2,
    "form_name": "my_form",
    "x1": 500,
    "y1": 1000,
    "z1": 500,
    "x2": 900,
    "y2": 200,
    "z2": 800,
    "x3": 700,
    "y3": 1200,
    "z3": 300
}
```

## Virtual wall

The virtual wall function supports the precise limitation of the dragging range in both current loop drag teaching and force control drag teaching modes. In these two teaching modes, users can utilize the virtual wall function to ensure that the robotic arm's dragging operation does not exceed the preset range.

::: warning
The virtual wall function currently supports two shapes, i.e., cubes and spheres, and is only effective in the aforementioned two teaching modes. In other operating modes, this function will be automatically disabled. Therefore, please ensure that the virtual wall function is used in the correct mode to fully leverage its ability to limit the dragging range.
:::

### Set the enabling state of the virtual wall `set_virtual_wall_enable`

- **Input parameter**

| Parameter  | Type | Description  |
| :-- | :-- | :-- |
|`set_virtual_wall_enable`|`string` |Set the enabling state of the virtual wall. |
|`set_enable` |`bool`| `true`: enable, `false`: disable. |
|`in_out_side`|`int`|0: robot inside the virtual wall. |
|`effective_region`|`int`|1: effective for the end effector. |

- **Output parameter**

| Parameter  | Type | Description  |
| :-- | :-- | :-- |
|`set_virtual_wall_enable`|`bool`|`true`: success, `false`: failure |

- **Code demo**

**Input**

Set the enabling state of the virtual wall.

```json
{"command":"set_virtual_wall_enable","set_enable":false,"in_out_side":0,"effective_region":1}
```

**Output**

```json
{
    "command": "set_virtual_wall_enable",
    "set_state": true
}
```

### Get the enabling state of the virtual wall `get_virtual_wall_enable`

- **Input parameter**

| Parameter  | Type | Description  |
| :-- | :-- | :-- |
|`get_virtual_wall_enable`|`string` |Get the enabling state of the virtual wall. |

- **Output parameter**

| Parameter  | Type | Description  |
| :-- | :-- | :-- |
| `form` | `int` | Form, 1: cube, 3: sphere. |
| `x_min_limit` | `int` | Minimum limit of the cube based on the X-axis of the world frame, in 0.001 m. In the demo, it is 0.5 m. |
| `x_max_limit` | `int` | Maximum limit of the cube based on the X-axis of the world frame, in 0.001 m. In the demo, it is 1 m. |
| `y_min_limit` | `int` | Minimum limit of the cube based on the Y-axis of the world frame, in 0.001 m. In the demo, it is 0.5 m. |
| `y_max_limit` | `int` | Maximum limit of the cube based on the Y-axis of the world frame, in 0.001 m. In the demo, it is 1 m. |
| `z_min_limit` | `int` | Minimum limit of the cube based on the Z-axis of the world frame, in 0.001 m. In the demo, it is 0.5 m. |
| `z_max_limit` | `int` | Maximum limit of the cube based on the Z-axis of the world frame, in 0.001 m. In the demo, it is 1 m. |
| `x, y, z`  | `int` | Coordinates of the sphere center based on the world frame, in 0.001 m. In the demo, x: 0.5 m, y: 1 m, z: 0.5 m. |
|`radius`|`int`|Radius of the sphere, in 0.001 m. In the demo, it is 0.9 m. |

- **Code demo**

**Input**

Get the enabling state of the virtual wall.

```json
{ "command": "get_virtual_wall_enable" }
```

**Output**

```json
{
    "command": "get_virtual_wall_enable",
    "enable_state": false,
    "in_out _side": 0,
    "effective_region": 1
}
```

### Set the parameters of the current virtual wall `set_virtual_wall_config`

- **Input parameter**

| Parameter  | Type | Description  |
| :-- | :-- | :-- |
|`set_virtual_wall_config`|`string` |Set the parameters of the current virtual wall. |
| `form` | `int` | Form, 1: cube, 3: sphere. |
| `x_min_limit` | `int` | Minimum limit of the cube based on the X-axis of the world frame, in 0.001 m. In the demo, it is 0.5 m. |
| `x_max_limit` | `int` | Maximum limit of the cube based on the X-axis of the world frame, in 0.001 m. In the demo, it is 1 m. |
| `y_min_limit` | `int` | Minimum limit of the cube based on the Y-axis of the world frame, in 0.001 m. In the demo, it is 0.5 m. |
| `y_max_limit` | `int` | Maximum limit of the cube based on the Y-axis of the world frame, in 0.001 m. In the demo, it is 1 m. |
| `z_min_limit` | `int` | Minimum limit of the cube based on the Z-axis of the world frame, in 0.001 m. In the demo, it is 0.5 m. |
| `z_max_limit` | `int` | Maximum limit of the cube based on the Z-axis of the world frame, in 0.001 m. In the demo, it is 1 m. |
| `x, y, z`  | `int` | Coordinates of the sphere center based on the world frame, in 0.001 m. In the demo, x: 0.5 m, y: 1 m, z: 0.5 m. |
|`radius`|`int`|Radius of the sphere, in 0.001 m. In the demo, it is 0.9 m. |

- **Output parameter**

| Parameter  | Type | Description  |
| :-- | :-- | :-- |
| `set_config` | `bool` | `true`: success, `false`: failure. |

- **Code demo**

**Input**

Set the parameters of the current virtual wall: cube.

```json
{"command":"set_virtual_wall_config","form":1,"x_min_limit":500,"x_max_limit":1000,"y_min_limit":500,"y_max_limit":1000,"z_min_limit":500,"z_max_limit":1000}
```

Set the parameters of the current virtual wall: sphere.

```json
{"command":"set_virtual_wall_config","form":3,"x":500,"y":1000,"z":500,"radius":900}
```

**Output**

Setting succeeded.

```json
{
    "command": "set_virtual_wall_config",
    "set_config": true
}
```

Setting failed.

```json
{
    "command": "set_virtual_wall_config",
    "set_config": false
}
```

### Get the parameters of the current virtual wall `get_virtual_wall_config`

- **Input parameter**

| Parameter  | Type | Description  |
| :-- | :-- | :-- |
|`get_virtual_wall_config`|`string` |Get the parameters of the current virtual wall. |

- **Output parameter**

| Parameter        | Type  | Description                             |
| :---------- | :---- | :------------------------------------------------------------------------------- |
| `form` | `int` | Form, 1: cube, 3: sphere.                  |
| `x_min_limit` | `int` | Minimum limit of the cube based on the X-axis of the world frame, in 0.001 m. In the demo, it is 0.5 m.             |
| `x_max_limit` | `int` | Maximum limit of the cube based on the X-axis of the world frame, in 0.001 m. In the demo, it is 1 m.             |
| `y_min_limit` | `int` | Minimum limit of the cube based on the Y-axis of the world frame, in 0.001 m. In the demo, it is 0.5 m.             |
| `y_max_limit` | `int` | Maximum limit of the cube based on the Y-axis of the world frame, in 0.001 m. In the demo, it is 1 m.             |
| `z_min_limit` | `int` | Minimum limit of the cube based on the Z-axis of the world frame, in 0.001 m. In the demo, it is 0.5 m.             |
| `z_max_limit` | `int` | Maximum limit of the cube based on the Z-axis of the world frame, in 0.001 m. In the demo, it is 1 m.             |
| `x, y, z`  | `int` | Coordinates of the sphere center based on the world frame, in 0.001 m. In the demo, x: 0.5 m, y: 1 m, z: 0.5 m. |
| `radius`      | `int` | Radius of the sphere, in 0.001 m. In the demo, it is 0.9 m.                          |

- **Output parameter**

| Parameter  | Type | Description  |
| :-- | :-- | :-- |
| `set_state` | `bool` | `true`: success, `false`: failure. |

- **Code demo**

**Input**

Set the current virtual wall parameters.

```json
{ "command": "get_virtual_wall_config" }
```

**Output**

Return demo: cube

```json
{
    "command": "get_virtual_wall_config",
    "form": 1,
    "x_min_limit": 500,
    "x_max_limit": 1000,
    "y_min_limit": 500,
    "y_max_limit": 1000,
    "z_min_limit": 500,
    "z_max_limit": 1000
}
```

Return demo: sphere

```json
{
    "command": "get_virtual_wall_config",
    "form": 3,
    "x": 500,
    "y": 1000,
    "z": 500,
    "radius": 900
}
```
