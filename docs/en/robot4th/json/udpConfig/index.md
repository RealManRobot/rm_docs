# <p class="hidden">JSON protocol: </p>UDP Active Reporting Command Set

## UDP active reporting

### UDP robotic arm state active reporting interface

The Gen 4 robotic arm provides the UDP robotic arm state active reporting interface. When using the interface, it must be in the same LAN as the robotic arm. By setting the target IP address of the configured active reporting interface, or establishing TCP connection between the interface and the robotic arm, the robotic arm will actively report the robotic arm state data periodically. The default target port is 8089 (configurable), and the data can be received by listening to the 8089 port of the local computer through the UDP protocol. The data period is configurable, which is 5 ms by default.

- **Input parameter**

The size of the joint-related array is consistent with the number of joints. For example, if there are 7 axes, the array size of the joint information fields, such as joint_status, is 7. Its parameters are as follows:

|   Parameter    |  Type    |   Description    |
|   :--     |   :--     |   :--     |
|`state`|`string`|realtime_arm_joint_state real-time robotic arm state reporting. |
|`arm_current_status`|`string`|"idle": enabled but in idle<br>"move_L": move L state<br> "move_J": in move J state<br>"move_C": move C state<br>"move_S": move S state<br>"move_through_joint": angle pass-through state<br>"move_through_pose": pose pass-through state<br>"move_through_force_pose": force control pass-through state<br>"move_through_current": current loop pass-through state <br>"stop": emergency stop state<br>"slow_stop": slow stop state<br>"pause": pause state<br>"current_drag": current loop drag state<br>"sensor_drag": 6-DoF force drag state<br>"tech_demonstration": Teaching state|
|`err`|`int`|System error code. |
|`joint_status`|`int`|Current joint state. |
|`joint_current`|`int`|Current joint current, with an accuracy of 0.001 mA. |
|`joint_en_flag`|`int`|Current joint enabling state, 1: enable, 0: disable. |
|`joint_err_code`|`int`|Current joint error code. |
|`joint_position`|`int`|Current joint angle, with an accuracy of 0.001°. |
|`joint_temperature`|`List[float]`|Current joint temperature, with an accuracy of 0.001°C. |
|`joint_voltage`|`int`|Current joint voltage, with an accuracy of 0.001 V. |
|`joint_speed`|`int`|Current joint speed, with an accuracy of 0.02 rpm. |
|`waypoint`|`object`|Current waypoint information. |
|`position`|`int`|Current waypoint position, with an accuracy of 0.000001 M. |
|`euler`|`object`|Current waypoint Euler angle, with an accuracy of 0.001 rad. |
|`quat`|`object`|Current waypoint quaternion, with an accuracy of 0.000001. |
|`six_force_sensor`|`object`|6-DoF force data (available only in 6-DoF force version). |
|`one_force_sensor`|`object`|1-DoF force data (available only in 1-DoF force version). |
|`force`|`object`|Original data of current force sensor, 0.001 N or 0.001 Nm. |
|`zero_force`|`object`|External force data of current force sensor system, 0.001 N or 0.001 Nm. |
|`coordinate`|`int`| Frame for system external force data, 0: sensor frame, 1: current work frame, 2: current tool frame. |
|`lift_state`|`int`|Lifting joint data. Including: <br>height: current lifting mechanism height, unit: mm, accuracy: 1 mm;<br>pos: current angle, accuracy: 0.001°;<br>current: current lifting driver current, unit: mA, accuracy: 1 mA;<br>err_flag: lifting driver error code. For the error code type, refer to the joint error code;<br>en_flag: current joint enabling state, 1: enable, 0: disable. <br>|
|`expand_state`|`int`|Expansion joint-related data. Including: <br>pos: current angle, accuracy: 0.001°;<br>current: current lifting driver current, unit: mA, accuracy: 1 mA;<br>err_flag: lifting driver error code. For the error code type, refer to the joint error code; en_flag: current joint enabling state, 1: enable, 0: disable. <br>mode: current lifting state, 0: idle, 1: forward speed motion, 2: forward position motion, 3: backward speed motion, 4: backward position motion. <br>joint_id: Expansion joint ID. |
|`aloha_state`|`int`|aloha master arm state. Including:<br>io1_state: IO1 state (photoelectrically detected with handle), 0: not triggered after pressing the key, 1:triggered after pressing the key;<br>io2_state: IO2 state (detected by pressing the handle key), 0: not triggered after pressing the key, 1:triggered after pressing the key. |
|`hand`|`int`|Dexterous hand state:<br>hand_pos, indicating the position of dexterous hand;<br>hand_angle, indicating the angle of dexterous hand;<br>hand_force, indicating the DoF force of dexterous hand, expressed in mN;<br>hand_state, indicating that DoF state of dexterous hand, with the state meanings defined by the dexterous hand manufacturer;<br>hand_err, indicating a dexterous hand system error, with the error meanings defined by the dexterous hand manufacturer. The specific meanings are as defined in the following table. |
|`rm_plus_state`|`object`|Real-time information of the end-effector device. Returns "disable" if the protocol is not enabled, and "offline" if the protocol is enabled but the device is not online. Including:<br>"sys_state": System status;<br>"sys_err": System error;<br>"dof_state": Current status of each degree of freedom (DoF);<br>"dof_err": Error information of each DoF;<br>"pos": Current position of each DoF;<br>"angle": Current angle of each DoF;<br>"current": Current of each DoF;<br>"force": Torque of each DoF;<br>"normal_force": Normal force of the tactile three-dimensional force of each DoF;<br>"tangential_force": Tangential force of the tactile three-dimensional force of each DoF;<br>"tangential_force_dir": Direction of the tangential force of the tactile three-dimensional force of each DoF;<br>"tsa": Tactile self-approach of each DoF;<br>"tma": Tactile mutual approach of each DoF;<br>"touch_data": Raw data from the tactile sensor.|
|`rm_plus_base`|`object`|Basic information of the end-effector device. Returns "disable" if the protocol is not enabled, and "offline" if the protocol is enabled but the device is not online. Including:<br>"manu": Device manufacturer;<br>"type": Device type, 1 - Two-finger gripper, 2 - Five-finger dexterous hand, 3 - Three-finger gripper;<br>"hv": Hardware version;<br>"sv": Software version;<br>"bv": Bootloader version;<br>"id": Device ID;<br>"dof": Degrees of freedom;<br>"check": Self-check switch;<br>"bee": Beeper switch;<br>"force": Force control support;<br>"touch": Tactile support;<br>"touch_num": Number of tactile sensors;<br>"touch_sw": Tactile switch;<br>"hand": Hand orientation, 1 - Left hand, 2 - Right hand;<br>"pos_up": Position upper limit;<br>"pos_low": Position lower limit;<br>"angle_up": Angle upper limit;<br>"angle_low": Angle lower limit;<br>"speed_up": Speed upper limit;<br>"speed_low": Speed lower limit;<br>"force_up": Force upper limit;<br>"force_low": Force lower limit.|

- **Definition of dexterous hand state**

OYMotion:

| Name of state             | State code | Description         |
| :-------------------- | :----- | :------------ |
| STATUS_OPENING       |      0 | Be opening     |
| STATUS_CLOSING       |      1 | Be closing     |
| STATUS_POS_REACHED   |      2 | Position reached |
| STATUS_OVER_CURRENT  |      3 | Overcurrent protection |
| STATUS_POS_REACHED   |      2 | Force reached |
| STATUS_STUCK         |      5 | Motor stuck |

INSPIRE-ROBOTS

| State code | Description |
| :--- | :--- |
| 0 | Be opening |
| 1 | Be closing  |
| 2 | Position reached |
| 3 | Force reached |
| 5 | Overcurrent protection |
| 6 | Electric cylinder stuck |
| 7 | Electric cylinder fault |

- **Code demo**

6-DoF UDP data reporting.

```json
{"rm_plus_state":{"angle":[0,0,0,0,0,0],"current":[0,0,0,0,0,0],"dof_err":[0,0,0,0,0,0],"dof_state":[0,0,0,0,0,0],"normal_force":[65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535],"pos":[0,0,0,0,0,0],"speed":[0,0,0,0,0,0],"sys_state":0,"sys_err":0,"tangential_force":[65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535],"tangential_force_dir":[65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535],"tma":[4294967295,4294967295,4294967295],"tsa":[4294967295,4294967295,4294967295,4294967295,4294967295,4294967295,4294967295,4294967295]},
"rm_plus_base":{"angle_low":[0,0,0,0,0,0],"angle_up":[5500,7000,7000,7000,7000,9000],"bee":0,"bv":1286,"check":0,"dof":6,"force":false,"force_low":[0,0,0,0,0,0],"force_up":[0,0,0,0,0,0],"hand":1,"hv":256,"id":1,"manu":"QN","pos_low":[0,0,0,0,0,0],"pos_up":[100,100,100,100,100,100],"speed_low":[0,0,0,0,0,0],"speed_up":[100,100,100,100,100,100],"sv":772,"touch":true,"touch_num":0,"touch_sw":0,"type":2},"aloha_state":{"io1_state":0,"io2_state":0},"arm_current_status":"idle","err":0,"joint_status":{"joint_current":[43000,2085000,1020000,1000,257000,-57000],"joint_en_flag":[1,1,1,1,1,1],"joint_err_code":[0,0,0,0,0,0],"joint_position":[13434,-69764,2926,-4742,-45721,-223],"joint_temperature":[33000,35000,37000,36000,37000,39000],"joint_voltage":[22000,22000,22000,22000,22000,22000]},"six_force_sensor":{"force":[-13000,3799,-22393,-216,-408,481],"zero_force":[17476,10415,30827,5,2,2],"coordinate":1},"state":"realtime_arm_joint_state","waypoint":{"euler":[2935,2935,2935],"position":[578568,127709,345856],"quat":[-23405,824245,106348,555663]}}
```

7-DoF UDP data reporting.

```json
{"rm_plus_state":{"angle":[0,0,0,0,0,0],"current":[0,0,0,0,0,0],"dof_err":[0,0,0,0,0,0],"dof_state":[0,0,0,0,0,0],"normal_force":[65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535],"pos":[0,0,0,0,0,0],"speed":[0,0,0,0,0,0],"sys_state":0,"sys_err":0,"tangential_force":[65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535],"tangential_force_dir":[65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535],"tma":[4294967295,4294967295,4294967295],"tsa":[4294967295,4294967295,4294967295,4294967295,4294967295,4294967295,4294967295,4294967295]},
"rm_plus_base":{"angle_low":[0,0,0,0,0,0],"angle_up":[5500,7000,7000,7000,7000,9000],"bee":0,"bv":"V7.1","check":0,"dof":6,"force":false,"force_low":[0,0,0,0,0,0],"force_up":[0,0,0,0,0,0],"hand":1,"hv":"V1.27","id":1,"manu":"QN","pos_low":[0,0,0,0,0,0],"pos_up":[100,100,100,100,100,100],"speed_low":[0,0,0,0,0,0],"speed_up":[100,100,100,100,100,100],"sv":"V3.0","touch":true,"touch_num":0,"touch_sw":0,"type":2},"aloha_state":{"io1_state":0,"io2_state":0},"arm_current_status":"idle","err":0,"joint_status":{"joint_current":[43000,2085000,1020000,1000,257000,-57000,1000],"joint_en_flag":[1,1,1,1,1,1,1],"joint_err_code":[0,0,0,0,0,0,0],"joint_position":[13434,-69764,2926,-4742,-45721,-223,-223],"joint_temperature":[33000,35000,37000,36000,37000,39000,37000],"joint_voltage":[22000,22000,22000,22000,22000,22000,22000]},"six_force_sensor":{"force":[-13000,3799,-22393,-216,-408,481],"zero_force":[17476,10415,30827,5,2,2],"coordinate":1},"state":"realtime_arm_joint_state","waypoint":{"euler":[2935,2935,2935],"position":[578568,127709,345856],"quat":[-23405,824245,106348,555663]}}
```

### Query the UDP robotic arm state active reporting configuration `get_realtime_push`

- **Input parameter**

|   Parameter    |  Type    |   Description    |
|   :--     |   :--     |   :--     |
|   `get_realtime_push`     |   `string`   |   Query the UDP robotic arm state active reporting configuration     |

- **Output parameter**

|   Parameter    |  Type    |   Description    |
|   :--     |   :--     |   :--     |
|`port`|`int`|Set the port No. of broadcast. |
|`cycle`|`int`|Set the broadcast cycle, unit: 5 ms. |
|`enable`|`bool`|Set the enabling state. |
|`force_coordinate`|`int`|Frame for external force data:<br>0: sensor frame <br>1: current work frame<br>2: current tool frame (supported by the force sensor version). |
|`ip`|`string`|Self-defined reporting target IP address. |
|`custom`|`object`| Including <br>joint_speed: joint speed; <br>lift_state: information of lifting joint; <br>expand_state: information of expansion joint; <br>arm_current_status: current joint state; <br>aloha_state: aloha master arm state; <br>hand: dexterous hand state; <br>rm_plus_base: Basic information of the end-effector device; <br>rm_plus_state: Real-time information of the end-effector device.|

- **Code demo**

**Input**

Used to query the UDP robotic arm state active reporting configuration.

```json
{"command":"get_realtime_push"}
```

**Output**

```json
{
    "command": "get_realtime_push",
    "custom": {
        "rm_plus_base":true,
        "rm_plus_state":true,
        "aloha_state": false,
        "expand_state": true,
        "joint_speed": true,
        "lift_state": true,
        "arm_current_status": true
    },
    "cycle": 100,
    "enable": true,
    "force_coordinate": 2,
    "ip": "192.168.1.10",
    "port": 8099
}
```

### Set the UDP robotic arm state active reporting configuration `set_realtime_push`

- **Input parameter**

|   Parameter    |  Type    |   Description    |
|   :--     |   :--     |   :--     |
|`set_realtime_push`|   `string`   |    Set the UDP robotic arm state active reporting configuration.     |
|`port`|`int`|Set the port No. of broadcast. |
|`cycle`|`int`|Set the broadcast cycle, unit: 5 ms. For example, 1 means 5 ms, 2 means 10 ms. |
|`enable`|`bool`|Set the enabling state. |
|`force_coordinate`|`int`|Frame for external force data, 0: sensor frame; 1: current work frame; 2: current tool frame (supported by the force sensor version). |
|`ip`|`string`|Self-defined reporting target IP address. |
|`custom`|`object`| Customized items, the following options are not mandatory, if not set, they will remain the state before setting. Including: <br>joint_speed: joint speed;<br>lift_state: information of lifting joint;<br>expand_state: information of expansion joint (select one from lifting joint and expansion joint, with the lifting joint displayed first);<br>arm_current_status: current robotic arm state;<br>aloha_state: aloha master arm state;<br>hand: dexterous hand state;<br>rm_plus_base: Reports the basic information of the end-effector device;<br>rm_plus_state: Reports the real-time information of the end-effector device.|

::: warning
For the hand field, the following data have real meanings only when the [hand_follow_angle](../../json/endTool/index.md#set-the-angle-follow-control-of-the-dexterous-hand-hand_follow_angle) and [hand_follow_pos](../../json/endTool/index.md#set-the-position-follow-control-of-the-dexterous-hand-hand_follow_pos) interfaces are called, with the sequence of bending of the thumb, and rotation of the index finger, middle finger, ring finger, little finger and thumb.

1. hand_pos, indicating the position of dexterous hand
2. hand_angle, indicating the angle of dexterous hand
3. hand_force, indicating the DoF force of dexterous hand, unit: mN
4. hand_state, indicating the DoF state of dexterous hand, with the state meanings defined by the dexterous hand manufacturer
5. hand_err, indicating the dexterous hand system error, with the error meanings defined by the dexterous hand manufacturer. For example, the INSPIRE-ROBOTS state codes are as follows: 1: error, 0: no error
:::

- **Output parameter**

|   Parameter    |  Type    |   Description    |
|   :--     |   :--     |   :--     |
|`set_realtime_push`|`bool`|`true`: success, `false`: failure. |

- **Code demo**

**Input**

Used to set the UDP robotic arm state active reporting configuration

```json
{"command":"set_realtime_push","cycle":100,"enable":true,"port":8099,"force_coordinate":2,"ip":"192.168.1.223","custom":{"aloha_state":true,"joint_speed":true,"lift_state":true,"expand_state":true,"arm_current_status":true,"hand":true,"rm_plus_base":false, "rm_plus_state":false}}
```

**Return demo:**

```json
{
    "command": "set_realtime_push",
    "state": true
}
```
