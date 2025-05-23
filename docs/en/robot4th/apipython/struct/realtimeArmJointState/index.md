# <p class="hidden">Python: </p>UDP-Based Real-Time Robotic Arm State Pushing Structure `rm_realtime_arm_joint_state_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
| `errCode`     | `int`     | Data parsing error code, -3: data parsing error, indicating that the pushed data is incomplete or incorrectly formatted |
| `arm_ip`      | `bytes`   | Robotic arm IP address                  |
| `joint_status`| [rm_joint_status_t](../../struct/jointStatus/index.md)    | Robotic arm joint state structure |
| `force_sensor`| [rm_force_sensor_t](../../struct/forceSensor/index.md)    | Force sensor state structure  |
| `err`     | [rm_err_t](../../struct/err/index.md)         | Error code                                |
| `waypoint`    | [rm_pose_t](../../struct/pose/index.md)       | Current position and orientation structure     |
| `liftState`    | [rm_udp_lift_state_t](../../struct/udpLiftState/index.md)       | Lifting joint state     |
| `expandState`    | [rm_udp_expand_state_t](../../struct/udpExpandState/index.md)       | Expansion joint state     |
| `handState`    | [rm_udp_hand_state_t](../../struct/udpHandState/index.md)       | Dexterous hand state     |
| `arm_current_status`    | [rm_udp_arm_current_status_e](../../type/index.md)       | Current robotic arm state    |
| `aloha_state`    | [rm_udp_aloha_state_t](../../struct/udpAlohaState/index.md)       | State of the ALOHA master arm     |
| `rm_plus_state`    |   `int`     | End-effector device status: 0 - Device is online, 1 - Protocol is not enabled, 2 - Protocol is enabled but the device is not online   |
| `plus_base_info`    | [rm_plus_base_info_t](../../struct/rmPlusBaseInfo/index.md)       | Basic information of the end-effector device     |
| `plus_state_info`    | [rm_plus_state_info_t](../../struct/rmPlusStateInfo/index.md)       | Real-time information of the end-effector device     |

## Member function

```python
rm_realtime_arm_joint_state_t.to_dict(self,recurse = True)
```

Converts the structure to a dictionary.
