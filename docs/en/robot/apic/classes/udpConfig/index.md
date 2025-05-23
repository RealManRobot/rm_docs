# <p class="hidden">C and C++: </p>UDP Active Reporting Configuration `UdpConfig`

The RealMan robotic arm provides a UDP interface for actively reporting the robotic arm state. During use, the robotic arm must be in the same local network. By configuring the target IP address for active reporting or establishing a TCP connection with the robotic arm, the robotic arm will actively and periodically report its state data. The reporting interval is configurable, which is 5 ms by default. After correct configuration, the actively reported data can be received and processed by registering the callback function in the three-thread mode.

## Set the UDP robotic arm state active reporting configuration `rm_set_realtime_push()`

- **Method prototype:**

```C
int rm_set_realtime_push(rm_robot_handle * handle,rm_realtime_push_config_t config)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_realtime_push_config_t](../../struct/realtimePushConfig/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `config`  |    Input    |    UDP configuration structure.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
// Enable the UDP active reporting interface, with a cycle of 500 ms. The frame for the force data outside the system is the sensor frame
// Report the target IP address "192.168.1.108" and the broadcasting port number 8089
rm_realtime_push_config_t config;
config.cycle = 100;
config.enable = true;
config.force_coordinate = 0;
config.port = 8089;
strcpy(config.ip, "192.168.1.108");
config.custom_config.expand_state = 0;
config.custom_config.joint_speed = 1;
config.custom_config.lift_state = 1;
int ret = rm_set_realtime_push(robot_handle, config);
printf("rm_set_realtime_push result %d\n",ret);
```

## Query the UDP robotic arm state active reporting configuration `rm_get_realtime_push()`

- **Method prototype:**

```C
int rm_get_realtime_push(rm_robot_handle * handle,rm_realtime_push_config_t * config)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_realtime_push_config_t](../../struct/realtimePushConfig/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|   `config`  |    Output    |    UDP robotic arm state active reporting configuration obtained.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
rm_realtime_push_config_t gconfig;
ret = rm_get_realtime_push(robot_handle, &gconfig);
printf("realtime config result:d%\n ip:%s\n",ret, gconfig.ip);
```

## Register UDP robotic arm state active reporting information callback  function `rm_realtime_arm_state_call_back()`

- **Method prototype:**

```C
void rm_realtime_arm_state_call_back(rm_realtime_arm_state_callback_ptr realtime_callback)
```

*Here the robotic arm event callback function `rm_realtime_arm_state_callback_ptr` is used. <br>Method prototype: `typedef void(* rm_realtime_arm_state_callback_ptr) (rm_realtime_arm_joint_state_t data)`. <br>Jump to [rm_realtime_arm_joint_state_t](../../struct/realtimeArmJointState/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |   Value    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    User-defined    |    Robotic arm control handle.   |
|   `realtime_callback`  |    User-defined    |    Robotic arm state information callback function.   |

- **Usage demo**
  
```C
// Robotic arm real-time state callback function
void callback_rm_realtime_arm_joint_state(rm_realtime_arm_joint_state_t state) {  
    // Check data parsing error code  
    if (state.errCode == -3) {  
        printf("Data parsing error: Data incomplete or format incorrect\n");  
    }  
  
    // Print the IP address of robotic arm  
    printf("Arm IP: %s\n", state.arm_ip);  
  
    // Check the robotic arm error code  
    if (state.arm_err != 0) {  
        printf("Arm Error Code: %u\n", state.arm_err);  
    }  
  
    // Traverse and print joint state  
    for (int i = 0; i < ARM_DOF; ++i) {  
        printf("Joint %d Current: %.3f mA, Enabled: %s, Error Code: %u, Position: %.3f°, Temperature: %.3f°C, Voltage: %.3f V\n",  
               i, state.joint_status.joint_current[i], state.joint_status.joint_en_flag[i] ? "true" : "false",  
               state.joint_status.joint_err_code[i], state.joint_status.joint_position[i],  
               state.joint_status.joint_temperature[i], state.joint_status.joint_voltage[i]);  
    }  
  
    // Print force sensor data (a force sensor is required at the end)  
    printf("Force Sensor Raw: [%.3f, %.3f, %.3f, %.3f, %.3f, %.3f] N/Nm\n",  
        state.force_sensor.force[0], state.force_sensor.force[1], state.force_sensor.force[2],  
        state.force_sensor.force[3], state.force_sensor.force[4], state.force_sensor.force[5]);  
    printf("Zero Force: [%.3f, %.3f, %.3f, %.3f, %.3f, %.3f] N/Nm\n",  
        state.force_sensor.zero_force[0], state.force_sensor.zero_force[1], state.force_sensor.zero_force[2],  
        state.force_sensor.zero_force[3], state.force_sensor.zero_force[4], state.force_sensor.zero_force[5]);  
    printf("Force Coordinate System: %d\n", state.force_sensor.coordinate);  

    // Print system error code  
    if (state.sys_err != 0) {  
        printf("System Error Code: %u\n", state.sys_err);  
    }  
  
    // Print current waypoint information  
    printf("Current Waypoint Position: (%.3f, %.3f, %.3f) m\n",  
           state.waypoint.position.x, state.waypoint.position.y, state.waypoint.position.z);  
    printf("Quaternion: (%.3f, %.3f, %.3f, %.3f)\n",  
           state.waypoint.quaternion.w, state.waypoint.quaternion.x, state.waypoint.quaternion.y, state.waypoint.quaternion.z);  
    printf("Euler Angles: (%.3f, %.3f, %.3f) rad\n",  
           state.waypoint.euler.rx, state.waypoint.euler.ry, state.waypoint.euler.rz);  
} 

// Register robotic arm real-time state callback function
rm_realtime_arm_state_call_back(callback_rm_realtime_arm_joint_state);
```
