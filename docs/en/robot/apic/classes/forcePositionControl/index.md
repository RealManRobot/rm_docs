# <p class="hidden">C、C++: </p>Pass-Through Force-Position Hybrid Control Compensation Configuration`forcePositionControl`

The RealMan robotic arm is equipped with both 1-DoF and 6-DoF force versions. In addition to directly using the teach pendant to call the underlying force-position hybrid control module, users can also use this interface to integrate custom trajectories with the underlying force-position hybrid control algorithm for compensation in a periodic pass-through form. <br>
The pass-through effect is related to the period and the smoothness of the trajectory. The period must be stable to prevent significant fluctuations. When using this command, users should carefully plan the trajectory, as the smoothness of the trajectory planning determines the robotic arm's operating state. <br>
The Gen 2 WIFI and network port pass-through modes have the fastest cycle of 20 ms, while the USB and RS485 modes can achieve the fastest cycle of 10 ms. The high-speed network port pass-through cycle can also reach 10 ms, but the configuration must be enabled with a command before using the high-speed network port. Additionally, the Gen 3 Ethernet port can attain a pass-through cycle as fast as 2 ms.

## Enable pass-through force-position hybrid control compensation mode`rm_start_force_position_move()`

- **Method prototype:**

```C
int rm_start_force_position_move(rm_robot_handle * handle)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Enable pass-through force-position hybrid control compensation mode
ret = rm_start_force_position_move(robot_handle);
```

## Stop pass-through force-position hybrid control compensation mode`rm_stop_force_position_move()`

- **Method prototype:**

```C
int rm_stop_force_position_move(rm_robot_handle * handle)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
ret = rm_stop_force_position_move(robot_handle);
```

## Pass-through force-position hybrid compensation - angle mode`rm_force_position_move_joint()`

- **Method prototype:**

```C
int rm_force_position_move_joint(rm_robot_handle * handle,const float * joint,int sensor,int mode,int dir,float force,bool follow)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `joint`  |    Input    |    Target joint angle.   |
|   `sensor`  |    Input    |    Type of sensor used, 0: 1-DoF force, 1: 6-DoF force.   |
|   `mode`  |    Input    |    Mode, 0: along the base frame, 1: along the tool-end frame.   |
|   `dir`  |    Input    |    Force control direction, 0-5 represent X/Y/Z/Rx/Ry/Rz, <br>For 1-DoF force type, the default direction is Z-axis.   |
|   `force`  |    Input    |    Magnitude of the force, in N.   |
|   `follow`  |    Input    |    Whether to enable high-follow mode. ture: high follow; false: low follow.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Pass-through force-position hybrid compensation--joint angle
const float joint[6] = {1,2,3,4,5,6};
int sensor = 0;
int mode = 0;
int dir = 2;
float force = 5;
bool follow = true;
ret=rm_force_position_move_joint(robot_handle,joint,sensor,mode,dir,force,follow);
```

## Pass-through force-position hybrid compensation - pose mode`rm_force_position_move_pose()`

- **Method prototype:**

```C
int rm_force_position_move_pose(rm_robot_handle * handle,rm_pose_t pose,int sensor,int mode,int dir,float force,bool follow)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `pose`  |    Input    |    Target joint angle.   |
|   `sensor`  |    Input    |    Type of sensor used, 0: 1-DoF force, 1: 6-DoF force.   |
|   `mode`  |    Input    |    Mode, 0: along the base frame, 1: along the tool-end frame.   |
|   `dir`  |    Input    |    Force control direction, 0-5 represent X/Y/Z/Rx/Ry/Rz, <br>For 1-DoF force type, the default direction is Z-axis.   |
|   `force`  |    Input    |    Magnitude of the force, in N.   |
|   `follow`  |    Input    |    Whether to enable high-follow mode. ture: high follow; false: low follow.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Pass-through force-position hybrid compensation--pose
rm_pose_t pose;
pose.position.x = 0.186350;
pose.position.y = 0.062099;
pose.position.z = 0.2;
pose.euler.rx = 3.141;
pose.euler.ry = 0;
pose.euler.rz = 1.569;

int sensor = 0;
int mode = 0;
int dir = 2;
float force = 15;
bool follow = true;
ret=rm_force_position_move_pose(robot_handle,pose,sensor,mode,dir,force,follow);
```

## Pass-through force-position hybrid compensation `rm_force_position_move()`

- **Method prototype:**

```C
int rm_force_position_move(rm_robot_handle * handle, rm_force_position_move_t param)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_force_position_move_t](../../struct/forcePositionMove/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `param`  |    Input    |    Pass-through force-position hybrid compensation parameters.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Force-position hybrid control compensation - Pass-through target angle [0,20,0,90,0,0], 6-DoF force sensor, force control in tool frame, high follow, Z-axis force tracking mode, desired force 5 N, maximum linear speed 0.2 m/s.
rm_force_position_move_t move = {
    0,{0,0,0},{0,20,0,90,0,0},1,1,true,{0,0,4,0,0,0},{0,0,5,0,0,0},{0,0,0.2,0,0,0}
};
ret = rm_force_position_move(robot_handle, move);
```
