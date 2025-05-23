# <p class="hidden">C, C++: </p>Force-Position Hybrid Control Parameters `rm_force_position_t`

## Class member variable description

### Sensor type `sensor`

0: 1-DoF force, 1: 6-DoF force.

```C++
int rm_force_position_t::sensor
```

### Force frame `mode`

0: force control in the base frame, 1: force control in the tool frame.

```C++
int rm_force_position_t::mode
```

### Force control mode array for each axis `control_mode`

6-DoF (Fx, Fy, Fz, Mx, My, Mz) mode, 0: fixed mode, 1: float mode, 2: spring mode, 3: motion mode, 4: force tracking mode; 8: force tracking + orientation adaption mode.

```C++
int rm_force_position_t::control_mode[6]
```

### Desired force/torque array for each axis `desired_force`

Desired force/torque maintained by the force control axis. When the force control mode of the axis is the force tracking mode, the desired force/torque setting will take effect, with an accuracy of 0.1 N.

```C++
float rm_force_position_t::desired_force[6]
```

### Maximum linear/angular speed limit array for each axis `limit_vel`

Maximum linear speed and angular speed limits of the force control axis, effective only for the enabled force control direction. The accuracy of the maximum linear speed of axes (x, y, z) is 0.001 m/s, and that of the maximum angular speed of axes (rx, ry, rz) is 0.001 °/s.

```C++
float rm_force_position_t::limit_vel[6]
```
