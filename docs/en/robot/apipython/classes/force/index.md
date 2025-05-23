# <p class="hidden">Python: </p>End 6-DoF Force Sensor Configuration `Force`

The 6-DoF force version of the RealMan robotic arm is equipped with an integrated 6-DoF force sensor at the end effector, eliminating the need for external wiring and allowing the user to manipulate the 6-DoF force and obtain 6-DoF force data directly through the protocol. As shown in the image below, the Z-axis of the 6-DoF force is directly above, and the Y-axis of the 6-DoF force is in the opposite direction of the aviation connector, with the frame following the right-hand rule. When the robotic arm is in the zero position, the tool frame is aligned with the 6-DoF force frame. <br>

Additionally, the 6-DoF force sensor has a rated force of 200 N, a rated torque of 7 N.m, an overload capacity of 300FS, an operating temperature range of 5°C to 80°C, and an accuracy of 0.5FS. During use, it is important to pay attention to the operational requirements to prevent damage to the 6-DoF force sensor. Here is the 6-DoF force frame: <br>

![force.png](../../doc/sixForce.png)

This interface is used to get and configure the end force sensor. The following is a detailed description of the member functions of the end 6-DoF force sensor configuration `Force`, including the method prototype, parameter description, return value, and usage demo. <br>

---

## Get the force data of the 6-DoF force sensor `rm_get_force_data()`

Get the current force and torque data obtained from the 6-DoF force sensor, including Fx, Fy, Fz, Mx, My, and Mz. <br>

- **Method prototype:**

```python
rm_get_force_data(self) -> tuple[int, dict[str, any]]:
```

- **Return value:** <br>
`tuple[int, dict[str,any]]`: a tuple containing two elements. <br>

1. int: state codes executed by functions.

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

2. 6-DoF force data dictionary

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :---|
|   `rm_force_data_t`  |    `dict[str, any]`   |    6-DoF force data dictionary, key: field name of rm_force_data_t    |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_get_force_data())

arm.rm_delete_robot_arm()
```

## Calibrate the zero position under the current state `rm_clear_force_data()`

Clear the 6-DoF force data and calibrate the zero position under the current state.

- **Method prototype:**

```python
rm_clear_force_data(self) -> int:
```

- **Return value:** <br>
State codes executed by functions:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_clear_force_data())

arm.rm_delete_robot_arm()
```

## Set the 6-DoF force center of gravity parameters automatically `rm_set_force_sensor()`

Set the 6-DoF force center of gravity parameters. After reinstalling the 6-DoF force sensor, the initial force and center of gravity acting on the 6-DoF force must be recalculated. Get 6-DoF force data at different orientations to calculate the center of gravity position. After this command is issued, the robotic arm moves to each calibration point at a fixed speed. <br>
Take the RM65 robotic arm as an example, the joint angles for the four calibration points are as follows: <br>

- Point 1 joint angle: {0,0,-60,0,60,0}<br>
- Point 2 joint angle: {0,0,-60,0,-30,0}<br>
- Point 3 joint angle: {0,0,-60,0,-30,180}<br>
- Point 4 joint angle: {0,0,-60,0,-120,0}<br>

- **Method prototype:**

```python
rm_set_force_sensor(self, block: bool) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `block`      | `bool` | true: blocking mode, return after the calibration is complete, false: non-blocking mode, immediately return after sending commands           |

- **Return value:** <br>
State codes executed by functions:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_set_force_sensor(True))

arm.rm_delete_robot_arm()
```

## Calibrate the 6-DoF force data manually `rm_manual_set_force()`

After reinstalling the 6-DoF force sensor, the initial force and center of gravity acting on the 6-DoF force sensor must be recalculated. This manual calibration is applicable to narrow working spaces to prevent the robotic arm from colliding during the automatic calibration. Users can manually select four points to issue commands. Once all four points are set, the robotic arm will automatically move toward the user-defined target, and the 6-DoF force center of gravity will be calculated during this movement. <br>

::: warning
The commands for four points must be issued in sequence. Once point 4 is set, the robotic arm will automatically calculate the center of gravity.
:::

- **Method prototype:**

```python
rm_manual_set_force(self, point_num: int, joint: list[float], block: bool) -> int:
```

- **Parameter description:**

| Parameter        | Type    | Description                                   |
| :-------- | :---- | :----------------------------------- |
| `point_num`      | `int` |  Point numbers 1−4             |
| `joint`      | `list[float]` | Joint angle, in °             |
| `block`      | `bool` | true: blocking mode, return after the calibration is complete, false: non-blocking mode, immediately return after sending commands           |

- **Return value:** <br>
State codes executed by functions:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *
import time

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

set_force_data = [({'point_num': 1, 'joint': [0, 0, -60, 0, 60, 0], 'block': True},
                       {'point_num': 2, 'joint': [0, 0, -60, 0, -30, 0], 'block': True},
                       {'point_num': 3, 'joint': [0, 0, -60, 0, -30, 180], 'block': True},
                       {'point_num': 4, 'joint': [0, 0, -60, 0, -120, 0], 'block': True})]

print(arm.rm_manual_set_force(**set_force_data[0]))
time.sleep(1)
print(arm.rm_manual_set_force(**set_force_data[1]))
time.sleep(1)
print(arm.rm_manual_set_force(**set_force_data[2]))
time.sleep(1)
print(arm.rm_manual_set_force(**set_force_data[3]))
time.sleep(1)

arm.rm_delete_robot_arm()
```

## Stop calibrating the force sensor center of gravity`rm_stop_set_force_sensor()`

- **Method prototype:**

```python
rm_stop_set_force_sensor(self) -> int:
```

- **Return value:** <br>
State codes executed by functions:

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

# Instantiate the RoboticArm class
arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)

# Create the robotic arm connection and print the connection ID
handle = arm.rm_create_robot_arm("192.168.1.18", 8080)
print(handle.id)

print(arm.rm_stop_set_force_sensor())

arm.rm_delete_robot_arm()
```
