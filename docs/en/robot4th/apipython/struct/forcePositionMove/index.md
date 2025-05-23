# <p class="hidden">Python: </p>Pass-Through Force-Position Hybrid Compensation Parameters `rm_force_position_move_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `flag`  |  `int`  |  0: target angle, 1: target pose |
|  `pose`  |  [`rm_pose_t`](../pose/index.md)  |  Target pose in the current frame, with orientation represented by quaternion/Euler angle. Position accuracy: 0.001 mm, orientation accuracy: 0.001 rad for orientation represented by Euler angle; 0.000001 for orientation represented by quaternion  |
|  `joint`  |  `List[float]`  |  Target joint angle, unit: °, accuracy: 0.001° |
|  `sensor`  |  `int`  |  Sensor, 0: 1-DoF force, 1: 6-DoF force |
|  `mode`  |  `int`  |  0: force control in the base frame, 1: force control in the tool frame |
|  `follow`  |  `bool`  |  Driver motion follow, true: high follow, false: low follow |
|  `control_mode`  |  `List[int]`  |  6-DoF (Fx, Fy, Fz, Mx, My, Mz) mode, 0: fixed mode, 1: float mode, 2: spring mode, 3: motion mode, 4: force tracking mode; 8: force tracking + orientation adaption mode |
|  `desired_force`  |  `List[float]`  |  Desired force/torque maintained by the force control axis. When the force control mode of the axis is the force tracking mode, the desired force/torque setting will take effect, with an accuracy of 0.1 N.|
|  `limit_vel`  |  `List[float]`  |  Maximum linear speed and angular speed limits of the force control axis, effective only for the enabled force control direction. |
| `trajectory_mode` | `int` | high follow mode: 0 represents Full Transparency Mode, 1 represents Curve Fitting Mode, and 2 represents Filtering Mode. |
| `radio` | `int` | The smoothing factor for Curve Fitting Mode and Filtering Mode (the higher the value, the better the effect), ranging from 0 to 100. |
