# <p class="hidden">Python: </p>Robotic Arm Program Running State Structure `rm_program_run_state_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `run_state`  |  `int`  |  Running state, <br>0: not started, <br>1: running, <br>2: paused. |
|  `id`  |  `int`  |  ID of trajectories.  |
|  `edit_id`  |  `int`  |  Previously edited online programming ID.  |
|  `plan_num`  |  `int`  |  Number of running lines.  |
|  `total_loop`  |  `int`  |  Number of loop commands.  |
|  `step_mode`  |  `int`  |  Single step mode, <br>1: single step mode, <br>0: non-single step mode.  |
|  `plan_speed`  |  `int`  |  Global planned speed ratio, 1−100.  |
|  `loop_num`  |  `List[int]`  |  Number of loop lines.  |
|  `loop_cont`  |  `List[int]`  |  Loop count  |

## Member function

```Python
def Robotic_Arm.rm_ctypes_wrap.rm_program_run_state_t.to_dict(self, recurse = True)
```

Return the class variables as dictionaries and, if the recurse is True, process the structure fields recursively through ctypes.
