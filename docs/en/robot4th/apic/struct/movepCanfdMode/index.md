# <p class="hidden">C、C++: </p>Pose Transparency Mode Parameter `rm_movep_canfd_mode_t`

## Explanation of Class Member Variables

### Target Pose for Transparency `pose`

The target pose in the current coordinate system, supports representation of pose with quaternions/Euler angles. Position accuracy: 0.001mm, when representing pose with Euler angles, pose accuracy: 0.001rad, when representing pose with quaternions, pose accuracy: 0.000001.

```C++
rm_pose_t rm_movep_canfd_mode_t::pose 
```

*Jump to [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

### High Follow `follow`

Indicates the motion following effect of the driver, true for high follow, false for low follow.

```C++
bool rm_movep_canfd_mode_t::follow 
```

### Transparency Mode `trajectory_mode`

Under high-follow mode, 0 - Full Transparency Mode, 1 - Curve Fitting Mode, 2 - Filtering Mode.

```C++
int rm_movep_canfd_mode_t::trajectory_mode
```

### Smoothing Factor `radio`

When in Curve Fitting Mode, radio is the smoothing factor (0-100). When in Filtering Mode, radio is the filtering parameter (range is between 0 and 1000).

```C++
int rm_movep_canfd_mode_t::radio
```
