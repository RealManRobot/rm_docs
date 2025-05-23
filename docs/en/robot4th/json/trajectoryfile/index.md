# <p class="hidden">JSON protocol: </p>Trajectory File Command Set

## Query Trajectory List `get_trajectory_file_list`

- **Input Parameter**

| Parameter                 | Type     | Description                     |
| :------------------- | :------- | :---------------------- |
| `get_trajectory_file_list` | `string` | Query the list of trajectories.              |
| `page_num`           | `int`    | Page number (omit this parameter when querying all).             |
| `page_size`          | `int`    | Page size (omit this parameter when querying all).              |
| `vague_search`       | `string`    | Fuzzy search (pass this parameter for fuzzy query).               |

- **Output Parameter**

| Parameter            | Type   | Description                                  |
| :-------------- | :----- | :------------------------------------ |
| `get_trajectory_file_list` | `string` | Query the list of trajectories. |
| `total_size` | `int` | Total number of trajectories. |
| `list` | `object` | Detailed information of trajectories. |

- **Code demo**

**Input**  

Query multiple drag-and-teach trajectories, page number: 1, page size: 10, fuzzy search for trajectory files with "file" in the name.

```json
{"command":"get_trajectory_file_list","page_num":1,"page_size":10,"vague_search":"file"}
```

**Output**  

```json
{"command":"get_trajectory_file_list","list":[{"create_time":1737457680183,"name":"test2","point_num":501},{"create_time":1737458013270,"name":"test1","point_num":501}],"total_size":2}
```

## Start Running Specified Trajectory `set_run_trajectory_file`

- **Input Parameter**

| Parameter                 | Type     | Description       |
| :------------------- | :------- | :------------------------------- |
| `set_run_trajectory_file`| `string` | Start running the trajectory with the specified ID.                |
| `name`               | `string`    | Run the trajectory with the specified name, which must exist and be runnable.           |

- **Output Parameter**

| Parameter | Type | Description |
| :-------------- | :----- | :------------------------------------ |
| `start_state` | `bool` | Execution parameter for the trajectory command: `true`: Start running successfully, `false`: Failed to run. |
| `trajectory_file_state` | `string` |Parameter indicating the trajectory file has been executed to its final position. |

- **Code demo**

**Input**  

Start running the trajectory named "123".

```json
{"command":"set_run_trajectory_file","name":"123"}
```

**Output**  

Start running successfully.

```json
{
    "command": "set_run_trajectory_file",
    "run_state": true
}
```

Start running failed.

```json
{
    "command": "set_run_trajectory_file",
    "run_state": false
}
```

After the trajectory reproduction is completed, it returns that the trajectory has been executed to its final position.

```json
{
    "trajectory_file_state": "file_run_finish",
}
```

## Delete Specified Trajectory File `delete_trajectory_file`

- **Input Parameter**

| Parameter                 | Type     | Description       |
| :------------------- | :------- | :------------------------ |
| `delete_trajectory_file`              | `string` |  Delete the trajectory with the specified ID.|
| `name`               | `string`    | Name of the trajectory to be deleted.           |

- **Output Parameter**

| Parameter            | Type   | Description                                  |
| :-------------- | :----- | :------------------------------------ |
| `delete_state` | `bool` | `true`: Deleted successfully; `false`: Failed to delete. |

- **Code demo**

**Input**  

Delete the trajectory file with ID 2.

```json
{"command":"delete_trajectory_file","id":2}
```

**Output**  

Deleted successfully:

```json
{
    "command": "delete_trajectory_file",
    "delete_state": true
}
```

Failed to delete:

```json
{
    "command": "delete_trajectory_file",
    "delete_state": false
}
```

## Save Trajectory File `save_trajectory_file`

- **Input Parameter**

| Parameter                 | Type     | Description     |
| :------------------- | :------- | :----------------------- |
| `save_trajectory_file`    | `string` | When there is a savable trajectory, issuing this command can save it successfully.   |
| `trajectory_name`               | `string`    | Name of the file to be saved.      |

- **Output Parameter**

| Parameter                 | Type   | Description        |
| :------------------- | :----- | :------------------------- |
| `save_state`      | `bool` | `true`: Saved successfully; `false`: Failed to save.    |

- **Code demo**

**Input**  

Save a new trajectory file and name it 123.

```json
{"command":"save_trajectory_file","trajectory_name":"123"}
```

**Output**  

Saved successfully:

```json
{
    "command": "save_trajectory_file",
    "save_state": true,
}
```

Failed to save:

```json
{
    "command": "save_trajectory_file",
    "save_state": false,
}
```
