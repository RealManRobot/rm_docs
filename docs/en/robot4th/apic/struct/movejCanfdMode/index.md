# <p class="hidden">C、C++: </p>Angle Transparency Mode Parameter `rm_movej_canfd_mode_t`

## Explanation of Class Member Variables

### Array of Target Joint Angles for Transparency `joint`

Target joint angles, unit: degrees (°), precision: 0.001°.

```C++
float* rm_movej_canfd_mode_t::joint
```

### Extended Joint Angle `expand`

Extended joint angle (if there are no extended joints, this member value is invalid).

```C++
float rm_movej_canfd_mode_t::expand 
```

### High Follow `follow`

Indicates the motion following effect of the driver, true for high follow, false for low follow.

```C++
bool rm_movej_canfd_mode_t::follow 
```

### Transparency Mode `trajectory_mode`

Under high-follow mode, 0 - Full Transparency Mode, 1 - Curve Fitting Mode, 2 - Filtering Mode.

```C++
int rm_movej_canfd_mode_t::trajectory_mode
```

### Smoothing Factor `radio`

When in Curve Fitting Mode, radio is the smoothing factor (0-100). When in Filtering Mode, radio is the filtering parameter (range is between 0 and 1000).

```C++
int rm_movej_canfd_mode_t::radio
```
