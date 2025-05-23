# <p class="hidden">C, C++: </p>Pass-Through Force-Position Hybrid Compensation Parameters `rm_force_position_move_t`

## Class member variable description

### Pass-through data flag `flag_type`

0: target angle, 1: target pose.

```C++
int rm_force_position_move_t::flag
```

### Pass-through target pose `pose`

Target pose in the current frame, with orientation represented by quaternion/Euler angle. Position accuracy: 0.001 mm, orientation accuracy: 0.001 rad for orientation represented by Euler angle; 0.000001 for orientation represented by quaternion

```C++
rm_pose_t rm_force_position_move_t::pose 
```

*Jump to [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

### Pass-through target joint angle array `joint`

Target joint angle, unit: °, accuracy: 0.001°.

```C++
float rm_force_position_move_t::joint[ARM_DOF]
```

### Sensor type `sensor`

0: 1-DoF force, 1: 6-DoF force.

```C++
int rm_force_position_move_t::sensor 
```

### Force frame `mode`

0: force control in the base frame, 1: force control in the tool frame.

```C++
int rm_force_position_move_t::mode 
```

### High follow `follow`

Driver motion follow, true: high follow, false: low follow.

```C++
bool rm_force_position_move_t::follow 
```

### Force control mode array for each axis `control_mode`

6-DoF (Fx, Fy, Fz, Mx, My, Mz) mode, 0: fixed mode, 1: float mode, 2: spring mode, 3: motion mode, 4: force tracking mode; 8: force tracking + orientation adaption mode.

```C++
int rm_force_position_move_t::control_mode[6]
```

### Desired force/torque array for each axis `desired_force`

Desired force/torque maintained by the force control axis. When the force control mode of the axis is the force tracking mode, the desired force/torque setting will take effect, with an accuracy of 0.1 N.

```C++
float rm_force_position_move_t::desired_force[6]
```

### Maximum linear/angular speed limit array for each axis `limit_vel`

Maximum linear speed and angular speed limits of the force control axis, effective only for the enabled force control direction. The accuracy of the maximum linear speed of axes (x, y, z) is 0.001 m/s, and that of the maximum angular speed of axes (rx, ry, rz) is 0.001 °/s.

```C++
float rm_force_position_move_t::limit_vel[6]
```

### Transparency Mode `trajectory_mode`

In high-follow mode, 0 - Full Transparency Mode, 1 - Curve Fitting Mode, 2 - Filtering Mode.

```C++
int rm_force_position_move_t::trajectory_mode
```

### Smoothing Factor `radio`

The smoothing factor for Curve Fitting Mode and Filtering Mode (the higher the value, the better the effect), ranging from 0 to 100.

```C++
int rm_force_position_move_t::radio
```
