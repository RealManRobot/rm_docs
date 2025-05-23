# <p class="hidden">Python: </p>Programming File Information Sending Structure `rm_send_project_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `project_path`  |  `c_char * 300`  |  File path and name.  |
|  `project_path_len`  |  `int`  |  Path and name length.  |
|  `plan_speed`  |  `int`  |  Planned speed ratio.  |
|  `only_save`  |  `int`  |  0: Run the file, 1: Save the file only, without running.  |
|  `save_id`  |  `int`  |  Saved file ID in the controller.  |
|  `step_flag`  |  `int`  |  Single step mode, 1: single step mode, 0: normal motion mode.  |
|  `auto_start`  |  `int`  |  Default online programming file, 1: default, 0: non-default.  |
|  `project_type`  |  `int`  |  File type, 0: online programming file, 1: drag teaching trajectory file.  |

## Constructor function

```Python
rm_ctypes_wrap.rm_send_project_t.__init__(self, project_path: str = None, plan_speed: int = None, only_save: int = None, save_id: int = None, step_flag: int = None, auto_start: int = None, project_type: int = None):
```

**Parameter description:**

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `project_path`  |  `str, optional`  |  File path and name, default: None.  |
|  `project_path_len`  |  `int, optional`  |  Path and name length, default: None.  |
|  `plan_speed`  |  `int, optional`  |  Planned speed ratio, default: None.  |
|  `only_save`  |  `int, optional`  |  0: Run the file, 1: Save the file only, without running, default: None.  |
|  `save_id`  |  `int, optional`  |  Saved file ID in the controller, default: None.  |
|  `step_flag`  |  `int, optional`  |  Single step mode, 1: single step mode, 0: normal motion mode, default: None.  |
|  `auto_start`  |  `int, optional`  |  Default online programming file, 1: default, 0: non-default, default: None.  |
|  `project_type`  |  `int, optional`  |   File type, 0: online programming file, 1: drag teaching trajectory file, default: None.  |
