# <p class="hidden">Python: </p>Flowchart Program Run State `rm_flowchart_run_state_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
| `run_state` | `int`       |Run state: 0 - Not Started, 1 - Running, 2 - Paused. |
| `id` | `int`    | ID of the currently enabled file.       |
| `name`    | `str`     | Name of the currently enabled file.  |
| `plan_speed`    | `int`     | Global planning speed ratio of the currently enabled file (1 - 100). |
| `step_mode`    | `int`     | Step by step mode: 0 - None, 1 - Normal, 2 - Step by step. |
| `modal_id`    | `str`     | ID of the flowchart block currently being executed. Not returned if not running. |
