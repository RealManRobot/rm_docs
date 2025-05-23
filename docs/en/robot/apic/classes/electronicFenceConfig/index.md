# <p class="hidden">C、C++: </p>Electronic Fence and Virtual Wall Configuration `electronicFenceConfig`

The Gen 3 robotic arm functions electronic fences and virtual walls, and provides an interface for configuring the geometric model parameters of the electronic fence or virtual wall stored in the controller. Users can utilize these interfaces to add, query, update, or delete electronic fences or virtual walls. During use, they can flexibly apply the parameters stored in the controller. It is important to note that the controller currently supports saving no more than 10 parameters.<br>

**Electronic fence**: The electronic fence function ensures that the robotic arm's trajectory planning, teaching, and other movements are carried out within the set boundaries of the electronic fence through precise parameter configuration. If the robotic arm's trajectory is at risk of exceeding the boundaries of the electronic fence, the system will immediately return the corresponding error code and automatically halt the motion, thereby effectively ensuring the safe operation of the robotic arm.

::: warning
The electronic fence currently supports only two shapes, i.e., rectangular prisms and planes.
:::

**Virtual wall**: The virtual wall function supports the precise limitation of the dragging range in both current loop drag teaching and force control drag teaching modes. In these two specific teaching modes, users can utilize the virtual wall function to ensure that the robotic arm's dragging operation does not exceed the preset range.

::: warning
The virtual wall function currently supports two shapes, i.e., rectangular prisms and spheres, and is only effective in the aforementioned two teaching modes. In other operating modes, this function will be automatically disabled. Therefore, please ensure that the virtual wall function is used in the correct operating mode to fully leverage its ability to limit the dragging range.
:::

The following is a detailed description of the member functions of the electronic fence and virtual wall configuration `ElectronicFenceConfig`, including the method prototype, parameter description, return value, and usage demo. <br>

## Add geometric model parameters`rm_add_electronic_fence_config()`

- **Method prototype:**

```C
int rm_add_electronic_fence_config(rm_robot_handle * handle,rm_fence_config_t config)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_fence_config_t](../../struct/fenceConfig/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `config`  |    Input    |    Geometric model parameter structure.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Add geometric model parameter "test1" of rectangular prisms
rm_fence_config_t fence_config;
strncpy(fence_config.name, "test1", 10);
fence_config.form = 1;
fence_config.cube.x_max_limit = 0.5;
fence_config.cube.x_min_limit = -0.5;
fence_config.cube.y_max_limit = 0.5;
fence_config.cube.y_min_limit = -0.5;
fence_config.cube.z_max_limit = 0.5;
fence_config.cube.z_min_limit = -0.5;
int result = rm_add_electronic_fence_config(robot_handle, fence_config);  
printf("rm_add_electronic_fence_config:%d\n", result);
```

## Update geometric model parameters`rm_update_electronic_fence_config()`

- **Method prototype:**

```C
int rm_update_electronic_fence_config(rm_robot_handle * handle,rm_fence_config_t config)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_fence_config_t](../../struct/fenceConfig/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `config`  |    Input    |    Geometric model parameter structure.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Modify geometric model parameter "test1" of rectangular prisms
rm_fence_config_t fence_config;
strncpy(fence_config.name, "test1", 10);
fence_config.form = 1;
fence_config.cube.x_max_limit = 0.5;
fence_config.cube.x_min_limit = -1.0;
fence_config.cube.y_max_limit = 0.5;
fence_config.cube.y_min_limit = -0.5;
fence_config.cube.z_max_limit = 0.5;
fence_config.cube.z_min_limit = -0.5;
int result = rm_update_electronic_fence_config(robot_handle, fence_config);  
printf("rm_update_electronic_fence_config :%d\n", result);
```

## Delete given geometric model`rm_delete_electronic_fence_config()`

- **Method prototype:**

```C
int rm_delete_electronic_fence_config(rm_robot_handle * handle,const char * form_name)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `form_name`  |    Input    |    Geometric model name, not exceeding 10 bytes, supporting letters, numbers, and underscores.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
 ret = rm_delete_electronic_fence_config(robot_handle, "test");
 printf("delete electronic fence config result : %d\n", ret);
```

## Query all geometric model names`rm_get_electronic_fence_list_names()`

- **Method prototype:**

```C
int rm_get_electronic_fence_list_names(rm_robot_handle * handle,rm_fence_names_t * names,int * len)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_fence_names_t](../../struct/frameName/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `names`  |    Output    |    List of geometric model names, with a length corresponding to the actual number of existing geometric models.   |
|   `len`  |    Output    |    Length of the list of geometric model names.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
rm_fence_names_t fence_names[10];
int len_fence = 0;
ret = rm_get_electronic_fence_list_names(robot_handle, fence_names, &len_fence);
printf("get electronic fence list names result : %d\n", ret);
for (int i = 0; i < len_fence; i++) {
    printf("electronic_fence[%d] name : %s\n", i, fence_names[i].name);
}
```

## Query given geometric model parameter`rm_get_given_electronic_fence_config()`

- **Method prototype:**

```C
int rm_get_given_electronic_fence_config(rm_robot_handle * handle,const char * name,rm_fence_config_t * config)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_fence_config_t](../../struct/fenceConfig/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `name`  |    Input    |    Name of given geometric model.   |
|   `config`  |    Output    |    Return the geometric model parameter structure.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
rm_fence_config_t fence_config_given;
ret = rm_get_given_electronic_fence_config(robot_handle, "test", &fence_config_given);
printf("get given electronic fence config result : %d\n", ret);
printf("fence config given : %f, %f, %f, %f, %f, %f\n",
fence_config_given.cube.x_max_limit,
fence_config_given.cube.x_min_limit,    
fence_config_given.cube.y_max_limit,        
fence_config_given.cube.y_min_limit,
fence_config_given.cube.z_max_limit,
fence_config_given.cube.z_min_limit);
```

## Query all geometric model parameters`rm_get_electronic_fence_list_infos()`

- **Method prototype:**

```C
int rm_get_electronic_fence_list_infos(rm_robot_handle * handle,rm_fence_config_list_t * config_list,int * len)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_fence_config_list_t](../../struct/fenceConfigList/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `config_list`  |    Output    |    List of geometric model information, with a length corresponding to the actual number of existing geometric models.   |
|   `len`  |    Output    |    Length of the list of geometric model information.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
rm_fence_config_list_t list;
int len;
result = rm_get_electronic_fence_list_infos(robot_handle, &list, &len);
printf("rm_get_electronic_fence_list_infos: %d:\n", result);
for (int i = 0; i < len; i++) {
    printf("electronic_fence[%d] name: %s, ", i + 1, list.config[i].name);
    printf("form: %d\n", list.config[i].form);
}
```

## Set electronic fence enabling state `rm_set_electronic_fence_enable()`

- **Method prototype:**

```C
int rm_set_electronic_fence_enable(rm_robot_handle * handle,rm_electronic_fence_enable_t state)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_electronic_fence_enable_t](../../struct/electronicFenceEnable/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    `/`    |    Robotic arm handle.   |
|   `state`  |    `/`    |    Electronic fence enabling state.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

::: tip
The electronic fence function ensures that the robotic arm's trajectory planning, teaching, and other movements are carried out within the set boundaries of the electronic fence through precise parameter configuration. If the robotic arm's trajectory is at risk of exceeding the boundaries of the electronic fence, the system will immediately return the corresponding error code and automatically halt the motion, thereby effectively ensuring the safe operation of the robotic arm. It should be noted that the electronic fence currently supports only two shapes, i.e., rectangular prisms and planes.
:::

- **Usage demo**
  
```C
// Set electronic fence enabling state, effective for the entire robotic arm within the electronic fence
rm_electronic_fence_enable_t fence_state;
fence_state.enable_state = true;
fence_state.effective_region = 0;
fence_state.in_out_side = 0;
ret = rm_set_electronic_fence_enable(robot_handle, fence_state);
printf("set electronic fence enable result : %d\n", ret);
```

## Get electronic fence enabling state`rm_get_electronic_fence_enable()`

- **Method prototype:**

```C
int rm_get_electronic_fence_enable(rm_robot_handle * handle,rm_electronic_fence_enable_t * state)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_electronic_fence_enable_t](../../struct/electronicFenceEnable/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    `/`    |    Robotic arm handle.   |
|   `state`  |    `/`    |    Electronic fence enabling state.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
ret = rm_get_electronic_fence_enable(robot_handle, &fence_state);
printf("get electronic fence enable result : %d\n", ret);
printf("fence enable state : %d\n", fence_state.enable_state);
printf("fence effective region : %d\n", fence_state.effective_region);
printf("fence in/out side : %d\n", fence_state.in_out_side);
```

## Set current electronic fence parameter configuration`rm_set_electronic_fence_config()`

- **Method prototype:**

```C
int rm_set_electronic_fence_config(rm_robot_handle * handle,rm_fence_config_t config)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_fence_config_t](../../struct/fenceConfig/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    `/`    |    Robotic arm handle.   |
|   `config`  |    `/`    |    Current electronic fence parameter structure (no electronic fence name is required).   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Set current electronic fence parameters
rm_fence_config_t set_fence_config;
set_fence_config.form = 1;
set_fence_config.cube.x_max_limit = 0.5;
set_fence_config.cube.x_min_limit = -1.0;
set_fence_config.cube.y_max_limit = 0.5;
set_fence_config.cube.y_min_limit = -0.5;
set_fence_config.cube.z_max_limit = 0.5;
set_fence_config.cube.z_min_limit = -0.5;
ret = rm_set_electronic_fence_config(robot_handle, set_fence_config);
printf("set electronic fence config result : %d\n", ret);
```

## Get current electronic fence parameters`rm_get_electronic_fence_config()`

- **Method prototype:**

```C
int rm_get_electronic_fence_config(rm_robot_handle * handle,rm_fence_config_t * config)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_fence_config_t](../../struct/fenceConfig/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    `/`    |    Robotic arm handle.   |
|   `config`  |    `/`    |    Return the current electronic fence parameter structure (the returned parameters do not include the electronic fence name).   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
ret = rm_get_electronic_fence_config(robot_handle, &set_fence_config);
printf("get electronic fence config result : %d\n", ret);
printf("fence form : %d\n", set_fence_config.form);
printf("fence x_max_limit : %f\n", set_fence_config.cube.x_max_limit);
printf("fence x_min_limit : %f\n", set_fence_config.cube.x_min_limit);
printf("fence y_max_limit : %f\n", set_fence_config.cube.y_max_limit);
printf("fence y_min_limit : %f\n", set_fence_config.cube.y_min_limit);
printf("fence z_max_limit : %f\n", set_fence_config.cube.z_max_limit);
printf("fence z_min_limit : %f\n", set_fence_config.cube.z_min_limit);
```

## Set virtual wall enabling state`rm_set_virtual_wall_enable()`

- **Method prototype:**

```C
int rm_set_virtual_wall_enable(rm_robot_handle * handle,rm_electronic_fence_enable_t state)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_electronic_fence_enable_t](../../struct/electronicFenceEnable/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    `/`    |    Robotic arm handle.   |
|   `state`  |    `/`    |    Virtual wall state structure.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Set virtual wall enabling state, effective for the end effector within the electronic fence
rm_electronic_fence_enable_t fence_state;
fence_state.enable_state = true;
fence_state.effective_region = 0;
fence_state.in_out_side = 1;
ret = rm_set_electronic_fence_enable(robot_handle, fence_state);
printf("set electronic fence enable result : %d\n", ret);
```

## Get virtual wall enabling state `rm_get_virtual_wall_enable()`

- **Method prototype:**

```C
int rm_get_virtual_wall_enable(rm_robot_handle * handle,rm_electronic_fence_enable_t * state)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_electronic_fence_enable_t](../../struct/electronicFenceEnable/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    `/`    |    Robotic arm handle.   |
|   `state`  |    `/`    |    Virtual wall state structure.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
ret = rm_get_virtual_wall_enable(robot_handle, &fence_state);
printf("get virtual wall enable result : %d\n", ret);
printf("fence enable state : %d\n", fence_state.enable_state);
printf("fence effective region : %d\n", fence_state.effective_region);
printf("fence in/out side : %d\n", fence_state.in_out_side);
```

## Set current virtual wall parameters`rm_set_virtual_wall_config()`

- **Method prototype:**

```C
int rm_set_virtual_wall_config(rm_robot_handle * handle,rm_fence_config_t config)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_fence_config_t](../../struct/fenceConfig/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    `/`    |    Robotic arm handle.   |
|   `config`  |    `/`    |    Current virtual wall parameters (no virtual wall name is required).   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Set current electronic fence parameters
rm_fence_config_t set_fence_config;
set_fence_config.form = 1;
set_fence_config.cube.x_max_limit = 0.5;
set_fence_config.cube.x_min_limit = -1.0;
set_fence_config.cube.y_max_limit = 0.5;
set_fence_config.cube.y_min_limit = -0.5;
set_fence_config.cube.z_max_limit = 0.5;
set_fence_config.cube.z_min_limit = -0.5;
ret = rm_set_virtual_wall_config(robot_handle, set_fence_config);
printf("set virtual wall config result : %d\n", ret);
```

## Get current virtual wall parameters`rm_get_virtual_wall_config()`

- **Method prototype:**

```C
int rm_get_virtual_wall_config(rm_robot_handle * handle,rm_fence_config_t * config)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_fence_config_t](../../struct/fenceConfig/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    `/`    |    Robotic arm handle.   |
|   `config`  |    `/`    |    Current virtual wall parameters (the returned parameters do not include the virtual wall name).   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
ret = rm_get_virtual_wall_config(robot_handle, &set_fence_config);
printf("get virtual wall config result : %d\n", ret);
printf("fence form : %d\n", set_fence_config.form);
printf("fence x_max_limit : %f\n", set_fence_config.cube.x_max_limit);
printf("fence x_min_limit : %f\n", set_fence_config.cube.x_min_limit);
printf("fence y_max_limit : %f\n", set_fence_config.cube.y_max_limit);
printf("fence y_min_limit : %f\n", set_fence_config.cube.y_min_limit);
printf("fence z_max_limit : %f\n", set_fence_config.cube.z_max_limit);
printf("fence z_min_limit : %f\n", set_fence_config.cube.z_min_limit);
```
