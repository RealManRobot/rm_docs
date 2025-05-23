# <p class="hidden">Python: </p>Force-Position Hybrid Control Parameter structure `rm_force_position_t`

## Parameter description

|Parameter|Type|Description|
|:--|:--|:--|
|`mode`|`int`|0: force control in the work frame, 1: force control in the tool frame. |
|`sensor`|`int`|Sensor, 0: 1-DoF force, 1: 6-DoF force. |
|`control_mode`|`int`|6-DoF (Fx, Fy, Fz, Mx, My, Mz) mode, 0: fixed mode, 1: float mode, 2: spring mode, 3: motion mode, 4: force tracking mode, 8: force tracking + orientation adaption mode (effective only for the Fz direction of the tool frame).|
|`desired_force`|`int`|Desired force/torque maintained by the force control axis. When the force control mode of the axis is the force tracking mode, the desired force/torque setting will take effect, with an accuracy of N/Nm. |
|`limit_vel`|`int`|Maximum linear speed and maximum angular speed limits of the force control axis, effective only for the enabled force control direction. The accuracy of the maximum linear speed of axes (x, y, z) is m/s, and that of the maximum angular speed of axes (rx, ry, rz) is °/s.|
