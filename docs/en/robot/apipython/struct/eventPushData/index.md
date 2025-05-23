# <p class="hidden">Python: </p>Robotic Arm In-Position Event Structure `rm_event_push_data_t`

It is used to receive various events about the robotic arm, such as planned trajectory in position and online programming in position. The callback function is registered through the rm_get_arm_event_call_back to process this structure.

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `handle_id`  |  `int`  |  Robotic arm connection ID, used to identify a specific robotic arm connection. |
|  `event_type`  |  [rm_event_type_e](../../type/index.md)  |  Event type, 0: non-event, 1: current planned trajectory in position, 2: current online programming in position. |
|  `trajectory_state`  |  `bool`  | State of the in-position planned trajectory, true: success, false: failure.  |
|  `device`  |  `int`  |  ID of the current in-position planned device, used to distinguish different types of devices, 0: joint, 1: gripper, 2: dexterous hand, 3: lifting mechanism, 4: expansion joint, others: reserved. |
|  `trajectory_connect`  |  `int`  |  Current in-position planned trajectory connected to the next trajectory or not: 0: all trajectories in position, 1: connected to the next trajectory.  |
|  `program_id`  |  `int`  |  Current in-position online programming.  |
